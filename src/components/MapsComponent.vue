<template>
  <q-page class="col">
    <div id="mapa">
      <!--<div>
        <h5>my coordenates</h5>
        <p>lat {{ myCoordenates.lat }} e lng {{ myCoordenates.lng }}</p>
      </div>
    -->
      <gmap-map
        :center="myCoordenates"
        :zoom="zoom"
        :options="options"
        style="width: 100%; height: 99vh; overflow: hidden; top: 0vh"
      >
        <gmap-marker
          v-for="marker in markers"
          :key="marker.key"
          :position="marker"
          :icon="icon"
        >
        </gmap-marker>
        <gmap-marker
          v-for="marker_user in markers_user"
          :key="marker_user.key"
          :position="marker_user"
        >
        </gmap-marker>
      </gmap-map>
    </div>
  </q-page>
</template>

<script>
import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
import VueGeolocation from "vue-browser-geolocation";
Vue.use(VueGeolocation);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCUz0-h_uaOF2HNaLyZtMcLjTMLq7FWwlE",
  },
});

export default {
  data() {
    return {
      myCoordenates: {
        lat: 0,
        lng: 0,
      },
      zoom: 17,
      markers: [
        // { lat: -7.215715749321176, lng: -39.32005189504026 },
        // { lat: -7.219782987960319, lng: -39.31156474413836 },
        // { lat: -7.233893167744179, lng: -39.31593939096388 },
      ],
      markers_user: [],
      options: {
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      },
      icon: "./icons/favicon-32x32.png",
    };
  },
  created() {
    this.$getLocation({})
      .then((coordenates) => {
        this.myCoordenates = coordenates;
        for (let i = 1; i < 10; i++) {
          let lat = coordenates.lat + (Math.random() * 5) / 1000;
          let lng = coordenates.lng + (Math.random() * 3) / 1000;
          let coord = { lat, lng };
          this.markers.push(coord);
          this.markers_user.push(coordenates);
        }
      })
      .catch((error) => alert(error));
  },
};
</script>
