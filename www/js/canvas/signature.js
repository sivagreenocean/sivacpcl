function   signatureCapture(){

    var canvas = document.getElementById("newSignature");
    var context = canvas.getContext("2d");
    canvas.width =window.innerWidth/2;
    canvas.height = canvas.width;
    context.fillStyle = "#fff";
    context.strokeStyle = "#444";
    context.lineWidth = 1.5;
    context.lineCap = "round";
    context.fillRect(0, 0, canvas.width, canvas.height);
    var disableSave = true;
    var pixels = [];
    var cpixels = [];
    var xyLast = {};
    var xyAddLast = {};
    var calculate = false;
      //functions
        function remove_event_listeners() {
            canvas.removeEventListener('mousemove', on_mousemove, false);
            canvas.removeEventListener('mouseup', on_mouseup, false);
            canvas.removeEventListener('touchmove', on_mousemove, false);
            canvas.removeEventListener('touchend', on_mouseup, false);

            document.body.removeEventListener('mouseup', on_mouseup, false);
            document.body.removeEventListener('touchend', on_mouseup, false);
        }

        function get_coords(e) {
            var x, y;

            if (e.changedTouches && e.changedTouches[0]) {
                var offsety = canvas.offsetTop || 0;
                var offsetx = canvas.offsetLeft || 0;

                x = e.changedTouches[0].pageX - offsetx;
                 //alert(x);
                y = e.changedTouches[0].pageY - offsety-25;
            } else if (e.layerX || 0 == e.layerX) {
                x = e.layerX;
                y = e.layerY;
            } else if (e.offsetX || 0 == e.offsetX) {
                x = e.offsetX;
                y = e.offsetY;
            }

            return {
                x : x,
                y : y

            };

        };

        function on_mousedown(e) {
            e.preventDefault();
            e.stopPropagation();

            canvas.addEventListener('mouseup', on_mouseup, false);
            canvas.addEventListener('mousemove', on_mousemove, false);
            canvas.addEventListener('touchend', on_mouseup, false);
            canvas.addEventListener('touchmove', on_mousemove, false);
            document.body.addEventListener('mouseup', on_mouseup, false);
            document.body.addEventListener('touchend', on_mouseup, false);

            empty = false;
            var xy = get_coords(e);
            context.beginPath();
            pixels.push('moveStart');
            context.moveTo(xy.x, xy.y);
            pixels.push(xy.x, xy.y);
            xyLast = xy;

        };

        function on_mousemove(e, finish) {
            e.preventDefault();
            e.stopPropagation();

            var xy = get_coords(e);
            var xyAdd = {
                x : (xyLast.x + xy.x) / 2,
                y : (xyLast.y + xy.y) / 2
            };

            if (calculate) {
                var xLast = (xyAddLast.x + xyLast.x + xyAdd.x) / 3;
                var yLast = (xyAddLast.y + xyLast.y + xyAdd.y) / 3;
                pixels.push(xLast, yLast);
            } else {
                calculate = true;
            }

            context.quadraticCurveTo(xyLast.x, xyLast.y, xyAdd.x, xyAdd.y);
            pixels.push(xyAdd.x, xyAdd.y);
            context.stroke();
            context.beginPath();
            context.moveTo(xyAdd.x, xyAdd.y);
            xyAddLast = xyAdd;
            xyLast = xy;

        };

        function on_mouseup(e) {
            remove_event_listeners();
            disableSave = false;
            context.stroke();
            pixels.push('e');
            calculate = false;
            cPush();
        };

    canvas.addEventListener('touchstart', on_mousedown, false);
    canvas.addEventListener('mousedown', on_mousedown, false);
}


function signatureSave() {
    //alert("asd");

var canvas = document.getElementById("newSignature");
ctx = canvas.getContext("2d");
var dataURL = canvas.toDataURL("image/jpeg");
var background = new Image();
document.getElementById("newSignature").src = dataURL;

//background.src = "http://greenocean.in/demo/www/js/canvas/uploads/injuries.png";
//background.onload = function(){
  //  ctx.drawImage(background,0,0);
//}

var empid = $("#empId").val();

//alert(dataURL);
  $.ajax({
  type: "POST",
  url: "http://greenocean.in/cpclplus/uploadsave.php",
  data: {
     img: dataURL,empid:empid,
  }
}).done(function(o) {
  console.log('saved');
  alert("Saved...");

});

};

function signatureClear() {
	clkzmval=0;
	 var canvas = document.getElementById("newSignature");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    ctx = canvas.getContext("2d");
    var dataURL = canvas.toDataURL("image/jpeg");
    var background = new Image();
    background.src = $("#tmpsrtsrc").val();
    var widthheight = window.innerWidth/2;
    background.onload = function(){
     ctx.drawImage(background,0,0,widthheight,widthheight);
    }

}
var cPushArray = new Array();
var cStep = -1;
function cPush() {
    cStep++;
    if (cStep < cPushArray.length) { cPushArray.length = cStep; }
    cPushArray.push(document.getElementById('newSignature').toDataURL());
    document.title = cStep + ":" + cPushArray.length;
}

function cUndo() {
	  var canvas = document.getElementById("newSignature");
         ctx = canvas.getContext("2d");

    if (cStep > 0) {
        cStep--;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        var wh = window.innerWidth/2;
        canvasPic.onload = function () { ctx.drawImage(canvasPic, 0, 0,wh,wh); }
        //document.title = cStep + ":" + cPushArray.length;
    }
}

function cRedo() {
	 var canvas = document.getElementById("newSignature");
         ctx = canvas.getContext("2d");
    if (cStep < cPushArray.length-1) {
        cStep++;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
         var wh = window.innerWidth/2;
        canvasPic.onload = function () { ctx.drawImage(canvasPic, 0, 0,wh,wh); }
      //  document.title = cStep + ":" + cPushArray.length;
    }
}
// load image to canvas by clicking...



function test(_src)
{
    //alert(_src);
    var thumsrc = _src;
    var clear_ref = _src;
    //alert(thumsrc);
    $("#tmpsrtsrc").val(_src);
    var canvas = document.getElementById("newSignature");
    ctx = canvas.getContext("2d");
    var dataURL = canvas.toDataURL("image/jpeg");
    var background = new Image();
    //background.src = "http://greenocean.in/img/pnf404.jpg"; fit to canvas--> http://jsfiddle.net/V92Gn/
    background.src = thumsrc;
    //background.width =window.innerWidth/2;
    //background.height = background.width;
    var widthheight = window.innerWidth/2;
    background.onload = function(){
    ctx.drawImage(background,0,0,widthheight,widthheight);
    }
    var canvas = document.getElementById("newSignature");
    var context = canvas.getContext("2d");
    canvas.width =window.innerWidth/2;
    canvas.height = canvas.width;
    context.fillStyle = "#fff";
    context.strokeStyle = "#444";
    context.lineWidth = 1.5;
    context.lineCap = "round";
    context.fillRect(0, 0, canvas.width, canvas.height);
    var disableSave = true;
    var pixels = [];
    var cpixels = [];
    var xyLast = {};
    var xyAddLast = {};
    var calculate = false;
    {   //functions
        function remove_event_listeners() {
            canvas.removeEventListener('mousemove', on_mousemove, false);
            canvas.removeEventListener('mouseup', on_mouseup, false);
            canvas.removeEventListener('touchmove', on_mousemove, false);
            canvas.removeEventListener('touchend', on_mouseup, false);

            document.body.removeEventListener('mouseup', on_mouseup, false);
            document.body.removeEventListener('touchend', on_mouseup, false);
        }

        function get_coords(e) {
            var x, y;

            if (e.changedTouches && e.changedTouches[0]) {
                var offsety = canvas.offsetTop || 0;
                var offsetx = canvas.offsetLeft || 0;

                x = e.changedTouches[0].pageX - offsetx;
                y = e.changedTouches[0].pageY - offsety;
            } else if (e.layerX || 0 == e.layerX) {
                x = e.layerX;
                y = e.layerY;
            } else if (e.offsetX || 0 == e.offsetX) {
                x = e.offsetX;
                y = e.offsetY;
            }

            return {
                x : x,
                y : y
            };
        };

        function on_mousedown(e) {
            e.preventDefault();
            e.stopPropagation();

            canvas.addEventListener('mouseup', on_mouseup, false);
            canvas.addEventListener('mousemove', on_mousemove, false);
            canvas.addEventListener('touchend', on_mouseup, false);
            canvas.addEventListener('touchmove', on_mousemove, false);
            document.body.addEventListener('mouseup', on_mouseup, false);
            document.body.addEventListener('touchend', on_mouseup, false);

            empty = false;
            var xy = get_coords(e);
            context.beginPath();
            pixels.push('moveStart');
            context.moveTo(xy.x, xy.y);
            pixels.push(xy.x, xy.y);
            xyLast = xy;
        };

        function on_mousemove(e, finish) {
            e.preventDefault();
            e.stopPropagation();

            var xy = get_coords(e);
            var xyAdd = {
                x : (xyLast.x + xy.x) / 2,
                y : (xyLast.y + xy.y) / 2
            };

            if (calculate) {
                var xLast = (xyAddLast.x + xyLast.x + xyAdd.x) / 3;
                var yLast = (xyAddLast.y + xyLast.y + xyAdd.y) / 3;
                pixels.push(xLast, yLast);
            } else {
                calculate = true;
            }

            context.quadraticCurveTo(xyLast.x, xyLast.y, xyAdd.x, xyAdd.y);
            pixels.push(xyAdd.x, xyAdd.y);
            context.stroke();
            context.beginPath();
            context.moveTo(xyAdd.x, xyAdd.y);
            xyAddLast = xyAdd;
            xyLast = xy;

        };

        function on_mouseup(e) {
            remove_event_listeners();
            disableSave = false;
            context.stroke();
            pixels.push('e');
            calculate = false;
        };
    }
    canvas.addEventListener('touchstart', on_mousedown, false);
    canvas.addEventListener('mousedown', on_mousedown, false);
}
$("div.demo").scrollTop(100);

