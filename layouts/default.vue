<template>
  <div class="wrapper skin-blue fixed sidebar-mini">
    <back-layout-head />
    <back-layout-sidebar />
    <nuxt />
    <back-layout-footer />
  </div>
</template>
<script>
  import {backLayoutHead, backLayoutSidebar, backLayoutFooter} from "../components";

  export default {
    components: {backLayoutHead, backLayoutSidebar, backLayoutFooter}
  }
</script>
