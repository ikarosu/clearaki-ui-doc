<template>
  <section class="aki-page">
    <aki-topbars @nav-click="$router.back()" nav=back fill>Snackbar</aki-topbars>
    <main class="aki-page-main" v-hljs>
      <h3>基础使用</h3>
      <p>如果引入了完整的 clearaki-ui，可以直接在 vue 实例使用该方法</p>
      <h4>$snackbar(String: text [, options])</h4>
      <p>自动消失的提示框</p>
      <div class="demo">
        <aki-button @click="$snackbar('一个提示')">点击显示</aki-button>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-button @click="$snackbar('一个提示')">点击显示&lt;/aki-button>
        </code>
      </pre>
      <h3>设置位置</h3>
      <div class="demo">
        <aki-button @click="$snackbar('{ position: \'top\' }', { position: 'top' })">上方</aki-button>
        <aki-button @click="$snackbar('{ position: \'center\' }', { position: 'center' })">中央</aki-button>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-button @click="$snackbar('{ position: \'top\' }', { position: 'top' })">上方&lt;/aki-button>
&lt;aki-button @click="$snackbar('{ position: \'center\' }', { position: 'center' })">中央&lt;/aki-button>
        </code>
      </pre>
      <h3>设置偏移</h3>
      <p>使其不遮挡一些内容</p>
      <div class="demo">
        <aki-button @click="$snackbar('{ offset: \'60px\' }', { offset: '60px' })">下方</aki-button>
        <aki-button @click="$snackbar('{ position: \'top\', offset: \'60px\' }', { position: 'top', offset: '60px' })">上方</aki-button>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-button @click="$snackbar('{ offset: \'60px\' }', { offset: '60px' })">下方&lt;/aki-button>
&lt;aki-button @click="$snackbar('{ position: \'top\', offset: \'60px\' }', { position: 'top', offset: '60px' })">上方&lt;/aki-button>
        </code>
      </pre>
      <h3>设置样式</h3>
      <p>可以铺满屏幕宽</p>
      <div class="demo">
        <aki-button @click="$snackbar('{ fullWidth: true }', { fullWidth: true })">满宽度</aki-button>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-button @click="$snackbar('{ fullWidth: true }', { fullWidth: true })">满宽度&lt;/aki-button>
        </code>
      </pre>
      <h3>设置行为</h3>
      <p>提供一个可选的操作，通常用于撤销之类的操作。</p>
      <p>如果设置了 action，则该方法返回一个 Promise，如果点击了 action，则返回 resolve 状态；如果不点击，则消失后返回 reject 状态</p>
      <div class="demo">
        <aki-button @click="handleAction1">点击行为</aki-button>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-button @click="handleAction1">点击行为&lt;/aki-button>
        </code>
        <code class="javascript">
handleAction1() {
  this.$snackbar('可以撤销的操作', { action: '撤销' })
    .then(() => this.$snackbar('点击了撤销'))
    .catch(() => this.$snackbar('错过了时间'))
},
        </code>
      </pre>
      <h3>设置持续时间</h3>
      <p>会根据内容自动设置持续时间，你也可以自己定义</p>
      <p>设置为0则不自动消失，需要配置 action，或者手动关闭</p>
      <div class="demo">
        <aki-button @click="handleAction2">行为关闭</aki-button>
        <aki-button @click="handleAction3">代码关闭</aki-button>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-button @click="handleAction2">行为关闭&lt;/aki-button>
&lt;aki-button @click="handleAction3">代码关闭&lt;/aki-button>
        </code>
        <code class="javascript">
handleAction2() {
  this.$snackbar('我们会使用你的位置。窗口不会自动消失', { action: '我知道了', during: 0 })
    .then(() => this.$snackbar('点击了撤销'))
},
handleAction3() {
  const toast = this.$snackbar('我们会使用你的位置。窗口不会自动消失', { during: 0 })
  setTimeout(() => {
    toast.close()
  }, 2000)
},
        </code>
      </pre>
    </main>
  </section>
</template>

<script>
export default {
  methods: {
    handleAction1() {
      this.$snackbar('可以撤销的操作', { action: '撤销' })
        .then(() => this.$snackbar('点击了撤销'))
        .catch(() => this.$snackbar('错过了时间'))
    },
    handleAction2() {
      this.$snackbar('我们会使用你的位置。窗口不会自动消失', { action: '我知道了', during: 0 })
        .then(() => this.$snackbar('点击了撤销'))
    },
    handleAction3() {
      const toast = this.$snackbar('我们会使用你的位置。窗口不会自动消失', { during: 0 })
      setTimeout(() => {
        toast.close()
      }, 2000)
    },
  }
}
</script>
