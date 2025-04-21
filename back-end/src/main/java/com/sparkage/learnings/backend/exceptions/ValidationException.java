package com.sparkage.learnings.backend.exceptions;

public class ValidationException extends Throwable {
    public ValidationException(String usernameOrEmailAlreadyExists) {
        super(usernameOrEmailAlreadyExists);
    }
}
