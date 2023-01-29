$(function () {

  // ----------------------------- SCROLL -------------------------------- //

  $(".nav__list, .logo").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  });

  // ----------------------------- MENU BURGER -------------------------------- //

  const menuBtn = $('.header__menu-btn');
  const menu = $('.nav');
  const links = $('.nav__link')
  const overlay = $('.overlay')

  menuBtn.on('click', function () {
    $('body').toggleClass('lock');
    menu.toggleClass('nav--active');
    menuBtn.toggleClass('header__menu-btn--active');
    overlay.toggleClass('overlay--active')
  });

  links.on('click', function () {
    $('body').removeClass('lock');
    menu.removeClass('nav--active');
    menuBtn.removeClass('header__menu-btn--active');
    overlay.removeClass('overlay--active')
  });

  overlay.on('click', function () {
    $('body').removeClass('lock');
    menu.removeClass('nav--active');
    menuBtn.removeClass('header__menu-btn--active');
    overlay.removeClass('overlay--active')
  });


  // ----------------------------- REV SLIDER -------------------------------- //

  const revSlider = $('.rev__slider');
  const revPrev = $('.rev__slider-button--prev');
  const revNext = $('.rev__slider-button--next');

  $(revSlider).slick({
    dots: true,
    arrows: false,
    slidesToShow: 2,
    infinite: true,
    draggable: true,
    autoplay: true,
    waitForAnimate: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1
        },
      },
    ]
  });

  revPrev.on('click', function (e) {
    e.preventDefault();
    revSlider.slick('slickPrev');
  });

  revNext.on('click', function (e) {
    e.preventDefault();
    revSlider.slick('slickNext');
  });

  // ----------------------------- BLOG FILTER -------------------------------- //

  const filterBtn = $('.blog__filter');
  const filterBtnActive = 'blog__filter--active';

  filterBtn.on('click', function () {
    filterBtn.removeClass(filterBtnActive);
    $(this).addClass(filterBtnActive);
  });

  // ----------------------------- FAQ ACC -------------------------------- //

  const faqItem = $('.faq__acc-item');
  const faqItemAct = 'faq__acc-item--active';
  const faqBody = $('.faq__acc-body');

  faqBody.css("display", "none");

  faqItem.on('click', function () {
    $(this).find(faqBody).slideToggle(300);
    $(this).toggleClass(faqItemAct);
  });

  // ----------------------------- INFO  -------------------------------- //

  const textArea = $('.info__input--text');

  textArea.on('click', function () {
    textArea.css('height', '200px');
    textArea.css('overflow-Y', 'visible');
  });

});