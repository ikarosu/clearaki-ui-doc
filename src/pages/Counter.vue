<template>
  <section class="aki-page">
    <aki-topbar @nav-click="$router.back()" nav=back fill>Counter</aki-topbar>
    <main class="aki-page-main" v-hljs>
      <h3>基础使用</h3>
      <p>必须提供 v-model 才能正常工作</p>
      <div class="demo">
        <aki-counter v-model="count1"></aki-counter>
        <p v-text="count1"></p>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-counter v-model="count1">&lt;/aki-counter>
&lt;p v-text="count1">&lt;/p>
        </code>
      </pre>
      <h3>change 事件</h3>
      <p>接收的参数为 value 值</p>
      <div class="demo">
        <aki-counter v-model="count2" @change="change"></aki-counter>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-counter v-model="count2" @change="change">&lt;/aki-counter>
        </code>
        <code class="javascript">
change(value) {
  this.$snackbar(value)
}
        </code>
      </pre>
      <h3>配置</h3>
      <h4>step 步长</h4>
      <div class="demo">
        <aki-counter v-model="count3" :step="3"></aki-counter>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-counter v-model="count3" :step="3">&lt;/aki-counter>
        </code>
      </pre>
      <h4>min 与 max 设置边界值</h4>
      <div class="demo">
        <aki-counter v-model="count4" :min="-2" :max="5"></aki-counter>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-counter v-model="count4" :min="-2" :max="5">&lt;/aki-counter>
        </code>
      </pre>
      <h3>颜色</h3>
      <h4>fill-color 配置图标颜色，disabled-color 配置边界值（不可点击状态）的颜色</h4>
      <div class="demo">
        <aki-counter v-model="count4" :min="-2" :max="5" fill-color="pink" disabled-color="red"></aki-counter>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-counter v-model="count4" :min="-2" :max="5" fill-color="pink" disabled-color="red">&lt;/aki-counter>
        </code>
      </pre>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0,
    }
  },
  methods: {
    change(value) {
      this.$snackbar(value.toString())
    }
  }
}
</script>
