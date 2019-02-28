<template>
  <div>
    <Menu></Menu>
    <v-content>
      <v-container fluid class="grey lighten-4">
        <router-view/>
      </v-container>
    </v-content>
  </div>
</template>

<script>
import Menu from "@/components/Menu";

export default {
  name: 'Private',
  data: () => ({}),
  props: {
    source: String
  },
  mounted() {},
  created() {},
  components: {
    Menu
  }
};
</script>