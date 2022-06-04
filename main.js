// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.getElementById('modal').hidden=true
const hearts = document.querySelectorAll('.like-glyph')
for (let item of hearts) {
  item.addEventListener('click', function() {
    
  mimicServerCall().then(() => {
    if(item.innerHTML === FULL_HEART) {
      item.innerHTML = EMPTY_HEART
      item.classList.remove("activated-heart")
    } 
    else {
      item.innerHTML = FULL_HEART
      item.classList.add("activated-heart")
    }
  }).catch(e => {
      document.getElementById('modal').classList.remove('hidden')
      console.log(e)
      const hidden=document.getElementById("modal");
      hidden.innerHTML=e
      setTimeout(() => {
        hidden.classList.add('hidden')
    }, 3000)
  });
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
  });
}
