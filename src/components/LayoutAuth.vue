<template>
  <nav
    class="navbar navbar-light bg-light"
    style="padding: 0; margin-bottom: 25px"
  >
    <div class="container-fluid">
      <a class="navbar-brand">Jorge Eduardo</a>
      <form class="d-flex">
        <button class="btn btn-sm btn-outline-primary" type="submit">
          Salir
        </button>
      </form>
    </div>
  </nav>
  <SideBar />
  <div class="main-content position-relative max-height-vh-100 h-100 fade-in">
    <slot />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
export default {
  name: "LayoutAuth",
  components: { SideBar },
  created() {
    document
      .getElementsByTagName("body")[0]
      .setAttribute("style", "background-color: #f1f1f1!important;");
  },
};
</script>

<style>
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
