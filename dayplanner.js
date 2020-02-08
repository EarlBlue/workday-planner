
//Function to capture current time every second
setInterval(function getTime() {
    $("#clock").empty();
    var time = moment().format("hh:mm:ss a");
    var day = moment().format("dddd");
    var date = moment().format("MMMM Do YYYY")
    var clock = `
    <div class="text-center">
    <h4>${time}</h4>
    <h4>${day}</h4>
    <h4>${date}</h4>
    </div>`;
    $("#clock").empty();
    $("#clock").append(clock);
}, 1000);

//Function to set local storage keys and values and text box values
$("#clear").on("click", function setStorage() {
    $("textarea").val(" ");
    for (var i = 0; i < 24; i++) {
        localStorage.setItem([i] + "00hrs", " ");
    };
});

// //Function to make the planner table
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
        $("#main").append(row);
    }
    
    //Calls set styling function for every iteration of makeTable function
    setInterval(setStyling(), 1000)
    
    //Function to capture text on button click, Part of makeTable function
    $("button").on("click", function() {
        console.log("click")
        var time = $(this)[0].name
        var input = $(this)[0].offsetParent.children[1].value;
        localStorage.setItem(time, input);   
    });
};

//Function to set styling based on time
function setStyling() {
    var currentTime = moment().format("H");
    for (var i = 0; i < 24; i++) {
        if (i == currentTime) {
            $("#" + i).addClass("bg-success");
        } else if (i > currentTime) {
            $("#" + i).addClass("bg-warning");
        } else {
            $("#" + i).addClass("bg-secondary");
        } 
    };
};

makeTable();


 
