<template>
  <div style="max-width: 600px; z-index: 9">
    <q-input v-model="text" filled label="Descrição" type="textarea" />

    <div class="row q-mt-sm">
      <div class="col">
        <q-btn
          style="z-index: 3; left: 12%"
          flat
          class="row justify-center items-center"
          size="50px"
          color="primary"
          icon="las la-camera"
        />
        <div
          class="text-primary text-uppercase row justify-center items-center"
          style="margin-top: -12px; font-size: 1rem; text-align: center"
        >
          Envia Foto
        </div>
      </div>
      <div class="col-2"></div>
      <div class="col">
        <q-btn
          style="z-index: 3; left: 12%"
          flat
          class="row justify-center items-center"
          size="50px"
          color="primary"
          icon="las la-map-marked-alt"
        />
        <div
          class="text-primary text-uppercase row justify-center items-center"
          style="margin-top: -12px; font-size: 1rem; text-align: center"
        >
          Enviar Localização
        </div>
      </div>
    </div>
    <div class="q-pa-md flex flex-center">
      <q-btn color="secondary" size="22px" icon-right="save" label="Enviar Informações" />
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
