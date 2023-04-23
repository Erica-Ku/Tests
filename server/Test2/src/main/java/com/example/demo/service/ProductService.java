package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.example.demo.domain.Product;
import com.example.demo.persistence.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository productRepo;
	
	public List<Product> getAllProducts() {
	    return productRepo.findAll();
	}

	public Product getProductById(Long id) {
	    return productRepo.findById(id)
	            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
	}

	public Product createProduct(Product product) {
	    return productRepo.save(product);
	}

	public Product updateProduct(Long id, Product product) {
	    Product existingProduct = getProductById(id);
	    existingProduct.setName(product.getName());
	    existingProduct.setDescription(product.getDescription());
	    existingProduct.setPrice(product.getPrice());
	    existingProduct.setImage(product.getImage());
	    return productRepo.save(existingProduct);
	}

	public void deleteProduct(Long id) {
	    productRepo.deleteById(id);
	}
}