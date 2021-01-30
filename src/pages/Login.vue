<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card
          v-bind:style="$q.screen.lt.sm ? { width: '80%' } : { width: '50%' }"
          style="z-index: 2"
        >
          <q-card-section>
            <q-avatar size="130px" class="absolute-center shadow-7">
              <!--<img src="./../../public/icons/apple-icon-152x152.png" />-->
              <img
                src="./../assets/Maracanau_BrasaoNovo.png"
                class=""
                style="
                  border: 0.06em solid #024f9c;
                  background-color: #fff;
                  padding: 0.1em;
                "
              />
            </q-avatar>
          </q-card-section>
          <q-card-section> </q-card-section>
          <q-card-section>
            <q-form class="q-gutter-md">
              <q-input color="primary" v-model="username" label="Usuário" lazy-rules />
              <q-input
                type="password"
                color="primary"
                v-model="password"
                label="Senha"
                lazy-rules
              />

              <div>
                <q-btn label="Entrar" to="/Main" type="button" color="green-9" />
              </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
      <img
        class="text-indigo"
        src="./../assets/Maracanau_ave_maracana.svg"
        style="
          width: 210vw;
          opacity: 1;
          position: fixed;
          left: -60vw;
          top: -30vh;
          z-index: 1;
        "
      />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>

<style>
.bg-image {
  /*background-image: linear-gradient(135deg, #186e15 0%, #e7b019 100%);*/
  background-image: linear-gradient(180deg, #fff 15%, #4fade4 130%);
}
</style>
