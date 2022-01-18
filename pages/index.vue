<template>
  <div>
    <PostList :posts="fetchedPosts" />
    <About />
  </div>
</template>
<script>
import PostList from "@/components/post/PostList";
import About from "@/components/home/About";

export default {
  components: {
    PostList,
    About,
  },
  computed: {
    fetchedPosts() {
      return this.$store.getters.getPosts;
    },
  },
  // data() {
  //   return {
  //     fetchedPosts: [],
  //   };
  // },
  // created() {
  //  this.$store.dispatch("setPosts", this.fetchedPosts);
  // },
  // fetch(context) {
  //   return new Promise((resolve, reject) => {
  //     context.store.dispatch("setPosts", [
  //       {
  //         id: 1,
  //         title: "Title 1 ",
  //         subTitle: "Sub title 1 ",
  //         text: "text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 ",
  //         author: "gazihan1",
  //       },
  //       {
  //         id: 2,
  //         title: "Title 2",
  //         subTitle: "Sub title 2",
  //         text: "text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 ",
  //         author: "gazihan2",
  //       },
  //       {
  //         id: 3,
  //         title: "Title 3",
  //         subTitle: "Sub title 3",
  //         text: "text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 ",
  //         author: "gazihan3",
  //       },
  //     ]);
  //     resolve();
  //   });
  // },

  //işlemler biter sonra sayfa yüklenir.
  //   asyncData(context, callback) { -> promise kullandığımız için callback parametresini siliyoruz
  // asyncData(context) {
  //   return new Promise((resolve, reject) => {
  //     resolve({
  //       fetchedPosts: [
  //         {
  //           id: 1,
  //           title: "Title 1 ",
  //           subTitle: "Sub title 1 ",
  //           text: "text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 ",
  //           author: "gazihan1",
  //         },
  //         {
  //           id: 2,
  //           title: "Title 2",
  //           subTitle: "Sub title 2",
  //           text: "text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 ",
  //           author: "gazihan2",
  //         },
  //         {
  //           id: 3,
  //           title: "Title 3",
  //           subTitle: "Sub title 3",
  //           text: "text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 ",
  //           author: "gazihan3",
  //         },
  //       ],
  //     });
  //   })
  //     .then((data) => {
  //       return data;
  //     })
  //     .catch((e) => {
  //       context.error(new Error());
  //     });
  //   // setTimeout(() => {
  //   //   // 1. parametre hatalar için -> callback(new Error(), {
  //   //   callback(null, {
  //   //     fetchedPosts: [
  //   //       {
  //   //         id: 1,
  //   //         title: "Title 1 ",
  //   //         subTitle: "Sub title 1 ",
  //   //         text: "text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 ",
  //   //         author: "gazihan1",
  //   //       },
  //   //       {
  //   //         id: 2,
  //   //         title: "Title 2",
  //   //         subTitle: "Sub title 2",
  //   //         text: "text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 ",
  //   //         author: "gazihan2",
  //   //       },
  //   //       {
  //   //         id: 3,
  //   //         title: "Title 3",
  //   //         subTitle: "Sub title 3",
  //   //         text: "text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 ",
  //   //         author: "gazihan3",
  //   //       },
  //   //     ],
  //   //   });
  //   // }, 2000);
  // },
};
</script>
<style scoped></style>