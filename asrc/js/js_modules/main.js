
//====================================================================================================================================

const btnDesignTrack = document.querySelector('.btn-design__track');
const btnDesignCircle = document.querySelector('.btn-design__circle');
const btnDesignStar = document.querySelector('.btn-design__star');
const imgDesign = document.querySelectorAll('.img-design');
const designTitle = document.querySelectorAll('.design-title');
const designContentUls = document.querySelectorAll('.design-column__content-body');

const ChangeNoDesign = () => {
    btnDesignTrack.classList.toggle('design-track_active');
    btnDesignCircle.classList.toggle('design-circle_active');
    btnDesignStar.classList.toggle('design-star_active');
    imgDesign.forEach(item=>{
        item.classList.toggle('show');
        item.classList.toggle('hide');
    })
    designTitle.forEach(item=>{
        item.classList.toggle('show');
        item.classList.toggle('hide');
    })
    designContentUls.forEach(item=>{
        item.classList.toggle('show');
        item.classList.toggle('hide');
    })
}

btnDesignTrack.addEventListener('click', () => {
    ChangeNoDesign()
})


//====================================================================================================================================

// tabs
$(document).ready(function() {
    $(".controls-steps-top__ul").on('click', 'li', function() {
      $(".main-content-steps-top__bg").removeClass("show");
  
      var newImage = $(this).index();
  
      $(".main-content-steps-top__bg").eq(newImage).addClass("show");
  
      $(".controls-steps-top__li").removeClass("controls-steps-top__li_active");
      $(this).addClass("controls-steps-top__li_active");
    });

    $(".controls-price__panel").on('click', '.controls-price__link', function() {
        $(".price-content").removeClass("show_rel");
    
        var newImage = $(this).index();
    
        $(".price-content").eq(newImage).addClass("show_rel");
    
        $(".controls-price__link").removeClass("controls-price__link_active");
        $(this).addClass("controls-price__link_active");
      });
// spoiler 
    $('.spoiler').click(function(event){
        $(this).toggleClass('spoiler_active').next().slideToggle(300);
    });
        $('.spoiler_small').click(function(event){
            if(window.matchMedia('(max-width: 576px)').matches){
            $(this).toggleClass('spoiler_active').next().slideToggle(300);
        }
        });
// accordion
    $('.accordion__item .accordion-spoiler').click(function(event){
        if($('.accordion__items').hasClass('accordion')){
            $('.accordion-spoiler').not($(this)).removeClass('accordion-spoiler_active');
            $('.accordion-spoiler_bottom').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('accordion-spoiler_active').next().slideToggle(300);
    });

  });

 

// selects 

const ItemSelect = document.querySelectorAll('.content-present-item-4__select');

ItemSelect.forEach(item=>{
    const ItemSelectTitle = item.querySelector('.content-present-item-4__select-title');
    const ItemSelectInput = item.querySelector('input');
    const selectItem = item.querySelectorAll('.select-item');
    selectItem.forEach(itemSelect=>{
        itemSelect.addEventListener('click',()=>{
            ItemSelectTitle.textContent = itemSelect.textContent;
            ItemSelectInput.value = itemSelect.textContent;
            $(ItemSelectTitle).toggleClass('spoiler_active').next().slideToggle(300);
        })
    })
});


//====================================================================================================================================

const stepsMiddleInfo1 = document.querySelector('.steps-middle__info-1');
const stepsMiddleInfo2 = document.querySelector('.steps-middle__info-2');

const open = () => {
    stepsMiddleInfo2.classList.add('show');
}
const Close = () => {
    stepsMiddleInfo2.classList.remove('show');
}
stepsMiddleInfo1.addEventListener('mouseout', Close);
stepsMiddleInfo1.addEventListener('mouseover', open);

//====================================================================================================================================

// tabs questions-presents 
const presentItemRightBody = document.querySelectorAll('.present-item-right__body');
const presentItemLeftContent = document.querySelectorAll('.present-item-left__content');
const presentItemLefTLi = document.querySelectorAll('.present-item-left__li');
const presentItemLeftNumber = document.querySelector('.present-item-left__number-question');
const PresentButtonPrev = document.querySelector('.present-item-left_button_prev');
const PresentButtonNext = document.querySelector('.present-item-left_button_next');

let number = 0;
let lock = true;
const MaxNumber = presentItemLeftContent.length
const PresentSliderPrev = (number) => {
    if(number <= 1){
        PresentButtonPrev.classList.remove('show')
    };
    presentItemLefTLi.forEach((item,index)=>{
        if(index == number){
            item.classList.remove('present-item-left__li_active');
        }
    });
};

const PresentSliderNext = (number) => {
    if(number >= 1){
        PresentButtonPrev.classList.add('show')
    };
    presentItemLefTLi.forEach((item,index)=>{
        if(index == number){
            item.classList.add('present-item-left__li_active')
        }
    })
};

const PresentSliderActive = (number) => {

    $(".present-item-left__content").hide();
    $(".present-item-left__content").eq(number).fadeIn(1000);
    $(".present-item-right__body").hide();
    $(".present-item-right__body").eq(number).fadeIn({
        complete: function(){
          $(this).css("display", "flex");
        },
        duration: 1000
      });
    presentItemLeftNumber.textContent = `вопрос ${++number} из 6`
    number--
}

const SlideEnd = () => {
    $(".present-start").hide();
    $(".present-end").fadeIn(1000);
}

PresentButtonPrev.addEventListener('click', ()=>{
    if(lock == true){
    if(MaxNumber == number){
            number--;
        };
        lock = false
        PresentSliderPrev(number);
        number--;
        PresentSliderActive(number);
        setTimeout(()=>{
            lock = true
        }, 1000)
        
    };
});


PresentButtonNext.addEventListener('click', ()=>{
    if(lock == true){
        console.log('lock: ', lock);
    if(MaxNumber > number){
            number++;
            lock = false
            PresentSliderNext(number);
            PresentSliderActive(number);
            setTimeout(()=>{
                lock = true
            }, 1000)
        };
        if(MaxNumber == number){
            SlideEnd();
            return
        }
    };
    });
    
