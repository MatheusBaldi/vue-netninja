new Vue({
  el: "#vue-app",
  data: {
    age: 25,
    x: 0,
    y: 0
  },
  methods: {
    add: function(value){
      this.age += value;
    },
    subtract: function(value){
      this.age -= value;
    },
    updateXY: function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
});