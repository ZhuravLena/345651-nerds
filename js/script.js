ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.93863106417265,30.3230545],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-marker.png',
            // Размеры метки.
            iconImageSize: [231, 190],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-50, -190]
        });

    myMap.geoObjects.add(myPlacemark);
});

var link = document.querySelector(".btn-write-us");

var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-write-us-close");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-write-us-show");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-write-us-show");
});
