// // //doc ready  
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










//GAME FUNCTION
window.onload = function () {


    const body = document.body;
    console.log(body);

    //=============================================================================

    //FUNCTION THAT CREATES THE DUCK

    const createDuck = () => {
        let newDuck = document.createElement('div');// CREATE A NEW DIV
        newDuck.classList.add('duck');// NEW DIV NAME 'duck'
        document.body.appendChild(newDuck);// APPENDING THE NEW DIV INTO THE BODY

        let flap = document.querySelector('.flap')//FUNCTION TO SELECT THE CLASS 'FLAP'
        // console.log(flap)

        // FUNCTION TO MAKE THE DUCK WING FLAP, USING SETINTERVAL
        setInterval(function () {
            newDuck.classList.toggle('flap');
        }, 250);//TOGGLE IS TO ADD OR/AND ROMVE
        //CLASSLIST IS

        //=============================================================================

        //FUNCTION TO MAKE THE DUCK MOVE

        const moveDuck = () => {
            //THIS CREATES RANDOM MOVES TO LEFT AND TOP
            let left = Math.random() * window.innerWidth
            let top = Math.random() * window.innerHeight
            //METHOD RETURNS THE WIDTH OF AN ELEMNT,
            //INCLUDING LEFT AND RIGHT PADDING, IN PIXELS.
            newDuck.style.left = left + 'px'//PIXELS
            newDuck.style.top = top + 'px'//PIXELS
        };

        setInterval(moveDuck, 1000);
        return newDuck
    };

    //=============================================================================

    //FUNCTION THAT CHECK THE NUMBERS OF DUCKS AND IF THERE IS A WINNER



    const checkForWinner = () => {
        const numDucks = document.getElementsByClassName('duck')
        console.log(numDucks)

        if (numDucks.length === 0) {
            alert('U R A ASS DONT KILL ANIMALS')
            const $win = document.createElement('div')

            // $win.classList.add('win').text('I WIN');
            // document.body.appendChild($win);

        }

    }

    //=============================================================================

    //SHOT FUNCTION


    // ADDs A CLASS MANIPUMLATE IT FROMM CSS AND REMOVE THE ORIGINAL CLASS
    const addShot = (e) => {
        e.target.classList.add('shot') //use classlist to add and toggle a CSS class
        setTimeout(function () {
            e.target.remove() //remove duck class after it been clicked
            checkForWinner()
        }, 1000);

    }
    //=============================================================================

    //MAKE A LOOP TO NUM OF DUCKS

    for (let i = 0; i < 10; i++) {
        createDuck().addEventListener('click', addShot);
        // if(numDucks.length === 0) {
        //   reset()
        //   for(let i = 0; i < 10; i++){
        //     createDuck().addEventListener('click',addShot);
        //   }
        // } else(checkForWinner());
    }


    //=============================================================================

    //TIMER FUNCTION

    const startingTime = 0.25;
    let time = startingTime * 60;

    const countdownEl = document.getElementById('countdown');


    setInterval(updateTimer, 1000);

    function updateTimer() {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;


        second = seconds < 0.50 ? '0' + seconds : seconds;


        countdownEl.innerHTML = `${minutes}: ${seconds}`;
        time--;
        time = time < 0 ? 0 : time; //AVOID NEGATIVE NUMBERS.

        if (updateTimer === 0) {
            alert('You lost')
        }
    }


    //=============================================================================

    //FUNCTION RESET GAME

    function reset() {

    }
    $("#reset").click(function () {
        reset();
    });


};



//=============================================================================