<template>
  <section class="aki-page">
    <aki-topbars @nav-click="$router.back()" nav=back fill>Tabs</aki-topbars>
    <main class="aki-page-main" v-hljs>
      <h3>基础使用</h3>
      <p>使用 v-model 绑定当前活动 tab 值</p>
      <p>切换 tab 将触发 toggle 事件，参数为活动 label 值</p>
      <div class="demo">
        <aki-tabs v-model="tab1" @toggle="$snackbar">
          <aki-tab label="tab1">标签一</aki-tab>
          <aki-tab label="tab2">标签二</aki-tab>
          <aki-tab label="tab3">标签三</aki-tab>
        </aki-tabs>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-tabs v-model="tab1" @toggle="$snackbar">
  &lt;aki-tab label="tab1">标签一&lt;/aki-tab>
  &lt;aki-tab label="tab2">标签二&lt;/aki-tab>
  &lt;aki-tab label="tab3">标签三&lt;/aki-tab>
&lt;/aki-tabs>
        </code>
      </pre>
      <h3>填充色</h3>
      <p>添加 fill 使用填充色</p>
      <div class="demo">
        <aki-tabs v-model="tab2" fill>
          <aki-tab label="tab1">标签一</aki-tab>
          <aki-tab label="tab2">标签二</aki-tab>
          <aki-tab label="tab3">标签三</aki-tab>
        </aki-tabs>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-tabs v-model="tab2">
  &lt;aki-tab label="tab1">标签一&lt;/aki-tab>
  &lt;aki-tab label="tab2">标签二&lt;/aki-tab>
  &lt;aki-tab label="tab3">标签三&lt;/aki-tab>
&lt;/aki-tabs>
        </code>
      </pre>
      <h3>徽章</h3>
      <p>设置 badge 来添加徽章</p>
      <div class="demo">
        <aki-tabs v-model="tab2">
          <aki-tab label="tab1" badge>标签一</aki-tab>
          <aki-tab label="tab2" badge=2>标签二</aki-tab>
          <aki-tab label="tab3">标签三</aki-tab>
        </aki-tabs>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-tabs v-model="tab2" fill>
  &lt;aki-tab label="tab1">标签一&lt;/aki-tab>
  &lt;aki-tab label="tab2">标签二&lt;/aki-tab>
  &lt;aki-tab label="tab3">标签三&lt;/aki-tab>
&lt;/aki-tabs>
        </code>
      </pre>
      <h3>多个 tab 页</h3>
      <p>添加 scroll 允许向右溢出</p>
      <div class="demo">
        <aki-tabs v-model="tab3" scroll>
          <aki-tab label="tab1">标签</aki-tab>
          <aki-tab label="tab2">标签二</aki-tab>
          <aki-tab label="tab3">大标签三</aki-tab>
          <aki-tab label="tab4">更长的标签四</aki-tab>
          <aki-tab label="tab5">标签五</aki-tab>
          <aki-tab label="tab6">标签</aki-tab>
        </aki-tabs>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-tabs v-model="tab3" scroll>
  &lt;aki-tab label="tab1">标签&lt;/aki-tab>
  &lt;aki-tab label="tab2">标签二&lt;/aki-tab>
  &lt;aki-tab label="tab3">大标签三&lt;/aki-tab>
  &lt;aki-tab label="tab4">更长的标签四&lt;/aki-tab>
  &lt;aki-tab label="tab5">标签五&lt;/aki-tab>
  &lt;aki-tab label="tab6">标签&lt;/aki-tab>
&lt;/aki-tabs>
        </code>
      </pre>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      tab1: 'tab1',
      tab2: 'tab1',
      tab3: 'tab1',
    }
  }
}
</script>

