<template>
<div>
    <v-navigation-drawer v-if="bshowMenu" v-model="drawer" fixed clipped class="grey lighten-4" app>
        <v-list  dense class="grey lighten-4">
            <template v-for="(item, i) in items">
                <v-layout v-if="item.heading" :key="i" row align-center>
                    <v-flex xs6>
                        <v-subheader v-if="item.heading">
                            {{ item.heading }}
                        </v-subheader>
                    </v-flex>

                </v-layout>
                <v-divider v-else-if="item.divider" :key="i" dark class="my-3"></v-divider>
                <v-list-tile v-else :key="i" v-bind:href="'#/' + (item.text == 'home' ? '': item.text)">
                    <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="grey--text">
                            {{ item.text }}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
        </v-list>
    </v-navigation-drawer>
    <v-toolbar color="grey" app absolute clipped-left>
        <v-toolbar-side-icon v-if="loggedIn" @click.native="drawer = !drawer"></v-toolbar-side-icon>
        <span class="title ml-3 mr-5">Family Tracking</span>
        <v-spacer></v-spacer>
        <div v-if="bshowMenu">
            <span class="title ml-3 mr-5">Hola  {{user}}</span>
        </div>
        <v-btn v-if="bshowMenu" icon large to="/welcome">
            <v-avatar size="32px" tile>
                <v-icon v-on:click="logout()">exit_to_app</v-icon>
            </v-avatar>
        </v-btn>
        <v-btn v-if="!bshowMenu" icon large to="/">
            <v-avatar size="32px" tile>
                <v-icon>home</v-icon>
            </v-avatar>
        </v-btn>
    </v-toolbar>
</div>
</template>

<script>
import user from '@/resources/user.js'

export default {
  name: 'Menu',
  data: () => ({
    drawer: null,
    user: 'null',
    bshowMenu: false,
    items: [{
      heading: 'MENU'
    },
    {
      icon: 'group',
      text: 'groups'
    },
    {
      icon: 'supervised_user_circle',
      text: 'membersGroup'
    },
    {
      icon: 'map',
      text: 'home'
    }
    ]
  }),
  asyncComputed: {
    loggedIn: function () {
      console.log('leyendo local storage loggin')
      console.log(this.$store.state.IsAuthenticated)
      if (this.$store.state.IsAuthenticated) {
        console.log('entro a loggin')
        user.getById(this.$store.state.token, this.$store.state.user.id).then(response => {
          console.log(response)
          this.user = response.username
        })
      }
      return this.$store.state.IsAuthenticated
    }
  },
  methods: {
    logout: function (event) {
      user.logout(this.$store.state.token).then(response => {
        console.log(response)
        this.$store.state.IsAuthenticated = false
        localStorage.removeItem('accToken')
        this.$router.replace({
          name: 'welcome'
        })
      }).catch((error) => {
        console.log('es un error')
        console.log(error)
      })
    }
  }
}
</script>
