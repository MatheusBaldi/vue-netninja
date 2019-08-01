<template>
  <div>
    <add-blog></add-blog>
  </div>
</template>

<script>
/* eslint-disable */
import addBlog from './components/addBlog.vue';

export default{
  components: {
    'add-blog': addBlog     
  },
  data(){
    return {
      
    }
  },
  methods: {

  }
}
</script>

<style>
body{
  margin: 0;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}
</style>
