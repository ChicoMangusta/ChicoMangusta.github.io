// //doc ready  
$(() => {
    const body = $("body");
    console.log(body); 

    //CREATING THE DUCK
    const createDuck = () => {
        //CREATE A NEW DIV WITH A CLASS OF DUCK
        let $newDuck = $("<div>").addClass("duck");

        // APPENDING THE NEW DIV TO THE BODY
        $("body").append($newDuck);
         console.log('duck')

        //CREATING THE DUCKS WINGS FLAPS
        setInterval(function () {
            $newDuck.classList.toggle("flap");
        }, 200);
    };

    //FUNCTION TO MOVE THE DUCK
    moveDuck = () => {
        // animateDuck('.duck');
        // CREATE RANDOM MOVES
        let left = Math.random() * window.innerWidth
        let top  = Math.random() * window.innerHeight
        //method returns the width of the element, including left and right padding, in pixels.
        newDuck.style.left = left + 'px';
        newDuck.style.top = top + 'px'; //pixels

    };

    setInterval(moveDuck, 1000);
    return newDuck;

    //FUNCTION THAT CHECK THE NUMBERS OF DUCKS
    const checkForWinner = () => {
        const numDucks = $('duck')
        console.log(numDucks);
        if (numDucks.length === 0) {
            const $win = $('<div>').addClass('win').text('U WIN');
            $('body').append($win)
        }
    }


    //SHOT FUNCTION
    // ADDs A CLASS MANIPUMLATE IT FROMM CSS AND REMOVE THE ORIGINAL CLASS
    const addShot = (e) => {
        e.target.classList.add('shot'); //use classlist to add and toggle a CSS class
        setTimeout(function () {
            e.target.remove() //remove duck class after it been clicked
            checkForWinner()
        }, 1000);
    };

    //CREATE NEW DUCKS 
    for (let i = 0; i < 5; i++) {
        createDuck().click('click', addShot);
    }


});








window.onload = function () {
    const body = document.body;

    console.log(body);




    const createDuck = () => {
        let newDuck = document.createElement('div');
        newDuck.classList.add('duck');
        document.body.appendChild(newDuck);
        // let flap = document.querySelector('.flap')
        // console.log(flap)
        setInterval(function () {
            newDuck.classList.toggle('flap');
        }, 250);




        const moveDuck = () => {
            let left = Math.random() * window.innerWidth
            let top = Math.random() * window.innerHeight
            newDuck.style.left = left + 'px'
            newDuck.style.top = top + 'px'
        }
        setInterval(moveDuck, 1000);

        return newDuck
    };

    const checkForWinner = () => {
        const numDucks = document.getElementsByClassName('duck')
        console.log(numDucks)
        if (numDucks.length === 0) {
            // alert('U R A ASS DONT KILL ANIMALS')
            const $win = $('<div>').addClass('win').text('U WIN');
            $('body').append($win);
        }
    }


    const addShot = (e) => {
        e.target.classList.add('shot')
        setTimeout(function () {
            e.target.remove()
            checkForWinner()
        }, 1000);

    }

    for (let i = 0; i < 1; i++) {
        createDuck().addEventListener('click', addShot);
    }



    //TIMER FUNCTION
    // let counter = 0;
    // let timeLeft = 30;

    // function setup() {
    //     noCanvvas();

    //     let timer = select('#timer');
    //     timer.html(timeleft - currentTime);


    //     function timeIt() {
    //         counter++;
    //         timer.html(timeleft - counter);
    //     }
    //     setInterval(timeIt, 1000);
    // }


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
    }




};