package com.example.demo.domain;

public class Post {
	
	private Long id;
	private String title;
	private String content;
	
	public Post(Long id, String title, String content) {
		this.id = id;
		this.title = title;
		this.content = content;
	}
	
	// 게터, 세터는 생략함
}