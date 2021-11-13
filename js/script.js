function testWebP(callback) {
  let webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src = webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  }
});

let mainNav = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav__toggle");

navToggle.addEventListener("click", function () {
  if (mainNav.classList.contains("main-nav--closed")) {
    mainNav.classList.remove("main-nav--closed");
    mainNav.classList.add("main-nav--opened");
  } else {
    mainNav.classList.remove("main-nav--opened");
    mainNav.classList.add("main-nav--closed");
  }
});

let travelSelect = function () {
  let travelSelect = document.querySelector(".travel-select");
  let leftArrow = document.querySelector(".arrow-left");
  let travelSelectWrapper = document.querySelector(".travel-select__wrapper");
  let selectItems = document.querySelectorAll(".directions-items li");

  leftArrow.addEventListener("click", function () {
    if (travelSelect.classList.contains("travel-select--opened")) {
      travelSelect.classList.remove("travel-select--opened");
      travelSelect.classList.add("travel-select--closed");
    }
  });

  travelSelectWrapper.addEventListener("click", function () {
    if (travelSelect.classList.contains("travel-select--closed")) {
      travelSelect.classList.remove("travel-select--closed");
      travelSelect.classList.add("travel-select--opened");
    }
  });

  selectItems.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectChoose() {
    let text = this.firstElementChild.innerText;

    let currentText =
      this.closest(".travel-select").querySelector(".current-describe");
    currentText.innerText = text;
    travelSelect.classList.remove("travel-select--opened");
    travelSelect.classList.add("travel-select--closed");
  }
};

travelSelect();

let travelDateSelect = function () {
  let travelSelect = document.querySelector(".travel-select__date");
  let leftArrow = document.querySelector(".arrow-left__date");
  let travelSelectWrapper = document.querySelector(
    ".travel-select__wrapper-date"
  );

  leftArrow.addEventListener("click", function () {
    if (travelSelect.classList.contains("travel-select__date--opened")) {
      travelSelect.classList.remove("travel-select__date--opened");
      travelSelect.classList.add("travel-select--closed");
    }
  });

  travelSelectWrapper.addEventListener("click", function () {
    if (travelSelect.classList.contains("travel-select--closed")) {
      travelSelect.classList.remove("travel-select--closed");
      travelSelect.classList.add("travel-select__date--opened");
    }
  });
};

travelDateSelect();

let travelVisitorsSelect = function () {
  let travelSelect = document.querySelector(".travel-select__visitors");
  let leftArrow = document.querySelector(".arrow-left__visitors");
  let travelSelectWrapper = document.querySelector(
    ".travel-select__wrapper-visitors"
  );

  leftArrow.addEventListener("click", function () {
    if (travelSelect.classList.contains("travel-select--opened")) {
      travelSelect.classList.remove("travel-select--opened");
      travelSelect.classList.add("travel-select--closed");
    }
  });

  travelSelectWrapper.addEventListener("click", function () {
    if (travelSelect.classList.contains("travel-select--closed")) {
      travelSelect.classList.remove("travel-select--closed");
      travelSelect.classList.add("travel-select--opened");
    }
  });

  let btnAdult = document.querySelectorAll(".button-count__adult");
  btnAdult.forEach((btn) => {
    btn.addEventListener("click", function () {
      let direction = this.dataset.direction;
      let countAdult = document.querySelector(".count-adult");
      let currentAdult = document.querySelector(".count-adult__current");
      let currentValue = +countAdult.innerText;
      let newValue;

      if (direction === "plus") {
        newValue = currentValue + 1;
      } else {
        newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
      }
      countAdult.innerText = newValue;
      currentAdult.innerText = newValue;
    });
  });

  let btnChildren = document.querySelectorAll(".button-count__children");
  btnChildren.forEach((btn) => {
    btn.addEventListener("click", function () {
      let direction = this.dataset.direction;
      let countChildren = document.querySelector(".count-children");
      let currentChildren = document.querySelector(".count-children-current");
      let currentValue = +countChildren.innerText;
      let newValue;

      if (direction === "plus") {
        newValue = currentValue + 1;
      } else {
        newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
      }
      countChildren.innerText = newValue;
      currentChildren.innerText = newValue;
    });
  });
};

travelVisitorsSelect();

let travelNationalitySelect = function () {
  let travelSelect = document.querySelector(".travel-select__nationality");
  let leftArrow = document.querySelector(".arrow-left__nationality");
  let travelSelectWrapper = document.querySelector(
    ".travel-select__wrapper-nationality"
  );
  let selectItems = document.querySelectorAll(".nationality-items li");

  leftArrow.addEventListener("click", function () {
    if (travelSelect.classList.contains("travel-select--opened")) {
      travelSelect.classList.remove("travel-select--opened");
      travelSelect.classList.add("travel-select--closed");
    }
  });

  travelSelectWrapper.addEventListener("click", function () {
    if (travelSelect.classList.contains("travel-select--closed")) {
      travelSelect.classList.remove("travel-select--closed");
      travelSelect.classList.add("travel-select--opened");
    }
  });

  selectItems.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectChoose() {
    let text = this.firstElementChild.innerText;

    let currentText = this.closest(".travel-select__nationality").querySelector(
      ".current-describe"
    );
    currentText.innerText = text;
    travelSelect.classList.remove("travel-select--opened");
    travelSelect.classList.add("travel-select--closed");
  }
};

travelNationalitySelect();

// https://qna.habr.com/q/240483

if (document.querySelector(".popular-cities__wiev-all")) {
  let popularCitiesAll = document.querySelector(".popular-cities__wiev-all");
  let wievAllCities = document.querySelector(".wiev-all__cities");
  wievAllCities.addEventListener("click", function () {
    popularCitiesAll.classList.add("popular-cities__wiev-all--opened");
    wievAllCities.style.display = "none";
  });
}

if (document.querySelector(".popular-cities__images-slider")) {
  new Swiper(".popular-cities__images-slider", {
    direction: "horizontal",
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoHeight: false,
    // spaceBetween: 180,
    slidesPerView: 1,
  });
}

if (document.querySelector(".popular-countries__images-slider")) {
  new Swiper(".popular-countries__images-slider", {
    direction: "horizontal",
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoHeight: false,
    // spaceBetween: 180,
    slidesPerView: 1,
  });
}

if (document.querySelector(".popular-countries__wiev-all")) {
  let popularCountriesAll = document.querySelector(
    ".popular-countries__wiev-all"
  );
  let wievAllCountries = document.querySelector(".wiev-all__countries");
  wievAllCountries.addEventListener("click", function () {
    popularCountriesAll.classList.add("popular-countries__wiev-all--opened");
    wievAllCountries.style.display = "none";
  });
}
