<template>
<v-app id="app">
    <Menu ></Menu>
    <v-content>
        <v-container fluid class="grey lighten-4">
            <router-view />
        </v-container>
    </v-content>
    <vue-progress-bar></vue-progress-bar>
</v-app>
</template>

<script>
import Menu from '@/components/Menu'

export default {
  data: () => ({}),
  props: {
    source: String
  },
  mounted () {},
  created () {},
  components: {
    Menu
  }
}
</script>
