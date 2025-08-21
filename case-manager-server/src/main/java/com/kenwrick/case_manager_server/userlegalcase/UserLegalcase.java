package com.kenwrick.case_manager_server.userlegalcase;

import java.time.Instant;

import com.kenwrick.case_manager_server.legalcase.Legalcase;
import com.kenwrick.case_manager_server.user.User;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Table(name = "user_legalcase")
public class UserLegalcase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userlegalcase_id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "legalcase_id")
    private Legalcase legalcase;

    private String role;  // creator, helper, pending (request to help) 
    private String status;  // in_progress, done
    private Instant assignedAt = Instant.now();
}
