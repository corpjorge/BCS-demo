<template>
  <aside
    class="sidenav navbar navbar-vertical navbar-expand-xs my-3 fixed-start ms-3 scroll"
    id="sidenav-main"
    style="background-color: #0072c6"
  >
    <div class="sidenav-header">
      <i
        class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
        aria-hidden="true"
        id="iconSidenav"
      ></i>
      <a class="navbar-brand m-0" target="_blank">
        <img
          src="../assets/img/logo.png"
          class="navbar-brand-img h-100"
          alt="main_logo"
        />
      </a>
    </div>
    <hr class="horizontal mt-0 line-white" />
    <div
      class="collapse navbar-collapse w-auto max-height-vh-100 h-100"
      id="sidenav-collapse-main"
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-white">
            <span class="nav-link-text ms-1">Mis productos</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white">
            <span class="nav-link-text ms-1">Administrar mis productos</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
.line-white {
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgb(255 255 255 / 49%),
    rgba(0, 0, 0, 0)
  );
}

.scroll {
  overflow-x: hidden;
  overflow-y: hidden;
}

@media only screen and (max-width: 600px) {
  #sidenav-main {
    display: none !important;
  }
}
</style>
