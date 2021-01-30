<template>
  <q-layout>
    <q-page-container>
      <q-page class="bg-image row justify-center items-center" style="">
        <transition appear enter-active-class="animated bounceIn">
          <img
            src="./../assets/Maracanau_BrasaoConpNovo.svg"
            class="animate q-pa-lg q-ma-lg"
            style="width: 100vh; margin-top:0vh;"
          />
        </transition>
        <div class="flax flax-center" style=""></div>
      </q-page>
      <img class="text-indigo"
        src="./../assets/Maracanau_ave_maracana.svg"
        style="width: 210vw; opacity: 1; position: fixed; left:-60vw; top: 2vh; z-index: 1;"
      />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  created() {
    setTimeout(() => {
      this.$router.push("/Main");
    }, 3000);
  },
};
</script>
<style scoped>
.bg-image {
  /*background-image: linear-gradient(135deg, #186e15 0%, #e7b019 100%);*/
  background-image: linear-gradient(180deg, #fff 15%, #4fade4 130%);
}
:root {
  --animate-duration: 5s;
  --animate-delay: 4s;
}
</style>
