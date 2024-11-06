package com.example.User_Service.Controller;

import com.example.User_Service.Model.LoginRequest;
import com.example.User_Service.Model.User;
import com.example.User_Service.Service.UserService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController

public class UserController {

    @Autowired
    private UserService userService;

    // Get all users
    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userService.getAllUsers();
        return ResponseEntity.ok(users);
    }

    // Get user by ID
    @GetMapping("/users/{userId}")
    public ResponseEntity<User> getUserById(@PathVariable("userId") int userId) {
        User user = userService.getUserById(userId);
        return user != null ? ResponseEntity.ok(user) : ResponseEntity.notFound().build();
    }

    // Register a new user
    @PostMapping("/users/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        User registeredUser = userService.registerUser(user);
        return new ResponseEntity<>(registeredUser, HttpStatus.CREATED);
    }

    // Login a user
    @PostMapping("/users/login")
    public ResponseEntity<User> loginUser(@RequestBody LoginRequest loginRequest) {
        User authenticatedUser = userService.authenticateUser(loginRequest.getEmail(), loginRequest.getPassword());
        return authenticatedUser != null ? ResponseEntity.ok(authenticatedUser) : ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }

    // Update user profile
    @PutMapping("/users/{userId}")
    public ResponseEntity<User> updateUserProfile(@PathVariable("userId") int userId, @RequestBody User updatedUser) {
        User user = userService.updateUser(userId, updatedUser);
        return user != null ? ResponseEntity.ok(user) : ResponseEntity.notFound().build();
    }

    // Delete a user
    @DeleteMapping("/users/{userId}")
    public ResponseEntity<Void> deleteUser(@PathVariable("userId") int userId) {
        boolean isDeleted = userService.deleteUser(userId);
        return isDeleted ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }

    // Update user role
    @PutMapping("/users/{userId}/role")
    public ResponseEntity<User> updateUserRole(@PathVariable("userId") int userId, @RequestBody Map<String, String> requestBody) {
        String newRole = requestBody.get("role");
        if (newRole == null || newRole.isEmpty()) {
            return ResponseEntity.badRequest().body(null);
        }

        try {
            User updatedUser = userService.updateUserRole(userId, newRole);
            return ResponseEntity.ok(updatedUser);
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
