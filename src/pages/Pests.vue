<template>
  <q-page padding>
    <span
      class="text-uppercase text-h5 text-secondary q-pa-md"
      style="max-width: 600px"
    >
      Dengue, roedares, etc
    </span>
    <q-separator class="text-indigo-2" />
    <span class="text-weight-light q-pa-md" style="max-width: 600px"> </span>
    <div class="q-px-md" style="max-width: 600px"></div>
    <solicitacoes />
    <q-footer class="bg-white text-primary">
      <q-tabs danse indicator-color="primary" class="">
        <q-route-tab
          to="/Main"
          replace
          icon="ti-home"
          style="font-size: 0.1em"
        />
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
import solicitacoes from "src/components/solicitacoes.vue";
export default {
  components: { solicitacoes },
  // name: 'PageName',
};
</script>
