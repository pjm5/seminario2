<template>
<v-container fluid>
    <v-layout row wrap>
        <v-flex xs12 class="text-xs-center" mt-5>
            <h1>Sign Up</h1>
        </v-flex>
        <v-flex xs12 sm6 offset-sm3 mt-3>
            <form>
                <v-layout column>
                    <v-flex>
                        <v-text-field v-model="selectItem.email" name="email" label="Email" id="email" type="email" required></v-text-field>
                    </v-flex>
                    <v-flex>
                        <v-text-field v-model="selectItem.password" name="password" label="Password" id="password" type="password" required></v-text-field>
                    </v-flex>
                    <v-flex>
                        <v-text-field v-model="selectItem.confirmPassword" name="confirmPassword" label="Confirm Password" id="confirmPassword" type="password" required></v-text-field>
                    </v-flex>
                    <v-flex class="text-xs-center" mt-5>
                        <v-btn color="primary" v-on:click="register()">Sign Up</v-btn>
                        <v-btn color="default" v-on:click="cancel()">Cancel</v-btn>
                    </v-flex>
                </v-layout>
            </form>
        </v-flex>
    </v-layout>
</v-container>
</template>

<script>
import user from '@/resources/user.js';
import userRole from '@/resources/user_role.js'

export default {
  data: () => ({
    selectItem: {}
  }),
  mounted () {
  },
  methods: {
    register: function (event) {
      console.log('registrar-> ' + this.selectItem.password)
      user.create(this.selectItem).then((response) => {
        console.log('usuario registrado')

         var oUserRole = {}
         oUserRole.IdUser = response.id   
         oUserRole.RoleType = 1   

         userRole.create(oUserRole).then(() => {

                console.log('rol creado')
         });


        this.$router.push({
          path: 'login'
        })
      }).catch((error) => {
        console.log('es un error')
        console.log(error)
      })
    },
    cancel: function (event) {
      this.$router.push({
        path: 'welcome'
      })
    }
  }
}
</script>
