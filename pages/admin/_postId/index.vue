<!-- pages -> admin -> _postId -> index.vue -->
<template>
  <PostForm :is-update="true" :post="loadedPost" />
</template>
<script>
import PostForm from "@/components/admin/PostForm";
export default {
  components: {
    PostForm,
  },
  data() {
    return {
      loadedPost: {
        id: 1,
        title: "title 1",
        subTitle: "sub title 1",
        text: "text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1",
        author: "Gazihan Demir",
      },
    };
  },
};
</script>