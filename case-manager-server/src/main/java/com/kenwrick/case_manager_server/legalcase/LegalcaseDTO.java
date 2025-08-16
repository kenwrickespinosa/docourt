package com.kenwrick.case_manager_server.legalcase;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class LegalcaseDTO {
    private String title;
    private String description;
    private String caseNumber;
    private String court;
    private String status;
}
