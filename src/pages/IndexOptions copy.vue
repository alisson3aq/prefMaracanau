<template>
  <q-page>
    <!-- row 1-->
    <div class="row q-mx-md" style="z-index: 9">
      <div class="col">
        <q-btn
          style="z-index: 3"
          flat
          class="row justify-center items-center"
          size="40px"
          color="primary"
          icon="las la-university"
          to="/Prereitura"
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
          icon="lar la-calendar-check"
          to="/Main"
        />
        <div
          class="text-primary text-uppercase row justify-center items-center"
          style="margin-top: -12px; font-size: 0.8rem; text-align: center"
        >
          Agendar Atendimento
        </div>
      </div>
      <div class="col">
        <q-btn
          style="z-index: 3"
          flat
          class="row justify-center items-center"
          type="a"
          href="https://www.maracanau.ce.gov.br/linhas-de-onibus/"
          target="__blank"
          size="40px"
          color="primary"
          icon="las la-bus"
        />
        <div
          class="text-primary text-uppercase row justify-center items-center"
          style="margin-top: -12px; font-size: 0.8rem; text-align: center"
        >
          Ônibus
        </div>
      </div>
    </div>
    <!-- row 2-->
    <div class="row q-mx-md" style="z-index: 9">
      <div class="col">
        <q-btn
          style="z-index: 3"
          flat
          class="row justify-center items-center"
          type="a"
          href="http://servicos2.speedgov.com.br/maracanau/"
          target="__blank"
          size="40px"
          color="primary"
          icon="las la-cogs"
        />
        <div
          class="text-primary text-uppercase row justify-center items-center"
          style="margin-top: -12px; font-size: 0.8rem; text-align: center"
        >
          Serviços
        </div>
      </div>
      <div class="col">
        <q-btn
          style="z-index: 3"
          flat
          class="row justify-center items-center"
          type="a"
          href="https://www.maracanau.ce.gov.br/linhas-de-onibus/"
          target="__blank"
          size="40px"
          color="primary"
          icon="mdi-virus-outline"
        />
        <div
          class="text-primary text-uppercase row justify-center items-center"
          style="margin-top: -12px; font-size: 0.8rem; text-align: center"
        >
          Combate ao COVID
        </div>
      </div>
      <div class="col">
        <q-btn
          style="z-index: 3; left: 10%"
          flat
          class="row justify-center items-center"
          size="40px"
          color="primary"
          icon="las la-file-invoice-dollar"
        />
        <div
          class="text-primary text-uppercase row justify-center items-center"
          style="margin-top: -12px; font-size: 0.8rem; text-align: center"
        >
          Regularização Fiscal
        </div>
      </div>
    </div>
    <!-- row 3-->

    <div class="row q-mx-md" style="z-index: 9">
      <div class="col">
        <q-btn
          style="z-index: 3"
          flat
          class="row justify-center items-center"
          type="a"
          href="http://servicos2.speedgov.com.br/maracanau/"
          target="__blank"
          size="40px"
          color="primary"
          icon="las la-stethoscope"
        />
        <div
          class="text-primary text-uppercase row justify-center items-center"
          style="margin-top: -12px; font-size: 0.8rem; text-align: center"
        >
          Saúde
        </div>
      </div>
      <div class="col">
        <q-btn
          style="z-index: 3"
          flat
          class="row justify-center items-center"
          type="a"
          href="https://www.maracanau.ce.gov.br/linhas-de-onibus/"
          target="__blank"
          size="40px"
          color="primary"
          icon="las la-school"
        />
        <div
          class="text-primary text-uppercase row justify-center items-center"
          style="margin-top: -12px; font-size: 0.8rem; text-align: center"
        >
          Educação
        </div>
      </div>
      <div class="col">
        <q-btn
          style="z-index: 3; left: 10%"
          flat
          class="row justify-center items-center"
          size="40px"
          color="primary"
          icon="las la-camera-retro"
        />
        <div
          class="text-primary text-uppercase row justify-center items-center"
          style="margin-top: -12px; font-size: 0.8rem; text-align: center"
        >
          Turismo
        </div>
      </div>
    </div>
    <!-- row 4-->

    <div
      class="q-mx-md row justify-around items-center rounded-borders"
      style="z-index: 9"
    >
      <q-btn style="z-index: 3" flat size="40px" color="primary" icon="las la-swimmer" />
      <q-btn
        style="z-index: 3"
        flat
        class="row justify-center items-center"
        type="a"
        href="http://portaldoservidor.maracanau.ce.gov.br/home.php?st=inicio"
        target="__blank"
        size="40px"
        color="primary"
        icon="las la-id-badge"
      />
      <q-btn
        style="z-index: 3"
        flat
        class="row justify-center items-center"
        type="a"
        href="https://www.maracanau.ce.gov.br/ouvidoria/"
        target="__blank"
        size="40px"
        color="primary"
        icon="las la-comment"
      />
    </div>

    <img
      src="./../assets/Maracanau_ave_maracana.svg"
      style="
        width: 210vw;
        opacity: 0.8;
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
