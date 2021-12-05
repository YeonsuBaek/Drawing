var canvas;
var context;
var del=0;
var flag = false;

var ready = function(){
    canvas = document.getElementById("canvas");
    canvas.width = 1074;
    canvas.height = 428;
    context = canvas.getContext("2d");
    canvas.onmousedown = drawStart;
    canvas.onmousemove = drawing;
    window.onmouseup = drawEnd;
    context.lineWidth = 12;
}
var drawStart = function(event) {
    context.beginPath();
    var xpos = event.target.offsetLeft;
    var ypos = event.target.offserTop;
    context.moveTo(event.pageX-xpos, event.pageY-ypos);  // 정확하게는 잘 모르겠음
    flag = true;
}
var drawing = function(event) {   // 어떻게 하면.....캔버스 크기를 키워도 그림을 그릴 수 있을가....
    if (flag) {
        var xpos = event.target.offsetLeft;
        var ypos = event.target.offsetTop;
        context.lineCap = "round";     // 글자 끝 둥글게 마감
        context.lineJoin = "round";    // 글자 꺾일 때 둥글게 마감

        if (del==0) {
            context.lineTo(event.pageX-xpos, event.pageY-ypos);  //그리기
        } else if (del==1) {
            context.clearRect(event.pageX-xpos-20, event.pageY-ypos-20, 50, 50);  //지우개보통굵기
        } else if (del==2) {
            context.clearRect(event.pageX-xpos-20, event.pageY-ypos-20, 20, 20);  //지우개얇은굵기
        } else if (del==3) {
            context.clearRect(event.pageX-xpos-20, event.pageY-ypos-20, 100, 100);  //지우개두꺼운굵기
        }
        context.stroke();
    }
}
var drawEnd = function(event) { 
    flag = false; 
}

var pen = function() { del = 0; }
var eraser = function() { del = 1; }
var restart = function () { 
    context.clearRect(0,0,canvas.width,canvas.height);
}

/* 펜 두께 조절 */
var small = function() { del = 0; context.lineWidth = 3; }
var regular = function() { del = 0; context.lineWidth = 12; }
var large = function() { del = 0; context.lineWidth = 30; }

/* 지우개 두께 조절*/
var e_small = function() { del = 2; }
var e_regular = function() { del = 1; }
var e_large = function() { del = 3; }

/*펜 색 설정*/
var bfcaff = function() { context.strokeStyle = '#bfcaff'; }
var add6ff = function() { context.strokeStyle = '#add6ff'; }
var ccf0ea = function() { context.strokeStyle = '#ccf0ea'; }
var ffe2d4 = function() { context.strokeStyle = '#ffe2d4'; }
var ffd1d5 = function() { context.strokeStyle = '#ffd1d5'; }
var ffe894 = function() { context.strokeStyle = '#ffe894'; }
var fae6e2 = function() { context.strokeStyle = '#fae6e2'; }
var eddaec = function() { context.strokeStyle = '#eddaec'; }
var f2b6c6 = function() { context.strokeStyle = '#f2b6c6'; }
var f5f5f5 = function() { context.strokeStyle = '#f5f5f5'; }

/*캔버스 배경색 설정*/
var color = ['white','black','aliceblue','green'];

var i=0;
function changeColor() {
    i++;
    if (i>=color.length) {
        i=0;
    }
    canvas.style.backgroundColor = color[i];
    
    if (i%2!=0) {    // i>=2일 경우로 만들땐 color.length 이상일 때 안됨...
        context.strokeStyle = 'white';
    } else {
        context.strokeStyle = 'black';
    }
}

/*캔버스 크기 설정*/   // 왜 크기 조절하면 글씨크기가 얇은거로 될까 & 기본 사이즈 밖으로는 그림이 안그려짐
function applyWidth() {
    var wid = document.getElementById('width').value;
    canvas.width = wid;
}
function applyHeight() {
    var hei = document.getElementById('height').value;
    canvas.height = hei;
}