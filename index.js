// These are variables for javascript.
var knock = new Audio("knock.mp3");
var horse = new Audio("horse.mp3");
var baby = new Audio("baby.mp3");
var car = new Audio("race.mp3");
var bottle = new Audio("bottle.mp3");
var foul = new Audio("whistle.mp3");

// This function allows the page to run in multiple browsers.
(function(){
    if(!/*@cc_on!@*/0)
        return;
    
    var e = "article,aside,canvas,footer,audio,header,hgroup,nav,section".split(','),
    
    i=e.length;
    
    while(i--){document.createElement(e[i])}
})()

// This function plays knock sound and displays a comment.
function knock1(){
    document.getElementById("displayComment").innerHTML = "Someone is knocking at the door.";
    knock.play();
}

// This function plays horse sound and displays a comment.
function horse1(){
    document.getElementById("displayComment").innerHTML = "Your horse has been set lose.";
    horse.play();
}

// This function plays baby sound and displays a comment.
function baby1(){
    document.getElementById("displayComment").innerHTML = "Go! change baby's diapers.";
    baby.play();
}

// This function plays car sound and displays a comment.
function car1(){
    document.getElementById("displayComment").innerHTML = "3...2...1.Gooooooooo.";
    car.play();
}

// This function plays bottle breaking sound and displays a comment.
function bottle1(){
    document.getElementById("displayComment").innerHTML = "Oooooopppsssss..Sorry.";
    bottle.play();
}

// This function plays whistle sound and displays a comment.
function foul1(){
    document.getElementById("displayComment").innerHTML = "Foul, freekick to the opposition.";
    foul.play();
}

// This function generates an alert and displays a comment.
function broken(){
    document.getElementById("displayComment").innerHTML = "This key is broken.";
    alert("This key is broken.");
}


// This function changes the color of a key and displays a comment.
function changeColor(){
    if (document.getElementById("whiteB").style.background != "red"){
        document.getElementById("whiteB").style.background= "red";
    }
    else{
        document.getElementById("whiteB").style.background= "#ffffff";
    }
    document.getElementById("displayComment").innerHTML = "Ta Daaaaaaaa.";
}

// This function displays a comment and an image.
function displayImage(){
    document.getElementById("displayComment").innerHTML = "Hey, Thomas.";
    if(document.getElementById("jerryIMG").style.display == "none"){
        document.getElementById("jerryIMG").style.display="block";
    }
    else {
        document.getElementById("jerryIMG").style.display="none";
    }
}

// This function displays a comment and an image.
function findJerry(){
    document.getElementById("displayComment").innerHTML = "Where is Jerry?";
    if(document.getElementById("tomIMG").style.display == "none"){
        document.getElementById("tomIMG").style.display="block";
    }
    else {
        document.getElementById("tomIMG").style.display="none";
    }
}

// This function displays JUST a comment.

function tooLazy(){
    document.getElementById("displayComment").innerHTML = "Too lazy to implement this key. ZZZZZZ.. Going to sleep.";
}

// This function changes background color and displays a comment.
function changeBackground(){
    document.getElementById("bodyBackground").style.background = "#278ea5";
    document.getElementById("displayComment").innerHTML = "Wooooooow! How did the background change?";
}
