<template>
  <q-layout view="lHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header class="bg-white text-secondary">
      <q-toolbar>
        <q-btn
          class="lt-sm"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-toolbar-title>
          <div class="row justify-around items-center">
            <div class="col-xs-12 col-sm-8 col-md-6">
              <div class="row justify-around items-center" style="">
                <img
                  src="./../assets/Maracanau_BrasaoConpNovo.svg"
                  class="q-pa-sm q-mt-lg q-mb-md"
                  width="100%"
                  style=""
                />
              </div>
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>

      <div class="q-pa-xl text-center row justify-center items-cente gt-sm">
        <div class="col">
          <span class="text-h3 text-weight-thin text-uppercase">
            Aplicação desenvolvida para acesso via plataforma Mobile, Favor acessar
            através de um Smartphone.
          </span>
        </div>
      </div>
    </q-header>

    <!-- (Optional) The Footer-->

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer
      class="lt-sm"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <user-component />
      <q-list>
        <q-item-label header class="text-primary"> </q-item-label>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container class="lt-sm">
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import UserComponent from "src/components/UserComponent.vue";
import Solicitacoes from "components/Solicitacoes";

const linksData = [
  {
    title: "Perfil",
    caption: "",
    icon: "las la-user-circle",
    link: "Perfil",
  },
  {
    title: "Login",
    caption: "",
    icon: "las la-key",
    link: "Login",
  },
  {
    title: "Sobre o  App",
    caption: "",
    icon: "las la-info-circle",
    link: "/about",
  },
  {
    title: "Sair",
    caption: "",
    icon: "las la-sign-out-alt",
    link: "/",
  },
];

export default {
  name: "MainLayout",
  components: { EssentialLink, UserComponent },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
    };
  },
};
</script>
