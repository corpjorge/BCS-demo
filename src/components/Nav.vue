<template>
  <header class="navbar sticky-top bg-white flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">
      <img src="../assets/img/logo_b.png" style="width: 154px;">
    </a>
    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false"
            aria-label="Toggle navigation">
      <i class="bi bi-list"></i>
    </button>
    <div class="w-100"></div>
    <div class="navbar-nav">
      <div class="nav-item text-nowrap">
        <a class="nav-link text-black px-3" href="#">Sign out</a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Nav"
}
</script>