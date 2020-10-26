/////// Use DOM Selection to select items we want to find and change with AJAX. //////////////
const info = document.getElementById('info');
const results = document.getElementById('results');
//////// Create our Request to server, which we will then use to pull requested information. /
let xhr = new XMLHttpRequest();
/////// Set up a callback function to run when the server request is successful. /////////////
xhr.onreadystatechange = () => {
    /////// Creates an if statement that asks if the server request is complete. /////////////
    if(xhr.readyState === 4)
    /////// Now the server is complete. Create an if statement to see if connection works. ///
    if(xhr.status = 200) {
        /// Body of the callbacks, we will parse data and use DOM Manipulation to find info. /
        const data = JSON.parse(xhr.response);
        console.log(data);
        info.innerHTML = "Execution Time: " + data.executionTime;
        results.innerHTML = "Results: " + data.result;
        /////// Else Ifs, for if we happen to not connect to the server for whatever reason. /
    } else if(xhr.status === 404) {
        alert("Oh no, the page wasn't found.");
    } else if(xhr.status === 500) {
        alert("We apologize, but it appears the server is taking a break.");
    }
};
/////// Opens the server request to pull information. ///////////////////////////////////////
xhr.open("GET", "https://rapidapi.p.rapidapi.com/games/%7Btitle%7D?platform=pc");
xhr.setRequestHeader("x-rapidapi-host", "chicken-coop.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "5e74bfdfc0msh27144265eb030e8p129212jsn6840fe3244a2");
/////// Sends server request to user. ///////////////////////////////////////////////////////
xhr.send();