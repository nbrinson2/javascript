// Get initial data
// Keep stream open, continue requesting new data indefinitely
// Just read the plain text and add a hard break after every new-paragraph command.
// Time out with a return of no new data
// Do not poll continuously with a timeout



// Handle refresh command

// 1. Buffer all of the following text until the E command is received. At
// that point, delete everything between the timecodes and replace it with
// the buffered text. Then go back to receiving realtime data normally.

// 2. Erase everything between the timecodes immediately. Insert the new
// text in realtime as it is transmitted (in the spot where the original
// text was deleted.) When the E command is received, go back to inserting
// realtime text at the bottom of the file.


// It should be possible to create a web page that connects to this data, collects text in real-time
// and displays it in the browser, allowing the user to view and scroll through the text.


let yourUrl = '';


let xhr = new XMLHttpRequest();
xhr.open("POST", yourUrl, true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    func: "session_connect",
    licenseid: "ADHC344427554"

}));


var xhr = new XMLHttpRequest();
// we defined the xhr

xhr.onreadystatechange = function () {
    if (this.readyState != 4) return;

    if (this.status == 200) {
        var data = JSON.parse(this.responseText);

        // we get the returned data
    }

    // end of state change: it can be after some time (async)
};

xhr.open('GET', yourUrl, true);
xhr.send();


// {"func":"session_connect",
// "licenseid":"ADHC344427554",
// "machineid":"344427554",
// "passhash":"Sb2/wYHIHhsgEAPKOdibBD4u1gP2z8S",
// "sessionid":"LANTEST",
// "email":"",
// "username":""}