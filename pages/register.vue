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
      <div class="flex container justify-between" style="height: 63px;align-items: center;">
        <div class="flex">
          <!-- <i data-feather="check-circle"></i> -->
          <div v-html="iconSvg"></div>
          <p @click="clicky" class="padding-left-10">Phone Verification</p>
        </div>
        <div class="flex">
          <i data-feather="circle"></i>
          <p class="padding-left-10">Seller Information</p>
        </div>
        <div class="flex">
          <i data-feather="circle"></i>
          <p class="padding-left-10">Tax Details</p>
        </div>
        <div class="flex">
          <i data-feather="circle"></i>
          <p class="padding-left-10">Seller Interview</p>
        </div>
        <div class="flex">
          <i data-feather="circle"></i>
          <p class="padding-left-10">Dashboard</p>
        </div>
      </div>
    </div>

    <div class="container section seller___interview">
      <h1>Choose categories you wish to sell</h1>
      <p>Choose categories you wish to sell</p>

      <div class="row">
        <div class="col-12 col-sm-6">
          <ul>
            <li>
              <label class="checkcontainer">
                <p>One</p>
                <input type="checkbox" checked="checked" />
                <span class="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      message: 'Hello, World!',
      icon: 'flag'
    }
  },
  mounted() {
    feather.replace({ color: 'white' })
  },
  computed: {
    iconSvg: function() {
      return feather.toSvg(this.icon)
    }
  },
  methods: {
    clicky: function() {
      this.message = 'clicked'
      this.icon = 'circle'
    }
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

ul {
  padding-inline-start: 0;
  padding-left: 0;
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

.tabbed-layout p {
  color: white;
}

p {
  color: black;
  margin: initial;
  line-height: 1.5 !important;
}

.btn-group-vertical > .btn-group:after,
.btn-group-vertical > .btn-group:before,
.btn-toolbar:after,
.btn-toolbar:before,
.clearfix:after,
.clearfix:before,
.container-fluid:after,
.container-fluid:before,
.container:after,
.container:before,
.dl-horizontal dd:after,
.dl-horizontal dd:before,
.form-horizontal .form-group:after,
.form-horizontal .form-group:before,
.modal-footer:after,
.modal-footer:before,
.nav:after,
.nav:before,
.navbar-collapse:after,
.navbar-collapse:before,
.navbar-header:after,
.navbar-header:before,
.navbar:after,
.navbar:before,
.pager:after,
.pager:before,
.panel-body:after,
.panel-body:before,
.row:after,
.row:before {
  display: table;
  content: initial;
}

h1 {
  font-weight: 900;
  font-size: 20px;
  line-height: 1.2;
}

/* Hide the browser's default checkbox */
input[type='checkbox'] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkcontainer p{
    padding-left: 15px
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  color: white;
}

/* On mouse-over, add a grey background color */
.container:hover input[type='checkbox'] ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
input[type='checkbox']:checked ~ .checkmark {
  background-color: #4caf50;
  border-radius: 2px;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input[type='checkbox']:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 7px;
  height: 13px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>