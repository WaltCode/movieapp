<template>
  <div class="home">
    <div class="movie_card">
      <router-link to="/movies/2345">
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcomicbook.com%2Fanime%2Fnews%2Fnaruto-boruto-creator-masashi-kishimoto-learned-success-fan-letters%2F&psig=AOvVaw3SehNo6G3PrQrouM_h8cm0&ust=1610553131009000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCG_Y_glu4CFQAAAAAdAAAAABAI" alt="" class="movie_img">
        <div class="details">
            <h1>Naruto</h1>
            <p>hsdakdhdhwdhedxbhjsdxjkxjkwdjfdwfgcbfcugkfwbnfcgf
              xefjnewrofixerjfgkerhcfgreijfmxreiferiferifxger
              wxrthcwemfcccccnvreklgjrbtvnkjfkdfghfj
            </p>
        </div>
      </router-link>
    </div>
    
    <form @submit.prevent="searchMovies" class="form_control">
      <input type="text" 
      v-model="search_query" 
      id="search"
      placeholder="Search for a movie...">
      <input type="submit" value="Search">

    </form>

    <div class="movies_list">
  
      <div v-for="movie in movies" :key="movie.imdbID" class="movie">
        <router-link :to="'/movies/'+ movie.imdbID" class="movie_link">
        <div class="movieImg">
          <img :src="movie.Poster" :alt="movie.Title" class="movie_img">
          <div class="type">{{movie.Type}}</div>
        </div>
        <div class="movie_detail">
          <p class="title">{{movie.Title}}</p>
          <p class="year">{{movie.Year}}</p>
        </div>
        </router-link> 
      </div>
    

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {ref} from 'vue'
import env from "@/env.js"

export default {
  setup(){
    const search_query = ref('')
    const movies = ref([])

    const searchMovies = () => {
      if(search_query.value != ""){
        fetch(`http://www.omdbapi.com/?apikey=${env.apiKey}&s=${search_query.value}`)
              .then(res => res.json())
              .then(data => {
                movies.value = data.Search
                console.log(movies.value)
                search_query.value = ""
              })
      }
    }

    return{
      search_query,
      movies,
      searchMovies
    }
  }
}
</script>
<style lang="scss">
.movies_list{
  display: flex;
  flex-wrap: wrap;
  margin: 0px 8px;

  .movie{
    flex: 1 1 50%;
    max-width: 50%;
    padding: 16px 8px;

    .movie_link{
      display: flex;
      flex-direction: column;
      height: 100%;
    }
  }
}
.movie_card{
  position: relative;

  .movie_img{
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
    display: block;
    position: relative;
  }

  .details{
    position:absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.6);
    z-index: 1;

    h1, p{
      color: white;
    }
    h1{
      margin-bottom: 10px;
    }
  }
}
.form_control{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;

  input{
    background: none;
    appearance: none;
    outline: none;
    border: none;

    &[type="text"]{
      width: 100%;
      color: white;
      font-size: 20px;
      background-color: #496583;
      padding: 10px 16px;
      border-radius: 8px;
      margin-bottom: 15px;
      box-shadow: 8px 3px 5px rgba(0,0,0,0.2);
      transition: 0.4s;

      &::placeholder{
        color: white;
      }

      &:focus{
        box-shadow: inset 5px 8px 5px rgba(0,0,0,0.2),
                    inset -8px -5px 5px rgba(0, 0, 0, 0.2);
      }
      
    }
    &[type="submit"]{
      width: 100%;
      min-width: 200px;
      background-color:#42b883;
      color: white;
      border-radius: 5px;
      padding: 5px 15px;
      text-transform: uppercase;
      transition: .4s;
    }
    &:hover{
      background-color: #496583;
      color: #42b883;
      font-weight: bold;
    }
  }
}
</style>    