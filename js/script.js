// * ARIS SECTION

$(document).ready(function () {
  $(".down-side").slick({
    dots: true,
    arrows: true,
    autoplay: true,
    autoplayspeed: 20,
    speed: 2000,
  });

  $(".my-slick").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplayspeed: 20,
    speed: 1000,
  });

  let menu = document.querySelector(".menu");
  let menuLogo1 = document.getElementById("menuLogo1");
  let menuLogo2 = document.getElementById("menuLogo2");
  let menuLists = document.querySelectorAll("nav-list-menu");
  let imgButtons = document.querySelectorAll(".right-side .slick-dots li");
  let navListMenu = document.querySelectorAll(".nav-list-menu");

  menuLogo2.addEventListener("click", (e) => {
    menu.style.display = "block";
  });
  menuLogo1.addEventListener("click", (e) => {
    menu.style.display = "none";
  });

  navListMenu.forEach((menu) => {
    menu.addEventListener("click", (e) => {
      $(".menuLogo1").trigger("click");
    });
  });

  async function loadData() {
    const response = await fetch("../data/alumnus.json");
    const data = await response.json();
    const data_sliced = await data.slice(0, 5);
    for (let d of data_sliced) {
      let text = `
      <div class="alumnus-card-parent">
      <div class="top-card"><ul class="dots">
          <li class="dot"></li>
          <li class="dot"></li>
          <li class="dot"></li>
      </ul></div>
      <div class="alumnus-card">
        <div class="photo"><img src=${d.photo} alt="Photo Profile"></div>
        <div class="biodata">
            <div class="name">${d.name}</div>
            <div class="job">${d.job}</div>
            <div class="company"><i class="fa-solid ${
              d.job.includes("Kuliah") ? "fa-school-flag" : "fa-building"
            }"></i> ${d.company}</div>
        </div>
    </div>
    </div>
        `;
      let alumnusCards = document.querySelector(".alumnus-cards");
      alumnusCards.insertAdjacentHTML("afterbegin", text);
      setTimeout(() => {
        $(".alumnus-cards").slick({
          dots: true,
          infinite: false,
          arrows: false,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ],
        });
      }, 1000);
    }
  }
  loadData();
});

async function loadNewData() {
  const response = await fetch("../data/alumnus-new.json");
  const data = await response.json();
  for (let d of data) {
    let text = `
    <tr>
      <td>${d.name}</td>
      <td>${d.perusahaan}</td>
    </tr>
      `;
    let alumnusCards = document.querySelector(".alumnus-2022");
    alumnusCards.insertAdjacentHTML("afterbegin", text);
  }
}
loadNewData();

let btn = document.querySelector(".btn");
let clip = document.querySelector(".clip");
let close = document.querySelector(".close");
let video = document.querySelector("video");
let body = document.querySelector("body");
let stopScrolling = document.querySelector("stop-scrolling");
let wayToClose = [close, clip];

btn.onclick = function () {
  body.classList.add("stop-scrolling");
  btn.classList.add("active");
  clip.classList.add("active");
  video.play();
  video.currentTime = 0;
};

wayToClose.forEach(way => {
  way.onclick = function () {
    body.classList.remove("stop-scrolling");
    btn.classList.remove("active");
    clip.classList.remove("active");
    video.pause();
  };
})
// ! FAUZAN SECTION

// -----------------------------------------------career path---------------------------------------------------
async function loadCareerData() {
  const response = await fetch("../data/career.json");
  const data = await response.json();
  for (let d of data) {
    let text = `
    <div class="card">
            <img src=${d.img} alt="cat" />
            <div class="intro">
              <h1>
                <center>${
                  d.job == "QA Engineer"
                    ? d.job + "<br><br>"
                    : d.job + "<br><br>"
                }</center>
              </h1>
              <p>
                <center>Job Salary: ${d.salary}</center>
              </p>
              <center>
                <a
                  style="color: white"
                  href=${d.vacancy}
                  target="_blank"><i class="fa-solid fa-circle-info"></i
                ></a>
              </center>
            </div>
          </div>
      `;
    let alumnusCards = document.querySelector(".career-cards");
    alumnusCards.insertAdjacentHTML("afterbegin", text);

    setTimeout(() => {
      $(".career-cards").slick({
        dots: true,
        infinite: true,
        speed: 300,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });
    }, 1000);
  }
}
loadCareerData();

// --------------------------------------------head of departement-------------------------------------------
const sliderContainer = document.querySelector(".slider-container");

const slideRight = document.querySelector(".right-slide");
const slideLeft = document.querySelector(".left-slide");

const upButton = document.querySelector(".up-button");
const downButton = document.querySelector(".down-button");

const slideslength = slideLeft.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slideslength - 1) * 100}vh`;

// Add EventListener to the button
upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;

  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slideslength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slideslength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};

$(document).ready(function () {
  $(".mobile-slider").slick({
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
  });
});

setInterval(() => {
  document.querySelector(".up-button").click();
}, 15000);

// * ADAM SECTION
$(".ach-cards").slick({
  dots: true,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

const sijaVideo = document.querySelector(".clip iframe");
