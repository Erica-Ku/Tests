package com.example.demo.controller;

import java.util.Arrays;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.domain.Post;

@RestController
public class PostController {
	
	@GetMapping("/api/posts")
	public List<Post> getAllPosts() {
		Post post1 = new Post(1L, "첫번째 포스트", "첫번째 포스트 내용입니다.");
		Post post2 = new Post(2L, "두번째 포스트", "두번째 포스트 내용입니다.");
		Post post3 = new Post(3L, "세번째 포스트", "세번째 포스트 내용입니다.");
		
		return Arrays.asList(post1, post2, post3);
	}
}