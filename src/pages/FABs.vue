<template>
  <section class="aki-page">
    <aki-topbar @nav-click="$router.back()" nav=back fill>FABs</aki-topbar>
    <main class="aki-page-main" v-hljs>
      <h3>基础</h3>
      <p>icon 为必须属性</p>
      <div class="demo">
        看右下角
        <aki-fabs icon="circle-edit-outline">
          <aki-fab icon="plus" />
          <aki-fab icon="cards-heart" />
          <aki-fab icon="share-variant" />
        </aki-fabs>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-fabs icon="circle-edit-outline">
  &lt;aki-fab icon="plus" />
  &lt;aki-fab icon="cards-heart" />
  &lt;aki-fab icon="share-variant" />
&lt;/aki-fabs>
        </code>
      </pre>
    </main>
  </section>
</template>
