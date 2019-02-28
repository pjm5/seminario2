<template>
<div class="home">
    <v-flex xs12>
      <v-flex xs4>
                <v-btn round color="primary" @click="addMarker" dark>Search</v-btn>
       </v-flex>
      <!--
        <v-layout row wrap>
            <v-flex xs4>
                <v-combobox :items="groups" item-text="Name" item-value="id" @change="onChange($event)" label="Select your group">
                </v-combobox>
            </v-flex>
            <v-flex xs4>
                <v-dialog ref="dialog" v-model="modal" :return-value.sync="date" persistent lazy full-width width="290px">
                    <v-text-field slot="activator" v-model="date" label="Select Date" prepend-icon="event" readonly></v-text-field>
                    <v-date-picker v-model="date" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                    </v-date-picker>
                </v-dialog>
            </v-flex>
            <v-flex xs4>
                <v-btn round color="primary" dark>Search</v-btn>
            </v-flex>
        </v-layout>
        -->
    </v-flex>
    <v-flex xs12>
        <gmap-map :center="center" :zoom="7" style="width: 1000px; height: 500px">
            <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"></gmap-marker>
        </gmap-map>
    </v-flex>
</div>
</template>

<script>

import group from '@/resources/group.js'
import GoogleMap from '@/components/GoogleMap.vue'
import positionMembers from '@/resources/position_member.js'

export default {
  name: 'home',
  data () {
    return {
      groups: [],
      markers: [],
      date: null,
      modal: null,
      selectItem: {},
      center: {
        lat: -31.4,
        lng: -64.1833
      }      
    }
  },
  beforeCreate () {
    if (!this.$store.state.IsAuthenticated) {
      console.log('entro')
      this.$router.replace({
        name: 'welcome'
      })
    }
  },
  methods:{
    onChange(event) {
      // aca va consulta del los punto por usuario
            console.log(event)
        },
    addMarker() {
      positionMembers.getAll(this.$store.state.token).then((response)=>{
          console.log(response)
          for(var i=0;i<response.length;i++){

            console.log(response[i].Lat)
            console.log(response[i].Long)

            var position = {
              lat: response[i].Lat,
              lng: response[i].Long
            }

            this.markers.push( {position}  );

            
          }

        })
    }
  },
  computed: {
    loggedIn () {
      return this.$store.IsAuthenticated
    }
  },
  changeRoute: function (a) {
    console.log(a)
  },
  created () {


    var filter = {"where": {"UserId":this.$store.state.user.id}} 
    filter.UserId = this.$store.state.user.id

    console.log(filter)
    debugger;

    group.getAllFilter(this.$store.state.token,filter).then(response => {
      this.groups = response
    }).catch((error) => {
      console.log('es un error')
      console.log(error)
    })
  },
  components: {
    GoogleMap
  }
}
</script>
