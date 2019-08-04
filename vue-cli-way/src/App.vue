<template>
  <div>
    <!-- <add-blog></add-blog> -->
    <!-- <show-blogs></show-blogs> -->
    <!-- <list-blogs></list-blogs> -->
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import addBlog from './components/addBlog.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';
import header from './components/header.vue';


export default{
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'list-blogs': listBlogs,
    'app-header': header,
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
