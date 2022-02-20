

var sound = new Audio(); 
sound.src = "sounds/clickOn.mp3"; 
 
document.getElementById("menu_btn").addEventListener("click", function(){ 
    sound.play(); 
});

var btn_over = document.getElementById("menu_btn");
btn_over.addEventListener("mouseover", function(){
    btn_over.style.backgroundColor = "#dea11d";
}); 

var video_over = document.getElementById("video_btn");
video_over.addEventListener("mouseover", function(){
    video_over.style.backgroundColor = "#dea11d";
}); 

var dat_over = document.getElementById("datingBtn");
dat_over.addEventListener("mouseover", function(){
    dat_over.style.backgroundColor = "#dea11d";
}); 

var btn_out = document.getElementById("menu_btn");
btn_out.addEventListener("mouseout", function(){
    btn_out.style.backgroundColor = "#26272c";
}); 

var video_out = document.getElementById("video_btn");
video_out.addEventListener("mouseout", function(){
    video_out.style.backgroundColor = "#26272c";
}); 

var dat_out = document.getElementById("datingBtn");
dat_out.addEventListener("mouseout", function(){
    dat_out.style.backgroundColor = "#26272c";
}); 



