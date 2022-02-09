<template>
  <Nav/>
  <div class="container-fluid">
    <div class="row">
      <SideBar/>
      <slot/>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import Nav from "@/components/Nav";

export default {
  name: "LayoutAuth",
  components: {Nav, SideBar},
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
