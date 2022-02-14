function Button() {

    //needs main container

    //create button
    let button = document.createElement('button');
    button.className = "btn btn-primary btn-md d-block shadow mx-auto my-4";
    button.textContent = "Add Square";
    conatiner.appendChild(button);
    

    //needs square button context

    //adding listener
    button.addEventListener('click', () => {
        clickCounter++;
        let square = document.createElement('div');
        square.className = 'square d-flex justify-content-center align-items-center mx-3 mb-3 shadow text-white';
        let squareText = document.createTextNode(clickCounter);
        square.id = clickCounter;  //needs add clickCounter
        section.appendChild(square);

        //addEventListener(mouseover)
        //addEventListener
    


    //random colors function
    let randoColor = function () {}
};