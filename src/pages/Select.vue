<template>
  <section class="aki-page">
    <aki-topbar @nav-click="$router.back()" nav=back fill>Select</aki-topbar>
    <main class="aki-page-main" v-hljs>
      <h3>label</h3>
      <p>select 的显示名称</p>
      <div class="demo">
        <aki-select label="选项">
          <option value="1">第一项</option>
          <option value="2">第二项</option>
        </aki-select>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-select label="选项">
  &lt;option value="1">第一项&lt;/option>
  &lt;option value="2">第二项&lt;/option>
&lt;/aki-select>
        </code>
      </pre>
      <h3>多选</h3>
      <div class="demo">
        <aki-select label="多选" multiple>
          <option value="1">第一项</option>
          <option value="2">第二项</option>
        </aki-select>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-select label="姓名">
  &lt;option value="1">第一项&lt;/option>
  &lt;option value="2">第二项&lt;/option>
&lt;/aki-select>
        </code>
      </pre>
      <h3>样式</h3>
      <h4>无背景样式</h4>
      <p>加上 nobg 只显示下划线</p>
      <div class="demo">
        <aki-select label="无背景样式" nobg>
          <option value="1">第一项</option>
          <option value="2">第二项</option>
        </aki-select>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-select label="无背景样式" nobg>
  &lt;option value="1">第一项&lt;/option>
  &lt;option value="2">第二项&lt;/option>
&lt;/aki-select>
        </code>
      </pre>
      <h4>边框样式</h4>
      <p>加上 outline 显示成边框</p>
      <div class="demo">
        <aki-select label="边框样式" outline>
          <option value="1">第一项</option>
          <option value="2">第二项</option>
        </aki-select>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-select label="边框样式" outline>
  &lt;option value="1">第一项&lt;/option>
  &lt;option value="2">第二项&lt;/option>
&lt;/aki-select>
        </code>
      </pre>
      <h3>宽度</h3>
      <p>自定义 width 控制宽度</p>
      <div class="demo">
        <aki-select label="自定义宽度" width="260px">
          <option value="1">第一项</option>
          <option value="2">第二项</option>
        </aki-select>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-select label="自定义宽度" width="260px">
  &lt;option value="1">第一项&lt;/option>
  &lt;option value="2">第二项&lt;/option>
&lt;/aki-select>
        </code>
      </pre>
      <p>添加 full 占满整行</p>
      <div class="demo">
        <aki-select label="占满整行" full>
          <option value="1">第一项</option>
          <option value="2">第二项</option>
        </aki-select>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-select label="占满整行" full>
  &lt;option value="1">第一项&lt;/option>
  &lt;option value="2">第二项&lt;/option>
&lt;/aki-select>
        </code>
      </pre>
      <h3>辅助文本</h3>
      <p>添加 helper 提供辅助说明文本</p>
      <div class="demo">
        <aki-select label="辅助文本" helper="提示：选择你喜欢的">
          <option value="1">第一项</option>
          <option value="2">第二项</option>
        </aki-select>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-select label="辅助文本" helper="提示：选择你喜欢的">
  &lt;option value="1">第一项&lt;/option>
  &lt;option value="2">第二项&lt;/option>
&lt;/aki-select>
        </code>
      </pre>
    </main>
  </section>
</template>
