<template>
  <div class="q-pt-lg row justify-around items-start q-gutter-md bg-blue-11">
    <q-item>
      <q-item-section avatar>
        <q-avatar size="70px" class="shadow-4">
          <!-- <img
            src="https://cdn.quasar.dev/img/avatar1.jpg"
            style="border: 0.07em solid green"
          />-->
          <img
            src="https://github.com/aalissonaq.png"
            style="border: 0.07em solid green"
          />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label class="text-overline" style="font-size: 1.5em"
          >Usuário(a)</q-item-label
        >
        <q-item-label caption>Bairro</q-item-label>
        <!--<q-item-label caption>Juazeiro do Norte-CE</q-item-label>-->
      </q-item-section>
      <div class="col-auto q-ml-md">
        <!-- <q-btn color="grey-7" round flat icon="more_vert">
        <q-menu cover auto-close>
            <q-list>
              <q-item clickable>
                <q-item-section class="text-teal-9">Sair </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>-->
      </div>
    </q-item>
    <q-separator />

    <q-tabs
      v-model="tab"
      dense
      align="justify"
      class="text-blue-10 row justify-end"
      :breakpoint="0"
    >
      <q-btn
        flat
        type="a"
        href="https://www.maracanau.ce.gov.br"
        target="__blank"
        class="q-pl"
        style="margin-right: 0.1vw; margin-left: 2px"
        icon="las la-globe-americas"
      />
      <q-btn
        flat
        type="a"
        href="mailto:ouvidoria@maracanau.ce.gov.br"
        target="__blank"
        class="q-pa"
        style="margin-right: 0.1vw"
        icon="mdi-email-outline"
      />
      <q-btn
        flat
        type="a"
        href="tel:8535215850"
        target="__blank"
        class="q-pa-xs"
        style="margin-right: 0.1vw"
        icon="las la-phone"
      />
      <!--
      <q-btn
        flat
        type="a"
        href="https://t.me/AlissonAlmeida"
        target="__blank"
        class="q-pa"
        style="margin-right: 0.1vw"
        icon="lab la-telegram"
      />
      <q-btn
        flat
        type="a"
        href="https://api.whatsapp.com/send?phone=+5588996965764&text=Olá"
        target="__blank"
        class="q-pa-xs"
        style="margin-right: 0px"
        icon="mdi-whatsapp"
      />-->
    </q-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: "",
    };
  },
};
</script>

<style></style>
