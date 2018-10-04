<template>
<div class="text-xs-center">
    <v-dialog v-model="dialog" width="500">
        <v-card>
            <v-card-title class="headline grey lighten-2" primary-title>
                Error
            </v-card-title>
            <v-card-text>
                An error has occurred
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" flat @click="dialog = false">
                    Accept
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</div>
</template>

<script>
export default {
  name: 'Dialog',
  data () {
    return {
      dialog: false
    }
  },
  mounted () {
    this.dialog = true
  }
}
</script>
