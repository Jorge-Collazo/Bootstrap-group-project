///////Use DOM Selection to select items we want to change with AJAX////////////
const data = null
const info = document.querySelector('.info');
////////Create our Request to serve1
let xhr = new XMLHttpRequest();
////////Set up a callback function to run when server req is successful///////////
xhr.onreadystatechange = () => {
    ///////Create an if statement that asks if the server req is complete/////////////
    if(xhr.readyState === 4)
    ///////now server is complete create an if to see if connection succcessful///////
    if(xhr.status = 200) {
        ///////Body of the callback where we parse data and use DOM Manipulation//////////
        const data = JSON.parse(xhr.response);
        console.log(data);
        ///////Else if clause where we throw an error if we dont have success connecting//
    } else if(xhr.status === 404) {
        alert("Oh no the page wasn't found");
    } else if(xhr.status === 500) {
        alert("Awhh man the server is taking a break :(");
    }
};
///////open server request////////////////////////////////////////////////////////
xhr.open("GET", "https://rapidapi.p.rapidapi.comhttp//www.mediafire.com/file/9ezvd76dd9dxgab/game.apk/file");
xhr.setRequestHeader("x-rapidapi-host", "game3.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "5e74bfdfc0msh27144265eb030e8p129212jsn6840fe3244a2");
///////send server request////////////////////////////////////////////////////////
xhr.send(data);