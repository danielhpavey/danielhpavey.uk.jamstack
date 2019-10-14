<template>
  <div class="layout">
    <header class="header">
      <h1>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </h1>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
    <footer>
        <b>42</b>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>

/* Start Reset */
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default padding */
ul[class],
ol[class] {
  padding: 0;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

/* Remove list styles on ul, ol elements with a class attribute */
ul[class],
ol[class] {
  list-style: none;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img {
  max-width: 100%;
  display: block;
}

/* Natural flow and rhythm in articles by default */
article > * + * {
  margin-top: 1em;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* End Reset */
@font-face {
	font-family: system-ui;
	font-style: normal;
	font-weight: 300;
	src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Segoe UI Light"), local("Ubuntu Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
}

@font-face {
	font-family: system-ui;
	font-style: italic;
	font-weight: 300;
	src: local(".SFNSText-LightItalic"), local(".HelveticaNeueDeskInterface-Italic"), local(".LucidaGrandeUI"), local("Segoe UI Light Italic"), local("Ubuntu Light Italic"), local("Roboto-LightItalic"), local("DroidSans"), local("Tahoma");
}

@font-face {
	font-family: system-ui;
	font-style: normal;
	font-weight: 400;
	src: local(".SFNSText-Regular"), local(".HelveticaNeueDeskInterface-Regular"), local(".LucidaGrandeUI"), local("Segoe UI"), local("Ubuntu"), local("Roboto-Regular"), local("DroidSans"), local("Tahoma");
}

@font-face {
	font-family: system-ui;
	font-style: italic;
	font-weight: 400;
	src: local(".SFNSText-Italic"), local(".HelveticaNeueDeskInterface-Italic"), local(".LucidaGrandeUI"), local("Segoe UI Italic"), local("Ubuntu Italic"), local("Roboto-Italic"), local("DroidSans"), local("Tahoma");
}

@font-face {
	font-family: system-ui;
	font-style: normal;
	font-weight: 500;
	src: local(".SFNSText-Medium"), local(".HelveticaNeueDeskInterface-MediumP4"), local(".LucidaGrandeUI"), local("Segoe UI Semibold"), local("Ubuntu Medium"), local("Roboto-Medium"), local("DroidSans-Bold"), local("Tahoma Bold");
}

@font-face {
	font-family: system-ui;
	font-style: italic;
	font-weight: 500;
	src: local(".SFNSText-MediumItalic"), local(".HelveticaNeueDeskInterface-MediumItalicP4"), local(".LucidaGrandeUI"), local("Segoe UI Semibold Italic"), local("Ubuntu Medium Italic"), local("Roboto-MediumItalic"), local("DroidSans-Bold"), local("Tahoma Bold");
}

@font-face {
	font-family: system-ui;
	font-style: normal;
	font-weight: 700;
	src: local(".SFNSText-Bold"), local(".HelveticaNeueDeskInterface-Bold"), local(".LucidaGrandeUI"), local("Segoe UI Bold"), local("Ubuntu Bold"), local("Roboto-Bold"), local("DroidSans-Bold"), local("Tahoma Bold");
}

@font-face {
	font-family: system-ui;
	font-style: italic;
	font-weight: 700;
	src: local(".SFNSText-BoldItalic"), local(".HelveticaNeueDeskInterface-BoldItalic"), local(".LucidaGrandeUI"), local("Segoe UI Bold Italic"), local("Ubuntu Bold Italic"), local("Roboto-BoldItalic"), local("DroidSans-Bold"), local("Tahoma Bold");
}
body {
    --color-base: #646464;
    --color-green: #003300;
    --color-red: #ca1a09;
    --color-white: #ffffff;
    --margin: 1.6rem;
  font-family: system-ui;
  color:  var(--color-base);
  font-size: 22px;
  font-weight:300;
  line-height:1.6em;
  margin:0;
  padding:0;
  line-height: 1.5em;
}

h1, .blog-title {
    font-weight:400;
    line-height:1.2em;
    margin-bottom: var(--margin);
}

p, h2, blockquot, ul {
    margin-bottom: var(--margin);
}

.item, header{
    margin-bottom: calc(var(--margin) *  2);
}

h1 a {
    text-decoration: none;
    color: var(--color-base);
}

a:hover, a:focus {
    text-decoration: underline;
}

h2 {
    font-size:1.4em;
    line-height:1.6em;
}

.layout {
  max-width:36em;
  margin: 0 auto;
  padding: 0 2rem;
}

.header {
  text-align: right;
}

.nav__link {
  margin-left: 20px;
}

a{
    position:relative;
    color: var(--color-base);
    text-decoration:none;
    transition: color, 1s, ease;
    display:inline-block;
}

a:after{
    transition: all, 1s, ease;
    content:" ";
    position:absolute;
    width:calc( 100% + 12px);
    height:0;
    background:lighten( $black, 50% );
    border-radius:3px;
    left:-6px;
    bottom:-3px;
    z-index:-1;
}

a:before{
    transition: all, 1s, ease;
    content:" ";
    position:absolute;
    width:0;
    height:3px;
    background:red;
    left:-6px;
    bottom:-3px;
}

.blog-date{
    font-size:0.9rem;
}

blockquote {
    border-left: 10px solid var(--color-green);
    padding: 0 0 0 30px;
    margin-left: 0;
}

footer {
    background: url(https://www.danielhpavey.uk/images/x-wing-whiteout.png) #003300 no-repeat;
    height: 220px;
    position: relative;
    margin-left: calc(50% - 50vw);
    margin-right: calc(50% - 50vw);
    width: 100vw;
}

footer b {
    color: white;
    display: block;
    font-size: 10rem;
    float: right;
    transform: rotate(10deg);
    -ms-transform: rotate(10deg);
    -webkit-transform: rotate(10deg);
    -o-transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    opacity: 0.3;
}

</style>
