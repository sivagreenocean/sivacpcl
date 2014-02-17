$(function(){


var newurl =$("#servername").val();
//alert(newurl);

var co=1;
var imm=1;
 var hi=1;
$('#add').click(function(){
  $("#su_ab").show();
  $("#tdsub").hide();
   $("#subssub").show();
   });

   $('#addallergy').click(function(){
  $("#algy").show();
  $("#aaller").hide();
   $("#allersub").show();
   });

   $('#addill').click(function(){
  $("#pr1").show();
  $("#aill").hide();
  $("#previllsub").show();
   });

$('#immun').click(function(){
  $("#im_sn").show();
  $("#immun1").hide();
   $("#immsub").show();
   });

$('#addfh1').click(function(){
  $("#adfh1").show();
  $("#adfh").hide();
   $("#famhissub").show();
   });

$('#addmed').click(function(){
  $("#a_medi").hide();
  $("#curmedisub").show();
   $("#medi").show();
   });


$("#servercpcl").click(function () {
	var sername=$("#server").val();

	//alert(sername);

$.ajax({
'dataType': 'json',
'type'    : 'POST',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/updateserver',
'data'    : {data:sername,val:'1'},
'success' : function(data){
if (data.response =='true')
{
//$("#xrSummary").val(data.summary);

alert("success");
}
}
});

});

        $( "#durationfm" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        changeYear: true,
        dateFormat: 'dd/mm/yy',
        onClose: function( selectedDate ) {
        $( "#durationto" ).datepicker( "option", "minDate", selectedDate );
        }
        });
$( "#durationto" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1,
        changeYear: true,
        dateFormat: 'dd/mm/yy',
        onClose: function( selectedDate ) {
        $( "#durationfm" ).datepicker( "option", "maxDate", selectedDate );
        }
});

$("#recent_pat_char").jqxWindow({  });//jqx window with header

$('#schtim').timepicker();

$('#canap').click(function () {
var newurl =$("#servername").val();
        $.ajax({
        dataType: 'json',
        type    : 'POST',
        url: 'http://greenocean.in/rest-tst/index.php/api/example/findSchedule',
        data    : {data:"1"},
        success: function (data) {
        var source = $.parseJSON(data.id);
        //alert(source);
        var lenval = source.length;
        //alert(lenval);
        if(lenval==0)$('#checkval1').html( "Not Available.");
        else $('#checkval1').html("");

        $('#checkval').append("<table border>");
        $('#checkval').html("<th>id</th><th>Docname</th><th>Date</th><th>Time</th><th> </th>");
        for (var i=0;i<lenval;i++) {

        $('#checkval').append("<tr><td style='display:none'>"+source[i][0]+"</td><td>"+source[i][1]+"</td><td>"+ source[i][2]+"</td><td>"+ source[i][3]+"</td><td>"+ source[i][4]+"</td><td alidn='center'><a href='#' class='delExpenseRowuser'><img src='images/delete.png' border='0' width='40' height='40' class='textmiddle' ></img></a></td></tr>");

        }

        }

        });
});



//var userdelete='';

$(".delExpenseRowuser").live("click", function(){
	var newurl =$("#servername").val();
        var userdelete='';
        userdelete = $(this).parent().siblings(":first").text();
        //alert(userdelete);
        var r=confirm("Delete a "+userdelete);
        if (r==true)
        {

        //alert (devicetodelete);

        $(this).closest('tr').remove();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/deleteuser',
        dataType: 'json',
        type    : 'POST',
        data	: {data:userdelete},
        success : function (data)
        {

        }
        });


        //delvalSelected();
        }
        else{}


});




function getAge(dateString) {
        var now = new Date();
        var today = new Date(now.getYear(),now.getMonth(),now.getDate());

        var yearNow = now.getYear();
        var monthNow = now.getMonth();
        var dateNow = now.getDate();

        var dob = new Date(dateString.substring(6,10),
        dateString.substring(0,2)-1,
        dateString.substring(3,5)
        );

        var yearDob = dob.getYear();
        var monthDob = dob.getMonth();
        var dateDob = dob.getDate();
        var age = {};
        var ageString = "";
        var yearString = "";
        var monthString = "";
        var dayString = "";


        var yearAge = yearNow - yearDob;

        if (monthNow >= monthDob)
        var monthAge = monthNow - monthDob;
        else {
        yearAge--;
        var monthAge = 12 + monthNow -monthDob;
        }

        if (dateNow >= dateDob)
        var dateAge = dateNow - dateDob;
        else {
        monthAge--;
        var dateAge = 31 + dateNow - dateDob;

        if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
        }
        }

        age = {
        years: yearAge,
        months: monthAge,
        days: dateAge
        };

        if ( age.years > 1 ) yearString = " Yrs";
        else yearString = " Yr";
        if ( age.months> 1 ) monthString = " Mns";
        else monthString = " Mn";
        if ( age.days > 1 ) dayString = " Days";
        else dayString = " Day";


        if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
        ageString = age.years + yearString + ", " + age.months + monthString + " old.";
        else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
        ageString = "Only " + age.days +dayString+ " old!";
        else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
        ageString = age.years + yearString + " old. Happy Birthday!!";
        else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
        ageString = age.years + yearString + " and " + age.months + monthString + " old.";
        else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
        ageString = age.months + monthString + " old.";
        else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
        ageString = age.years + yearString +" old.";
        else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
        ageString = age.months + monthString + " old.";
        else ageString = "Oops! Could not calculate age!";

        return ageString;
}

// A bit of jQuery to call the getAge() function and update the page...

$(document).ready(function() {
        $("#Age").click(function(e) {
        e.preventDefault();

        var dateval = getAge($("input#DoB").val());
        $("#Age").val(dateval);
        });
});


$("#newpat").click(function(){
        $("#empId").val(" ");
        $("#Basic-details").trigger('click');
});


//$('input').prop('readonly',true);
//$('textarea').prop('readonly',true);

$('.usrper').prop('readonly',false);

var inserted = "inserted";
var valedid = "Please Select A Patient";
var pna = "Patient Id Not Available";

function updated(msg){
        $("#toast").effect("highlight", {}, 3000);
        $("#toast").text(msg);
        $( "#toast" ).slideUp( 300 );
}


/*

Menu Slide Function Start

*/

var unitNo;
var tr;

tr = $('.pan_over').find('tr');
tr.bind('click', function(event) {

        unitNo = $(this).find("td.gtx").html();
        //alert(unitNo);
        if ((unitNo=="Basic details")||(unitNo=="Personal Details")) {
        $("#Basic-details").trigger('click');
        $("#top-panel").slideToggle();
        }else if (unitNo=="Social History"){
        $("#Basic-details").trigger('click');
        $("#sh_tb").trigger('click');
        $("#top-panel").slideToggle();
        }else if (unitNo=="Chief Complaint"){
        $("#Basic-details").trigger('click');
        $("#cc_tb").trigger('click');
        $("#top-panel").slideToggle();
        }else if (unitNo=="Medical History"){
        $("#Medical-History").trigger('click');
        $("#top-panel").slideToggle();
        }else if (unitNo=="OB/Gyn History"){
        $("#Medical-History").trigger('click');
        $("#obh_tb").trigger('click');
        $("#top-panel").slideToggle();
        }else if ((unitNo=="Medical Exam")||(unitNo=="General Exam")) {
        $("#General-Exam").trigger('click');
        $("#top-panel").slideToggle();
        }else if ((unitNo=="Systemic Exam")||(unitNo=="General Exam")) {
        $("#General-Exam").trigger('click');
        $("#se_tb").trigger('click');
        $("#top-panel").slideToggle();
        }else if (unitNo=="Cardiovascular System") {
        $("#1").trigger('click');
        $("#top-panel").slideToggle();
        }else if (unitNo=="Respiratory System") {
        $("#General-Exam").trigger('click');
        $("#se_tb").trigger('click');
        $("#2").trigger('click');
        $("#top-panel").slideToggle();
        }else if (unitNo=="Abdomen") {
        $("#General-Exam").trigger('click');
        $("#se_tb").trigger('click');
        $("#3").trigger('click');
        $("#top-panel").slideToggle();
        }else if (unitNo=="Eye") {
        $("#General-Exam").trigger('click');
        $("#se_tb").trigger('click');
        $("#4").trigger('click');
        $("#top-panel").slideToggle();
        }else if (unitNo=="ENT") {
        $("#General-Exam").trigger('click');
        $("#se_tb").trigger('click');
        $("#5").trigger('click');
        $("#top-panel").slideToggle();
        }else if (unitNo=="Musculo Skeletal System") {
        $("#General-Exam").trigger('click');
        $("#se_tb").trigger('click');
        $("#6").trigger('click');
        $("#top-panel").slideToggle();
        }else if (unitNo=="Skin System") {
        $("#General-Exam").trigger('click');
        $("#se_tb").trigger('click');
        $("#7").trigger('click');
        $("#top-panel").slideToggle();
        }else if (unitNo=="Central Nervous System") {
        $("#General-Exam").trigger('click');
        $("#se_tb").trigger('click');
        $("#8").trigger('click');
        $("#top-panel").slideToggle();
        }else if (unitNo=="Gynaecological Examination") {
        $("#General-Exam").trigger('click');
        $("#se_tb").trigger('click');
        $("#9").trigger('click');
        $("#top-panel").slideToggle();
        }else if (unitNo=="Injuries") {
        $("#General-Exam").trigger('click');
        $("#se_tb").trigger('click');
        $("#10").trigger('click');
        $("#top-panel").slideToggle();
        }else if (unitNo=="Burns") {
        $("#General-Exam").trigger('click');
        $("#se_tb").trigger('click');
        $("#11").trigger('click');
        $("#top-panel").slideToggle();
        }else if (unitNo=="Investigations"){
        $("#Investigations").trigger('click');
        $("#top-panel").slideToggle();
        }
        else if (unitNo=="Complete Blood Count") {
        $("#top-panel").slideToggle();
        $("#Investigations").trigger('click');
        $("#cbc").trigger('click');
        $("#viewRslts").trigger('click');
        }
        else if (unitNo=="Pulmonary Function"){
        $("#top-panel").slideToggle();
        $("#Investigations").trigger('click');
        $("#pft").trigger('click');
        $("#viewRslts").trigger('click');
        }
        else if (unitNo=="Blood Culture"){
        $("#top-panel").slideToggle();
        $("#Investigations").trigger('click');
        $("#bc").trigger('click');
        $("#viewRslts").trigger('click');
        }
        else if (unitNo=="Audiogram"){
        $("#top-panel").slideToggle();
        $("#Investigations").trigger('click');
        $("#aud").trigger('click');
        $("#viewRslts").trigger('click');
        }
        else if (unitNo=="Peripheral Smear"){
        $("#top-panel").slideToggle();
        $("#Investigations").trigger('click');
        $("#ps").trigger('click');
        $("#viewRslts").trigger('click');
        }
        else if (unitNo=="Liver Function Test"){
        $("#top-panel").slideToggle();
        $("#Investigations").trigger('click');
        $("#lft").trigger('click');
        $("#viewRslts").trigger('click');
        }
        else if (unitNo=="Urine Culture"){
        $("#top-panel").slideToggle();
        $("#Investigations").trigger('click');
        $("#uc").trigger('click');
        $("#viewRslts").trigger('click');
        }
        else if (unitNo=="Stool Routine"){
        $("#top-panel").slideToggle();
        $("#Investigations").trigger('click');
        $("#sr").trigger('click');
        $("#viewRslts").trigger('click');
        }
        else if (unitNo=="Serum Electrolytes"){
        $("#top-panel").slideToggle();
        $("#Investigations").trigger('click');
        $("#se").trigger('click');
        $("#viewRslts").trigger('click');
        }
        else if (unitNo=="Lipid Profile"){
        $("#top-panel").slideToggle();
        $("#Investigations").trigger('click');
        $("#lp").trigger('click');
        $("#viewRslts").trigger('click');
        }
        else if (unitNo=="Stool Culture"){
        $("#top-panel").slideToggle();
        $("#Investigations").trigger('click');
        $("#sc").trigger('click');
        $("#viewRslts").trigger('click');
        }
        else if (unitNo=="Blood Urea"){
        $("#top-panel").slideToggle();
        $("#Investigations").trigger('click');
        $("#bu").trigger('click');
        $("#viewRslts").trigger('click');
        }
        else if (unitNo=="HIV"){
        $("#top-panel").slideToggle();
        $("#Investigations").trigger('click');
        $("#hiv").trigger('click');
        $("#viewRslts").trigger('click');
        }
        else if (unitNo=="ECG"){
        $("#top-panel").slideToggle();
        $("#Investigations").trigger('click');
        $("#ecg").trigger('click');
        $("#viewRslts").trigger('click');
        }
        else if (unitNo=="Blood Sugar Fasting"){
        $("#top-panel").slideToggle();
        $("#Investigations").trigger('click');
        $("#bsf").trigger('click');
        $("#viewRslts").trigger('click');
        }
        else if (unitNo=="HBsAg"){
        $("#top-panel").slideToggle();
        $("#Investigations").trigger('click');
        $("#hba").trigger('click');
        $("#viewRslts").trigger('click');
        }
        else if (unitNo=="Urine Routine"){
        $("#top-panel").slideToggle();
        $("#Investigations").trigger('click');
        $("#ur").trigger('click');
        $("#viewRslts").trigger('click');
        }
        else if (unitNo=="Serum Creatinine"){
        $("#top-panel").slideToggle();
        $("#Investigations").trigger('click');
        $("#scn").trigger('click');
        $("#viewRslts").trigger('click');
        }
        else if (unitNo=="Echo"){
        $("#top-panel").slideToggle();
        $("#Investigations").trigger('click');
        $("#ech").trigger('click');
        $("#viewRslts").trigger('click');
        }
        else if (unitNo=="X-Ray"){
        $("#top-panel").slideToggle();
        $("#Investigations").trigger('click');
        $("#xr").trigger('click');
        $("#viewRslts").trigger('click');
        }
        else if (unitNo=="Blood Sugar Post Prandial"){
        $("#top-panel").slideToggle();
        $("#Investigations").trigger('click');
        $("#bspp").trigger('click');
        $("#viewRslts").trigger('click');
        }
        else if (unitNo=="Blood Sugar Random"){
        $("#top-panel").slideToggle();
        $("#Investigations").trigger('click');
        $("#bsr").trigger('click');
        $("#viewRslts").trigger('click');
        }
        else if (unitNo=="Ultrasound Abdomen"){
        $("#top-panel").slideToggle();
        $("#Investigations").trigger('click');
        $("#ua").trigger('click');
        $("#viewRslts").trigger('click');
        }
        else if (unitNo=="Glucose Tolerance"){
        $("#top-panel").slideToggle();
        $("#Investigations").trigger('click');
        $("#gtt").trigger('click');
        $("#viewRslts").trigger('click');
        }
        else if (unitNo=="Prescription"){
        $("#Prescription").trigger('click');
        $("#top-panel").slideToggle();
        }
        else if (unitNo=="Management"){
        $("#Management").trigger('click');
        $("#top-panel").slideToggle();
        }
        else if (unitNo=="Medical Certificate"){
        $("#Management").trigger('click');
        $("#mc_tb").trigger('click');
        $("#top-panel").slideToggle();
        }
        else if (unitNo=="Fitness Certificate"){
        $("#Management").trigger('click');
        $("#fc_tb").trigger('click');
        $("#top-panel").slideToggle();
        }
        else if (unitNo=="Report"){
        $("#Management").trigger('click');
        $("#re_tb").trigger('click');
        $("#top-panel").slideToggle();
        }
        else if (unitNo=="Progress"){
        $("#Progress").trigger('click');
        $("#top-panel").slideToggle();
        }
});

$("#top-panel").hide();
// Lets make the top panel toggle based on the click of the show/hide link

$("#sub-panel").click(function(){
        // Toggle the bar up
        var eid = $("#empId").val();
        if(eid==""){ updated(valedid);
        $("#empId").focus();}
        else {
        $("#top-panel").slideToggle();
        // Settings

        var el = $("#shText");
        // Lets us know whats inside the element

        var state = $("#shText").html();
        // Change the state

        state = (state == 'Menu' ? '<span id="shText" class="button" >Menu</span>' : '<span id="shText" class="button" >Menu</span>');
        // Finally change whats insdide the element ID

        el.replaceWith(state);

        }
}); // end sub panel click function

/*

Menu Slide Function End

*/


$("#canrzom").click(function(){

        //alert("cli");

        var canvascan = $("#newSignature");
        var c = canvascan[0].getContext("2d");

        var path = $("#tmpsrtsrc").val();
        //alert(path);

        var image1 = new DragImage(path, 200, 100);


        var loop = setInterval(function() {
        var widthheight = window.innerWidth/2;
        c.fillStyle = "";
        c.fillRect(0, 0, widthheight, widthheight);

        image1.update();

        }, 30);

        var mouseX = 0,
        mouseY = 0;
        var mousePressed = false;
        var dragging = false;
        canvascan.mousemove(function(e) {
        mouseX = e.offsetX;
        mouseY = e.offsetY;
        })

        $(document).mousedown(function() {
        mousePressed = true;
        }).mouseup(function() {
        mousePressed = false;
        dragging = false;
        });

        $(document).mousedown(function() {
        mousePressed = true;
        }).mouseup(function() {
        mousePressed = false;
        dragging = false;
        });

        function DragImage(src, x, y) {
        var that = this;
        var startX = 0,
        startY = 0;
        var drag = false;

        this.x = x;
        this.y = y;
        var img = new Image();
        img.src = src;
        this.update = function() {
        if (mousePressed ) {

        var left = that.x;
        var right = that.x + img.width;
        var top = that.y;
        var bottom = that.y + img.height;
        if (!drag) {
        startX = mouseX - that.x;
        startY = mouseY - that.y;
        }
        if (mouseX < right && mouseX > left && mouseY < bottom && mouseY > top) {
        if (!dragging){
        dragging = true;
        drag = true;
        }

        }

        } else {

        drag = false;
        }
        if (drag) {
        that.x = mouseX - startX;
        that.y = mouseY - startY;
        }
        c.drawImage(img, that.x, that.y);
        }
        }

});


//canvas move testing//


//INSERTING FUNCTION STARTING...//

/*******Basic Details inserting function start*********/

/*******Male-female inserting function start*********/
var $console = $('#console');
$("#malerfemale").find("input[type='radio']").each(function(){
        $(this).change(function(){
        $console.text(this.value);

        });
        $('input[name=capture_type]').change(function() {
        var radio_val = $('input[name=capture_type]:checked').val();
        //alert('Radio Value: '+radio_val);
        gend.value = radio_val;
        });
});
/*******Male-female inserting function end*********/

/*******jquery calender inserting function start*******/

$('#dg ').datepicker({
        changeYear: true,
        yearRange: 'c-30:c',
        dateFormat: 'dd/mm/yy',
        changeMonth: true
});

$('#schda ').datepicker({
        changeYear: true,
        yearRange: 'c-30:c',
        dateFormat: 'dd/mm/yy',
        changeMonth: true,
        minDate:"0D"
});



$('#DoB').datepicker({
        changeYear: true,
        yearRange: 'c-30:c',
        dateFormat: 'mm/dd/yy',
        changeMonth: true,
        maxDate:"0D"
});
function displayDatepicker(){
        $('.dat').datepicker({
        changeYear: true,
	yearRange: 'c-10:c',
	dateFormat: 'dd/mm/yy',
	changeMonth: true
        });
        }

/*$('#Age').click(function (){
var today = new Date(),
birthday = $('#DoB').datepicker("getDate"),
age = ((today.getMonth() > birthday.getMonth())||
(today.getMonth() == birthday.getMonth() && today.getDate() >= birthday.getDate())) ?
today.getFullYear() - birthday.getFullYear() : today.getFullYear() - birthday.getFullYear()-1;
$("#Age").val(age);
});*/


/*******jquery calender inserting function end*********/

/*******jquery Pincode inserting function end*********/

$('#pincode1').keyup(function() {
        if ( $('#pincode1').val().length == '6' )
        {
        pin_zip_loc();
        pin_zip();
        $('#jqxdropdownlist').show();
        }
        else
        {
        $('#cityname').val("");
        $('#cmbStateCurrent').val("");
        $('#cmbCountryCurrent').val("");
        $('#jqxdropdownlist').hide();
        //$('#jqxdropdownlist').empty();
        }
        if ( $('#pincode1').val().length > '6' )
        {
        $('#pincode1').val("");
        }
});


function pin_zip_loc()
{
	var newurl =$("#servername").val();
        dataArray= document.getElementById('pincode1').value;
        $.ajax({
        dataType: 'json',
        type    : 'POST',
        url: 'http://greenocean.in/rest-tst/index.php/api/example/pin_location',
        data    : {data:dataArray},
        success: function (data) {
        var source = $.parseJSON(data.location);
        //alert(source);
        $("#jqxdropdownlist").jqxDropDownList({ source: source,selectedIndex:'none', width: '150px', height: '25px', color:'#005a9c'});},
        'error': function () {$('#pincode1').val("");$('#jqxdropdownlist').hide();
        //alert("Please Enter Valid PIN");
        var validpin = "Please Enter Valid PIN";
        updated(validpin);
        }
        });

}

function pin_zip()
{
	var newurl =$("#servername").val();
        dataArray= document.getElementById('pincode1').value;
        //gethis = document.getElementById('chdate').value;
        //alert(gethis);

        $.ajax({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/HDis_Pin_Zip',
        'data'    : {data: dataArray},
        'success' : function(data)
        {
        if (data.response =='true')
        {	$("#cityname").val(data.District);
        $("#cmbCountryCurrent").val(data.Country);
        $("#cmbStateCurrent").val(data.State);
        }
        else
        {
        //	alert("Please Enter Valid PIN");
        var validpin = "Please Enter Valid PIN";
        updated(validpin);
        }
        }
        });
}

$('#jqxdropdownlist').bind('select', function (event) {
        var args = event.args;
        var item = $('#jqxdropdownlist').jqxDropDownList('getItem', args.index);
        //alert('Selected: ' + item.label);
        $("#areavalue").val(item.label);
});


/*******jquery Pincode inserting function end*********/

$("#maksched").click(function(){
var newurl =$("#servername").val();
        var data = new Array();
        data[0] = $("#schpid").val();
        data[1] = $("#schdn").val();
        data[2] = $("#schda").val();
        data[3] = $("#schtim").val();


        $.ajax({
        url 	  : 'http://greenocean.in/rest-tst/index.php/api/example/createSchedule',
        dataType: 'json',
        type    : 'POST',
        data	  : {data:data},
        success : function (data){
        if (data.response =="true")
        updated(data.message);

        else
        updated(data.message);
        }

        });
        // upload_proimg();

});



$("#AdBscDtl").click(function(){
        $("#phnum").trigger('click');
        var data = new Array();
        data[0] = $("#name").val();
        data[1] = $("#DoB").val();
        data[2] = $("#Age").val();
        data[3] = $("#gend").val();
        //data[4] = $("#saveWebcam").val();
        data[5] = $("#Height").val();
        data[6] = $("#Weight").val();
        data[7] = $("#IdMarks").val();
        data[8] = $("#txtAddress1Current").val();
        data[9] = $("#cityname").val();
        data[10] = $("#areavalue").val();
        data[11] = $("#cmbCountryCurrent").val();
        data[12] = $("#cmbStateCurrent").val();
        data[13] = $("#pincode1").val();
        data[14] = $("#empId").val();
        data[15] = $("#u_name").val();
        data[16] = $("#mailid").val();
        data[17] = $("#phnum").val();
	var newurl =$("#servername").val();
        $.ajax({
        url 	  : 'http://greenocean.in/rest-tst/index.php/api/example/basic',
        dataType: 'json',
        type    : 'POST',
        data	  : {data:data},
        success : function (data){
        if (data.response =="true")
        updated(data.message);

        else
        updated(data.message);
        }

        });
        // upload_proimg();

});



/*******Basic Details inserting function end*********/

/*******Personal History inserting function start********/

$('input[name=Family-Planing]').change(function() {
        var fampl = $('input[name=Family-Planing]:checked').val();
        //alert('Radio Value: '+fampl);
        famplantxt.value = fampl;
});
$('input[name=education-rad]').change(function() {
        var educa = $('input[name=education-rad]:checked').val();
        //alert('Radio Value: '+fampl);
        PreEduVal.value = educa;
});

$('input[name=Diet-rad]').change(function() {
        var diet = $('input[name=Diet-rad]:checked').val();
        //alert('Radio Value: '+fampl);
        PreDietVal.value = diet;
});

$('input[name=Dominant-Hand]').change(function() {
        var hand = $('input[name=Dominant-Hand]:checked').val();
        //alert('Radio Value: '+fampl);
        PreHandVal.value = hand;
});

$('#alcohol').on('change', function () {
        var $this = $(this),
        val  = $this.val();
        //alert('onChange = ' + val);
        PreAlcoholVal.value = val;
});

$('#marital_status').on('change', function () {
        var $this = $(this),
        val  = $this.val();
        // alert('onChange = ' + val);
        PreMSVal.value = val;
});

$('#industry_jc').on('change', function () {
        var $this = $(this),
        val  = $this.val();
        // alert('onChange = ' + val);
        indust_add.value = val;
});
$('#job_nature').on('change', function () {
        var $this = $(this),
        val  = $this.val();
        // alert('onChange = ' + val);
        job_nat_add.value = val;
         var chind = $('#industry').val();
        if (chind!="") {
        $('#indust_add').val(chind);
        }
});
$('#task_jc').on('change', function () {
        var $this = $(this),
        val  = $this.val();
        // alert('onChange = ' + val);
        task_add.value = val;
});

$("#AdperHist").click(function(){
        var data = new Array();
        data[0] = $("#duration").val();
        data[1] = $("#cigarettes").val();
        data[2] = $("#packyrs").val();
        data[3] = $("#Pregutdur").val();
        data[4] = $("#child").val();
        data[5] = $("#ageofold").val();
        data[6] = $("#young").val();
        data[7] = $("#jobCategory").val();
        data[8] = $("#PreNotes").val();
        data[9] = $("#PreAlcoholVal").val();
        data[10] = $("#PreMSVal").val();
        data[11] = $("#famplantxt").val();
        data[12] = $("#PreDietVal").val();
        data[13] = $("#PreHandVal").val();
        data[14] = $("#PreEduVal").val();
        data[15] = $("#empId").val();
        data[16] = $("#u_name").val();
        data[17] = $("#soc").val();
        data[18] = $("#indust_add").val();
        data[19] = $("#job_nat_add").val();
        data[20] = $("#task_add").val();
        var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/personal',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        {			updated(data.message);}
        else
        updated(data.message);
        }
        });
});

$('#subssub').click(function(){
        var data = [];
        $.each($('.field'), function() {
        data.push($(this).val());
        });

        if(data.length == 0)
        data = "none";

        var eid= document.getElementById('empId').value;
        var dna= document.getElementById('u_name').value;
        var newurl =$("#servername").val();
        $.ajax({
        url		: 'http://greenocean.in/rest-tst/index.php/api/example/Substance',
        dataType	: 'json',
        type	: 'POST',
        data: {data : data,val : eid, docna:dna },
        success	: function(data,val){
        $("#dashsub").show();
        //-------------------------------------------------------------//

        $("#subs").dataTable({

        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getsubData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
        [{ "sTitle": "Sub_Name","aTargets":[0]},
        { "sTitle": "Route","aTargets":[1]},
        { "sTitle": "Duration","aTargets":[2]}],
        "sDom": '<"subtoolbar">frtip'
        });
        //-------------------------------------------------------------//
        if(data.response ==true)
        //alert ("Inserted ");
        updated(inserted);
        }
        });

        return false;


});
var i = $('input').size() + 1;
	var sub=1;
	$(document).on("click", ".add", function(){
	if(sub==1)
		{
		$("#subssub").show();
		$(".del_ExpenseRow1").hide();
		}
	sub++;
	$('.del_ExpenseRow1').hide();
	$('<div> <table class="display dt-example"><tr> </td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" name="dynamic[]" class="field" size="10" /></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="field txtsm" name="dynamic[]" size="8" /> </td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="field txtsm" name="dynamic[]" size="8" /></td><td><img src="img/delete.png" border="0" width="17" height="17" class="textmiddle del_ExpenseRow11"/></tr></table></div>').fadeIn('slow').appendTo('.inputs2');
	i++;
	//alert(sub);
	});

	$(document).on("click", ".del_ExpenseRow11", function(){
	sub--;
		$(this).closest('tr').remove();
		if(sub==1)
		{
		$("#subssub").hide();
		$(".del_ExpenseRow1").show();
		}

	});
	$(document).on("click", ".del_ExpenseRow1", function(){

		$(".field").val("");
		$("#su_ab").hide();
  $("#tdsub").show();
   $("#subssub").hide();


	});

/*******Personal History inserting function end*********/

/**** pre emp insert function **/

$('#prevempbsub').click(function(){
        var data = [];
        $.each($('.fieldpj1'), function() {
        data.push($(this).val());
        });

        if(data.length == 0)
        data = "none";

        var eid= document.getElementById('empId').value;
        var dna= document.getElementById('u_name').value;
var newurl =$("#servername").val();
        $.ajax({

        url	: 'http://greenocean.in/rest-tst/index.php/api/example/Premp',
        dataType: 'json',
        type	: 'POST',
        data: {data : data, val : eid, docna:dna },
        success	: function(data,val){

        $("#preempocc").show();
//-------------------------------------------------------------//



        $("#prempoc").dataTable({
                "bJQueryUI"	: true,
                "bProcessing"	: false,
                "bFilter"	: false,
                "bPaginate"	: true,
                "bDestroy"	: true,
                "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getprempoc',
                'fnServerData'	: function(sSource, aoData, fnCallback)
                {
                aoData.push( { "name": "my_field", "value": eid } );
                $.ajax
                ({
                'dataType': 'json',
                'type'    : 'POST',
                'url'     : sSource,
                'data'    : aoData,
                'success' : fnCallback
                });
                },
                "aoColumns":
                [{ "sTitle": "Job Title","aTargets":[0]},
                { "sTitle": "Comment","aTargets":[1]},
                { "sTitle": "Company/Employee","aTargets":[2]},
                { "sTitle": "Work Place","aTargets":[3]},
                { "sTitle": "Nature of Job","aTargets":[4]},
                { "sTitle": "Duration","aTargets":[5]},
                { "sTitle": "Occup_illness","aTargets":[6]}],

                "sDom": '<"subtoolbar">frtip'
        });
        //-------------------------------------------------------------//

        if(data.response ==true)
        updated(inserted);
        }
        });
        return false;
});

var i = $('input').size() + 1;
$(document).on("click", ".addprejob", function(){
        $('<div> <table class="display dt-example"><tr></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" name="dynamicpj[]" class="fieldpj txtsm"/></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" name="dynamicpj[]" class="fieldpj"/></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" name="dynamicpj[]" class="fieldpj"/></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" name="dynamicpj[]" class="fieldpj	"/></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" name="dynamicpj[]" class="fieldpj txtsm"/></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldpj txtsm" name="dynamicpj[]" /></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldpj txtsm" name="dynamicpj[]"/></td><td><a href="#" class="del_ExpenseRow"><img src="img/delete.png" border="0" width="17" height="17" class="textmiddle"/></a></tr></table></div>').fadeIn('slow').appendTo('.inputs1');
        i++;
});

$(document).on("click", ".del_ExpenseRow", function(){
        $(this).closest('tr').remove();

});
/**** pre emp insert function **/

/******* Medical History function start********/
$('#previllsub').click(function(){
        var data = [];
        $.each($(".fieldpl"), function() {
        data.push($(this).val());
        });

        if(data.length == 0)
        data = "none";

        var eid = $("#empId").val();
        var dna = $("#u_name").val();
var newurl =$("#servername").val();

        $.ajax({
                url	: 'http://greenocean.in/rest-tst/index.php/api/example/Preill',
                dataType: 'json',
                type	: 'POST',
                data: {data : data,val : eid,docna:dna },
                success	: function(data,val){

                $("#dasPreIll").show();
                //-------------------------------------------------------------//



                var oTable = $("#PreIll").dataTable({

                        "bJQueryUI"	: true,
                        "bProcessing"	: false,
                        "bFilter"	: false,
                        "bPaginate"	: true,
                        "bDestroy"	: true,
                        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getprevillData',
                        'fnServerData'	: function(sSource, aoData, fnCallback)
                        {
                        aoData.push( { "name": "my_field", "value": eid } );
                        $.ajax({
                        'dataType': 'json',
                        'type'    : 'POST',
                        'url'     : sSource,
                        'data'    : aoData,
                        'success' : fnCallback
                        });

                        },
                        "aoColumns":
                        [{ "sTitle": "Conditions","aTargets":[0] },
                        { "sTitle": "Duration","aTargets":[1]},
                        { "sTitle": "Treatment","aTargets":[2]}],
                        "sDom": '<"subtoolbar">frtip',
                        "iDisplayLength": 10


                });

                //-------------------------------------------------------------//
                if(data.response ==true)
                //alert ("Inserted ");
                updated(inserted);

                }
        });
        return false;

});

var i = $('input').size() + 1;

var cons=1;
$(document).on("click", "#a_ill", function()
{
if(cons==1)
{
$(".del_ExpenseRow3").hide();
$("#previllsub").show();
}
co++;
cons++;
	$('<div> <table class="display dt-example"><tr></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" name="dynamicpl[]" class="fieldpl preil" id="conditions'+co+'"  size="6"></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldpl" name="dynamicpl[]"  size="10"/></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldpl" name="dynamicpl[]"  size="10"/></td> <td><img src="img/delete.png" border="0" width="17" height="17" class="textmiddle del_ExpenseRow33"  /></tr></table></div>').fadeIn('slow').appendTo('.inputs4');
	i++;

	function split( val )
	{
        	return val.split( /,\s*/ );
        }
        function extractLast( term )
        {
        	return split( term ).pop();
       	}
	$( "#conditions"+co).bind( "keydown", function( event ) {
       var id = $(this).attr('id');
     // alert(id);

                if ( event.keyCode === $.ui.keyCode.TAB &&
                        $( this ).data( "autocomplete" ).menu.active ) {
                    event.preventDefault();
                }
            })
            .autocomplete({
                source: function( request, response ) {
                    $.getJSON( "http://greenocean.in/rest-tst/index.php/api/example/getcondition",{
                        term: extractLast( request.term )
                       //alert(term)

                    },response );
                },
                search: function() {
                    var term = extractLast( this.value );
                    if ( term.length < 1 ) {

                        return false;
                    }
                },
                focus: function() {
                    return false;
                },
                select: function( event, ui ) {
                    var terms = split( this.value );
                    terms.pop();
                    terms.push( ui.item.value );

                    this.value = terms.join( "," );

                    var data=this.value;
                    //alert(data);
                    $("#conditions"+co).val(this.value);
                       return false;

                }
            });
	});

        $(document).on("click", ".del_ExpenseRow33", function()
        {
                cons--;
                co++;
                co--;
                $(this).closest('tr').remove();
                if(cons==1)
                {
                $(".del_ExpenseRow3").show();
                }

        });
        $(document).on("click", ".del_ExpenseRow3", function()
        {

                $(".fieldpl").val("");
                $("#pr1").hide();
                 $("#aill").show();
                 $("#previllsub").hide();
        });
//------------------------------//

$('#immsub').click(function(){

	var newurl =$("#servername").val();
        var data = [];
        $.each($('.fieldimm'), function() {
        data.push($(this).val());
        });

        if(data.length == 0)
        data = "none";

        var eid= document.getElementById('empId').value;
        var dna= document.getElementById('u_name').value;
        $.ajax({

        url	: 'http://greenocean.in/rest-tst/index.php/api/example/immune',
        dataType: 'json',
        type	: 'POST',
        data: {data : data,val : eid,docna:dna },
        success	: function(data,val){

        $("#dasimmu").show();
        //-------------------------------------------------------------//
        $("#immu").dataTable({
        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getimmuData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
        [{ "sTitle": "Vaccine","aTargets":[0]},
        {"sTitle": "Date_Given","aTargets":[1]}],
        "sDom": '<"subtoolbar">frtip'
        });
        //-------------------------------------------------------------//

        if(data.response ==true)
        //alert ("Inserted ");
        updated(inserted);
        }
        });
        return false;
});

var i = $('input').size() + 1;


	var immn=1;
	$(document).on("click", "#addimm", function(){
	if(immn==1)
	{
	$(".del_ExpenseRow5").hide();
	$("#immsub").show();
	}
        imm++;
        immn++;

	$('<div> <table class="display dt-example"><tr></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" name="dynamicimm[]" class="fieldimm vaccineim" id="vaccine'+imm+'" size="9"/></td> <td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldimm dat" name="dynamicimm[]" size="10"/></td>  <td><img src="img/delete.png" border="0" width="17" height="17" class="textmiddle del_ExpenseRow55"/></tr></table></div>').fadeIn('slow').appendTo('.inputs6');
	i++;
	displayDatepicker();

	function split( val )
	{
        	return val.split( /,\s*/ );
        }
        function extractLast( term )
        {
        	return split( term ).pop();
       	}

	$( "#vaccine"+imm ).bind( "keydown", function( event ) {
       var id = $(this).attr('id');
     // alert(id);

                if ( event.keyCode === $.ui.keyCode.TAB &&
                        $( this ).data( "autocomplete" ).menu.active ) {
                    event.preventDefault();
                }
            })
            .autocomplete({
                source: function( request, response ) {
                    $.getJSON( "http://greenocean.in/rest-tst/index.php/api/example/getvaccine",{
                        term: extractLast( request.term )
                       //alert(term)

                    },response );
                },
                search: function() {
                    var term = extractLast( this.value );
                    if ( term.length < 1 ) {

                        return false;
                    }
                },
                focus: function() {
                    return false;
                },
                select: function( event, ui ) {
                    var terms = split( this.value );
                    terms.pop();
                    terms.push( ui.item.value );

                    this.value = terms.join( "," );

                    var data=this.value;
                    //alert(data);
                    $("#vaccine"+imm).val(this.value);
                       return false;

                }
            });
	});

	$(document).on("click", ".del_ExpenseRow55", function(){
	immn--;
	imm++;
	imm--;
		$(this).closest('tr').remove();

		if(immn==1)
		{
		  $(".del_ExpenseRow5").show();
		}

	});
	$(document).on("click", ".del_ExpenseRow5", function(){


		$(".fieldimm").val("");
		 $("#im_sn").hide();
                 $("#immun1").show();
                 $("#immsub").hide();


	});
//------------------------------//
var i = $('input').size() + 1;
        var al=1;
	$(document).on("click", ".addallergy", function(){
	if(al==1)
	{
	$('#allersub').show();
	$('.del_ExpenseRow4').hide();
	}
	al++;


	$('<div> <table class="display dt-example"><tr></td><td class="ui-state-default" rowspan="1" colspan="1" ><input type="text" name="dynamicallergy[]" class="fieldallergy" size="15"></td> <td class="ui-state-default" rowspan="1" colspan="1" ><input type="text" name="dynamicallergy[]" class="fieldallergy" size="15"></td>  <td><img src="img/delete.png" border="0" width="17" height="17" class="textmiddle del_ExpenseRow44"/> </tr></table></div>').fadeIn('slow').appendTo('.inputs7');
	i++;
	});

	$(document).on("click", ".del_ExpenseRow44", function(){
	al--;
	$(this).closest('tr').remove();
        if(al==1)
        {
        $('.del_ExpenseRow4').show();

        }
	});

	$(document).on("click", ".del_ExpenseRow4", function(){

	$(".fieldallergy").val("");
        //fieldfh
        $('#allersub').hide();
        $("#algy").hide();
  $("#aaller").show();


	});

$('#allersub').click(function(){
        var data = [];
        $.each($('.fieldallergy'), function() {
        data.push($(this).val());
        });

        if(data.length == 0)
        data = "none";


        var eid= document.getElementById('empId').value;
        var dna= document.getElementById('u_name').value;
        var newurl =$("#servername").val();
        $.ajax({

        url: 'http://greenocean.in/rest-tst/index.php/api/example/allergy',
        dataType: 'json',
        type: 'POST',
        data: {data : data,val : eid,docna:dna },
        success: function(data,val){

        $("#dasAllergy").show();
        //-------------------------------------------------------------//

        $("#Allergy").dataTable({
        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getAllergyData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
          [{ "sTitle": "Medication","aTargets":[0]},
           { "sTitle": "Others","aTargets":[1]}],
        "sDom": '<"subtoolbar">frtip'
        });

        //-------------------------------------------------------------//

        if(data.response ==true){
        // alert ("Inserted ");
        updated(inserted);
        }

        }
        });

        return false;

});

$('#famhissub').click(function(){
        var data = [];
        $.each($('.fieldfh'), function() {
        data.push($(this).val());
        });

        if(data.length == 0)
        data = "none";
			var newurl =$("#servername").val();

        var eid= document.getElementById('empId').value;
        var dna= document.getElementById('u_name').value;
        $.ajax({

        url: 'http://greenocean.in/rest-tst/index.php/api/example/famhis',
        dataType: 'json',
        type: 'POST',
        data: {data : data,val : eid,docna:dna },
        success: function(data,val){
        $("#dasFamily").show();
        //-------------------------------------------------------------//

        $("#Family").dataTable({
        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getFamilyData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
	[{ "sTitle": "Illness","aTargets":[0]},
	{ "sTitle": "Relation","aTargets":[1]}],
	"sDom": '<"subtoolbar">frtip'
        });
        //-------------------------------------------------------------//

        if(data.response ==true){
        //alert ("Inserted ");
        updated(inserted);
        }

        }
        });

        return false;

});

var i = $('input').size() + 1;
	var delfh=1;
	$(document).on("click", ".addfh", function(){


	if(delfh==1){
		$("famhissub").show();
	$('.del_ExpenseRow6').hide();

	}
delfh++;

        hi++;
        //alert(hi);
	$('<div> <table class="display dt-example"><tr></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" name="dynamicfh[]" class="fieldfh famhis" id="illness'+hi+'" size="7"></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldfh" name="dynamicfh[]" size="7" /></td><td><a href="#" class="del_ExpenseRow66"><img src="img/delete.png" border="0" width="17" height="17" class="textmiddle"/></a></tr></table></div>').fadeIn('slow').appendTo('.inputs5');
	i++;

	function split( val )
	{
        	return val.split( /,\s*/ );
        }
        function extractLast( term )
        {
        	return split( term ).pop();
       	}

	$( "#illness"+hi ).bind( "keydown", function( event ) {
       var id = $(this).attr('id');
     // alert(id);

                if ( event.keyCode === $.ui.keyCode.TAB &&
                        $( this ).data( "autocomplete" ).menu.active ) {
                    event.preventDefault();
                }
            })
            .autocomplete({
                source: function( request, response ) {
                    $.getJSON( "http://greenocean.in/rest-tst/index.php/api/example/getillness",{
                        term: extractLast( request.term )
                       //alert(term)

                    },response );
                },
                search: function() {
                    var term = extractLast( this.value );
                    if ( term.length < 1 ) {

                        return false;
                    }
                },
                focus: function() {
                    return false;
                },
                select: function( event, ui ) {
                    var terms = split( this.value );
                    terms.pop();
                    terms.push( ui.item.value );

                    this.value = terms.join( "," );

                    var data=this.value;
                    //alert(data);
                    $("#illness"+hi).val(this.value);
                       return false;

                }
            });


	});

	$(document).on("click", ".del_ExpenseRow66", function(){

		$(this).closest('tr').remove();

	hi++;

	hi--;
	//alert(hi);
	delfh--;
	if(delfh==1)
	{
	$('.del_ExpenseRow6').show();
	}
	});

	$(document).on("click", ".del_ExpenseRow6", function(){
	$(".fieldfh").val("");
	$("#adfh1").hide();
        $("#adfh").show();
        $("#famhissub").hide();
	});


$('#curmedisub').click(function(){
        var data = [];
        $.each($('.fieldmedi1'), function() {
        data.push($(this).val());
        });
        //alert(data.length);

        if(data.length == 0)
        data = "none";
			var newurl =$("#servername").val();
        var eid= document.getElementById('empId').value;
        var dna= document.getElementById('u_name').value;
        $.ajax({

        url	: 'http://greenocean.in/rest-tst/index.php/api/example/medication',
        dataType: 'json',
        type	: 'POST',
        data: {data : data,val : eid,docna:dna },
        success	: function(data,val){

        $("#dasCurr").show();
        //-------------------------------------------------------------//

        $("#Curr").dataTable({
        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getCurrData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
        [{ "sTitle": "Drug","aTargets":[0]},
        { "sTitle": "Brand","aTargets":[1]},
        { "sTitle": "Route","aTargets":[2]},

        { "sTitle": "Dosage","aTargets":[3]},
        { "sTitle": "M","aTargets":[4]},
        { "sTitle": "A","aTargets":[5]},
        { "sTitle": "E","aTargets":[6]},
        { "sTitle": "N","aTargets":[7]},
        { "sTitle": "Duration","aTargets":[8]},
        { "sTitle": "Remarks","aTargets":[9]}],
        "sDom": '<"subtoolbar">frtip'
        });
        //-------------------------------------------------------------//

        if(data.response ==true)
        //alert ("Inserted ");
        updated(inserted);
        }
        });
        return false;

});
var i = $('input').size() + 1;

var j=1;

var l=1;
$(document).on("click", "#addmedi1", function(){
		if(l==1)
		{
			$("#curmedisub").show();
			$('.curmed').hide();
		}
        j++;
        $('<div> <table class="display dt-example"><tr></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" name="dynamicpres[]" class="fieldmedi1 drugg"  size="6" id="drugc'+j+'" ></td> <td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldmedi1 brandd" id="brandc'+j+'" name="dynamicpres[]" size="6"/></td> <td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldmedi1 routee" id="routec'+j+'" name="dynamicpres[]"  size="6"/></td> <td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldmedi1 vrysml" id="dosagec'+j+'" name="dynamicpres[]" size="3"/></td> <td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldmedi1 vrysml" id="morc'+j+'" name="dynamicpres[]" size="3"/></td> <td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldmedi1 vrysml" id="aftc'+j+'" name="dynamicpres[]" size="3"/></td> <td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldmedi1 vrysml" id="evec'+j+'" name="dynamicpres[]" size="3"/></td> <td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldmedi1 vrysml" id="nitec'+j+'" name="dynamicpres[]" size="3"/></td> <td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldmedi1 vrysml" id="durc'+j+'" name="dynamicpres[]" size="3"/></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldmedi1" id="remksc'+j+'" name="dynamicpres[]" size="6"/></td>  <td><img src="img/delete.png" border="0" width="17" height="17" class="textmiddle curmed1"/>  </tr></table></div>').fadeIn('slow').appendTo('.inputs9');
        i++;

        l++;
});

$(document).on("click", ".curmed1", function(){

$(this).closest('tr').remove();

l--;

	if (l==1) {
		$('.curmed').show();

}

});

$(document).on("click", ".curmed", function(){
	$(".fieldmedi1").val("");


		$("#a_medi").show();
 		 $("#curmedisub").hide();
   	$("#medi").hide();



});
/******* Medical History function end*********/

/*******Systemic OB/Gyn History inserting function start********/

$("#AdObGyn").click(function(){
        var data = new Array();
        data[0] = $("#mhAge").val();
        data[1] = $("#mhReg").val();
        data[2] = $("#mhPer").val();
        data[3] = $("#mhDur").val();
        data[4] = $("#mhPn").val();
        data[5] = $("#mhFlw").val();
        data[6] = $("#mhMP").val();
        data[7] = $("#mhDSM").val();
        data[8] = $("#mhBrR").val();
        data[9] = $("#mhBrL").val();
        data[10] = $("#mhBrBF").val();
        data[11] = $("#mhVD").val();
        data[12] = $("#mhVDDur").val();
        data[13] = $("#mhVDOd").val();
        data[14] = $("#mhConMth").val();
        data[15] = $("#mhConDur").val();
        data[16] = $("#mhOth").val();
        data[17] = $("#ohChild").val();
        data[18] = $("#ohChildOld").val();
        data[19] = $("#ohChildYng").val();
        data[20] = $("#ohAbr").val();
        data[21] = $("#ohSB").val();
        data[22] = $("#ohMoD").val();
        data[23] = $("#ohPRC").val();
        data[24] = $("#ohPPC").val();
        data[25] = $("#ohOth").val();
        data[26] = $("#ohNotes").val();
        data[27] = $("#empId").val();
        data[28] = $("#u_name").val();
		var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/obgyn',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});

/*******Systemic OB/Gyn History inserting function end*********/


/*******report inserting function start********/

$("#Sub_rep").click(function(){
        var data = new Array();
        data[0] = $("#Diagno_rep").val();
        data[1] = $("#Clidia_rep").val();
        data[2] = $("#Curinc_rep").val();
        data[3] = $("#aller_rep").val();
        data[4] = $("#Other_rep").val();
        data[5] = $("#empId").val();
        data[6] = $("#u_name").val();

var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/mgreport',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});

/*******report inserting function end*********/



/*******General Exam inserting function end*********/

$("#AdGenExam").click(function(){
        var data = new Array();
        data[0] = $("#PreTemp").val();
        data[1] = $("#PrePulse").val();
        data[2] = $("#PreBP").val();

        data[3] = $("#PreBuildGen").val();
        data[4] = $("#PreWt").val();
        data[5] = $("#PreBMI").val();


        data[6] = $("#PreOralHyg").val();
        data[7] = $("#PreOralTon").val();
        data[8] = $("#PreOralTeeth").val();
        data[9] = $("#PreOralGum").val();
        data[10] = $("#PreOralTons").val();
        data[11] = $("#PreOralMuc").val();
        data[12] = $("#PreOralLip").val();


        data[13] = $("#PreThyNor").val();
        data[14] = $("#PreThyAb").val();
        data[15] = $("#PrePal").val();
        data[16] = $("#PreIct").val();
        data[17] = $("#PreCyn").val();
        data[18] = $("#PreOed").val();
        data[19] = $("#PreClub").val();
        data[20] = $("#PreLymNor").val();
        data[21] = $("#PreLymAb").val();
        data[22] = $("#PreNailCol").val();
        data[23] = $("#PreNailApp").val();
        data[24] = $("#PreNailAdd").val();
        data[25] = $("#PreGENotes").val();
        data[26] = $("#empId").val();
        data[27] = $("#u_name").val();
var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/general',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });



});

/*******General Exam inserting function end*********/

/*******system Exam inserting function start********/

//Cardiovascular System start

$("#AdCard").click(function(){
        var data = new Array();
        data[0] = $("#cardioPulRate").val();
        data[1] = $("#cardioPulRhy").val();
        data[2] = $("#cardioPulVol").val();
        data[3] = $("#cardioHrtAI").val();
        data[4] = $("#cardioHrtRate").val();
        data[5] = $("#cardioHrtRhy").val();
        data[6] = $("#cardioHrtS").val();
        data[7] = $("#cardioHrtMur").val();
        data[8] = $("#cardioHrtAdd").val();
        data[9] = $("#cardioPPNor").val();
        data[10] = $("#cardioPPAb").val();
        data[11] = $("#cardioBPSys").val();
        data[12] = $("#cardioBPDis").val();
        data[13] = $("#cardioNotes").val();
        data[14] = $("#empId").val();
        data[15] = $("#u_name").val();
		var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/card',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});

//Cardiovascular System end

//Respiratory System START

$("#AdRespir").click(function(){
        var data = new Array();
        data[0] = $("#respChstRate").val();
        data[1] = $("#respChstShape").val();
        data[2] = $("#respChstSym").val();
        data[3] = $("#respChstMov").val();
        data[4] = $("#respChstTr").val();
        data[5] = $("#respAusBS").val();
        data[6] = $("#respAusAS").val();
        data[7] = $("#respAusLA").val();
        data[8] = $("#respPalCr").val();
        data[9] = $("#respPerRes").val();
        data[10] = $("#respPerAb").val();
        data[11] = $("#respNotes").val();
        data[12] = $("#empId").val();
        data[13] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/resp',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//Respiratory System END

//Abdomen START

$("#AdAbdomen").click(function(){
        var data = new Array();
        data[0] = $("#absExSh").val();
        data[1] = $("#absExSym").val();
        data[2] = $("#absExMov").val();
        data[3] = $("#absExAb").val();
        data[4] = $("#absAusBS").val();
        data[5] = $("#absAusBr").val();
        data[6] = $("#absPalRig").val();
        data[7] = $("#absPalTen").val();
        data[8] = $("#absPalSpl").val();
        data[9] = $("#absPalLiv").val();
        data[10] = $("#absPalAb").val();
        data[11] = $("#absGSIO").val();
        data[12] = $("#absGSIC").val();
        data[13] = $("#absGSFC").val();
        data[14] = $("#absPerRes").val();
        data[15] = $("#absPerAb").val();
        data[16] = $("#absNotes").val();
        data[17]= $("#empId").val();
			var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/abdomen',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//Abdomen END

//EYE START

$("#AdEye").click(function(){

        var data = new Array();
        data[0] = $("#peCorL").val();
        data[1] = $("#peCorR").val();
        data[2] = $("#peConL").val();
        data[3] = $("#peConR").val();
        data[4] = $("#peScL").val();
        data[5] = $("#peScR").val();
        data[6] = $("#peACL").val();
        data[7] = $("#peACR").val();
        data[8] = $("#peIPL").val();
        data[9] = $("#peIPR").val();
        data[10] = $("#peLenL").val();
        data[11] = $("#peLenR").val();
        data[12] = $("#faCVL").val();
        data[13] = $("#faCVR").val();
        data[14] = $("#faPerL").val();
        data[15] = $("#faPerR").val();
        data[16] = $("#faOPL").val();
        data[17] = $("#faOPR").val();
        data[18] = $("#faDVL").val();
        data[19] = $("#faDVR").val();
        data[20] = $("#faNVL").val();
        data[21] = $("#faNVR").val();
        data[22] = $("#faPGL").val();
        data[23] = $("#faPGR").val();
        data[24] = $("#faCLL").val();
        data[25] = $("#faCLR").val();
        data[26] = $("#opRetL").val();
        data[27] = $("#opRetR").val();
        data[28] = $("#opODL").val();
        data[29] = $("#opODR").val();
        data[30] = $("#opBVL").val();
        data[31] = $("#opBVR").val();
        data[32] = $("#opVitL").val();
        data[33] = $("#opVitR").val();
        data[34] = $("#eyeNotes").val();
        data[35] = $("#empId").val();
        data[36] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/eye',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });

});
//EYE END

//ENT

$("#AdENT").click(function(){
        var data = new Array();
        data[0] = $("#eExL").val();
        data[1] = $("#eExR").val();
        data[2] = $("#eACL").val();
        data[3] = $("#eACR").val();
        data[4] = $("#eEdL").val();
        data[5] = $("#eEdR").val();
        data[6] = $("#eRTL").val();
        data[7] = $("#eRTR").val();
        data[8] = $("#eWTL").val();
        data[9] = $("#eWTR").val();
        data[10] = $("#eCHL").val();
        data[11] = $("#eCHR").val();
        data[12] = $("#eAuL").val();
        data[13] = $("#eAuR").val();
        data[14] = $("#nsEAL").val();
        data[15] = $("#nsEAR").val();
        data[16] = $("#nsANL").val();
        data[17] = $("#nsANR").val();
        data[18] = $("#nsSeL").val();
        data[19] = $("#nsSeR").val();
        data[20] = $("#nsTbL").val();
        data[21] = $("#nsTbR").val();
        data[22] = $("#nsNML").val();
        data[23] = $("#nsNMR").val();
        data[24] = $("#nsNpL").val();
        data[25] = $("#nsNpR").val();
        data[26] = $("#nsNAL").val();
        data[27] = $("#nsNAR").val();
        data[28] = $("#thBTL").val();
        data[29] = $("#thBTR").val();
        data[30] = $("#thEpL").val();
        data[31] = $("#thEpR").val();
        data[32] = $("#thGFL").val();
        data[33] = $("#thGFR").val();
        data[34] = $("#thVaL").val();
        data[35] = $("#thVaR").val();
        data[36] = $("#thFVL").val();
        data[37] = $("#thFVR").val();
        data[38] = $("#thTVL").val();
        data[39] = $("#thTVR").val();
        data[40] = $("#thPFL").val();
        data[41] = $("#thPFR").val();
        data[42] = $("#entNotes").val();
        data[43] = $("#empId").val();
        data[44] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/ent',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });

});
//ENT

//Musculo Skeletal System

$("#AdMusculo").click(function(){
        var data = new Array();
        data[0] = $("#mssULSh").val();
        data[1] = $("#mssULEl").val();
        data[2] = $("#mssULWr").val();
        data[3] = $("#mssULDg").val();
        data[4] = $("#mssULArm").val();
        data[5] = $("#mssULFh").val();
        data[6] = $("#mssULHnd").val();
        data[7] = $("#mssLLHp").val();
        data[8] = $("#mssLLkn").val();
        data[9] = $("#mssLLAn").val();
        data[10] = $("#mssLLDg").val();
        data[11] = $("#mssLLTh").val();
        data[12] = $("#mssLLLg").val();
        data[13] = $("#mssLLFt").val();
        data[14] = $("#mssSpCv").val();
        data[15] = $("#mssSpTc").val();
        data[16] = $("#mssSpLm").val();
        data[17] = $("#mssOthTM").val();
        data[18] = $("#mssOthCl").val();
        data[19] = $("#mssOthSt").val();
        data[20] = $("#mssOthRb").val();
        data[21] = $("#mssOthSc").val();
        data[22] = $("#mssNotes").val();
        data[23] = $("#empId").val();
        data[24] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/musculor',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });

});
//Musculo Skeletal System
//Skin START

$("#AdSkin").click(function(){
        var data = new Array();
        data[0] = $("#sknSC").val();
        data[1] = $("#sknTem").val();
        data[2] = $("#sknMois").val();
        data[3] = $("#sknMT").val();
        data[4] = $("#sknHr").val();
        data[5] = $("#sknNls").val();
        data[6] = $("#sknMcs").val();
        data[7] = $("#sknAb").val();
        data[8] = $("#msNotes").val();
        data[9] = $("#empId").val();
        data[10] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/skin',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//Skin END

//Central Nervous System START

$("#AdNerv").click(function(){
        var data = new Array();
        data[0] = $("#cnsHFSp").val();
        data[1] = $("#cnsHFMem").val();
        data[2] = $("#cnsSSTch").val();
        data[3] = $("#cnsSSPrs").val();
        data[4] = $("#cnsSSPn").val();
        data[5] = $("#cnsSSTh").val();
        data[6] = $("#cnsSSGr").val();
        data[7] = $("#cnsSSSt").val();
        data[8] = $("#cnsSSKin").val();

        data[9] = $("#cnsCN").val();

        data[10] = $("#cnsCNAb").val();
        data[11] = $("#cnsMFPos").val();
        data[12] = $("#cnsMFGt").val();
        data[13] = $("#cnsMFRef").val();
        data[14] = $("#cnsMFSp").val();
        data[15] = $("#cnsMFMT").val();
        data[16] = $("#cnsMFMS").val();
        data[17] = $("#cnsPATP").val();

        data[18] = $("#cnsPAPer").val();
        data[19] = $("#cnsPATC").val();

        data[20] = $("#cnsNotes").val();
        data[21] = $("#empId").val();
        data[22] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/nervous',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });

});
//Central Nervous System END

//Gynaecological Examination START

$("#AdGynaeco").click(function(){
        var data = new Array();
        data[0] = $("#geAbsSh").val();
        data[1] = $("#geAbsUt").val();
        data[2] = $("#geAbsAb").val();
        data[3] = $("#gePelVu").val();
        data[4] = $("#gePelVa").val();
        data[5] = $("#gePelCe").val();
        data[6] = $("#gePelUt").val();
        data[7] = $("#gePelAd").val();
        data[8] = $("#gePelOth").val();
        data[9] = $("#gePelAb").val();
        data[10] = $("#geBrsSk").val();
        data[11] = $("#geBrsSh").val();
        data[12] = $("#geBrsCn").val();
        data[13] = $("#geBrsNp").val();
        data[14] = $("#geBrsAx").val();
        data[15] = $("#geBrsOth").val();
        data[16] = $("#geBrsAb").val();
        data[17] = $("#geNotes").val();
        data[18] = $("#empId").val();
        data[19] = $("#u_name").val();
		var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/gynaeco',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });



});


//start burns//

$("#brnTotButton").click(function()
{


//alert("burns");
var hdValf = 3.5;	hdValb = 3.5;	var hndValL = 1.5;	var hndValR = 1.5;	var nckValf = 1;	var nckValb = 1;	var bodyValf = 13;	var bodyValb = 13;

var armValL = 2;	var armValR = 2;var forearmValL = 1.5;	var forearmValR = 1.5;	var genVal = 1;var uplegValL = 4.75;	var uplegValR = 4.75;
var lowlegValL = 3;	var lowlegValR = 3;var footValL = 1.75;	var footValR = 1.75;var butValL = 2.3;	var butValR = 2.3;

var hdP=0;	var nckP=0;var bodyP=0;var genP = 0;
var armP=0;	var hnP=0;		var forearmP = 0;
var rarmFP=0;	var rhnFP=0;		var rforearmFP = 0;
var rarmBP=0;	var rhnBP=0;		var rforearmBP = 0;
var larmFP=0;	var lhnFP=0;		var lforearmFP = 0;
var larmBP=0;	var lhnBP=0;		var lforearmBP = 0;
var butp = 0;var rbutP = 0;		var lbutP = 0;	var tot = 0;
var uplegP = 0;var lowlegP = 0;	var footP = 0;
var ruplegFP = 0;var rlowlegFP = 0;	var rfootFP = 0;
var luplegFP = 0;	var llowlegFP = 0;	var lfootFP = 0;
var ruplegBP = 0;var rlowlegBP = 0;	var rfootBP = 0;
var luplegBP = 0;	var llowlegBP = 0;	var lfootBP = 0;
if ($('#Age').val()==0)
{
hdValf=9.5;
hdValb=9.5;
uplegValL=2.75;
uplegValR=2.75;
lowlegValL=2.3;
lowlegValR=2.3;
}

else
if ($('#Age').val()==1)
{
hdValf=8.5;
hdValb=8.5;
uplegValL=3.25;
uplegValR=3.25;
lowlegValL=2.3;
lowlegValR=2.3;
}
else
if ($('#Age').val()<=5)
{
hdValf=6.5;
hdValb=6.5;
uplegValL=4;
uplegValR=4;
lowlegValL=2.75;
lowlegValR=2.75;
}
else
if ($('#Age').val()<=10)
{
	hdValf=5.5;
	hdValb=5.5;
	uplegValL=4.5;
	uplegValR=4.5;
	lowlegValL=3;
	lowlegValR=3;
}
else
	if ($('#Age').val()<=15)
	{
		hdValf=4.5;
		hdValb=4.5;
		uplegValL=4.5;
		uplegValR=4.5;
		lowlegValL=3.25;
		lowlegValR=3.25;
	}
	else
	{
		hdValf=3.5;
		hdValb=3.5;
		uplegValL=4.75;
		uplegValR=4.75;
		lowlegValL=3.5;
		lowlegValR=3.5;
	}

if (BrnHFCB.checked==true && BrnHBCB.checked==true )
{
hdP=hdValf+hdValb;
}
else
{
if (BrnHFCB.checked==true)
{
hdP+=hdValf;
}
else if(BrnHBCB.checked==true )
{
hdP+=hdValb;

}
else
{
hdP+=0;
}
}


if (BrnNFCB.checked==true && BrnNBCB.checked==true )
{
nckP=nckValf+nckValb;
}
else
{
if (BrnNFCB.checked==true )
{
nckP=nckValf;
}
else if( BrnNBCB.checked==true )
{
nckP=nckValb;
}
else
{
nckP=0;
}
}

if (BrnBFCB.checked==true && BrnBBCB.checked==true )
{
bodyP=bodyValf+bodyValb;
}
else
{
if (BrnBFCB.checked==true)
{
bodyP+=bodyValf;
}
if( BrnBBCB.checked==true )
{
bodyP+=bodyValb;
}
else
{
bodyP+=0;
}
}
//-----------------------------------------------------------------------------------//
if (BrnGCB.checked==true)
{
genP=genVal;
}
else
{
genP=0;
}

if (BrnRBCB.checked==true)
{
rbutP=butValR;
}
else
{
rbutP=0;
}
if (BrnLBCB.checked==true)
{
lbutP+=butValL;
}
else
{
lbutP+=0;
}

//------------------------------------------


if (BrnRAFCB.checked==true && BrnLAFCB.checked==true)
{
armP=armValR+armValL;
}
else
{
if (BrnLAFCB.checked==true)
{
armP=armValL;
}
else if (BrnRAFCB.checked==true)
{
armP=armValR;
}
else
{
armP=0;
}
}


if (BrnRABCB.checked==true && BrnLABCB.checked==true)
{
armP+=armValR+armValL;
}
else
{
if (BrnLABCB.checked==true)
{
armP+=armValL;
}
else if (BrnRABCB.checked==true)
{
armP+=armValR;
}
else
{
armP+=0;
}
}


//------------------------------------------


if (BrnRFAFCB.checked==true && BrnLFAFCB.checked==true)
{
forearmP=forearmValR+forearmValL;
}
else
{
if (BrnLFAFCB.checked==true)
{
forearmP=forearmValL;
}
else if (BrnRFAFCB.checked==true)
{
forearmP=forearmValR;
}
else
{
forearmP=0;
}
}



if (BrnRFABCB.checked==true && BrnLFABCB.checked==true)
{
forearmP+=forearmValR+forearmValL;
}
else
{
if (BrnLFABCB.checked==true)
{
forearmP+=forearmValL;
}
else if (BrnRFABCB.checked==true)
{
forearmP+=forearmValR;
}
else
{
forearmP+=0;
}
}


//------------------------------------------

if (BrnRHnFCB.checked==true && BrnLHnFCB.checked==true)
{
hnP=hndValR+hndValL;
}
else
{
if (BrnLHnFCB.checked==true)
{
hnP=hndValL;
}
else if (BrnRHnFCB.checked==true)
{
hnP=hndValR;
}
else
{
hnP=0;
}
}


if (BrnRHnBCB.checked==true && BrnLHnBCB.checked==true)
{
hnP+=hndValR+hndValL;
}
else
{
if (BrnLHnBCB.checked==true)
{
hnP+=hndValL;
}
else if (BrnRHnBCB.checked==true)
{
hnP+=hndValR;
}
else
{
hnP+=0;
}
}

//------------------------------------------
if (BrnRULFCB.checked==true && BrnLULFCB.checked==true)
{
uplegP=uplegValR+uplegValL;
}
else
{
if (BrnLULFCB.checked==true)
{
uplegP=uplegValL;
}
else if (BrnRULFCB.checked==true)
{
uplegP=uplegValR;
}
else
{
uplegP=0;
}
}

if (BrnRULBCB.checked==true && BrnLULBCB.checked==true)
{
uplegP+=uplegValR+uplegValL;
}
else
{
if (BrnRULBCB.checked==true)
{
uplegP+=uplegValR;
}
else if (BrnLULBCB.checked==true)
{
uplegP+=uplegValL;
}
else
{
uplegP+=0;
}
}



//------------------------------------------
if (BrnRLLFCB.checked==true && BrnLLLFCB.checked==true)
{
lowlegP=lowlegValR+lowlegValL;
}
else
{
if (BrnRLLFCB.checked==true)
{
lowlegP=lowlegValR;
}
else if (BrnLLLFCB.checked==true)
{
lowlegP=lowlegValL;
}
else
{
lowlegP=0;
}
}

if (BrnRLLBCB.checked==true && BrnLLLBCB.checked==true)
{
lowlegP+=lowlegValR+lowlegValL;
}
else
{
if (BrnRLLBCB.checked==true)
{
lowlegP+=lowlegValR;
}
else if (BrnLLLBCB.checked==true)
{
lowlegP+=lowlegValL;
}
else
{
lowlegP+=0;
}
}


//------------------------------------------

if (BrnRFtFCB.checked==true && BrnLFtFCB.checked==true)
{
footP=footValR+footValL;
}
else
{
if (BrnRFtFCB.checked==true)
{
footP=footValR;
}
else if (BrnLFtFCB.checked==true)
{
footP=footValL;
}
else
{
footP=0;
}
}

if (BrnRFtBCB.checked==true && BrnLFtBCB.checked==true)
{
footP+=footValR+footValL;
}
else
{
if (BrnRFtBCB.checked==true)
{
footP+=footValR;
}
else if (BrnLFtBCB.checked==true)
{
footP+=footValL;
}
else
{
footP+=0;
}
}


butP=lbutP+rbutP;
tot = nckP+hdP+bodyP+butP+footP+lowlegP+uplegP+genP+forearmP+hnP+armP;
$("#BrnHF").val(hdP);
$("#BrnNF").val(nckP);
$("#BrnBF").val(bodyP);

$("#BrnG").val(genP);

$("#BrnRAF").val(armP);
$("#BrnRFAF").val(forearmP);
$("#BrnRHnF").val(hnP);
$("#BrnRBt").val(butP);
$("#BrnRUL").val(uplegP);
$("#BrnRLL").val(lowlegP);
$("#BrnRFt").val(footP);

$("#BrnTot").val(tot);

var data = new Array();

if(BrnHFCB.checked==true)
data[0] = hdValf;
//alert(hdValf);}
else
data[0] = "Null";
if(BrnNFCB.checked==true)
data[1] = nckValf;
else
data[1] = "Null";
if(BrnBFCB.checked==true)
data[2] = bodyValf;
else
data[2] = "Null";

if(BrnRULFCB.checked==true)
data[3] = uplegValR;
else
data[3] = "Null";
if(BrnLULFCB.checked==true)
data[4] = uplegValL;
else
data[4] = "Null";

if(BrnRLLFCB.checked==true)
data[5] = lowlegValR;
else
data[5] = "Null";
if(BrnLLLFCB.checked==true)
data[6] = lowlegValL;
else
data[6] = "Null";

if(BrnRFtFCB.checked==true)
data[7] = footValR;
else
data[7] = "Null";
if(BrnLFtFCB.checked==true)
data[8] = footValL;
else
data[8] = "Null";

if(BrnGCB.checked==true)
data[9] = genVal;
else
data[9] = "Null";

if(BrnRFAFCB.checked==true)
data[10] = forearmValR;
else
data[10] = "Null";
if(BrnLFAFCB.checked==true)
data[11] = forearmValL;
else
data[11] = "Null";

if(BrnRHnFCB.checked==true)
data[12] = hndValR;
else
data[12] = "Null";
if(BrnLHnFCB.checked==true)
data[13] = hndValL;
else
data[13] = "Null";

if(BrnRAFCB.checked==true)
data[14] = armValR;
else
data[14] = "Null";
if(BrnLAFCB.checked==true)
data[15] = armValL;
else
data[15] = "Null";


if(BrnHBCB.checked==true)
data[16] = hdValb;
else
data[16] = "Null";

if(BrnNBCB.checked==true)
data[17] = nckValb;
else
data[17] = "Null";

if(BrnBBCB.checked==true)
data[18] = bodyValb;
else
data[18] = "Null";

if(BrnRABCB.checked==true)
data[19] = armValR;
else
data[19] = "Null";
if(BrnLABCB.checked==true)
data[20] = armValL;
else
data[20] = "Null";

if(BrnRFABCB.checked==true)
data[21] = forearmValR;
else
data[21] = "Null";
if(BrnLFABCB.checked==true)
data[22] = forearmValL;
else
data[22] = "Null";

if(BrnRHnBCB.checked==true)
data[23] = hndValR;
else
data[23] = "Null";
if(BrnLHnBCB.checked==true)
data[24] = hndValL;
else
data[24] = "Null";

if(BrnRULBCB.checked==true)
data[25] = uplegValR;
else
data[25] = "Null";
if(BrnLULBCB.checked==true)
data[26] = uplegValL;
else
data[26] = "Null";

if(BrnRLLBCB.checked==true)
data[27] = lowlegValR;
else
data[27] = "Null";
if(BrnLLLBCB.checked==true)
data[28] = lowlegValL;
else
data[28] = "Null";

if(BrnRFtBCB.checked==true)
data[29] = footValR;
else
data[29] = "Null";
if(BrnLFtBCB.checked==true)
data[30] = footValL;
else
data[30] = "Null";
//
if(BrnRBCB.checked==true)
data[31] = butValR;
else
data[31] = "Null";
if(BrnLBCB.checked==true)
data[32] = butValL;
else
data[32] = "Null";
data[33] = $("#empId").val();
//data[34] = "<?php echo $user ?>";
//data[33] = "Null";
//data[34] = "Null";
data[35] = $("#BrnTot").val();
data[36] = $("#BrnHF").val();
data[37] = $("#BrnNF").val();
data[38] = $("#BrnBF").val();
data[39] = $("#BrnG").val();
data[40] = $("#BrnRAF").val();
data[41] = $("#BrnRFAF").val();
data[42] = $("#BrnRHnF").val();
data[43] = $("#BrnRBt").val();
data[44] = $("#BrnRUL").val();
data[45] = $("#BrnRLL").val();
data[46] = $("#BrnRFt").val();
data[47] = $("#brnNotes").val();
data[48] = $("#u_name").val();

var newurl =$("#servername").val();

$.ajax({
url : 'http://greenocean.in/rest-tst/index.php/api/example/burns',
dataType: 'json',
type    : 'POST',
data	: {data:data},
success : function (data)
{
	if (data.response =="true")
		updated(data.message);
	else
		updated(data.message);
}
});



});

//end burns//

function disburns()
{
var empid = $('#empId').val();
var gethis = $('#chdate').val();
var newurl =$("#servername").val();
$.ajax
({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/burns',
'data'    : {data: empid,check: gethis},
'success' : function(data){
//alert("burns");
					if (data.response =='true')
					{
						$("#BrnHF").val(data.Head);
						$("#BrnNF").val(data.Neck);
						$("#BrnBF").val(data.Body);
						$("#BrnG").val(data.Genitals);
						$("#BrnRAF").val(data.Arm);
						$("#BrnRFAF").val(data.Forearm);
						$("#BrnRHnF").val(data.Hand);
						$("#BrnRBt").val(data.Buttocks);
						$("#BrnRUL").val(data.Upper_Leg);
						$("#BrnRLL").val(data.Lower_Leg);
						$("#BrnRFt").val(data.Foot);
						$("#BrnTot").val(data.Tot);
						$("#brnNotes").val(data.Notes);

						if (data.BrnLHnBCB != "Null")
	{
		//alert (data.BrnLHnBCB);
		var mapData = $('#blhand').data('maphilight') || {};
		mapData.fillColor = 'aa174e';
mapData.fillOpacity = .2;
	mapData.alwaysOn = true;
	$('#blhand').data('maphilight', mapData).trigger('alwaysOn.maphilight');
BrnLHnBCB.checked = true;

	}

	///*
	else
	{
	var mapData = $('#blhand').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#blhand').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnLHnBCB.checked = false;
	}
	///**/
	if (data.BrnLFABCB != "Null")
	  {

		  var mapData = $('#blforearm').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;

		  $('#blforearm').data('maphilight', mapData).trigger('alwaysOn.maphilight');

		  BrnLFABCB.checked = true;

	  }
	///*
	else
	{
		var mapData = $('#blforearm').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#blforearm').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnLFABCB.checked = false;
	}
	  ///**/
	  if (data.BrnLABCB !="Null")
	  {

		  var mapData = $('#blarm').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;

		  $('#blarm').data('maphilight', mapData).trigger('alwaysOn.maphilight');

		  BrnLABCB.checked = true;

	  }
	///*
	else
	{
		var mapData = $('#blarm').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#blarm').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnLABCB.checked = false;
	}  // */
	  if (data.BrnBBCB !="Null")
	  {

		  var mapData = $('#bbody').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;

		  $('#bbody').data('maphilight', mapData).trigger('alwaysOn.maphilight');

		  BrnBBCB.checked = true;

	  }
	// /*
	else
	{
		var mapData = $('#bbody').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#bbody').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnBBCB.checked = false;
	}   //*/
/* if (data.BrnLHnFCB !="Null")
	  {
		  var mapData = $('#brnDeg').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#brnDeg').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnLHnFCB.checked = true;
	  }
	else
	{
		var mapData = $('#brnDeg').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#brnDeg').data('maphilight',mapData).trigger('alwaysOn.maphilight');
		BrnLHnFCB.checked = false;
	}
	*/


	  if (data.BrnNBCB !="Null")
	  {
		  var mapData = $('#bNeck').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#bNeck').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnNBCB.checked = true;
	  }
	 else
	{
		var mapData = $('#bNeck').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#bNeck').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnNBCB.checked = false;
	}
	  if (data.BrnHBCB !="Null")
	  {
		  var mapData = $('#bHead').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#bHead').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnHBCB.checked = true;
	  }
	 else
	{
		var mapData = $('#bHead').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#bHead').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnHBCB.checked = false;
	}
	  if (data.BrnRABCB !="Null")
	  {
		  var mapData = $('#brarm').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#brarm').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnRABCB.checked = true;
	  }
	 else
	{
		var mapData = $('#brarm').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#brarm').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnRABCB.checked = false;
	}
	  if (data.BrnRFABCB !="Null")
	  {
		  var mapData = $('#brforearm').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#brforearm').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnRFABCB.checked = true;
	  }
else
	{
		var mapData = $('#brforearm').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#brforearm').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnRFABCB.checked = false;
	}
	  if (data.BrnRHnBCB !="Null")
	  {
		  var mapData = $('#brhand').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#brhand').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnRHnBCB.checked = true;
	  }
	else
	{
			var mapData = $('#brhand').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#brhand').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnRHnBCB.checked = false;
	}
	  if (data.BrnHFCB !="Null")
	  {
		  var mapData = $('#fHead').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#fHead').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnHFCB.checked = true;
	  }
	else
	{
		var mapData = $('#fHead').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#fHead').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnHFCB.checked = false;
	}
	  if (data.BrnNFCB !="Null")
	  {
		  var mapData = $('#fNeck').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#fNeck').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnNFCB.checked = true;
	  }
else
	{
		var mapData = $('#fNeck').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#fNeck').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnNFCB.checked = false;
	}
	  if (data.BrnBFCB !="Null")
	  {
		  var mapData = $('#fbody').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#fbody').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnBFCB.checked = true;
	  }
	else
	{
		var mapData = $('#fbody').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#fbody').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnBFCB.checked = false;
	}
	  if (data.BrnRAFCB !="Null")
	  {
		  var mapData = $('#frarm').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#frarm').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnRAFCB.checked = true;
	  }
else
	{
		var mapData = $('#frarm').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#frarm').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnRAFCB.checked = false;
	}
	  if (data.BrnRFAFCB !="Null")
	  {
		  var mapData = $('#frforearm').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#frforearm').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnRFAFCB.checked = true;
	  }
else
	{
		var mapData = $('#frforearm').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#frforearm').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnRFAFCB.checked = false;
	}
	  if (data.BrnLFAFCB !="Null")
	  {
		  var mapData = $('#flforearm').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#flforearm').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnLFAFCB.checked = true;
	  }
	 else
	{
		var mapData = $('#flforearm').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#flforearm').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnLFAFCB.checked = false;
	}
	  if (data.BrnRHnFCB !="Null")
	  {
		  var mapData = $('#frhand').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#frhand').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnRHnFCB.checked = true;
	  }
	else
	{
		var mapData = $('#frhand').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#frhand').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnRHnFCB.checked = false;
	}
	  if (data.BrnLHnFCB !="Null")
	  {
		  var mapData = $('#flhand').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#flhand').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnLHnFCB.checked = true;
	  }
 else
	{
		var mapData = $('#flhand').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#flhand').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnLHnFCB.checked = false;
	}
	  if (data.BrnRULFCB !="Null")
	  {
		  var mapData = $('#fruleg').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#fruleg').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnRULFCB.checked = true;
	  }
	else
	{
		var mapData = $('#fruleg').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#fruleg').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnRULFCB.checked = false;
	}
	  if (data.BrnGCB !="Null")
	  {
		  var mapData = $('#fgen').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#fgen').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnGCB.checked = true;
	  }
	else
	{
		var mapData = $('#fgen').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#fgen').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnGCB.checked = false;
	}
	  if (data.BrnLULFCB !="Null")
	  {
		  var mapData = $('#fluleg').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#fluleg').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnLULFCB.checked = true;
	  }
else
	{
		var mapData = $('#fluleg').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#fluleg').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnLULFCB.checked = false;
	}
	  if (data.BrnRLLFCB !="Null")
	  {
		  var mapData = $('#frlleg').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#frlleg').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		 BrnRLLFCB.checked = true;
	  }
	else
	{
		var mapData = $('#frlleg').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#frlleg').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnRLLFCB.checked = false;
	}
	  if (data.BrnLLLFCB !="Null")
	  {
		  var mapData = $('#fllleg').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#fllleg').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnLLLFCB.checked = true;
	  }
	else
	{
		var mapData = $('#fllleg').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#fllleg').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnLLLFCB.checked = false;
	}
	  if (data.BrnRFtFCB !="Null")
	  {
		  var mapData = $('#frfoot').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#frfoot').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnRFtFCB.checked = true;
	  }
	 else
	{
		var mapData = $('#frfoot').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#frfoot').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnRFtFCB.checked = false;
	}
	  if (data.BrnLFtFCB !="Null")
	  {
		  var mapData = $('#flfoot').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#flfoot').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnLFtFCB.checked = true;
	  }
	 else
	{
		var mapData = $('#flfoot').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#flfoot').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnLFtFCB.checked = false;
	}
	  if (data.BrnLFtBCB !="Null")
	  {
		  var mapData = $('#blfoot').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#blfoot').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnLFtBCB.checked = true;
	  }
	else
	{
		var mapData = $('#blfoot').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#blfoot').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnLFtBCB.checked = false;
	}
	  if (data.BrnRFtBCB !="Null")
	  {
		  var mapData = $('#brfoot').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#brfoot').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnRFtBCB.checked = true;
	  }
	else
	{
		var mapData = $('#brfoot').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#brfoot').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnRFtBCB.checked = false;
	}
	  if (data.BrnLLLBCB !="Null")
	  {
		  var mapData = $('#bllleg').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#bllleg').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnLLLBCB.checked = true;
	  }
 	else
	{
		var mapData = $('#bllleg').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#bllleg').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnLLLBCB.checked = false;
	}
	  if (data.BrnRLLBCB !="Null")
	  {
		  var mapData = $('#brlleg').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#brlleg').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnRLLBCB.checked = true;
	  }
 	else
	{
		var mapData = $('#brlleg').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#brlleg').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnRLLBCB.checked = false;
	}
	  if (data.BrnRBCB !="Null")
	  {
		  var mapData = $('#brbutt').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#brbutt').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnRBCB.checked = true;
	  }
	 else
	{
		var mapData = $('#brbutt').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#brbutt').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnRBCB.checked = false;
	}
	  if (data.BrnLBCB !="Null")
	  {
		  var mapData = $('#blbutt').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#blbutt').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnLBCB.checked = true;
	  }
	 else
	{
		var mapData = $('#blbutt').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#blbutt').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnLBCB.checked = false;
	}
	  if (data.BrnRULBCB !="Null")
	  {
		  var mapData = $('#bruleg').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#bruleg').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnRULBCB.checked = true;
	  }
	 else
	{
		var mapData = $('#bruleg').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#bruleg').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnRULBCB.checked = false;
	}
	  if (data.BrnLULBCB !="Null")
	  {
		  var mapData = $('#bluleg').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#bluleg').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnLULBCB.checked = true;
	  }
	else
	{
		var mapData = $('#bluleg').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#bluleg').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnLULBCB.checked = false;
	}
	  if (data.BrnLAFCB  !="Null")
	  {
		  var mapData = $('#flarm').data('maphilight') || {};
		  mapData.fillColor = 'aa174e';
		  mapData.fillOpacity = .2;
		  mapData.alwaysOn = true;
		  $('#flarm').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		  BrnLAFCB.checked = true;
	  }
	 else
	{
		var mapData = $('#flarm').data('maphilight') || {};
		mapData.fillColor = 'ffffff';
mapData.fillOpacity = .2;
		mapData.alwaysOn = false;
		$('#flarm').data('maphilight', mapData).trigger('alwaysOn.maphilight');
		BrnLAFCB.checked = false;
	}

			}



					else
					{
						//alert("error coming need to check");
						//updated(valedid);
						}

}
});


}

/*******system Exam inserting function end*********/

/*******investication inserting function start********/

//Blood culture
$("#bldcntbtn").click(function(){
        var data = new Array();
        data[0] = $("#bldcnt").val();
        data[1] = $("#empId").val();
        data[2] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/Bloodculture',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//Blood culture
//Pulmonary Function
$("#PuFuTe").click(function(){
        var data = new Array();
        data[0] = $("#pftSummary").val();
        data[1] = $("#empId").val();
        data[2] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/pulmonary',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//Pulmonary Function
//Audiogram
$("#AudSum").click(function(){
        var data = new Array();
        data[0] = $("#audSummary").val();
        data[1] = $("#empId").val();
        data[2] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url	: 'http://greenocean.in/rest-tst/index.php/api/example/audiogram',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//Audiogram
//peripheral Smear
$("#persmbtn").click(function(){
        var data = new Array();
        data[0] = $("#persm").val();
        data[1] = $("#empId").val();
        data[2] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url	: 'http://greenocean.in/rest-tst/index.php/api/example/peripheral',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//peripheral Smear
//Urine Culture
$("#urculbtn").click(function(){
        var data = new Array();
        data[0] = $("#urcul").val();
        data[1] = $("#empId").val();
        data[2] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url	: 'http://greenocean.in/rest-tst/index.php/api/example/urineculture',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//Urine Culture
//Glucose Tolerance Test
$("#gttbtn").click(function(){
        var data = new Array();
        data[0] = $("#glucot").val();
        data[1] = $("#empId").val();
        data[2] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/Glucosetolerance',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//Glucose Tolerance Test
//Stool Culture
$("#screbtn").click(function()
{
        var data = new Array();
        data[0] = $("#scre").val();
        data[1] = $("#empId").val();
        data[2] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url	: 'http://greenocean.in/rest-tst/index.php/api/example/Stoolculture',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//Stool Culture
//Echocardiogram
$("#EchoSum").click(function(){
        var data = new Array();
        data[0] = $("#ecSummary").val();
        data[1] = $("#empId").val();
        data[2] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/echo',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//Echocardiogram
//X-Ray
$("#Xrea").click(function(){
        var data = new Array();
        data[0] = $("#xrSummary").val();
        data[1] = $("#empId").val();
        data[2] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/xray',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//X-Ray
//Stool Routine
$("#srSum").click(function(){
        var data = new Array();
        data[0] = $("#srSummary").val();
        data[1] = $("#empId").val();
        data[2] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url	: 'http://greenocean.in/rest-tst/index.php/api/example/stoolroutine',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//Stool Routine
//Urine Routine
$("#urbtn").click(function(){
        var data = new Array();
        data[0] = $("#urSummary").val();
        data[1] = $("#empId").val();
        data[2] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url : 'http://greenocean.in/rest-tst/index.php/api/example/urineroutine',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//Urine Routine
//ECG
$("#Ecgbtn").click(function(){
        var data = new Array();
        data[0] = $("#ecgSummary").val();
        data[1] = $("#empId").val();
        data[2] = $("#u_name").val();
		var newurl =$("#servername").val();
        $.ajax({
        url : 'http://greenocean.in/rest-tst/index.php/api/example/ecg',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//ECG
//Ultrasound Abdomen
$("#Ulsum").click(function(){
        var data = new Array();
        data[0] = $("#uaSummary").val();
        data[1] = $("#empId").val();
        data[2]= $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url	: 'http://greenocean.in/rest-tst/index.php/api/example/Ultrasound',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//Ultrasound Abdomen
//Blood Urea
$("#BlUr").click(function(){
        var data = new Array();
        data[0] = $("#buRslt").val();
        data[1] = $("#buNormal").val();
        data[2] = $("#buRemarks").val();
        data[3] = $("#empId").val();
        data[4] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url	: 'http://greenocean.in/rest-tst/index.php/api/example/bloodurea',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//Blood Urea
//HIV
$("#Hiv").click(function()
{
        var data = new Array();
        data[0] = $("#hivRslt").val();
        data[1] = $("#hivNormal").val();
        data[2] = $("#hivRemarks").val();
        data[3] = $("#empId").val();
        data[4] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url	: 'http://greenocean.in/rest-tst/index.php/api/example/hiv',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//HIV
//HBsAg

$("#HBsAg").click(function(){
        var data = new Array();
        data[0] = $("#hbaRslt").val();
        data[1] = $("#hbaNormal").val();
        data[2] = $("#hbaRemarks").val();
        data[3] = $("#empId").val();
        data[4] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/HBsAg',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//HBsAg
//Serum Creatinine
$("#SuCr").click(function(){
        var data = new Array();
        data[0] = $("#scRslt").val();
        data[1] = $("#scNormal").val();
        data[2] = $("#scRemarks").val();
        data[3] = $("#empId").val();
        data[4] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/serum',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//Serum Creatinine
//Serum Electrolytes
$("#SeElTe").click(function(){
        var data = new Array();
        data[0] = $("#seNaRslt").val();
        data[1] = $("#seNaNormal").val();
        data[2] = $("#seKRslt").val();
        data[3] = $("#seKNormal").val();
        data[4] = $("#seCaRslt").val();
        data[5] = $("#seCaNormal").val();
        data[6] = $("#sePhRslt").val();
        data[7] = $("#sePhNormal").val();
        data[8] = $("#seClRslt").val();
        data[9] = $("#seClNormal").val();
        data[10] = $("#seBcRslt").val();
        data[11] = $("#seBcNormal").val();
        data[12] = $("#seMgRslt").val();
        data[13] = $("#seMgNormal").val();
        data[14] = $("#seRemarks").val();
        data[15] = $("#empId").val();
        data[16] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/serumelectrolytes',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//Serum Electrolytes
//complete Blood Count
$("#CoBlCo").click(function(){
        var data = new Array();
        data[0] = $("#cbcHbRslt").val();
        data[1] = $("#cbcHbNormal").val();
        data[2] = $("#cbcPCVRslt").val();
        data[3] = $("#cbcPCVNormal").val();
        data[4] = $("#cbcESRRslt").val();
        data[5] = $("#cbcESRNormal").val();
        data[6] = $("#cbcTCRslt").val();
        data[7] = $("#cbcTCNormal").val();
        data[8] = $("#cbcNeuRslt").val();
        data[9] = $("#cbcNeuNormal").val();
        data[10] = $("#cbcLymRslt").val();
        data[11] = $("#cbcLymNormal").val();
        data[12] = $("#cbcBasRslt").val();
        data[13] = $("#cbcBasNormal").val();
        data[14] = $("#cbcEosRslt").val();
        data[15] = $("#cbcEosNormal").val();
        data[16] = $("#cbcMonoRslt").val();
        data[17] = $("#cbcMonoNormal").val();
        data[18] = $("#cbcPltRslt").val();
        data[19] = $("#cbcPltNormal").val();
        data[20] = $("#cbcRemarks").val();
        data[21] = $("#empId").val();
        data[22] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url : 'http://greenocean.in/rest-tst/index.php/api/example/bloodcount',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//complete Blood Count
//Blood Sugar Random
$("#bsrbtn").click(function(){
        var data = new Array();
        data[0] = $("#bsrRslt").val();
        data[1] = $("#bsrNormal").val();
        data[2] = $("#bsrsum").val();
        data[3] = $("#empId").val();
        data[4]= $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/bsr',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//Blood Sugar Random
//Blood Sugar Fasting
$("#bsfbtn").click(function(){
        var data = new Array();
        data[0] = $("#bsfRslt").val();
        data[1] = $("#bsfNormal").val();
        data[2] = $("#bsfSummary").val();
        data[3] = $("#empId").val();
        data[4] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/bsf',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//Blood Sugar Fasting
//Blood Sugar Post Prandial
$("#bsppbtn").click(function(){
        var data = new Array();
        data[0] = $("#bsppRslt").val();
        data[1] = $("#bsppNormal").val();
        data[2] = $("#bsppra").val();
        data[3] = $("#empId").val();
        data[4] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url	: 'http://greenocean.in/rest-tst/index.php/api/example/bsp',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//Blood Sugar Post Prandial
//Liver Function Test
$("#LiFuTe").click(function(){
        var data = new Array();
        data[0] = $("#lftRemarks").val();
        data[1] = $("#lftTBRslt").val();
        data[2] = $("#lftTBNormal").val();
        data[3] = $("#lftDBRslt").val();
        data[4] = $("#lftDBNormal").val();
        data[5] = $("#lftIBRslt").val();
        data[6] = $("#lftIBNormal").val();
        data[7] = $("#lftTPRslt").val();
        data[8] = $("#lftTPNormal").val();
        data[9] = $("#lftAlRslt").val();
        data[10] = $("#lftAlNormal").val();
        data[11] = $("#lftGlRslt").val();
        data[12] = $("#lftGlNormal").val();
        data[13] = $("#lftAGRRslt").val();
        data[14] = $("#lftAGRNormal").val();
        data[15] = $("#lftALPRslt").val();
        data[16] = $("#lftALPNormal").val();
        data[17] = $("#lftGGTRslt").val();
        data[18] = $("#lftGGTNormal").val();
        data[19] = $("#lftALTRslt").val();
        data[20] = $("#lftALTNormal").val();
        data[21] = $("#lftASTRslt").val();
        data[22] = $("#lftASTNormal").val();
        data[23] = $("#lftLDHRslt").val();
        data[24] = $("#lftLDHNormal").val();
        data[25] = $("#empId").val();
        data[26] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url	: 'http://greenocean.in/rest-tst/index.php/api/example/liverfun',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//Liver Function Test
//Lipid Profile
$("#LiPr").click(function(){
        var data = new Array();
        data[0] = $("#lpTCRslt").val();
        data[1] = $("#lpTCNormal").val();
        data[2] = $("#lpTgRslt").val();
        data[3] = $("#lpTgNormal").val();
        data[4] = $("#lpLDLRslt").val();
        data[5] = $("#lpLDLNormal").val();
        data[6] = $("#lpHDLRslt").val();
        data[7] = $("#lpHDLNormal").val();
        data[8] = $("#lpVLDLRslt").val();
        data[9] = $("#lpVLDLNormal").val();
        data[10] = $("#lpCHRRslt").val();
        data[11] = $("#lpCHRNormal").val();
        data[12] = $("#lpRemarks").val();
        data[13] = $("#empId").val();
        data[14] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url	: 'http://greenocean.in/rest-tst/index.php/api/example/lipid',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
//Lipid Profile

/*******investication inserting function end*********/

/*******Provisional Report inserting function START******/
$("#AdProvision").click(function(){
        var data = new Array();
        data[0] = $("#prvRepFnd").val();
        data[1] = $("#prvRepFI").val();
        data[2] = $("#prvRepRec").val();
        data[3] = $("#empId").val();
        data[4] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url	: 'http://greenocean.in/rest-tst/index.php/api/example/provision',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
/*******Provisional Report inserting function END******/

/**********Referral inserting function start***************/

$("#AdReferral").click(function(){
        var data = new Array();
        data[0] = $("#Specialities").val();
        data[1] = $("#Name_Doc").val();
        data[2] = $("#Address").val();
        data[3] = $("#empId").val();
        data[4] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url	: 'http://greenocean.in/rest-tst/index.php/api/example/referral',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
/**********Referral inserting function END***************/
/**********prescription inserting function START***************/

$(".curclr").click(function(){
$(".fieldpres").val("");
});
$("#pressub").click(function(){
var data = [];
	$.each($('.fieldpres'), function() {
        data.push($(this).val());
    });
//alert(data);
    if(data.length == 0)
	 data = "none";


	var eid= document.getElementById('empId').value;
	var dna= document.getElementById('u_name').value;
	var diagnosis= document.getElementById('disease1').value;
	//alert(diagnosis);
	var newurl =$("#servername").val();
                $.ajax({

                    url: 'http://greenocean.in/rest-tst/index.php/api/example/Prescr',
                    dataType: 'json',
                    type: 'POST',
                    data: {data : data,val : eid,docna : dna,diag: diagnosis},
                    success: function(data,val){
			$("#daspres").show();

		//-------------------------------------------------------------//
 $("#pres").dataTable({
	"bJQueryUI"	: true,
	"bProcessing"	: false,
	"bFilter"	: false,
	"bPaginate"	: true,
	"bDestroy"	: true,
	"iDisplayLength":5,

	"sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getpresData',
	'fnServerData'	: function(sSource, aoData, fnCallback)
	{
		aoData.push( { "name": "my_field", "value": eid } );
		$.ajax({
			'dataType': 'json',
			'type'    : 'POST',
			'url'     : sSource,
			'data'    : aoData,
			'success' : fnCallback
		});
	},
	"aoColumns":
	[{"sTitle": "Diagnosis","aTargets":[0]},
	{"sTitle": "Drug","aTargets":[1]},
	{ "sTitle": "Brand","aTargets":[2]},
	{ "sTitle": "Route","aTargets":[3]},
	{ "sTitle": "Dosage","aTargets":[4]},
	{ "sTitle": "M","aTargets":[5]},
	{ "sTitle": "A","aTargets":[6]},
	{ "sTitle": "E","aTargets":[7]},
	{ "sTitle": "N","aTargets":[8]},
	{ "sTitle": "Duration","aTargets":[9]},
	{ "sTitle": "Quantity","aTargets":[10]},
	{ "sTitle": "Remarks","aTargets":[11]}],

	"sDom": '<"subtoolbar">frtip'
});
//-------------------------------------------------------------//
                        if(data.response ==true){
                           alert ("Inserted ");
                        }

                    }
                });
				var newurl =$("#servername").val();
                $.ajax({

                    url: 'http://greenocean.in/rest-tst/index.php/api/example/Prescrtmp',
                    dataType: 'json',
                    type: 'POST',
                    data: {data : data,val : eid,docna : dna,diag: diagnosis},
                    success: function(data,val){

			$("#daspres").show();
	//-------------------------------------------------------------//
 $("#tempresc").dataTable({
	"bJQueryUI"	: true,
	"bProcessing"	: false,
	"bFilter"	: false,
	"bPaginate"	: true,
	"bDestroy"	: true,
	"sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/gettemppres',
	'fnServerData'	: function(sSource, aoData, fnCallback)
	{
		aoData.push( { "name": "my_field", "value": eid } );
		$.ajax({
			'dataType': 'json',
			'type'    : 'POST',
			'url'     : sSource,
			'data'    : aoData,
			'success' : fnCallback
		});
	},
	"aoColumns":
	[{"sTitle": "Diagnosis","aTargets":[0]},
	{"sTitle": "Drug","aTargets":[1]},
	{ "sTitle": "Brand","aTargets":[2]},
	{ "sTitle": "Route","aTargets":[3]},
	{ "sTitle": "Dosage","aTargets":[4]},
	{ "sTitle": "M","aTargets":[5]},
	{ "sTitle": "A","aTargets":[6]},
	{ "sTitle": "E","aTargets":[7]},
	{ "sTitle": "N","aTargets":[8]},
	{ "sTitle": "Duration","aTargets":[9]},
	{ "sTitle": "Quantity","aTargets":[10]},
	{ "sTitle": "Remarks","aTargets":[11]}],
	"sDom": '<"subtoolbar">frtip'
});
//-------------------------------------------------------------//

                        if(data.response ==true){
                           alert ("Inserted ");
                        }

                    }
                });

	return false;

});


	var e = $('input').size() + 1;

	var g=2;
	var h=1;
	var dps=1;
$(document).on("click", "#addbut", function(){

         h++;
       // alert(l);
	$('<div> <table class="display dt-example"><tr><input type="hidden" class="fieldpress" id="disease'+h+'" name="dynamicpres[]" readonly="readonly" size="7"/><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" name="dynamicpres[]" class="fieldpres drug inter" size="7" id="pdrug'+h+'" ></td><input type="hidden" class="fieldpress" id="drug'+h+'" name="dynamicpres[]"  size="7"/><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldpres brand" id="brand'+h+'" name="dynamicpres[]"  size="7"/></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldpres route" id="route'+h+'" name="dynamicpres[]" size="7"/></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldpres vrysml" id="dosage'+h+'" name="dynamicpres[]" size="7"/></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldpres vrysml" id="morning'+h+'" name="dynamicpres[]" size="3"/></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldpres vrysml" id="afternoon'+h+'" name="dynamicpres[]" size="3"/></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldpres vrysml" id="evening'+h+'" name="dynamicpres[]" size="3"/></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldpres vrysml" id="night'+h+'" name="dynamicpres[]" size="3"/></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldpres	 vrysml" id="duration'+h+'" name="dynamicpres[]" size="9"/></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldpres vrysml" id="quantity'+h+'" name="dynamicpres[]" size="9" readonly="true" /></td><td class="ui-state-default" rowspan="1" colspan="1"><input type="text" class="fieldpres" id="remarks'+h+'" name="dynamicpres[]" size="9"/></td><td><a href="#" class="del_ExpenseRow" id="dell"><img src="img/delete.png" border="0" width="17" height="17" class="textmiddle"/></a></tr></table></div>').fadeIn('slow').appendTo('.inputs3');

	e++;
	g++;
dps++;
	});

	$(document).on("click", ".del_ExpenseRow", function(){
		$(this).closest('tr').remove();
		dps--;
if(dps==1) $(".curclr").show();
$("#interaction").hide();


	});

/**********prescription inserting function END***************/
$("#finter").click(function(){
	var newurl =$("#servername").val();
	$("#pressub").show();
        var intn = [];
	$.each($('.inter'), function() {
        intn.push($(this).val());
    });
      	//alert(intn);
      	$.ajax({
		dataType: 'json',
		type    : 'POST',
		url: 'http://greenocean.in/rest-tst/index.php/api/example/find_inter',
		data    : {data:intn},
		success: function (data) {
		var sos=new Array();
		//alert(data.response);
		 sos = $.parseJSON(data.id);
		 var slen=sos.length;
		//alert(sos['1']);
		//$("#suma").text(sos[0][4]);
		//alert(slen);
		$("#interaction").append("<table>");
		$("#interaction").html("<th>Generic Name</th><th>Interacting Drug</th><th>Reaction</th><th>Class</th>");
		for(var a=0; a<slen;a++)
		{

		//alert(sos[a][0]+""+sos[a][1]);
		if(sos[a][2]=='1')
		{
                $("#interaction").append("<tr><td>"+sos[a][0]+"</td><td>"+sos[a][1]+"</td><td>"+sos[a][3]+"</td><td><img src='images/Red.png' /></td></tr>");
		//$("#suma").text(sos[a][0]+""+sos[a][1]+""+sos[a][2]+""+sos[a][3]);
                }
                else if(sos[a][2]=='2')
                {
                $("#interaction").append("<tr><td>"+sos[a][0]+"</td><td>"+sos[a][1]+"</td><td>"+sos[a][3]+"</td><td><img src='images/Green.png' /></td></tr>");
		//$("#suma1").text(sos[a][0]+""+sos[a][1]+""+sos[a][2]+""+sos[a][3]);
                }
                else if(sos[a][2]=='3')
                {
                $("#interaction").append("<tr><td>"+sos[a][0]+"</td><td>"+sos[a][1]+"</td><td>"+sos[a][3]+"</td><td><img src='images/Orange.png' /></td></tr>");
		//$("#suma2").text(sos[a][0]+""+sos[a][1]+""+sos[a][2]+""+sos[a][3]);
                }
                else if(sos[a][2]=='4')
                {
                $("#interaction").append("<tr><td>"+sos[a][0]+"</td><td>"+sos[a][1]+"</td><td>"+sos[a][3]+"</td><td><img src='images/Yellow.png' /></td></tr>");
		//$("#suma3").text(sos[a][0]+""+sos[a][1]+""+sos[a][2]+""+sos[a][3]);
                }
		}
		}

	});

});

/**********Final Report inserting function START***************/

$("#AdFinalRep").click(function(){
        var data = new Array();
        data[0] = $("#finRepFnd").val();
        data[1] = $("#finRepFI").val();
        //data[2] = $("#Fin_con").val();
        data[3] = $("#empId").val();
        data[4]= $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url : 'http://greenocean.in/rest-tst/index.php/api/example/final',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
/**********Final Report inserting function END***************/
/**********Medical Certificate inserting function START***************/
$("#AdMedicerti").click(function(){
        var data = new Array();
        data[0] = $("#prvRepRec1").val();
        data[1] = $("#prvRepMedi").val();
        data[2] = $("#empId").val();
        data[3] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/medicerti',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
/**********Medical Certificate inserting function END***************/

/*********Management inserting function START***************/

$("#AdManagement").click(function(){
        var data = new Array();
        data[0] = $("#MgmtRepFnd").val();
        data[1] = $("#MgmtRepFI").val();
        data[2] = $("#MgmtRepRec").val();
        data[3] = $("#empId").val();
        data[4] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/management',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
/*********Management inserting function end***************/

//***************Progress***********//
$("#AdProg").click(function()
{
        //alert("progress");
        var data = new Array();
        data[0] = $("#emrPrgEx").val();
        data[1] = $("#emrPrgTr").val();
        data[2] = $("#emrPrgFI").val();
        data[3] = $("#empId").val();
			var newurl =$("#servername").val();
        $.ajax({
        url 	: 'http://greenocean.in/rest-tst/index.php/api/example/progress',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });

});

$('#vitalsUpdate').click(function ()
{
        //alert("vitals");
        fnUpdateTempTrend();
        fnUpdatePulseTrend();
        fnUpdateBPTrend();
});

function fnUpdateTempTrend()
{
			var newurl =$("#servername").val();
        var ticks = ['97','98', '99', '100', '101', '102','103','104'];
        var vitalTemp=$("#erTemp").val();
        var empId=$("#empId").val();
        var tempData = new Array();
        tempData[0]=vitalTemp;
        tempData[1]=empId;
        $.ajax({
        url	:'http://greenocean.in/rest-tst/index.php/api/example/insertTempTrend',
        dataType:'json',
        type	:'POST',
        data	:{data:tempData},
        success	:  function(data){
        if(data.response =='true'){
        plot1 = $.jqplot('chart1', [data.reference,data.temperature, ], {
        seriesDefaults:{
        trendline:{show:true},
        pointLabels: { show: false },
        showMarker:false

        },
        axes: {
        xaxis: {
        renderer: $.jqplot.CategoryAxisRenderer,
        ticks: data.time,
        tickRenderer: $.jqplot.CanvasAxisTickRenderer ,
        tickOptions: {
        show:false,
        enableFontSupport: true,
        fontFamily: 'Georgia',
        fontSize: '10pt'
        }

        },
        yaxis:{	ticks:ticks},
        y2axis:{ticks:ticks}
        },
        title:'Temperature Trend',
        series:[{},{yaxis:'y2axis',pointLabels:{show:true},showMarker:true}],
        highlighter: { show: false }
        }).replot();
        }
        else
        {
        document.getElementById("chart1").innerHTML = data.message;
        }
        }
        });
}


function fnUpdatePulseTrend()
{
		var newurl =$("#servername").val();
        var ticks = ['0', '40',  '80', '120','160'];
        var vitalPulse=$("#erPulse").val();
        var empId=$("#empId").val();
        var tempData = new Array();
        tempData[0]=vitalPulse;
        tempData[1]=empId;
        $.ajax({
        url	:'http://greenocean.in/rest-tst/index.php/api/example/insertPulseTrend',
        dataType:'json',
        type	:'POST',
        data	:{data:tempData},
        success	:  function(data)
        {
        if(data.response =='true'){
	        plot1 = $.jqplot('PulseChart', [data.reference,data.pulse, ], {
	        seriesDefaults:{
	        trendline:{show:true},
	        pointLabels: { show: false },
	        showMarker:false
	        },

	        axes: {
	        xaxis: {
	        renderer: $.jqplot.CategoryAxisRenderer,
	        ticks: data.time,
	        tickRenderer: $.jqplot.CanvasAxisTickRenderer ,
	        tickOptions: {
	        show:false,
	        enableFontSupport: true,
	        fontFamily: 'Georgia',
	        fontSize: '10pt'						  }
	        },

	        yaxis:{
	        ticks:ticks
	        },
	        y2axis:{
	        ticks:ticks
	        }
	        },

	        title:'Pulse Trend',
	        series:[{},{yaxis:'y2axis',pointLabels:{show:true},showMarker:true}],
	        highlighter: { show: false }
	        }).replot();
        }
        else
        {
        document.getElementById("PulseChart").innerHTML = data.message;
        }
        }
        });

}

function fnUpdateBPTrend()
{
			var newurl =$("#servername").val();
        var ticks = ['0', '40',  '80', '120', '160','200','240'];
        var vitalBP=$("#erBP").val();
        var empId=$("#empId").val();
        var tempData = new Array();
        tempData=vitalBP.split("/");
        tempData[2]=empId;
        $.ajax({
        url	:'http://greenocean.in/rest-tst/index.php/api/example/insertBPTrend',
        dataType:'json',
        type	:'POST',
        data	:{data:tempData},
        success	:  function(data){
        if(data.response =='true'){
        plot1 = $.jqplot('BPChart', [data.systolic,data.diastolic, ], {
        seriesDefaults:{
        renderer:$.jqplot.BarRenderer,
        rendererOptions:{barPadding:0, barMargin:10,barWidth:10},
        pointLabels: { show: true },
        showMarker:true
        },
        axes: {
        xaxis: {
        renderer: $.jqplot.CategoryAxisRenderer,
        ticks: data.time,
        tickRenderer: $.jqplot.CanvasAxisTickRenderer ,
        tickOptions: {
        enableFontSupport: true,
        fontFamily: 'Georgia',
        fontSize: '10pt',
        angle: -30
        }

        },
        yaxis:{
        ticks:ticks
        },
        y2axis:{
        ticks:ticks
        }
        },
        title:'BP Trend',
        series:[{},{yaxis:'y2axis',pointLabels:{show:true},showMarker:true}],
        highlighter: { show: false }
        }).replot();
        }
        else
        {
        document.getElementById("BPChart").innerHTML = data.message;

        }
        }
        });

}



//*********************************************//

/********Fitness Certificate inserting function START*******/

$("#Adfitnes").click(function(){
        var data = new Array();
        data[0] = $("#mcRepFnd").val();
        data[1] = $("#mcRepFI").val();
        data[2] = $("#mcRepRec").val();
        data[3] = $("#mcRepSig").val();
        data[4] = $("#empId").val();
        data[5] = $("#u_name").val();
			var newurl =$("#servername").val();
        $.ajax({
        url	: 'http://greenocean.in/rest-tst/index.php/api/example/fitnesscerti',
        dataType: 'json',
        type    : 'POST',
        data	: {data:data},
        success : function (data)
        {
        if (data.response =="true")
        updated(data.message);
        else
        updated(data.message);
        }
        });
});
/********Fitness Certificate inserting function end*******/

//INSERTING FUNCTION ENDING...//
// dashboard  start//
var eid= $("#empId").val();
jQuery("#ticker").ticker({ //ticker start
cursorList:  "_",
rate:        110,
delay:       5400
}).trigger("play").trigger("start"); //ticker end

var hlr = 0;
$('#Hist tbody').delegate("tr", "click", rowClick);
$('#Histdoc tbody').delegate("tr", "click", rowClickdoc);
$('#Hist_sche tbody').delegate("tr", "click", rowClicksch);




//-------------------------------------------------------------//


// dashboard end //
/*getdetails click function */

$("#getdetails").click(function(){
	var newurl =$("#servername").val();

var eid= $("#empId").val();
var gethis = $("#chdate").val();
clear();
if(eid=="")
{

updated(valedid);

}
else
{
$("#dashhist").show();
$("#Histdis").show();
$("#dasFamily").show();
$("#dasprevj").show();
$("#dasimmu").show();
$("#dasAllergy").show();
$("#dasCurr").show();
//$("#daspres").show();
$("#dasPreIll").show();
$("#dashsub").show();

}

//-------------------------------------------------------------//

$("#Hist").dataTable({

        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getHistData',
        'fnServerData'	: function(sSource, aoData, fnCallback){
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns"	:
        [{ "sTitle"	: "Checkup Date","aTargets":[0]},
        { "sTitle": "Doctor Name","aTargets":[1]}],
        "sDom": '<"subtoolbar">frtip'



});
//-------------------------------------------------------------//



var oTable = $("#PreIll").dataTable({

        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getprevillData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });

        },
        "aoColumns":
        [{ "sTitle": "Conditions","aTargets":[0] },
        { "sTitle": "Duration","aTargets":[1]},
        { "sTitle": "Treatment","aTargets":[2]}],
        "sDom": '<"subtoolbar">frtip',
        "iDisplayLength": 10


});

//-------------------------------------------------------------//

$("#Allergy").dataTable({
        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getAllergyData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
          [{ "sTitle": "Medication" ,"aTargets":[0]},
           { "sTitle": "Others" ,"aTargets":[1]}],
        "sDom": '<"subtoolbar">frtip'
        });

//-------------------------------------------------------------//

$("#immu").dataTable({
        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getimmuData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
        [{ "sTitle": "Vaccine","aTargets":[0]},
        {"sTitle": "Date_Given","aTargets":[1]}],
        "sDom": '<"subtoolbar">frtip'
});
//-------------------------------------------------------------//

$("#Family").dataTable({
        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getFamilyData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
	[{ "sTitle": "Illness","aTargets":[0]},
	{ "sTitle": "Relation","aTargets":[1]}],
	"sDom": '<"subtoolbar">frtip'
});
//-------------------------------------------------------------//

$("#Curr").dataTable({

        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getCurrData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
        [{ "sTitle": "Drug","aTargets":[0]},
        { "sTitle": "Brand","aTargets":[1]},
        { "sTitle": "Route","aTargets":[2]},
        { "sTitle": "Dosage","aTargets":[3]},
        { "sTitle": "M","aTargets":[4]},
        { "sTitle": "A","aTargets":[5]},
        { "sTitle": "E","aTargets":[6]},
        { "sTitle": "N","aTargets":[7]},
        { "sTitle": "Duration","aTargets":[8]},
        { "sTitle": "Remarks","aTargets":[9]}],
        "sDom": '<"subtoolbar">frtip'
});
//-------------------------------------------------------------//

$("#subs").dataTable({
        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getsubData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
        [{ "sTitle": "Sub_Name","aTargets":[0]},
        { "sTitle": "Route","aTargets":[1]},
        { "sTitle": "Duration","aTargets":[2]}],
        "sDom": '<"subtoolbar">frtip'
});
//-------------------------------------------------------------//

$("#prevj").dataTable({
        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getprevjData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
        [{ "sTitle": "Nature_Of_Job","aTargets":[0]},
        { "sTitle": "Duration","aTargets":[1]},
        { "sTitle": "Occup_Illness","aTargets":[2]}],
        "sDom": '<"subtoolbar">frtip'
});
//-------------------------------------------------------------//

 $("#pres").dataTable({
	"bJQueryUI"	: true,
	"bProcessing"	: false,
	"bFilter"	: false,
	"bPaginate"	: true,
	"bDestroy"	: true,
	"iDisplayLength":5,

	"sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getpresData',
	'fnServerData'	: function(sSource, aoData, fnCallback)
	{
		aoData.push( { "name": "my_field", "value": eid } );
		$.ajax({
			'dataType': 'json',
			'type'    : 'POST',
			'url'     : sSource,
			'data'    : aoData,
			'success' : fnCallback
		});
	},
	"aoColumns":
	[{ "sTitle": "Diagnosis","aTargets":[0]},
	{ "sTitle": "Drug","aTargets":[1]},
	{ "sTitle": "Brand","aTargets":[2]},
	{ "sTitle": "Route","aTargets":[3]},
	{ "sTitle": "Dosage","aTargets":[4]},
	{ "sTitle": "M","aTargets":[5]},
	{ "sTitle": "A","aTargets":[6]},
	{ "sTitle": "E","aTargets":[7]},
	{ "sTitle": "N","aTargets":[8]},
	{ "sTitle": "Duration","aTarets":[9]},
	{ "sTitle": "Quantity","aTargets":[10]},
	{ "sTitle": "Remarks","aTargets":[11]}],

	"sDom": '<"subtoolbar">frtip'
});
//-------------------------------------------------------------//

$("#Currdash").dataTable({

        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getCurrData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
        [{ "sTitle": "Drug","aTargets":[0]},
        { "sTitle": "Brand","aTargets":[1]},
        { "sTitle": "Route","aTargets":[2]},
        { "sTitle": "Dosage","aTargets":[3]},
        { "sTitle": "M","aTargets":[4]},
        { "sTitle": "A","aTargets":[5]},
        { "sTitle": "E","aTargets":[6]},
        { "sTitle": "N","aTargets":[7]},
        { "sTitle": "Duration","aTargets":[8]},
        { "sTitle": "Remarks","aTargets":[9]}],
        "sDom": '<"subtoolbar">frtip'
});
//-------------------------------------------------------------//


});

function clear()
{
        $("#cap_hd_pat").html('<img src="" style="height:110px;width:90px;"></img>');
        $("#name").val("");
        $("#DoB").val("");
        $("#Age").val("");
        $("#gend").val("");
        $("#Height").val("");
        $("#Weight").val("");
        $("#IdMarks").val("");
        $("#txtAddress1Current").val("");
        $("#cityname").val("");
        $("#areavalue").val("");
        $("#mailid").val("");
        $("#phnum").val("");
        $("#cmbCountryCurrent").val("");
        $("#cmbStateCurrent").val("");
        $("#pincode1").val("");
        $("#duration").val("");
        $("#cigarettes").val("");
        $("#packyrs").val("");
        $("#Pregutdur").val("");
        $("#child").val("");
        $("#ageofold").val("");
        $("#young").val("");
        $("#jobCategory").val("");
        $("#PreNotes").val("");
        $("#PreAlcoholVal").val("");
        $("#PreMSVal").val("");
        $("#famplantxt").val("");
        $("#PreDietVal").val("");
        $("#PreHandVal").val("");
        $("#PreEduVal").val("");
        $("#mhAge").val("");
        $("#mhReg").val("");
        $("#mhPer").val("");
        $("#mhDur").val("");
        $("#mhPn").val("");
        $("#mhFlw").val("");
        $("#mhMP").val("");
        $("#mhDSM").val("");
        $("#mhBrR").val("");
        $("#mhBrL").val("");
        $("#mhBrBF").val("");
        $("#mhVD").val("");
        $("#mhVDDur").val("");
        $("#mhVDOd").val("");
        $("#mhConMth").val("");
        $("#mhConDur").val("");
        $("#mhOth").val("");
        $("#ohChild").val("");
        $("#ohChildOld").val("");
        $("#ohChildYng").val("");
        $("#ohAbr").val("");
        $("#ohSB").val("");
        $("#ohMoD").val("");
        $("#ohPRC").val("");
        $("#ohPPC").val("");
        $("#ohOth").val("");
        $("#ohNotes").val("");
        $("#PreTemp").val("");
        $("#PrePulse").val("");
        $("#PreBP").val("");
        $("#PreBuildGen").val("");
        $("#PreWt").val("");
        $("#PreBMI").val("");
        $("#PreOralHyg").val("");
        $("#PreOralTon").val("");
        $("#PreOralTeeth").val("");
        $("#PreOralGum").val("");
        $("#PreOralTons").val("");
        $("#PreOralMuc").val("");
        $("#PreOralLip").val("");
        $("#PreThyNor").val("");
        $("#PreThyAb").val("");
        $("#PrePal").val("");
        $("#PreIct").val("");
        $("#PreCyn").val("");
        $("#PreOed").val("");
        $("#PreClub").val("");
        $("#PreLymNor").val("");
        $("#PreLymAb").val("");
        $("#PreNailCol").val("");
        $("#PreNailApp").val("");
        $("#PreNailAdd").val("");
        $("#PreGENotes").val("");
        $("#cardioPulRate").val("");
        $("#cardioPulRhy").val("");
        $("#cardioPulVol").val("");
        $("#cardioHrtAI").val("");
        $("#cardioHrtRate").val("");
        $("#cardioHrtRhy").val("");
        $("#cardioHrtS").val("");
        $("#cardioHrtMur").val("");
        $("#cardioHrtAdd").val("");
        $("#cardioPPNor").val("");
        $("#cardioPPAb").val("");
        $("#cardioBPSys").val("");
        $("#cardioBPDis").val("");
        $("#cardioNotes").val("");
        $("#respChstRate").val("");
        $("#respChstShape").val("");
        $("#respChstSym").val("");
        $("#respChstMov").val("");
        $("#respChstTr").val("");
        $("#respAusBS").val("");
        $("#respAusAS").val("");
        $("#respAusLA").val("");
        $("#respPalCr").val("");
        $("#respPerRes").val("");
        $("#respPerAb").val("");
        $("#respNotes").val("");
        $("#absExSh").val("");
        $("#absExSym").val("");
        $("#absExMov").val("");
        $("#absExAb").val("");
        $("#absAusBS").val("");
        $("#absAusBr").val("");
        $("#absPalRig").val("");
        $("#absPalTen").val("");
        $("#absPalSpl").val("");
        $("#absPalLiv").val("");
        $("#absPalAb").val("");
        $("#absGSIO").val("");
        $("#absGSIC").val("");
        $("#absGSFC").val("");
        $("#absPerRes").val("");
        $("#absPerAb").val("");
        $("#absNotes").val("");
        $("#peCorR").val("");
        $("#peConL").val("");
        $("#peConR").val("");
        $("#peScL").val("");
        $("#peScR").val("");
        $("#peACL").val("");
        $("#peACR").val("");
        $("#peIPL").val("");
        $("#peIPR").val("");
        $("#peLenL").val("");
        $("#peLenR").val("");
        $("#faCVL").val("");
        $("#faCVR").val("");
        $("#faPerL").val("");
        $("#faPerR").val("");
        $("#faOPL").val("");
        $("#faOPR").val("");
        $("#faDVL").val("");
        $("#faDVR").val("");
        $("#faNVL").val("");
        $("#faNVR").val("");
        $("#faPGL").val("");
        $("#faPGR").val("");
        $("#faCLL").val("");
        $("#faCLR").val("");
        $("#opRetL").val("");
        $("#opRetR").val("");
        $("#opODL").val("");
        $("#opODR").val("");
        $("#opBVL").val("");
        $("#opBVR").val("");
        $("#opVitL").val("");
        $("#opVitR").val("");
        $("#eyeNotes").val("");
        $("#eExL").val("");
        $("#eExR").val("");
        $("#eACL").val("");
        $("#eACR").val("");
        $("#eEdL").val("");
        $("#eEdR").val("");
        $("#eRTL").val("");
        $("#eRTR").val("");
        $("#eWTL").val("");
        $("#eWTR").val("");
        $("#eCHL").val("");
        $("#eCHR").val("");
        $("#eAuL").val("");
        $("#eAuR").val("");
        $("#nsEAL").val("");
        $("#nsEAR").val("");
        $("#nsANL").val("");
        $("#nsANR").val("");
        $("#nsSeL").val("");
        $("#nsSeR").val("");
        $("#nsTbL").val("");
        $("#nsTbR").val("");
        $("#nsNML").val("");
        $("#nsNMR").val("");
        $("#nsNpL").val("");
        $("#nsNpR").val("");
        $("#nsNAL").val("");
        $("#nsNAR").val("");
        $("#thBTL").val("");
        $("#thBTR").val("");
        $("#thEpL").val("");
        $("#thEpR").val("");
        $("#thGFL").val("");
        $("#thGFR").val("");
        $("#thVaL").val("");
        $("#thVaR").val("");
        $("#thFVL").val("");
        $("#thFVR").val("");
        $("#thTVL").val("");
        $("#thTVR").val("");
        $("#thPFL").val("");
        $("#thPFR").val("");
        $("#entNotes").val("");
        $("#mssULSh").val("");
        $("#mssULEl").val("");
        $("#mssULWr").val("");
        $("#mssULDg").val("");
        $("#mssULArm").val("");
        $("#mssULFh").val("");
        $("#mssULHnd").val("");
        $("#mssLLHp").val("");
        $("#mssLLkn").val("");
        $("#mssLLAn").val("");
        $("#mssLLDg").val("");
        $("#mssLLTh").val("");
        $("#mssLLLg").val("");
        $("#mssLLFt").val("");
        $("#mssSpCv").val("");
        $("#mssSpTc").val("");
        $("#mssSpLm").val("");
        $("#mssOthTM").val("");
        $("#mssOthCl").val("");
        $("#mssOthSt").val("");
        $("#mssOthRb").val("");
        $("#mssOthSc").val("");
        $("#mssNotes").val("");
        $("#cnsHFSp").val("");
        $("#cnsHFMem").val("");
        $("#cnsSSTch").val("");
        $("#cnsSSPrs").val("");
        $("#cnsSSPn").val("");
        $("#cnsSSTh").val("");
        $("#cnsSSGr").val("");
        $("#cnsSSSt").val("");
        $("#cnsSSKin").val("");
        $("#cnsCN").val("");
        $("#cnsCNAb").val("");
        $("#cnsMFPos").val("");
        $("#cnsMFGt").val("");
        $("#cnsMFRef").val("");
        $("#cnsMFSp").val("");
        $("#cnsMFMT").val("");
        $("#cnsMFMS").val("");
        $("#cnsPATP").val("");
        $("#cnsPAPer").val("");
        $("#cnsPATC").val("");
        $("#cnsNotes").val("");
        $("#geAbsSh").val("");
        $("#geAbsUt").val("");
        $("#geAbsAb").val("");
        $("#gePelVu").val("");
        $("#gePelVa").val("");
        $("#gePelCe").val("");
        $("#gePelUt").val("");
        $("#gePelAd").val("");
        $("#gePelOth").val("");
        $("#gePelAb").val("");
        $("#geBrsSk").val("");
        $("#geBrsSh").val("");
        $("#geBrsCn").val("");
        $("#geBrsNp").val("");
        $("#geBrsAx").val("");
        $("#geBrsOth").val("");
        $("#geBrsAb").val("");
        $("#geNotes").val("");
        $("#BrnTot").val("");
        $("#BrnHF").val("");
        $("#BrnNF").val("");
        $("#BrnBF").val("");
        $("#BrnG").val("");
        $("#BrnRAF").val("");
        $("#BrnRFAF").val("");
        $("#BrnRHnF").val("");
        $("#BrnRBt").val("");
        $("#BrnRUL").val("");
        $("#BrnRLL").val("");
        $("#BrnRFt").val("");
        $("#brnNotes").val("");
        $("#bldcnt").val("");
        $("#pftSummary").val("");
        $("#audSummary").val("");
        $("#persm").val("");
        $("#urcul").val("");
        $("#glucot").val("");
        $("#scre").val("");
        $("#ecSummary").val("");
        $("#xrSummary").val("");
        $("#srSummary").val("");
        $("#urSummary").val("");
        $("#ecgSummary").val("");
        $("#uaSummary").val("");
        $("#buRslt").val("");
        $("#buNormal").val("");
        $("#buRemarks").val("");
        $("#hivRslt").val("");
        $("#hivNormal").val("");
        $("#hivRemarks").val("");
        $("#hbaRslt").val("");
        $("#hbaNormal").val("");
        $("#hbaRemarks").val("");
        $("#scRslt").val("");
        $("#scNormal").val("");
        $("#scRemarks").val("");
        $("#seNaRslt").val("");
        $("#seNaNormal").val("");
        $("#seKRslt").val("");
        $("#seKNormal").val("");
        $("#seCaRslt").val("");
        $("#seCaNormal").val("");
        $("#sePhRslt").val("");
        $("#sePhNormal").val("");
        $("#seClRslt").val("");
        $("#seClNormal").val("");
        $("#seBcRslt").val("");
        $("#seBcNormal").val("");
        $("#seMgRslt").val("");
        $("#seMgNormal").val("");
        $("#seRemarks").val("");
        $("#cbcHbRslt").val("");
        $("#cbcHbNormal").val("");
        $("#cbcPCVRslt").val("");
        $("#cbcPCVNormal").val("");
        $("#cbcESRRslt").val("");
        $("#cbcESRNormal").val("");
        $("#cbcTCRslt").val("");
        $("#cbcTCNormal").val("");
        $("#cbcNeuRslt").val("");
        $("#cbcNeuNormal").val("");
        $("#cbcLymRslt").val("");
        $("#cbcLymNormal").val("");
        $("#cbcBasRslt").val("");
        $("#cbcBasNormal").val("");
        $("#cbcEosRslt").val("");
        $("#cbcEosNormal").val("");
        $("#cbcMonoRslt").val("");
        $("#cbcMonoNormal").val("");
        $("#cbcPltRslt").val("");
        $("#cbcPltNormal").val("");
        $("#cbcRemarks").val("");
        $("#bsrRslt").val("");
        $("#bsrNormal").val("");
        $("#bsrsum").val("");
        $("#bsfRslt").val("");
        $("#bsfNormal").val("");
        $("#bsfSummary").val("");
        $("#bsppRslt").val("");
        $("#bsppNormal").val("");
        $("#bsppra").val("");
        $("#lftRemarks").val("");
        $("#lftTBRslt").val("");
        $("#lftTBNormal").val("");
        $("#lftDBRslt").val("");
        $("#lftDBNormal").val("");
        $("#lftIBRslt").val("");
        $("#lftIBNormal").val("");
        $("#lftTPRslt").val("");
        $("#lftTPNormal").val("");
        $("#lftAlRslt").val("");
        $("#lftAlNormal").val("");
        $("#lftGlRslt").val("");
        $("#lftGlNormal").val("");
        $("#lftAGRRslt").val("");
        $("#lftAGRNormal").val("");
        $("#lftALPRslt").val("");
        $("#lftALPNormal").val("");
        $("#lftGGTRslt").val("");
        $("#lftGGTNormal").val("");
        $("#lftALTRslt").val("");
        $("#lftALTNormal").val("");
        $("#lftASTRslt").val("");
        $("#lftASTNormal").val("");
        $("#lftLDHRslt").val("");
        $("#lftLDHNormal").val("");
        $("#lpTCRslt").val("");
        $("#lpTCNormal").val("");
        $("#lpTgRslt").val("");
        $("#lpTgNormal").val("");
        $("#lpLDLRslt").val("");
        $("#lpLDLNormal").val("");
        $("#lpHDLRslt").val("");
        $("#lpHDLNormal").val("");
        $("#lpVLDLRslt").val("");
        $("#lpVLDLNormal").val("");
        $("#lpCHRRslt").val("");
        $("#lpCHRNormal").val("");
        $("#lpRemarks").val("");
        $("#prvRepFnd").val("");
        $("#prvRepFI").val("");
        $("#prvRepRec").val("");
        $("#Specialities").val("");
        $("#Name_Doc").val("");
        $("#Address").val("");
        $("#finRepFnd").val("");
        $("#finRepFI").val("");
        $("#prvRepRec1").val("");
        $("#prvRepMedi").val("");
        $("#MgmtRepFnd").val("");
        $("#MgmtRepFI").val("");
        $("#MgmtRepRec").val("");
        $("#emrPrgEx").val("");
        $("#emrPrgTr").val("");
        $("#emrPrgFI").val("");
        $("#erTemp").val("");
        $("#erPulse").val("");
        $("#erBP").val("");
        $("#mcRepFnd").val("");
        $("#mcRepFI").val("");
        $("#mcRepRec").val("");
        $("#mcRepSig").val("");
        $("#sknSC").val("");
        $("#sknTem").val("");
        $("#sknMois").val("");
        $("#sknMT").val("");
        $("#sknHr").val("");
        $("#sknNls").val("");
        $("#sknMcs").val("");
        $("#sknAb").val("");
        $("#msNotes").val("");
        $("#peCorL").val("");
         $("#Diagno_rep").val("");
        $("#Clidia_rep").val("");
        $("#Curinc_rep").val("");
        $("#aller_rep").val("");
        $("#Other_rep").val("");



}
function calldisplayall() {
	$("#loadimageajax").show();

        clear();
        dis_basic();
        dis_perhist();
        dis_obgyn();
        dis_genexam();
        dis_cardio();
        dis_gynae();
        dis_nervous();
        dis_skin();
        dis_musculo();
        dis_ent();
        dis_eye();
        dis_abdomen();
        dis_resp();
        dis_glucosetolerance();
        dis_ultrasoundabdomen();
        dis_bloodsugarrandom();
        dis_bloodsugarpost();
        dis_xray();
        dis_echocardiogram();
        dis_serumcreatinine();
        dis_urineroutine();
        dis_HBsAg();
        dis_bloodsugarfasting();
        dis_ecg();
        dis_hiv();
        dis_bloodurea();
        dis_stoolculture();
        dis_lipid();
        dis_serumelect();
        dis_stoolroutine();
        dis_uculture();
        dis_liverfun();
        dis_peripheral();
        dis_audiogram();
        dis_bloodculture();
        dis_pulmonary();
        dis_bloodcount();
        dis_fitnesscertificate();
        dis_management();
        dis_medical();
        dis_finalreport();
        dis_referral();
        dis_provisional();
        distemp();
        dispulse();
        disbp();
        HdisplayProg();
        disburns();
        dis_mreport();

}


//row click for Scheduled doctor Patients

function rowClicksch() {
	var newurl =$("#servername").val();
        if (hlr)
        $("td:first", hlr).parent().children().each(function(){$(this).removeClass('markrow');});
        hlr = this;
        $("td:first", this).parent().children().each(function(){$(this).addClass('markrow');});

        // You can pull the values out of the row here if required

        var a1 = $("td:first", this).text();
        $("#empId").val(a1);
        $("#todaypat").hide();
        $("#Histsche").hide();
        $("#patdet_dash").show();
        $("#Histdis").show();
        $("#dashsub").show();
        $("#dashhist").show();
        $("#dashhist").show();
        $("#dasFamily").show();
        $("#dasprevj").show();
        $("#dasimmu").show();
        $("#dasAllergy").show();
        $("#dasCurr").show();
       // $("#daspres").show();
        $("#dasPreIll").show();
        $("#preempocc").show();


        //-------------------------------------------------------------//

        //-------------------------------------------------------------//

        var eid = $('#empId').val();

        //-------------------------------------------------------------//

        $("#Hist").dataTable({

        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getHistData',
        'fnServerData'	: function(sSource, aoData, fnCallback){
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns"	:
        [{ "sTitle"	: "Checkup Date","aTargets":[0]},
        { "sTitle": "Doctor Name","aTargets":[1]}],
        "sDom": '<"subtoolbar">frtip'



        });
        //-------------------------------------------------------------//

        $("#subs").dataTable({
        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getsubData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
        [{ "sTitle": "Sub_Name","aTargets":[0]},
        { "sTitle": "Route","aTargets":[1]},
        { "sTitle": "Duration","aTargets":[2]}],
        "sDom": '<"subtoolbar">frtip'
        });
        //-------------------------------------------------------------//

        var oTable = $("#PreIll").dataTable({

        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getprevillData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });

        },
        "aoColumns":
        [{ "sTitle": "Conditions","aTargets":[0] },
        { "sTitle": "Duration","aTargets":[1]},
        { "sTitle": "Treatment","aTargets":[2]}],
        "sDom": '<"subtoolbar">frtip',
        "iDisplayLength": 10


        });
        //-------------------------------------------------------------//

        $("#Allergy").dataTable({
        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getAllergyData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
          [{ "sTitle": "Medication" ,"aTargets":[0]},
           { "sTitle": "Others" ,"aTargets":[1]}],
        "sDom": '<"subtoolbar">frtip'
        });

        //-------------------------------------------------------------//
        $("#immu").dataTable({

        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getimmuData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
        [{ "sTitle": "Vaccine","aTargets":[0]},
        {"sTitle": "Date_Given","aTargets":[1]}],
        "sDom": '<"subtoolbar">frtip'
        });
        //-------------------------------------------------------------//

         $("#Family").dataTable({
        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getFamilyData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
	[{ "sTitle": "Illness","aTargets":[0]},
	{ "sTitle": "Relation","aTargets":[1]}],
	"sDom": '<"subtoolbar">frtip'
        });

        //-------------------------------------------------------------//

        $("#Curr").dataTable({

        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getCurrData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
        [{ "sTitle": "Drug","aTargets":[0]},
        { "sTitle": "Brand","aTargets":[1]},
        { "sTitle": "Route","aTargets":[2]},
        { "sTitle": "Dosage","aTargets":[3]},
        { "sTitle": "M","aTargets":[4]},
        { "sTitle": "A","aTargets":[5]},
        { "sTitle": "E","aTargets":[6]},
        { "sTitle": "N","aTargets":[7]},
        { "sTitle": "Duration","aTargets":[8]},
        { "sTitle": "Remarks","aTargets":[9]}],
        "sDom": '<"subtoolbar">frtip'
        });
        //-------------------------------------------------------------//

        $("#prevj").dataTable({
        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getprevjData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
        [{ "sTitle": "Nature_Of_Job","aTargets":[0]},
        { "sTitle": "Duration","aTargets":[1]},
        { "sTitle": "Occup_Illness","aTargets":[2]}],
        "sDom": '<"subtoolbar">frtip'
        });
        //-------------------------------------------------------------//

 $("#pres").dataTable({
	"bJQueryUI"	: true,
	"bProcessing"	: false,
	"bFilter"	: false,
	"bPaginate"	: true,
	"bDestroy"	: true,
	"iDisplayLength":5,

	"sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getpresData',
	'fnServerData'	: function(sSource, aoData, fnCallback)
	{
		aoData.push( { "name": "my_field", "value": eid } );
		$.ajax({
			'dataType': 'json',
			'type'    : 'POST',
			'url'     : sSource,
			'data'    : aoData,
			'success' : fnCallback
		});
	},
	"aoColumns":
	[{ "sTitle": "Diagnosis","aTargets":[0]},
	{ "sTitle": "Drug","aTargets":[1]},
	{ "sTitle": "Brand","aTargets":[2]},
	{ "sTitle": "Route","aTargets":[3]},
	{ "sTitle": "Dosage","aTargets":[4]},
	{ "sTitle": "M","aTargets":[5]},
	{ "sTitle": "A","aTargets":[6]},
	{ "sTitle": "E","aTargets":[7]},
	{ "sTitle": "N","aTargets":[8]},
	{ "sTitle": "Duration","aTarets":[9]},
	{ "sTitle": "Quantity","aTargets":[10]},
	{ "sTitle": "Remarks","aTargets":[11]}],

	"sDom": '<"subtoolbar">frtip'

});
       		//-------------------------------------------------------------//
 $("#prepres").dataTable({
	"bJQueryUI"	: true,
	"bProcessing"	: false,
	"bFilter"	: false,
	"bPaginate"	: true,
	"bDestroy"	: true,
	"sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getpresData',
	'fnServerData'	: function(sSource, aoData, fnCallback)
	{
		aoData.push( { "name": "my_field", "value": eid } );
		$.ajax({
			'dataType': 'json',
			'type'    : 'POST',
			'url'     : sSource,
			'data'    : aoData,
			'success' : fnCallback
		});
	},
	"aoColumns":
	[{"sTitle": "Diagnosis","aTargets":[0]},
	{"sTitle": "Drug","aTargets":[1]},
	{ "sTitle": "Brand","aTargets":[2]},
	{ "sTitle": "Route","aTargets":[3]},
	{ "sTitle": "Dosage","aTargets":[4]},
	{ "sTitle": "M","aTargets":[5]},
	{ "sTitle": "A","aTargets":[6]},
	{ "sTitle": "E","aTargets":[7]},
	{ "sTitle": "N","aTargets":[8]},
	{ "sTitle": "Duration","aTargets":[9]},
	{ "sTitle": "Quantity","aTargets":[10]},
	{ "sTitle": "Remarks","aTargets":[11]}],
	"sDom": '<"subtoolbar">frtip'
});
//-------------------------------------------------------------//



        $("#Currdash").dataTable({

        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getCurrData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
        [{ "sTitle": "Drug","aTargets":[0]},
        { "sTitle": "Brand","aTargets":[1]},
        { "sTitle": "Route","aTargets":[2]},
        { "sTitle": "Dosage","aTargets":[3]},
        { "sTitle": "M","aTargets":[4]},
        { "sTitle": "A","aTargets":[5]},
        { "sTitle": "E","aTargets":[6]},
        { "sTitle": "N","aTargets":[7]},
        { "sTitle": "Duration","aTargets":[8]},
        { "sTitle": "Remarks","aTargets":[9]}],
        "sDom": '<"subtoolbar">frtip'
        });
        //-------------------------------------------------------------//
                $("#prempoc").dataTable({
                "bJQueryUI"	: true,
                "bProcessing"	: false,
                "bFilter"	: false,
                "bPaginate"	: true,
                "bDestroy"	: true,
                "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getprempoc',
                'fnServerData'	: function(sSource, aoData, fnCallback)
                {
                aoData.push( { "name": "my_field", "value": eid } );
                $.ajax
                ({
                'dataType': 'json',
                'type'    : 'POST',
                'url'     : sSource,
                'data'    : aoData,
                'success' : fnCallback
                });
                },
                "aoColumns":
                [{ "sTitle": "Job Title","aTargets":[0]},
                { "sTitle": "Comment","aTargets":[1]},
                { "sTitle": "Company/Employee","aTargets":[2]},
                { "sTitle": "Work Place","aTargets":[3]},
                { "sTitle": "Nature of Job","aTargets":[4]},
                { "sTitle": "Duration","aTargets":[5]},
                { "sTitle": "Occup_illness","aTargets":[6]}],

                "sDom": '<"subtoolbar">frtip'
        });
          //-------------------------------------------------------------//
        calldisplayall();
        displaypatientdetils();



}

/*getdetails click function*/

//DISPLAY FUNCTION STARTING...//

//row click for particular doctor Patients

function rowClickdoc() {
	var newurl =$("#servername").val();
        if (hlr)
        $("td:first", hlr).parent().children().each(function(){$(this).removeClass('markrow');});
        hlr = this;
        $("td:first", this).parent().children().each(function(){$(this).addClass('markrow');});

        // You can pull the values out of the row here if required
        var a1 = $("td:first", this).text();
        var a = $("td:eq(1)", this).text() + " 23:59:59";
        var b = $("td:eq(2)", this).text();
        var c = $("td:eq(3)", this).text();
        var now = new Date(a);//"dS mmmm, yyyy");

        $("#empId").val(a1);
        $("#Histdis").show();
        $("#Currdashvis").show();
        $("#patdet_dash").show();
        $("#todaypat").hide();
        var selected = "Selected";
        updated(selected);
        $("#chdate").val(now.format("yyyy-mm-dd HH:MM:ss"));
        var gethis = document.getElementById('chdate').value;

        $("#pat_cap_img").hide();
        $("#camcapimg").hide();
        $("#cap_hd_pat").show();
        $("#dashhist").show();
        $("#dashhist").show();
        $("#dasFamily").show();
        $("#dasprevj").show();
        $("#dasimmu").show();
        $("#dasAllergy").show();
        $("#dasCurr").show();
       // $("#daspres").show();
        $("#dasPreIll").show();
        $("#dashsub").show();


        //-------------------------------------------------------------//

        var eid = $('#empId').val();

        //-------------------------------------------------------------//

        $("#Hist").dataTable({

        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getHistData',
        'fnServerData'	: function(sSource, aoData, fnCallback){
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns"	:
        [{ "sTitle"	: "Checkup Date","aTargets":[0]},
        { "sTitle": "Doctor Name","aTargets":[1]}],
        "sDom": '<"subtoolbar">frtip'



        });
        //-------------------------------------------------------------//

        $("#subs").dataTable({
        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getsubData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
        [{ "sTitle": "Sub_Name","aTargets":[0]},
        { "sTitle": "Route","aTargets":[1]},
        { "sTitle": "Duration","aTargets":[2]}],
        "sDom": '<"subtoolbar">frtip'
        });
        //-------------------------------------------------------------//

        var oTable = $("#PreIll").dataTable({

        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getprevillData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });

        },
        "aoColumns":
        [{ "sTitle": "Conditions","aTargets":[0] },
        { "sTitle": "Duration","aTargets":[1]},
        { "sTitle": "Treatment","aTargets":[2]}],
        "sDom": '<"subtoolbar">frtip',
        "iDisplayLength": 10


        });
        //-------------------------------------------------------------//

        $("#Allergy").dataTable({
        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getAllergyData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
          [{ "sTitle": "Medication" ,"aTargets":[0]},
           { "sTitle": "Others" ,"aTargets":[1]}],
        "sDom": '<"subtoolbar">frtip'
        });

        //-------------------------------------------------------------//
        $("#immu").dataTable({

        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getimmuData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
        [{ "sTitle": "Vaccine","aTargets":[0]},
        {"sTitle": "Date_Given","aTargets":[1]}],
        "sDom": '<"subtoolbar">frtip'
        });
        //-------------------------------------------------------------//

        $("#Family").dataTable({
        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getFamilyData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
	[{ "sTitle": "Illness","aTargets":[0]},
	{ "sTitle": "Relation","aTargets":[1]}],
	"sDom": '<"subtoolbar">frtip'
        });

        //-------------------------------------------------------------//

        $("#Curr").dataTable({

        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getCurrData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
        [{ "sTitle": "Drug","aTargets":[0]},
        { "sTitle": "Brand","aTargets":[1]},
        { "sTitle": "Route","aTargets":[2]},
        { "sTitle": "Dosage","aTargets":[3]},
        { "sTitle": "M","aTargets":[4]},
        { "sTitle": "A","aTargets":[5]},
        { "sTitle": "E","aTargets":[6]},
        { "sTitle": "N","aTargets":[7]},
        { "sTitle": "Duration","aTargets":[8]},
        { "sTitle": "Remarks","aTargets":[9]}],
        "sDom": '<"subtoolbar">frtip'
        });
        //-------------------------------------------------------------//

        $("#prevj").dataTable({
        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getprevjData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
        [{ "sTitle": "Nature_Of_Job","aTargets":[0]},
        { "sTitle": "Duration","aTargets":[1]},
        { "sTitle": "Occup_Illness","aTargets":[2]}],
        "sDom": '<"subtoolbar">frtip'
        });
        //-------------------------------------------------------------//

 $("#pres").dataTable({
	"bJQueryUI"	: true,
	"bProcessing"	: false,
	"bFilter"	: false,
	"bPaginate"	: true,
	"bDestroy"	: true,
	"iDisplayLength":5,

	"sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getpresData',
	'fnServerData'	: function(sSource, aoData, fnCallback)
	{
		aoData.push( { "name": "my_field", "value": eid } );
		$.ajax({
			'dataType': 'json',
			'type'    : 'POST',
			'url'     : sSource,
			'data'    : aoData,
			'success' : fnCallback
		});
	},
	"aoColumns":
	[{ "sTitle": "Diagnosis","aTargets":[0]},
	{ "sTitle": "Drug","aTargets":[1]},
	{ "sTitle": "Brand","aTargets":[2]},
	{ "sTitle": "Route","aTargets":[3]},
	{ "sTitle": "Dosage","aTargets":[4]},
	{ "sTitle": "M","aTargets":[5]},
	{ "sTitle": "A","aTargets":[6]},
	{ "sTitle": "E","aTargets":[7]},
	{ "sTitle": "N","aTargets":[8]},
	{ "sTitle": "Duration","aTarets":[9]},
	{ "sTitle": "Quantity","aTargets":[10]},
	{ "sTitle": "Remarks","aTargets":[11]}],

	"sDom": '<"subtoolbar">frtip'
});
        //-------------------------------------------------------------//

        $("#Currdash").dataTable({

        "bJQueryUI"	: true,
        "bProcessing"	: false,
        "bFilter"	: false,
        "bPaginate"	: true,
        "bDestroy"	: true,
        "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getCurrData',
        'fnServerData'	: function(sSource, aoData, fnCallback)
        {
        aoData.push( { "name": "my_field", "value": eid } );
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'POST',
        'url'     : sSource,
        'data'    : aoData,
        'success' : fnCallback
        });
        },
        "aoColumns":
        [{ "sTitle": "Drug","aTargets":[0]},
        { "sTitle": "Brand","aTargets":[1]},
        { "sTitle": "Route","aTargets":[2]},
        { "sTitle": "Dosage","aTargets":[3]},
        { "sTitle": "M","aTargets":[4]},
        { "sTitle": "A","aTargets":[5]},
        { "sTitle": "E","aTargets":[6]},
        { "sTitle": "N","aTargets":[7]},
        { "sTitle": "Duration","aTargets":[8]},
        { "sTitle": "Remarks","aTargets":[9]}],
        "sDom": '<"subtoolbar">frtip'
        });
        //-------------------------------------------------------------////-------------------------------------------------------------//

        $("#prempoc").dataTable({
                "bJQueryUI"	: true,
                "bProcessing"	: false,
                "bFilter"	: false,
                "bPaginate"	: true,
                "bDestroy"	: true,
                "sAjaxSource"	: 'http://greenocean.in/rest-tst/index.php/api/example/getprempoc',
                'fnServerData'	: function(sSource, aoData, fnCallback)
                {
                aoData.push( { "name": "my_field", "value": eid } );
                $.ajax
                ({
                'dataType': 'json',
                'type'    : 'POST',
                'url'     : sSource,
                'data'    : aoData,
                'success' : fnCallback
                });
                },
                "aoColumns":
                [{ "sTitle": "Job Title","aTargets":[0]},
                { "sTitle": "Comment","aTargets":[1]},
                { "sTitle": "Company/Employee","aTargets":[2]},
                { "sTitle": "Work Place","aTargets":[3]},
                { "sTitle": "Nature of Job","aTargets":[4]},
                { "sTitle": "Duration","aTargets":[5]},
                { "sTitle": "Occup_illness","aTargets":[6]}],

                "sDom": '<"subtoolbar">frtip'
        });
//-------------------------------------------------------------//

$("#visitpat").hide();

}
// row click for Patient History

function rowClick(){



        if (hlr)
        $("td:first", hlr).parent().children().each(function(){$(this).removeClass('markrow');});
        hlr = this;
        $("td:first", this).parent().children().each(function(){$(this).addClass('markrow');});

        // You can pull the values out of the row here if required
        var a = $("td:first", this).text() + " 23:59:59";
        var b = $("td:eq(1)", this).text();
        var c = $("td:eq(0)", this).text();
        var now = new Date(a);//"dS mmmm, yyyy");
        $("#chdate").val(now.format("yyyy-mm-dd HH:MM:ss"));
        var gethis = document.getElementById('chdate').value;
      //  $("#Management").trigger('click');
        //$("#dash-dis1").hide();
   $("#dash-repo1").hide();
        $("#pat_cap_img").hide();
        $("#camcapimg").hide();
        $("#cap_hd_pat").show();
        var selected = "Selected";
        updated(selected);
        calldisplayall();
}

function distemp()
{
	var newurl =$("#servername").val();
        var empid = $('#empId').val();
        var gethis = $('#chdate').val();
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'GET',
        'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/temp',
        'data'    : {data: empid,check: gethis},
        'success' : function(data){
        if (data.response =='true')
        {
        $("#erTemp").val(data.temperature);
        }
        }
        });
}

function dispulse()
{
	var newurl =$("#servername").val();
        var empid = $('#empId').val();
        var gethis = $('#chdate').val();
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'GET',
        'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/pulse',
        'data'    : {data: empid,check: gethis},
        'success' : function(data){
        if (data.response =='true')
        {
        $("#erPulse").val(data.pulse);
        }
        }
        });
}

function disbp()
{
	var newurl =$("#servername").val();
        var empid = $('#empId').val();
        var gethis = $('#chdate').val();
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'GET',
        'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/bp',
        'data'    : {data: empid,check: gethis},
        'success' : function(data){
        if (data.response =='true')
        {
        $("#erBP").val(data.systolic,data.diastolic);
        }
        }
        });
}


function HdisplayProg()
{

	var newurl =$("#servername").val();
        var empid = $('#empId').val();
        var gethis = $('#chdate').val();
        $.ajax
        ({
        'dataType': 'json',
        'type'    : 'GET',
        'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/displayprog',
        'data'    : {data: empid,check: gethis},
        'success' : function(data){
        if (data.response =='true')
        {
        //alert('progress');
        $("#emrPrgEx").val(data.Examination);
        $("#emrPrgTr").val(data.Treatment);
        $("#emrPrgFI").val(data.Further_Investigations);
        }
        }
        });
}

/* -----Dsplaying Basic Details starting-----*/

function dis_basic(){
		var newurl =$("#servername").val();
        var empid = $('#empId').val();
        var gethis = $('#chdate').val();
        $.ajax({
        'dataType': 'json',
        'type'    : 'GET',
        'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/bas',
        'data'    : {data: empid,check: gethis },
        'success' : function(data){
        if (data.response =='true')
        {

		  var dpname, dpid, dadrs, dcdate, ddname;
        var dNow = new Date();
        dcdate= dNow.getDate() + '/' + (dNow.getMonth()+1) + '/' + dNow.getFullYear() ;
        dadrs = data.address+","+data.area+","+data.city;
        $("#d_pname").text(data.name);
        $("#d_cdate").text(dcdate);
        $("#d_pid").text(data.emp_id);
        $("#d_dname").text(data.Doctor);
        $("#d_paddress").text(dadrs);

        $("#d_pname1").text(data.name);
        $("#d_cdate1").text(dcdate);
        $("#d_pid1").text(data.emp_id);
        $("#d_dname1").text(data.Doctor);
        $("#d_paddress1").text(dadrs);

        $("#name").val(data.name);
        $("#DoB").val(data.dob);
        $("#Age").val(data.age);
        $("#gend").val(data.sex);

        if(data.sex == "Female")
        {
        $('#female').attr('checked','checked').button("refresh");
        gend.value="Female";
        $("#console").text("Female");
        }
        if(data.sex == "Male")
        {
        $('#male').attr('checked','checked').button("refresh");
        gend.value="Male";
        $('#console').text("Male");
        }

        $("#Height").val(data.height);
        $("#Weight").val(data.weight);
        $("#IdMarks").val(data.identification1);
        $("#txtAddress1Current").val(data.address);
        $("#are").val(data.city);
        $("#areavalue").val(data.city);
        $("#cityname").val(data.area);
        $("#cmbCountryCurrent").val(data.country);
        $("#cmbStateCurrent").val(data.state);
        $("#pincode1").val(data.pincode);
        $("#phnum").val(data.phone);
        $("#mailid").val(data.email);

        var pat_name = data.name;//"siva";
        var p1 ="Patient Name  :  "+pat_name;
        $('#pat_na').text(p1);


        //	var serimg_pat = data.image;

        //$("#cap_hd_pat").html('<img src="http://greenocean.in/cpclplus/patientimg/'+serimg_pat+'" style="height:110px;width:90px;"></img>');
        }
        dis_imgname();
        },
        'error'	  :function(){
		        var nores ="No Response...";
        updated(nores);
        }
        });

}
/* -----Dsplaying Basic Details ending-----*/

/* -----Dsplaying Basic Details without date ending-----*/

function displaypatientdetils()
{


        var empid = $('#empId').val();
        $.ajax({
        'dataType': 'json',
        'type'    : 'GET',
        'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/bascmn',
        'data'    : {data: empid },
        'success' : function(data){
        if (data.response =='true')
        {
        var dpname, dpid, dadrs, dcdate, ddname;
        var dNow = new Date();
        dcdate= dNow.getDate() + '/' + (dNow.getMonth()+1) + '/' + dNow.getFullYear() ;
        dadrs = data.address+","+data.area+","+data.city;
        $("#d_pname").text(data.name);
        $("#d_cdate").text(dcdate);
        $("#d_pid").text(data.emp_id);
        $("#d_dname").text(data.Doctor);
        $("#d_paddress").text(dadrs);

        $("#d_pname1").text(data.name);
        $("#d_cdate1").text(dcdate);
        $("#d_pid1").text(data.emp_id);
        $("#d_dname1").text(data.Doctor);
        $("#d_paddress1").text(dadrs);

        $("#name").val(data.name);
        $("#DoB").val(data.dob);
        $("#Age").val(data.age);
        $("#gend").val(data.sex);

        if(data.sex == "Female")
        {
        $('#female').attr('checked','checked').button("refresh");
        gend.value="Female";
        $("#console").text("Female");
        }
        if(data.sex == "Male")
        {
        $('#male').attr('checked','checked').button("refresh");
        gend.value="Male";
        $('#console').text("Male");
        }

        $("#Height").val(data.height);
        $("#Weight").val(data.weight);
        $("#IdMarks").val(data.identification1);
        $("#txtAddress1Current").val(data.address);
        $("#are").val(data.city);
        $("#areavalue").val(data.city);
        $("#cityname").val(data.area);
        $("#cmbCountryCurrent").val(data.country);
        $("#cmbStateCurrent").val(data.state);
        $("#pincode1").val(data.pincode);
        $("#phnum").val(data.phone);
        $("#mailid").val(data.email);

        var pat_name = data.name;//"siva";
        var p1 ="Patient Name  :  "+pat_name;
        $('#pat_na').text(p1);


        //	var serimg_pat = data.image;

        //$("#cap_hd_pat").html('<img src="http://greenocean.in/cpclplus/patientimg/'+serimg_pat+'" style="height:110px;width:90px;"></img>');
        }
        dis_imgname();
        },
        'error'	  :function(){
		        var nores ="No Response...";
        updated(nores);
        }
        });

}

/* -----Dsplaying imagename starting-----*/

function dis_imgname(){
var empid = $('#empId').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/imgnames',
'data'    : {data: empid},
'success' : function(data){
if (data.response =='true')
{
var serimg_pat = data.imgname;
$("#cap_hd_pat1").html('<img src="http://greenocean.in/cpclplus/patientimg/'+serimg_pat+'" style="height:70px;width:70px;"></img>');
$("#cap_hd_pat").html('<img src="http://greenocean.in/cpclplus/patientimg/'+serimg_pat+'" style="height:110px;width:90px;"></img>');

}
},
'error'	  :function(){
		var nores ="No Response Image...";
updated(nores);
}
});
}
/* -----Dsplaying imagename ending-----*/


/* -----Displaying Personal History start-----*/
function dis_perhist(){

var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/his',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#duration").val(data.sm_dur);
$("#cigarettes").val(data.sm_cig);
$("#packyrs").val(data.sm_pk);
$("#Pregutdur").val(data.gutkha);
$("#child").val(data.children_no);
$("#ageofold").val(data.ageofold);
$("#young").val(data.ageofyoung);
$("#jobCategory").val(data.present_job);
$("#PreNotes").val(data.Notes);
$("#PreAlcoholVal").val(data.alcohol);
$("#soc").val(data.soc);
$("#industry").val(data.industry);

if(data.family_planning=="Yes"){$('#Yes').attr('checked','checked').button("refresh"); $('#famplantxt').val("Yes");}
if(data.family_planning=="No"){$('#No').attr('checked','checked').button("refresh");$('#famplantxt').val("No");}

if(data.education=="Illiterate"){$('#Illiterate').attr('checked','checked').button("refresh"); $('#PreEduVal').val("Illiterate");}
if(data.education=="Literate"){$('#Literate').attr('checked','checked').button("refresh");$('#PreEduVal').val("Literate");}

if(data.diet=="Veg"){$('#Veg').attr('checked','checked').button("refresh"); $('#PreDietVal').val("Veg");}
if(data.diet=="Non-Veg"){$('#Non-Veg').attr('checked','checked').button("refresh");$('#PreDietVal').val("Non-Veg");}

if(data.dominant_hand=="Left"){$('#left').attr('checked','checked').button("refresh"); $('#PreHandVal').val("Left");}
if(data.dominant_hand=="Right"){$('#right').attr('checked','checked').button("refresh");$('#PreHandVal').val("Right");}

// For Family Planning //
$("#marital_status").val(data.maritial);
$("#alcohol").val(data.alcohol);

//industry
$('#job_nature').append(  $('<option value="' + data.occupation + '">' + data.occupation+ '</option>' ) );
$('#task_jc').append(  $('<option value="' + data.task + '">' + data.task+ '</option>' ) );

}

}
});
}
/* -----Displaying Personal History end-----*/

/* -----OB/Gyn History start-----*/
function dis_obgyn(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/obgyn',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#mhAge").val(data.men_age);

$("#mhReg").val(data.men_reg);
$("#mhPer").val(data.men_period);
$("#mhDur").val(data.men_duration);

$("#mhPn").val(data.men_pain);
$("#mhFlw").val(data.men_flow);
$("#mhMP").val(data.menopause);
$("#mhDSM").val(data.dur_since_menopause);
$("#mhBrR").val(data.breast_right);
$("#mhBrL").val(data.breast_left);
$("#mhBrBF").val(data.breast_feed);
$("#mhVD").val(data.vag_dis_discharge);
$("#mhVDDur").val(data.vag_dis_duration);
$("#mhVDOd").val(data.vag_dis_odour);
$("#mhConMth").val(data.contraception_method);
$("#mhConDur").val(data.contraception_duration);
$("#mhOth").val(data.others);
$("#ohChild").val(data.no_of_child);
$("#ohChildOld").val(data.age_of_oldest);
$("#ohChildYng").val(data.age_of_young);
$("#ohAbr").val(data.abortion);
$("#ohSB").val(data.still_birth);
$("#ohMoD").val(data.mode_of_delivery);
$("#ohPRC").val(data.preg_complications);
$("#ohPPC").val(data.post_partum_complications);
$("#ohOth").val(data.obst_others);
$("#ohNotes").val(data.notes);
}

}
});
}
/* -----OB/Gyn History end-----*/


/* ----- General Exam start -----*/
function dis_mreport(){
$("#loadimageajax").show();

var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/getmreport',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#loadimageajax").hide();
$("#dash-repo1").show();
$("#prevpres").show();
$("#Diagno_rep").val(data.Diagnosis);
$("#Clidia_rep").val(data.Clinical_findings);
$("#Curinc_rep").val(data.Current_treatment);

$("#aller_rep").val(data.Allergies);
$("#Other_rep").val(data.Other);

$("#dasrep1").text(data.Diagnosis);
$("#dasrep2").text(data.Clinical_findings);
$("#dasrep3").text(data.Current_treatment);

$("#dasrep4").text(data.Allergies);
$("#dasrep5").text(data.Other);

}
else {
	$("#dash-repo1").hide();
	$("#loadimageajax").hide();
	$("#prevpres").hide();
	 //updated("Report Not Available");

}
}

});
}
/* ----- General Exam end -----*/

/* ----- General Exam start -----*/
function dis_genexam(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/genexam',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#PreTemp").val(data.temp);
$("#PrePulse").val(data.pulse);
$("#PreBP").val(data.bp);

$("#erTemp").val(data.temp);
$("#erPulse").val(data.pulse);
$("#erBP").val(data.bp);

$("#PreBuildGen").val(data.general_build);
$("#PreWt").val(data.weight);
$("#PreBMI").val(data.bmi);
$("#PreLymNor").val(data.lymph_normal);
$("#PreOralTon").val(data.tongue);
$("#PreOralTeeth").val(data.teeth);
$("#PreOralGum").val(data.gums);
$("#PreOralTons").val(data.tonsils);
$("#PreOralMuc").val(data.buccal_mucossa);
$("#PreOralLip").val(data.lips);

$("#PreThyNor").val(data.thyroid_normal);
$("#PreThyAb").val(data.thyroid_abnormal);

$("#PreOralHyg").val(data.oral_hygiene);
$("#PreIct").val(data.icterus_app);
$("#PreCyn").val(data.cyanosis_app);
$("#PreOed ").val(data.oedema_app);
$("#PreClub").val(data.clubbing_app);

$("#PrePal").val(data.pallor_app);
$("#PreLymAb").val(data.lymph_abnormal);
$("#PreNailCol").val(data.nail_colour);
$("#PreNailApp").val(data.nail_app);
$("#PreNailAdd").val(data.nail_additional);
$("#PreGENotes").val(data.notes);
}
}
});
}
/* ----- General Exam end -----*/

/* -----Systemic Exam start -----*/
/* -----Cardiovascular System start -----*/

/* -----Cardiovascular System start -----*/
function dis_cardio(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/cardio',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#cardioPulRate").val(data.pulse_rate);

$("#cardioPulRhy").val(data.pulse_rhythm);
$("#cardioPulVol").val(data.pulse_volume);
$("#cardioHrtAI").val(data.heart_impulse);

$("#cardioHrtRate").val(data.heart_rate);
$("#cardioHrtRhy").val(data.heart_rhythm);
$("#cardioHrtS").val(data.heart_s1s2);
$("#cardioHrtMur").val(data.heart_murmur);
$("#cardioPPNor").val(data.peripheral_rate);
$("#cardioPPAb").val(data.peripheral_rhythm);
$("#cardioBPSys").val(data.bp_systolic);
$("#cardioBPDis").val(data.bp_distolic);
$("#cardioHrtAdd").val(data.heart_add_sounds);
$("#cardioNotes").val(data.notes);

}

}
});
}
/* -----Cardiovascular System end -----*/
/* -----Respiratory System start -----*/

function dis_resp(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/resp',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#respChstRate").val(data.chest_resp_rate);
$("#respChstShape").val(data.chest_shape);
$("#respChstSym").val(data.chest_symmetry);
$("#respChstMov").val(data.chest_movements);
$("#respChstTr").val(data.chest_trachea);
$("#respAusBS").val(data.ausculation_breathe_sounds);
$("#respAusAS").val(data.adventitious_sounds);
$("#respAusLA").val(data.abnormality_loc);
$("#respPalCr").val(data.palpation_crepitus);
$("#respPerRes").val(data.percussion_resonance);
$("#respPerAb").val(data.percusion_abnormality);
$("#respNotes").val(data.notes);
}

}
});
}
/* -----Respiratory System end -----*/
/* -----abdomen start -----*/
function dis_abdomen(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/abdomen',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#absExSh").val(data.abd_shape);
$("#absExSym").val(data.abd_symmetry);
$("#absExMov").val(data.abd_movement);
$("#absAusBS").val(data.bowel_sounds);
$("#absExAb").val(data.abd_abnormaility);
$("#absPalRig").val(data.palpations_rigidity);
$("#absAusBr").val(data.bruit);
$("#absPalTen").val(data.palpations_tenderness);
$("#absPalSpl").val(data.palpations_spleen);
$("#absPalLiv").val(data.palpations_liver);
$("#absPalAb").val(data.palpations_abnormality);
$("#absGSIO").val(data.inguinal_orifices);
$("#absGSIC").val(data.inguinal_canal);
$("#absGSFC").val(data.femoral_canal);
$("#absPerRes").val(data.percussion_resonance);
$("#absPerAb").val(data.percusssion_abnormality);
$("#absNotes").val(data.notes);
}
}
});
}
/* -----abdomen end -----*/
/* -----eye start -----*/
function dis_eye(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/eye',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#peCorL").val(data.cornea_left);
$("#peCorR").val(data.cornea_right);
$("#peConL").val(data.conjuctiva_left);
$("#peConR").val(data.conjuctiva_right);
$("#peScL").val(data.sciera_left);
$("#peScR").val(data.sciera_right);
$("#peACL").val(data.anterior_left);
$("#peACR").val(data.anterior_right);
$("#peIPL").val(data.pupil_left);
$("#peIPR").val(data.pupil_right);
$("#peLenL").val(data.lens_left);
$("#peLenR").val(data.lens_right);
$("#faCVL").val(data.colour_vision_left);
$("#faCVR").val(data.colour_vision_right);
$("#faPerL").val(data.perimetry_left);
$("#faPerR").val(data.perimetry_right);
$("#faOPL").val(data.ocular_pressure_left);
$("#faOPR").val(data.ocular_pressure_right);
$("#faDVL").val(data.distant_vision_left);
$("#faDVR").val(data.distant_vision_right);
$("#faNVL").val(data.near_vision_left);
$("#faNVR").val(data.near_vision_right);
$("#faPGL").val(data.glass_power_left);
$("#faPGR").val(data.glass_power_right);
$("#faCLL").val(data.contact_lens_left);
$("#faCLR").val(data.contact_lens_right);
$("#opRetL").val(data.retina_left);
$("#opRetR").val(data.retina_right);
$("#opODL").val(data.optic_disc_left);
$("#opODR").val(data.optic_disc_right);
$("#opBVL").val(data.blood_vessels_left);
$("#opBVR").val(data.blood_vessels_right);
$("#opVitL").val(data.viterous_left);
$("#opVitR").val(data.viterous_right);
$("#eyeNotes").val(data.notes);
}

}
});
}
/* -----eye end -----*/
/* -----ent start -----*/
function dis_ent(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/ent',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#eExL").val(data.external_ear_left);
$("#eExR").val(data.external_ear_right);
$("#eACL").val(data.auditory_canal_left);
$("#eACR").val(data.auditory_canal_right);
$("#eEdL").val(data.eardrum_left);
$("#eEdR").val(data.eardrum_right);
$("#eRTL").val(data.rihnne_left);
$("#eRTR").val(data.rihnne_right);
$("#eWTL").val(data.weber_left);
$("#eWTR").val(data.weber_right);
$("#eCHL").val(data.conv_hearing_left);
$("#eCHR").val(data.conv_hearing_right);
$("#eAuL").val(data.audiometry_left);
$("#eAuR").val(data.audiometry_right);
$("#nsEAL").val(data.nose_external_left);
$("#nsEAR").val(data.nose_external_right);
$("#nsANL").val(data.anterior_nares_left);
$("#nsANR").val(data.anterior_nares_right);
$("#nsSeL").val(data.septum_left);
$("#nsSeR").val(data.septum_right);
$("#nsTbL").val(data.turbinates_left);
$("#nsTbR").val(data.turbinates_right);
$("#nsNML").val(data.nasal_mucosa_left);
$("#nsNMR").val(data.nasal_mucosa_right);
$("#nsNpL").val(data.nasopharynx_left);
$("#nsNpR").val(data.nasopharynx_right);
$("#nsNAL").val(data.nasal_airway_left);
$("#nsNAR").val(data.nasal_airway_right);
$("#thBTL").val(data.base_of_tongue_left);
$("#thBTR").val(data.base_of_tongue_right);
$("#thEpL").val(data.epiglottis_left);
$("#thEpR").val(data.epiglottis_right);
$("#thGFL").val(data.glossoepiglottic_fold_left);
$("#thGFR").val(data.glossoepiglottic_fold_right);
$("#thVaL").val(data.vallecula_left);
$("#thVaR").val(data.vallecula_right);
$("#thFVL").val(data.false_vocal_cord_left);
$("#thFVR").val(data.false_vocal_cord_right);
$("#thTVL").val(data.true_vocal_cord_left);
$("#thTVR").val(data.true_vocal_cord_right);
$("#thPFL").val(data.pyriform_left);
$("#thPFR").val(data.pyriform_right);
$("#entNotes").val(data.notes);
}
}
});
}
/* -----ent end -----*/
/* -----musculo start -----*/
function dis_musculo(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/musculo',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#mssULSh").val(data.ul_shoulder);
$("#mssULEl").val(data.ul_elbow);
$("#mssULWr").val(data.ul_wrist);
$("#mssULDg").val(data.ul_digits);
$("#mssULArm").val(data.ul_arm);
$("#mssULFh").val(data.ul_forehand);
$("#mssULHnd").val(data.ul_hand);
$("#mssLLHp").val(data.ll_hip);
$("#mssLLkn").val(data.ll_knee);
$("#mssLLAn").val(data.ll_ankle);
$("#mssLLDg").val(data.ll_digits);
$("#mssLLTh").val(data.ll_thigh);
$("#mssLLLg").val(data.ll_leg);
$("#mssLLFt").val(data.ll_foot);
$("#mssSpCv").val(data.spine_cervical);
$("#mssSpTc").val(data.spine_thoracic);
$("#mssSpLm").val(data.spine_lumbar);
$("#mssOthTM").val(data.tempero_mandibular);
$("#mssOthCl").val(data.calvicle);
$("#mssOthSt").val(data.sternum);
$("#mssOthRb").val(data.ribs);
$("#mssOthSc").val(data.scapula);
$("#mssNotes").val(data.notes);
}
}
});
}
/* -----musculo end -----*/
/* -----skin start -----*/
function dis_skin(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/skin',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#sknSC").val(data.colour);
$("#sknTem").val(data.temperature);
$("#sknMois").val(data.moisture);
$("#sknMT").val(data.mobility);
$("#sknHr").val(data.hair);
$("#sknNls").val(data.nails);
$("#sknMcs").val(data.mucosa);
$("#sknAb").val(data.abnormality);
$("#msNotes").val(data.notes);
}
}
});
}
/* -----skin end -----*/
/* -----nervous start -----*/
function dis_nervous(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/nervous',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#cnsHFSp").val(data.speech);
$("#cnsHFMem").val(data.memory);
$("#cnsSSTch").val(data.touch);
$("#cnsSSPrs").val(data.pressure);
$("#cnsSSPn").val(data.pain);
$("#cnsSSTh").val(data.thermal);
$("#cnsSSGr").val(data.graphaesthesia);
$("#cnsSSSt").val(data.stereognosis);
$("#cnsSSKin").val(data.kinaesthesia);
$("#cnsMFPos").val(data.posture);
$("#cnsMFGt").val(data.gait);
$("#cnsMFRef").val(data.reflexes);
$("#cnsMFSp").val(data.spine);
$("#cnsMFMT").val(data.muscle_tone);
$("#cnsMFMS").val(data.muscle_strength);
$("#cnsPATP").val(data.thought_process);
$("#cnsPAPer").val(data.perception);
$("#cnsPATC").val(data.thought_content);
$("#cnsCN").val(data.cranial_nerves_cn);
$("#cnsCNAb").val(data.abnormality);
$("#cnsNotes").val(data.notes);
}
}
});
}
/* -----nervous end -----*/
/* -----gynae start -----*/
function dis_gynae(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/gynae',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#geAbsSh").val(data.abdomen_shape);
$("#geAbsUt").val(data.abdomen_uterus);
$("#geAbsAb").val(data.abdomen_abnormality);
$("#gePelVu").val(data.vulva);
$("#gePelVa").val(data.vagina);
$("#gePelCe").val(data.cervix);
$("#gePelUt").val(data.pelvis_uterus);
$("#gePelAd").val(data.adnexa);
$("#gePelOth").val(data.pelvis_others);
$("#gePelAb").val(data.pelvis_abnormality);
$("#geBrsSk").val(data.breast_skin);
$("#geBrsSh").val(data.breast_shape);
$("#geBrsCn").val(data.consistency);
$("#geBrsNp").val(data.nipple);
$("#geBrsAx").val(data.axilla);
$("#geBrsOth").val(data.breast_others);
$("#geBrsAb").val(data.breast_abnormality);
$("#geNotes").val(data.notes);
}
}
});
}
/* -----gynae end -----*/
/* -----Systemic Exam end -----*/

/* ----- investigation start -----*/

function dis_bloodcount(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/bloodcount',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#cbcHbRslt").val(data.hb);
$("#cbcHbNormal").val(data.hb_normal);
$("#cbcPCVRslt").val(data.pcv);
$("#cbcPCVNormal").val(data.pcv_normal);
$("#cbcESRRslt").val(data.esr);
$("#cbcESRNormal").val(data.esr_normal);
$("#cbcTCRslt").val(data.total_count);
$("#cbcTCNormal").val(data.Total_count_normal);
$("#cbcNeuRslt").val(data.neutrophil);
$("#cbcNeuNormal").val(data.neutrophil_normal);
$("#cbcLymRslt").val(data.lymphocyte);
$("#cbcLymNormal").val(data.lymphocyte_normal);
$("#cbcBasRslt").val(data.basophil);
$("#cbcBasNormal").val(data.basophil_normal);
$("#cbcEosRslt").val(data.eosinophil);
$("#cbcEosNormal").val(data.eosinophil_normal);
$("#cbcMonoRslt").val(data.monocytes);
$("#cbcMonoNormal").val(data.monocytes_normal);
$("#cbcPltRslt").val(data.platelets);
$("#cbcPltNormal").val(data.platelets_normal);
$("#cbcRemarks").val(data.remarks);
}
}
});
}

function dis_pulmonary(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/pulmonary',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#pftSummary").val(data.summary);
}
}
});
}

function dis_bloodculture(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/bculture',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#bldcnt").val(data.summary);
}
}
});
}

function dis_audiogram(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/audiogram',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#audSummary").val(data.summary);
}
}
});
}

function dis_peripheral(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/peripheral',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#persm").val(data.summary);
}
}
});
}

function dis_liverfun(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/liverfun',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#lftTBRslt").val(data.total_bilirubin);
$("#lftTBNormal").val(data.total_bilirubin_normal);
$("#lftDBRslt").val(data.direct_bilirubin);
$("#lftDBNormal").val(data.direct_bilirubin_normal);
$("#lftIBRslt").val(data.indirect_bilirubin);
$("#lftIBNormal").val(data.indirect_bilirubin_normal);
$("#lftTPRslt").val(data.total_protien);
$("#lftTPNormal").val(data.total_protien_normal);
$("#lftAlRslt").val(data.albumin);
$("#lftAlNormal").val(data.albumin_normal);
$("#lftGlRslt").val(data.globulin);
$("#lftGlNormal").val(data.globulin_normal);
$("#lftAGRRslt").val(data.ag_ration);
$("#lftAGRNormal").val(data.ag_ratio_normal);
$("#lftALPRslt").val(data.alp);
$("#lftALPNormal").val(data.alp_normal);
$("#lftGGTRslt").val(data.ggt);
$("#lftGGTNormal").val(data.ggt_normal);
$("#lftALTRslt").val(data.alt);
$("#lftALTNormal").val(data.alt_normal);
$("#lftASTRslt").val(data.ast);
$("#lftASTNormal").val(data.ast_normal);
$("#lftLDHRslt").val(data.ldh);
$("#lftLDHNormal").val(data.ldh_normal);
$("#lftRemarks").val(data.remarks);
}
}
});
}

function dis_uculture(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/uculture',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#urcul").val(data.summary);
}
}
});
}

function dis_stoolroutine(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/stoolroutine',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#srSummary").val(data.summary);
}
}
});
}

function dis_serumelect(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/serumelect',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#seNaRslt").val(data.sodium);
$("#seNaNormal").val(data.sodium_normal);
$("#seKRslt").val(data.potassium);
$("#seKNormal").val(data.potassium_normal);
$("#seCaRslt").val(data.calcium);
$("#seCaNormal").val(data.calcium_normal);
$("#sePhRslt").val(data.phosphates);
$("#sePhNormal").val(data.phosphates_normal);
$("#seClRslt").val(data.chloride);
$("#seClNormal").val(data.chloride_normal);
$("#seBcRslt").val(data.bicarbonate);
$("#seBcNormal").val(data.bicarbonate_normal);
$("#seMgRslt").val(data.magnesium);
$("#seMgNormal").val(data.magnesium_normal);
$("#seRemarks").val(data.remarks);
}
}
});
}

function dis_lipid(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/lipid',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#lpTCRslt").val(data.total_cholesterol);
$("#lpTCNormal").val(data.total_cholestrol_range);
$("#lpTgRslt").val(data.triglycerides);
$("#lpTgNormal").val(data.triglycerides_range);
$("#lpLDLRslt").val(data.ldl_cholestrol);
$("#lpLDLNormal").val(data.ldl_cholestrol_range);
$("#lpHDLRslt").val(data.hdl_cholestrol);
$("#lpHDLNormal").val(data.hdl_cholestrol_range);
$("#lpVLDLRslt").val(data.vldl);
$("#lpVLDLNormal").val(data.vldl_range);
$("#lpCHRRslt").val(data.cholestrol_hdl_ratio);
$("#lpCHRNormal").val(data.cholestrol_hdl_ratio_range);
$("#lpRemarks").val(data.remarks);
}
}
});
}

function dis_stoolculture(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/stoolculture',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#scre").val(data.summary);
}
}
});
}

function dis_bloodurea(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/bloodurea',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#buRslt").val(data.blood_urea);
$("#buNormal").val(data.blood_urea_normal);
$("#buRemarks").val(data.remarks);
}
}
});
}

function dis_hiv(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/hiv',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#hivRslt").val(data.hiv);
$("#hivNormal").val(data.hiv_normal);
$("#hivRemarks").val(data.remarks);
}
}
});
}

function dis_ecg(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/ecg',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#ecgSummary").val(data.summary);
}
}
});
}

function dis_bloodsugarfasting(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/bloodsugarfasting',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#bsfRslt").val(data.fasting);
$("#bsfNormal").val(data.fasting_normal);
$("#bsfSummary").val(data.remarks);
}
}
});
}

function dis_HBsAg(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/HBsAg',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#hbaRslt").val(data.hbsag);
$("#hbaNormal").val(data.hbsag_normal);
$("#hbaRemarks").val(data.remarks);
}
}
});
}

function dis_urineroutine(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/urineroutine',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#urSummary").val(data.summary);
}
}
});
}

function dis_serumcreatinine(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/serumcreatinine',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#scRslt").val(data.serum_creatinine);
$("#scNormal").val(data.serum_creatinine_normal);
$("#scRemarks").val(data.remarks);
}
}
});
}

function dis_echocardiogram(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/echocardiogram',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#ecSummary").val(data.summary);
}
}
});
}

function dis_xray(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/xray',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#xrSummary").val(data.summary);
}
}
});
}

function dis_bloodsugarpost(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/bloodsugarpost',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#bsppRslt").val(data.post_prandial);
$("#bsppNormal").val(data.post_prandial_normal);
$("#bsppra").val(data.remarks);
}
}
});
}

function dis_bloodsugarrandom(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/bloodsugarrandom',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#bsrRslt").val(data.random);
$("#bsrNormal").val(data.random_normal);
$("#bsrsum").val(data.remarks);
}
}
});
}

function dis_ultrasoundabdomen(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/ultrasoundabdomen',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#uaSummary").val(data.summary);
}
}
});
}

function dis_glucosetolerance(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/glucosetolerance',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#glucot").val(data.summary);
}
}
});
}
/* ----- investigation end -----*/
/* ----- Provisional Report start -----*/
function dis_provisional(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/provisional',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#prvRepFnd").val(data.findings);
$("#prvRepFI").val(data.investigation);
$("#prvRepRec").val(data.recommendations);
}
}
});
}
/* ----- Provisional Report end -----*/

/* ----- referral Report start -----*/

function dis_referral(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/referral',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#Specialities").val(data.specialities);
$("#Name_Doc").val(data.doctor_name);
$("#Address").val(data.hosp_address);
}
}
});
}
/* ----- referral Report end -----*/
/* ----- finalreport start -----*/
function dis_finalreport(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/finalreport',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#finRepFnd").val(data.analysis);
$("#finRepFI").val(data.recommendations);
}
}
});
}
/* ----- finalreport end -----*/
/* ----- Medical Certi start -----*/
function dis_medical(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/medical',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#prvRepRec1").val(data.Medical_Certificate);
$("#prvRepMedi").val(data.signature);
}
}
});
}
/* ----- Medical Certi end -----*/
/* ----- Management start -----*/

function dis_management(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/management',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#MgmtRepFnd").val(data.findings);
$("#MgmtRepFI").val(data.investigation);
$("#MgmtRepRec").val(data.recommendations);
}

}
});
}
/* ----- Management end -----*/

/* -----Chart start -----*/



/* ----- Chart end -----*/

/* ----- fitnesscerti start -----*/
function dis_fitnesscertificate(){
var empid = $('#empId').val();
var gethis = $('#chdate').val();
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/fitnesscertificate',
'data'    : {data: empid,check: gethis},
'success' : function(data){
if (data.response =='true')
{
$("#mcRepFnd").val(data.doctorF);
$("#mcRepFI").val(data.doctorS);
$("#mcRepRec").val(data.doctorT);
$("#mcRepSig").val(data.signature);
}
}
});
}
/* ----- fitnesscerti end -----*/

//DISPLAY FUNCTION ENDING...//


});
//burns//
$(function(){

$.fn.maphilight.defaults = {
fill: true,
fillColor: 'aa174e',
fillOpacity: 0.2,
stroke: false,
strokeColor: 'ff0000',
strokeOpacity: 1,
strokeWidth: 1,
fade: true,
alwaysOn: false,
neverOn: false,
groupBy: false,
wrapClass: true,
shadow: false,
shadowX: 0,
shadowY: 0,
shadowRadius: 6,
shadowColor: '000000',
shadowOpacity: 0.8,
shadowPosition: 'outside',
shadowFrom: false
};

var brnDegVal = false;
var ticks = ['97','98', '99', '100', '101', '102','103','104'];
$('.burnChart').maphilight();



$('#brnDeg').click(function() {
var data = $('#brnDeg').data('maphilight') || {};
data.alwaysOn = !data.alwaysOn;
$('#brnDeg').data('maphilight', data).trigger('alwaysOn.maphilight');

brnDegVal=!brnDegVal;
return false;
});


$('#blhand').click(function() {
var data = $('#blhand').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#blhand').data('maphilight', data).trigger('alwaysOn.maphilight');

BrnLHnBCB.checked=!BrnLHnBCB.checked;
// return false;
});
$('#flhand').click(function() {

var data = $('#flhand').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#flhand').data('maphilight', data).trigger('alwaysOn.maphilight');

BrnLHnFCB.checked=!BrnLHnFCB.checked;
return false;
});
$('#brhand').click(function() {
var data = $('#brhand').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#brhand').data('maphilight', data).trigger('alwaysOn.maphilight');

BrnRHnBCB.checked=!BrnRHnBCB.checked;
return false;
});
$('#frhand').click(function() {
var data = $('#frhand').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#frhand').data('maphilight', data).trigger('alwaysOn.maphilight');

BrnRHnFCB.checked=!BrnRHnFCB.checked;
return false;
});
$('#flforearm').click(function() {
var data = $('#flforearm').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#flforearm').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnLFAFCB.checked=!BrnLFAFCB.checked;
return false;
});
$('#blforearm').click(function() {
var data = $('#blforearm').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#blforearm').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnLFABCB.checked=!BrnLFABCB.checked;
return false;
});
$('#brforearm').click(function() {
var data = $('#brforearm').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#brforearm').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnRFABCB.checked=!BrnRFABCB.checked;
return false;
});
$('#frforearm').click(function() {
var data = $('#frforearm').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#frforearm').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnRFAFCB.checked=!BrnRFAFCB.checked;
return false;
});
$('#blarm').click(function() {
var data = $('#blarm').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#blarm').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnLABCB.checked=!BrnLABCB.checked;
return false;
});
$('#flarm').click(function() {
var data = $('#flarm').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#flarm').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnLAFCB.checked=!BrnLAFCB.checked;
return false;
});
$('#brarm').click(function() {
var data = $('#brarm').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#brarm').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnRABCB.checked=!BrnRABCB.checked;
return false;
});
$('#frarm').click(function() {
var data = $('#frarm').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#frarm').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnRAFCB.checked=!BrnRAFCB.checked;
return false;
});
$('#bbody').click(function() {
//            var tooltipButton = $(this);
//        	tooltipButton.ShowBubblePopup({
//        		selectable: true,
//
//        		position : 'left',
//        		align	 : 'middle',
//
//        		innerHtml: '<label>Comments</label><input type=text id="comments" name="comments">',
//
////        		innerHtmlStyle: {
////        							color:'#FFFFFF',
////        							'text-align':'center'
////        						},
//
//        		themeName: 	'azure',
//        		themePath: 	'/css/jquerybubblepopup-theme'
//
//        	});

var data = $('#bbody').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#bbody').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnBBCB.checked=!BrnBBCB.checked;
return false;
});
$('#fbody').click(function() {
var data = $('#fbody').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#fbody').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnBFCB.checked=!BrnBFCB.checked;
return false;
});

$('#bNeck').click(function() {
var data = $('#bNeck').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#bNeck').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnNBCB.checked=!BrnNBCB.checked;
return false;
});
$('#fNeck').click(function() {
var data = $('#fNeck').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#fNeck').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnNFCB.checked=!BrnNFCB.checked;
return false;
});

$('#bHead').click(function() {
var data = $('#bHead').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#bHead').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnHBCB.checked=!BrnHBCB.checked;
return false;
});
$('#fHead').click(function() {
var data = $('#fHead').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#fHead').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnHFCB.checked=!BrnHFCB.checked;
return false;
});
$('#fgen').click(function() {
var data = $('#fgen').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#fgen').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnGCB.checked=!BrnGCB.checked;
return false;
});
$('#fruleg').click(function() {
var data = $('#fruleg').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#fruleg').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnRULFCB.checked=!BrnRULFCB.checked;
return false;
});
$('#fluleg').click(function() {
var data = $('#fluleg').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#fluleg').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnLULFCB.checked=!BrnLULFCB.checked;
return false;
});
$('#frlleg').click(function() {
var data = $('#frlleg').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#frlleg').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnRLLFCB.checked=!BrnRLLFCB.checked;
return false;
});
$('#fllleg').click(function() {
var data = $('#fllleg').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#fllleg').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnLLLFCB.checked=!BrnLLLFCB.checked;
return false;
});
$('#frfoot').click(function() {
var data = $('#frfoot').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#frfoot').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnRFtFCB.checked=!BrnRFtFCB.checked;
return false;
});
$('#flfoot').click(function() {
var data = $('#flfoot').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#flfoot').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnLFtFCB.checked=!BrnLFtFCB.checked;
return false;
});
$('#brfoot').click(function() {
var data = $('#brfoot').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#brfoot').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnRFtBCB.checked=!BrnRFtBCB.checked;
return false;
});
$('#blfoot').click(function() {
var data = $('#blfoot').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#blfoot').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnLFtBCB.checked=!BrnLFtBCB.checked;
return false;
});
$('#brlleg').click(function() {
var data = $('#brlleg').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#brlleg').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnRLLBCB.checked=!BrnRLLBCB.checked;
return false;
});
$('#bllleg').click(function() {
var data = $('#bllleg').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#bllleg').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnLLLBCB.checked=!BrnLLLBCB.checked;
return false;
});
$('#brbutt').click(function() {
var data = $('#brbutt').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#brbutt').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnRBCB.checked=!BrnRBCB.checked;
return false;
});
$('#blbutt').click(function() {
var data = $('#blbutt').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#blbutt').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnLBCB.checked=!BrnLBCB.checked;
return false;
});
$('#bruleg').click(function() {
var data = $('#bruleg').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#bruleg').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnRULBCB.checked=!BrnRULBCB.checked;
return false;
});
$('#bluleg').click(function() {
var data = $('#bluleg').data('maphilight') || {};
if (brnDegVal==true)
{
data.fillColor = 'ff0000';
data.fillOpacity = .8;
}
else
{
data.fillColor = 'aa174e';
data.fillOpacity = .2;
}
data.alwaysOn = !data.alwaysOn;
$('#bluleg').data('maphilight', data).trigger('alwaysOn.maphilight');
BrnLULBCB.checked=!BrnLULBCB.checked;
return false;
});
//****burn end********//


//shedu emp id auto complete start.




// end auto complete empidshed.
//emp id auto complete start.

function split( val )
{
return val.split( /,\s*/ );
}
function extractLast( term )
{
return split( term ).pop();
}
$( "#schpid" ).bind( "keydown", function( event ) {
if ( event.keyCode === $.ui.keyCode.TAB &&
$( this ).data( "autocomplete" ).menu.active ) {
event.preventDefault();
}
})
.autocomplete({

source: function( request, response ) {
$.getJSON( "http://greenocean.in/rest-tst/index.php/api/example/getpatid",{
term: extractLast( request.term )
},response );
},

search: function() {

var term = extractLast( this.value );
if ( term.length < 2 ) {

return true;

}

},

response: function(event, ui) {

if (!ui.content.length) {
var pna = "Patient Id Not Available";
updated(pna);
$("#newpat").show();
$("#getdetails").hide();
}
},
focus: function() {

return false;
},
select: function( event, ui ) {
var terms = split( this.value );

terms.pop();

terms.push( ui.item.value );

this.value = terms.join( "," );

var data=this.value;

$("#getdetails").show();
$("#newpat").hide();

return false;
}

});
$( "#empId" ).bind( "keydown", function( event ) {
if ( event.keyCode === $.ui.keyCode.TAB &&
$( this ).data( "autocomplete" ).menu.active ) {
event.preventDefault();
}
})
.autocomplete({

source: function( request, response ) {
$.getJSON( "http://greenocean.in/rest-tst/index.php/api/example/getpatid",{
term: extractLast( request.term )
},response );
},

search: function() {

var term = extractLast( this.value );
if ( term.length < 2 ) {

return true;

}

},

response: function(event, ui) {

if (!ui.content.length) {
//var pna = "Patient Id Not Available";
//updated(pna);
//$("#newpat").show();
// $("#getdetails").hide();
}
},
focus: function() {

return false;
},
select: function( event, ui ) {
var terms = split( this.value );

terms.pop();

terms.push( ui.item.value );

this.value = terms.join( "," );

var data=this.value;

//  $("#getdetails").show();
//   $("#newpat").hide();

return false;
}

});

// end auto complete empid.

$("#soc").keyup(function() {
var soctxt = $("#soc").val();
if (soctxt=="") {
$("#industry").val("");
$("#industry_jc").hide();
$("#industry").show();
$('#industry_jc').html(''); $('#job_nature').html('');$('#task_jc').html('');$('#hazards_jc').html('');$('#disease_jc').html('');
}
else{$("#industry_jc").show();
$("#industry").hide();
}
});

$("#industry").click(function () {
$("#industry_jc").hide();
});


//Industry auto complete start.


$( "#soc" ).bind( "keydown", function( event ) {

if ( event.keyCode === $.ui.keyCode.TAB &&
$( this ).data( "autocomplete" ).menu.active ) {
event.preventDefault();
}
})
.autocomplete({

source: function( request, response ) {
$.getJSON( "http://greenocean.in/rest-tst/index.php/api/example/jobcat",{
term: extractLast( request.term )
},response );
},
search: function() {

var term = extractLast( this.value );
if ( term.length < 1 ) {
return false;
}
},
focus: function() {

return false;
},
select: function( event, ui ) {
var terms = split( this.value );

terms.pop();

terms.push( ui.item.value );

this.value = terms.join( "," );

var data=this.value;

// alert(data);
//  alert("data val"+data);

$.ajax({
'dataType': 'json',
'type'    : 'POST',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/jobcat1',
'data'    : {data: data},
'success' : function(data){

var source = $.parseJSON(data.industry);
var indarry = new Array();
indarry = source;

$('#industry_jc').html(''); $('#job_nature').html('');$('#task_jc').html('');$('#hazards_jc').html('');$('#disease_jc').html('');
$('#industry_jc').append( $( '<option value="null">-Select From List-</option>' ) );
for( var i = 0; i < indarry.length; i++ )
{
$('#industry_jc').append(  $( '<option value="' + indarry[i]+ '">' + indarry[i]+ '</option>' ) );
}
$("#industry_jc").change(function(){
var  indselected = $("#industry_jc option:selected").text();
// alert(indselected);

$.ajax({
'dataType': 'json',
'type'    : 'POST',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/occupation',
'data'    : {data: indselected},
'success' : function(data){

var source = $.parseJSON(data.occupation);
var tstarry = new Array();
tstarry = source;

$('#job_nature').html('');$('#task_jc').html('');$('#hazards_jc').html('');$('#disease_jc').html('');
$('#job_nature').append( $( '<option value="null">-Select From List-</option>' ) );
for( var i = 0; i < tstarry.length; i++ )
{
$('#job_nature').append(  $( '<option value="' + tstarry[i]+ '">' + tstarry[i]+ '</option>' ) );
}

$("#job_nature").change(function(){
var occselected = $("#job_nature option:selected").text();
//alert("selected"+occselected);

$.ajax({
'dataType': 'json',
'type'    : 'POST',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/task_jc',
'data'    : {data: occselected},
'success' : function(data){

var source = $.parseJSON(data.task);


var tstarry = new Array();
tstarry = source;
//alert(source);
$('#task_jc').html('');$('#hazards_jc').html('');$('#disease_jc').html('');
$('#task_jc').append( $( '<option value="null">-Select From List-</option>' ) );
for( var i = 0; i < tstarry.length; i++ )
{
$('#task_jc').append(  $( '<option value="' + tstarry[i]+ '">' + tstarry[i]+ '</option>' ) );
}

$("#task_jc").change(function(){
var tskselected = $("#task_jc option:selected").text();

//alert("selected"+occselected);

$.ajax({
'dataType': 'json',
'type'    : 'POST',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/hazards_jc',
'data'    : {data: tskselected},
'success' : function(data){

var source = $.parseJSON(data.hazards);
var hasarry = new Array();
hasarry = source;

$('#hazards_jc').html('');$('#disease_jc').html('');
$('#hazards_jc').append( $( '<option value="null">-Select From List-</option>' ) );
for( var i = 0; i < hasarry.length; i++ )
{
$('#hazards_jc').append(  $( '<option value="' + hasarry[i]+ '">' + hasarry[i]+ '</option>' ) );
}

$("#hazards_jc").change(function(){
var hazselected = $("#hazards_jc option:selected").text();


$.ajax({
'dataType': 'json',
'type'    : 'POST',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/disease_jc',
'data'    : {data: hazselected},
'success' : function(data){

var source = $.parseJSON(data.disease);
var desarry = new Array();
desarry = source;

$('#disease_jc').html('');
$('#disease_jc').append( $( '<option value="null">-Select From List-</option>' ) );
for( var i = 0; i < desarry.length; i++ )
{
$('#disease_jc').append(  $( '<option value="' + desarry[i]+ '">' + desarry[i]+ '</option>' ) );
}



},
'error'	  :function(){
		var nores ="No Response...";
updated(nores);
}

});

});



},
'error'	  :function(){
		var nores ="No Response...";
updated(nores);
}

});

});


},
'error'	  :function(){
		var nores ="No Response...";
updated(nores);
}

});

});

},
'error'	  :function(){
		var nores ="No Response...";
updated(nores);
}
});


});
},
'error'	  :function(){
		var nores ="No Response...";
updated(nores);
}

});


return false;
}

});

// end auto complete Industry.


//Industry auto complete start.


$( "#industry" ).bind( "keydown", function( event ) {
if ( event.keyCode === $.ui.keyCode.TAB &&
$( this ).data( "autocomplete" ).menu.active ) {
event.preventDefault();
}
})
.autocomplete({

source: function( request, response ) {
$.getJSON( "http://greenocean.in/rest-tst/index.php/api/example/industry",{
term: extractLast( request.term )
},response );
},
search: function() {

var term = extractLast( this.value );
if ( term.length < 1 ) {
return false;
}
},
focus: function() {

return false;
},
select: function( event, ui ) {
var terms = split( this.value );

terms.pop();

terms.push( ui.item.value );

this.value = terms.join( "," );
var data=this.value;



// alert(data);



$.ajax({
'dataType': 'json',
'type'    : 'POST',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/occupation',
'data'    : {data: data},
'success' : function(data){

var source = $.parseJSON(data.occupation);
var tstarry = new Array();
tstarry = source;

$('#job_nature').html('');
$('#job_nature').append( $( '<option value="null">-Select From List-</option>' ) );
for( var i = 0; i < tstarry.length; i++ )
{
$('#job_nature').append(  $( '<option value="' + tstarry[i]+ '">' + tstarry[i]+ '</option>' ) );
}

$("#job_nature").change(function(){
var occselected = $("#job_nature option:selected").text();
//alert("selected"+occselected);
$.ajax({
'dataType': 'json',
'type'    : 'GET',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/codes',
'data'    : {data: occselected},
'success' : function(data){
if (data.response =='true')
{
$("#soc").val(data.code);

}
}
});
$.ajax({
'dataType': 'json',
'type'    : 'POST',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/task_jc',
'data'    : {data: occselected},
'success' : function(data){

var source = $.parseJSON(data.task);
var tstarry = new Array();
tstarry = source;
//alert(source);
$('#task_jc').html('');
$('#task_jc').append( $( '<option value="null">-Select From List-</option>' ) );
for( var i = 0; i < tstarry.length; i++ )
{
$('#task_jc').append(  $( '<option value="' + tstarry[i]+ '">' + tstarry[i]+ '</option>' ) );
}

$("#task_jc").change(function(){
var tskselected = $("#task_jc option:selected").text();
//alert("selected"+occselected);

$.ajax({
'dataType': 'json',
'type'    : 'POST',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/hazards_jc',
'data'    : {data: tskselected},
'success' : function(data){

var source = $.parseJSON(data.hazards);
var hasarry = new Array();
hasarry = source;

$('#hazards_jc').html('');
$('#hazards_jc').append( $( '<option value="null">-Select From List-</option>' ) );
for( var i = 0; i < hasarry.length; i++ )
{
$('#hazards_jc').append(  $( '<option value="' + hasarry[i]+ '">' + hasarry[i]+ '</option>' ) );
}

$("#hazards_jc").change(function(){
var hazselected = $("#hazards_jc option:selected").text();


$.ajax({
'dataType': 'json',
'type'    : 'POST',
'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/disease_jc',
'data'    : {data: hazselected},
'success' : function(data){

var source = $.parseJSON(data.disease);
var desarry = new Array();
desarry = source;

$('#disease_jc').html('');
$('#disease_jc').append( $( '<option value="null">-Select From List-</option>' ) );
for( var i = 0; i < desarry.length; i++ )
{
$('#disease_jc').append(  $( '<option value="' + desarry[i]+ '">' + desarry[i]+ '</option>' ) );
}



},
'error'	  :function(){
		var nores ="No Response...";
updated(nores);
}

});

});



},
'error'	  :function(){
		var nores ="No Response...";
updated(nores);
}

});

});


},
'error'	  :function(){
		var nores ="No Response...";
updated(nores);
}

});

});

},
'error'	  :function(){
		var nores ="No Response...";
updated(nores);
}
});

return false;
}

});

// end auto complete Industry.


//*****************auto complete*********//

function split( val )
{
  	return val.split( /,\s*/ );
}
function extractLast( term )
{
  	return split( term ).pop();
}


 	//**************prescription auto complete start*********//
 	var  m=1;
 	var n=1;
$( "#disease1" ).bind( "keydown", function( event ) {
        var id = $(this).attr('id');
        if ( event.keyCode === $.ui.keyCode.TAB &&
        $( this ).data( "autocomplete" ).menu.active ) {
        event.preventDefault();
        }
})
.autocomplete({
        source: function( request, response ) {
                $.getJSON( "http://greenocean.in/rest-tst/index.php/api/example/getdisease",{
                term: extractLast( request.term )
                },response );
        },
        search: function() {
                var term = extractLast( this.value );
                if ( term.length < 1 ) {
                return false;
                }
        },
        focus: function() {
                return false;
        },
        select: function( event, ui ) {
                var terms = split( this.value );
                terms.pop();
                terms.push( ui.item.value );
                this.value = terms.join( "," );
                var data=this.value;


                return false;
        }
});


$( "#pdrug1" ).click(function () {
        var disease11 = $( "#disease1" ).val();
        if(disease11=="")
        {
                $( "#pdrug1" ).bind( "keydown", function( event ) {
                        var id = $(this).attr('id');
                        if ( event.keyCode === $.ui.keyCode.TAB &&
                        $( this ).data( "autocomplete" ).menu.active ) {
                        event.preventDefault();
                        }
                })
                .autocomplete({
                        source: function( request, response ) {
                                $.getJSON( "http://greenocean.in/rest-tst/index.php/api/example/selectDrg",{
                                term: extractLast( request.term )
                                },response );
                        },
                        search: function() {
                                var term = extractLast( this.value );
                                if ( term.length < 1 ) {
                                return false;
                                }
                        },
                        focus: function() {
                                return false;
                        },
                        select: function( event, ui ) {
                                var terms = split( this.value );
                                terms.pop();
                                terms.push( ui.item.value );
                                this.value = terms.join( "," );
                                var data=this.value;

                                //alert(data);
                                $.ajax({
                                        dataType: 'json',
                                        type    : 'POST',
                                        url: 'http://greenocean.in/rest-tst/index.php/api/example/find_brand',
                                        data    : {data:data},
                                        success: function (data) {
                                                var source = $.parseJSON(data.brand);
                                                var srcNew = "" + source + "";
                                                var myArray = srcNew.split(',');
                                                var pdrug11 = $( "#pdrug1" ).val();
                                                if(pdrug11!="")
                                                {
                                                        $("#brand1").autocomplete({
                                                        source:myArray
                                                        });
                                                }
                                        },
                                });
                                return false;
                        }
                });
        }
        else if(disease11!="")
        {
                        var disease11 = $( "#disease1" ).val();
                        $.ajax({
                        dataType: 'json',
                        type    : 'POST',
                        url: 'http://greenocean.in/rest-tst/index.php/api/example/find_drug',
                        data    : {data:disease11},
                        success: function (data) {
                                var source = $.parseJSON(data.generic);

                                var srcNew = "" + source + "";
                                var myArray = srcNew.split(',');

                                var avaidis = "";

                                if(source.length)
                                {
                                //	alert(source.length);
                                //	alert(source.length);
                                        $("#pdrug1").autocomplete({
                                        source:myArray
                                        });
                                }


                        }

                });



        }

});





$( "#brand1" ).click(function () {
var pdrug11 = $( "#pdrug1" ).val();
if(pdrug11=="")
{
        $( "#brand1" ).bind( "keydown", function( event ) {
                var id = $(this).attr('id');
                if ( event.keyCode === $.ui.keyCode.TAB &&
                $( this ).data( "autocomplete" ).menu.active ) {
                event.preventDefault();
                }
        })
        .autocomplete({
                source: function( request, response ) {
                        $.getJSON( "http://greenocean.in/rest-tst/index.php/api/example/selectBrnd",{
                        term: extractLast( request.term )
                        },response );
                },
                search: function() {
                        var term = extractLast( this.value );
                        if ( term.length < 1 ) {
                        return false;
                        }
                },
                focus: function() {
                        return false;
                },
                select: function( event, ui ) {
                        var terms = split( this.value );
                        terms.pop();
                        terms.push( ui.item.value );
                        this.value = terms.join( "," );
                        var data=this.value;
                        var brand = data;
                        $.ajax({
                                'dataType': 'json',
                                'type'    : 'POST',
                                'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/current1',
                                'data'    : {data:brand},
                                'success' : function(data){
                                        if (data.response =='true')
                                        {
                                                $("#route1").val(data.route);
                                                $("#dosage1").val(data.dosage);
                                                $("#pdrug1").val(data.drug_name);
                                        }
                                }
                        });
                        return false;
                }
        });
}
else {

        var pddrug = $('#pdrug1').val();
        $.ajax({
                dataType: 'json',
                type    : 'POST',
                url: 'http://greenocean.in/rest-tst/index.php/api/example/find_brand',
                data    : {data:pddrug},
                success: function (data) {
                        var source = $.parseJSON(data.brand);
                        var srcNew = "" + source + "";
                        var myArray = srcNew.split(',');
                        var pdrug11 = $('#pdrug1').val();

                        if(source.length)
                        {
                                $('#brand1').autocomplete({
                                        source:myArray,
                                        search: function() {
                                                var term = extractLast( this.value );
                                                if ( term.length < 1 ) {
                                                return false;
                                                }
                                        },
                                        focus: function() {
                                                return false;
                                        },
                                        select: function( event, ui ) {
                                                var terms = split( this.value );
                                                terms.pop();
                                                terms.push( ui.item.value );
                                                this.value = terms.join( "," );
                                                var data=this.value;
                                                var brand = data;
                                                $.ajax({
                                                        'dataType': 'json',
                                                        'type'    : 'POST',
                                                        'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/current1',
                                                        'data'    : {data:brand},
                                                        'success' : function(data){
                                                                if (data.response =='true')
                                                                {
                                                                        $("#route1").val(data.route);
                                                                        $("#dosage1").val(data.dosage);
                                                                }
                                                        }
                                                });
                                                return false;
                                        }
                                });
                        }
                        else
                        {
                                $( "#brand1" ).bind( "keydown", function( event ) {
                var id = $(this).attr('id');
                if ( event.keyCode === $.ui.keyCode.TAB &&
                $( this ).data( "autocomplete" ).menu.active ) {
                event.preventDefault();
                }
        })
        .autocomplete({
                source: function( request, response ) {
                        $.getJSON( "http://greenocean.in/rest-tst/index.php/api/example/selectBrnd",{
                        term: extractLast( request.term )
                        },response );
                },
                search: function() {
                        var term = extractLast( this.value );
                        if ( term.length < 1 ) {
                        return false;
                        }
                },
                focus: function() {
                        return false;
                },
                select: function( event, ui ) {
                        var terms = split( this.value );
                        terms.pop();
                        terms.push( ui.item.value );
                        this.value = terms.join( "," );
                        var data=this.value;
                        var brand = data;
                        $.ajax({
                                'dataType': 'json',
                                'type'    : 'POST',
                                'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/current1',
                                'data'    : {data:brand},
                                'success' : function(data){
                                        if (data.response =='true')
                                        {
                                                $("#route1").val(data.route);
                                                $("#dosage1").val(data.dosage);

                                        }
                                }
                        });
                        return false;
                }
        });
                 }
                },
        });
}
});

$( "#route1" ).click(function () {
        var brand = $("#brand1").val();
        $.ajax({
                'dataType': 'json',
                'type'    : 'POST',
                'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/current1',
                'data'    : {data:brand},
                'success' : function(data){
                        if (data.response =='true')
                        {
                        $("#route1").val(data.route);
                        }
                }
        });
});

$("#pdrug1").keyup(function () {

	if($("#pdrug1").val()=="")
	{
	$("#brand1").val("");
$("#route1").val("");
$("#dosage1").val("");
$("#morning1").val("");
$("#afternoon1").val("");
$("#evening1").val("");
$("#night1").val("");
$("#duration1").val("");
$("#quantity1").val("");
$("#remarks1").val("");
}
});

$(document).on("click", "#addbut", function()
	{

		$(".curclr").hide();

	m++;
	var disease1=$('#disease1').val();

	n++;

	$("#pdrug"+m).keyup(function () {

		if($("#pdrug"+m).val()=="")
	{
	$("#brand"+m).val("");
$("#route"+m).val("");
$("#dosage"+m).val("");
$("#morning"+m).val("");
$("#afternoon"+m).val("");
$("#evening"+m).val("");
$("#night"+m).val("");
$("#duration"+m).val("");
$("#quantity"+m).val("");
$("#remarks"+m).val("");
}
});

$( '#pdrug'+m).click(function () {

	var disease11 = $( "#disease1" ).val();


if(disease11=="")
{

            $( '#pdrug'+m ).bind( "keydown", function( event ) {
       var id = $(this).attr('id');


                if ( event.keyCode === $.ui.keyCode.TAB &&
                        $( this ).data( "autocomplete" ).menu.active ) {
                    event.preventDefault();
                }
            })
            .autocomplete({
                source: function( request, response ) {
                    $.getJSON( "http://greenocean.in/rest-tst/index.php/api/example/selectDrg",{
                        term: extractLast( request.term )

                       //alert(term);

                    },response );
                },
                search: function() {
                    var term = extractLast( this.value );

                    if ( term.length < 1 ) {

                        return false;
                    }
                },
                focus: function() {
                    return false;
                },
                select: function( event, ui ) {
                    var terms = split( this.value );
                    terms.pop();
                    terms.push( ui.item.value );

                    this.value = terms.join( "," );

                    var data=this.value;


     $.ajax({
		dataType: 'json',
		type    : 'POST',
		url: 'http://greenocean.in/rest-tst/index.php/api/example/find_brand',
		data    : {data:data},
		success: function (data) {
		var source = $.parseJSON(data.brand);
		var srcNew = "" + source + "";

    var myArray = srcNew.split(',');
var pdrug11 = $( '#pdrug'+m ).val();
if(pdrug11!="")
{

    $('#brand'+m).autocomplete({
    source:myArray,
        search: function() {
                    var term = extractLast( this.value );

                    if ( term.length < 1 ) {

                        return false;
                    }
                },
                focus: function() {
                    return false;
                },
                select: function( event, ui ) {
                    var terms = split( this.value );
                    terms.pop();
                    terms.push( ui.item.value );

                    this.value = terms.join( "," );

                    var data=this.value;
                  var brand = data;


	$.ajax({
	'dataType': 'json',
	'type'    : 'POST',
	'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/current1',
	'data'    : {data:brand},
	'success' : function(data){

		if (data.response =='true')
		{

		   $('#route'+m).val(data.route);
			$('#dosage'+m).val(data.dosage);
			if ($('#pdrug'+m).val()==data.drug_name)
	      $('#pdrug'+m).val(data.drug_name);



		}
	}
	});


              return false;
                }
            });



}



		},
	});

              return false;
                }
            });

}
else {
	var disease11 = $( "#disease1" ).val();
      $.ajax({
		dataType: 'json',
		type    : 'POST',
		url: 'http://greenocean.in/rest-tst/index.php/api/example/find_drug',
		data    : {data:disease11},
		success: function (data) {
		var source = $.parseJSON(data.generic);
		var srcNew = "" + source + "";

    var myArray = srcNew.split(',');
var disease11 = $( "#disease1" ).val();
if(disease11!="")
{

    $('#pdrug'+m).autocomplete({
    source:myArray,
            search: function() {
                    var term = extractLast( this.value );

                    if ( term.length < 1 ) {

                        return false;
                    }
                },
                focus: function() {
                    return false;
                },
                select: function( event, ui ) {
                    var terms = split( this.value );
                    terms.pop();
                    terms.push( ui.item.value );

                    this.value = terms.join( "," );

                    var data=this.value;
                  var brand = data;


	$.ajax({
	'dataType': 'json',
	'type'    : 'POST',
	'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/current1',
	'data'    : {data:brand},
	'success' : function(data){
	//alert(data);
		if (data.response =='true')
		{

		   $('#route'+m).val(data.route);
			$('#dosage'+m).val(data.dosage);
			if ($('#pdrug'+m).val()==data.drug_name)
	      $('#pdrug'+m).val(data.drug_name);



		}
	}
	});


              return false;
                }
            });
}


		},
	});
}
});




var pddrug = $('#pdrug'+m).val();

     $.ajax({
		dataType: 'json',
		type    : 'POST',
		url: 'http://greenocean.in/rest-tst/index.php/api/example/find_brand',
		data    : {data:pddrug},
		success: function (data) {
		var source = $.parseJSON(data.brand);
		var srcNew = "" + source + "";

    var myArray = srcNew.split(',');
var pdrug11 = $('#pdrug'+m).val();
if(pdrug11!="")
{

    $('#brand'+m).autocomplete({
    source:myArray
});


}



		},
	});







$( '#route'+n ).click(function () {

	var brand = $('#brand'+n).val();
	$.ajax({
		'dataType': 'json',
		'type'    : 'POST',
		'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/current1',
		'data'    : {data:brand},
		'success' : function(data){

			if (data.response =='true')
			{
				$('#route'+n).val(data.route);
			}
		}
	});
});



$( '#brand'+n ).click(function () {

	var pdrug11 = $( '#pdrug'+m ).val();


if(pdrug11=="")
{


$( '#brand'+m ).bind( "keydown", function( event ) {

       var id = $(this).attr('id');


                if ( event.keyCode === $.ui.keyCode.TAB &&
                        $( this ).data( "autocomplete" ).menu.active ) {
                    event.preventDefault();
                }
            })
            .autocomplete({
                source: function( request, response ) {
                    $.getJSON( "http://greenocean.in/rest-tst/index.php/api/example/selectBrnd",{
                        term: extractLast( request.term )
                       },response );
                },
                search: function() {
                    var term = extractLast( this.value );

                    if ( term.length < 1 ) {

                        return false;
                    }
                },
                focus: function() {
                    return false;
                },
                select: function( event, ui ) {
                    var terms = split( this.value );
                    terms.pop();
                    terms.push( ui.item.value );

                    this.value = terms.join( "," );

                    var data=this.value;
                  var brand = data;


	$.ajax({
	'dataType': 'json',
	'type'    : 'POST',
	'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/current1',
	'data'    : {data:brand},
	'success' : function(data){

		if (data.response =='true')
		{

		   $('#route'+m).val(data.route);
			$('#dosage'+m).val(data.dosage);

	      $('#pdrug'+m).val(data.drug_name);



		}
	}
	});


              return false;
                }
            });

}
else {
	var pddrug = $('#pdrug'+m).val();

     $.ajax({
		dataType: 'json',
		type    : 'POST',
		url: 'http://greenocean.in/rest-tst/index.php/api/example/find_brand',
		data    : {data:pddrug},
		success: function (data) {
		var source = $.parseJSON(data.brand);
		var srcNew = "" + source + "";

    var myArray = srcNew.split(',');
var pdrug11 = $('#pdrug'+m).val();
if(pdrug11!="")
{

    $('#brand'+m).autocomplete({
    source:myArray,


                search: function() {
                    var term = extractLast( this.value );

                    if ( term.length < 1 ) {

                        return false;
                    }
                },
                focus: function() {
                    return false;
                },
                select: function( event, ui ) {
                    var terms = split( this.value );
                    terms.pop();
                    terms.push( ui.item.value );

                    this.value = terms.join( "," );

                    var data=this.value;
                  var brand = data;


	$.ajax({
	'dataType': 'json',
	'type'    : 'POST',
	'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/current1',
	'data'    : {data:brand},
	'success' : function(data){

		if (data.response =='true')
		{

		   $('#route'+m).val(data.route);
			$('#dosage'+m).val(data.dosage);
			if ($('#pdrug'+m).val()==data.drug_name)
	      $('#pdrug'+m).val(data.drug_name);



		}
	}
	});


              return false;
                }
            });


}



		},
	});
}

});
  return false;
});







$( "#drugc1" ).bind( "keydown", function( event ) {
                        var id = $(this).attr('id');
                        if ( event.keyCode === $.ui.keyCode.TAB &&
                        $( this ).data( "autocomplete" ).menu.active ) {
                        event.preventDefault();
                        }
                })
                .autocomplete({
                        source: function( request, response ) {
                                $.getJSON( "http://greenocean.in/rest-tst/index.php/api/example/selectDrg",{
                                term: extractLast( request.term )
                                },response );
                        },
                        search: function() {
                                var term = extractLast( this.value );
                                if ( term.length < 1 ) {
                                return false;
                                }
                        },
                        focus: function() {
                                return false;
                        },
                        select: function( event, ui ) {
                                var terms = split( this.value );
                                terms.pop();
                                terms.push( ui.item.value );
                                this.value = terms.join( "," );
                                var data=this.value;

                                //alert(data);
                                $.ajax({
                                        dataType: 'json',
                                        type    : 'POST',
                                        url: 'http://greenocean.in/rest-tst/index.php/api/example/find_brand',
                                        data    : {data:data},
                                        success: function (data) {
                                                var source = $.parseJSON(data.brand);
                                                var srcNew = "" + source + "";
                                                var myArray = srcNew.split(',');
                                                var drugc1 = $( "#drugc1" ).val();
                                                if(drugc1!="")
                                                {
                                                        $("#brandc1").autocomplete({
                                                        source:myArray
                                                        });
                                                }
                                        },
                                });
                                return false;
                        }
                });



$( "#brandc1" ).click(function () {
var drugc1 = $( "#drugc1" ).val();
if(drugc1=="")
{
        $( "#brandc1" ).bind( "keydown", function( event ) {
                var id = $(this).attr('id');
                if ( event.keyCode === $.ui.keyCode.TAB &&
                $( this ).data( "autocomplete" ).menu.active ) {
                event.preventDefault();
                }
        })
        .autocomplete({
                source: function( request, response ) {
                        $.getJSON( "http://greenocean.in/rest-tst/index.php/api/example/selectBrnd",{
                        term: extractLast( request.term )
                        },response );
                },
                search: function() {
                        var term = extractLast( this.value );
                        if ( term.length < 1 ) {
                        return false;
                        }
                },
                focus: function() {
                        return false;
                },
                select: function( event, ui ) {
                        var terms = split( this.value );
                        terms.pop();
                        terms.push( ui.item.value );
                        this.value = terms.join( "," );
                        var data=this.value;
                        var brand = data;
                        $.ajax({
                                'dataType': 'json',
                                'type'    : 'POST',
                                'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/current1',
                                'data'    : {data:brand},
                                'success' : function(data){
                                        if (data.response =='true')
                                        {
                                                $("#routec1").val(data.route);
                                                $("#dosagec1").val(data.dosage);
                                                $("#drugc1").val(data.drug_name);
                                        }
                                }
                        });
                        return false;
                }
        });
}
else {

        var pddrug = $('#drugc1').val();
        $.ajax({
                dataType: 'json',
                type    : 'POST',
                url: 'http://greenocean.in/rest-tst/index.php/api/example/find_brand',
                data    : {data:pddrug},
                success: function (data) {
                        var source = $.parseJSON(data.brand);
                        var srcNew = "" + source + "";
                        var myArray = srcNew.split(',');
                        var drugc1 = $('#drugc1').val();

                        if(source.length)
                        {
                                $('#brandc1').autocomplete({
                                        source:myArray,
                                        search: function() {
                                                var term = extractLast( this.value );
                                                if ( term.length < 1 ) {
                                                return false;
                                                }
                                        },
                                        focus: function() {
                                                return false;
                                        },
                                        select: function( event, ui ) {
                                                var terms = split( this.value );
                                                terms.pop();
                                                terms.push( ui.item.value );
                                                this.value = terms.join( "," );
                                                var data=this.value;
                                                var brand = data;
                                                $.ajax({
                                                        'dataType': 'json',
                                                        'type'    : 'POST',
                                                        'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/current1',
                                                        'data'    : {data:brand},
                                                        'success' : function(data){
                                                                if (data.response =='true')
                                                                {
                                                                        $("#routec1").val(data.route);
                                                                        $("#dosagec1").val(data.dosage);
                                                                }
                                                        }
                                                });
                                                return false;
                                        }
                                });
                        }
                        else
                        {
                                $( "#brandc1" ).bind( "keydown", function( event ) {
                var id = $(this).attr('id');
                if ( event.keyCode === $.ui.keyCode.TAB &&
                $( this ).data( "autocomplete" ).menu.active ) {
                event.preventDefault();
                }
        })
        .autocomplete({
                source: function( request, response ) {
                        $.getJSON( "http://greenocean.in/rest-tst/index.php/api/example/selectBrnd",{
                        term: extractLast( request.term )
                        },response );
                },
                search: function() {
                        var term = extractLast( this.value );
                        if ( term.length < 1 ) {
                        return false;
                        }
                },
                focus: function() {
                        return false;
                },
                select: function( event, ui ) {
                        var terms = split( this.value );
                        terms.pop();
                        terms.push( ui.item.value );
                        this.value = terms.join( "," );
                        var data=this.value;
                        var brand = data;
                        $.ajax({
                                'dataType': 'json',
                                'type'    : 'POST',
                                'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/current1',
                                'data'    : {data:brand},
                                'success' : function(data){
                                        if (data.response =='true')
                                        {
                                                $("#routec1").val(data.route);
                                                $("#dosagec1").val(data.dosage);

                                        }
                                }
                        });
                        return false;
                }
        });
                 }
                },
        });
}
});

$( "#routec1" ).click(function () {
        var brand = $("#brandc1").val();
        $.ajax({
                'dataType': 'json',
                'type'    : 'POST',
                'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/current1',
                'data'    : {data:brand},
                'success' : function(data){
                        if (data.response =='true')
                        {
                        $("#routec1").val(data.route);
                        }
                }
        });
});

$("#drugc1").keyup(function () {

	if($("#drugc1").val()=="")
	{
	$("#brandc1").val("");
$("#routec1").val("");
$("#dosagec1").val("");
$("#morc1").val("");
$("#aftc1").val("");
$("#evec1").val("");
$("#nitec1").val("");
$("#durc1").val("");
$("#remksc1").val("");

}
});






var m=1;
var n=1;
$(document).on("click", "#addmedi1", function()
	{

		$(".curmed").hide();

	m++;


	n++;

	$("#drugc"+m).keyup(function () {

		if($("#pdrug"+m).val()=="")
	{
	$("#brandc"+m).val("");
$("#routec"+m).val("");
$("#dosagec"+m).val("");
$("#morc"+m).val("");
$("#aftc"+m).val("");
$("#evec"+m).val("");
$("#nitec"+m).val("");
$("#durc"+m).val("");
$("#remksc"+m).val("");
}
});

$( '#drugc'+m).click(function () {
       $( '#drugc'+m ).bind( "keydown", function( event ) {
       var id = $(this).attr('id');


                if ( event.keyCode === $.ui.keyCode.TAB &&
                        $( this ).data( "autocomplete" ).menu.active ) {
                    event.preventDefault();
                }
            })
            .autocomplete({
                source: function( request, response ) {
                    $.getJSON( "http://greenocean.in/rest-tst/index.php/api/example/selectDrg",{
                        term: extractLast( request.term )

                       //alert(term);

                    },response );
                },
                search: function() {
                    var term = extractLast( this.value );

                    if ( term.length < 1 ) {

                        return false;
                    }
                },
                focus: function() {
                    return false;
                },
                select: function( event, ui ) {
                    var terms = split( this.value );
                    terms.pop();
                    terms.push( ui.item.value );

                    this.value = terms.join( "," );

                    var data=this.value;


     $.ajax({
		dataType: 'json',
		type    : 'POST',
		url: 'http://greenocean.in/rest-tst/index.php/api/example/find_brand',
		data    : {data:data},
		success: function (data) {
		var source = $.parseJSON(data.brand);
		var srcNew = "" + source + "";

    var myArray = srcNew.split(',');
var pdrug11 = $( '#drugc'+m ).val();
if(pdrug11!="")
{

    $('#brandc'+m).autocomplete({
    source:myArray,
        search: function() {
                    var term = extractLast( this.value );

                    if ( term.length < 1 ) {

                        return false;
                    }
                },
                focus: function() {
                    return false;
                },
                select: function( event, ui ) {
                    var terms = split( this.value );
                    terms.pop();
                    terms.push( ui.item.value );

                    this.value = terms.join( "," );

                    var data=this.value;
                  var brand = data;


	$.ajax({
	'dataType': 'json',
	'type'    : 'POST',
	'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/current1',
	'data'    : {data:brand},
	'success' : function(data){

		if (data.response =='true')
		{

		   $('#routec'+m).val(data.route);
			$('#dosagec'+m).val(data.dosage);
			if ($('#drugc'+m).val()==data.drug_name)
	      $('#drugc'+m).val(data.drug_name);



		}
	}
	});


              return false;
                }
            });



}



		},
	});

              return false;
                }
            });



});




var pddrug = $('#drugc'+m).val();

     $.ajax({
		dataType: 'json',
		type    : 'POST',
		url: 'http://greenocean.in/rest-tst/index.php/api/example/find_brand',
		data    : {data:pddrug},
		success: function (data) {
		var source = $.parseJSON(data.brand);
		var srcNew = "" + source + "";

    var myArray = srcNew.split(',');
var pdrug11 = $('#drugc'+m).val();
if(pdrug11!="")
{

    $('#brandc'+m).autocomplete({
    source:myArray
});


}



		},
	});








$( '#routec'+n ).click(function () {

	var brand = $('#brandc'+n).val();
	$.ajax({
		'dataType': 'json',
		'type'    : 'POST',
		'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/current1',
		'data'    : {data:brand},
		'success' : function(data){

			if (data.response =='true')
			{
				$('#routec'+n).val(data.route);
			}
		}
	});
});



$( '#brandc'+n ).click(function () {

	var pdrug11 = $( '#drugc'+m ).val();


if(pdrug11=="")
{


$( '#brandc'+m ).bind( "keydown", function( event ) {

       var id = $(this).attr('id');


                if ( event.keyCode === $.ui.keyCode.TAB &&
                        $( this ).data( "autocomplete" ).menu.active ) {
                    event.preventDefault();
                }
            })
            .autocomplete({
                source: function( request, response ) {
                    $.getJSON( "http://greenocean.in/rest-tst/index.php/api/example/selectBrnd",{
                        term: extractLast( request.term )
                       },response );
                },
                search: function() {
                    var term = extractLast( this.value );

                    if ( term.length < 1 ) {

                        return false;
                    }
                },
                focus: function() {
                    return false;
                },
                select: function( event, ui ) {
                    var terms = split( this.value );
                    terms.pop();
                    terms.push( ui.item.value );

                    this.value = terms.join( "," );

                    var data=this.value;
                  var brand = data;


	$.ajax({
	'dataType': 'json',
	'type'    : 'POST',
	'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/current1',
	'data'    : {data:brand},
	'success' : function(data){

		if (data.response =='true')
		{

		   $('#routec'+m).val(data.route);
			$('#dosagec'+m).val(data.dosage);

	      $('#drugc'+m).val(data.drug_name);



		}
	}
	});


              return false;
                }
            });

}
else {
	var pddrug = $('#drugc'+m).val();

     $.ajax({
		dataType: 'json',
		type    : 'POST',
		url: 'http://greenocean.in/rest-tst/index.php/api/example/find_brand',
		data    : {data:pddrug},
		success: function (data) {
		var source = $.parseJSON(data.brand);
		var srcNew = "" + source + "";

    var myArray = srcNew.split(',');
var pdrug11 = $('#drugc'+m).val();
if(pdrug11!="")
{

    $('#brandc'+m).autocomplete({
    source:myArray,


                search: function() {
                    var term = extractLast( this.value );

                    if ( term.length < 1 ) {

                        return false;
                    }
                },
                focus: function() {
                    return false;
                },
                select: function( event, ui ) {
                    var terms = split( this.value );
                    terms.pop();
                    terms.push( ui.item.value );

                    this.value = terms.join( "," );

                    var data=this.value;
                  var brand = data;


	$.ajax({
	'dataType': 'json',
	'type'    : 'POST',
	'url'     : 'http://greenocean.in/rest-tst/index.php/api/example/current1',
	'data'    : {data:brand},
	'success' : function(data){

		if (data.response =='true')
		{

		   $('#routec'+m).val(data.route);
			$('#dosagec'+m).val(data.dosage);
			if ($('#drugc'+m).val()==data.drug_name)
	      $('#drugc'+m).val(data.drug_name);



		}
	}
	});


              return false;
                }
            });


}



		},
	});
}

});
  return false;
});





    $( "#condition1" ).bind( "keydown", function( event ) {
       var id = $(this).attr('id');
     // alert(id);

                if ( event.keyCode === $.ui.keyCode.TAB &&
                        $( this ).data( "autocomplete" ).menu.active ) {
                    event.preventDefault();
                }
            })
            .autocomplete({
                source: function( request, response ) {
                    $.getJSON( "http://greenocean.in/rest-tst/index.php/api/example/getcondition",{
                        term: extractLast( request.term )
                       //alert(term)

                    },response );
                },
                search: function() {
                    var term = extractLast( this.value );
                    if ( term.length < 1 ) {

                        return false;
                    }
                },
                focus: function() {
                    return false;
                },
                select: function( event, ui ) {
                    var terms = split( this.value );
                    terms.pop();
                    terms.push( ui.item.value );

                    this.value = terms.join( "," );

                    var data=this.value;
                    //alert(data);
                    $("#condition1").val(this.value);
                       return false;

                }
            });

             $( "#vaccine1" ).bind( "keydown", function( event ) {
       var id = $(this).attr('id');
     // alert(id);

                if ( event.keyCode === $.ui.keyCode.TAB &&
                        $( this ).data( "autocomplete" ).menu.active ) {
                    event.preventDefault();
                }
            })
            .autocomplete({
                source: function( request, response ) {
                    $.getJSON( "http://greenocean.in/rest-tst/index.php/api/example/getvaccine",{
                        term: extractLast( request.term )
                       //alert(term)

                    },response );
                },
                search: function() {
                    var term = extractLast( this.value );
                    if ( term.length < 1 ) {

                        return false;
                    }
                },
                focus: function() {
                    return false;
                },
                select: function( event, ui ) {
                    var terms = split( this.value );
                    terms.pop();
                    terms.push( ui.item.value );

                    this.value = terms.join( "," );

                    var data=this.value;
                    //alert(data);
                    $("#vaccine1").val(this.value);
                       return false;

                }
            });

            $( "#illness1" ).bind( "keydown", function( event ) {
       var id = $(this).attr('id');
     // alert(id);

                if ( event.keyCode === $.ui.keyCode.TAB &&
                        $( this ).data( "autocomplete" ).menu.active ) {
                    event.preventDefault();
                }
            })
            .autocomplete({
                source: function( request, response ) {
                    $.getJSON( "http://greenocean.in/rest-tst/index.php/api/example/getillness",{
                        term: extractLast( request.term )
                       //alert(term)

                    },response );
                },
                search: function() {
                    var term = extractLast( this.value );
                    if ( term.length < 1 ) {

                        return false;
                    }
                },
                focus: function() {
                    return false;
                },
                select: function( event, ui ) {
                    var terms = split( this.value );
                    terms.pop();
                    terms.push( ui.item.value );

                    this.value = terms.join( "," );

                    var data=this.value;
                    //alert(data);
                    $("#illness1").val(this.value);
                       return false;

                }
            });
//**************auto complete end*********//



$('#countdis').click(function(){
displayloadimg();

});

function displayloadimg()
{
//alert("asd");

dataArray= document.getElementById('empId').value;

//alert(dataArray);

$.ajax({
dataType: 'json',
type    : 'POST',
url: 'http://greenocean.in/rest-tst/index.php/api/example/disimagecan',
data    : {data:dataArray},
success: function (data) {
//alert(data.imgname);
var source = $.parseJSON(data.imgname);
$("#disimginj").text(source);
//alert(source);
var injim = $("#disimginj").text();
var a = injim.split(",") // Delimiter is a string
$("#showimage").html('');
var totlen = a.length;

var bydefa = 5;
if(bydefa>=totlen)
{
        for(i=1;i<=totlen;i++)
        {

                 $("#showimage").append('<img onclick="test(this.src)" src="http://greenocean.in/cpclplus/canvas/'+a[i-1]+'" height="90" width="70"/>');
        }
}
else if(bydefa<totlen)
{
        for(i=1;i<=bydefa;i++)
        {
                 $("#showimage").append('<img onclick="test(this.src)" src="http://greenocean.in/cpclplus/canvas/'+a[i-1]+'" height="90" width="70"/>');
        }
}


      $('#more').click(function(){
      //	displayloadimg();
        bydefa += 5;
        var bydefared = bydefa;
        bydefared = bydefared-4;
      //  $("#preview").html("");
        if(bydefa<totlen)
        {
                for(i=bydefared;i<=bydefa;i++)
                {

                         $("#showimage").append('<img onclick="test(this.src)" src="http://greenocean.in/cpclplus/canvas/'+a[i-1]+'" height="90" width="70"/>');
                }
        }
        else
        {
                for(i=bydefared;i<=totlen;i++)
                {

                         $("#showimage").append('<img onclick="test(this.src)" src="http://greenocean.in/cpclplus/canvas/'+a[i-1]+'" height="90" width="70"/>');
                }
        }

});







}

});

$("#showimage").fadeIn();
$("#more").fadeIn();
}

$('#green').click(function(){
var canvas = document.getElementById("newSignature");
var context = canvas.getContext("2d");
context.strokeStyle = "green";
var ctx = canvas.getContext('2d');
ctx.fillStyle    = 'green';
});

$('#blue').click(function(){
var canvas = document.getElementById("newSignature");
var context = canvas.getContext("2d");
context.strokeStyle = "blue";
var ctx = canvas.getContext('2d');
ctx.fillStyle    = 'blue';
});

$('#red').click(function(){
var canvas = document.getElementById("newSignature");
var context = canvas.getContext("2d");
context.strokeStyle = "red";
var ctx = canvas.getContext('2d');
ctx.fillStyle    = 'red';

});
$('#yellow').click(function(){
var canvas = document.getElementById("newSignature");
var context = canvas.getContext("2d");
context.strokeStyle = "yellow";
var ctx = canvas.getContext('2d');
ctx.fillStyle    = 'yellow';


});


$( "#slider-horizontal" ).slider({
orientation: "horizontal",
range: "min",
min: 1,
max: 10,
value: 2,
slide: function( event, ui ) {
$( "#amount" ).text( ui.value );
var uiv = $( "#amount" ).text();
var canvas = document.getElementById("newSignature");
var context = canvas.getContext("2d");

context.lineWidth = uiv;

}

});

$( "#amount" ).val( $( "#slider-horizontal" ).slider( "value" ) );

//canvas text

//var canvas = document.getElementById('newSignature');




$("#addText").live( "click", function() {
var txtval = 0;
if(txtval == 0)
{
$("#cantxt").show();
$("#cantxt").focus();
}
});

$('.boxtxt').click(function(e) {

//var offset = $(this).offset();

var canvas = document.getElementById('newSignature');
	var offsets = canvas.getBoundingClientRect();
                var xval = (e.clientX - offsets.left);
                var yval= (e.clientY - offsets.top);
               // alert(xval+","+yval);

var txtval = 1;
if(txtval == 1)
$("#cantxt").hide();
var getcantext = $("#cantxt").val();
if (canvas.getContext){
var ctx = canvas.getContext('2d');
ctx.font         = 'Italic 30px Sans-Serif';
ctx.textBaseline = 'Top';
ctx.fillText  (getcantext,xval, yval);

$("#cantxt").val("");
}
else  {

var notxt ="Not A Text";
updated(notxt);
}

});



});


