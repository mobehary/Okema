$('.resend_otp').click(function(e){
	e.preventDefault();
	var seconds = 60;
	$('.resend_otp').css('pointer-events', 'none');
	function tick() {
	  var counter = document.getElementById("counter");
	  seconds--;
	  counter.innerHTML =
		"يمكنك إعادة الإرسال بعد " + "00:" + (seconds < 10 ? "0" : "") + String(seconds);
	  if (seconds > 0) {
		setTimeout(tick, 1000);
	  } else {
		$('.resend_otp').css('pointer-events', 'unset');
		document.getElementById("counter").innerHTML = "";
	  }
	}
	tick();
})



var verificationCode = [];
$(".verification-code input[type=text]").keyup(function (e) {
  
  // Get Input for Hidden Field
  $(".verification-code input[type=text]").each(function (i) {
    verificationCode[i] = $(".verification-code input[type=text]")[i].value; 
    $('#verificationCode').val(Number(verificationCode.join('')));
    //console.log( $('#verificationCode').val() );
  });

  //console.log(event.key, event.which);

  if ($(this).val() > 0) {
    if (event.key == 1 || event.key == 2 || event.key == 3 || event.key == 4 || event.key == 5 || event.key == 6 || event.key == 7 || event.key == 8 || event.key == 9 || event.key == 0) {
      $(this).next().focus();
    }
  }else {
    if(event.key == 'Backspace'){
        $(this).prev().focus();
    }
  }

}); // keyup

$('.verification-code input').on("paste",function(event,pastedValue){
  console.log(event)
  $('#txt').val($content)
  console.log($content)
  //console.log(values)
});

$editor.on('paste, keydown', function() {http://jsfiddle.net/5bNx4/#run
var $self = $(this);            
    setTimeout(function(){ 
    var $content = $self.html();             
    $clipboard.val($content);
},100);
});




