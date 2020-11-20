window.onload = function() {
    console.log("djnnfr fuck");
    setTimeout(function(){
        let preloader = document.getElementById('cube-loader');
        
        if(!preloader.classList.contains('done')){
            preloader.classList.add('done');
        }
    }, 1000);
};