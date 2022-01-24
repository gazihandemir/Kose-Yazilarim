<!-- pages -> posts ->  _postId ->index.vue  -->

<template>
  <PostDetail :post="fetchPost" />
</template>
<script>
import PostDetail from "@/components/post/PostDetail";
export default {
  components: {
    PostDetail,
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        fetchPost: {
          id: 1,
          title: "title 1 id'sine budur : (" + context.params.postId + ")",
          subTitle: "sub title 1",
          text: "text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 ",
          author: "author 1",
        },
      });
    }, 1500);
  },
};
</script>
<style scoped></style>