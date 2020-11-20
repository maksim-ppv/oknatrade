// ymaps.ready(init);
 
// function init() {

//     var myMap = new ymaps.Map("map", {
//         center: [53.89284669209618,27.493862237434385],
//         zoom: 16,
//         controls: [
//             'zoomControl'
//         ]
//     });


//     var placemark = new ymaps.Placemark(myMap.getCenter(), {
//         balloonContentBody: '<span class="map__baloon">г.Минск, ул. Пономаренко, 35а</span><span class="map__baloon-2">(офис 418)</span>'
//     }, {
//         iconLayout: 'default#image',
//         iconImageHref: './img/footer/metka.png',
//         // Размеры метки.
//         iconImageSize: [50, 76],
//         // Смещение левого верхнего угла иконки относительно
//         // её "ножки" (точки привязки).
//         iconImageOffset: [-25, -76],
//         balloonCloseButton: false,
//         hideIconOnBalloonOpen: false
//     });
//     myMap.geoObjects.add(placemark);
//     placemark.balloon.open();

// };