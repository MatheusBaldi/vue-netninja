<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs"/>
    <div class="single-blog" v-for="(blog, index) in filteredBlogs" v-bind:key="index">
      <router-link v-bind:to="'/blog/' + blog.id"><h2>{{ blog.title | to-uppercase }}</h2></router-link>
      <article>{{ blog.content | snippet }}</article>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import searchMixin from '../mixins/searchMixin';

export default{
  components: {

  },
  data(){
    return {
      blogs: [],
      search: ''
    }
  },
  methods: {

  },
  created(){
    this.$http.get('https://vue-netninja.firebaseio.com/posts.json')
    .then(function(res){
      let blogs = [];
      let data = res.body;

      for (let key in data){
        data[key].id = key;
        blogs.push(data[key]);
      };

      this.blogs = blogs;
    });
  },
  computed:{
    
  },
  filters:{
    toUppercase(value){
      return value.toUpperCase();
    },
    snippet(value){
      return value.slice(0, 100) + '...';
    }
  },
  directives:{
    'rainbow': {
      bind(el, binding, vnode){
        el.style.color = "#" + Math.random().toString().slice(2,8);
      }
    }
  },
  mixins: [
    searchMixin
  ]
}
</script>

<style>
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
