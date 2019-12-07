<template> </template>
<script>
export default {
  mounted() {
    console.log(this.$route.query.token);

    this.$cookies.removeAll();

    this.$cookies.set("access_token", this.$route.query.token, {
      path: "/",
      // httpOnly : true,
      // secure: true,
      maxAge: 60 * 60 * 24 * 7
    });

    this.$store.dispatch('getStep')

  }
};
</script>
