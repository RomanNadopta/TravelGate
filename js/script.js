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

if (document.querySelector(".travel-select__destination")) {
  let travelDestinationSelect = function () {
    let travelSelect = document.querySelector(".travel-select__destination");
    let leftArrow = document.querySelector(".arrow-left");
    let travelSelectWrapper = document.querySelector(".travel-select__wrapper");
    let selectItems = document.querySelectorAll(".directions-items li");

    leftArrow.addEventListener("click", function () {
      if (
        travelSelect.classList.contains("travel-select__destination--opened")
      ) {
        travelSelect.classList.remove("travel-select__destination--opened");
        travelSelect.classList.add("travel-select--closed");
      }
    });

    travelSelectWrapper.addEventListener("click", function () {
      if (travelSelect.classList.contains("travel-select--closed")) {
        travelSelect.classList.remove("travel-select--closed");
        travelSelect.classList.add("travel-select__destination--opened");
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
      travelSelect.classList.remove("travel-select__destination--opened");
      travelSelect.classList.add("travel-select--closed");
    }
  };
  travelDestinationSelect();
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

if (document.querySelector(".filter-price")) {
  let filterPriceSelect = function () {
    let travelSelect = document.querySelector(".filter-price");
    let leftArrow = document.querySelector(".arrow-left__filter-price");
    let travelSelectWrapper = document.querySelector(".filter-wrapper");

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
  };
  filterPriceSelect();
}

if (document.querySelector(".expanded-filter")) {
  let filterRating = document.querySelector(".filter-rating");
  // let filterCashBack = document.querySelector(".filter-cash__back");
  let leftArrow = document.querySelector(".arrow-left__filter-rating");
  let filterSelectWrapper = document.querySelector(".filter-rating__wrapper");

  let filterRatingSelect = function () {
    filterSelectWrapper.addEventListener("click", function () {
      if (filterRating.classList.contains("travel-select--closed"))
        filterRating.classList.remove("travel-select--closed");
      filterRating.classList.add("travel-select--opened");
    });
    leftArrow.addEventListener("click", function () {
      if (filterRating.classList.contains("travel-select--opened")) {
        filterRating.classList.remove("travel-select--opened");
        filterRating.classList.add("travel-select--closed");
      }
    });
  };
  filterRatingSelect();
}

if (document.querySelector(".expanded-filter")) {
  let filterCashBack = document.querySelector(".filter-cash__back");
  let leftArrow = document.querySelector(".arrow-left__filter-cash__back");
  let filterSelectWrapper = document.querySelector(
    ".filter-cash__back-wrapper"
  );

  let filterCashBackSelect = function () {
    filterSelectWrapper.addEventListener("click", function () {
      if (filterCashBack.classList.contains("travel-select--closed"))
        filterCashBack.classList.remove("travel-select--closed");
      filterCashBack.classList.add("travel-select--opened");
    });
    leftArrow.addEventListener("click", function () {
      if (filterCashBack.classList.contains("travel-select--opened")) {
        filterCashBack.classList.remove("travel-select--opened");
        filterCashBack.classList.add("travel-select--closed");
      }
    });
  };
  filterCashBackSelect();
}

if (document.querySelector(".expanded-filter")) {
  let filterCatering = document.querySelector(".filter-catering");
  let leftArrow = document.querySelector(".arrow-left__catering");
  let filterSelectWrapper = document.querySelector(".filter-catering__wrapper");

  let filterCateringSelect = function () {
    filterSelectWrapper.addEventListener("click", function () {
      if (filterCatering.classList.contains("travel-select--closed"))
        filterCatering.classList.remove("travel-select--closed");
      filterCatering.classList.add("travel-select--opened");
    });
    leftArrow.addEventListener("click", function () {
      if (filterCatering.classList.contains("travel-select--opened")) {
        filterCatering.classList.remove("travel-select--opened");
        filterCatering.classList.add("travel-select--closed");
      }
    });
  };
  filterCateringSelect();
}

if (document.querySelector(".expanded-filter")) {
  let filterGeneral = document.querySelector(".filter-general");
  let leftArrow = document.querySelector(".arrow-left__filter-general");
  let filterSelectWrapper = document.querySelector(".filter-general__wrapper");

  let filterGeneralSelect = function () {
    filterSelectWrapper.addEventListener("click", function () {
      if (filterGeneral.classList.contains("travel-select--closed"))
        filterGeneral.classList.remove("travel-select--closed");
      filterGeneral.classList.add("travel-select--opened");
    });
    leftArrow.addEventListener("click", function () {
      if (filterGeneral.classList.contains("travel-select--opened")) {
        filterGeneral.classList.remove("travel-select--opened");
        filterGeneral.classList.add("travel-select--closed");
      }
    });
  };
  filterGeneralSelect();
}

if (document.querySelector(".expanded-filter")) {
  let filterFood = document.querySelector(".filter-food");
  let leftArrow = document.querySelector(".arrow-left__filter-food");
  let filterSelectWrapper = document.querySelector(".filter-food__wrapper");

  let filterFoodSelect = function () {
    filterSelectWrapper.addEventListener("click", function () {
      if (filterFood.classList.contains("travel-select--closed"))
        filterFood.classList.remove("travel-select--closed");
      filterFood.classList.add("travel-select--opened");
    });
    leftArrow.addEventListener("click", function () {
      if (filterFood.classList.contains("travel-select--opened")) {
        filterFood.classList.remove("travel-select--opened");
        filterFood.classList.add("travel-select--closed");
      }
    });
  };
  filterFoodSelect();
}

if (document.querySelector(".expanded-filter")) {
  let filterBusinessCenter = document.querySelector(".filter-business__center");
  let leftArrow = document.querySelector(".arrow-left__business-center");
  let filterSelectWrapper = document.querySelector(
    ".filter-business__center-wrapper"
  );

  let filterBusinessCenterSelect = function () {
    filterSelectWrapper.addEventListener("click", function () {
      if (filterBusinessCenter.classList.contains("travel-select--closed"))
        filterBusinessCenter.classList.remove("travel-select--closed");
      filterBusinessCenter.classList.add("travel-select--opened");
    });
    leftArrow.addEventListener("click", function () {
      if (filterBusinessCenter.classList.contains("travel-select--opened")) {
        filterBusinessCenter.classList.remove("travel-select--opened");
        filterBusinessCenter.classList.add("travel-select--closed");
      }
    });
  };
  filterBusinessCenterSelect();
}

if (document.querySelector(".expanded-filter")) {
  let filterReception = document.querySelector(".filter-reception");
  let leftArrow = document.querySelector(".arrow-left__filter-reception");
  let filterSelectWrapper = document.querySelector(
    ".filter-reception__wrapper"
  );

  let filterReceptionSelect = function () {
    filterSelectWrapper.addEventListener("click", function () {
      if (filterReception.classList.contains("travel-select--closed"))
        filterReception.classList.remove("travel-select--closed");
      filterReception.classList.add("travel-select--opened");
    });
    leftArrow.addEventListener("click", function () {
      if (filterReception.classList.contains("travel-select--opened")) {
        filterReception.classList.remove("travel-select--opened");
        filterReception.classList.add("travel-select--closed");
      }
    });
  };
  filterReceptionSelect();
}

if (document.querySelector(".expanded-filter")) {
  let filterSport = document.querySelector(".filter-sport");
  let leftArrow = document.querySelector(".arrow-left__filter-sport");
  let filterSelectWrapper = document.querySelector(".filter-sport__wrapper");

  let filterSportSelect = function () {
    filterSelectWrapper.addEventListener("click", function () {
      if (filterSport.classList.contains("travel-select--closed"))
        filterSport.classList.remove("travel-select--closed");
      filterSport.classList.add("travel-select--opened");
    });
    leftArrow.addEventListener("click", function () {
      if (filterSport.classList.contains("travel-select--opened")) {
        filterSport.classList.remove("travel-select--opened");
        filterSport.classList.add("travel-select--closed");
      }
    });
  };
  filterSportSelect();
}

if (document.querySelector(".expanded-filter")) {
  let filterSwimmingPool = document.querySelector(".filter__swimming-pool");
  let leftArrow = document.querySelector(".arrow-left__filter-swimming-pool");
  let filterSelectWrapper = document.querySelector(
    ".filter-swimming-pool__wrapper"
  );

  let filterSwimmingPoolSelect = function () {
    filterSelectWrapper.addEventListener("click", function () {
      if (filterSwimmingPool.classList.contains("travel-select--closed"))
        filterSwimmingPool.classList.remove("travel-select--closed");
      filterSwimmingPool.classList.add("travel-select--opened");
    });
    leftArrow.addEventListener("click", function () {
      if (filterSwimmingPool.classList.contains("travel-select--opened")) {
        filterSwimmingPool.classList.remove("travel-select--opened");
        filterSwimmingPool.classList.add("travel-select--closed");
      }
    });
  };
  filterSwimmingPoolSelect();
}

if (document.querySelector(".expanded-filter")) {
  let filterPublicAreas = document.querySelector(".filter-public__areas");
  let leftArrow = document.querySelector(".arrow-left__filter-public__areas");
  let filterSelectWrapper = document.querySelector(
    ".filter-public-areas__wrapper"
  );

  let filterPublicAreasSelect = function () {
    filterSelectWrapper.addEventListener("click", function () {
      if (filterPublicAreas.classList.contains("travel-select--closed"))
        filterPublicAreas.classList.remove("travel-select--closed");
      filterPublicAreas.classList.add("travel-select--opened");
    });
    leftArrow.addEventListener("click", function () {
      if (filterPublicAreas.classList.contains("travel-select--opened")) {
        filterPublicAreas.classList.remove("travel-select--opened");
        filterPublicAreas.classList.add("travel-select--closed");
      }
    });
  };
  filterPublicAreasSelect();
}

if (document.querySelector(".expanded-filter")) {
  let filterDifferent = document.querySelector(".filter-different");
  let leftArrow = document.querySelector(".arrow-left__filter-different");
  let filterSelectWrapper = document.querySelector(
    ".filter-different__wrapper"
  );

  let filterDifferentSelect = function () {
    filterSelectWrapper.addEventListener("click", function () {
      if (filterDifferent.classList.contains("travel-select--closed"))
        filterDifferent.classList.remove("travel-select--closed");
      filterDifferent.classList.add("travel-select--opened");
    });
    leftArrow.addEventListener("click", function () {
      if (filterDifferent.classList.contains("travel-select--opened")) {
        filterDifferent.classList.remove("travel-select--opened");
        filterDifferent.classList.add("travel-select--closed");
      }
    });
  };
  filterDifferentSelect();
}

if (document.querySelector(".expanded-filter")) {
  let filterTransport = document.querySelector(".filter-transport");
  let leftArrow = document.querySelector(".arrow-left__filter-transport");
  let filterSelectWrapper = document.querySelector(
    ".filter-transport__wrapper"
  );

  let filterTransportSelect = function () {
    filterSelectWrapper.addEventListener("click", function () {
      if (filterTransport.classList.contains("travel-select--closed"))
        filterTransport.classList.remove("travel-select--closed");
      filterTransport.classList.add("travel-select--opened");
    });
    leftArrow.addEventListener("click", function () {
      if (filterTransport.classList.contains("travel-select--opened")) {
        filterTransport.classList.remove("travel-select--opened");
        filterTransport.classList.add("travel-select--closed");
      }
    });
  };
  filterTransportSelect();
}

if (document.querySelector(".expanded-filter")) {
  let filterEntertaiment = document.querySelector(".filter-entertainment");
  let leftArrow = document.querySelector(".arrow-left__filter-entertainment");
  let filterSelectWrapper = document.querySelector(
    ".filter-entertainment__wrapper"
  );

  let filterEntertainmentSelect = function () {
    filterSelectWrapper.addEventListener("click", function () {
      if (filterEntertaiment.classList.contains("travel-select--closed"))
        filterEntertaiment.classList.remove("travel-select--closed");
      filterEntertaiment.classList.add("travel-select--opened");
    });
    leftArrow.addEventListener("click", function () {
      if (filterEntertaiment.classList.contains("travel-select--opened")) {
        filterEntertaiment.classList.remove("travel-select--opened");
        filterEntertaiment.classList.add("travel-select--closed");
      }
    });
  };
  filterEntertainmentSelect();
}

if (document.querySelector(".expanded-filter")) {
  let filterClearing = document.querySelector(".filter-clearing");
  let leftArrow = document.querySelector(".arrow-left__filter-clearing");
  let filterSelectWrapper = document.querySelector(".filter-clearing__wrapper");

  let filterClearingSelect = function () {
    filterSelectWrapper.addEventListener("click", function () {
      if (filterClearing.classList.contains("travel-select--closed"))
        filterClearing.classList.remove("travel-select--closed");
      filterClearing.classList.add("travel-select--opened");
    });
    leftArrow.addEventListener("click", function () {
      if (filterClearing.classList.contains("travel-select--opened")) {
        filterClearing.classList.remove("travel-select--opened");
        filterClearing.classList.add("travel-select--closed");
      }
    });
  };
  filterClearingSelect();
}

if (document.querySelector(".expanded-filter")) {
  let filterShop = document.querySelector(".filter-shop");
  let leftArrow = document.querySelector(".arrow-left__filter-shop");
  let filterSelectWrapper = document.querySelector(".filter-shop__wrapper");

  let filterShopSelect = function () {
    filterSelectWrapper.addEventListener("click", function () {
      if (filterShop.classList.contains("travel-select--closed"))
        filterShop.classList.remove("travel-select--closed");
      filterShop.classList.add("travel-select--opened");
    });
    leftArrow.addEventListener("click", function () {
      if (filterShop.classList.contains("travel-select--opened")) {
        filterShop.classList.remove("travel-select--opened");
        filterShop.classList.add("travel-select--closed");
      }
    });
  };
  filterShopSelect();
}

if (document.querySelector(".expanded-filter")) {
  let filterServices = document.querySelector(".filter-services");
  let leftArrow = document.querySelector(".arrow-left__filter-services");
  let filterSelectWrapper = document.querySelector(".filter-services__wrapper");

  let filterServicesSelect = function () {
    filterSelectWrapper.addEventListener("click", function () {
      if (filterServices.classList.contains("travel-select--closed"))
        filterServices.classList.remove("travel-select--closed");
      filterServices.classList.add("travel-select--opened");
    });
    leftArrow.addEventListener("click", function () {
      if (filterServices.classList.contains("travel-select--opened")) {
        filterServices.classList.remove("travel-select--opened");
        filterServices.classList.add("travel-select--closed");
      }
    });
  };
  filterServicesSelect();
}

if (document.querySelector(".expanded-filter")) {
  let filterSafety = document.querySelector(".filter-safety");
  let leftArrow = document.querySelector(".arrow-left__filter-safety");
  let filterSelectWrapper = document.querySelector(".filter-safety__wrapper");

  let filterSafetySelect = function () {
    filterSelectWrapper.addEventListener("click", function () {
      if (filterSafety.classList.contains("travel-select--closed"))
        filterSafety.classList.remove("travel-select--closed");
      filterSafety.classList.add("travel-select--opened");
    });
    leftArrow.addEventListener("click", function () {
      if (filterSafety.classList.contains("travel-select--opened")) {
        filterSafety.classList.remove("travel-select--opened");
        filterSafety.classList.add("travel-select--closed");
      }
    });
  };
  filterSafetySelect();
}

if (document.querySelector(".expanded-filter")) {
  let filterToggle = document.querySelector(".expanded-filter");
  let expandedFilterToggle = document.querySelector(".filter-button__toggle");
  let expandedFilterApply = document.querySelector(".filter-button__apply");
  let hotelsList = document.querySelector(".hotels");

  let ExpandedFilterSelect = function () {
    expandedFilterToggle.addEventListener("click", function () {
      if (filterToggle.classList.contains("expanded-filter--closed"))
        filterToggle.classList.remove("expanded-filter--closed");
      filterToggle.classList.add("expanded-filter--opened");
      expandedFilterToggle.style.display = "none";
      expandedFilterApply.style.display = "block";
      hotelsList.style.display = "none";
    });
    expandedFilterApply.addEventListener("click", function () {
      if (filterToggle.classList.contains("expanded-filter--opened"))
        filterToggle.classList.remove("expanded-filter--opened");
      filterToggle.classList.add("expanded-filter--closed");
      expandedFilterToggle.style.display = "block";
      expandedFilterApply.style.display = "none";
      hotelsList.style.display = "block";
    });
  };
  ExpandedFilterSelect();
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
    slidesPerView: 1,
  });
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

// filter price slider

const rangeSlider = document.getElementById("range-slider");
if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 200000],
    connect: true,
    step: 1,
    range: {
      min: [0],
      max: [200000],
    },
  });

  const inputPriceFirst = document.getElementById("input-price__first");
  const inputPriceSecond = document.getElementById("input-price__second");
  const inputsPrice = [inputPriceFirst, inputPriceSecond];
  rangeSlider.noUiSlider.on("update", function (values, handle) {
    inputsPrice[handle].value = Math.round(values[handle]);
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    rangeSlider.noUiSlider.set(arr);
  };

  inputsPrice.forEach((el, index) => {
    el.addEventListener("change", (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}
