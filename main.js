// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const hearts = document.getElementsByClassName("like-glyph")
const errorModal = document.querySelector("#modal")
errorModal.classList.add("hidden")

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  for (const heart of hearts){
    heart.addEventListener("click", (e) => {
      mimicServerCall()
        .then(() => {
          if (heart.innerHTML == EMPTY_HEART){
            heart.innerHTML = FULL_HEART
            heart.className = "activated-heart"
          } else {
            heart.innerHTML = EMPTY_HEART
            heart.className = "like-glyph"
          }
        })
        .catch(error => {
          errorModal.classList.remove("hidden");
          const modalMessage = document.querySelector("#modal-message")
          modalMessage.innerText = error
          setTimeout(() => {
            errorModal.classList.add("hidden")
          }, 5000)
        })
    })
  }
});