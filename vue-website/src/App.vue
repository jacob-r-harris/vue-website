<template>
  <nav-bar @toggle-sidebar="receiveSidebarEmit" style="margin: 0;"/>
  <div class="flex-container">
    <Transition>
      <sidebar v-show="showSidebar"/>
    </Transition>
    <router-view></router-view>
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

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: rgb(17, 20, 20);
  }

  ::-webkit-scrollbar-thumb {
    background: rgb(50, 57, 58);
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgb(38, 43, 44)
  }
</style>