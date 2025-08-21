package com.kenwrick.case_manager_server.userlegalcase;

import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kenwrick.case_manager_server.legalcase.Legalcase;
import com.kenwrick.case_manager_server.user.User;
import com.kenwrick.case_manager_server.user.UserService;

@RestController
@RequestMapping("/api/user-legalcases")
public class UserLegalcaseController {
    private UserLegalcaseService userLegalcaseService;
    private UserService userService;

    public UserLegalcaseController(UserLegalcaseService userLegalcaseService, UserService userService) {
        this.userLegalcaseService = userLegalcaseService;
        this.userService = userService;
    }

    @PostMapping("/create")
    public ResponseEntity<Legalcase> createLegalcaseWithCreator(
        @RequestBody Legalcase legalcase,
        Authentication authentication) {
            String username = authentication.getName();
            User user = userService.findByUsername(username)
            .orElseThrow(() -> new RuntimeException("User not found"));
            Legalcase createdCase = userLegalcaseService.createLegalcaseWithCreator(legalcase, user.getId());
            return ResponseEntity.ok(createdCase);
    }
}
