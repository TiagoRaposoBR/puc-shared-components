<template>
<div class="feed-post">
    <div class="feed-post__titulo">
        {{titulo}}
    </div>
    <div class="feed-post__texto">
        {{texto}}
    </div>
</div>
</template>

<script>
export default {
  name: "FeedPost",
  props: {
    titulo: String,
    texto: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.feed-post {
    margin: 20px 0;
    cursor: pointer;
}

.feed-post:hover .feed-post__titulo {
    color: royalblue;
}

.feed-post__titulo {
    font-size: larger;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.feed-post__texto {
    font-style: italic;
}
</style>
