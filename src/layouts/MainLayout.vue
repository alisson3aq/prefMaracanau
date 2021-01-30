<template>
  <q-layout view="fHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title class=""> Pref. Maracanaú </q-toolbar-title>

        <div>
          <q-btn
            flat
            color="blue-3"
            icon="mdi-account-circle"
            align="around"
            label="Login"
            to="/login"
          />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      width="304"
      bordered
      content-class="bg-grey-1"
    >
      <user-component />
      <q-list>
        <q-item-label header class="text-grey-8"> </q-item-label>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import UserComponent from "src/components/UserComponent.vue";

const linksData = [
  {
    title: "Home",
    caption: "",
    icon: "mdi-home-city",
    link: "Main",
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
