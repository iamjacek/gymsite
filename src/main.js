import style from './style.scss'
import img from './assets/logo_home.png'
import star from '/assets/star_home.svg'
import man from '/assets/man_home.png'
import scroll from '/assets/chevron_home.svg'
// import fontPavanam from '/assets/fonts/Pavanam.ttf'
// import fontPaytoneOne from '/assets/fonts/PaytoneOne.ttf'
import { homedir } from 'os';


//add fonts
// var link = document.createElement('link');
// link.setAttribute('rel', 'stylesheet');
// link.setAttribute('type', 'text/css');
// link.setAttribute('href', `${fontPavanam}`);
// document.head.appendChild(link);

// var link2 = document.createElement('link');
// link2.setAttribute('rel', 'stylesheet');
// link2.setAttribute('type', 'text/css');
// link2.setAttribute('href', fontPaytoneOne);
// document.head.appendChild(link2);

 // The new stylesheet and new @font-face rule:
//  var newFontStyleSheet = document.createElement("style");
//  newFontStyleSheet.textContent = `
//  @font-face {
//     font-family: 'Pavanam';
//     font-style: normal;
//     font-weight: 400;
//     src:
//       url('${fontPavanam}') format('ttf')
//   }
//   @font-face {
//     font-family: 'PaytoneOne';
//     font-style: normal;
//     font-weight: 400;
//     src:
//       url('${fontPaytoneOne}') format('ttf')
//   }
//  `;

//  document.head.appendChild(newFontStyleSheet);


//images HOME SECTION
const i = document.getElementsByClassName('section-home__star')
const c = document.createElement('img')
c.src = star
c.alt = 'start background image'
c.className = 'section-home__star'
i[0].appendChild(c)


const b = document.createElement('img')
b.src = man
b.alt = 'athlete picture'
b.className = 'section-home__man-picture'
i[0].appendChild(b)


const h = document.getElementsByClassName('section-home__nav')
const a = document.createElement('img')
a.src = img
a.alt = 'logo'
a.className = 'section-home__logo'
h[0].insertBefore(a, h[0].childNodes[0])

const homeSection = document.getElementsByClassName('section-home')
const scrollHomePageInd = document.createElement('img')
scrollHomePageInd.src = scroll
scrollHomePageInd.alt = 'scroll arrow'
scrollHomePageInd.className = 'section-home__scroll'
homeSection[0].appendChild(scrollHomePageInd)


