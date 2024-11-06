package com.example.Order_Service.Controller;

import com.example.Order_Service.Model.Order;
import com.example.Order_Service.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;

    // Create a new order
    @PostMapping("/orders")
    public ResponseEntity<Order> placeOrder(@RequestBody Order order) {
        Order createdOrder = orderService.placeOrder(order);
        return ResponseEntity.ok(createdOrder);
    }

    // Get order by ID
    @GetMapping("/orders/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Integer id) {
        Optional<Order> order = orderService.getOrderById(id);
        return order.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Get orders by buyer ID
    @GetMapping("/buyers/{buyerId}")
    public ResponseEntity<List<Order>> getOrdersByBuyerId(@PathVariable Integer buyerId) {
        List<Order> orders = orderService.getOrdersByBuyerId(buyerId);
        return ResponseEntity.ok(orders);
    }

    // Get orders by freelancer ID
    @GetMapping("/freelancers/{freelancerId}")
    public ResponseEntity<List<Order>> getOrdersByFreelancerId(@PathVariable Integer freelancerId) {
        List<Order> orders = orderService.getOrdersByFreelancerId(freelancerId);
        return ResponseEntity.ok(orders);
    }

    // Update order status
    @PutMapping("/orders/{id}")
    public ResponseEntity<Order> updateOrderStatus(@PathVariable Integer id, @RequestParam String status) {
        Order updatedOrder = orderService.updateOrderStatus(id, status);
        return ResponseEntity.ok(updatedOrder);
    }

    // Cancel an order
    @DeleteMapping("/orders/{id}")
    public ResponseEntity<Void> cancelOrder(@PathVariable Integer id) {
        orderService.cancelOrder(id);
        return ResponseEntity.noContent().build();
    }
}