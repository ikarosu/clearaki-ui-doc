<template>
  <section class="aki-page">
    <aki-topbar @nav-click="$router.back()" nav=back fill>FAB</aki-topbar>
    <main class="aki-page-main" v-hljs>
      <h3>基础</h3>
      <p>icon 为必须属性。默认为主题填充色，尺寸为正常</p>
      <p>设置 mini 使用mini尺寸，设置 plain 使用朴素风格</p>
      <div class="demo">
        <aki-fab icon="plus" />
        <aki-fab icon="cards-heart" mini />
        <aki-fab icon="share-variant" plain />
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-fab icon="plus" />
&lt;aki-fab icon="cards-heart" mini />
&lt;aki-fab icon="share-variant" plain />
        </code>
      </pre>
      <h3>浮动位置</h3>
      <p>通过传入 fixed 来设置按钮浮动位置</p>
      <p>位置：上,右,下,左。允许解构写法。</p>
      <aki-fab icon="star" :fixed="fixed" />
      <aki-button type="outline" size="xs" @click="fixed = '72,,,16'">72,,,16</aki-button>
      <aki-button type="outline" size="xs" @click="fixed = '72,16'">72,16</aki-button>
      <aki-button type="outline" size="xs" @click="fixed = ',16,16'">,16,16</aki-button>
      <aki-button type="outline" size="xs" @click="fixed = ',,16,16'">,,16,16</aki-button>
      <pre ref="code">
        <code class="html">
&lt;aki-fab icon="star" :fixed="fixed" />

&lt;aki-button @click="fixed = '72,,,16'" type="outline" size="xs">72,,,16&lt;/aki-button>
&lt;aki-button @click="fixed = '72,16'" type="outline" size="xs">72,16&lt;/aki-button>
&lt;aki-button @click="fixed = ',16,16'" type="outline" size="xs">,16,16&lt;/aki-button>
&lt;aki-button @click="fixed = ',,16,16'" type="outline" size="xs">,,16,16&lt;/aki-button>
        </code>
      </pre>
      <h3>自定义icon</h3>
      <p>icon传入一个对象，来显示自定义图标</p>
      <div class="demo">
        <aki-fab :icon="{ box: '0 0 24 24', width: '24px', path: 'M3,4H9.11L16.15,18H21V20H14.88L7.84,6H3V4M14,4H21V6H14V4Z'}" />
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-fab :icon="{ box: '0 0 24 24', width: '24px', path: 'M3,4H9.11L16.15,18H21V20H14.88L7.84,6H3V4M14,4H21V6H14V4Z'}" />
        </code>
      </pre>
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      fixed: '72,16'
    }
  },
  methods: {
    setPosition(p) {
      this.fixed = p
    }
  }
}
</script>
