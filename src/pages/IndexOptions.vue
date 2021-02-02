<template>
  <q-page>
    <div class="row q-mx-md" style="z-index: 9">
      <div class="col">
        <q-btn
          style="z-index: 3"
          flat
          class="row justify-center items-center"
          size="40px"
          color="primary"
          icon="las la-university"
          to="/Prefeitura"
        />
        <div
          class="text-primary text-uppercase row justify-center items-center"
          style="margin-top: -12px; font-size: 0.8rem; text-align: center"
        >
          Prefeitura
        </div>
      </div>
      <div class="col">
        <q-btn
          style="z-index: 3"
          flat
          class="row justify-center items-center"
          size="40px"
          color="primary"
          icon="mdi-road-variant"
          to="/hole"
        />
        <div
          class="text-primary text-uppercase row justify-center items-center"
          style="margin-top: -12px; font-size: 0.8rem; text-align: center"
        >
          Buracos em Via Pública
        </div>
      </div>
      <div class="col">
        <q-btn
          style="z-index: 3"
          flat
          class="row justify-center items-center"
          size="40px"
          color="primary"
          icon="mdi-tree-outline"
          to="/pruning"
        />
        <div
          class="text-primary text-uppercase row justify-center items-center"
          style="margin-top: -12px; font-size: 0.8rem; text-align: center"
        >
          Poda de Árvores
        </div>
      </div>
    </div>
    <div class="row q-mx-md" style="z-index: 9">
      <div class="col">
        <q-btn
          style="z-index: 3"
          flat
          class="row justify-center items-center"
          size="40px"
          color="primary"
          icon="lar la-trash-alt"
          to="/cleaning"
        />
        <div
          class="text-primary text-uppercase row justify-center items-center"
          style="margin-top: -12px; font-size: 0.8rem; text-align: center"
        >
          Limpeza de Área Pública
        </div>
      </div>
      <div class="col">
        <q-btn
          style="z-index: 3"
          flat
          class="row justify-center items-center"
          size="40px"
          color="primary"
          icon="las la-recycle"
          to="/collectTrash"
        />
        <div
          class="text-primary text-uppercase row justify-center items-center"
          style="margin-top: -12px; font-size: 0.8rem; text-align: center"
        >
          cata treco
        </div>
      </div>
      <div class="col">
        <q-btn
          style="z-index: 3; left: 3%"
          flat
          class="row justify-center items-center"
          size="40px"
          color="primary"
          icon="mdi-home-search-outline"
          to="/inspectvs"
        />
        <div
          class="text-primary text-uppercase row justify-center items-center"
          style="margin-top: -12px; font-size: 0.7rem; text-align: center"
        >
          fiscalização vigilância sanitaria
        </div>
      </div>
    </div>
    <div class="row q-mx-md" style="z-index: 9">
      <div class="col">
        <q-btn
          style="z-index: 3"
          flat
          class="row justify-center items-center"
          size="40px"
          color="primary"
          icon="las la-assistive-listening-systems"
          to="/noisePollution"
        />
        <div
          class="text-primary text-uppercase row justify-center items-center"
          style="margin-top: -12px; font-size: 0.8rem; text-align: center"
        >
          Poluição Sonora
        </div>
      </div>
      <div class="col">
        <q-btn
          style="z-index: 3"
          flat
          class="row justify-center items-center"
          size="40px"
          color="primary"
          icon="las la-directions"
          to="/signaling"
        />
        <div
          class="text-primary text-uppercase row justify-center items-center"
          style="margin-top: -12px; font-size: 0.8rem; text-align: center"
        >
          Sinalização de Ruas
        </div>
      </div>
      <div class="col">
        <q-btn
          style="z-index: 3; left: 7%"
          flat
          class="row justify-center items-center"
          size="40px"
          color="primary"
          icon="departure_board"
          to="/busLine"
        />
        <div
          class="text-primary text-uppercase row justify-center items-center"
          style="margin-top: -12px; font-size: 0.8rem; text-align: center"
        >
          ônibus
        </div>
      </div>
    </div>
    <div class="row q-mx-md" style="z-index: 9">
      <div class="col">
        <q-btn
          style="z-index: 3"
          flat
          class="row justify-center items-center"
          size="40px"
          color="primary"
          icon="las la-bug"
          to="/pests"
        />
        <div
          class="text-primary text-uppercase row justify-center items-center"
          style="margin-top: -12px; font-size: 0.8rem; text-align: center"
        >
          Dengue, roedares, etc
        </div>
      </div>
      <div class="col">
        <div
          class="text-primary text-uppercase row justify-center items-center"
          style="margin-top: -12px; font-size: 0.8rem; text-align: center"
        ></div>
      </div>
      <div class="col">
        <q-btn
          style="z-index: 3; left: 1%"
          flat
          class="row justify-center items-center"
          size="40px"
          color="primary"
          icon="ti-comments"
          to="/socialNetworks"
        />
        <div
          class="text-primary text-uppercase row justify-center items-center"
          style="margin-top: -12px; font-size: 0.8rem; text-align: center"
        >
          redes sociais
        </div>
      </div>
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
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
<style scoped>
.bg-image {
  background-image: linear-gradient(180deg, #bfc4bf 15%, #f0eeee 130%);
}
</style>
