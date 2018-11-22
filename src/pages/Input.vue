<template>
  <section class="aki-page">
    <aki-topbars @nav-click="$router.back()" nav=back fill>Input</aki-topbars>
    <main class="aki-page-main" v-hljs>
      <h3>type</h3>
      <p>与 HTML5 规范一致</p>
      <h3>label</h3>
      <p>input 的显示名称</p>
      <div class="demo">
        <aki-input label="姓名"></aki-input>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-input label="姓名">&lt;/aki-input>
        </code>
      </pre>
      <h3>样式</h3>
      <h4>无背景样式</h4>
      <p>加上 nobg 只显示下划线</p>
      <div class="demo">
        <aki-input label="无背景样式" nobg></aki-input>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-input label="无背景样式" nobg>&lt;/aki-input>
        </code>
      </pre>
      <h4>边框样式</h4>
      <p>加上 outline 显示成边框</p>
      <div class="demo">
        <aki-input label="边框样式" outline></aki-input>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-input label="边框样式" outline>&lt;/aki-input>
        </code>
      </pre>
      <h3>宽度</h3>
      <p>自定义 width 控制宽度</p>
      <div class="demo">
        <aki-input label="自定义宽度" width="260px"></aki-input>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-input label="自定义宽度" width="260px">&lt;/aki-input>
        </code>
      </pre>
      <p>添加 full 占满整行</p>
      <div class="demo">
        <aki-input label="占满整行" full></aki-input>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-input label="占满整行" full>&lt;/aki-input>
        </code>
      </pre>
      <h3>辅助文本</h3>
      <p>添加 helper 提供辅助说明文本</p>
      <div class="demo">
        <aki-input label="辅助文本" helper="提示：最少输入6位"></aki-input>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-input label="辅助文本" helper="提示：最少输入6位">&lt;/aki-input>
        </code>
      </pre>
    </main>
  </section>
</template>
