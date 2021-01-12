<template>
  <div class="home">
    <div class="movie_card">
      <router-link to="/movies/2345">
        <img src="../../public/img/download.jpg" alt="" class="movie_img">
        <div class="details">
            <h1>Naruto</h1>
            <p>hsdakdhdhwdhedxbhjsdxjkxjkwdjfdwfgcbfcugkfwbnfcgf
              xefjnewrofixerjfgkerhcfgreijfmxreiferiferifxger
              wxrthcwemfcccccnvreklgjrbtvnkjfkdfghfj
            </p>
        </div>
      </router-link>
    </div>
    
    <form @submit.prevent="" class="form_control">
      <input type="text" 
      v-model="search_query" 
      id="search"
      placeholder="Search for a movie...">
      <input type="submit" value="Search">

    </form>

    <div class="movies_list">

    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  
}
</script>
<style lang="scss">
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
      
    }
  }
}
</style>    