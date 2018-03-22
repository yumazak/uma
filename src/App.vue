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
          <router-link to="/" exact><img src="./assets/logo.jpg" alt="" class="icon"></router-link>
          <router-link to="/accounts" exact><img src="./assets/accounts.svg" alt="" class="icon"></router-link>
          <img src="./assets/works.svg" alt="" class="icon">
          <img src="./assets/contact.svg" alt="" class="icon">
        </div>
      </header>
      <div id="card-container">
        <router-view/>
      </div>
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

#card-container {
  max-width: 460px;
  margin: 0 auto;
  padding: 20px 5px;
}
</style>
