<template>
  <section class="aki-page">
    <aki-topbars @nav-click="$router.back()" nav=back fill>Confirm</aki-topbars>
    <main class="aki-page-main" v-hljs>
      <h3>基础使用</h3>
      <p>如果引入了完整的 clearaki-ui，可以直接在 vue 实例使用这些方法</p>
      <p>所有方法都返回一个 Promise 对象，点击确定返回 resolve 状态，此外任何关闭了窗口的行为，都返回 reject。</p>
      <h4>$confirm()</h4>
      <p>带有取消按钮的询问窗口</p>
      <div class="demo">
        <aki-button @click="handleConfirm1">点击弹窗</aki-button>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-button @click="handleConfirm1">点击弹窗&lt;/aki-button>
        </code>
        <code class="javascript">
handleConfirm1() {
  this.$confirm()
    .then(() => this.$snackbar('点击了确认'))
    .catch(() => this.$snackbar('取消了操作'))
}
        </code>
      </pre>
      <p>允许传入一个配置对象 { title: '', content: '' } 来自定义窗口</p>
      <div class="demo">
        <aki-button @click="$confirm({ title: '自定义的标题', content: '自定义的内容' })">点击弹窗</aki-button>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-button @click="$confirm({ title: '自定义的标题', content: '自定义的内容' })">点击弹窗&lt;/aki-button>
        </code>
      </pre>
      <h4>$alert(String: content)</h4>
      <p>只有确定按钮的警告窗口，参数为窗口内容</p>
      <div class="demo">
        <aki-button @click="$alert('本页包含成人内容，只有满18岁才能继续浏览！')">点击弹窗</aki-button>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-button @click="$alert('本页包含成人内容，只有满18岁才能继续浏览！')">点击弹窗&lt;/aki-button>
        </code>
      </pre>
      <h4>$prompt(String: label [, String: type])</h4>
      <p>用户输入窗口，第一个参数为输入框的 label，第二个可选参数为 input 的 type，默认 text。</p>
      <div class="demo">
        <aki-button @click="$prompt('你的年龄', 'number')">点击弹窗</aki-button>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-button @click="$prompt('你的年龄', 'number')">点击弹窗&lt;/aki-button>
        </code>
      </pre>
    </main>
  </section>
</template>

<script>
export default {
  methods: {
    handleConfirm1() {
      this.$confirm()
        .then(() => this.$snackbar('点击了确认'))
        .catch(() => this.$snackbar('取消了操作'))
    }
  }
}
</script>
