<template>
  <div class="movie_detail">
      <h1>hello</h1>
  </div>
</template>

<script>
import {ref, onBeforeMount} from 'vue'
import {useRoute} from "vue-router"
import env from '@/env.js'
export default {
 setup(){
    const route = useRoute();
    const movie = ref({})

    onBeforeMount(()=> fetch(`http://www.omdbapi.com/?apikey=${env.apiKey}&i=${route.params.id}&plot=full`)
              .then(res => res.json())
              .then(data => {
                movie.value = data
                console.log(movie.value)
              }))


    return{
        movie
    }
    }
}
</script>

<style>

</style>