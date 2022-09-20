// Your code goes here
document.addEventListener('DOMContentLoaded', ()=>{
    const changeText = document.querySelector("#text");
    changeText.textContent = 'This is really cool!'
});

console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );