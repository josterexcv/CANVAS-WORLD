var canvas;
var database;

function setup() {

     canvas = createCnavas(600, 600)
     canvas.parent('canvascontainer');
     database = firebase.database()
     background(50)
     var clearbutton = select('#clearbutton');

     clearbutton.mousePressed(clearDrawing)

}

var db_drawing = []

function mouseDragged() {

    var point = {
        x: mouseX,
        Y: mouseY
    }
    db_drawing.push(point);
    var drawingRef = database.ref('drawing')
    drawingRef.set({
        "d": drawing
    })
}

function draw() {
    readData()
    beginShape();
    stroke(255);
    strokeWeight(4);
    noFill();
    for (var i = 0; i< db_drawing.drawing.length; i++) {
        vertex(db_drawing[i].x, db_drawing[i].y);
        endShape();
    }
}

function readData() {
    database.ref('drawing/').on('value', (data) => {
        db_drawing = data.val().d
    })
}

function clearDrawing() {
    db_drawing = [];
    var adaRef = datatbase.ref('drawing');
    adaRef.remove()
}