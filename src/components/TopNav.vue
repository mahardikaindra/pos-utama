<template>
  <v-app-bar dark app clipped-left clipped-right class="blue--text text--darken-2">
    <v-app-bar-nav-icon
      color="primary"
      @click.stop="mini = !mini"
      data-cy="hamburger_menu"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>
      <v-btn variant="text">
        <!-- <template v-slot:prepend>
            <v-img :src="icon" aspect-ratio="1" height="30" width="30"></v-img>
          </template> -->
        Sistem Mahasiswa
      </v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-menu bottom location="left" v-if="!isLogin">
        <template v-slot:activator="{ props }">
          <v-btn icon color="success" v-bind="props" data-cy="btn_right_top_setting">
            <v-icon>mdi-cog-outline</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item key="wizrd" data-cy="btn-wizard" @click.stop="toProfile">
            <v-list-item>
              <v-list-item-title>Manage Profile</v-list-item-title>
            </v-list-item>
          </v-list-item>

          <v-list-item key="logout" data-cy="btn-logout" @click.stop="toLogout">
            <v-list-item>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn v-if="isLogin" @click.stop="toLogin" variant="text">
        <v-icon color="primary">lock_open</v-icon>
        <span class="blue--text text--darken-2">Login</span>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>
<script lang="ts">
//   import iconImage from '../../assets/logo.png'
export default {
  // Properties returned from data() become reactive state
  // and will be exposed on `this`.
  data() {
    return {
      icon: null,
      mini: false,
      isLogin: false
    }
  },

  // Methods are functions that mutate state and trigger updates.
  // They can be bound as event handlers in templates.
  methods: {
    toLogin() {},
    toLogout() {},
    toProfile() {}
  },

  // Lifecycle hooks are called at different stages
  // of a component's lifecycle.
  // This function will be called when the component is mounted.
  mounted() {
    // const mhs = new Mahasiswa('npm', 'nama', 3)
  }
}
</script>
