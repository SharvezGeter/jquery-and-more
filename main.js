//Global variables
let myDiv = $("<div>Click Here</div>");
let myInput = $("#textInput");
let body = $("#body");
let ul = $("<ul></ul>");

//Adding to body
body.append(myDiv);
body.append(ul);

//function
myDiv.on("click", () => {
   ul.append(`${myInput.val()} <br>`);
   myInput.val("");
})

//instead of .style, .css
body.css({
    backgroundColor: "blue",
    color: "white"
})
















