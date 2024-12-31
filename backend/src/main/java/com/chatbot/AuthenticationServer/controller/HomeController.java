package com.chatbot.AuthenticationServer.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "Ana Sayfa - Herkes erişebilir";
    }

    @GetMapping("/secure")
    public Map<String, Object> secure(@AuthenticationPrincipal OidcUser principal) {
        return Map.of(
            "message", "Güvenli Endpoint - Sadece kimlik doğrulaması yapılmış kullanıcılar erişebilir",
            "userInfo", principal.getClaims()
        );
    }
} 