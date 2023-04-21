import React, {useState, useEffect} from "react";
import axios from 'axios';
import './Board.css';

function Board() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/posts')
            .then(response => {
                setPosts(response.data);
            });
    }, []);

    return (
        <div className="board">
            {posts.map(post => (
                <div className="board-post" key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
}

export default Board;