package org.AndrePerezGarza.API.Project.delivery.Entity.Builders;


import lombok.Data;

import java.time.LocalDateTime;
import java.util.Map;

@Data
public class ErrorResponse {

    private final LocalDateTime timestamp = LocalDateTime.now();
    private int status;
    private Map<String, String> errors;
    private String route;
}
