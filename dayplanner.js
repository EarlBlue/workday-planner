var hour = moment().format("H"); 
var minute = moment().format("mm"); 
var second = moment().format("ss");

//Function to capture current time every second
setInterval(function getTime() {
    $("#clock").empty();
    var time = hour + ":" + minute + ":" + second;
    var clock = `<h1>${time}</h1>`;
    $("#clock").empty();
    $("#clock").append(clock);
},1000);

//Function to set local storage keys and values
$("#clear").on("click", function setStorage() {
    for (var i = 0; i < 24; i++) {
        localStorage.setItem([i] + "00hrs", "")
    }
});

//Function to make the planner table
function makeTable() {
    for(var i = 0; i < 24; i++) {
        var row = `
        <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="current-time">${i}:00</span>
                        </div>
                        <textarea class="form-control" aria-label="With textarea" id="${i}">${localStorage.getItem([i] + "00hrs")}</textarea>
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" name="${i}00hrs" type="button" id="button${i}">Save</button>
                          </div>
                      </div>`
        $("#main").append(row)
    }

    //Function to capture text on button click, Part of makeTable function
    $("button").on("click", function() {
        console.log("click")
        var time = $(this)[0].name
        var input = $(this)[0].offsetParent.children[1].value;
        localStorage.setItem(time, input);   
    });
};



//Function to check value of table
// function currentTime() {
//     for (var i = 0; i < 24; i++) {
//         console.log(window.document.body.childNodes[1].childNodes[9].children[0].children[i].innerText);
//         // console.log(currentHour)
//     }
//     //var currentHour = $("#current-time")[0].innerText;
//     console.log(this)
//     console.log(document.body.childNodes[1].childNodes[9].children[0].children[0].innerText)
//     console.log(hour)
//     //console.log(currentHour)
//     // if(currentHour == hour) {
//     //     console.log("match")
//     // }
// } 



//setStorage();
makeTable();
//currentTime();
