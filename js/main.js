$(function() {
	let timer;

	$('.item').on('click',function(){
		$this = $(this);
		$this.toggleClass('removed');
	});

	$('body').on('keyup',function(e){
		$this = $(this);
		clearTimeout(timer);
		timer = setTimeout(function() {
			console.log(e.key);
		}, 500);
	});
});