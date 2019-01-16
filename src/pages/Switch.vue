<template>
  <section class="aki-page">
    <aki-topbar @nav-click="$router.back()" nav=back fill>Switch</aki-topbar>
    <main class="aki-page-main" v-hljs>
      <h4>基础使用</h4>
      <div class="demo">
        <aki-switch v-model="state"></aki-switch>
        <p>{{ state }}</p>
      </div>
      <pre ref="code">
        <code v-pre class="html">
&lt;aki-switch v-model="state">&lt;/aki-switch>
&lt;p>{{ state }}&lt;/p>
        </code>
        <code class="javascript">
data() {
  return {
    state: false
  }
}
        </code>
      </pre>
      <h4>监听事件</h4>
      <div class="demo">
        <aki-switch v-model="state2" @change="$snackbar"></aki-switch>
      </div>
      <pre ref="code">
        <code v-pre class="html">
&lt;aki-switch v-model="state2" @change="$snackbar">&lt;/aki-switch>
        </code>
      </pre>
      <h4>开关名称</h4>
      <div class="demo">
        <aki-switch v-model="state3">
          是否记住密码
        </aki-switch>
      </div>
      <pre ref="code">
        <code v-pre class="html">
&lt;aki-switch v-model="state3">是否记住密码&lt;/aki-switch>
        </code>
      </pre>
      <h4>多状态</h4>
      <div class="demo">
        <aki-switch v-model="state4">
          只显示有内容
          <template slot="helper">显示全部</template>
        </aki-switch>
      </div>
      <pre ref="code">
        <code v-pre class="html">
&lt;aki-switch v-model="state4">只显示有内容&lt;template slot="helper">显示全部&lt;/template>&lt;/aki-switch>
        </code>
      </pre>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      state: false,
      state2: false,
      state3: false,
      state4: false,
    }
  }
}
</script>

