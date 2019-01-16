<template>
  <section class="aki-page">
    <aki-topbar @nav-click="$router.back()" nav=back fill>SheetBottom</aki-topbar>
    <main class="aki-page-main" v-hljs>
      <h3>基础使用</h3>
      <div class="demo">
        <aki-button @click="bottomSheetVisible1=true">点击弹出</aki-button>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-sheet-bottom :visible.sync="bottomSheetVisible2"
  title="基础使用"&gt;
  &lt;div @click="$snackbar('点击了动作1')"&gt;动作1&lt;/div&gt;
  &lt;div&gt;动作2&lt;/div&gt;
&lt;/aki-sheet-bottom&gt;
        </code>
      </pre>
      <h3>多个动作</h3>
      <p>设置scroll，将允许内容滚动</p>
      <div class="demo">
        <aki-button @click="bottomSheetVisible2=true">点击弹出</aki-button>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-sheet-bottom :visible.sync="bottomSheetVisible2"
  title="基础使用" scroll&gt;
  &lt;div @click="$snackbar('点击了动作1')"&gt;动作1&lt;/div&gt;
  &lt;div&gt;动作2&lt;/div&gt;
  &lt;div&gt;动作3&lt;/div&gt;
  &lt;div&gt;动作4&lt;/div&gt;
  &lt;div&gt;动作5&lt;/div&gt;
  &lt;div&gt;动作6&lt;/div&gt;
  &lt;div&gt;动作7&lt;/div&gt;
  &lt;div&gt;动作8&lt;/div&gt;
&lt;/aki-sheet-bottom&gt;
        </code>
      </pre>
    </main>
    <aki-sheet-bottom :visible.sync="bottomSheetVisible1"
      title="基础使用">
      <div @click="$snackbar('点击了动作1')">动作1</div>
      <div>动作2</div>
    </aki-sheet-bottom>
    <aki-sheet-bottom :visible.sync="bottomSheetVisible2"
      title="多个动作允许滚动" scroll>
      <div @click="$snackbar('点击了动作1')">动作1</div>
      <div>动作2</div>
      <div>动作3</div>
      <div>动作4</div>
      <div>动作5</div>
      <div>动作6</div>
      <div>动作7</div>
      <div>动作8</div>
    </aki-sheet-bottom>
  </section>
</template>

<script>
export default {
  data() {
    return {
      bottomSheetVisible1: false,
      bottomSheetVisible2: false,
    }
  }
}
</script>

