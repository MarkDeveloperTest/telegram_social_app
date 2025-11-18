// script.js
import { db } from './firebase.js';
import { collection, addDoc, getDocs, query, where, orderBy } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const feed = document.getElementById("feed");
const template = document.getElementById("post-template");
const loginBtn = document.getElementById("telegram-login-btn");
let currentUser = null;

// Telegram Login
if (window.Telegram.WebApp) {
  const tg = window.Telegram.WebApp;
  tg.ready();

  loginBtn.addEventListener("click", () => {
    const user = tg.initDataUnsafe?.user;
    if (user) {
      currentUser = {
        id: user.id,
        username: user.username || user.first_name
      };
      loginBtn.style.display = "none";
      feed.style.display = "block";
      alert(`Hello ${currentUser.username}!`);
      loadPosts(); // Load posts after login
    } else {
      alert("Open this app inside Telegram to login.");
    }
  });
}

// Example posts
const posts = [
  { id: "post1", username: "mark_dev", image: "https://source.unsplash.com/random/600x400?sig=1", caption: "Loving this view! 🌄" },
  { id: "post2", username: "anna_10", image: "https://source.unsplash.com/random/600x400?sig=2", caption: "Coffee vibes ☕" },
  { id: "post3", username: "f1_fanatic", image: "https://source.unsplash.com/random/600x400?sig=3", caption: "Ready for the race! 🏎️" }
];

// Load posts
function loadPosts() {
  posts.forEach(post => {
    const postClone = template.content.cloneNode(true);
    postClone.querySelector(".username").textContent = post.username;
    postClone.querySelector(".post-image").src = post.image;
    postClone.querySelector(".post-caption").textContent = post.caption;

    const commentInput = postClone.querySelector(".comment-input");
    const commentsList = postClone.querySelector(".comments-list");

    // Add comment
    commentInput.addEventListener("keypress", async (e) => {
      if (e.key === "Enter" && commentInput.value.trim() !== "") {
        if (!currentUser) {
          alert("Please login to comment.");
          return;
        }
        const commentText = commentInput.value;

        await addDoc(collection(db, "comments"), {
          postId: post.id,
          username: currentUser.username,
          userId: currentUser.id,
          comment: commentText,
          timestamp: Date.now()
        });

        const comment = document.createElement("div");
        comment.textContent = `${currentUser.username}: ${commentText}`;
        commentsList.appendChild(comment);
        commentInput.value = "";
      }
    });

    feed.appendChild(postClone);
  });
}

// Like button toggle
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("like-btn")) {
    e.target.textContent = e.target.textContent === "❤️" ? "💖" : "❤️";
  } else if (e.target.classList.contains("comment-toggle-btn")) {
    const input = e.target.closest(".post").querySelector(".comment-input");
    input.focus();
  }
});