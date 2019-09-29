<template>
  <div>
    <div class="header">
      <div class="container section">
        <div style="display: flex; align-items: center">
          <img src="~static/dashboard-icon-white.svg" class="company_logo" />
          <p class="padding-left-10">WENSLink Seller Registration</p>
        </div>
      </div>
    </div>
    <div class="tabbed-layout" style="background-color: #4caf50;">
      <div
        class="flex container justify-between"
        style="    height: 63px;
    
    align-items: center;"
      >
        <div class="flex">
          <i data-feather="check-circle"></i>
          <p class="padding-left-10">Phone Verification</p>
        </div>
        <div class="flex">
          <i data-feather="check-circle"></i>
          <p class="padding-left-10">Seller Information</p>
        </div>
        <div class="flex">
          <i data-feather="check-circle"></i>
          <p class="padding-left-10">Tax Details</p>
        </div>
        <div class="flex">
          <i data-feather="check-circle"></i>
          <p class="padding-left-10">Seller Interview</p>
        </div>
        <div class="flex">
          <i data-feather="check-circle"></i>
          <p class="padding-left-10">Dashboard</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  mounted() {
    feather.replace({ color: 'black' })
  }
}
</script>


<style scoped>
.header {
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #4caf50;
  color: white !important;
  box-shadow: 0px 8px 10px #1e1e1e38;
}

.flex {
  display: flex;
}

.justify-between {
  justify-content: space-between;
}

.justify-around {
  justify-content: space-around;
}

.header p {
  color: white !important;
}

.section {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.company_logo {
  height: 100%;
  width: 33px;
}

p {
  color: black;
  margin: initial;
  line-height: 1.5 !important;
}

.btn-group-vertical>.btn-group:after, .btn-group-vertical>.btn-group:before, .btn-toolbar:after, .btn-toolbar:before, .clearfix:after, .clearfix:before, .container-fluid:after, .container-fluid:before, .container:after, .container:before, .dl-horizontal dd:after, .dl-horizontal dd:before, .form-horizontal .form-group:after, .form-horizontal .form-group:before, .modal-footer:after, .modal-footer:before, .nav:after, .nav:before, .navbar-collapse:after, .navbar-collapse:before, .navbar-header:after, .navbar-header:before, .navbar:after, .navbar:before, .pager:after, .pager:before, .panel-body:after, .panel-body:before, .row:after, .row:before {
    display: table;
    content: initial;

}


</style>