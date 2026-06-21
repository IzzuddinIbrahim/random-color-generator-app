const colorBox = document.querySelector("#color-box");          //find color box
const colorCode = document.querySelector("#color-code");        //find color code text
const generateButton = document.querySelector("#generate-btn"); //find generate button

//function random color
function getRandomColor() {
    let letters = "0123456789ABCDEF";   //create letters containing 0123456789ABCDEF
    let color = "#"                     //start color with "#"

    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * letters.length);
        color += letters[randomIndex]; 
    }

    return color;
}

//connect generate button
generateButton.addEventListener("click", function() {
    let randomColor = getRandomColor();                     //get random color

    colorBox.style.backgroundColor = randomColor;    //change the color box background
    colorCode.textContent = `Color: ${randomColor}`;            //show the color code
});