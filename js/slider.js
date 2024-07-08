var slider = tns({
    container: ".homeBanner__slider",
    items: 1,
    speed: 800,
    gutter: 100,
    slideBy: "page",
    autoplay: true,
    navPosition: "bottom",
    axis: "horizontal",
    // containerControls: "#controls",
    // prevButton: ".prev",
    // nextButton: ".next",
  });

  var serviceSlide = tns({
    container: ".services__slider",
    items: 3,
    speed: 800,
    gutter: 100,
    slideBy: 1,
    autoplay: false,
    navPosition: "bottom",
    axis: "horizontal",
    containerControls: "#service__controls",
    prevButton: ".prev",
    nextButton: ".next",
  });

 



