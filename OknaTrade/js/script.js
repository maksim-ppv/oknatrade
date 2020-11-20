
const btn = document.querySelector('.menu-button');
const menu = document.querySelector('.mobile__navbar');
const menuHeaderName = document.querySelector('.menu-header__name');



const modal = ()=>{
   menu.classList.toggle('hide');
   menu.classList.toggle('show');
   btn.classList.toggle('line_active');
}

menuHeaderName.addEventListener('click', modal);
menu.addEventListener('click', event => {
   const target = event.target
   if(!target.closest('.menu-mobile__body')){
      modal();
   }
});
btn.addEventListener('click', modal);
;





function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});