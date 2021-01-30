<template>
  <q-page padding>
    <!-- content -->
    <div class="flex flex-center q-my-lg">
      <q-img
        class="flex flex-center row justify-center rounded-borders"
        src="https://cdn.quasar.dev/img/boy-avatar.png"
        spinner-color="secondary"
        style="height: 120px; max-width: 120px"
      />
    </div>
    <div class="q-mx-md rounded-borders" style="z-index: 9">
      <span class="text-uppercase text-secondary text-weight-bolder text-subtitle1">
        Nome:
      </span>
      <span class="text-weight-thin text-subtitle1"> {{ nome }} </span>
    </div>
    <div class="q-mx-md rounded-borders" style="z-index: 9">
      <span class="text-uppercase text-secondary text-weight-bolder text-subtitle1">
        E-mail:
      </span>
      <span class="text-weight-thin text-subtitle1 text-lowercase"> {{ email }} </span>
    </div>
    <div class="q-mx-md rounded-borders" style="z-index: 9">
      <span class="text-uppercase text-secondary text-weight-bolder text-subtitle1">
        Bairro:
      </span>
      <span class="text-weight-thin text-subtitle1 text-lowercase"> {{ bairro }} </span>
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
    <q-btn
      style="z-index: 3"
      flat
      label="Alterar Senha"
      size="15px"
      color="primary"
      icon="las la-key"
      to="/Main"
    />
    <q-footer class="bg-white text-secondary">
      <q-tabs danse indicator-color="primary" class="">
        <q-route-tab to="/Main" replace icon="ti-home" style="font-size: 0.2em" />
        <!--  <q-route-tab to="/Main" replace icon="alarm" /> -->
      </q-tabs>
      <!--  <q-tabs switch-indicator style="size:2px;">
        <q-route-tab icon="map" to="/your/route" replace label="One Tab" />
        <q-route-tab icon="assignment" to="/some/other/route" replace label="Other Tab" />
      </q-tabs>-->
    </q-footer>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      nome: "Usuário do App",
      email: "usuario@serv.com.br",
      bairro: "Bairro do Usuário",
    };
  },
};
</script>
