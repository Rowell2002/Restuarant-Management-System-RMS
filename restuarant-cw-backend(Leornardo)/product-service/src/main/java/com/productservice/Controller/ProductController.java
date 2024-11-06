package com.productservice.Controller;

import com.productservice.Model.Product;
import com.productservice.Model.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@RestController
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    // Get all products
    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Get product by ID
    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Integer id) {
        Optional<Product> product = productRepository.findById(id);
        if (product.isPresent()) {
            return ResponseEntity.ok(product.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Add a new product with image
    @PostMapping("/products")
    public ResponseEntity<String> createProduct(
            @RequestBody ProductRequest productRequest,
            @RequestParam(value = "productImage", required = false) MultipartFile productImage) {

        try {
            Product product = new Product();
            product.setProductName(productRequest.getProductName());
            product.setProductPrice(productRequest.getProductPrice());
            product.setProductQty(productRequest.getProductQty());

            if (productImage != null && !productImage.isEmpty()) {
                // Handle image file
                byte[] imageBytes = productImage.getBytes();
                product.setProductImage(imageBytes);
            }

            product.setCreatedAt(new Timestamp(System.currentTimeMillis()));
            product.setUpdatedAt(new Timestamp(System.currentTimeMillis()));

            productRepository.save(product);

            return ResponseEntity.ok("Product added successfully!");
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to process image file");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add product");
        }
    }


    // Update an existing product
    @PutMapping("/products/{id}")
    public ResponseEntity<Product> updateProduct(
            @PathVariable Integer id,
            @RequestParam("productName") String productName,
            @RequestParam("productPrice") BigDecimal productPrice,
            @RequestParam("productQty") Integer productQty,
            @RequestPart(value = "productImage", required = false) MultipartFile productImage) {

        Optional<Product> productOptional = productRepository.findById(id);
        if (productOptional.isPresent()) {
            Product product = productOptional.get();
            product.setProductName(productName);
            product.setProductPrice(productPrice);
            product.setProductQty(productQty);

            if (productImage != null && !productImage.isEmpty()) {
                try {
                    // Handle image file
                    byte[] imageBytes = productImage.getBytes();
                    product.setProductImage(imageBytes);
                } catch (IOException e) {
                    return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
                }
            }

            product.setUpdatedAt(new Timestamp(System.currentTimeMillis()));

            return ResponseEntity.ok(productRepository.save(product));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a product
    @DeleteMapping("/products/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Integer id) {
        Optional<Product> product = productRepository.findById(id);
        if (product.isPresent()) {
            productRepository.delete(product.get());
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Get products by name
    @GetMapping("/products/search")
    public List<Product> getProductsByName(@RequestParam String name) {
        return productRepository.findByProductName(name);
    }
}
