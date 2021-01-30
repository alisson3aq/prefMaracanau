<template>
  <q-page padding>
    <!-- content -->
    <span class="text-uppercase text-h4 text-secondary"> Sobre o App </span>
    <q-separator />
    <div class="q-pa-md" style="max-width: 600px">
      informações sobre a proposta da Aplicação
    </div>

    <img
      src="./../assets/Maracanau_ave_maracana.svg"
      style="
        width: 210vw;
        opacity: 0.4;
        position: fixed;
        left: -60vw;
        top: 13vh;
        z-index: 1;
      "
    />

    <q-footer class="bg-white text-primary">
      <q-tabs danse indicator-color="primary" class="">
        <q-route-tab to="/Main" replace icon="ti-home" style="font-size: 0.7em" />
      </q-tabs>
    </q-footer>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
