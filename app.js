console.log("Hello world!")

// Down below are two different ways in which you can grab elements
// given either their Class Name or Tag Name in the HTML file

// This is grabbing the elements by their Class Name "employee"
var myStaff = document.getElementsByClassName("employee")

// I had to use .innerText in order to just get the text
// written within the tag, as oppose to not having that piece,
// which would give me the whole tag, take a look at the console on
// the web page to see what I'm talking about
console.log("This is what happens when I don't include .innerText");
console.log(myStaff[0]);
console.log("This is what happens when I do include .innerText");
console.log(myStaff[0].innerText);
console.log(myStaff[0]);
console.log(myStaff[1].innerText);
console.log(myStaff[2].innerText);
console.log(myStaff[3].innerText);
console.log(myStaff[4].innerText);
console.log(myStaff[5].innerText);


// This is grabbing the elements by their Tag Name <a>
var myStaffTag = document.getElementsByTagName("a")

console.log(myStaffTag[0].innerText);
console.log(myStaffTag[1].innerText);
console.log(myStaffTag[2].innerText);
console.log(myStaffTag[3].innerText);
console.log(myStaffTag[4].innerText);
console.log(myStaffTag[5].innerText);