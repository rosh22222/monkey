// script.js

// Like Button functionality
document.querySelector('.like-btn').addEventListener('click', function () {
    const likeButton = document.querySelector('.like-btn');
    likeButton.textContent = likeButton.textContent === '❤️ Like' ? '💚 Liked' : '❤️ Like';
  });
  
  // Comment Button functionality
  document.querySelector('.comment-btn').addEventListener('click', function () {
    const commentSection = document.querySelector('.comments-section');
    commentSection.style.display = commentSection.style.display === 'none' ? 'flex' : 'none';
  });
  
  // Submit Comment functionality
  document.querySelector('.submit-comment-btn').addEventListener('click', function () {
    const commentInput = document.querySelector('.comment-input');
    const comment = commentInput.value;
    if (comment) {
      const commentDisplay = document.createElement('p');
      commentDisplay.textContent = comment;
      commentDisplay.style.fontSize = '14px';
      commentDisplay.style.marginTop = '5px';
      document.querySelector('.post').appendChild(commentDisplay);
      commentInput.value = ''; // Clear input field
    }
  });