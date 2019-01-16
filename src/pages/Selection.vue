<template>
  <section class="aki-page">
    <aki-topbar @nav-click="$router.back()" nav=back fill>Selection</aki-topbar>
    <main class="aki-page-main" v-hljs>
      <h3>Radio</h3>
      <div class="demo">
        <aki-radio name="sex" v-model="radio" label="男" :value="1"></aki-radio>
        <aki-radio name="sex" v-model="radio" label="女" :value="0"></aki-radio>
        <aki-radio name="sex" v-model="radio" label="保密" :value="-1"></aki-radio>
        <p>{{ radio }}</p>
      </div>
      <pre ref="code">
        <code v-pre class="html">
&lt;aki-radio name="sex" v-model="radio" label="男" :value="1">&lt;/aki-radio>
&lt;aki-radio name="sex" v-model="radio" label="女" :value="0">&lt;/aki-radio>
&lt;aki-radio name="sex" v-model="radio" label="保密" :value="-1">&lt;/aki-radio>
&lt;p>{{ radio }}&lt;/p>
        </code>
      </pre>
      <h3>Radio</h3>
      <div class="demo">
        <aki-checkbox v-model="box" name="hobby" label="音乐" value="1"></aki-checkbox>
        <aki-checkbox v-model="box" name="hobby" label="摄影" value="2"></aki-checkbox>
        <aki-checkbox v-model="box" name="hobby" label="油画" value="3"></aki-checkbox>
        <p>{{ box }}</p>
      </div>
      <pre ref="code">
        <code v-pre class="html">
&lt;aki-checkbox v-model="box" name="hobby" label="音乐" value="1">&lt;/aki-checkbox>
&lt;aki-checkbox v-model="box" name="hobby" label="摄影" value="2">&lt;/aki-checkbox>
&lt;aki-checkbox v-model="box" name="hobby" label="油画" value="3">&lt;/aki-checkbox>
&lt;p>{{ box }}&lt;/p>
        </code>
      </pre>
      <pre ref="code">
        <code class="javascript">
data() {
  return {
    radio: -1,
    box: [],
  }
}
        </code>
      </pre>
      
    </main>
  </section>
</template>

<script>
export default {
  data() {
    return {
      radio: -1,
      box: [],
    }
  }
}
</script>
