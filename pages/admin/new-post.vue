<!-- pages -> admin -> new-post.vue -->
<template>
  <PostForm @submit="savePost($event)" />
</template>
<script>
import axios from "axios";
import PostForm from "@/components/admin/PostForm";
export default {
  components: {
    PostForm,
  },
  methods: {
    savePost(post) {
      console.log(post);
      axios
        .post(
          "https://kose-yazilarim-d82f6-default-rtdb.firebaseio.com/posts.json",
          post
        )
        .then((res) => {
          console.log(res);
          this.$router.push("/admin");
        });
    },
  },
};
</script>