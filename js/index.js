const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// GSAP
TweenMax.to("nav", 2.5, { ease: SlowMo.ease.config(0.1, 0.7, false), x: -182 });
TweenMax.to(".logo", 2.5, { ease: SlowMo.ease.config(0.1, 0.7, false), x: 698 });
TweenMax.to("#cta-img", 2.5, {rotation:360});

// drag
let dragged = document.getElementById("draggable");
document.addEventListener("drag", function( event ) {
}, false);

// dragstart
document.addEventListener("dragstart", function( event ) {
  dragged = event.target;
  event.target.style.opacity = .5;
}, false);

//dragend
document.addEventListener("dragend", function( event ) {
  event.target.style.opacity = "";
}, false);

// drag over
document.addEventListener("dragover", function( event ) {
  event.preventDefault();
}, false);

//dragenter
document.addEventListener("dragenter", function( event ) {
  if ( event.target.className == "dropzone" ) {
      event.target.style.background = "green";
  }
}, false);

//dragleave
document.addEventListener("dragleave", function( event ) {
  if ( event.target.className == "dropzone" ) {
      event.target.style.background = "";
  }
}, false);

// drop
document.addEventListener("drop", function( event ) {
  event.preventDefault();
  if ( event.target.className == "dropzone" ) {
      event.target.style.background = "";
      dragged.parentNode.removeChild( dragged );
      event.target.appendChild( dragged );
  }
}, false);

//focus
let formed = document.querySelector("form");
formed.addEventListener("focus", function( event ) {
  event.target.style.background = "lightgreen";    
}, true);

//blur
formed.addEventListener("blur", function( event ) {
  event.target.style.background = "";    
}, true);

//contextmenu
formed.addEventListener("contextmenu", () => {alert('User Name Here')});

//keydown
document.addEventListener('keydown', (e) => {
  const keyName = e.key;
  alert('keydown event\n\n' + 'key: ' + keyName);
})

// mouseenter / mouseleave

let heyT = document.querySelector('.logo');
heyT.addEventListener('mouseleave', (e) => {heyT.classList.toggle("heyToggle")})
heyT.addEventListener('mouseenter', (e) => {heyT.classList.toggle("heyToggle")})


//doubleclick
let dbl = document.querySelector('.middle-img')
dbl.addEventListener("dblclick", () => {alert('Stop Poking Me!!')});

//submit button 
btn2 = document.querySelector(".buttonSubmit")
btn2.addEventListener('click', () => {  //click
  alert('I will never submit!');
  });
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Start Nav
let newNav1 = document.createElement('a');
let text = document.createTextNode("Pics");
newNav1.appendChild(text);
document.querySelector("nav").appendChild(newNav1);

let newNav2 = document.createElement('a');
let text2 = document.createTextNode("Forum");
newNav2.appendChild(text2);
document.querySelector("nav").prepend(newNav2);


let navBar = document.querySelectorAll("a");
navBar.forEach((navColor) => {navColor.style.color = "green";})
navBar.forEach((weight) => {weight.style.fontWeight = "900"})
navBar[1].innerHTML = "Services";
navBar[2].innerHTML = "Product";
navBar[3].innerHTML = "Vision";
navBar[4].innerHTML = "Features";
navBar[5].innerHTML = "About";
navBar[6].innerHTML = "Contact";
// end nav

//start CTA

let headerImg = document.querySelector("#cta-img");
headerImg.setAttribute('src', siteContent['cta']['img-src']);

let headerOne = document.querySelector("h1");
headerOne.innerHTML = "DOM <br /> is Awesome!";
headerOne.style.width = "241px";
headerOne.style.height = "216px";
headerOne.style.color = "green";

let btn = document.querySelector("button")
btn.innerHTML = "Get Started";

//mouseover / click
btn.addEventListener('mouseover', () => {
  btn.classList.toggle("btnHover") //mouseover
  });
  // btn.addEventListener('mouseleave', () => {btn.classList.add("btnHover2")});
  btn.addEventListener('click', () => {  //click
  headerImg.classList.toggle('whatToggle')
  });
// end CTA

let middleImg = document.querySelector("#middle-img");
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let contentT = document.querySelectorAll("h4");
// contentT.forEach(function(h4color){
//   h4color.style.color = "green";
// });
contentT.forEach((h4Color) => {h4Color.style.color = "green"});

contentT[0].innerHTML = "Features";
contentT[1].innerHTML = "About";
contentT[2].innerHTML = "Services";
contentT[3].innerHTML = "Product";
contentT[4].innerHTML = "Vision";

let contentP = document.querySelectorAll("p");
contentP.forEach((bol) => {bol.style.fontWeight = "900";})
contentP[0].innerHTML = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
contentP[1].innerHTML = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
contentP[2].innerHTML = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
contentP[3].innerHTML = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
contentP[4].innerHTML = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
// end text content

contentT[5].innerHTML = "Contact";
contentP[5].innerHTML = "123 Way 456 Street <br /> Somewhere, USA" ;
contentP[6].innerHTML = "1 (888) 888-8888";
contentP[7].innerHTML = "sales@greatidea.io";
contentP[8].innerHTML = "Copyright Great Idea! 2018";

