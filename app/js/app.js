$(document).ready(function (){

	$('.dropdown__btn_js').click(function(){

		if($('.dropdown__list').css('top') == '-250px'){
			$('.dropdown__hand').animate({top: '-15px'}, 400).animate({top: '-350px'}, 400)
			$('.dropdown__list').animate({top: '100px', opacity: '1'}, 400)
			$('.dropdown__helper').show()
		} else {
			$('.dropdown__list').animate({top: '-250px', opacity: '0'}, 400)
			$('.dropdown__helper').hide()
		}

		return false;
	});

	$('.dropdown__helper').click(function(){
		$('.dropdown__list').animate({top: '-250px'}, 400)
		$('.dropdown__helper').hide()
		
		return false;
	});

	$('.header__btn-mobile').click(function(){

		if( !$('.header__menu-list').hasClass('header__menu-list--hidden') ){
			$('.header__menu-list').addClass('header__menu-list--hidden')
		} else {
			$('.header__menu-list').removeClass('header__menu-list--hidden')
		}

		return false;
	});

	$('.pricing__list-btn').click(function(){
		if($(this).parent().hasClass('pricing__list--active')){
			$('.pricing__list--active').removeClass('pricing__list--active')
		} else{
			$('.pricing__list--active').removeClass('pricing__list--active')
			$(this).parent().addClass('pricing__list--active')
		}

		return false;
	});

	$('.show-input_js').click(function(){
		if( !$(this).hasClass('show_js') ){
			$(this).addClass('show_js')
				.attr('src', 'images/icons/eye.svg')
				.css('filter', 'none')
				.prev().attr('type', 'text')
		} else {
			$(this).removeClass('show_js')
				.attr('src', 'images/icons/close-eye.png')
				.css('filter', 'invert(70%)')
				.prev().attr('type', 'password')
		}
	});
});