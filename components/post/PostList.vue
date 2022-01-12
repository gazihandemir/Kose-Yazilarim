<template>
  <div
    class="
      container-fluid
      mt-5
      d-flex
      flex-wrap
      justify-content-center
      align-items-center
    "
  >
   <Post v-for="i in 3" :key="i"/> 
  </div>
</template>
<script>
import Post from "@/components/post/Post";
export default {
  components: {
    Post,
  },
};
</script>