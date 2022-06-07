const welcomeboxCross = document.querySelector("#cross-welcome-box");
const welcomeBox = document.querySelector("#welcome-box");
const calculator = document.querySelector("#calculator");
const calculatorCross = document.querySelector("#cross-calculator-box");
const calculatorBody = document.querySelector("#calculator-body");
const mobileNav = document.querySelector(".dots-flex-container-2");
const mobileMenu = document.querySelector("#mobile-nav");
const mobileCross = document.querySelector("#mobile-nav-cross");

welcomeboxCross.addEventListener("click", () => {
  welcomeBox.style.display = "none";
});

calculator.addEventListener("click", () => {
  calculatorBody.style.display = "block";
});

calculatorCross.addEventListener("click", () => {
  calculatorBody.style.display = "none";
});

$(document).ready(() => {
  $("#calculate-btn").click(() => {
    const wall1height = Number($("#height-1").val());
    const wall1width = Number($("#width-1").val());
    const wall2height = Number($("#height-2").val());
    const wall2width = Number($("#width-2").val());
    const wall1area = wall1height * wall1height;
    const wall2area = wall2width * wall2height;
    const totalArea = wall1area + wall2area;

    const oneCan = 32.5;
    const oneCanPrice = 18.23;
    const cansNeeded = Math.ceil(totalArea / oneCan);
    const price = cansNeeded * oneCanPrice;
    const priceId = $("#total-price");
    const paintAmount = $("#paint-amount");
    priceId.text(` £${price}`);
    paintAmount.text(`  ${cansNeeded} cans`);
  });
  var config = {
    speed: 3000,
    auto: true, // true or false
    arrows: true, // true or false
    nav: true, // true or false
    navStyle: "default", // square,rectangle, default
  };

  // Slider core
  var slides = $(".slide");
  var totalSlides = slides.length;
  var currentIndex = 0;

  function setSlides() {
    var currentSlide = slides.eq(currentIndex);
    slides.hide();
    currentSlide.fadeIn(1500);
  }
  setSlides();

  // autoplay
  if (config.auto) {
    var autoSlide = setInterval(function () {
      currentIndex += 1;
      if (currentIndex > totalSlides - 1) {
        currentIndex = 0;
      }
      setSlides();
      navigation();
    }, config.speed);
  }

  // navigation arrows
  if (config.arrows) {
    $(".arrow").addClass("active");
    $(".prev").click(function () {
      clearInterval(autoSlide);
      currentIndex -= 1;
      if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
      }
      navigation();
      setSlides();
    });
    $(".next").click(function () {
      clearInterval(autoSlide);
      currentIndex += 1;
      if (currentIndex > totalSlides - 1) {
        currentIndex = 0;
      }
      navigation();
      setSlides();
    });
  }

  // navigation
  if (config.nav) {
    for (i = 0; i < slides.length; i += 1) {
      $("<li/>").attr({ class: "nav-item", id: i }).appendTo(".slide-nav");
    }
    $(".nav-item").first().addClass("item-active");
    switch (
      config.navStyle // navigation style
    ) {
      case "square":
        $(".nav-item").addClass("square");
        break;
      case "rectangle":
        $(".nav-item").addClass("rectangle");
        break;
      default:
        $(".nav-item").addClass("dot");
    }
    function navigation() {
      $(".nav-item").removeClass("item-active");
      $(".nav-item").eq(currentIndex).addClass("item-active");
    }
    $(".nav-item").click(function () {
      clearInterval(autoSlide);
      var navNumb = $(this).attr("id");
      currentIndex = navNumb;
      navigation();
      setSlides();
    });
  }
});

// Mobile Navigation

mobileNav.addEventListener("click", () => {
  mobileMenu.style.display = "block";
});

mobileCross.addEventListener("click", () => {
  mobileMenu.style.display = "none";
});
