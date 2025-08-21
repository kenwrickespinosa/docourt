package com.kenwrick.case_manager_server.userlegalcase;

import org.springframework.stereotype.Service;

import com.kenwrick.case_manager_server.legalcase.Legalcase;
import com.kenwrick.case_manager_server.legalcase.LegalcaseRepository;
import com.kenwrick.case_manager_server.user.User;
import com.kenwrick.case_manager_server.user.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class UserLegalcaseService {
    private UserRepository userRepository;
    private LegalcaseRepository legalcaseRepository;
    private UserLegalcaseRepository userLegalcaseRepository;

    public UserLegalcaseService(UserRepository userRepository,
                                LegalcaseRepository legalcaseRepository,
                                UserLegalcaseRepository userLegalcaseRepository) {
            this.userRepository = userRepository;
            this.legalcaseRepository = legalcaseRepository;
            this.userLegalcaseRepository = userLegalcaseRepository;
        }

    @Transactional
    public Legalcase createLegalcaseWithCreator(Legalcase legalcase, Long userId) {
        // Save the new case
        Legalcase savedCase = legalcaseRepository.save(legalcase);
        // Find the user
        User user = userRepository.findById(userId)
        .orElseThrow(() -> new RuntimeException("User not found"));
        // Create link between user and legalcase
        UserLegalcase ulc = new UserLegalcase();
        ulc.setUser(user);
        ulc.setLegalcase(legalcase);
        ulc.setRole("creator");
        ulc.setStatus("in_progress");
        
        userLegalcaseRepository.save(ulc);
        return savedCase;
    }
}
