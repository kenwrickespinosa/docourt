package com.kenwrick.case_manager_server.legalcase;

import org.springframework.stereotype.Component;

@Component
public class LegalcaseMapper {
    public LegalcaseDTO legalcaseToDto(Legalcase legalcase) {
        LegalcaseDTO legalcaseDto = new LegalcaseDTO();
        legalcaseDto.setTitle(legalcase.getTitle());
        legalcaseDto.setDescription(legalcase.getDescription());
        legalcaseDto.setCaseNumber(legalcase.getCaseNumber());
        legalcaseDto.setCourt(legalcase.getCourt());
        legalcaseDto.setStatus(legalcase.getStatus());
        return legalcaseDto;
    }

    public Legalcase DtoToLegalcase(LegalcaseDTO legalcaseDto) {
        Legalcase legalcase = new Legalcase();
        legalcase.setTitle(legalcaseDto.getTitle());
        legalcase.setDescription(legalcaseDto.getDescription());
        legalcase.setCaseNumber(legalcaseDto.getCaseNumber());
        legalcase.setCourt(legalcaseDto.getCourt());
        legalcase.setStatus(legalcaseDto.getStatus());
        return legalcase;
    }
}
