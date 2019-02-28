<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 class="text-xs-center" mt-5>
        <h1>Sign In</h1>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 mt-3>
        <form>
          <v-layout column>
            <v-flex>
              <v-text-field
                v-model="selectItem.email"
                name="email"
                label="Email"
                id="email"
                type="email"
                required
              ></v-text-field>
            </v-flex>
            <v-flex>
              <v-text-field
                v-model="selectItem.password"
                name="password"
                label="Password"
                id="password"
                type="password"
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-flex class="text-xs-center" mt-5>
                <v-btn color="primary" v-on:click="login()">Sign In</v-btn>
                <v-btn color="default" v-on:click="cancel()">Cancel</v-btn>
              </v-flex>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
    <Dialog></Dialog>
  </v-container>
</template>

<script>

import user from '@/resources/user.js';
import user_role from '@/resources/user_role.js'

export default {
  data: () => ({
    selectItem: {}
  }),
  components: {
    //Dialog
  },
  mounted () {
  },
  methods: {
    login: function (event) {
      user.login(this.selectItem).then(response => {
        

        var filter = {}
        filter.userId = response.userId

        user_role.getByUserId(filter).then((responseUserRole)=>{

             var uservalid = false;
              
              for(var i=0;i<responseUserRole.length;i++) {

                  if(responseUserRole[i].IdUser == response.userId && responseUserRole[i].RoleType == 1){

                     var uservalid = true;
                      console.log(response)
                              localStorage.setItem('accToken', response.id)
                              this.$store.state.token = response.id
                              this.$store.state.IsAuthenticated = true
                              this.$store.state.user.id = response.userId
                              this.$router.push({
                                path: '/home'
                              })
                  }

              }

              if (uservalid == false){
                alert("usuario no valido")
              }
              
        })

      }).catch((error) => {
        console.log('es un error')
        console.log(error)
         alert("usuario no valido")
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