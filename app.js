// This function will change the background photo when the mouse goes over Pedro's name
function newPicturePedro() {
    // From the JS file, it will read the CSS document, look for the body tag
    // and change the background image to the one set below
    document.body.style.backgroundImage = "url('./photos/unsplash.jpg')";
    // This line of code will hide the title GOKiC
    document.getElementById("heading").style.visibility = "hidden";
    // The next couple lines of code will hide all of the other names
    document.getElementById("sam").style.visibility = "hidden";
    document.getElementById("michelle").style.visibility = "hidden";
    document.getElementById("fernando").style.visibility = "hidden";
    document.getElementById("linda").style.visibility = "hidden";
    document.getElementById("tiago").style.visibility = "hidden";
}

// This function will change the background photo when the mouse goes over Sam's name
function newPictureSam() {
    document.body.style.backgroundImage = "url('./photos/trees.jpg')";
    document.getElementById("heading").style.visibility = "hidden";
    document.getElementById("pedro").style.visibility = "hidden";
    document.getElementById("michelle").style.visibility = "hidden";
    document.getElementById("fernando").style.visibility = "hidden";
    document.getElementById("linda").style.visibility = "hidden";
    document.getElementById("tiago").style.visibility = "hidden";
}

// This function will change the background photo when the mouse goes over Michelle's name
function newPictureMichelle() {
    document.body.style.backgroundImage = "url('./photos/unsplash.jpg')";
    document.getElementById("heading").style.visibility = "hidden";
    document.getElementById("sam").style.visibility = "hidden";
    document.getElementById("pedro").style.visibility = "hidden";
    document.getElementById("fernando").style.visibility = "hidden";
    document.getElementById("linda").style.visibility = "hidden";
    document.getElementById("tiago").style.visibility = "hidden";
}

// This function will change the background photo when the mouse goes over Fernando's name
function newPictureFernando() {
    document.body.style.backgroundImage = "url('./photos/trees.jpg')";
    document.getElementById("heading").style.visibility = "hidden";
    document.getElementById("sam").style.visibility = "hidden";
    document.getElementById("michelle").style.visibility = "hidden";
    document.getElementById("pedro").style.visibility = "hidden";
    document.getElementById("linda").style.visibility = "hidden";
    document.getElementById("tiago").style.visibility = "hidden";
}

// This function will change the background photo when the mouse goes over Linda's name
function newPictureLinda() {
    document.body.style.backgroundImage = "url('./photos/unsplash.jpg')";
    document.getElementById("heading").style.visibility = "hidden";
    document.getElementById("sam").style.visibility = "hidden";
    document.getElementById("michelle").style.visibility = "hidden";
    document.getElementById("fernando").style.visibility = "hidden";
    document.getElementById("pedro").style.visibility = "hidden";
    document.getElementById("tiago").style.visibility = "hidden";
}

// This function will change the background photo when the mouse goes over Tiago's name
function newPictureTiago() {
    document.body.style.backgroundImage = "url('./photos/trees.jpg')";
    document.getElementById("heading").style.visibility = "hidden";
    document.getElementById("sam").style.visibility = "hidden";
    document.getElementById("michelle").style.visibility = "hidden";
    document.getElementById("fernando").style.visibility = "hidden";
    document.getElementById("linda").style.visibility = "hidden";
    document.getElementById("pedro").style.visibility = "hidden";
}

// This function will put everythin back to normal when none of the names have a mouse over them
function oldPicture() {
    document.body.style.backgroundImage = "";
    document.getElementById("heading").style.visibility = "visible";
    document.getElementById("pedro").style.visibility = "visible";
    document.getElementById("sam").style.visibility = "visible";
    document.getElementById("michelle").style.visibility = "visible";
    document.getElementById("fernando").style.visibility = "visible";
    document.getElementById("linda").style.visibility = "visible";
    document.getElementById("tiago").style.visibility = "visible";
}

// ALL OF THE CODE BELOW I AM KEEPING FOR PURPOSES OF TRACKING THE DIFFERENT\
// METHODS I TRIED.

// // Used for testing purposes, makng sure my JS was connected to my HTML file
// console.log("Hello world!")

// // Down below are two different ways in which you can grab elements
// // given either their Class Name or Tag Name in the HTML file

// // This is grabbing the elements by their Class Name "employee"
// var myStaff = document.getElementsByClassName("employee")

// // I had to use .innerText in order to just get the text
// // written within the tag, as oppose to not having that piece,
// // which would give me the whole tag, take a look at the console on
// // the web page to see what I'm talking about
// console.log("This is what happens when I don't include .innerText");
// console.log(myStaff[0]);
// console.log("This is what happens when I do include .innerText");
// console.log(myStaff[0].innerText);
// console.log(myStaff[1].innerText);
// console.log(myStaff[2].innerText);ls

// console.log(myStaff[3].innerText);
// console.log(myStaff[4].innerText);
// console.log(myStaff[5].innerText);


// // This is grabbing the elements by their Tag Name <a>
// var myStaffTag = document.getElementsByTagName("a")

// console.log(myStaffTag[0].innerText);
// console.log(myStaffTag[1].innerText);
// console.log(myStaffTag[2].innerText);
// console.log(myStaffTag[3].innerText);
// console.log(myStaffTag[4].innerText);
// console.log(myStaffTag[5].innerText);

// // Here I am creating a for loop to be able to manipulate each element
// // individually in certain occassions, which will allow to change the background
// console.log("Entering for loop")
// for(var i = 0; i<myStaffTag.length; i++){
//     console.log("Entered for loop")
//     if (myStaffTag[i].innerText == "Pedro Ciriano Perez") {
//         console.log("YAHOO!");
//     }
//     else {
//         console.log("Muy triste");
//     }
// }

// let test = document.getElementById("content-container");

// // This handler will be executed every time the cursor
// // is moved over a different list item
// test.addEventListener("mouseover", function( event ) {   
//     // highlight the mouseover target
//     event.target.style.color = "red";
//     document.body.style.backgroundImage = "url('./photos/michelle.png')";
  
//     // reset the color after a short delay
//     setTimeout(function() {
//         event.target.style.color = "";
//         document.body.style.backgroundImage = "url('https://static.wixstatic.com/media/d5c2bb_67bfb989c2b047a7adb1bae87d710032~mv2.png/v1/fill/w_800,h_320,al_c/d5c2bb_67bfb989c2b047a7adb1bae87d710032~mv2.png')";
//     }, 2000);
//   }, false);

// document.getElementById("pedro").addEventListener("mouseover", function(event) {
//     event.target.style.color = "white";
//     document.body.style.backgroundImage = "url('./photos/chicken.jpg')"
// }, false);

