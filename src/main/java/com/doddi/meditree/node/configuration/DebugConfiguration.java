package com.doddi.meditree.node.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.lang.NonNull;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
// @Profile("debug")
public class DebugConfiguration implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(@NonNull CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000") // or "*" to allow all origins
                .allowedMethods("GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS") // or "*" to allow all methods
                .allowedHeaders("*") // allow all headers
                .allowCredentials(true);
    }
}