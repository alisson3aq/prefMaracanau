<template>
  <q-page padding>
    <span
      class="text-uppercase text-h5 text-secondary q-px-md"
      style="max-width: 600px; z-index: 99"
    >
      ônibus
      <q-separator class="text-indigo-2" />
    </span>

    <!--    <div class="q-pa-md" style="max-width: 600px">
    </div> -->
    <q-scroll-area style="height: 70vh; top: -3vh" fit rounded-borders>
      <maps-component />
    </q-scroll-area>
    <q-footer class="bg-white text-primary">
      <q-tabs danse indicator-color="primary" class="">
        <q-route-tab to="/Main" replace icon="ti-home" style="font-size: 0.1em" />
      </q-tabs>
    </q-footer>
    <img
      src="./../assets/Maracanau_ave_maracana.svg"
      style="
        width: 210vw;
        opacity: 0.3;
        position: fixed;
        left: -60vw;
        top: 13vh;
        z-index: -1;
      "
    />
  </q-page>
</template>

<script>
import MapsComponent from "src/components/MapsComponent.vue";
export default {
  components: { MapsComponent },
  // name: 'PageName',
};
</script>
