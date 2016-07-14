/***********************************************************************/
$(document).ready(function () {
    (function iterate () {
	if (starbucks.length > i) {
	    generateData(i);
            i++;
	}
	setTimeout(iterate, interval);
    })();
    // generateData();
    // window.setInterval(generateData, 5000)
});
/***********************************************************************/

// Jan. 28th, Thursday, 7am-5pm

// starbucks 7am-5pm 15 minute increments (both registers combined)
var starbucks = ["3", "2", "5", "5", "2", "4", "2", "4", "2", "6", "10", "7", "3", "3", "4", "8", "6", "4", "3", "2", "5", "3", "11", "2", "6", "6", "6", "4", "8", "5", "3", "2", "7", "3", "3", "4", "3", "0", "1", "2"];

// einstein's srwc 7am-5pm 15 minute increments (both registers combined)
var einsteins = ["1", "4", "4", "4", "9", "5", "4", "2", "5", "2", "11", "9", "2", "4", "7", "5", "4", "7", "12", "3", "4", "4", "5", "2", "2", "2", "6", "4", "6", "3", "3", "0", "1", "2", "8", "5", "1", "1", "1", "4"];

// einstein's SEB 7am-5pm 15 minute increments (both registers combined)
var einsteins_seb = ["0", "0", "1", "1", "1", "1", "1", "0", "2", "4", "2", "4", "3", "0", "0", "1", "2", "3", "2", "2", "1", "1", "1", "1", "2", "0", "0", "3", "0", "2", "1", "0", "0", "0", "2", "1", "0", "0", "1", "0"];

// coffee bean and tea leaf LLB 7am-5pm 15 minute increments (both registers combined)
var coffeebean = ["0", "0", "2", "5", "3", "1", "3", "2", "2", "3", "4", "3", "3", "2", "3", "1", "5", "2", "3", "3", "2", "2", "3", "1", "2", "3", "0", "1", "1", "3", "1", "2", "3", "2", "0", "1", "3", "2", "1", "5"];

var interval=5000;
var i=0;

function generateData(iter){
    // ll = Math.floor((Math.random() * 10) + 1);
    // seb = Math.floor((Math.random() * 10) + 1);
    // srwc = Math.floor((Math.random() * 10) + 1);
    //   su = Math.floor((Math.random() * 10) + 1);

    ll = Math.floor(coffeebean[iter]);
    seb = Math.floor(einsteins_seb[iter]);
    srwc = Math.floor(einsteins[iter]);
    su = Math.floor(starbucks[iter]);

    //console.log(ll+" "+seb+" "+srwc+" "+su);

    $('#llCur').removeClass();
    $('#sebCur').removeClass();
    $('#srwcCur').removeClass();
    $('#suCur').removeClass();


    $('#llCur').html(ll);
    $('#sebCur').html(seb);
    $('#srwcCur').html(srwc);
    $('#suCur').html(su);

    if(ll<2){
	$('#llCurI').attr("src", "images/happy.png");
    }else if(ll<5){
	$('#llCurI').attr("src", "images/sleepy.png");
    }else if(ll<8){
	$('#llCurI').attr("src", "images/egads.png");
    }else{
	$('#llCurI').attr("src", "images/angry.png");;
    }

    if(seb<2){
	$('#sebCurI').attr("src", "images/happy.png");
    }else if(seb<5){
	$('#sebCurI').attr("src", "images/sleepy.png");
    }else if(seb<8){
	$('#sebCurI').attr("src", "images/egads.png");
    }else{
	$('#sebCurI').attr("src", "images/angry.png");;
    }

    if(srwc<2){
	$('#srwcCurI').attr("src", "images/happy.png");
    }else if(srwc<5){
	$('#srwcCurI').attr("src", "images/sleepy.png");
    }else if(srwc<8){
	$('#srwcCurI').attr("src", "images/egads.png");
    }else{
	$('#srwcCurI').attr("src", "images/angry.png");;
    }

    if(su<2){
	$('#suCurI').attr("src", "images/happy.png");
    }else if(su<5){
	$('#suCurI').attr("src", "images/sleepy.png");
    }else if(su<8){
	$('#suCurI').attr("src", "images/egads.png");
    }else{
	$('#suCurI').attr("src", "images/angry.png");;
    }

    if(ll<1){
	$('#llCur').addClass('empty');
    }else if(ll<5){
	$('#llCur').addClass('light');
    }else if(ll<8){
	$('#llCur').addClass('busy');
    }else{
	$('#llCur').addClass('crazy');
    }

    if(seb<1){
	$('#sebCur').addClass('empty');
    }else if(seb<5){
	$('#sebCur').addClass('light');
    }else if(seb<8){
	$('#sebCur').addClass('busy');
    }else{
	$('#sebCur').addClass('crazy');
    }

    if(srwc<1){
	$('#srwcCur').addClass('empty');
    }else if(srwc<5){
	$('#srwcCur').addClass('light');
    }else if(srwc<8){
	$('#srwcCur').addClass('busy');
    }else{
	$('#srwcCur').addClass('crazy');
    }

    if(su<1){
	$('#suCur').addClass('empty');
    }else if(su<5){
	$('#suCur').addClass('light');
    }else if(su<8){
	$('#suCur').addClass('busy');
    }else{
	$('#suCur').addClass('crazy');
    }

}
/***********************************************************************/
