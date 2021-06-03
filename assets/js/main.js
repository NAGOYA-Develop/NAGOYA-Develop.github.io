import Vue from 'vue';
window.Vue = Vue;

new Vue({
    el: '#app',
    data() {
      return {
        visible: false,
      };
    },
    created() {
      window.addEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.scrollY = window.scrollY;
        if (!this.visible) {
          this.visible = window.scrollY > 100;
        } else if (window.scrollY < 90) {
          this.visible = !this.visible;
        }
      },
    },
  });