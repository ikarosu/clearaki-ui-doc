<template>
  <section class="aki-page">
    <aki-topbar @nav-click="$router.back()" nav=back fill>Banner</aki-topbar>
    <main class="aki-page-main x" v-hljs>
      <aki-banner :visible="visible">
        <p>注意这个实际的例子，这个就是Banner</p>
        <aki-button slot="button" @click="visible=false">我知道了</aki-button>
      </aki-banner>
      <h4>基础使用</h4>
      <p>放在 .aki-page-main 里</p>
      <pre ref="code">
        <code class="html">
&lt;section class="aki-page">
  &lt;aki-topbar>标题&lt;/aki-topbar>
  &lt;div class="aki-page-main">

    &lt;aki-banner :visible="visible">
      &lt;p>注意这个实际的例子，这个就是Banner&lt;/p>
      &lt;aki-button slot="button" @click="visible=false">我知道了&lt;/aki-button>
    &lt;/aki-banner>
  
    &lt;p>正文内容&lt;/p>
  &lt;/div>
&lt;/section>
        </code>
        <code class="javascript">
data() {
  return {
    visible: true,
  }
}
        </code>
      </pre>
      <p>这些内容用于增加页面长度1</p>
      <p>这些内容用于增加页面长度2</p>
      <p>这些内容用于增加页面长度3</p>
      <p>这些内容用于增加页面长度4</p>
      <p>这些内容用于增加页面长度5</p>
      <p>这些内容用于增加页面长度6</p>
      <p>这些内容用于增加页面长度7</p>
      <p>这些内容用于增加页面长度8</p>
      <p>这些内容用于增加页面长度9</p>
      <p>这些内容用于增加页面长度10</p>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    }
  }
}
</script>

<style>
.aki-page-main.x{
  padding: 0;
}
.x > p {
  margin: 3rem 0;
}
.aki-banner{
  z-index: 99;
}
</style>

