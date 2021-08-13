// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let likeGlyph= document.querySelectorAll(".like-glyph")
const modal= document.querySelector("#modal")

likeGlyph.forEach((like) => {
  like.addEventListener("click", likeCallback)})


function likeCallback(e){
  mimicServerCall()
  .then(function(serverMessage){
    console.log(serverMessage)
    if (e.target.innerHTML=== FULL_HEART){
       e.target.innerHTML= EMPTY_HEART;
       e.target.style.color= "";
    } else {
      e.target.innerHTML=FULL_HEART;
      e.target.style.color= "red";
    }
  })
  .catch((error)=> { 
    alert("something went wrong")
    setTimeout(() => modal.classList.remove("hidden"), 3000)
  })
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  })
}