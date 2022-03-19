package io.github.gotchamana.ec9.converter;

import java.io.IOException;
import java.util.Optional;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.deser.std.StdDeserializer;

public class StringTrimmerDeserializer extends StdDeserializer<String> {

    protected StringTrimmerDeserializer() {
        super(String.class);
    }

    @Override
    public String deserialize(JsonParser p, DeserializationContext context) throws IOException {
        return Optional.ofNullable(p.getText())
            .map(String::trim)
            .orElse(null);
    }
}
