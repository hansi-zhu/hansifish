myName = Hansi //sets myName to Hansi
myName == Hansi //checks to see if myName is Hansi

var myArray = [true, 21, fish] // can pull specific values out of this array [0,1,2] zero index value
myArray[0] // will return "true"
myArray[1] // will return "21"
myArray.length // will return 3; total number of items in array
myArray[1]=19 // change second value to 19
myArray[3]=19 // adds a fourth value to array to become myArray = [true, 19, fish, 19]

var person = {
    name: "Brendan",
    age: 41,
    gender: "M"
} // person is now defined with these three values
person.age //will return 41, the age value of person

function calculator(num1, num2){
    var sum = num1 + num2;
    console.log(sum)
} // function is to find the sum of the two numbers once plugged into calculator function
calculator(1,2); // will return 3; use parens to execute a function


for (i = 1; i < 10; i++) { // add 1 to a number until i is above 10
    var output = i+2; // the output will be whatever var is, plus 2
    console.log(output);
} // for loop = does over and over again until some condiiton is met

function blackjack() {
    if (score == 21) {console.log("blackjack!");
    } else {
        console.log("you lose");
    }
}

Math.random()*10 // will give random number with a lot of decimals
Math.floor(Math.random()*10) //get whole integers

//jQuery:
//add to head: <script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ=" crossorigin="anonymous"></script>
// or: <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

$("h1").css("color","red"); //targeting an element and changing some of its css properties

$("h1").click(function(){
    $("h1").css("color","red");
}); //when you click h1, h1 turns red

$("h1").click(function(event){
    $("h1").css("color","red"); // when you click h1, h1 turns red
    console.log(event) //console logs it as event
    $("p").html("You clicked it!") //change html content to whatever is in the ()
}); 
// ^ you get all this info, where the mouse is, if control key is clicked

$(window).mousemove(function(event){
    console.log(event.pageX);
    console.log(event.pageY);
}) // every time mouse moves, logs event with x then y coordinates

$(window).mousemove(function(event){
    console.log(event.pageX);
    console.log(event.pageY);
    $("h1").css("top",event.pageY + "px"); 
    $("h1").css("left",event.pageX + "px"); //have h1 follow mouse movement. make sure h1 is position: absolute
})

$("h1").click(function(event){
    $("p").hide();
}) //hide p when you click h1

$("h1").click(function(event){
    $("p").remove();
}) //removes p when you click h1

$("h1").click(function(event){
$("body").append("<p>Hi, I'm a new paragraph!</p>");
}) //each time you click h1, you add a new paragraph (by adding this text into html)

$("window").click(function(event){ //each time you click the window
    $("body").append("<p>Hi, I'm paragraph number"+ counter +"!</p>"); //add a new paragraph with counter variable inserted
    counter=counter+1; //each time you add counter, the value should be value + 1
}) 

$("h1").click(function(event){
    $(".first").css("color","red"); //given that you have a div named .first in html
    $(".second").css("color","lime");
    $(".third").css("color","blue");
}); //when you click h1, modify the class info in css, BUT—
//BETTER METHOD:
$("h1").click(function(event){
    $(".first").addClass("red");
    $(".second").addClass("green");
    $(".third").addClass("blue");
})


$("h1").click(function(){
    $("body").css("background-color","lime");
}) //turn background green. but it's not good to do css from jquery

$("h1").click(function(){
    $("body").addCLass("lime");
})
// in css: .lime{ 
// background-color: lime;


var clicked = false; //at the beginning of the program, nobody has clicked it
$("h1").click(function(){
    if (clicked==false){
        $("body").addCLass("lime");
        clicked = true; //turn clicked into true
    } else {
        $("body").removeCLass("lime");
    }  
}) 
