<template>
  <section class="aki-page">
    <aki-topbars @nav-click="$router.back()" nav=back fill>Banner</aki-topbars>
    <main class="aki-page-main" v-hljs>
      <h4>配合topbar使用</h4>
      <div class="demo">
        <section class="aki-page x">
          <aki-topbars>标题</aki-topbars>
          <div class="aki-page-main x">
            <aki-banner :visible="visible">
              <p>这是一个需要注意的提示信息</p>
              <aki-button slot="button" @click="visible=false">我知道了</aki-button>
            </aki-banner>
            <p>正文内容</p>
            <p>其他内容其他内容其他内容其他内容，其他内容其他内容其他内容其他内容。其他内容其他内容。</p>
            <p>其他内容其他内容其他内容其他内容，其他内容其他内容其他内容其他内容。其他内容其他内容。</p>
            <p>其他内容其他内容其他内容其他内容，其他内容其他内容其他内容其他内容。其他内容其他内容。</p>
            <p>其他内容其他内容其他内容其他内容，其他内容其他内容其他内容其他内容。其他内容其他内容。</p>
            <p>其他内容其他内容其他内容其他内容，其他内容其他内容其他内容其他内容。其他内容其他内容。</p>
            <p>其他内容其他内容其他内容其他内容，其他内容其他内容其他内容其他内容。其他内容其他内容。</p>
            <p>其他内容其他内容其他内容其他内容，其他内容其他内容其他内容其他内容。其他内容其他内容。</p>
          </div>
        </section>
      </div>
      <pre ref="code">
        <code class="html">
&lt;section class="aki-page">
  &lt;aki-topbars>标题&lt;/aki-topbars>
  &lt;div class="aki-page-main x">
    &lt;aki-banner :visible="visible">
      &lt;p>这是一个需要注意的提示信息&lt;/p>
      &lt;aki-button slot="button" @click="visible=false">我知道了&lt;/aki-button>
    &lt;/aki-banner>
    &lt;p>正文内容&lt;/p>
  &lt;/div>
&lt;/section>
        </code>
      </pre>
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
.aki-page.x{
  height: 540px;
  border: solid 1px black;
}
.aki-page-main.x{
  padding: 0;
}
</style>

