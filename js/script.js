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

if (document.querySelector(".travel-select")) {
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
}

if (document.querySelector(".travel-select__date")) {
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
}

if (document.querySelector(".travel-select__visitors")) {
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
}

if (document.querySelector(".travel-select__nationality")) {
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

      let currentText = this.closest(
        ".travel-select__nationality"
      ).querySelector(".current-describe");
      currentText.innerText = text;
      travelSelect.classList.remove("travel-select--opened");
      travelSelect.classList.add("travel-select--closed");
    }
  };

  travelNationalitySelect();
}

// https://qna.habr.com/q/240483

if (document.querySelector(".popular-cities__wiev-all")) {
  let popularCitiesAll = document.querySelector(".popular-cities__wiev-all");
  let wievAllCities = document.querySelector(".wiev-all__cities");
  wievAllCities.addEventListener("click", function () {
    popularCitiesAll.classList.add("popular-cities__wiev-all--opened");
    wievAllCities.style.display = "none";
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

// pagination

// selecting required element
const element = document.querySelector(".page-pagination ul");
let totalPages = 120;
let page = 1;
//calling function with passing parameters and adding inside element which is ul tag
element.innerHTML = createPagination(totalPages, page);
function createPagination(totalPages, page) {
  let liTag = "";
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;
  let hotelPageOne = document.querySelector(".hotel-page__one");
  let hotelPageTwo = document.querySelector(".hotel-page__two");

  if (document.querySelector(".hotel-page__one") && page == 1) {
    hotelPageOne.classList.add("hotel-page--opened");
    hotelPageOne.classList.remove("hotel-page--closed");
  } else {
    hotelPageOne.classList.remove("hotel-page--opened");
    hotelPageOne.classList.add("hotel-page--closed");
  }

  if (document.querySelector(".hotel-page__two") && page == 2) {
    hotelPageTwo.classList.add("hotel-page--opened");
    hotelPageTwo.classList.remove("hotel-page--closed");
  } else {
    hotelPageTwo.classList.remove("hotel-page--opened");
    hotelPageTwo.classList.add("hotel-page--closed");
  }
  if (page > 1) {
    //show the next button if the page value is greater than 1
    liTag += `<li class="btn prev" onclick="createPagination(totalPages, ${
      page - 1
    })"><span><i class="fas fa-angle-left"></i><<</span></li>`;
  }
  if (page > 2) {
    //if page value is less than 2 then add 1 after the previous button
    liTag += `<li class="first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
    if (page > 3) {
      //if page value is greater than 3 then add this (...) after the first li or page
      liTag += `<li class="dots"><span>...</span></li>`;
    }
  }
  // how many pages or li show before the current li
  if (page == totalPages) {
    beforePage = beforePage - 2;
  } else if (page == totalPages - 1) {
    beforePage = beforePage - 1;
  }
  // how many pages or li show after the current li
  if (page == 1) {
    // let posp = document.querySelector(".popular-countries");
    // posp.classList.add("popular-countries--opened");
    afterPage = afterPage + 2;
  } else if (page == 2) {
    afterPage = afterPage + 1;
  }
  for (var plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) {
      //if plength is greater than totalPage length then continue
      continue;
    }
    if (plength == 0) {
      //if plength is 0 than add +1 in plength value
      plength = plength + 1;
    }
    if (page == plength) {
      //if page is equal to plength than assign active string in the active variable
      active = "active";
    } else {
      //else leave empty to the active variable
      active = "";
    }
    liTag += `<li class="numb ${active}" onclick="createPagination(totalPages, ${plength})"><span>${plength}</span></li>`;
  }
  if (page < totalPages - 1) {
    //if page value is less than totalPage value by -1 then show the last li or page
    if (page < totalPages - 2) {
      //if page value is less than totalPage value by -2 then add this (...) before the last li or page
      liTag += `<li class="dots"><span>...</span></li>`;
    }
    liTag += `<li class="last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
  }
  if (page < totalPages) {
    //show the next button if the page value is less than totalPage(20)
    liTag += `<li class="btn next" onclick="createPagination(totalPages, ${
      page + 1
    })"><span>>><i class="fas fa-angle-right"></i></span></li>`;
  }
  element.innerHTML = liTag; //add li tag inside ul tag
  return liTag; //reurn the li tag
}

if (document.querySelector(".hotel-image__slider")) {
  new Swiper(".hotel-image__slider", {
    direction: "horizontal",
    loop: true,
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
    // autoHeight: false,
    // slidesPerView: 1,
  });
}
