/****** Menu Hamburguesa *********/
((d) => {
  const $btnMenu = d.querySelector(".menu-btn"),
    $menu = d.querySelector(".bar-nav");

  $btnMenu.addEventListener("click", (e) => {
    $btnMenu.firstElementChild.classList.toggle("none");
    $btnMenu.lastElementChild.classList.toggle("none");
    $menu.classList.toggle("is-active");
  });

  d.addEventListener("click", (e) => {
    if (!e.target.matches(".bar-nav a")) return false;
    $btnMenu.firstElementChild.classList.remove("none");
    $btnMenu.lastElementChild.classList.add("none");
    $menu.classList.remove("is-active");
  });
})(document);

/** Slider */
((d) => {
  const slider = d.querySelector("#slider");
  let sliderSection = d.querySelectorAll(".slider__section");
  let sliderSectionlast = sliderSection[sliderSection.length - 1];

  const btnLeft = d.querySelector("#btn-left");
  const btnRight = d.querySelector("#btn-right");

  slider.insertAdjacentElement("afterbegin", sliderSectionlast);

  function Next() {
    let sliderSectionFirst = d.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
      slider.style.transition = "none";
      slider.insertAdjacentElement("beforeend", sliderSectionFirst);
      slider.style.marginLeft = "-100%";
    }, 500);
  }

  function Previu() {
    let sliderSection = d.querySelectorAll(".slider__section");
    let sliderSectionlast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function () {
      slider.style.transition = "none";
      slider.insertAdjacentElement("afterbegin", sliderSectionlast);
      slider.style.marginLeft = "-100%";
    }, 500);
  }

  btnRight.addEventListener("click", (e) => {
    Next();
  });

  btnLeft.addEventListener("click", (e) => {
    Previu();
  });

  /*Slider automatico hacia la derecha*/
  setInterval(function () {
    Next();
  }, 5000);
})(document);
