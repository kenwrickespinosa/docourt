package com.kenwrick.case_manager_server.user;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.kenwrick.case_manager_server.userlegalcase.UserLegalcase;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    private String username;
    private String firstname;
    private String lastname;
    private LocalDate birthdate;
    private String password;

    @OneToMany(mappedBy = "user")
    @Builder.Default
    private List<UserLegalcase> userLegalcases = new ArrayList<>();
}
