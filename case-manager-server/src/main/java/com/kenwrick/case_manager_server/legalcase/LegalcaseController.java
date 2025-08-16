package com.kenwrick.case_manager_server.legalcase;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/legalcase")
public class LegalcaseController {
    private LegalcaseService legalcaseService;
    private LegalcaseMapper legalcaseMapper;

    public LegalcaseController(LegalcaseService legalcaseService, LegalcaseMapper legalcaseMapper) {
        this.legalcaseService = legalcaseService;
        this.legalcaseMapper = legalcaseMapper;
    }

    @GetMapping
    public List<LegalcaseDTO> getAllLegalcase() {
        List<Legalcase> legalcases = legalcaseService.getAllLegalcase();
        List<LegalcaseDTO> legalcaseDtos = new ArrayList<>();
        for (Legalcase legalcase : legalcases) {
            legalcaseDtos.add(legalcaseMapper.legalcaseToDto(legalcase));
        }
        return legalcaseDtos;
    }

    @PostMapping
    public ResponseEntity<LegalcaseDTO> createLegalcase(@RequestBody LegalcaseDTO legalcaseDto) {
        Legalcase legalcase = legalcaseMapper.DtoToLegalcase(legalcaseDto);
        Legalcase createdLegalcase = legalcaseService.createCase(legalcase);
        LegalcaseDTO createdLegalcaseDto = legalcaseMapper.legalcaseToDto(createdLegalcase);
        URI location = URI.create("/api/legalcase/" + createdLegalcase.getCaseId());
        return ResponseEntity.created(location).body(createdLegalcaseDto);
    }
}
