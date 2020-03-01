<template>
  <div id="app">
    <header class="header">
      <div class="header__bar">
        <div class="container">
          <div class="flex flex--between full-height">
            <logo-svg/>
            <navigation v-if="$route.meta.hasNav">
            </navigation>
          </div>
        </div>
      </div>
      <div class="container2">
        <div class="header__title flex col">
          <!-- <div class="col col--full"> -->
          <h1 v-html="pagetitle"></h1>
          <!-- </div> -->
        </div>
      </div>
    </header>
    <router-view></router-view>
    <footer>
      <div class="container">
        <div class="row">
          <div class="col col--2-3">
            <p class="copy">&copy; 2019 MontiEvents</p>
          </div>
          <div class="col col--1-3">
            <p class="copy"><router-link to="/privacy-policy">Privacy Policy</router-link></p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import LogoSvg from './components/LogoSvg'
import Navigation from './components/Navigation'

export default {
  name: 'App',
  data () {
    return {
      pagetitle: '<span>Monticello, Iowa</span> <br> Community Events Hub <br> Be in the Know'
    }
  },
  created () {
    (function (d, s, id) {
      var js
      var fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) return
      js = d.createElement(s)
      js.id = id
      // js.src = "//connect.facebook.net/de_DE/sdk.js";
      js.src = 'https://connect.facebook.net/de_DE/sdk/debug.js'
      fjs.parentNode.insertBefore(js, fjs)
    }(document, 'script', 'facebook-jssdk'))
    console.log('FB connect')
  },
  components: {
    LogoSvg,
    Navigation
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  font-family: 'Heebo', sans-serif;
  margin: 0;
}
img {
  max-width: 100%;
}
/* main {
  background: url(/static/images/monticello-sunrise.jpg) center center no-repeat;
} */
.header {
  background: url(/static/images/monticello-sunrise.jpg) center center no-repeat;
  background-size: cover;
  border-bottom: 2px solid #084CA1;
  display: flex;
  flex-direction: column;
  height: 400px;
  overflow: hidden;
  position: relative;
}
.header::before {
  content: "";
  background: rgba(255,255,255,.5);
  border-radius: 50%;
  display: block;
  height: 1200px;
  left: -600px;
  position: absolute;
  top: -800px;
  width: 1200px;
  z-index: 1;
}
.header__bar {
  /* background: #fff;
  border-bottom: 2px solid #084CA1; */
  /* height: 43px; */
  padding: 10px 0;
  position: relative;
  z-index: 1;
}
.header__title {
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
  z-index: 1;
}
.header__title span {
  color: #084CA1;
  font-size: .75em;
  text-shadow: none;
  /* font-style: italic;
  text-transform: uppercase; */
}
h1 {
  color: #ffffff;
  font-size: 36px;
  line-height: 1em;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, .25),
    -2px 2px 2px rgba(0, 0, 0, .25),
    2px -2px 2px rgba(0, 0, 0, .25),
    -2px -2px 2px rgba(0, 0, 0, .25);
  margin-bottom: 1vw;
  margin-top: 0;
}
h2 {
  color: #084CA1;
  font-size: 1.5em;
  line-height: .875em;
  text-transform: uppercase;
  margin: 0;
}
h3 {
  color: #B21E8E;
  font-size: 1em;
  line-height: .875em;
  /* text-transform: uppercase; */
  margin: 2vw 0 1vw;
}
p a {
  color: #084CA1;
  font-weight: 800;
  transition: 300ms;
}
p a:hover {
  color:  rgba(178,30,142);
}
.container {
  height: 100%;
  margin: auto;
  max-width: 1200px;
}
.container2 {
  height: 100%;
  /* margin: auto; */
  max-width: 1200px;
  z-index: 1;
}
@media screen and (max-width: 1220px) {
  .container, .container2 {
    padding-left: 1vw;
    padding-right: 1vw;
  }
}
.row {
  display: flex;
  flex-wrap: wrap;
}
.flex {
  display: flex;
  flex-wrap: wrap;
}
.flex--between {
  justify-content: space-between;
}
.full-height {
  height: 100%;
}
.flex--end {
  align-items: flex-end;
}
.col {
  flex: auto;
  padding-left: 10px;
  padding-right: 10px;
}
.col--full {
  flex: 0 0 100%;
}
.col--2-3 {
  flex: 0 0 66.7%;
}
.col--1-3 {
  flex: 1 1 33.3%;
}
.bkt {
  padding-bottom: 2vw;
  padding-top: 2vw;
}
.bg-gray {
  background: rgba(202, 204, 206, .5);
}
.groups {
  padding: 16px 10px;
}
.groups__ul {
  display: flex;
  flex-direction: column;
  padding: 0;
}
.groups__li {
  list-style-type: none;
  padding: 10px;
}
.cards__ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
  margin-top: 0;
  padding: 0;
}
.cards__li {
  display: flex;
  flex: 0 0 100%;
  list-style-type: none;
}
@media screen and (min-width: 768px) {
  .cards__li {
    display: flex;
    flex: 0 0 33.3%;
    list-style-type: none;
  }
}
@media screen and(min-width: 400px) and (max-width: 767px) {
  .cards__li {
    display: flex;
    flex: 0 0 50%;
    list-style-type: none;
  }
}
.cards__inner {
  background: rgba(202, 204, 206, .45);
  border-top: 2px solid #084CA1;
  box-shadow: 2px 2px rgba(0, 0, 0, .125);
  display: flex;
  flex: 1;
  flex-direction: column;
  line-height: 1.125em;
  margin: 10px;
  padding: 1.25em 1em;
}
.cards__imgWrap {
  text-align: center;
  margin: 0 auto .5em;
}
.cards__inner img {
  width: 140px;
}
.cards__inner h2 {
  font-size: 1.25em;
  font-weight: 900;
  text-align: center;
}
.cards__inner p {
  line-height: 1.5em;
}
.cards__links {
  margin-top: auto;
}
.cards__links p {
  margin-bottom: 0;
}
.cards__link {
  text-decoration: none;
  align-items: center;
  display: flex;
  margin-bottom: .25em;
}
.cards__link:last-of-type {
  margin-bottom: 0;
}
.cards__link svg {
  font-size: 1.25em;
  flex: 0 0 1.5em;
  margin-right: .25em;
}
footer {
  /* background: rgba(202, 204, 206, .5); */
  background: rgba(178,30,142,.5);
  border-top: 2px solid #084CA1;
  padding-bottom: 4vw;
  padding-top: 2vw;
}
.copy {
  font-size: .875em;
}
#about {
  background: rgba(202, 204, 206, .5);
}
#about .row {
  padding-bottom: 2vw;
  padding-top: 2vw;
}
@media screen and (max-width: 767px) {
  #calendar .col--2-3 {
    flex: 0 0 100%;
  }
  #groups {
    padding-top: 2vw;
  }
}
</style>
