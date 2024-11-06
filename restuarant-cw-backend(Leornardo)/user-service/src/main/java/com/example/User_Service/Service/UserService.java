package com.example.User_Service.Service;

import com.example.User_Service.Model.User;
import com.example.User_Service.Model.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(int userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found with ID: " + userId));
    }

    public User registerUser(User user) {
        // Set timestamps for createdAt and updatedAt
        Timestamp currentTimestamp = new Timestamp(System.currentTimeMillis());
        user.setCreatedAt(currentTimestamp);
        user.setUpdatedAt(currentTimestamp);

        // Save the user to the database
        return userRepository.save(user);
    }

    public User authenticateUser(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password)
                .orElse(null);
    }

    public User updateUser(int userId, User updatedUser) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found with ID: " + userId));

        // Update user fields
        user.setFirstName(updatedUser.getFirstName());
        user.setLastName(updatedUser.getLastName());
        user.setEmail(updatedUser.getEmail());
        user.setContactNumber(updatedUser.getContactNumber());
        user.setAddress(updatedUser.getAddress());
        user.setUsername(updatedUser.getUsername());
        user.setPassword(updatedUser.getPassword());
        user.setUpdatedAt(new Timestamp(System.currentTimeMillis())); // Update timestamp

        return userRepository.save(user);
    }

    public User updateUserRole(int userId, String newRole) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found with ID: " + userId));

        user.setRole(newRole);
        return userRepository.save(user);
    }

    public boolean deleteUser(int userId) {
        if (userRepository.existsById(userId)) {
            userRepository.deleteById(userId);
            return true;
        }
        return false;
    }
}
