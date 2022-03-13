package io.github.gotchamana.ec9.util;

import lombok.Getter;

public enum APICode {

    WRONG_ACCOUNT_OR_PASSWORD(1003);

    @Getter
    private final int code;

    APICode(int code) {
        this.code = code;
    }
}
