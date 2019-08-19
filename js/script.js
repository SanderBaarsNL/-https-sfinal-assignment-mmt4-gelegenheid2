

var player = videojs('player');//vanilla javascript manier selector
  var playBtn = $('#play');//jquery selector manier
  var rewindBtn = $('#rewind');

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  
  player.on('ready', function() {
    

    playBtn.click( function(){
        event.preventDefault();
        
        if(!player.paused()){
           player.pause(); 
        } else {
             player.play();
        }
    });
     
     
     // rewind btn
     rewindBtn.click( function(){
         event.preventDefault();
         var time = player.currentTime();
         
         player.currentTime(time - 10);
     });
   
     
 });
 
 $("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 3000);


  