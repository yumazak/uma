<template>
    <div class="card">
        <section>
            <h1 class="title">accounts</h1>
            <p class="name">github</p>
            <p><a href="https://github.com/uma0317" target="brank">https://github.com/uma0317</a></p>
        </section>
    </div>
</template>

<script>
export default {
  name: 'accounts',
  data () {
    return {}
  }
}
</script>
<style scoped lang="scss">
a {
  color: #b7e6ff;
}
.card {
  background-color: #db4051;
  border: 3px solid white;
  border-radius: 3px;
  color: white;
  padding: 10px;
  transition: opacity 0.5s;
}
section {
  p {
    text-align: center;
  }
}
.title {
  margin-top: 0;
  border-bottom: 3px solid white;
}
.card {
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
</style>
