import Vuex from "vuex"

const createStore = () => {
    return new Vuex.Store({
        state: {
            fetchedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.fetchedPosts = posts;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                vuexContext.dispatch("setPosts",
                    [
                        {
                            id: 1,
                            title: "Title 1 ",
                            subTitle: "Sub title 1 ",
                            text: "text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 text 1 ",
                            author: "gazihan1",
                        },
                        {
                            id: 2,
                            title: "Title 2",
                            subTitle: "Sub title 2",
                            text: "text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 text 2 ",
                            author: "gazihan2",
                        },
                        {
                            id: 3,
                            title: "Title 3",
                            subTitle: "Sub title 3",
                            text: "text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 text 3 ",
                            author: "gazihan3",
                        },
                    ]);
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit("setPosts", posts);
            }
        },
        getters: {
            getPosts(state) {
                return state.fetchedPosts;
            }
        }
    });
}

export default createStore;