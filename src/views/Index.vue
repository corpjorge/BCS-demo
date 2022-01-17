<template>
  <div class="text-center mt-5 container content">
    <main class="form-signin">
      <img
        id="logo"
        class="mb-4"
        src="../assets/img/logo.png"
        alt=""
        style="width: 90%"
      />
    </main>
  </div>
</template>

<script>
export default {
  name: "Index",
  created() {
    document
      .getElementsByTagName("body")[0]
      .setAttribute("style", "background-color: #0072c6!important;");
    setTimeout(() => {
      this.login();
    }, 3000);
  },
  methods: {
    async login() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
.content {
  line-height: 400px;
  margin: 0px auto;
  text-align: center;
}

.content img {
  vertical-align: middle;
}

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
</style>
