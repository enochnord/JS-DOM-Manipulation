// select all items in the list
var lis = document.querySelectorAll("li");

// add a green color when moused over list items
for(var i = 0; i< lis.length; i++) {
    lis[i].addEventListener("mouseover", function() {
        this.classList.add("selected");
    });
    // return color to normal when mosued off list items
    lis[i].addEventListener("mouseout", function() {
        this.classList.remove("selected");
    });
    // mark a list item as complete when clicked on
    lis[i].addEventListener("click", function() {
        this.classList.toggle("done");
    });
}
