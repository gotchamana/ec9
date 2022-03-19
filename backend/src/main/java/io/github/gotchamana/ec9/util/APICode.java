package io.github.gotchamana.ec9.util;

import java.util.Arrays;

import com.fasterxml.jackson.annotation.JsonValue;

import lombok.Getter;

public enum APICode {

    BLANK_FIELD(APICode.BLANK_FIELD_CODE),

    DUPLICATE_ACCOUNT(APICode.DUPLICATE_ACCOUNT_CODE),

    INVALID_PASSWORD(APICode.INVALID_PASSWORD_CODE),

    WRONG_ACCOUNT_OR_PASSWORD(APICode.WRONG_ACCOUNT_OR_PASSWORD_CODE);

    public static final int BLANK_FIELD_CODE = 1000;
    public static final int DUPLICATE_ACCOUNT_CODE = 1001;
    public static final int INVALID_PASSWORD_CODE = 1002;
    public static final int WRONG_ACCOUNT_OR_PASSWORD_CODE = 1003;

    @Getter
    @JsonValue
    private final int code;

    APICode(int code) {
        this.code = code;
    }

    public static boolean isValidCode(String str) {
        if (str == null)
            return false;

        return Arrays.stream(values())
            .map(code -> Integer.toString(code.getCode()))
            .anyMatch(str::equals);
    }

    public static APICode fromCode(String code) {
        try {
            var c = Integer.valueOf(code);

            return Arrays.stream(values())
                .filter(cc -> cc.getCode() == c)
                .findFirst()
                .orElseThrow();
        } catch (RuntimeException e) {
            throw new IllegalArgumentException("Invalid code: " + code);
        }
    }
}
