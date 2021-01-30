<template>
  <q-layout>
    <q-page-container>
      <q-page class="bg-image">
        <div
          class="q-pa-md q-mx-md scroll q-gutter-sm row justify-around items-center rounded-borders"
          style="z-index: 9"
        >
          <q-btn
            style="z-index: 3"
            round
            v-for="n in 14"
            :key="n"
            size="25px"
            color="blue-10"
            icon="mdi-home-flood"
          />
          <q-btn
            style="z-index: 3"
            round
            size="25px"
            color="blue-10"
            icon="mdi-login-variant"
            to="/Login"
          />
        </div>
      </q-page>
      <img
        src="./../assets/Maracanau_ave_maracana.svg"
        style="
          width: 210vw;
          opacity: 1;
          position: fixed;
          left: -60vw;
          top: 2vh;
          z-index: 1;
        "
      />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {};
</script>
<style scoped>
.bg-image {
  background-image: linear-gradient(180deg, #bfc4bf 15%, #f0eeee 130%);
}
</style>
