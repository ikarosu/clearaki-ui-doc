<template>
  <section class="aki-page">
    <aki-topbars @nav-click="$router.back()" nav=back fill>ContextMenu</aki-topbars>
    <main class="aki-page-main" v-hljs>
      <h4>配合topbar使用</h4>
      <div class="demo">
        <aki-topbars>标题
          <div slot="action" v-contextmenu>
            <svg width="24" fill="currentColor" viewBox="0 0 1024 1024"><path d="M469.333333 170.666667h128v128h-128V170.666667z m0 298.666666h128v128h-128v-128z m0 298.666667h128v128h-128v-128z"></path></svg>
            <aki-context-menu>
              <div>第一项</div>
              <div>第二项</div>
            </aki-context-menu>
          </div>
        </aki-topbars>
      </div>
      <pre ref="code">
        <code class="html">
&lt;aki-topbars>标题
  &lt;div slot="action" v-contextmenu>
    &lt;svg>...&lt;/svg>
    &lt;aki-context-menu>
      &lt;div>第一项&lt;/div>
      &lt;div>第二项&lt;/div>
    &lt;/aki-context-menu>
  &lt;/div>
&lt;/aki-topbars>
        </code>
      </pre>
    </main>
  </section>
</template>
