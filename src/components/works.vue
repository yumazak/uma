<template>
    <!-- <div id="card-container-works"> -->
    <div id="card-container-works">
        <div class="card">
            <section>
                <p class="card-title">works</p>
                <div class="card-content">
                    <Work name="Rust LineBot"
                          description="rust製の自作api wrapperを使ってline botを作りました。気温と天気表示、todoタスクを実装しました。herokuで動かしています。"
                          imgUrl="https://i.imgur.com/GdulzwG.jpg"
                          worksUrl="https://github.com/uma0317/line-messaging-api-rust"
                          :tags='["rust", "heroku"]'
                    />
                    <Work name="line-messaging-api-rust"
                          description="Rust製Line Messaging API Wrapper"
                          worksUrl="https://github.com/uma0317/line-messaging-api-rust"
                    />
                    <Work name="gradation"
                          description="ProcessingでVJぽい遊びができるツール。Arduinoと連携して遊ぶこともできる。"
                          imgUrl="http://res.cloudinary.com/yuuma0317/image/upload/c_scale,w_300/v1529495749/4m4vpxG_-_Imgur_1.gif"
                          worksUrl="https://github.com/uma0317/gradation"
                    />
                    <Work name="PWA時間割"
                          description="IndexedDBとPWAに触れてみたったので,Vueで作ってみました。状態管理はVuex. 完全にクライアントのみで動作します。"
                          imgUrl="https://i.imgur.com/jIASHjZ.png"
                          worksUrl="https://jikanwari.netlify.com/"
                          isNeedFit=true
                    />
                    <Work name="Kogera"
                          description="Angular製のTwitter Viewerです。公開していません。"
                          imgUrl="http://res.cloudinary.com/yuuma0317/image/upload/c_scale,w_300/v1529502695/kogera.png"
                          isNeedFit=true
                    />
                    <Work name="Uma-Web"
                          description="昔作ったポートフォリオサイトです。バックエンドはRailsでHeroku上で動かしています。"
                          imgUrl="http://res.cloudinary.com/yuuma0317/image/upload/c_scale,w_300/v1529502442/4ea2f64d-2764-4430-a848-0e4387d6d676.png"
                          worksUrl="http://uma-web.tk/"
                          isNeedFit=true
                    />
                    <Work name="Rust-BlockChain"
                          description="RustでBlockChainを実装してみた"
                          worksUrl="https://github.com/uma0317/Rust-BlockChain"
                    />
                    <Work name="BOM"
                          description="ボイラープレートをCLIで管理するシンプルなRust製ツールです。"
                          worksUrl="https://github.com/uma0317/bom"
                    />
                    <Work name="JATTS"
                          description="大学の課題でJavaで何か作れと言われて、セットした文字列を含むツイートをストリーミングするアプリを作りました。"
                          imgUrl="http://res.cloudinary.com/yuuma0317/image/upload/c_scale,w_300/v1529506741/128013a5-b2d2-4436-b144-f7e5361bbcd1.png"
                          isNeedFit="true"
                    />
                    <!-- <div class="work" ><img src="http://res.cloudinary.com/yuuma0317/image/upload/c_scale,w_300/v1529495749/4m4vpxG_-_Imgur_1.gif"/></div>
                    <div class="work" ><img src="http://res.cloudinary.com/yuuma0317/image/upload/v1522481671/g_travel.gif"/></div>
                    <div class="work" ><img src="http://res.cloudinary.com/yuuma0317/image/upload/v1522481671/g_OISII.gif"/></div> -->
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import Work from './work'

export default {
  name: 'works',
  data () {
    return {
      tag: 'all'
    }
  },
  components: {
    Work
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
