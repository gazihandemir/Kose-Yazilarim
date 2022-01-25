// store -> index.js
import Vuex from "vuex";
const createStore = () => {
  return new Vuex.Store({
    state: {
      fetchedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.fetchedPosts = posts;
      },
      addPost(state, post) {
        state.fetchedPosts.push(post);
      },
      updatePost(state, editedPost) {
        let postIndex = state.fetchedPosts.findIndex((post) => {
          return post.id === editedPost.id;
        });
        state.fetchedPosts[postIndex] = editedPost;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        if (!process.client) {
          console.log("Server Üzerinde çalışıyoruz...");
        }
        return context.app.$axios
          .get(`${process.env.baseUrl}/posts.json`)
          .then((response) => {
            let data = response.data;
            let postArray = [];
            for (let key in data) {
              postArray.push({ id: key, ...data[key] });
            }
            //console.log(postArray);
            vuexContext.commit("setPosts", postArray);
          });
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      addPost(vuexContext, post) {
        // Return yazarak kullanıdğımız sayfalarda then ile promise alırız ve orada gerekli işlemleri yaparız ör : router işlemleri
        return this.$axios
          .post(`${process.env.baseUrl}/posts.json`, post)
          .then((response) => {
            console.log(response);
            vuexContext.commit("addPost", {
              ...post,
              id: response.data.name,
            });
          });
      },
      updatePost(vuexContext, editedPost) {
        return this.$axios
          .put(`${process.env.baseUrl}/posts/${editedPost.id}.json`, editedPost)
          .then((response) => {
            console.log(editedPost);
            vuexContext.commit("updatePost", editedPost);
          })
          .catch((e) => console.log(e));
      },
    },
    getters: {
      getPosts(state) {
        return state.fetchedPosts;
      },
    },
  });
};

export default createStore;

// vuexContext.dispatch("setPosts", [
//   {
//     id: 1,
//     title: "Title 1 ",
//     subTitle: "Sub title 1 ",
//     text: "text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 ",
//     author: "gazihan1",
//   },
//   {
//     id: 2,
//     title: "Title 2",
//     subTitle: "Sub title 2",
//     text: "text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 ",
//     author: "gazihan2",
//   },
//   {
//     id: 3,
//     title: "Title 3",
//     subTitle: "Sub title 3",
//     text: "text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 ",
//     author: "gazihan3",
//   },
// ]);
