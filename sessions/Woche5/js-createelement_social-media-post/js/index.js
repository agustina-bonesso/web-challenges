console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
/*
This page shows an example of a social media post. Your task is to replicate the social media post with JavaScript. Use `document.createElement()` to generate all HTML elements separately.

Don't use `.innerHTML` to create the HTML in one instance, but use multiple calls of `document.createElement()` instead.

The `index.html` demonstrates the required HTML tags, structure and class names.

Append the second social media post to the body. Don't forget to add the event listener to the like button. You can use the function `handleLikeButtonClick` for the event listener.

*/

const newCard = document.createElement("article");
newCard.classList.add("post");

document.body.append(newCard);
const newPostContent = document.createElement("p");
newPostContent.textContent =
  "Hola Hola hola hola hola hola Hola Hola hola hola hola hola.";
newPostContent.classList.add("post__content");
newCard.append(newPostContent);

const newPostFooter = document.createElement("footer");
newPostFooter.classList.add("post__footer");
newCard.append(newPostFooter);

const newUserNamePost = document.createElement("span");
newUserNamePost.classList.add("post__username");
newUserNamePost.textContent = "@username";
newPostFooter.append(newUserNamePost);

const newButtonLike = document.createElement("button");
newButtonLike.classList.add("post__button");
newButtonLike.textContent = "♥ Like";
newPostFooter.append(newButtonLike);
newButtonLike.addEventListener("click", handleLikeButtonClick);
