<template>
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div> -->
  <div id ="app">
    <div class="main">
      <p id="my-name">yuma yamazaki</p>
      <header>
        <div id="header-container">
          <router-link to="/" active-class="active" exact><img src="./assets/logo.jpg" alt="" class="icon"></router-link>
          <router-link to="/accounts" active-class="active" exact><img src="./assets/accounts.svg" alt="" class="icon"></router-link>
          <router-link to="/works" active-class="active" exact><img src="./assets/works.svg" alt="" class="icon"></router-link>
          <router-link to="/contact" active-class="active" exact><img src="./assets/contact.svg" alt="" class="icon"></router-link>
        </div>
      </header>
      <router-view/>
    </div>
    <footer></footer>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@font-face {
  font-family: KodomoRounded;
  font-style: Regular;
  src: url("/fonts/KodomoRounded.otf");
}
body {
  padding: 0;
  margin: 0;
  background-color: #b53543;
  font-family: "Nico Moji";
}
.main {
  min-height: calc(100vh - 60px);
}
#my-name {
  color: white;
  font-size: 30px;
  text-align: center;
  margin: 0;
  padding: 30px;
}
header {
  background-color: #f5475a;
  border-bottom: 3px solid white;
  border-top: 3px solid white;
}
footer {
  background-color: #361014;
  height: 60px;
}
#header-container {
  max-width: 460px;
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  justify-content: space-evenly;
}

.icon {
  $l: 50px;
  height: $l;
  width: $l;
  border-radius: 50%;
  border: 3px solid white;
  background-color: #56b584;
  filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.6));
}

@keyframes icon-fadeIn {
  0% {
    opacity: 1;

  }
  100% {
    opacity: 0.5;

  }
}

@-webkit-keyframes icon-fadeIn {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}

#card-container {
  max-width: 460px;
  margin: 0 auto;
  padding: 20px 5px;
}
.card {
  background-color: #db4051;
  border: 3px solid white;
  border-radius: 3px;
  color: white;
  padding: 10px;
  animation: fadeIn 0.5s ease 0s 1 normal;
  -webkit-animation: fadeIn 0.5s ease 0s 1 normal;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.active {
  opacity: 0.5;
  animation: icon-fadeIn 0.5s ease 0s 1 normal;
  -webkit-animation: icon-fadeIn 0.5s ease 0s 1 normal;
}

.card-title {
  margin-top: 0;
  font-size: 25px;
  margin-bottom: 10px;
  border-bottom: 3px solid white;
  text-align: center;
}
.card-content {
  font-size: 16px;
  line-height: 2;
  letter-spacing: 1.1px;
}
</style>
