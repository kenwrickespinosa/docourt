package com.kenwrick.case_manager_server.legalcase;

import java.time.Instant;
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
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Legalcase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "legalcase_id")
    private Long caseId;
    
    private String title;
    private String description;
    private String caseNumber;
    private String court;
    private String status;

    @Column(name = "created_at")
    private Instant createdAt = Instant.now();
    @Column(name = "updated_at")
    private Instant updatedAt = Instant.now();

    @OneToMany(mappedBy = "legalcase")
    private List<UserLegalcase> userLegalcases = new ArrayList<>();
}
