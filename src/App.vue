<template>
    <header>
      <router-link to="/">
        <h1>Vue <span>Movies</span></h1>
      </router-link>  
    </header>
    <main>
      <router-view></router-view>
    </main>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;

  &::selection{
    background: transparentize($color: #428883, $amount: .5);
  }
}
body{
  background-color: #35495e;
}
a {
  text-decoration: none;
}
header{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #2c3d4e;
  box-shadow: 6px 6px 6px rgba(0,0,0,.1);

  h1{
    color: white;;
    font-size: 28px;

    span{
      color: #42b883;
    }
  }
}
</style>
