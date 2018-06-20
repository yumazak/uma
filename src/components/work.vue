<template>
    <div class="work">
        <img v-if="hasImgUrl" :src="imgUrl" :class="{fit: isNeedFit}" />
        <div v-if="!hasImgUrl" class="notHasImage">
            <img src="http://res.cloudinary.com/yuuma0317/image/upload/c_scale,w_100/v1529503129/github.png"/>
        </div>
        <div class="mask" :class="{pointer: hasWorksUrl}" v-on:click="open" ontouchstart="">
            <div class="caption">
                <p id="name" >{{ name }}</p>
                <p id="description" v-html="description"></p>
                <!-- <span v-on:click="changeTag(tag)" v-if="tags.length != 0" v-for="(tag, index) in tags" :key='index' id="tag">{{ tag }}</span> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Work',

  props: {
    'name': String,
    'description': String,
    'imgUrl': String,
    'worksUrl': String,
    'isNeedFit': String,
    'tags': Array
  },

  computed: {
    hasWorksUrl: function () { return this.worksUrl != null },
    hasImgUrl: function () { return this.imgUrl != null }
  },

  methods: {
    // worksUrlが空じゃなければ別ウインドウでリンクを開く
    open: function () { if (this.worksUrl != null) window.open(this.worksUrl) }
  }
}
</script>

<style lang="scss" scoped>
$length: 300px;
.work {
    width: $length;
    height: $length;
    float: left;
    overflow: hidden;
    position: relative;
    margin-bottom: 10px;
    span {
        white-space: pre-wrap;
    }

    img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }

    .notHasImage {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        background-color: rgba(0,0,0,0.6);/* マスクは半透明 */
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 100px;
            height: 100px;

        }
    }

    .fit {
        object-fit: contain;
        border-radius: 5px;
        background-color: rgba(0,0,0,0.6);/* マスクは半透明 */
    }

    .mask {
        width: $length;
        height: $length;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        background-color: rgba(0,0,0,0.6);/* マスクは半透明 */
        -webkit-transition: all 0.2s ease;
        transition:         all 0.2s ease;
        border-radius: 5px;
        cursor: default;

        &:hover {
            opacity: 1;
        }

        &:active{
            opacity: 1;
        }

        .caption {
            @import url(//fonts.googleapis.com/earlyaccess/notosansjp.css);
            padding: 15px;
            font-family: 'Noto Sans JP', sans-serif;
            font-weight: bold;

            #name {
                width: 100%;
                text-align: center;
                font-size: 20px;
            }

            #description{
                font-size: 15px;
            }
        }

        span {
            border: 3px white solid;
            border-radius: 5px;
            margin-left: 5px;
            padding: 5px;
        }
    }

    .pointer { cursor: pointer; }
}
</style>
