<template>
  <section class="aki-page">
    <aki-topbar fill nav="menu">ClearAki-UI <aki-icon @click="dialogVisible=true" icon="dots-vertical" slot="action" /></aki-topbar>
    <main class="aki-page-main">
      <p><router-link to="/button">Button</router-link></p>
      <p><router-link to="/Backdrop">Backdrop</router-link></p>
      <p><router-link to="/Banner">Banner</router-link></p>
      <p><router-link to="/confirm">Confirm</router-link></p>
      <p><router-link to="/context">ContextMenu</router-link></p>
      <p><router-link to="/counter">Counter</router-link></p>
      <p><router-link to="/dialog">Dialog</router-link></p>
      <p><router-link to="/dropdown">Dropdown</router-link></p>
      <p><router-link to="/fab">Floating Action Button</router-link></p>
      <p><router-link to="/fabs">Floating Action Button Group</router-link></p>
      <p><router-link to="/input">Input</router-link></p>
      <p><router-link to="/Icon">Icon</router-link></p>
      <p><router-link to="/picker">Picker</router-link></p>
      <p><router-link to="/selection">Selection</router-link></p>
      <p><router-link to="/select">Select</router-link></p>
      <p><router-link to="/sheet/bottom">SheetBottom</router-link></p>
      <p><router-link to="/snackbar">Snackbar</router-link></p>
      <p><router-link to="/Step">Step</router-link></p>
      <p><router-link to="/switch">Switch</router-link></p>
      <p><router-link to="/tabs">Tabs</router-link></p>
      <p><router-link to="/Toolbar">Toolbar</router-link></p>
      <p><router-link to="/topbars">Topbars</router-link></p>
    </main>
    <aki-toolbars v-model="active" fix-text>
      <aki-toolbar label="a1" badges>
        <svg width="18" viewBox="0 0 512 512">
          <path d="M462.3 62.7c-54.5-46.4-136-38.7-186.6 13.5L256 96.6l-19.7-20.3C195.5 34.1 113.2 8.7 49.7 62.7c-62.8 53.6-66.1 149.8-9.9 207.8l193.5 199.8c6.2 6.4 14.4 9.7 22.6 9.7 8.2 0 16.4-3.2 22.6-9.7L472 270.5c56.4-58 53.1-154.2-9.7-207.8zm-13.1 185.6L256.4 448.1 62.8 248.3c-38.4-39.6-46.4-115.1 7.7-161.2 54.8-46.8 119.2-12.9 142.8 11.5l42.7 44.1 42.7-44.1c23.2-24 88.2-58 142.8-11.5 54 46 46.1 121.5 7.7 161.2z"></path>
        </svg>
        <template class="a" slot="text">2</template>
      </aki-toolbar>
      <aki-toolbar label="a2" badges="9">
        <svg width="18" viewBox="0 0 512 512">
          <path d="M512 32.01C512 13.74 497.68 0 481.45 0c-3.04 0-6.15.48-9.25 1.51l-290.78 96C168.71 101.71 160 114 160 128v244.76C142.99 359.99 120.7 352 96 352c-53.02 0-96 35.82-96 80s42.98 80 96 80 96-35.82 96-80V256l288-96v148.76C462.99 295.99 440.7 288 416 288c-53.02 0-96 35.82-96 80s42.98 80 96 80 96-35.82 96-80c0-.03-.01-.05-.01-.08L512 32.01zM96 480c-34.69 0-64-21.98-64-48s29.31-48 64-48 64 21.98 64 48-29.31 48-64 48zm384-353.73l-288 96V128h-.55v-.11L480 32.63v93.64zM416 416c-34.69 0-64-21.98-64-48s29.31-48 64-48 64 21.98 64 48-29.31 48-64 48z"></path>
        </svg>
      </aki-toolbar>
      <aki-toolbar label="a3" badges="99+">
        <svg width="18" viewBox="0 0 562 512">
          <path d="M552 64H88c-13.234 0-24 10.767-24 24v8H24c-13.255 0-24 10.745-24 24v280c0 26.51 21.49 48 48 48h504c13.233 0 24-10.767 24-24V88c0-13.233-10.767-24-24-24zM32 400V128h32v272c0 8.822-7.178 16-16 16s-16-7.178-16-16zm512 16H93.258A47.897 47.897 0 0 0 96 400V96h448v320zm-404-96h168c6.627 0 12-5.373 12-12V140c0-6.627-5.373-12-12-12H140c-6.627 0-12 5.373-12 12v168c0 6.627 5.373 12 12 12zm20-160h128v128H160V160zm-32 212v-8c0-6.627 5.373-12 12-12h168c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H140c-6.627 0-12-5.373-12-12zm224 0v-8c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-64v-8c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0-128v-8c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12zm0 64v-8c0-6.627 5.373-12 12-12h136c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12H364c-6.627 0-12-5.373-12-12z"></path>
        </svg>
      </aki-toolbar>
      <aki-toolbar label="a4">
        <svg width="18" viewBox="0 0 512 512">
          <path d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path>
        </svg>
      </aki-toolbar>
    </aki-toolbars>
    <aki-dialog :visible.sync="dialogVisible">
      <h3 slot="header">更换主题色</h3>
      <input type="color" v-model="color">
      <aki-button slot="footer" @click="setTheme">确定</aki-button>
    </aki-dialog>
  </section>
</template>

<script>
const hex2rgb = hex => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b
  })

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    }
    : null
}

export default {
  data() {
    return {
      active: 'a1',
      color: sessionStorage.getItem('color') || '#03a9f4',
      dialogVisible: false,
    }
  },
  methods: {
    setTheme() {
      sessionStorage.setItem('color', this.color)
      const { r, g, b } = hex2rgb(this.color)
      const root = document.documentElement
      root.style.setProperty('--r', r)
      root.style.setProperty('--g', g)
      root.style.setProperty('--b', b)
      this.dialogVisible = false
    }
  }
}
</script>
