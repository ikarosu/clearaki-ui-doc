<template>
  <section class="aki-page">
    <aki-topbar @nav-click="$router.back()" nav=back fill>Dialog</aki-topbar>
    <main class="aki-page-main" v-hljs>
      <h3>基础使用</h3>
      <p>需要把组件放在当前页面的最外层，并以此作为层级关系</p>
      <p>使用 slot=header 来设置弹窗标题，可以通过不同的 h* 来控制字体大小</p>
      <p>使用 footer=header 来设置弹窗脚步按钮</p>
      <p>通过 visible 来控制弹窗显示/隐藏，支持 .sync 修饰</p>
      <div class="demo">
        <aki-button @click="dialogVisible1=true">点击弹窗</aki-button>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-dialog :visible.sync="dialogVisible1">
  &lt;h3 slot="header">标题&lt;/h3>
  &lt;p>一段弹窗内容&lt;/p>
  &lt;aki-button slot="footer">确认&lt;/aki-button>
&lt;/aki-dialog>
        </code>
      </pre>
      <h3>长文本窗口</h3>
      <p>使用 scroll 使窗口内容允许滚动</p>
      <div class="demo">
        <aki-button @click="dialogVisible2=true">点击弹窗</aki-button>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-dialog :visible.sync="dialogVisible2" scroll>
  &lt;h2 slot="header">标题&lt;/h2>
  &lt;p>一段弹窗内容，一段弹窗内容一段弹窗内容。一段弹窗内容，一段弹窗内容一段弹窗内容，一段弹窗内容一段弹窗内容。一段弹窗内容一段弹窗内容。&lt;/p>
  &lt;p>一段弹窗内容，一段弹窗内容一段弹窗内容。一段弹窗内容，一段弹窗内容一段弹窗内容，一段弹窗内容一段弹窗内容。一段弹窗内容一段弹窗内容。&lt;/p>
  &lt;p>一段弹窗内容，一段弹窗内容一段弹窗内容。一段弹窗内容，一段弹窗内容一段弹窗内容，一段弹窗内容一段弹窗内容。一段弹窗内容一段弹窗内容。&lt;/p>
  &lt;aki-button slot="footer">确认&lt;/aki-button>
&lt;/aki-dialog>
        </code>
      </pre>
      <h3>自定义窗口主体的 class</h3>
      <p>使用 page-class 设置内容的 class</p>
      <div class="demo">
        <aki-button @click="dialogVisible3=true">点击弹窗</aki-button>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-dialog :visible.sync="dialogVisible3" page-class="center">
  &lt;h3 slot="header">标题&lt;/h3>
  &lt;p>一段弹窗内容&lt;/p>
  &lt;aki-button slot="footer">确认&lt;/aki-button>
&lt;/aki-dialog>
        </code>
        <code class="css">
.center{
  text-align: center;
}
        </code>
      </pre>
      <h3>全屏幕弹窗</h3>
      <p>添加 full 让弹窗呈现出页面的样子</p>
      <p>全屏幕弹窗通过设置 title 来设置标题</p>
      <div class="demo">
        <aki-button @click="dialogVisible4=true">点击弹窗</aki-button>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-dialog :visible.sync="dialogVisible4" full title="全屏弹窗">
  &lt;p>一段弹窗内容&lt;/p>
  &lt;footer slot="footer">&lt;aki-button>确认&lt;/aki-button>&lt;/footer>
&lt;/aki-dialog>
        </code>
      </pre>
    </main>
    <aki-dialog :visible.sync="dialogVisible1">
      <h3 slot="header">标题</h3>
      <p>一段弹窗内容</p>
      <aki-button slot="footer">确认</aki-button>
    </aki-dialog>
    <aki-dialog :visible.sync="dialogVisible2" scroll>
      <h2 slot="header">标题</h2>
      <p>一段弹窗内容，一段弹窗内容一段弹窗内容。一段弹窗内容，一段弹窗内容一段弹窗内容，一段弹窗内容一段弹窗内容。一段弹窗内容一段弹窗内容。</p>
      <p>一段弹窗内容，一段弹窗内容一段弹窗内容。一段弹窗内容，一段弹窗内容一段弹窗内容，一段弹窗内容一段弹窗内容。一段弹窗内容一段弹窗内容。</p>
      <p>一段弹窗内容，一段弹窗内容一段弹窗内容。一段弹窗内容，一段弹窗内容一段弹窗内容，一段弹窗内容一段弹窗内容。一段弹窗内容一段弹窗内容。</p>
      <aki-button slot="footer">确认</aki-button>
    </aki-dialog>
    <aki-dialog :visible.sync="dialogVisible3" page-class="center">
      <h3 slot="header">标题</h3>
      <p>一段弹窗内容</p>
      <aki-button slot="footer">确认</aki-button>
    </aki-dialog>
    <aki-dialog :visible.sync="dialogVisible4" full title="全屏弹窗">
      <p>一段弹窗内容</p>
      <footer slot="footer"><aki-button>确认</aki-button></footer>
    </aki-dialog>
  </section>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible1: false,
      dialogVisible2: false,
      dialogVisible3: false,
      dialogVisible4: false,
    }
  }
}
</script>

<style>
.center{
  text-align: center;
}
</style>

