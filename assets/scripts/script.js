$(document).ready(function() {

  $('.room-img').click(function () {
    $('.room-img').toggleClass('-scaled');
  });
  $('.events-img').click(function () {
    $('.events-img').toggleClass('-scaled');
  });
  $('.cars-img').click(function () {
    $('.cars-img').toggleClass('-scaled');
  });
  $('.tour-img').click(function () {
    $('.tour-img').toggleClass('-scaled');
  });
  $('.all-img').click(function () {
    $('.all-img').toggleClass('-scaled');
  });

  $('.room-categorie').click(function () {
    $('.using__cards').remove();
    let elem = '        <div class="using__cards">\n' +
        '            <div class="pano__card">\n' +
        '                <div class="pano__preview room">\n' +
        '                    <div class="pano__save">\n' +
        '                        <img src="assets/images/paperclip.svg">\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="pano__info">\n' +
        '                    <div class="pano__rates pano__views">\n' +
        '                        <img src="assets/images/eye.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__name">\n' +
        '                        <p>PANO-ROOM</p>\n' +
        '                        <p>Хорошая панорама   12345</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__rates pano__likes">\n' +
        '                        <img src="assets/images/like.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="pano__card">\n' +
        '                <div class="pano__preview room">\n' +
        '                    <div class="pano__save">\n' +
        '                        <img src="assets/images/paperclip.svg">\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="pano__info">\n' +
        '                    <div class="pano__rates pano__views">\n' +
        '                        <img src="assets/images/eye.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__name">\n' +
        '                        <p>PANO-ROOM</p>\n' +
        '                        <p>Хорошая панорама   12345</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__rates pano__likes">\n' +
        '                        <img src="assets/images/like.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="pano__card">\n' +
        '                <div class="pano__preview room">\n' +
        '                    <div class="pano__save">\n' +
        '                        <img src="assets/images/paperclip.svg">\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="pano__info">\n' +
        '                    <div class="pano__rates pano__views">\n' +
        '                        <img src="assets/images/eye.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__name">\n' +
        '                        <p>PANO-ROOM</p>\n' +
        '                        <p>Хорошая панорама   12345</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__rates pano__likes">\n' +
        '                        <img src="assets/images/like.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="pano__card">\n' +
        '                <div class="pano__preview room">\n' +
        '                    <div class="pano__save">\n' +
        '                        <img src="assets/images/paperclip.svg">\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="pano__info">\n' +
        '                    <div class="pano__rates pano__views">\n' +
        '                        <img src="assets/images/eye.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__name">\n' +
        '                        <p>PANO-ROOM</p>\n' +
        '                        <p>Хорошая панорама   12345</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__rates pano__likes">\n' +
        '                        <img src="assets/images/like.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>';
    let refElem = '.using__spheres';
    $('.using__body').append(elem);
  });

  $('.tour-categorie').click(function () {
    $('.using__cards').remove();
    let elem = '        <div class="using__cards">\n' +
        '            <div class="pano__card">\n' +
        '                <div class="pano__preview tour">\n' +
        '                    <div class="pano__save">\n' +
        '                        <img src="assets/images/paperclip.svg">\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="pano__info">\n' +
        '                    <div class="pano__rates pano__views">\n' +
        '                        <img src="assets/images/eye.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__name">\n' +
        '                        <p>PANO-TOUR</p>\n' +
        '                        <p>Хорошая панорама   12345</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__rates pano__likes">\n' +
        '                        <img src="assets/images/like.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="pano__card">\n' +
        '                <div class="pano__preview tour">\n' +
        '                    <div class="pano__save">\n' +
        '                        <img src="assets/images/paperclip.svg">\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="pano__info">\n' +
        '                    <div class="pano__rates pano__views">\n' +
        '                        <img src="assets/images/eye.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__name">\n' +
        '                        <p>PANO-TOUR</p>\n' +
        '                        <p>Хорошая панорама   12345</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__rates pano__likes">\n' +
        '                        <img src="assets/images/like.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="pano__card">\n' +
        '                <div class="pano__preview tour">\n' +
        '                    <div class="pano__save">\n' +
        '                        <img src="assets/images/paperclip.svg">\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="pano__info">\n' +
        '                    <div class="pano__rates pano__views">\n' +
        '                        <img src="assets/images/eye.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__name">\n' +
        '                        <p>PANO-TOUR</p>\n' +
        '                        <p>Хорошая панорама   12345</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__rates pano__likes">\n' +
        '                        <img src="assets/images/like.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="pano__card">\n' +
        '                <div class="pano__preview tour">\n' +
        '                    <div class="pano__save">\n' +
        '                        <img src="assets/images/paperclip.svg">\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="pano__info">\n' +
        '                    <div class="pano__rates pano__views">\n' +
        '                        <img src="assets/images/eye.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__name">\n' +
        '                        <p>PANO-TOUR</p>\n' +
        '                        <p>Хорошая панорама   12345</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__rates pano__likes">\n' +
        '                        <img src="assets/images/like.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>';
    let refElem = '.using__spheres';
    $('.using__body').append(elem);
  });

  $('.event-categorie').click(function () {
    $('.using__cards').remove();
    let elem = '        <div class="using__cards">\n' +
        '            <div class="pano__card">\n' +
        '                <div class="pano__preview theatre-bg">\n' +
        '                    <div class="pano__save">\n' +
        '                        <img src="assets/images/paperclip.svg">\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="pano__info">\n' +
        '                    <div class="pano__rates pano__views">\n' +
        '                        <img src="assets/images/eye.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__name">\n' +
        '                        <p>PANO-EVENTS</p>\n' +
        '                        <p>Хорошая панорама   12345</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__rates pano__likes">\n' +
        '                        <img src="assets/images/like.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="pano__card">\n' +
        '                <div class="pano__preview theatre-bg">\n' +
        '                    <div class="pano__save">\n' +
        '                        <img src="assets/images/paperclip.svg">\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="pano__info">\n' +
        '                    <div class="pano__rates pano__views">\n' +
        '                        <img src="assets/images/eye.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__name">\n' +
        '                        <p>PANO-EVENTS</p>\n' +
        '                        <p>Хорошая панорама   12345</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__rates pano__likes">\n' +
        '                        <img src="assets/images/like.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="pano__card">\n' +
        '                <div class="pano__preview theatre-bg">\n' +
        '                    <div class="pano__save">\n' +
        '                        <img src="assets/images/paperclip.svg">\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="pano__info">\n' +
        '                    <div class="pano__rates pano__views">\n' +
        '                        <img src="assets/images/eye.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__name">\n' +
        '                        <p>PANO-EVENTS</p>\n' +
        '                        <p>Хорошая панорама   12345</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__rates pano__likes">\n' +
        '                        <img src="assets/images/like.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="pano__card">\n' +
        '                <div class="pano__preview theatre-bg">\n' +
        '                    <div class="pano__save">\n' +
        '                        <img src="assets/images/paperclip.svg">\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="pano__info">\n' +
        '                    <div class="pano__rates pano__views">\n' +
        '                        <img src="assets/images/eye.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__name">\n' +
        '                        <p>PANO-EVENTS</p>\n' +
        '                        <p>Хорошая панорама   12345</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__rates pano__likes">\n' +
        '                        <img src="assets/images/like.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>';
    let refElem = '.using__spheres';
    $('.using__body').append(elem);
  });

  $('.car-categorie').click(function () {
    $('.using__cards').remove();
    let elem = '        <div class="using__cards">\n' +
        '            <div class="pano__card">\n' +
        '                <div class="pano__preview car">\n' +
        '                    <div class="pano__save">\n' +
        '                        <img src="assets/images/paperclip.svg">\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="pano__info">\n' +
        '                    <div class="pano__rates pano__views">\n' +
        '                        <img src="assets/images/eye.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__name">\n' +
        '                        <p>PANO-CAR</p>\n' +
        '                        <p>Хорошая панорама   12345</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__rates pano__likes">\n' +
        '                        <img src="assets/images/like.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="pano__card">\n' +
        '                <div class="pano__preview car">\n' +
        '                    <div class="pano__save">\n' +
        '                        <img src="assets/images/paperclip.svg">\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="pano__info">\n' +
        '                    <div class="pano__rates pano__views">\n' +
        '                        <img src="assets/images/eye.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__name">\n' +
        '                        <p>PANO-CAR</p>\n' +
        '                        <p>Хорошая панорама   12345</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__rates pano__likes">\n' +
        '                        <img src="assets/images/like.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="pano__card">\n' +
        '                <div class="pano__preview car">\n' +
        '                    <div class="pano__save">\n' +
        '                        <img src="assets/images/paperclip.svg">\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="pano__info">\n' +
        '                    <div class="pano__rates pano__views">\n' +
        '                        <img src="assets/images/eye.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__name">\n' +
        '                        <p>PANO-CAR</p>\n' +
        '                        <p>Хорошая панорама   12345</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__rates pano__likes">\n' +
        '                        <img src="assets/images/like.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '            <div class="pano__card">\n' +
        '                <div class="pano__preview car">\n' +
        '                    <div class="pano__save">\n' +
        '                        <img src="assets/images/paperclip.svg">\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '                <div class="pano__info">\n' +
        '                    <div class="pano__rates pano__views">\n' +
        '                        <img src="assets/images/eye.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__name">\n' +
        '                        <p>PANO-CAR</p>\n' +
        '                        <p>Хорошая панорама   12345</p>\n' +
        '                    </div>\n' +
        '                    <div class="pano__rates pano__likes">\n' +
        '                        <img src="assets/images/like.svg">\n' +
        '                        <p>10000</p>\n' +
        '                    </div>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '        </div>';
    let refElem = '.using__spheres';
    $('.using__body').append(elem);
  });

  $('.full-form').submit(function() { 
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php", 
      data: th.serialize()
    }).done(function() {
      $(".fancybox-container").remove(); 
      th.trigger("reset");
      // setTimeout(function() {
      //   // Done Functions
      // }, 1000);
    });
    return false;
  });

  $('.email-form').submit(function() {
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: th.serialize()
    }).done(function() {
      th.trigger("reset");
      // setTimeout(function() {
      //   // Done Functions
      // }, 1000);
    });
    return false;
  });


  $('.bg-carousel').owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 2000,
    autoplayHoverPause: true,
    responsive:{
      900:{
        items:1
      }
    }
  });


  $('.event-carousel').owlCarousel({
    items: 3,
    dots: false,
    loop: true,
    navContainerClass: 'owl-nav-event',
    navClass: ['owl-prev-event', 'owl-next-event'],
    smartSpeed: 1300,
    nav: true,
    responsive:{
      900:{
        items:3
      },
      1920:{
        items:4
      }
    }
  });

  $('[data-fancybox="gallery"]').fancybox();

});
