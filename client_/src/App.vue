<template>
  <v-app>
    <DrawerVue />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import DrawerVue from "./components/Drawer.vue";
export default {
  components: { DrawerVue },
  data() {
    return {};
  },
  created() {},
  updated() {},
  watch: {},
  computed: {},
  methods: {},
};
</script>