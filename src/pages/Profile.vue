<template>
  <q-page padding>
    <!-- content -->

    <div class="row q-mx-md" style="max-width: 600px">
      <div class="col-4">
        <q-img
          class="flex flex-center row justify-center rounded-borders"
          src="https://cdn.quasar.dev/img/boy-avatar.png"
          spinner-color="secondary"
          style="height: 120px; max-width: 120px"
        />
      </div>
      <div class="col-8 q-py-xs">
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
          <span
            class="text-weight-thin text-subtitle1 text-lowercase"
            style="font-size: 0.9rem"
          >
            {{ email }}
          </span>
        </div>
        <div class="q-mx-md rounded-borders" style="z-index: 9">
          <span class="text-uppercase text-secondary text-weight-bolder text-subtitle1">
            Bairro:
          </span>
          <span class="text-weight-thin text-subtitle1 text-lowercase">
            {{ bairro }}
          </span>
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
        z-index: -1;
      "
    />
    <q-btn
      style="z-index: 3"
      flat
      label="Alterar Senha"
      size="15px"
      color="primary"
      icon="las la-key"
      to="/Perfil"
      class="q-mb-md"
    />
    <p class="text-uppercase text-h6 text-secondary q-px-md" style="max-width: 600px">
      Minhas Solicitações
      <q-separator class="" />
    </p>
    <div class="q-gutter-md" style="max-width: 600px">
      <q-card bordered class="my-card">
        <q-card-section horizontal>
          <q-card-section class="col-7 q-pt-xs">
            <div class="text-overline">Serviço Solicitado</div>
            <div class="text-h6 q-mt-xs q-mb-xs">Dados</div>
            <div class="text-caption text-grey-8">
              <p>
                <span>
                  <q-icon
                    name="mdi-chart-donut"
                    class="text-secondary"
                    style="font-size: 2em"
                  />
                </span>
                <span> 01/01/2021</span>
              </p>
              <p>
                <span>
                  <q-icon
                    name="mdi-information-outline"
                    class="text-secondary"
                    style="font-size: 2em"
                  />
                </span>
                <span> Em Análise</span>
              </p>
            </div>
          </q-card-section>

          <q-card-section class="col-5 flex flex-center">
            <div class="row q-mx-md" style="z-index: 9">
              <div class="col">
                <q-icon
                  name="mdi-road-variant"
                  class="row justify-end text-secondary q-mb-sm"
                  style="font-size: 5rem; left: 7%; text-align: center"
                />
                <div
                  class="text-secondary text-uppercase row justify-center items-center"
                  style="margin-top: -7px; font-size: 0.8rem; text-align: center"
                >
                  Buraco em Via Pública
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn flat round icon="mdi-file-eye-outline" />
          <q-btn flat color="primary">Detalhas</q-btn>
        </q-card-actions>
      </q-card>
      <q-card bordered class="my-card">
        <q-card-section horizontal>
          <q-card-section class="col-7 q-pt-xs">
            <div class="text-overline">Serviço Solicitado</div>
            <div class="text-h6 q-mt-xs q-mb-xs">Dados</div>
            <div class="text-caption text-grey-8">
              <p>
                <span>
                  <q-icon
                    name="mdi-chart-donut"
                    class="text-secondary"
                    style="font-size: 2em"
                  />
                </span>
                <span> 01/01/2021</span>
              </p>
              <p>
                <span>
                  <q-icon
                    name="mdi-information-outline"
                    class="text-secondary"
                    style="font-size: 2em"
                  />
                </span>
                <span> Em Análise</span>
              </p>
            </div>
          </q-card-section>

          <q-card-section class="col-5 flex flex-center">
            <div class="row q-mx-md" style="z-index: 9">
              <div class="col">
                <q-icon
                  name="las la-directions"
                  class="row justify-end text-secondary q-mb-sm"
                  style="font-size: 5rem; left: 7%; text-align: center"
                />
                <div
                  class="text-secondary text-uppercase row justify-center items-center"
                  style="margin-top: -7px; font-size: 0.8rem; text-align: center"
                >
                  Sinalização de Ruas
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card-section>

        <q-separator />

        <q-card-actions>
          <q-btn flat round icon="mdi-file-eye-outline" />
          <q-btn flat color="primary">Detalhas</q-btn>
        </q-card-actions>
      </q-card>
    </div>

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
