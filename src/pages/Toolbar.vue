<template>
  <section class="aki-page">
    <aki-topbars @nav-click="$router.back()" nav=back fill>Toolbar</aki-topbars>
    <main class="aki-page-main" v-hljs>
      <h3>基础使用</h3>
      <p>使用 v-model 绑定当前活动 toolbar 值</p>
      <p>切换 toolbar 将触发 toggle 事件，参数为活动 label 值</p>
      <div class="demo">
        <aki-toolbars v-model="toolbar1" @toggle="$snackbar">
          <aki-toolbar label="主页">图标1</aki-toolbar>
          <aki-toolbar label="发现">图标2</aki-toolbar>
          <aki-toolbar label="我的">图标3</aki-toolbar>
        </aki-toolbars>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-toolbars v-model="toolbar1" @toggle="$snackbar">
  &lt;aki-toolbar label="主页">图标1&lt;/aki-toolbar>
  &lt;aki-toolbar label="发现">图标2&lt;/aki-toolbar>
  &lt;aki-toolbar label="我的">图标3&lt;/aki-toolbar>
&lt;/aki-toolbars>
        </code>
      </pre>
      <h3>填充色</h3>
      <p>设置 fill 使用填充</p>
      <div class="demo">
        <aki-toolbars v-model="toolbar2" fill>
          <aki-toolbar label="主页">图标1</aki-toolbar>
          <aki-toolbar label="发现">图标2</aki-toolbar>
          <aki-toolbar label="我的">图标3</aki-toolbar>
        </aki-toolbars>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-toolbars v-model="toolbar2" fill>
  &lt;aki-toolbar label="主页">图标1&lt;/aki-toolbar>
  &lt;aki-toolbar label="发现">图标2&lt;/aki-toolbar>
  &lt;aki-toolbar label="我的">图标3&lt;/aki-toolbar>
&lt;/aki-toolbars>
        </code>
      </pre>
      <h3>没有图标</h3>
      <p>需要 fixText 固定文字</p>
      <div class="demo">
        <aki-toolbars v-model="toolbar3" fixText>
          <aki-toolbar label="主页"></aki-toolbar>
          <aki-toolbar label="发现"></aki-toolbar>
          <aki-toolbar label="我的"></aki-toolbar>
        </aki-toolbars>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-toolbars v-model="toolbar3" fixText>
  &lt;aki-toolbar label="主页">&lt;/aki-toolbar>
  &lt;aki-toolbar label="发现">&lt;/aki-toolbar>
  &lt;aki-toolbar label="我的">&lt;/aki-toolbar>
&lt;/aki-toolbars>
        </code>
      </pre>
      <h3>徽章</h3>
      <p>设置 badge 来添加徽章</p>
      <div class="demo">
        <aki-toolbars v-model="toolbar4" fixText>
          <aki-toolbar label="主页" badge></aki-toolbar>
          <aki-toolbar label="发现" badge="23"></aki-toolbar>
          <aki-toolbar label="我的" badge="99+"></aki-toolbar>
        </aki-toolbars>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-toolbars v-model="toolbar4" fixText>
  &lt;aki-toolbar label="主页" badge>&lt;/aki-toolbar>
  &lt;aki-toolbar label="发现" badge="23">&lt;/aki-toolbar>
  &lt;aki-toolbar label="我的" badge="99+">&lt;/aki-toolbar>
&lt;/aki-toolbars>
        </code>
      </pre>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      toolbar1: '主页',
      toolbar2: '主页',
      toolbar3: '主页',
      toolbar4: '主页',
    }
  }
}
</script>
