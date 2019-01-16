<template>
  <section class="aki-page">
    <aki-topbar @nav-click="$router.back()" nav=back fill>Button</aki-topbar>
    <main class="aki-page-main" v-hljs>
      <h3>类型</h3>
      <p>改变 type 属性可以让按钮呈现不一样的类型</p>
      <div class="demo">
        <aki-button>text（默认）</aki-button>
        <aki-button type="outline">outline</aki-button>
        <aki-button type="fill">fill</aki-button>
        <aki-button type="raise">raise</aki-button>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-button&gt;text（默认）&lt;/aki-button&gt;
&lt;aki-button type="outline"&gt;outline&lt;/aki-button&gt;
&lt;aki-button type="fill"&gt;fill&lt;/aki-button&gt;
&lt;aki-button type="raise"&gt;raise&lt;/aki-button&gt;
        </code>
      </pre>
      <h3>尺寸</h3>
      <p>改变 size 属性可以让按钮呈现不一样的类型</p>
      <div class="demo">
        <aki-button type="fill" size="xs">xs</aki-button>
        <aki-button type="fill" size="s">s</aki-button>
        <aki-button type="fill">m（默认）</aki-button>
        <aki-button type="fill" size="l">l</aki-button>
        <aki-button type="fill" size="xl">xl</aki-button>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-button type="fill" size="xs"&gt;xs&lt;/aki-button&gt;
&lt;aki-button type="fill" size="s"&gt;s&lt;/aki-button&gt;
&lt;aki-button type="fill"&gt;m（默认）&lt;/aki-button&gt;
&lt;aki-button type="fill" size="l"&gt;l&lt;/aki-button&gt;
&lt;aki-button type="fill" size="xl"&gt;xl&lt;/aki-button&gt;
        </code>
      </pre>
      <h3>形状</h3>
      <p>添加 round 或 cicle 可以呈现不同的形状</p>
      <div class="demo">
        <aki-button type="fill" round>round</aki-button>
        <aki-button type="fill" circle>circle</aki-button>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-button type="fill" round&gt;round&lt;/aki-button&gt;
&lt;aki-button type="fill" circle&gt;circle&lt;/aki-button&gt;
        </code>
      </pre>
      <h3>特殊</h3>
      <h4>plain</h4>
      <p>弱化视觉效果的 plain 按钮</p>
      <div class="demo">
        <aki-button type="text" plain>text</aki-button>
        <aki-button type="outline" plain>outline</aki-button>
        <aki-button type="fill" plain>fill</aki-button>
        <aki-button type="raise" plain>raise</aki-button>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-button type="text" plain&gt;text&lt;/aki-button&gt;
&lt;aki-button type="outline" plain&gt;outline&lt;/aki-button&gt;
&lt;aki-button type="fill" plain&gt;fill&lt;/aki-button&gt;
&lt;aki-button type="raise" plain&gt;raise&lt;/aki-button&gt;
        </code>
      </pre>
      <h4>disabled</h4>
      <p>不允许点击的 disabled 状态的按钮</p>
      <div class="demo">
        <aki-button type="text" disabled>text</aki-button>
        <aki-button type="outline" disabled>outline</aki-button>
        <aki-button type="fill" disabled>fill</aki-button>
        <aki-button type="raise" disabled>raise</aki-button>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-button type="text" disabled&gt;text&lt;/aki-button&gt;
&lt;aki-button type="outline" disabled&gt;outline&lt;/aki-button&gt;
&lt;aki-button type="fill" disabled&gt;fill&lt;/aki-button&gt;
&lt;aki-button type="raise" disabled&gt;raise&lt;/aki-button&gt;
        </code>
      </pre>
      <h4>full</h4>
      <p>占满一整行的 full 按钮</p>
      <div class="demo">
        <aki-button type="fill" full>full</aki-button>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-button type="fill" full&gt;full&lt;/aki-button&gt;
        </code>
      </pre>
      <h4>loading</h4>
      <p>等待状态的 loading 按钮</p>
      <div class="demo">
        <aki-button type="fill" loading>loading</aki-button>
        <aki-button type="outline" loading>loading</aki-button>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-button type="fill" loading>loading&lt;/aki-button>
&lt;aki-button type="outline" loading>loading&lt;/aki-button>
        </code>
      </pre>
    </main>
  </section>
</template>
