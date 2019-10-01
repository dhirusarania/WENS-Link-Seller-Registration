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
    <div class="tabbed-layout" style="background-color: #4caf50;overflow: auto;">
      <div class="flex container justify-between" style="height: 63px;align-items: center;">
        <div class="flex">
          <i data-feather="circle"></i>
          <p class="padding-left-10">Phone Verification</p>
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

    <div class="container section seller___interview hide">
      <h1>Tell us about your business</h1>

      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-4">
          <form class="form-body">
            <div class="form-group margin-top-20">
              <label class="control-label noselect">Store Name</label>
              <input
                id="email"
                type="email"
                v-model="email"
                class="form-control"
                maxlength="50"
                autocomplete="anyrandomstring"
              />
            </div>
            <div class="form-group margin-top-20">
              <label class="control-label noselect">Select Product Category</label>
              <select class="form-control" v-model="product_cat">
                <option v-for="p in product_category" :key="p.id" :value="p.id">{{p.name}}</option>
              </select>
            </div>

            <hr />

            <h4 class="subtitle">Enter your address</h4>

            <div class="form-group margin-top-20">
              <label class="control-label noselect">Pincode</label>
              <input
                id="email"
                type="email"
                v-model="email"
                class="form-control"
                maxlength="50"
                autocomplete="anyrandomstring"
              />
            </div>

            <div class="form-group margin-top-20">
              <label class="control-label noselect">Address Line 1</label>
              <input
                id="email"
                type="email"
                v-model="email"
                class="form-control"
                maxlength="50"
                autocomplete="anyrandomstring"
              />
            </div>

            <div class="form-group margin-top-20">
              <label class="control-label noselect">Address Line 2</label>
              <input
                id="email"
                type="email"
                v-model="email"
                class="form-control"
                maxlength="50"
                autocomplete="anyrandomstring"
              />
            </div>

            <div class="form-group margin-top-20">
              <label class="control-label noselect">City</label>
              <input
                id="email"
                type="email"
                v-model="email"
                class="form-control"
                maxlength="50"
                autocomplete="anyrandomstring"
              />
            </div>

            <div class="form-group margin-top-20">
              <label class="control-label noselect">State</label>
              <input
                id="email"
                type="email"
                v-model="email"
                class="form-control"
                maxlength="50"
                autocomplete="anyrandomstring"
              />
            </div>

            <div class="form-group margin-top-20">
              <label class="control-label noselect">Country</label>
              <input
                id="email"
                type="email"
                disabled
                value="India"
                class="form-control"
                maxlength="50"
                autocomplete="anyrandomstring"
              />
            </div>

            <button
              type="submit"
              class="btn btn-green white-text loginButton margin-top-20"
            >Continue</button>
          </form>
        </div>
      </div>
    </div>

    <div class="container section tax_details hide">
      <h1>Update your Tax Details</h1>

      <div class="row">
        <div class="col-12 col-sm-12 col-md-6 col-lg-4">
          <form class="form-body">
            <div class="form-group margin-top-20">
              <input id="email" type="radio" name="GST" value="1" v-model="GST_selection" checked />
              I have GST number
            </div>

            <div v-if="GST_selection == 1">
              <div class="form-group margin-top-20">
                <label class="control-label noselect">Enter your tax details</label>
                <input
                  id="email"
                  type="email"
                  disabled
                  value="India"
                  class="form-control"
                  maxlength="50"
                  autocomplete="anyrandomstring"
                />
              </div>
              <div class="form-group margin-top-20">
                <label class="control-label noselect">Provisional GSTIN</label>
                <input
                  id="email"
                  type="email"
                  disabled
                  value="India"
                  class="form-control"
                  maxlength="50"
                  autocomplete="anyrandomstring"
                />
              </div>
              <div class="form-group margin-top-20">
                <label class="control-label noselect">PAN number</label>
                <input
                  id="email"
                  type="email"
                  disabled
                  value="India"
                  class="form-control"
                  maxlength="50"
                  autocomplete="anyrandomstring"
                />
              </div>
            </div>

            <div class="form-group margin-top-20">
              <input id="email" type="radio" name="GST" value="2" v-model="GST_selection" />
              I sell in GST Exempted Category
            </div>

            <div class="form-group margin-top-20">
              <input id="email" type="radio" name="GST" value="3" v-model="GST_selection" />
              I dont't have it handy and will update later
            </div>

            <div class="form-group margin-top-20">
              <input id="email" type="radio" name="GST" value="4" v-model="GST_selection" />
              I have never registered for GST
            </div>

            <button type="submit" class="btn btn-green white-text loginButton margin-top-20">Next</button>
          </form>
        </div>
      </div>
    </div>

    <div class="container section seller___interview">
      <h1>Choose categories you wish to sell</h1>
      <p>Choose categories you wish to sell</p>

      <div class="row">
        <div class="col-12 col-sm-4" v-for="p in interview_data" :key="p.id">
          <div class="col-12">
            <p class="interview_title">{{p.name}}</p>
            <ul class="selector__section">
              <li v-for="q in p.data" :key="q.id">
                <label class="checkcontainer">
                  <p>{{q.name}}</p>
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      email: "",
      product_cat: 0,
      product_category: [
        {
          id: 1,
          name: 'Home and Garden'
        },
        {
          id: 2,
          name: 'Industrial and Scientific Supply'
        },
        {
          id: 3,
          name: 'Jewelry'
        },
        {
          id: 4,
          name: 'Kitchen'
        },
        {
          id: 5,
          name: 'Luggage and Travel Accessories'
        },
        {
          id: 6,
          name: 'Mobile and Accessories'
        },
        {
          id: 7,
          name: 'Movies and DVD'
        },
        {
          id: 8,
          name: 'Music'
        },
        {
          id: 9,
          name: 'Musical Instruments'
        }
      ],
      GST_selection: '1',
      interview_data: [
        {
          id: 1,
          name: 'Books, Movies & Games',
          data: [
            {
              id: 1,
              name: 'Books'
            },
            {
              id: 2,
              name: 'Movies'
            },
          ]
        },
         {
          id: 2,
          name: 'Clothing, Shoes & Jewelry',
          data: [
            {
              id: 1,
              name: 'Clothing'
            },
            {
              id: 2,
              name: 'Shoes'
            },
          ]
        }
      ]
    }
  },
  mounted() {
    feather.replace({ color: 'white' })
  },

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

.subtitle {
  color: #727272;
}

.interview_title {
  padding: 20px 0;
  font-weight: 500;
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

.w-100 {
  width: 100%;
}

p {
  color: black;
  margin: initial;
  line-height: 1.5 !important;
}

.selector__section li {
  position: relative;
  margin-bottom: 15px;
}

.selector__section p {
  font-weight: normal;
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

.checkcontainer p {
  padding-left: 40px;
  position: relative;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #f8f8f8;
  color: white;
  border: 1px solid #aaaaaa;
}

.container:hover input[type='checkbox'] ~ .checkmark {
  cursor: pointer;
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

label {
  font-weight: 600;
  color: black;
}

.form-control[disabled],
.form-control[readonly],
fieldset[disabled] .form-control {
  background-color: #d2d2d2 !important;
}

select {
  width: 100%;
}
</style>