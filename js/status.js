/***********************************************************************/
$(document).ready(function () {
  generateData();
  window.setInterval(generateData, 5000)
});
/***********************************************************************/
function generateData(){
  ll = Math.floor((Math.random() * 10) + 1);
  seb = Math.floor((Math.random() * 10) + 1);
  srwc = Math.floor((Math.random() * 10) + 1);
  su = Math.floor((Math.random() * 10) + 1);
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
    $('#llCurI').attr("src", "images/sleepy.png");
  }else if(ll<5){
    $('#llCurI').attr("src", "images/happy.png");
  }else if(ll<8){
    $('#llCurI').attr("src", "images/egads.png");
  }else{
    $('#llCurI').attr("src", "images/angry.png");;
  }

  if(seb<2){
    $('#sebCurI').attr("src", "images/sleepy.png");
  }else if(seb<5){
    $('#sebCurI').attr("src", "images/happy.png");
  }else if(seb<8){
    $('#sebCurI').attr("src", "images/egads.png");
  }else{
    $('#sebCurI').attr("src", "images/angry.png");;
  }

  if(srwc<2){
    $('#srwcCurI').attr("src", "images/sleepy.png");
  }else if(srwc<5){
    $('#srwcCurI').attr("src", "images/happy.png");
  }else if(srwc<8){
    $('#srwcCurI').attr("src", "images/egads.png");
  }else{
    $('#srwcCurI').attr("src", "images/angry.png");;
  }

  if(su<2){
    $('#suCurI').attr("src", "images/sleepy.png");
  }else if(su<5){
    $('#suCurI').attr("src", "images/happy.png");
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
