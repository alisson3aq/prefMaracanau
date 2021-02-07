<template>
  <div style="max-width: 600px; z-index: 9">
    <q-input v-model="text" filled label="Descrição" type="textarea" />

    <div class="row q-mt-sm">
      <div class="col flex flex-center">
        <q-btn
          icon="mdi-camera-plus-outline"
          flat
          class="q-pa-xs q-mt-lg text-secondary"
          style="font-size: 2rem"
        />
        <div class="text-secondary text-uppercase">Envia Foto</div>
      </div>
      <div class="col flex flex-center">
        <q-btn
          icon="mdi-map-marker-radius-outline"
          flat
          class="q-pa-xs q-mt-lg text-secondary"
          style="font-size: 2rem"
        />
        <div class="text-secondary text-uppercase">ENVIAR LOCALIZAÇÃO</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data() {
    return {
      text: "",
    };
  },
};
</script>
