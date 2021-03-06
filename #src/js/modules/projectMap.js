export const projectMap = () => {

    const map = document.querySelector('#map');

    const markObject = {
        pm1: {
            name: 'Ловцы сияний',
            coords: [55.755819, 37.617644]
        },
        pm2: {
            name: 'Повелители тьмы',
            coords: [55.757430, 37.025673]
        }
    };

    function markContentHtml(name) {
        return (
            `<div class="mark">
                <div class="mark__body">
                    <div class="mark__body_img">
                        <picture>
                            <source srcset="" type="image/webp">
                            <img src="./img/mark.png" alt="">
                        </picture>
                    </div>
                    <div class="mark__body_descr">
                        <div class="mark__body_descr_name">${name}</div>
                        <ul class="mark__body_descr_info">
                            <li class="mark__body_descr_info_item">Александр Константинопольский</li>
                            <li class="mark__body_descr_info_item">Дата загрузки: 14.09.2021</li>
                            <li class="mark__body_descr_info_item">Размер: 4,56 МП</li>
                            <li class="mark__body_descr_info_item">Разрешение: 800х600</li>
                            <li class="mark__body_descr_info_item">NFT: NF7463728389</li>
                            <li class="mark__body_descr_info_item">Часть от NFT: 0,3483%</li>
                            <li class="mark__body_descr_info_item">Категория: люди</li>
                        </ul>
                        <div class="mark__body_descr_soc">
                            <a href="#" class="mark__body_descr_soc_item button button-func button-aqua">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.00004 1.36035C4.33337 1.36035 1.33337 4.35369 1.33337 8.04035C1.33337 11.3737 3.77337 14.1404 6.96004 14.6404V9.97369H5.26671V8.04035H6.96004V6.56702C6.96004 4.89369 7.95337 3.97369 9.48004 3.97369C10.2067 3.97369 10.9667 4.10035 10.9667 4.10035V5.74702H10.1267C9.30004 5.74702 9.04004 6.26035 9.04004 6.78702V8.04035H10.8934L10.5934 9.97369H9.04004V14.6404C10.611 14.3922 12.0415 13.5907 13.0733 12.3804C14.1051 11.1701 14.6703 9.63078 14.6667 8.04035C14.6667 4.35369 11.6667 1.36035 8.00004 1.36035Z" fill="white"/>
                                    </svg>                        
                            </a>
                            <a href="#" class="mark__body_descr_soc_item button button-func button-aqua">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.0467 1.33301H5.95337C2.22004 1.33301 1.33337 2.21967 1.33337 5.95301V10.0463C1.33337 13.7797 2.22004 14.6663 5.95337 14.6663H10.0467C13.78 14.6663 14.6667 13.7797 14.6667 10.0463V5.95301C14.6667 2.21967 13.78 1.33301 10.0467 1.33301ZM12.1 10.8463H11.1267C10.76 10.8463 10.6467 10.5463 10 9.88634C9.41337 9.33301 9.16004 9.25301 9.02004 9.25301C8.82671 9.25301 8.76671 9.30634 8.76671 9.58634V10.4597C8.76671 10.693 8.69337 10.8397 8.07337 10.8397C7.04671 10.8397 5.90671 10.213 5.10671 9.05968C3.90004 7.36634 3.57337 6.08634 3.57337 5.83301C3.57337 5.69301 3.62004 5.55968 3.90004 5.55968H4.88004C5.12671 5.55968 5.22004 5.66634 5.31337 5.93301C5.79337 7.33301 6.59337 8.53301 6.92004 8.53301C7.04671 8.53301 7.10004 8.47301 7.10004 8.16634V6.73301C7.06671 6.07968 6.71337 6.01968 6.71337 5.78634C6.71337 5.66634 6.80671 5.55968 6.96004 5.55968H8.48671C8.69337 5.55968 8.76671 5.66634 8.76671 5.91967V7.84634C8.76671 8.05301 8.85337 8.12634 8.92004 8.12634C9.04004 8.12634 9.14671 8.05301 9.36671 7.82634C10.0667 7.04634 10.5667 5.83967 10.5667 5.83967C10.6334 5.69968 10.74 5.56634 11 5.56634H11.9534C12.2467 5.56634 12.3134 5.71968 12.2467 5.92634C12.1267 6.49301 10.94 8.16634 10.9534 8.16634C10.8467 8.33301 10.8067 8.40634 10.9534 8.59968C11.0534 8.73968 11.3934 9.03301 11.62 9.29301C12.0334 9.76634 12.3534 10.1597 12.44 10.433C12.5134 10.7063 12.38 10.8463 12.1 10.8463Z" fill="white"/>
                                    </svg>                                              
                            </a>
                            <a href="#" class="mark__body_descr_soc_item button button-func button-aqua">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.9733 4.00033C14.4599 4.23366 13.9066 4.38699 13.3333 4.46033C13.9199 4.10699 14.3733 3.54699 14.5866 2.87366C14.0333 3.20699 13.4199 3.44033 12.7733 3.57366C12.2466 3.00033 11.5066 2.66699 10.6666 2.66699C9.09994 2.66699 7.81994 3.94699 7.81994 5.52699C7.81994 5.75366 7.84661 5.97366 7.89328 6.18033C5.51994 6.06033 3.40661 4.92033 1.99994 3.19366C1.75328 3.61366 1.61328 4.10699 1.61328 4.62699C1.61328 5.62033 2.11328 6.50033 2.88661 7.00033C2.41328 7.00033 1.97328 6.86699 1.58661 6.66699C1.58661 6.66699 1.58661 6.66699 1.58661 6.68699C1.58661 8.07366 2.57328 9.23366 3.87994 9.49366C3.63994 9.56033 3.38661 9.59366 3.12661 9.59366C2.94661 9.59366 2.76661 9.57366 2.59328 9.54033C2.95328 10.667 3.99994 11.507 5.25994 11.527C4.28661 12.3003 3.05328 12.7537 1.70661 12.7537C1.47994 12.7537 1.25328 12.7403 1.02661 12.7137C2.29328 13.527 3.79994 14.0003 5.41328 14.0003C10.6666 14.0003 13.5533 9.64033 13.5533 5.86033C13.5533 5.73366 13.5533 5.61366 13.5466 5.48699C14.1066 5.08699 14.5866 4.58033 14.9733 4.00033Z" fill="white"/>
                                    </svg>                                                                    
                            </a>
                        </div>
                    </div>
                </div>
            </div>`
        );
    }


    if(map) {
        ymaps.ready(init);

        function init () {
            var myMap = new ymaps.Map(map, {
                    center: [55.755819, 37.617644],
                    zoom: 9,
                    controls: []
                }),
        
                myPlacemark1 = new ymaps.Placemark(markObject.pm1.coords, {
                    balloonContent: markContentHtml(markObject.pm1.name)
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: 'img/icons/mark.svg',
                    iconImageSize: [59, 59],
                    iconImageOffset: [-25, -50],
                }),
        
                myPlacemark2 = new ymaps.Placemark(markObject.pm2.coords, {
                    balloonContent: markContentHtml(markObject.pm2.name)
                }, {
                    iconLayout: 'default#image',
                    iconImageHref: 'img/icons/mark.svg',
                    iconImageSize: [59, 59],
                    iconImageOffset: [-25, -50],
                });
        
        
            myMap.geoObjects.add(myPlacemark1)
                .add(myPlacemark2);
        }
    }
    

    
}