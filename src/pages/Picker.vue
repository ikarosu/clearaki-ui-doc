<template>
  <section class="aki-page">
    <aki-topbars @nav-click="$router.back()" nav=back fill>Picker</aki-topbars>
    <main class="aki-page-main" v-hljs>
      <h3>使用</h3>
      <p>绑定 v-model 来获取当前值</p>
      <p>通过给 v-model 设置为 '' 空字符串，使得默认不选中任何值</p>
      <p>通过 change 事件监听值变化</p>
      <p>拖动效果只在移动端有效</p>
      <p>允许点击切换</p>
      <div class="demo">
        <aki-picker v-model="picker1" @change="handleChange">
          <option value="1">第一项</option>
          <option value="2">第二项</option>
          <option value="3">第三项</option>
          <option value="4">第四项</option>
        </aki-picker>
        <p>picker1: {{picker1}}</p>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-picker v-model="picker1">
  &lt;option value="1">第一项&lt;/option>
  &lt;option value="2">第二项&lt;/option>
  &lt;option value="3">第三项&lt;/option>
  &lt;option value="4">第四项&lt;/option>
&lt;/aki-picker>
        </code>
        <code class="javascript">
export default {
  data() {
    return {
      picker1: '',
    }
  },
  methods: {
    handleChange(value) {
      this.$snackbar(value)
    }
  }
}
        </code>
      </pre>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      picker1: '',
    }
  },
  methods: {
    handleChange(value) {
      this.$snackbar(value)
    }
  }
}
</script>

