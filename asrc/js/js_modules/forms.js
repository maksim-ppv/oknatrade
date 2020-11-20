
// var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

const popupFormname = document.querySelectorAll('.popup__form-name');
const popupThanksTitle = document.querySelectorAll('.popup-thanks__title');



//FORMS
function forms(){
	//OPTION
	$.each($('.option_one.active'), function(index, val) {
		$(this).find('input').prop('checked', true);
	});
	$('.option_one').click(function(event) {
		if(!$(this).hasClass('disable')){
				var target = $(event.target);
			if (!target.is("a")){
				if($(this).hasClass('active') && $(this).hasClass('order') ){
					$(this).toggleClass('orderactive');
				}
    				$(this).parents('.options').find('.option_one').removeClass('active');
    				$(this).parents('.options').find('input').prop('checked', false);
					$(this).toggleClass('active');
                    $(this).find('input').prop('checked', true);

			}
		}
    });

    $.each($('.option_all'), function(index, val) {
        if($(this).find('input').prop('checked')==true){
            $(this).addClass('active');
        }
    });
    $('body').off('click','.option_all',function(event){});
    $('body').on('click','.option_all',function(event){
        if(!$(this).hasClass('disable')){
                var target = $(event.target);
            if (!target.is("a")){
                    $(this).toggleClass('active');
                if($(this).hasClass('active')){
                    $(this).find('input').prop('checked', true);
                }else{
                    $(this).find('input').prop('checked', false);
                }
            }
        }
    });
}
forms();


//VALIDATE FORMS
$('form button[type=submit]').click(function(){
	var er=0;
	var form=$(this).parents('form');
	var ms=form.data('ms');
	var nums=form.data('nums');
$.each(form.find('.req'), function(index, val) {
	er+=formValidate($(this));
});
if(er==0){
	removeFormError(form);
	if(ms!=null && ms!=''){
		showMessageByClass(ms, nums);
		return false;
	}
}else{
	return false;
}
});
function formValidate(input){
	var er=0;
	var form=input.parents('form');
	if(input.val()=='' || input.val()==input.attr('data-value')){
		er++;
		addError(input);
	}else{
		removeError(input);
	}
	return er;
}

function showMessageByClass(ms, nums){

    function popupThanks(ms) {

        const popupMassive = [...popupFormname];
        const resultInput = popupMassive.filter(item=> {
            return item.value !== '';
        });
        popupFormname.forEach(item=>{
            const name = `Спасибо!`;
            popupThanksTitle.forEach(item=>{
                item.textContent = name;
            })
        })
        resultInput.forEach(item=>{
            const name = `Спасибо, ${item.value}!`;
            popupThanksTitle.forEach(item=>{
                item.textContent = name;
            })
        })
        popupFormname.forEach(item=>{
            item.value = '';
        })
        const msPopup = document.getElementById(ms);
        popupOpen(msPopup);
        
    };
    if(nums == '4'){
        let th = $(".popup__fors");
        $.ajax({
            type: "POST",
			url: "https://zox.by/wp-content/themes/zox/mail.php",
            data: th.serialize()
        }).done(popupThanks(ms),
        setTimeout(function() {
            th.trigger("reset");
        }, 1000)
        );
    };
    if(nums == '3'){
        let th = $(".popup__forsm");
		$.ajax({
			type: "POST",
			url: "https://zox.by/wp-content/themes/zox/mail.php",
			data: th.serialize()
        }).done(popupThanks(ms),
        setTimeout(function() {
            th.trigger("reset");
        }, 1000)
        );
	};
	if(ms == 'video'){
		popupThanks(ms);
	};
	if(nums == '1'){
        let th = $(".popup__for_mail_1");
		$.ajax({
			type: "POST",
			url: "https://zox.by/wp-content/themes/zox/mail.php",
			data: th.serialize()
        }).done(popupThanks(ms),
        setTimeout(function() {
            th.trigger("reset");
        }, 1000)
        );
	};
	if(nums == '2'){
        let th = $(".popup__for_mail_2");
		$.ajax({
			type: "POST",
			url: "https://zox.by/wp-content/themes/zox/mail.php",
			data: th.serialize()
        }).done(popupThanks(ms),
        setTimeout(function() {
            th.trigger("reset");
        }, 1000)
        );
	};
		

}


function addError(input){
	input.addClass('err');
}
function removeFormError(form){
form.find('.form__generalerror').hide().html('');
}
function removeError(input){
input.removeClass('err');
}

function maskclear(n){
if(n.val()==""){
	n.inputmask('remove');
	if(!n.hasClass('l')){
		n.val(n.attr('data-value'));
	}
	n.removeClass('focus');
	n.parent().removeClass('focus');
}
}

	//RANGE
	const range = document.querySelectorAll('.range');
	const range2 = document.querySelectorAll('.range_2');
	const range3 = document.querySelectorAll('.range_3');
	
	range.forEach(item=>{
		const rangeto = item.querySelector('.rangeto');
		const rangeControl = item.querySelector('.range_control');
		if($(rangeControl).length>0){
			$(rangeControl).slider({
				range: "min",
				min: 0,
				max: 3000,
				value: 500,
				slide: function( event, ui ){
					$(rangeto).val(ui.value);
				}
			});
			$(rangeto).val($(rangeControl).slider( "value"));
	
		}
	});
	range2.forEach(item=>{
		const rangeto = item.querySelector('.rangeto');
		const rangeControl = item.querySelector('.range_control');
		if($(rangeControl).length>0){
			$(rangeControl).slider({
				range: "min",
				min: 0,
				max: 300,
				value: 43,
				slide: function( event, ui ){
					$(rangeto).val(ui.value);
				}
			});
			$(rangeto).val($(rangeControl).slider( "value"));
	
		}
	});
	range3.forEach(item=>{
		const rangeto = item.querySelector('.rangeto');
		const rangeControl = item.querySelector('.range_control');
		if($(rangeControl).length>0){
			$(rangeControl).slider({
				range: "min",
				min: 0,
				max: 25,
				value: 4,
				slide: function( event, ui ){
					$(rangeto).val(ui.value);
				}
			});
			$(rangeto).val($(rangeControl).slider( "value"));
	
		}
	})