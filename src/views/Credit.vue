<template>
  <LayoutAuth>
    <div class="container-fluid py-4">
      <div class="row">
        <div class="col-12 col-lg-8 m-auto">
          <form class="multisteps-form__form mb-8" style="height: 408px">
            <div
              class="card multisteps-form__panel p-3 border-radius-xl bg-white js-active"
              data-animation="FadeIn"
            >
              <div class="card-body">
                <h5 class="font-weight-bolder mb-0">
                  Crédito de consumo hasta por $50.000.00
                </h5>
                <p class="mb-0 text-sm">Completa la información</p>
                <div class="multisteps-form__content">
                  <div class="row mt-3">
                    <div class="col-12 col-sm-6">
                      <label>Ingresa el monto a solicitar</label>
                      <input
                        class="multisteps-form__input form-control"
                        type="text"
                        placeholder="eg. Michael"
                      />
                    </div>
                    <div class="col-12 col-sm-6 mt-3 mt-sm-0">
                      <label>Selecciona el plazo de tu crédito</label>
                      <input
                        class="multisteps-form__input form-control"
                        type="text"
                        placeholder="eg. Prior"
                      />
                    </div>
                  </div>
                  <div class="row mt-3">
                    <div class="col-12 col-sm-6">
                      <label>Selecciona la cuenta destino</label>
                      <input
                        class="multisteps-form__input form-control"
                        type="text"
                        placeholder="eg. Creative Tim"
                      />
                    </div>
                    <div class="col-12 col-sm-6 mt-3 mt-sm-0">
                      <label>Verifica tu correo electrónico</label>
                      <input
                        class="multisteps-form__input form-control"
                        type="email"
                        placeholder="eg. soft@dashboard.com"
                      />
                    </div>
                  </div>
                  <div class="button-row d-flex mt-4">
                    <button
                      class="btn bg-gradient-primary ms-auto mb-0 js-btn-next rounded-pill shadow"
                      type="button"
                      title="Next"
                      style="margin-top: 7px"
                    >
                      Solicitar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </LayoutAuth>
</template>

<script>
import LayoutAuth from "@/components/LayoutAuth";

export default {
  name: "Credit",
  components: { LayoutAuth },
};
</script>
