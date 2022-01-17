<template>
  <div class="fade-in-right">
    <slot />
    <footer class="footer pt-3">
      <div class="container-fluid">
        <div class="row align-items-center justify-content-lg-between">
          <div class="col-lg-6 mb-lg-0 mb-4">
            <div class="copyright text-center text-sm text-muted text-lg-start">
              © 2022,made with <i class="fa fa-heart" aria-hidden="true"></i>
              by BCS
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "LayoutAuth",
};
</script>
