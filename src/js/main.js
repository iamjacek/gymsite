//imports

import styles from "../sass/style.scss";
import menu from "../sass/menu.scss";
import button from "../sass/button.scss";
import scrollStyle from "../sass/scroll.scss";
import wheelStyle from "../sass/wheel.scss";
import mediaQ from "../sass/mediaqueries.scss";
import headerPriceMobile from "../assets/heading_price-mobile.png";
import headerPrice from "../assets/heading_price.png";
import img from "../assets/logo_home.png";
import star from "../assets/star_home.svg";
import man from "../assets/man_home.png";
import scroll from "../assets/chevron_home.svg";
import headingAbout from "../assets/heading_about.png";
import headingAbout2 from "../assets/heading-about-mobile.png";
import pavanam from "../assets/fonts/Pavanam.ttf";
import paytone from "../assets/fonts/PaytoneOne.ttf";
import post from "../assets/fonts/post.ttf";
import PatuaOne from "../assets/fonts/PatuaOne.ttf";
import grey from "../assets/ellipse-grey_about.png";
import orange from "../assets/ellipse-orange_about.png";
import { homedir } from "os";

//fonts

var newStyle = document.createElement("style");
newStyle.appendChild(
  document.createTextNode(
    "\
@font-face {\
    font-family: " +
      "Pavanam" +
      ";\
    src: url('" +
      pavanam +
      "') format('truetype');\
}\
"
  )
);
newStyle.appendChild(
  document.createTextNode(
    "\
  @font-face {\
      font-family: " +
      "PaytoneOne" +
      ";\
      src: url('" +
      paytone +
      "') format('truetype');\
  }\
  "
  )
);
newStyle.appendChild(
  document.createTextNode(
    "\
  @font-face {\
      font-family: " +
      "Post" +
      ";\
      src: url('" +
      post +
      "') format('truetype');\
  }\
  "
  )
);
newStyle.appendChild(
  document.createTextNode(
    "\
  @font-face {\
      font-family: " +
      "PatuaOne" +
      ";\
      src: url('" +
      PatuaOne +
      "') format('truetype');\
  }\
  "
  )
);

document.head.appendChild(newStyle);

//images HOME SECTION
const i = document.getElementsByClassName("section-home__star");
const c = document.createElement("img");
c.src = star;
c.alt = "start background image";
c.className = "section-home__star-img";
i[0].appendChild(c);

const b = document.createElement("img");
b.src = man;
b.alt = "athlete picture";
b.className = "section-home__man-picture";
i[0].appendChild(b);

const h = document.getElementsByClassName("section-home__nav");
const a = document.createElement("img");
a.src = img;
a.alt = "logo";
a.className = "section-home__logo";
h[0].insertBefore(a, h[0].childNodes[0]);

const homeSection = document.getElementsByClassName("section-home");
const alink = document.createElement("a");
alink.href = "#about";
alink.className = "section-home__link-scroll";
const scrollHomePageInd = document.createElement("img");
const scrollHomePageInd2 = document.createElement("img");
const scrollHomePageInd3 = document.createElement("img");
scrollHomePageInd.src = scroll;
scrollHomePageInd2.src = scroll;
scrollHomePageInd3.src = scroll;
scrollHomePageInd.alt = "scroll arrow";
scrollHomePageInd2.alt = "scroll arrow";
scrollHomePageInd3.alt = "scroll arrow";
scrollHomePageInd.className = "section-home__scroll";
scrollHomePageInd2.className =
  "section-home__scroll section-home__scroll--delayed-2";
scrollHomePageInd3.className =
  "section-home__scroll section-home__scroll--delayed-3";
homeSection[0].appendChild(alink);
alink.appendChild(scrollHomePageInd);
alink.appendChild(scrollHomePageInd2);
alink.appendChild(scrollHomePageInd3);

// images ABOUT SEC
const secAbout = document.getElementsByClassName("section-about");
const imgHead = document.createElement("img");

const replaceImage = () => {
  if (window.innerWidth < 800) {
    imgHead.src = headingAbout2;
  } else {
    imgHead.src = headingAbout;
  }
};
window.addEventListener("resize", replaceImage);
replaceImage();
imgHead.alt = "heading picture";
imgHead.className = "section-about__heading";

//text content for about sec
const parCont = document.createElement("div");
parCont.className = "section-about__container";
const par = document.createElement("p");
par.innerHTML =
  '"What? Do you not know that your body is the temple of the Holy Spirit, who is in you, whom you have received from God, and that you are not your own? You were bought with a price. Therefore glorify God in your body and in your spirit, which are God\'s." ';
par.className = "section-about__paragraph";
parCont.appendChild(par);

const subText = document.createElement("p");
subText.innerHTML = "– 1 Corinthians 6:19-20 (MEV)";
subText.className = "section-about__subtext";
parCont.appendChild(subText);

const aboutContainer = document.createElement("div");
aboutContainer.className = "section-about__about-container";

aboutContainer.appendChild(imgHead);
aboutContainer.appendChild(parCont);

secAbout[0].appendChild(aboutContainer);

//button effect
const aa = document.querySelector(".section-home__button");
const ab = document.querySelector(".section-home__arrow");
aa.addEventListener("mouseover", function() {
  console.log("hover");
  this.classList.add("section-home__button--hover");
  ab.classList.add("section-home__arrow--hover");
});
aa.addEventListener("mouseout", function() {
  console.log("hover");
  this.classList.remove("section-home__button--hover");
  ab.classList.remove("section-home__arrow--hover");
});

//NAVIGATION WHEEL ***********************************

//appear on every sections just slightly hide on home due to home menu

window.addEventListener("scroll", () => {
  const sectionHomeH = document.querySelector("#home").offsetHeight;
  const scrollTop =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
  if (scrollTop < sectionHomeH / 1.3) {
    document.querySelector(".section-about__navigation-wheel").style.right =
      "-30px";
  } else if (scrollTop >= sectionHomeH / 5) {
    document.querySelector(".section-about__navigation-wheel").style.right =
      "0";
  }
});

const homeDot = document.querySelector(".section-about__ball-1");
homeDot.addEventListener("mouseover", () => {
  const styleE = document.head.appendChild(document.createElement("style"));
  styleE.innerHTML =
    ".section-about__ball-1::before {transform: scale(1) translateX(0);}";
});
homeDot.addEventListener("mouseout", () => {
  const styleE = document.head.appendChild(document.createElement("style"));
  styleE.innerHTML =
    ".section-about__ball-1::before {transform: scale(0) translateX(-200px);}";
});

const homeDot2 = document.querySelector(".section-about__ball-2");
homeDot2.addEventListener("mouseover", () => {
  const styleE = document.head.appendChild(document.createElement("style"));
  styleE.innerHTML =
    ".section-about__ball-2::before {transform: scale(1) translateX(0);}";
});
homeDot2.addEventListener("mouseout", () => {
  const styleE = document.head.appendChild(document.createElement("style"));
  styleE.innerHTML =
    ".section-about__ball-2::before {transform: scale(0) translateX(-200px);}";
});

const homeDot3 = document.querySelector(".section-about__ball-3");
homeDot3.addEventListener("mouseover", () => {
  const styleE = document.head.appendChild(document.createElement("style"));
  styleE.innerHTML =
    ".section-about__ball-3::before {transform: scale(1) translateX(0);}";
});
homeDot3.addEventListener("mouseout", () => {
  const styleE = document.head.appendChild(document.createElement("style"));
  styleE.innerHTML =
    ".section-about__ball-3::before {transform: scale(0) translateX(-200px);}";
});

const homeDot4 = document.querySelector(".section-about__ball-4");
homeDot4.addEventListener("mouseover", () => {
  const styleE = document.head.appendChild(document.createElement("style"));
  styleE.innerHTML =
    ".section-about__ball-4::before {transform: scale(1) translateX(0);}";
});
homeDot4.addEventListener("mouseout", () => {
  const styleE = document.head.appendChild(document.createElement("style"));
  styleE.innerHTML =
    ".section-about__ball-4::before {transform: scale(0) translateX(-200px);}";
});

const homeDot5 = document.querySelector(".section-about__ball-5");
homeDot5.addEventListener("mouseover", () => {
  const styleE = document.head.appendChild(document.createElement("style"));
  styleE.innerHTML =
    ".section-about__ball-5::before {transform: scale(1) translateX(0);}";
});
homeDot5.addEventListener("mouseout", () => {
  const styleE = document.head.appendChild(document.createElement("style"));
  styleE.innerHTML =
    ".section-about__ball-5::before {transform: scale(0) translateX(-200px);}";
});

//change the dot color down to active section
let bgFlag = "";
window.addEventListener("scroll", () => {
  const sectionHomeH = document.querySelector("#home").offsetHeight;
  const sectionAboutH = document.querySelector("#about").offsetHeight;
  const sectionTrainersH = document.querySelector("#trainers").offsetHeight;
  const sectionPriceH = document.querySelector("#price").offsetHeight;
  const sectionContactsH = document.querySelector("#contacts").offsetHeight;
  const scrollTop =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;

  //if user on about section
  if (
    scrollTop <= sectionHomeH + sectionAboutH - 200 &&
    scrollTop > sectionAboutH - 200
  ) {
    const styleBall1 = document.querySelector(".section-about__ball-1");
    styleBall1.style.background = "url('" + grey + "') no-repeat";
    styleBall1.style.backgroundPosition = "center";
    styleBall1.style.backgroundSize = "cover";

    const styleBall2 = document.querySelector(".section-about__ball-2");
    styleBall2.style.background = "url('" + orange + "') no-repeat";
    styleBall2.style.backgroundPosition = "center";
    styleBall2.style.backgroundSize = "cover";

    const styleBall3 = document.querySelector(".section-about__ball-3");
    styleBall3.style.background = "url('" + grey + "') no-repeat";
    styleBall3.style.backgroundPosition = "center";
    styleBall3.style.backgroundSize = "cover";

    const styleBall4 = document.querySelector(".section-about__ball-4");
    styleBall4.style.background = "url('" + grey + "') no-repeat";
    styleBall4.style.backgroundPosition = "center";
    styleBall4.style.backgroundSize = "cover";

    const styleBall5 = document.querySelector(".section-about__ball-5");
    styleBall5.style.background = "url('" + grey + "') no-repeat";
    styleBall5.style.backgroundPosition = "center";
    styleBall5.style.backgroundSize = "cover";

    //before elements background
    if (bgFlag !== "about") {
      const styleBg = document.head.appendChild(
        document.createElement("style")
      );
      styleBg.innerHTML =
        ".section-about__ball-1::before {background: #d9d9d9;}.section-about__ball-2::before {background: #fff;}.section-about__ball-3::before {background: #d9d9d9;}.section-about__ball-4::before {background: #d9d9d9;}.section-about__ball-5::before {background: #d9d9d9;}";
      bgFlag = "about";
    }
  } //if user is over home section
  else if (scrollTop < sectionAboutH - 200) {
    const styleBall1 = document.querySelector(".section-about__ball-1");
    styleBall1.style.background = "url('" + orange + "') no-repeat";
    styleBall1.style.backgroundPosition = "center";
    styleBall1.style.backgroundSize = "cover";

    const styleBall2 = document.querySelector(".section-about__ball-2");
    styleBall2.style.background = "url('" + grey + "') no-repeat";
    styleBall2.style.backgroundPosition = "center";
    styleBall2.style.backgroundSize = "cover";

    const styleBall3 = document.querySelector(".section-about__ball-3");
    styleBall3.style.background = "url('" + grey + "') no-repeat";
    styleBall3.style.backgroundPosition = "center";
    styleBall3.style.backgroundSize = "cover";

    const styleBall4 = document.querySelector(".section-about__ball-4");
    styleBall4.style.background = "url('" + grey + "') no-repeat";
    styleBall4.style.backgroundPosition = "center";
    styleBall4.style.backgroundSize = "cover";

    const styleBall5 = document.querySelector(".section-about__ball-5");
    styleBall5.style.background = "url('" + grey + "') no-repeat";
    styleBall5.style.backgroundPosition = "center";
    styleBall5.style.backgroundSize = "cover";

    //before elements background
    if (bgFlag !== "home") {
      const styleBg = document.head.appendChild(
        document.createElement("style")
      );
      styleBg.innerHTML =
        ".section-about__ball-1::before {background: #fff;}.section-about__ball-2::before {background: #d9d9d9;}.section-about__ball-3::before {background: #d9d9d9;}.section-about__ball-4::before {background: #d9d9d9;}.section-about__ball-5::before {background: #d9d9d9;}";
      bgFlag = "home";
    }
  }
  //if user is over trainers section
  else if (
    scrollTop >= sectionHomeH + sectionAboutH - 200 &&
    scrollTop < sectionAboutH + sectionHomeH + sectionPriceH - 200
  ) {
    const styleBall1 = document.querySelector(".section-about__ball-1");
    styleBall1.style.background = "url('" + grey + "') no-repeat";
    styleBall1.style.backgroundPosition = "center";
    styleBall1.style.backgroundSize = "cover";

    const styleBall2 = document.querySelector(".section-about__ball-2");
    styleBall2.style.background = "url('" + grey + "') no-repeat";
    styleBall2.style.backgroundPosition = "center";
    styleBall2.style.backgroundSize = "cover";

    const styleBall3 = document.querySelector(".section-about__ball-3");
    styleBall3.style.background = "url('" + orange + "') no-repeat";
    styleBall3.style.backgroundPosition = "center";
    styleBall3.style.backgroundSize = "cover";

    const styleBall4 = document.querySelector(".section-about__ball-4");
    styleBall4.style.background = "url('" + grey + "') no-repeat";
    styleBall4.style.backgroundPosition = "center";
    styleBall4.style.backgroundSize = "cover";

    const styleBall5 = document.querySelector(".section-about__ball-5");
    styleBall5.style.background = "url('" + grey + "') no-repeat";
    styleBall5.style.backgroundPosition = "center";
    styleBall5.style.backgroundSize = "cover";

    //before elements background
    if (bgFlag !== "trainers") {
      const styleBg = document.head.appendChild(
        document.createElement("style")
      );
      styleBg.innerHTML =
        ".section-about__ball-1::before {background: #d9d9d9;}.section-about__ball-2::before {background: #d9d9d9;}.section-about__ball-3::before {background: #fff;}.section-about__ball-4::before {background: #d9d9d9;}.section-about__ball-5::before {background: #d9d9d9;}";
      bgFlag = "trainers";
    }
  } //if user is over price section
  else if (
    scrollTop >= sectionHomeH + sectionAboutH + sectionPriceH - 200 &&
    scrollTop <
      sectionAboutH + sectionHomeH + sectionPriceH + sectionContactsH - 200
  ) {
    const styleBall1 = document.querySelector(".section-about__ball-1");
    styleBall1.style.background = "url('" + grey + "') no-repeat";
    styleBall1.style.backgroundPosition = "center";
    styleBall1.style.backgroundSize = "cover";

    const styleBall2 = document.querySelector(".section-about__ball-2");
    styleBall2.style.background = "url('" + grey + "') no-repeat";
    styleBall2.style.backgroundPosition = "center";
    styleBall2.style.backgroundSize = "cover";

    const styleBall3 = document.querySelector(".section-about__ball-3");
    styleBall3.style.background = "url('" + grey + "') no-repeat";
    styleBall3.style.backgroundPosition = "center";
    styleBall3.style.backgroundSize = "cover";

    const styleBall4 = document.querySelector(".section-about__ball-4");
    styleBall4.style.background = "url('" + orange + "') no-repeat";
    styleBall4.style.backgroundPosition = "center";
    styleBall4.style.backgroundSize = "cover";

    const styleBall5 = document.querySelector(".section-about__ball-5");
    styleBall5.style.background = "url('" + grey + "') no-repeat";
    styleBall5.style.backgroundPosition = "center";
    styleBall5.style.backgroundSize = "cover";

    //before elements background
    if (bgFlag !== "price") {
      const styleBg = document.head.appendChild(
        document.createElement("style")
      );
      styleBg.innerHTML =
        ".section-about__ball-1::before {background: #d9d9d9;}.section-about__ball-2::before {background: #d9d9d9;}.section-about__ball-3::before {background: #d9d9d9;}.section-about__ball-4::before {background: #fff;}.section-about__ball-5::before {background: #d9d9d9;}";
      bgFlag = "price";
    }
  } //if user is over contacts section
  else if (
    scrollTop >
    sectionAboutH + sectionHomeH + sectionPriceH + sectionContactsH - 200
  ) {
    const styleBall1 = document.querySelector(".section-about__ball-1");
    styleBall1.style.background = "url('" + grey + "') no-repeat";
    styleBall1.style.backgroundPosition = "center";
    styleBall1.style.backgroundSize = "cover";

    const styleBall2 = document.querySelector(".section-about__ball-2");
    styleBall2.style.background = "url('" + grey + "') no-repeat";
    styleBall2.style.backgroundPosition = "center";
    styleBall2.style.backgroundSize = "cover";

    const styleBall3 = document.querySelector(".section-about__ball-3");
    styleBall3.style.background = "url('" + grey + "') no-repeat";
    styleBall3.style.backgroundPosition = "center";
    styleBall3.style.backgroundSize = "cover";

    const styleBall4 = document.querySelector(".section-about__ball-4");
    styleBall4.style.background = "url('" + grey + "') no-repeat";
    styleBall4.style.backgroundPosition = "center";
    styleBall4.style.backgroundSize = "cover";

    const styleBall5 = document.querySelector(".section-about__ball-5");
    styleBall5.style.background = "url('" + orange + "') no-repeat";
    styleBall5.style.backgroundPosition = "center";
    styleBall5.style.backgroundSize = "cover";

    //before elements background
    if (bgFlag !== "contacts") {
      const styleBg = document.head.appendChild(
        document.createElement("style")
      );
      styleBg.innerHTML =
        ".section-about__ball-1::before {background: #d9d9d9;}.section-about__ball-2::before {background: #d9d9d9;}.section-about__ball-3::before {background: #d9d9d9;}.section-about__ball-4::before {background: #d9d9d9;}.section-about__ball-5::before {background: #fff;}";
      bgFlag = "contacts";
    }
  }
});

//content slide effects
const slideEffect = () => {
  const sectionHomeH = document.querySelector("#home").offsetHeight;
  const sectionAboutH = document.querySelector("#about").offsetHeight;
  const sectionTrainersH = document.querySelector("#trainers").offsetHeight;
  const sectionPriceH = document.querySelector("#price").offsetHeight;
  const scrollTop =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;

  //about
  if (scrollTop > sectionHomeH - 300) {
    const elem = document.querySelector(".section-about__heading");
    elem.style.transform = "translateY(0)";

    const elem2 = document.querySelector(".section-about__container");
    elem2.style.transform = "translateY(0)";
  }
  //trainers
  if (scrollTop > sectionHomeH + sectionAboutH - 300) {
    const elem = document.querySelector(".section-trainers__paragraph");
    elem.style.transform = "translateY(0)";

    const elem2 = document.querySelector(".section-trainers h1");
    elem2.style.transform = "translateY(0)";

    const elem3 = document.querySelector(
      ".section-trainers__pictures-container"
    );
    elem3.style.transform = "translateY(0)";
  }
  //price + three free images
  if (scrollTop > sectionHomeH + sectionAboutH + sectionTrainersH - 300) {
    const elem = document.querySelector(".section-price__heading-container");
    elem.style.transform = "translateY(0)";

    const elem2 = document.querySelector(".section-price__people-container");
    elem2.style.transform = "translateY(0)";

    const elem3 = document.querySelector(".section-price__boxes-labels");
    elem3.style.transform = "translateY(0)";

    const elem4 = document.querySelector(".section-price__boxes");
    elem4.style.transform = "translateY(0)";

    const elem5 = document.querySelectorAll(".section-contacts__image");
    elem5[0].style.transform = "translateY(0)";
    elem5[1].style.transform = "translateY(0)";
    elem5[2].style.transform = "translateY(0)";
  }
  //contacts
  if (
    scrollTop >
    sectionHomeH + sectionAboutH + sectionTrainersH + sectionPriceH - 300
  ) {
    const elem = document.querySelector(".section-contacts__content img");
    elem.style.transform = "translatex(0)";

    const elem2 = document.querySelector(".section-contacts__content p");
    elem2.style.transform = "translatex(0)";
  }
};
window.addEventListener("scroll", () => {
  slideEffect();
});

slideEffect();

//trainers onmouseover effect

//check opacity on overlay and hide/show description
if (window.innerWidth > 800) {
  const checkOpacity = () => {
    const a = document.querySelector("#trainer1");
    const b = document.querySelector("#trainer2");
    const c = document.querySelector("#trainer3");
    const d = document.querySelector("#trainer4");

    if (a.style.opacity === "0.6") {
      document.querySelector(".section-trainers__description-1").style.opacity =
        "1";
    } else if (a.style.opacity === "0") {
      document.querySelector(".section-trainers__description-1").style.opacity =
        "0";
    }

    if (b.style.opacity === "0.6") {
      document.querySelector(".section-trainers__description-2").style.opacity =
        "1";
    } else if (b.style.opacity === "0") {
      document.querySelector(".section-trainers__description-2").style.opacity =
        "0";
    }

    if (c.style.opacity === "0.6") {
      document.querySelector(".section-trainers__description-3").style.opacity =
        "1";
    } else if (c.style.opacity === "0") {
      document.querySelector(".section-trainers__description-3").style.opacity =
        "0";
    }

    if (d.style.opacity === "0.6") {
      document.querySelector(".section-trainers__description-4").style.opacity =
        "1";
    } else if (d.style.opacity === "0") {
      document.querySelector(".section-trainers__description-4").style.opacity =
        "0";
    }
  };

  const trainer = document.querySelectorAll(".section-trainers__trainer");

  for (let i = 0; i < trainer.length; i++) {
    trainer[i].addEventListener("mouseover", e => {
      e.target.style.opacity = 0.6;
      e.target.parentNode.style.filter = "blur(2px)";
      checkOpacity();
    });
  }

  for (let i = 0; i < trainer.length; i++) {
    trainer[i].addEventListener("mouseout", e => {
      e.target.style.opacity = 0;
      e.target.parentNode.style.filter = "blur(0px)";
      checkOpacity();
    });
  }

  //Enable on/off when user over the description text
  const trainerDes1 = document.querySelector(
    ".section-trainers__description-1"
  );
  const trainerDes2 = document.querySelector(
    ".section-trainers__description-2"
  );
  const trainerDes3 = document.querySelector(
    ".section-trainers__description-3"
  );
  const trainerDes4 = document.querySelector(
    ".section-trainers__description-4"
  );

  //description1
  trainerDes1.addEventListener("mouseover", () => {
    document.querySelector("#trainer1").style.opacity = 0.6;
    document.querySelector("#trainer1").parentNode.style.filter = "blur(2px)";
    checkOpacity();
  });

  trainerDes1.addEventListener("mouseout", e => {
    document.querySelector("#trainer1").style.opacity = 0;
    document.querySelector("#trainer1").parentNode.style.filter = "blur(0px)";
    checkOpacity();
  });
  //description2
  trainerDes2.addEventListener("mouseover", () => {
    document.querySelector("#trainer2").style.opacity = 0.6;
    document.querySelector("#trainer2").parentNode.style.filter = "blur(2px)";
    checkOpacity();
  });

  trainerDes2.addEventListener("mouseout", e => {
    document.querySelector("#trainer2").style.opacity = 0;
    document.querySelector("#trainer2").parentNode.style.filter = "blur(0px)";
    checkOpacity();
  });
  //description3
  trainerDes3.addEventListener("mouseover", () => {
    document.querySelector("#trainer3").style.opacity = 0.6;
    document.querySelector("#trainer3").parentNode.style.filter = "blur(2px)";
    checkOpacity();
  });

  trainerDes3.addEventListener("mouseout", e => {
    document.querySelector("#trainer3").style.opacity = 0;
    document.querySelector("#trainer3").parentNode.style.filter = "blur(0px)";
    checkOpacity();
  });
  //description4
  trainerDes4.addEventListener("mouseover", () => {
    document.querySelector("#trainer4").style.opacity = 0.6;
    document.querySelector("#trainer4").parentNode.style.filter = "blur(2px)";
    checkOpacity();
  });

  trainerDes4.addEventListener("mouseout", e => {
    document.querySelector("#trainer4").style.opacity = 0;
    document.querySelector("#trainer4").parentNode.style.filter = "blur(0px)";
    checkOpacity();
  });
}

//remove new line if screen is narrow in heading section home
const replaceHeadHome = () => {
  const headHome = document.querySelector("#home-header");
  if (window.innerWidth < 800) {
    headHome.innerHTML = "BUILD YOUR BODY";
    document.querySelector("#homeLink").style.display = "block";
  } else {
    headHome.innerHTML = "BUILD <br />YOUR BODY";

    document.querySelector("#homeLink").style.display = "none";
  }
};
replaceHeadHome();
window.addEventListener("resize", replaceHeadHome);

//MENU on mobile devices (phone and tablet)

function toggleMenu() {
  const line1 = document.querySelector(".section-home__line1");
  const line2 = document.querySelector(".section-home__line2");
  const line3 = document.querySelector(".section-home__line3");
  line1.classList.toggle("change");
  line2.classList.toggle("change");
  line3.classList.toggle("change");
  toggleMenuLinks();
}

const hamMenu = document.querySelector(".section-home__hamburger-menu");
hamMenu.addEventListener("click", toggleMenu);

function toggleMenuLinks() {
  if (document.querySelector(".section-home__menu").style.display !== "block") {
    document.querySelector(".section-home__menu").style.display = "block";
    document.querySelector(".section-home__menu").style.visibility = "visible";
  } else {
    document.querySelector(".section-home__menu").style.display = "none";
    document.querySelector(".section-home__menu").style.visibility = "hidden";
  }
}
window.addEventListener("resize", () => {
  if (window.innerWidth > 800) {
    document.querySelector(".section-home__menu").removeAttribute("style");
  }
});

//hide ham-menu when clicked on mobile

if (window.innerWidth < 800) {
  const hideWhenClick = () => {
    const a = document.querySelectorAll(".section-home__menu > a");
    a.forEach(element => {
      element.addEventListener("click", () => {
        document.querySelector(".section-home__hamburger-menu").click();
      });
    });
  };

  hideWhenClick();
}

//swap the price logo to a mobile version

const togglePriceLogo = () => {
  let headingPrice = document.querySelector(".section-price__heading");
  if (window.innerWidth > 800) {
    headingPrice.src = headerPrice;
  } else if (window.innerWidth < 800) {
    headingPrice.src = headerPriceMobile;
  }
};
togglePriceLogo();
window.addEventListener("resize", togglePriceLogo);

//toggle price cards content - ul has only one item on mobile and more on tablet and desktop
const makeOneItemList = () => {
  const boxes = document.querySelectorAll(".section-price__box > ul");
  boxes[0].innerHTML = "<li>No time limit</li>";
  boxes[1].innerHTML = "<li>Access to all facilities</li>";
  boxes[2].innerHTML = "<li>All classes free</li>";
  boxes[3].innerHTML = "<li>Personal Plan</li>";
};

const makeMultiItemList = () => {
  const boxes = document.querySelectorAll(".section-price__box > ul");
  boxes[0].innerHTML = "<li>No time limit</li>";
  boxes[1].innerHTML =
    "<li>No time limit</li><li>Access to all facilities</li>";
  boxes[2].innerHTML =
    "<li>No time limit</li><li>Access to all facilities</li><li>All classes free</li>";
  boxes[3].innerHTML =
    "<li>No time limit</li><li>Access to all facilities</li><li>All classes free</li><li>Personal Plan</li>";
};

const togglePriceCards = () => {
  if (window.innerWidth > 800) {
    makeMultiItemList();
  } else if (window.innerWidth < 800) {
    makeOneItemList();
  }
};
togglePriceCards();
window.addEventListener("resize", togglePriceCards);
