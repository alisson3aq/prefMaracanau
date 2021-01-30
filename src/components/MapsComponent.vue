<template>
  <q-page class="col">
    <div id="mapa">
      <gmap-map
        :center="center"
        :zoom="zoom"
        :options="options"
        style="width: 100%; height: 93vh;overflow: hidden">
        <gmap-marker v-for="(marker) in markers"
          :key="marker.key"
          :position="marker"
          :icon="icon"
        >
        </gmap-marker>
      </gmap-map>
  </div>
  </q-page>
</template>

<script>
import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCUz0-h_uaOF2HNaLyZtMcLjTMLq7FWwlE'
  }
})

export default {
  data () {
    return {
      center: {
        lat: -7.230072386602554,
        lng: -39.31226728935941
      },
      zoom: 14,
      markers: [
        { lat: -7.215715749321176, lng: -39.32005189504026 },
        { lat: -7.219782987960319, lng: -39.31156474413836 },
        { lat: -7.233893167744179, lng: -39.31593939096388 }
      ],
      options: {
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        fullscreenControl: false
      },
      icon: './icons/favicon-32x32.png'
    }
  }
}
</script>
