<template>
    <div id="card-container-works">
        <div class="card">
            <section>
                <p class="card-title">works</p>
                <div class="card-content">
                    <div class="work"><img src="https://res.cloudinary.com/yuuma0317/image/upload/v1522477461/emotion.webp"/></div>
                    <div class="work" ><img src="http://res.cloudinary.com/yuuma0317/image/upload/v1522477917/way.webp"/></div>
                    <div class="work" ><img src="https://res.cloudinary.com/yuuma0317/image/upload/v1522478895/travel.webp"/></div>
                    <div class="work" ><img src="https://res.cloudinary.com/yuuma0317/image/upload/v1522479182/SYAKOTAN.webp"/></div>
                    <div class="work" ><img src="https://res.cloudinary.com/yuuma0317/image/upload/v1522479637/OISII.webp"/></div>
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
