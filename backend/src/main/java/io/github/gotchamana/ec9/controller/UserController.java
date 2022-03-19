package io.github.gotchamana.ec9.controller;

import java.util.*;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

import org.modelmapper.ModelMapper;
import org.modelmapper.Module;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.validation.*;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import io.github.gotchamana.ec9.converter.StringTrimmerDeserializer;
import io.github.gotchamana.ec9.entity.User;
import io.github.gotchamana.ec9.repository.UserRepository;
import io.github.gotchamana.ec9.service.UserService;
import io.github.gotchamana.ec9.util.APICode;
import lombok.*;
import lombok.extern.log4j.Log4j2;

@RestController
@RequestMapping("/api/v1")
@Log4j2
public class UserController {

    private final ModelMapper modelMapper;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserService userService;

    public UserController() {
        this.modelMapper = new ModelMapper();
        this.modelMapper.registerModule(new MappingModule());
    }

    @InitBinder("registerUser")
    public void init(WebDataBinder binder) {
        binder.addValidators(new RegisterUserValidator(userRepository));
    }

    @PostMapping(value = "/register", consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, List<APICode>>> register(@Valid @RequestBody RegisterUser registerUser,
        BindingResult bindingResult) {

        log.debug("{}: {}", RegisterUser.class.getSimpleName(), registerUser);

        if (bindingResult.hasErrors()) {
            log.warn("{} binding errors: {}", RegisterUser.class.getSimpleName(), bindingResult.getAllErrors());

            var codes = bindingResult.getAllErrors()
                .stream()
                .map(ObjectError::getDefaultMessage)
                .filter(APICode::isValidCode)
                .map(APICode::fromCode)
                .toList();

            return ResponseEntity.badRequest().body(Map.of("message", codes));
        }

        userService.save(modelMapper.map(registerUser, User.class));

        return ResponseEntity.noContent().build();
    }

    public static class MappingModule implements Module {

        @Override
        public void setupModule(ModelMapper modelMapper) {
            modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

            modelMapper.createTypeMap(RegisterUser.class, User.class)
                .addMapping(RegisterUser::getPsd, User::setPassword);
        }
    }

    private static class RegisterUserValidator implements Validator {

        private final UserRepository userRepository;

        public RegisterUserValidator(UserRepository userRepository) {
            this.userRepository = userRepository;
        }

        @Override
        public boolean supports(Class<?> clazz) {
            return RegisterUser.class.isAssignableFrom(clazz);
        }

        @Override
        public void validate(Object target, Errors errors) {
            var user = (RegisterUser) target;

            checkAccount(user.getAccount(), errors);
            checkPassword(user.getPsd(), errors);
        }

        private void checkAccount(String account, Errors errors) {
            if (account == null || account.isBlank())
                return;

            if (userRepository.existsByAccount(account))
                errors.rejectValue("account", "NotExistent", APICode.DUPLICATE_ACCOUNT_CODE + "");
        }

        private void checkPassword(String password, Errors errors) {
            if (password == null || password.isBlank())
                return;

            if (!isValidPassword(password))
                errors.rejectValue("psd", "Valid", APICode.INVALID_PASSWORD_CODE + "");
        }

        private boolean isValidPassword(String password) {
            if (password.length() < 8)
                return false;

            var rlt = password.chars()
                .map(ch -> {
                    if (isAsciiLetter((char) ch))
                        return 2;

                    if (isAsciiDigit((char) ch))
                        return 4;

                    return 1;
                })
                .reduce(0, (i1, i2) -> i1 | i2);

            return (rlt & 1) == 0 && (rlt >> 1) == 3;
        }

        private boolean isAsciiLetter(char ch) {
            return (ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z');
        }

        private boolean isAsciiDigit(char ch) {
            return ch >= '0' && ch <= '9';
        }
    }

    @Data
    public static class RegisterUser {

        @NotBlank(message = APICode.BLANK_FIELD_CODE + "")
        @JsonDeserialize(using = StringTrimmerDeserializer.class)
        private String name;

        @NotBlank(message = APICode.BLANK_FIELD_CODE + "")
        @JsonDeserialize(using = StringTrimmerDeserializer.class)
        private String account;

        @ToString.Exclude
        @NotBlank(message = APICode.BLANK_FIELD_CODE + "")
        private String psd;
    }
}
