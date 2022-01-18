<template>
  <div class="text-center mt-5 fade-in" style="margin-top: 60px">
    <main class="form-signin">
      <form autocomplete="off" @submit.prevent="login">
        <img
          id="logo"
          class="mb-4"
          src="../assets/img/logo_b.png"
          alt=""
          style="width: 90%; margin-bottom: 15px"
        />
        <div class="form-floating my-2" style="margin-bottom: 7px">
          <select class="form-select" aria-label="Default select example">
            <option selected>Seleccionar</option>
            <option value="1">Cedula de ciudadanía</option>
            <option value="2">Cedula de extranjería</option>
            <option value="3">Número de identificación tributaria</option>
            <option value="3">Tarjeta de identidad</option>
            <option value="3">Permisos especial de permanencia</option>
            <option value="3">Usuario</option>
          </select>
          <label for="floatingInput">Tipo de identificación</label>
        </div>
        <div class="form-floating my-2" style="margin-bottom: 7px">
          <input
            type="text"
            class="form-control rounded shadow"
            id="floatingInput"
            placeholder="Cedula"
            v-model="user.document"
          />
          <label for="floatingInput">Numero de identificación</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control rounded shadow"
            id="floatingPassword"
            placeholder="Contraseña"
            v-model="user.password"
          />
          <label for="floatingPassword">Contraseña</label>
        </div>

        <button
          class="w-100 btn btn-lg btn-primary rounded-pill shadow"
          type="submit"
        >
          Iniciar sesión
        </button>
        <p class="mt-5 mb-3 text-white">&copy; 2022</p>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        document: null,
        password: null,
      },
      error: {},
    };
  },
  created() {
    document
      .getElementsByTagName("body")[0]
      .setAttribute("style", "background-color: #fff!important;");
  },
  methods: {
    async login() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
#logo {
  width: 99%;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.fade-in {
  -webkit-animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: fade-in 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}

@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
