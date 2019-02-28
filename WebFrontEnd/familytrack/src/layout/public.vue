<template>
  <div>
    <v-content>
      <router-view/>
    </v-content>
  </div>
</template>

<script>
export default {
 name: 'Public',
  data: () => ({}),
  props: {
    source: String
  },
  mounted() {},
  created() {}
};
</script>
