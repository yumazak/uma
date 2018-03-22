<template>
    <div class="card">
        <section>
            <p class="title">About me</p>
            <p class="content">
                Umaとはホッカイドウザイジュウのダイガクセイである。ホンミョウはヤマザキユウマ。<br/>
                シュミはバドミントン,ギター,エイゾウセイサク,プログラミング。<br/>
                JavaScript,Ruby,Rustがスキ。<br/>
                エンジニアをメザしている。<br/>
                ミヅライブンショウデスミマセン...
            </p>
            <!-- <p class="content">
                Umaとは北海道在住の大学生(2018年現在北海道北見工業大学在3回生)である。本名は山崎悠雅。<br/>
                趣味はバドミントン,ギター,映像制作,プログラミング。<br/>
                JavaScript(Node,React,Angular,Vue)や
                RubyOnRails,Rustが好き。
            </p> -->
        </section>
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

<style scoped lang="scss">
.card {
  background-color: #db4051;
  border: 3px solid white;
  border-radius: 3px;
  color: white;
  padding: 10px;
  transition: opacity 0.5s;
}
section {
}
.title {
  margin-top: 0;
  font-size: 25px;
  margin-bottom: 10px;
  border-bottom: 3px solid white;
}
.content {
  line-height: 2;
  letter-spacing: 1.1px;
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
