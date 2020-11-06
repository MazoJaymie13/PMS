<template>
  <div>
    <v-app-bar color="indigo ligten-5" dense app dark clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title align="center" class="ml-5">
        <strong>USERS</strong>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" clipped app color="orange lighten-3">
      <v-list dense rounded>
        <v-list-item
          v-for="item in NavItems"
          @click="mChangeRouter(item.router)"
          :key="item.title"
        >
          <v-list-item-icon>
            <v-icon> {{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <template v-slot:append>
        <div class="pa-2"><v-btn dark block>Logout</v-btn></div>
      </template>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      drawer: false,
      NavItems: [
        { title: "Home", icon: "mdi-view-dashboard", router: "/" },
        {
          title: "User Accounts",
          icon: "mdi-account-lock",
          router: "/m_users",
        },
        {
          title: "Employees",
          icon: "mdi-account-group",
          router: "/m_Employees",
        },
        { title: "Departments", icon: "mdi-bank", router: "/m_Departments" },
        { title: "Sections", icon: "mdi-bank-minus", router: "/m_Sections" },
        { title: "Status", icon: "mdi-graph", router: "/m_Status" },
        {
          title: "Programming Language",
          icon: "mdi-language-javascript",
          router: "/m_PL",
        },
      ],
    };
  },
  created() {},
  updated() {},
  watch: {},
  computed: {},
  methods: {
    mChangeRouter(data) {
        if (this.$router.app._route.path != data) {
      this.$router.push(data);
        }
    },
  },
};
</script>
