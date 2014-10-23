$(document).ready(function() {
	$('.ryu').mouseenter(function() {
	    $('.ryu-still').hide();
		$('.ryu-ready').show();
  }).mouseleave(function() {
   		$('.ryu-ready').hide();
		$('.ryu-still').show();
  }).mousedown(function() {
    playHadouken(); 
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').show();
    $('.hadouken').finish().show().animate(
  {'left': '750px'},
  500,
  function() {
    $(this).hide();
    $(this).css('left', '419px');
  }
);
  })
  .mouseup(function() {
    $('.ryu-throwing').hide();
  $('.ryu-ready').show();

});
  $(".ryu").keydown(function(e){
  	e.preventDefault();
  	e.88;
  })
});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
