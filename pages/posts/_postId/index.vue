<!-- pages -> posts ->  _postId -> index.vue  -->

<template>
  <PostDetail :post="fetchedPost" />
</template>
<script>
import axios from "axios";
import PostDetail from "@/components/post/PostDetail";
export default {
  components: {
    PostDetail,
  },
  asyncData(context) {
    return axios
      .get(
        `https://kose-yazilarim-d82f6-default-rtdb.firebaseio.com/posts/${context.params.postId}.json`
      )
      .then((response) => {
        return {
          fetchedPost: response.data,
        };
      });
  },
};
</script>
<style scoped></style>

<!-- 
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        fetchedPost: {
          id: 1,
          title: "title 1 id'sine budur : (" + context.params.postId + ")",
          subTitle: "sub title 1",
          text: "text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 ",
          author: "author 1",
        },
      });
    }, 1500);
  },

-->