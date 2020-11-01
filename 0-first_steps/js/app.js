var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!!",
    sum: 3,
    isVisible: true,
    people: ["Sammy", "Natalia", "Juan"],
    content_html: "<h1>Hola mundo!</h1>",
    src: "http://qnimate.com/wp-content/uploads/2014/03/images2.jpg",
    alt: "Descripsión de la imagen",
    numero: 0,
    username: "",
  },
  computed: {
    // a computed is like a method but save in cache the result
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split("").reverse().join("");
    },
  },
  methods: {
    calculateSum(value1, value2) {
      return value1 + value2;
    },
    incrementar() {
      this.numero++;
    },
    decrementar() {
      this.numero--;
    },
  },
});
