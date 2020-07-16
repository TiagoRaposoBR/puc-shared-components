<template>
  <div class="cabecalho">
    <div class="cabecalho__menu">
      <span class="cabecalho__menu--item">Blog</span>
      <span class="cabecalho__menu--item">Sobre</span>
      <span class="cabecalho__menu--item">Descrição</span>
    </div>
    <div class="cabecalho__imagem">
      <img class="cabecalho__imagem--img" src="{{foto}}" alt />
    </div>
    <div class="cabecalho__texto">
      <div class="cabecalho__texto--titulo">{{nome}}</div>
      <div class="cabecalho__texto--descricao">{{desc}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cabecalho",
  props: {
    nome: String,
    desc: String,
    foto: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cabecalho {
  width: 100%;
  height: 20rem;
  background-color: royalblue;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: antiquewhite;
}

.cabecalho__menu {
  font-size: medium;
  margin: 0px auto 20px auto;
  width: fit-content;
}

.cabecalho__menu--item {
  margin: 8px 30px;
  display: inline-block;
  cursor: pointer;
}

.cabecalho__menu--item:hover {
  font-weight: bold;
}

.cabecalho__imagem {
  width: 40%;
  float: left;
}

.cabecalho__imagem--img {
  width: 200px;
  height: 206px;
  float: right;
  margin: 0 20px;
}

.cabecalho__texto {
  text-align: left;
}

.cabecalho__texto--titulo {
  font-size: xxx-large;
  margin-bottom: 1rem;
}

.cabecalho__texto--descricao {
  font-size: small;
  width: 40%;
  text-align: justify;
  display: inline-block;
}
</style>
