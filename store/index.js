// store -> index.js
import Vuex from "vuex";
import axios from "axios";
const createStore = () => {
  return new Vuex.Store({
    state: {
      fetchedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.fetchedPosts = posts;
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        if (!process.client) {
          console.log("Server Üzerinde çalışıyoruz...");
        }
        return axios
          .get(
            "https://kose-yazilarim-d82f6-default-rtdb.firebaseio.com/posts.json"
          )
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
