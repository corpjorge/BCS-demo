<template>
  <LayoutAuth>
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">

      <div
        class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">Dashboard</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group me-2">
            <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button id="dark-mode" type="button" class="btn btn-sm btn-outline-secondary">
            dark mode
          </button>
        </div>
      </div>
      <div class="container-fluid ">
        <div class="row">
          <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div class="card">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p class="text-sm mb-0 text-capitalize font-weight-bold">
                        Mis cuentas
                      </p>
                      <h5 class="font-weight-bolder mb-0">$53.000</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
            <div class="card">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p class="text-sm mb-0 text-capitalize font-weight-bold">
                        Saldo disponible
                      </p>
                      <h5 class="font-weight-bolder mb-0">$2.300</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-7 mb-lg-0 mb-4">
            <div class="card" style="cursor: pointer">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="d-flex flex-column h-100">
                      <p class="mb-1 pt-2 text-bold">Crédito de consumo</p>
                      <h5 class="font-weight-bolder"
                          style="margin-bottom: 10px; font-style: italic">
                        $50.000.000
                      </h5>
                      <p class="mb-4">Disponible hasta el 20 Jun</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </LayoutAuth>
</template>

<script>
import LayoutAuth from "@/components/LayoutAuth.vue";

export default {
  name: "Home",
  components: {
    LayoutAuth,
  },
  methods: {
    credit() {
      this.$router.push({name: "Credit"});
    },
  },
};
</script>
