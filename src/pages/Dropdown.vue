<template>
  <section class="aki-page">
    <aki-topbar @nav-click="$router.back()" nav=back fill>dropdown</aki-topbar>
    <main class="aki-page-main" v-hljs>
      <h3>基础</h3>
      <p>使用 v-dropdown 指令，用于任何元素</p>
      <div class="demo">
        <section>
          <h4 @click="visible=!visible">这是标题，点击可展开 <aki-icon icon="chevron-down" /></h4>
          <div v-dropdown="visible">
            <p v-for="i in 10" :key="i" v-text="i"></p>
            <div style="height:268px"></div>
          </div>
        </section>
      </div>
      <pre ref="code">
        <code class="html">
&lt;section>
  &lt;h4 @click="visible=!visible">这是标题，点击可展开 &lt;aki-icon icon="chevron-down" />&lt;/h4>
  &lt;div v-dropdown="visible">
    &lt;p v-for="i in 10" :key="i" v-text="i">&lt;/p>
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
      visible: false
    }
  },
  methods: {
    setPosition(p) {
      this.fixed = p
    }
  }
}
</script>
