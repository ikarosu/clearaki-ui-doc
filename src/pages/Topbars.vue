<template>
  <section class="aki-page">
    <aki-topbars @nav-click="$router.back()" nav=back fill>Topbars</aki-topbars>
    <main class="aki-page-main" v-hljs>
      <h3>基础使用</h3>
      <div class="demo"><aki-topbars>基础使用</aki-topbars></div>
      <pre ref="code">
        <code class="html">
&lt;aki-topbars&gt;标题&lt;/aki-topbars&gt;
        </code>
      </pre>
      <h3>填充色</h3>
      <div class="demo"><aki-topbars fill>填充色</aki-topbars></div>
      <pre ref="code">
        <code class="html">
&lt;aki-topbars fill&gt;标题&lt;/aki-topbars&gt;
        </code>
      </pre>
      <h3>快捷导航</h3>
      <p>提供三种常用的导航，通过nav属性来设置</p>
      <h4>菜单-menu</h4>
      <div class="demo"><aki-topbars nav="menu">菜单</aki-topbars></div>
      <h4>返回-back</h4>
      <div class="demo"><aki-topbars nav="back">返回</aki-topbars></div>
      <h4>关闭-close</h4>
      <div class="demo"><aki-topbars nav="close" fill>关闭</aki-topbars></div>
      <pre ref="code">
        <code class="html">
&lt;aki-topbars nav="menu"&gt;标题&lt;/aki-topbars&gt;
        </code>
      </pre>
      <p>当配置了快捷导航时，可以设置点击事件</p>
      <div class="demo"><aki-topbars @nav-click="$snackbar('点击了导航')" nav="menu">点击事件</aki-topbars></div>
      <pre ref="code">
        <code class="html">
&lt;aki-topbars @nav-click="$snackbar('点击了导航')" nav="menu" fill&gt;标题&lt;/aki-topbars&gt;
        </code>
      </pre>
      <p>有时候你可能会需要当前的nav状态，该事件的参数就是nav的值</p>
      <div class="demo"><aki-topbars @nav-click="handle" nav="menu">参数</aki-topbars></div>
      <pre ref="code">
        <code class="html">
&lt;aki-topbars @nav-click="handle" nav="menu" fill&gt;标题&lt;/aki-topbars&gt;
        </code>
        <code class="javascript">
handle(nav) {
  this.$snackbar(nav)
}
        </code>
      </pre>
      <h4>自定义导航</h4>
      <p>你也可以自定义导航，通过slot="nav"</p>
      <div class="demo"><aki-topbars>
        <span slot="nav">菜单</span>
        搜索
      </aki-topbars></div>
      <pre ref="code">
        <code class="html">
&lt;aki-topbars&gt;&lt;span slot="nav"&gt;菜单&lt;/span&gt;搜索&lt;/aki-topbars&gt;
        </code>
      </pre>
      <h4>自定义action</h4>
      <p>通过slot="action"来设置右侧action位置</p>
      <div class="demo"><aki-topbars>标题<svg width="24" fill="currentColor" viewBox="0 0 1024 1024" slot="action"><path d="M469.333333 170.666667h128v128h-128V170.666667z m0 298.666666h128v128h-128v-128z m0 298.666667h128v128h-128v-128z"></path></svg></aki-topbars></div>
      <pre ref="code">
        <code class="html">
&lt;aki-topbars&gt;标题&lt;svg slot="action"&gt;...&lt;/svg&gt;&lt;/aki-topbars&gt;
        </code>
      </pre>
      <p>多个action</p>
      <div class="demo"><aki-topbars>标题<svg width="24" fill="currentColor" viewBox="0 0 1024 1024" slot="action"><path d="M469.333333 768c-166.4 0-298.666667-132.266667-298.666666-298.666667s132.266667-298.666667 298.666666-298.666666 298.666667 132.266667 298.666667 298.666666-132.266667 298.666667-298.666667 298.666667z m0-85.333333c119.466667 0 213.333333-93.866667 213.333334-213.333334s-93.866667-213.333333-213.333334-213.333333-213.333333 93.866667-213.333333 213.333333 93.866667 213.333333 213.333333 213.333334z m251.733334 0l119.466666 119.466666-59.733333 59.733334-119.466667-119.466667 59.733334-59.733333z"></path></svg><svg width="24" fill="currentColor" viewBox="0 0 1024 1024" slot="action"><path d="M469.333333 170.666667h128v128h-128V170.666667z m0 298.666666h128v128h-128v-128z m0 298.666667h128v128h-128v-128z"></path></svg></aki-topbars></div>
      <pre ref="code">
        <code class="html">
&lt;aki-topbars&gt;标题&lt;svg slot="action"&gt;...&lt;/svg&gt;&lt;svg slot="action"&gt;...&lt;/svg&gt;&lt;/aki-topbars&gt;
        </code>
      </pre>
    </main>
  </section>
</template>

<script>
export default {
  methods: {
    handle(nav) {
      this.$snackbar(nav)
    }
  }
}
</script>

