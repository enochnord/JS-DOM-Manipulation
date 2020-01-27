// selecting the button to add event to
var buttn = document.querySelector("button");
var isPurple = false;

// toggle the color of the webpage when button is clicked
buttn.addEventListener("click", function() {
    if(isPurple) {
        document.body.style.background = "white";
        isPurple = false;
    }   else {
        document.body.style.background = "purple";
        isPurple = true;
    }
    
});