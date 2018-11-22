<template>
  <section class="aki-page">
    <aki-topbars @nav-click="$router.back()" nav=back fill>Selection</aki-topbars>
    <main class="aki-page-main" v-hljs>
      <h3>Radio</h3>
      <div class="demo">
        <aki-radio name="sex" label="男"></aki-radio>
        <aki-radio name="sex" label="女"></aki-radio>
        <aki-radio name="sex" label="保密"></aki-radio>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-radio name="sex" label="男">&lt;/aki-radio>
&lt;aki-radio name="sex" label="女">&lt;/aki-radio>
&lt;aki-radio name="sex" label="保密">&lt;/aki-radio>
        </code>
      </pre>
      <h3>Radio</h3>
      <div class="demo">
        <aki-checkbox name="hobby" label="音乐"></aki-checkbox>
        <aki-checkbox name="hobby" label="摄影"></aki-checkbox>
        <aki-checkbox name="hobby" label="油画"></aki-checkbox>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-checkbox name="hobby" label="音乐">&lt;/aki-checkbox>
&lt;aki-checkbox name="hobby" label="摄影">&lt;/aki-checkbox>
&lt;aki-checkbox name="hobby" label="油画">&lt;/aki-checkbox>
        </code>
      </pre>
    </main>
  </section>
</template>
