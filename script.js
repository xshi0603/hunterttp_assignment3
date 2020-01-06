/*
Xing Tao Shi, Camryn B.
 */


//1) Select the section with an id of container without using querySelector.
document.getElementById("container");
//console.log(document.getElementById("container"));

//2) Select the section with an id of container using querySelector.
document.querySelector("#container");
//console.log(document.querySelector("#container"));

//3) Select all of the list items with a class of "second".
document.getElementsByClassName("example");
//console.log(document.getElementsByClassName("second"));

//4) Select a list item with a class of third, but only the list item inside of the ol tag.
document.querySelector(".third", "ol");
//console.log(document.querySelector(".third", "ol"));

//5) Give the section with an id of container the text "Hello!".
//document.getElementById("container").innerHTML = "Hello!";

//6) Add the class main to the div with a class of footer.
document.getElementsByClassName("footer")[0].classList.add("main");

//7) Remove the class main on the div with a class of footer.
document.getElementsByClassName("footer")[0].classList.remove("main");

//8) Create a new li element.
var newli = document.createElement("li"); 

//9) Give the li the text "four".
newli.innerHTML = "four";

//10) Append the li to the ul element.
document.getElementsByTagName("ul")[0].appendChild(newli);

//12) Loop over all of the lis inside the ol tag and give them a background color of "green".
var elements = document.querySelectorAll("ol li");
for (var i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "green";
}

//13) Remove the div with a class of footer.
var tempElement = document.getElementsByClassName("footer")[0];
tempElement.parentNode.removeChild(tempElement);