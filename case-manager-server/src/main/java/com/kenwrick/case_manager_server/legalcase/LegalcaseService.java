package com.kenwrick.case_manager_server.legalcase;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class LegalcaseService {
    private LegalcaseRepository legalcaseRepository;

    public LegalcaseService(LegalcaseRepository legalcaseRepository) {
        this.legalcaseRepository = legalcaseRepository;
    }

    public Legalcase createCase(Legalcase legalCase) {
        return legalcaseRepository.save(legalCase);
    }

    public List<Legalcase> getAllLegalcase() {
        return legalcaseRepository.findAll();
    }
}
