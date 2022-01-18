<template>
  <div>
    <PostList :posts="fetchedPosts" />
  </div>
</template>
<script>
import PostList from "@/components/post/PostList";

export default {
  components: {
    PostList,
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        fetchedPosts: [
          {
            id: 1,
            title: "Title 1 ",
            subTitle: "Sub title 1 ",
            text: "text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1",
            author: "gazihan1",
          },
          {
            id: 2,
            title: "Title 2",
            subTitle: "Sub title 2",
            text: "text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2",
            author: "gazihan2",
          },
          {
            id: 3,
            title: "Title 3",
            subTitle: "Sub title 3",
            text: "text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3",
            author: "gazihan3",
          },
        ],
      });
    }, 1000);
  },
};
</script>
<style scoped></style>