<template>
  <LayoutAuth>
    <div class="container-fluid py-4">
      <div class="row">
        <div
          class="col-xl-3 col-sm-6 mb-xl-0 mb-4"
          style="margin-bottom: 9px !important"
        >
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
        <div
          class="col-xl-3 col-sm-6 mb-xl-0 mb-4"
          style="margin-bottom: 9px !important"
        >
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
      <div class="row mt-4">
        <div class="col-lg-7 mb-lg-0 mb-4">
          <div class="card" style="cursor: pointer" @click="credit">
            <div class="card-body p-3">
              <div class="row">
                <div class="col-lg-6">
                  <div class="d-flex flex-column h-100">
                    <p class="mb-1 pt-2 text-bold">Crédito de consumo</p>
                    <h5
                      class="font-weight-bolder"
                      style="margin-bottom: 10px; font-style: italic"
                    >
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
      this.$router.push({ name: "Credit" });
    },
  },
};
</script>
