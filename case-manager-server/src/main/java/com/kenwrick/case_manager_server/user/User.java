package com.kenwrick.case_manager_server.user;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import com.kenwrick.case_manager_server.legalcase.Legalcase;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
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

    @ManyToMany
    @JoinTable(
        name = "user_legalcase",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "legalcase_id")
    )
    @Builder.Default
    private List<Legalcase> legalcases = new ArrayList<>();
}
