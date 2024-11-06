package com.productservice.Service;

import com.productservice.Model.Product;
import com.productservice.Model.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // Fetch all products
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // Fetch product by ID
    public Optional<Product> getProductById(Integer id) {
        return productRepository.findById(id);
    }

    // Add a new product
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    // Update an existing product by ID
    public Optional<Product> updateProduct(Integer id, Product productDetails) {
        return productRepository.findById(id).map(product -> {
            product.setProductName(productDetails.getProductName());
            product.setProductPrice(productDetails.getProductPrice());
            product.setProductQty(productDetails.getProductQty());
            product.setProductImage(productDetails.getProductImage());
            return productRepository.save(product);
        });
    }

    // Delete a product by ID
    public boolean deleteProduct(Integer id) {
        return productRepository.findById(id).map(product -> {
            productRepository.delete(product);
            return true;
        }).orElse(false);
    }

    // Find products by name
    public List<Product> getProductsByName(String name) {
        return productRepository.findByProductName(name);
    }

    // Find products with quantity greater than a specified value
    public List<Product> getProductsByQuantityGreaterThan(Integer minQty) {
        return productRepository.findByProductQtyGreaterThan(minQty);
    }

    // Find products within a price range
    public List<Product> getProductsByPriceRange(BigDecimal minPrice, BigDecimal maxPrice) {
        return productRepository.findByProductPriceBetween(minPrice, maxPrice);
    }
}
