<template>
  <div class="sp sp-circle"></div>
</template>


<style scoped>
.sp {
  width: 32px;
  height: 32px;
  clear: both;
}

/* Spinner Circle Rotation */
.sp-circle {
  border: 4px rgba(101, 101, 101, 0.16) solid;
  border-top: 4px #009688 solid;
  border-radius: 50%;
  -webkit-animation: spCircRot-data-v-3f9bef8e 1s infinite linear;
  animation: spCircRot-data-v-3f9bef8e 1s infinite linear;
}

@-webkit-keyframes spCircRot {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}
@keyframes spCircRot {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}
</style>