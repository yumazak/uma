<template>
    <div id="card-container-works">
        <div class="card">
            <section>
                <p class="card-title">works</p>
                <div class="card-content">
                    <div class="work"><img src="https://res.cloudinary.com/yuuma0317/image/upload/v1522481115/g_emotion.gif"/></div>
                    <div class="work" ><img src="http://res.cloudinary.com/yuuma0317/image/upload/v1522481670/g_way.gif"/></div>
                    <div class="work" ><img src="http://res.cloudinary.com/yuuma0317/image/upload/v1522481671/g_travel.gif"/></div>
                    <!-- <div class="work" ><img src="https://res.cloudinary.com/yuuma0317/image/upload/v1522479182/SYAKOTAN.webp"/></div> -->
                    <div class="work" ><img src="http://res.cloudinary.com/yuuma0317/image/upload/v1522481671/g_OISII.gif"/></div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
  name: 'works',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
#card-container-works {
  margin: 0 auto;
  padding: 20px 5px;
}
.card-content {
    flex-wrap: wrap;
 display: flex;
  justify-content: space-evenly;
}
.work {
     float: left;
    img {
        width: 300px;
        border-radius: 5px;
    }
}
</style>
