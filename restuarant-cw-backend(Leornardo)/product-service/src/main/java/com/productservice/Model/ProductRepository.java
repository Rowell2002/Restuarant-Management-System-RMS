package com.productservice.Model;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {
    // Custom query methods can be added here if needed
    List<Product> findByProductName(String productName);

    List<Product> findByProductQtyGreaterThan(Integer quantity);

    List<Product> findByProductPriceBetween(BigDecimal minPrice, BigDecimal maxPrice);
}
