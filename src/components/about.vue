<template>
    <div id="card-container">
        <div class="card">
            <section>
                <p class="card-title">About me</p>
                <p class="card-content">
                    Umaとはホッカイドウザイジュウのダイガクセイである。ホンミョウはヤマザキユウマ。<br/>
                    シュミはバドミントン,ギター,エイゾウセイサク,プログラミング。<br/>
                    JavaScript,Ruby,Rustがスキ。<br/>
                    エンジニアをメザしている。<br/>
                    ナニかあれば<a href="https://twitter.com/progorp" target="brank">Twitter</a>にDMください。<br/>
                    ヨミにくい。
                </p>
            </section>
            <section>
                <p class="card-title">Carrer</p>
                <div class="card-content">
                    <p class="subtitle">Internship</p>
                    18/8 Amazon Web Services
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {}
  }
}
</script>

<style scoped>
.subtitle {
    font-size: 20px;
    margin: 0px;
}
</style>
