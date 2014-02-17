$(document).ready(function () {





      function updated(msg){
		$("#toast").effect("highlight", {color: "#ea9d9d"}, 3000);// green color #669966
		$("#toast").text(msg);
		$( "#toast" ).slideUp( 300 );
		}

var onlynum = "Valid Number";
var onlychar = "Valid Name";
var idmail = "Please Enter Valid Mail-ID";
  //called when key is pressed in textbox
  $(".numonly").keypress(function (e) {
    //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
   //display error message

     updated(onlynum);
     return false;
    }
   });

     $(".charonly").keypress(function (e) {
    //if the letter is not digit then display error and don't type anything
     if (e.which != 8 && e.which != 0 && (e.which < 65 || e.which > 90)&& (e.which < 97 || e.which > 122)) {
   //display error message

     updated(onlychar);
     return false;
    }
   });

		$('#phnum').click(function(){


				var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
				var demail=$("#mailid").attr("value");
			if (demail!="") {
				if(!regex.test(demail)){
				updated(idmail);
				$("#mailid").addClass('errorClass');
				setTimeout(function () {
				$("#mailid").removeClass('errorClass');
				}, 3000);
				return false;
				}

}


	});


});

