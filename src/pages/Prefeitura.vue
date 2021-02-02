<template>
  <q-page padding>
    <span class="text-uppercase text-h5 text-secondary q-pa-md" style="max-width: 600px">
      Prefeitura
    </span>
    <q-separator class="text-indigo-2" />
    <span class="text-weight-light q-pa-md" style="max-width: 600px">
      R. 1, 652 - Novo Maracanaú, Maracanaú - CE, 61939-160
    </span>

    <div class="q-pa-md" style="max-width: 600px; z-index: 9">
      <q-list>
        <q-expansion-item
          popup
          class="text-primary"
          style="font-size: 1.05rem"
          icon="las la-user-circle"
          label="Roberto Soares Pessoa"
          caption="Prefeito Municipal"
        >
          <q-separator />
          <q-card>
            <q-card-section>
              <span class="text-uppercase text-weight-thin text-subtitle1 text-secondary">
                Contato
              </span>
              <q-separator />
              <q-icon class="q-pa-sm text-secondary" name="las la-phone" size="25px" />
              <q-btn
                flat
                type="a"
                href="tel:9999999999"
                target="__blank"
                class="q-pa-xs"
                style="margin-right: 0.1vw"
                label="(88) 9999-9999"
              /><br />
              <q-icon
                class="q-pa-sm text-secondary"
                name="las la-mail-bulk"
                size="20px"
              />
              <q-btn
                flat
                type="a"
                href="mailto:usuario@serv.com"
                target="__blank"
                class="q-pa-xs text-lowercase"
                style="margin-right: 0.1vw"
                label="usuario@serv.com"
              />
            </q-card-section>
          </q-card>
        </q-expansion-item>
        <q-expansion-item
          popup
          class="text-primary"
          style="font-size: 1.05rem"
          icon="las la-user-circle"
          label="Neton Lacerda"
          caption="Vice - Prefeito"
        >
          <q-separator />
          <q-card>
            <q-card-section>
              <span class="text-uppercase text-weight-thin text-subtitle1 text-secondary">
                Contato
              </span>
              <q-separator />
              <q-icon class="q-pa-sm text-secondary" name="las la-phone" size="20px" />
              <q-btn
                flat
                type="a"
                href="tel:9999999999"
                target="__blank"
                class="q-pa-xs"
                style="margin-right: 0.1vw"
                label="(88) 9999-9999"
              /><br />
              <q-icon
                class="q-pa-sm text-secondary"
                name="las la-mail-bulk"
                size="20px"
              />
              <q-btn
                flat
                type="a"
                href="mailto:usuario@serv.com"
                target="__blank"
                class="q-pa-xs text-lowercase"
                style="margin-right: 0.1vw"
                label="usuario@serv.com"
              />
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <q-expansion-item
          v-for="n in 5"
          :key="n"
          popup
          class="text-primary"
          style="font-size: 1.05rem"
          icon="las la-university"
          label="Secretaria de ..."
          caption="Secretario"
        >
          <q-separator />
          <q-card>
            <q-card-section>
              <span class="text-uppercase text-weight-thin text-subtitle1 text-secondary">
                Contato
              </span>
              <q-separator />
              <q-icon class="q-pa-sm text-secondary" name="las la-phone" size="20px" />
              <q-btn
                flat
                type="a"
                href="tel:9999999999"
                target="__blank"
                class="q-pa-xs"
                style="margin-right: 0.1vw"
                label="(88) 9999-9999"
              /><br />
              <q-icon
                class="q-pa-sm text-secondary"
                name="las la-mail-bulk"
                size="20px"
              />
              <q-btn
                flat
                type="a"
                href="mailto:usuario@serv.com"
                target="__blank"
                class="q-pa-xs text-lowercase"
                style="margin-right: 0.1vw"
                label="usuario@serv.com"
              />
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </q-list>
    </div>
    <q-footer class="bg-white text-primary">
      <q-tabs danse indicator-color="primary" class="">
        <q-route-tab to="/Main" replace icon="ti-home" style="font-size: 0.1em" />
        <!--  <q-route-tab to="/Main" replace icon="alarm" /> -->
      </q-tabs>
      <!--  <q-tabs switch-indicator style="size:2px;">
        <q-route-tab icon="map" to="/your/route" replace label="One Tab" />
        <q-route-tab icon="assignment" to="/some/other/route" replace label="Other Tab" />
      </q-tabs>-->
    </q-footer>
    <img
      src="./../assets/Maracanau_ave_maracana.svg"
      style="
        width: 210vw;
        opacity: 0.3;
        position: fixed;
        left: -60vw;
        top: 13vh;
        z-index: -1;
      "
    />
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
