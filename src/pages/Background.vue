<template>
  <aki-page-background title="可选标题" :opened.sync="bgOpen">
    <aki-topbar @nav-click="$router.back()" nav="back" fill slot="topbar">Background<aki-icon @click="bgOpen=!bgOpen" slot="action" icon="menu"/></aki-topbar>
    <div class="bg" slot="background">
      <p>content1</p>
      <p>content2</p>
      <p>content3</p>
    </div>
    <main v-hljs>
      <h3>基础使用</h3>
      <pre ref="code">
        <code v-pre class="html">
&lt;aki-page-background
  title="可选标题"
  :opened.sync="bgOpen"
>
  &lt;aki-topbar
    slot="topbar"
    nav="back"
    fill
    @nav-click="$router.back()"
  >
    Background
    &lt;aki-icon
      slot="action"
      icon="menu"
      @click="bgOpen=!bgOpen"
    />
  &lt;/aki-topbar>
  &lt;div
    slot="background"
    class="bg"
  >
    &lt;p>content1&lt;/p>
    &lt;p>content2&lt;/p>
    &lt;p>content3&lt;/p>
  &lt;/div>
  &lt;main>
    ...
  &lt;/main>
&lt;/aki-page-background>
        </code>
        <code class="javascript">
data() {
  return {
    bgOpen: false
  }
}
        </code>
      </pre>
    </main>
  </aki-page-background>
</template>

<script>
export default {
  data() {
    return {
      bgOpen: false
    }
  }
}
</script>

<style scoped>
main{
  padding: 12px;
}
.bg{
  padding: 0 12px;
}
</style>
