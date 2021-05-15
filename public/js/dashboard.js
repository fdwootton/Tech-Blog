const newPostHandler = async (event) => {
  event.preventDefault();

  const postTitle = document.querySelector('#post_title').value.trim();
  const postText = document.querySelector('#post_text').value.trim();

  if (postTitle && postText) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ postTitle, postText }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to create post');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newPostHandler);
