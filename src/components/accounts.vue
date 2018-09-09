<template>
  <div id="card-container">
    <div class="card">
        <section>
            <h1 class="card-title">accounts</h1>
            <p class="name">github</p>
            <p><a href="https://github.com/uma0317" target="brank">https://github.com/uma0317</a></p>
            <p class="name">Twitter</p>
            <p><a href="https://twitter.com/progorp" target="brank">https://twitter.com/progorp</a></p>
            <p class="name">Facebook</p>
            <p><a href="https://facebook.com/uma0317" target="brank">https://facebook.com/uma0317</a></p>
        </section>
    </div>
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

section {
  p {
    text-align: center;
  }
}
.title {
  margin-top: 0;
  border-bottom: 3px solid white;
}

</style>
