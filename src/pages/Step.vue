<template>
  <section class="aki-page">
    <aki-topbar @nav-click="$router.back()" nav=back fill>Step</aki-topbar>
    <main class="aki-page-main" v-hljs>
      <h4>基础使用</h4>
      <div class="demo">
        <p style="width:60px"><aki-counter v-model="active" :max="4" :min="0"></aki-counter></p>
        <aki-steps :active="active">
          <aki-step></aki-step>
          <aki-step></aki-step>
          <aki-step></aki-step>
        </aki-steps>
      </div>
      <pre ref="code">
        <code class="html">
&lt;p style="width:60px">
  &lt;aki-counter v-model="active" :max="4" :min="0" />
&lt;/p>

&lt;aki-steps :active="active">
  &lt;aki-step>&lt;/aki-step>
  &lt;aki-step>&lt;/aki-step>
  &lt;aki-step>&lt;/aki-step>
&lt;/aki-steps>
        </code>
        <code class="javascript">
data() {
  return {
    active: 1
  }
}
        </code>
      </pre>
      <h4>带文字描述</h4>
      <div class="demo">
        <aki-steps :active="active">
          <aki-step>注册用户名</aki-step>
          <aki-step>设置密码</aki-step>
          <aki-step>完成注册</aki-step>
        </aki-steps>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-steps :active="active">
  &lt;aki-step>注册用户名&lt;/aki-step>
  &lt;aki-step>设置密码&lt;/aki-step>
  &lt;aki-step>完成注册&lt;/aki-step>
&lt;/aki-steps>
        </code>
      </pre>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      active: 1
    }
  }
}
</script>

