// //doc ready  
// $(() => {
//     const body = $("body");
//     console.log(body); 

//     //CREATING THE DUCK
//     const createDuck = () => {
//         //CREATE A NEW DIV WITH A CLASS OF DUCK
//         let $newDuck = $("<div>").addClass("duck");

//         // APPENDING THE NEW DIV TO THE BODY
//         $("body").append($newDuck);
//          console.log('duck')

//         //CREATING THE DUCKS WINGS FLAPS
//         setInterval(function () {
//             $newDuck.classList.toggle("flap");
//         }, 200);
//     };

//     //FUNCTION TO MOVE THE DUCK
//     moveDuck = () => {
//         // animateDuck('.duck');
//         // CREATE RANDOM MOVES
//         let left = Math.random() * window.innerWidth
//         let top  = Math.random() * window.innerHeight
//         //method returns the width of the element, including left and right padding, in pixels.
//         newDuck.style.left = left + 'px';
//         newDuck.style.top = top + 'px'; //pixels

//     };

//     setInterval(moveDuck, 1000);
//     return newDuck;

//     //FUNCTION THAT CHECK THE NUMBERS OF DUCKS
//     const checkForWinner = () => {
//         const numDucks = $('duck')
//         console.log(numDucks);
//         if (numDucks.length === 0) {
//             const $win = $('<div>').addClass('win').text('U WIN');
//             $('body').append($win)
//         }
//     }


//     //SHOT FUNCTION
//     // ADDs A CLASS MANIPUMLATE IT FROMM CSS AND REMOVE THE ORIGINAL CLASS
//     const addShot = (e) => {
//         e.target.classList.add('shot'); //use classlist to add and toggle a CSS class
//         setTimeout(function () {
//             e.target.remove() //remove duck class after it been clicked
//             checkForWinner()
//         }, 1000);
//     };

//     //CREATE NEW DUCKS 
//     for (let i = 0; i < 5; i++) {
//         createDuck().click('click', addShot);
//     }


// });








window.onload = function () {
console.log('yoooo');
console.log('h1')

    const body = $('body');
    console.log(body);


    const createDuck = () => {
        const newDiv = document.createElement("div"); // const $newDiv = $('<div>').addClass('duck')
        newDiv.setAttribute("class", "duck");         
        document.body.appendChild(newDiv);           // $('body').append($newDiv)

        setInterval(function () {
            newDiv.classList.toggle("flap");
        }, 200);


        //MOVE DUCK FUNCTION
        const moveDuck = () => {
            let left = Math.random() * window.innerWidth;
            let top  = Math.random() * window.innerHeight;
            newDiv.style.left = left + "px";
            newDiv.style.top  = top + "px";
        };

        moveDuck();
        setInterval(moveDuck, 500);


        newDiv.addEventListener("click", () => {
            newDiv.classList.add("shot");
            setTimeout(() => {
                newDiv.remove();
                checkForWinner();
            }, 700);
        });
    };

    const checkForWinner = () => {
        let ducksRemaining = document.getElementsByClassName("duck");
        console.log(ducksRemaining.length);
        if (ducksRemaining.length === 0) {
             const $win = $('<div>').addClass('win').text('U WIN');
             $('body').append($win);
        }
    };
    for (let i = 0; i < 1; i++) {
        createDuck();
    };
};


