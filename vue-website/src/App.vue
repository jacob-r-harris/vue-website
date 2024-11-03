<template>
  <nav-bar @toggle-sidebar="receiveSidebarEmit" style="margin: 0;"/>
  <div class="flex-container">
    <Transition>
      <sidebar v-show="showSidebar"/>
    </Transition>
    <lipsum style="padding: 0 20%;"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showSidebar: false
      }
    },
    methods: {
      receiveSidebarEmit() {
        this.showSidebar = !this.showSidebar
      }
    }
  }
</script>

<style>

  .v-enter-from {
    translate: -100% 0;
  }
  .v-leave-to {
    translate: -100% 0;
  }

  body {
    font-family: 'Courier New', Courier, monospace;
    color: whitesmoke;
    background-color: rgb(23, 26, 27);
    margin: 0;
    
  }

  .flex-container {
        display: flex;
        flex-direction: row;
  }
</style>