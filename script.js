// script.js
import { db } from './firebase.js';
import { collection, addDoc, getDocs, query, where, orderBy } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const feed = document.getElementById("feed");
const template = document.getElementById("post-template");

// Example posts (you can later load from Firestore)
const posts = [
  { id: "post1", username: "mark_dev", image: "https://source.unsplash.com/random/600x400?sig=1", caption: "Loving this view! 🌄" },
  { id: "post2", username: "anna_10", image: "https://source.unsplash.com/random/600x400?sig=2", caption: "Coffee vibes ☕" },
  { id: "post3", username: "f1_fanatic", image: "https://source.unsplash.com/random/600x400?sig=3", caption: "Ready for the race! 🏎️" }
];

// Load posts
posts.forEach(post => {
  const postClone = template.content.cloneNode(true);
  postClone.querySelector(".username").textContent = post.username;
  postClone.querySelector(".post-image").src = post.image;
  postClone.querySelector(".post-caption").textContent = post.caption;

  const commentInput = postClone.querySelector(".comment-input");
  const commentsList = postClone.querySelector(".comments-list");

  // Add comment to Firestore
  commentInput.addEventListener("keypress", async (e) => {
    if (e.key === "Enter" && commentInput.value.trim() !== "") {
      const commentText = commentInput.value;
      await addDoc(collection(db, "comments"), {
        postId: post.id,
        username: post.username,
        comment: commentText,
        timestamp: Date.now()
      });

      const comment = document.createElement("div");
      comment.textContent = commentText;
      commentsList.appendChild(comment);
      commentInput.value = "";
    }
  });

  feed.appendChild(postClone);
});

// Like button toggle
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("like-btn")) {
    e.target.textContent = e.target.textContent === "❤️" ? "💖" : "❤️";
  }
});