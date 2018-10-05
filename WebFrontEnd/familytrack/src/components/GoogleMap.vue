<template>
<gmap-map :center="center" :zoom="12" style="width:1000px;  height: 500px;">
    <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position"></gmap-marker>
</gmap-map>
</template>

<script>
export default {
  name: 'Google-Map',
  data () {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      center: {
        lat: 45.508,
        lng: -73.587
      },
      markers: [],
      places: [],
      currentPlace: null
    }
  },

  mounted () {
    this.geolocate()
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace (place) {
      this.currentPlace = place
    },
    addMarker () {
      console.log('agregando marks')

      if (this.currentPlace) {
        console.log('agregando marks')

        const marker = {
          lat: -31.4,
          lng: -64.1833
        };

        this.markers.push({
          position: [{lat:-31.45949097,lng:-64.1810500},{lat:-31.45989488,lng:-64.1810500}]
        });

        this.places.push(this.currentPlace)
        this.center = marker
        this.currentPlace = null
      }
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    }
  }
}
</script>
