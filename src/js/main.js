import styles from "../sass/style.scss";
import img from "../assets/logo_home.png";
import star from "../assets/star_home.svg";
import man from "../assets/man_home.png";
import scroll from "../assets/chevron_home.svg";
import headingAbout from "../assets/heading_about.png";
import pavanam from "../assets/fonts/Pavanam.ttf";
import paytone from "../assets/fonts/PaytoneOne.ttf";
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

document.head.appendChild(newStyle);

//images HOME SECTION
const i = document.getElementsByClassName("section-home__star");
const c = document.createElement("img");
c.src = star;
c.alt = "start background image";
c.className = "section-home__star";
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
const scrollHomePageInd = document.createElement("img");
scrollHomePageInd.src = scroll;
scrollHomePageInd.alt = "scroll arrow";
scrollHomePageInd.className = "section-home__scroll";
homeSection[0].appendChild(scrollHomePageInd);

// images ABOUT SEC
const secAbout = document.getElementsByClassName("section-about");
const imgHead = document.createElement("img");
imgHead.src = headingAbout;
imgHead.alt = "heading picture";
imgHead.className = "section-about__heading";

// //images trainers SECTION
// const secTrainers = document.getElementsByClassName('section-trainers')
// secTrainers[0].style.backgroundImage = `url(${backgroundTrainers})`;

//text content for about sec
const parCont = document.createElement("p");
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
