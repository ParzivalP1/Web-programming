var tab1es =
    {
        queue:
            [
                {id: 0, name:"In the middle of Hall"},
                {id: 1, name:"Near the window"},
                {id: 2, name:"three"},
                {id: 3, name:"Next to the picture"},
                {id: 4, name:"Next to the fireplace"}
            ]
    };

localStorage.setItem('tab1es', JSON.stringify(tab1es));

outputIt();

function outputIt() {
    var restoredTab1es = JSON.parse(localStorage.getItem('tab1es'));
    var outputs = "";
    for(var i = 0; i < restoredTab1es.queue.length; i++)
    {
        outputs += '<div id="'+restoredTab1es.queue[i].id + '">' + restoredTab1es.queue[i].id+':'+restoredTab1es.queue[i].name + '</div>';
    }
    document.getElementById("demo").innerHTML= outputs;
}
function popIt() {
    var restoredTab1es  = JSON.parse(localStorage.getItem('tab1es'));
    restoredTab1es.queue.shift();
    localStorage.setItem('tab1es', JSON.stringify(restoredTab1es));
    outputIt();
}
function pushIt() {
    var restoredTab1es = JSON.parse(localStorage.getItem('tab1es'));
debugger
    restoredTab1es.queue.push({
        id:  Math.floor(Math.random() * (100 - 1 + 1)) + 1,
        name: $('input').val()
    });
    localStorage.setItem('tab1es', JSON.stringify(restoredTab1es));
    outputIt();
}