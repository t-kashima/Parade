var button_kind = 8;
var button_num = 10;  
var button_image = "http://www.google.co.jp/images/srpr/logo3w.png";
var button_image2 = "http://k.yimg.jp/images/top/sp/logo.gif";
var materialDir = "./material";
var currentPath = "/dev/parade";

$(function () {
      var div = $(".main_bottom");    
      for (var i=0;i<button_num;i++) {
	  div.append(makeButton());	
      }

      var resetButton = $("<span />").click(onReset).text("pai");
      div.append(resetButton);
  });

function random_num () {      
    return 1;
    return Math.floor(Math.random()*button_kind);
}

function get_event (num) {
    var event_name_array = new Array(button_kind);
    event_name_array[0] = onPlaySound;
    event_name_array[1] = onPlayMovie;
    event_name_array[2] = onChangeBackground;
    event_name_array[3] = onAddButton;
    event_name_array[4] = onChangeButtonSkin;
    event_name_array[5] = onRebornButton;
    event_name_array[6] = onStopMovie;
    event_name_array[7] = onBlank;
    event_name_array[8] = onHint;
    return event_name_array[num];
}

function makeButton () {
    var button = $("<img />").attr("src",button_image).attr("class","button");
    button.click(get_event(random_num()));
    return button;
}

/* event */ 
function onPlaySound (e) {
    $.sound.play(materialDir+"/sound1.wav");
}

function onPlayMovie (e) {
    var movie = $("<img />").attr("src",materialDir+"/animation.gif");
    $(".main_center").html(movie);
}

function onChangeBackground (e) {
    $("body").css("background", "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")");
}

function onAddButton (e) {
    var div = $(".main_bottom");
    div.append(makeButton());
}

function onChangeButtonSkin (e) {
    if($(e.target).hasClass("button")){
        $(e.target).attr("src",button_image2);
    }
}

function onRebornButton (e) {
    return onAddButton();
}

function onStopMovie (e) {

}

function onReset (e) {
    location.href = currentPath;
}

function onBlank (e){ };

function onHint (e) {
    alert("Hint");
}