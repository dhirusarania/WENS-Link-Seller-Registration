<template>
  <div>
<div data-ng-controller="in-ssr-header-controller" data-ng-init="init('Header_BC_a1r2j3u4-n5s6-b7h8-a9r0-a1d2w3a4j567')" class="ng-scope">
    
        
  
<div class="a-section">
    <div class="a-box a-box-normal a-color-offset-background"><div class="a-box-inner a-padding-base" style="    display: flex;
    justify-content: space-between;
    align-items: center;">
        <a data-ng-href="" class="a-link-normal" href="#">
           <div style="display: flex;align-items: center;">
          <img style="height: 100%;width: 35px;"
            src="~static/dashboard-icon-black.png"
          />
          <p style="margin-left: 15px;font-size:14px;font-weight: bold">WENSLink Seller Registration</p>
        </div>
        </a>
        <ul data-ng-mouseout="offFocus()" data-ng-mouseover="onFocus('settings')" class="a-unordered-list a-nostyle a-vertical header-settings-tab">
         <nuxt-link class="a-link-normal ng-binding" to="/login">Logout</nuxt-link>
      
        </ul>
    </div></div>
</div>
            
        
    
</div>


<div class="a-box a-box-normal page-nav"><div class="a-box-inner a-padding-base">
  <div class="stepRow">
    <!-- ngRepeat: step in navigation.Steps --><div ng-class="['step', getStepClass(step.currentStep ,step.stepCompletionStatus)]" ng-repeat="step in navigation.Steps" class="ng-scope step stepCompleted">


      <div data-ng-hide="isLinkAllowed(step)" class="stepLinkBox" title="Phone Verification">
        <img class="stepImg" ng-src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/completedStepA._CB295853638_.png" src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/completedStepA._CB295853638_.png">
        <span class="step-text ng-binding">Phone Verification</span>
      </div>

    </div><!-- end ngRepeat: step in navigation.Steps --><div ng-class="['step', getStepClass(step.currentStep ,step.stepCompletionStatus)]" ng-repeat="step in navigation.Steps" class="ng-scope step stepActive">



      <div data-ng-hide="isLinkAllowed(step)" class="stepLinkBox" title="Seller Information">
        <img class="stepImg" ng-src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/currentStepA._CB295853638_.png" src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/currentStepA._CB295853638_.png">
        <span class="step-text ng-binding">Seller Information</span>
      </div>

    </div><!-- end ngRepeat: step in navigation.Steps --><div ng-class="['step', getStepClass(step.currentStep ,step.stepCompletionStatus)]" ng-repeat="step in navigation.Steps" class="ng-scope step stepNotReady">



      <div data-ng-hide="isLinkAllowed(step)" class="stepLinkBox" title="Tax Details">
        <img class="stepImg" ng-src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/notReadyStep._CB295853632_.png" src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/notReadyStep._CB295853632_.png">
        <span class="step-text ng-binding">Tax Details</span>
      </div>

    </div><!-- end ngRepeat: step in navigation.Steps --><div ng-class="['step', getStepClass(step.currentStep ,step.stepCompletionStatus)]" ng-repeat="step in navigation.Steps" class="ng-scope step stepNotReady">



      <div data-ng-hide="isLinkAllowed(step)" class="stepLinkBox" title="Seller Interview">
        <img class="stepImg" ng-src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/notReadyStep._CB295853632_.png" src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/notReadyStep._CB295853632_.png">
        <span class="step-text ng-binding">Seller Interview</span>
      </div>

    </div><!-- end ngRepeat: step in navigation.Steps --><div ng-class="['step', getStepClass(step.currentStep ,step.stepCompletionStatus)]" ng-repeat="step in navigation.Steps" class="ng-scope step stepNotReady">

   

      <div data-ng-hide="isLinkAllowed(step)" class="stepLinkBox" title="Dashboard">
        <img class="stepImg" ng-src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/notReadyStep._CB295853632_.png" src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/notReadyStep._CB295853632_.png">
        <span class="step-text ng-binding">Payment</span>
      </div>

    </div><!-- end ngRepeat: step in navigation.Steps -->
  </div>
</div></div>

    <!-- <div class="tabbed-layout" style="overflow: auto;">
      <div class="flex container justify-between" style="height: 63px;align-items: center;">
        <div class="flex">
          <i data-feather="check-circle"></i>
          <p class="padding-left-10 verified">Phone Verification</p>
        </div>
        <div v-bind:class="{'selected': currentOption == 1}" class="flex" @click="selectThis(1)">
          <i data-feather="circle"></i>
          <p class="padding-left-10">Seller Information</p>
        </div>
        <div v-bind:class="{'selected': currentOption == 2}" class="flex" @click="selectThis(2)">
          <i data-feather="circle"></i>
          <p class="padding-left-10">Tax Details</p>
        </div>
        <div v-bind:class="{'selected': currentOption == 3}" class="flex" @click="selectThis(3)">
          <i data-feather="circle"></i>
          <p class="padding-left-10">Seller Interview</p>
        </div>
        <div v-bind:class="{'selected': currentOption == 4}" class="flex" @click="selectThis(4)">
          <i data-feather="circle"></i>
          <p class="padding-left-10">Dashboard</p>
        </div>
      </div>
    </div> -->

    <div class="container section seller___interview" v-if="currentOption == 1">
      <div class="a-section main">
        <div class="a-section a-spacing-base a-spacing-top-base">
          <form>
            <div
              data-ng-controller="display-name-fragment-controller"
              data-ng-init="init('Store_Name_BC_67635828-f378-41af-bc81-b6c1b3b8b032')"
              class="a-section ng-scope"
            >
              <div class="a-section a-text-left dn_completeDiv">
                <!-- ngIf: fragmentData.dn_fragment_heading.visibility -->
                <div
                  data-ng-if="fragmentData.dn_fragment_heading.visibility"
                  class="a-section a-spacing-none ng-scope"
                >
                <h2 class="a-spacing-small a-color-state a-text-normal">
                Tell us about your business
            </h2>
                  <span class="a-text-bold ng-binding">
                    Store Name
                  </span>
                </div>
                <!-- end ngIf: fragmentData.dn_fragment_heading.visibility -->
                <!-- ngIf: fragmentData.dn_fragment_display_name.visibility -->
                <div
                  data-ng-if="fragmentData.dn_fragment_display_name.visibility"
                  class="a-section a-spacing-none ng-scope"
                >
                  <input
                    type="text"
                    maxlength="50"
                    autocomplete="off"
                    v-model="store_name"
                    :class="['input-group', isValid('store_name')]"
                    id="store_name"
                    name="displayNameField"
                    class="a-input-text dn_inputTextbox celwidget ng-scope ng-pristine ng-invalid ng-invalid-required"
                  />
                  <!-- ngIf: fragmentData.dn_fragment_verify.visibility && !fragmentData.dn_fragment_display_name.disabled -->
                  <span
                    data-ng-if="fragmentData.dn_fragment_verify.visibility &amp;&amp; !fragmentData.dn_fragment_display_name.disabled"
                    class="dn_verifyLinkDiv celwidget ng-scope"
                  >
                    <!-- <span
                      data-ng-click="checkDisplayName()"
                      class="a-color-link dn_verifyLink ng-binding"
                    >Check Availability</span> -->
                  </span>
                  <div class="dn_messageDiv"></div>
                </div>
                <!-- end ngIf: fragmentData.dn_fragment_display_name.visibility -->
              </div>
            </div>
          </form>
        </div>

        <div class="a-section a-spacing-base a-spacing-top-base">
          <div
            data-ng-controller="primary-category-fragment-controller"
            data-ng-init="init('Primary_Category_BC_67635828-f378-41af-bc81-b6c1b3b8b032')"
            class="a-section primary-category-fragment ng-scope"
          >
            <p class="a-spacing-none a-text-bold ng-binding">Select Product Category</p>

            <div class="form-group margin-top-20">
              <select class="form-control" v-model="product_cat" style="width: 280px;">
                <option v-for="p in product_category" :key="p.id" :value="p.name">{{p.name}}</option>
              </select>
            </div>

          </div>
        </div>

        <div class="a-section a-spacing-base a-spacing-top-base">
          <div
            data-ng-controller="address-fragment-controller"
            data-ng-init="init('Business_Address_BC_67635828-f378-41af-bc81-b6c1b3b8b032')"
            class="a-section a-spacing-none ng-scope"
          >
            <form name="addressFragment" class="ng-dirty ng-invalid ng-invalid-required">
              <div
                data-ng-show="fragmentData.enabledOnPageLoad.value"
                class="a-section address-col2"
              >
                <hr class="a-divider-normal address-divider" />
                <div class="a-section address-noBorder address-pv_box" role="form">
                  <!-- ngIf: fragmentData.pv_fragment_heading.visibility -->
                  <div
                    data-ng-if="fragmentData.pv_fragment_heading.visibility"
                    class="a-section a-spacing-small celwidget ng-scope"
                  >
                    <h4
                      class="a-spacing-mini a-spacing-top-small a-color-tertiary ng-binding"
                      role="banner"
                    >Enter your address</h4>
                  </div>
                  <!-- end ngIf: fragmentData.pv_fragment_heading.visibility -->

                  <div
                    data-ng-hide="fragmentData.addressFieldsDisable"
                    data-ng-show="!fragmentData.addressFieldsDisable || enableEasyshipAddressForm"
                    class="a-section"
                  >
                    <!-- ngIf: fragmentData.pincode.visibility -->
                    <div
                      data-cel_widget_id="PV_PincodeInput"
                      data-ng-if="fragmentData.pincode.visibility"
                      class="a-section a-spacing-small celwidget ng-scope"
                    >
                      <div class="a-section a-spacing-none address-inputName ng-binding">Pincode</div>
                      <input
                        type="number"
                        maxlength="6"
                        v-model="pincode"
                        :class="['input-group', isValid('pincode')]"
                        autocomplete="off"
                        id="pincode"
                        class="a-input-text address-textbox ng-scope ng-pristine ng-valid-pattern ng-animate ng-valid-remove ng-invalid-add ng-valid-required-remove ng-valid-remove-active ng-invalid ng-invalid-add-active ng-valid-required-remove-active ng-invalid-required"
                      />
                    </div>
                    <!-- end ngIf: fragmentData.pincode.visibility -->
                    <!-- ngIf: fragmentData.name.visibility -->
                    <div
                      data-cel_widget_id="PV_PincodeInput"
                      data-ng-show="fragmentData.address_line1.visibility"
                      class="a-section a-spacing-small celwidget"
                    >
                      <div
                        class="a-section a-spacing-none address-inputName ng-binding"
                      >Address Line 1</div>
                      <input
                        type="text"
                        maxlength="60"
                        v-model="addressline_1"
                        :class="['input-group', isValid('addressline_1')]"
                        autocomplete="off"
                        id="address_line1"
                        class="a-input-text address-textbox ng-scope ng-pristine ng-animate ng-valid-remove ng-invalid-add ng-valid-required-remove ng-valid-remove-active ng-invalid ng-invalid-add-active ng-valid-required-remove-active ng-invalid-required"
                        style
                      />
                    </div>
                    <div
                      data-cel_widget_id="PV_PincodeInput"
                      data-ng-show="fragmentData.address_line2.visibility"
                      class="a-section a-spacing-small celwidget"
                    >
                      <div
                        class="a-section a-spacing-none address-inputName ng-binding"
                      >Address Line 2</div>
                      <input
                        type="text"
                        maxlength="60"
                        value
                        autocomplete="off"
                        v-model="addressline_2"
                        :class="['input-group', isValid('addressline_2')]"
                        id="address_line2"
                        class="a-input-text address-textbox ng-scope ng-pristine ng-valid"
                      />
                    </div>
                    <div
                      data-cel_widget_id="PV_CityInput"
                      data-ng-show="fragmentData.city.visibility"
                      class="a-section a-spacing-small celwidget"
                    >
                      <div class="a-section a-spacing-none address-inputName ng-binding">City</div>
                      <input
                        type="text"
                        maxlength="50"
                        value
                        autocomplete="off"
                        id="city"
                        v-model="city"
                        :class="['input-group', isValid('city')]"
                        class="a-input-text address-textbox ng-scope ng-pristine ng-animate ng-valid-remove ng-invalid-add ng-valid-required-remove ng-valid-remove-active ng-invalid ng-invalid-add-active ng-valid-required-remove-active ng-invalid-required"
                      />
                    </div>
                    <div
                      data-cel_widget_id="PV_StateInput"
                      data-ng-show="fragmentData.state.visibility"
                      class="a-section a-spacing-small celwidget"
                    >
                      <div class="a-section a-spacing-none address-inputName ng-binding">State</div>
                      <div
                        data-ng-class="{'a-form-error': fragmentData.errors.state,'dropdown-disabled': addressDisable}"
                        class="a-section a-spacing-none address-dropdown"
                      >
                        <select
                          class="address-dropdown-select ng-pristine ng-animate ng-valid-remove ng-invalid-add ng-valid-required-remove ng-valid-remove-active ng-invalid ng-invalid-add-active ng-valid-required-remove-active ng-invalid-required"
                          id="state"
                          v-model="state"
                          data-ng-focus="clearError('state')"
                          ng-model="fragmentData.address.state"
                          ng-options="key as key for key in stateList"
                          data-ng-required="true"
                          data-ng-disabled="addressDisable||fragmentData.editDisable"
                          required="required"
                          style
                        >
                          <option class value>Select State</option>
                          <option value="0">MAHARASHTRA</option>
                          <option value="1">GOA</option>
                          <option value="2">KERALA</option>
                          <option value="3">LAKSHADWEEP</option>
                          <option value="4">DADRA &amp; NAGAR HAVELI</option>
                          <option value="5">HIMACHAL PRADESH</option>
                          <option value="6">ANDAMAN &amp; NICOBAR ISLANDS</option>
                          <option value="7">ANDHRA PRADESH</option>
                          <option value="8">UTTAR PRADESH</option>
                          <option value="9">HARYANA</option>
                          <option value="10" selected="selected">ASSAM</option>
                          <option value="11">ODISHA</option>
                          <option value="12">CHANDIGARH</option>
                          <option value="13">MADHYA PRADESH</option>
                          <option value="14">WEST BENGAL</option>
                          <option value="15">MEGHALAYA</option>
                          <option value="16">PUDUCHERRY</option>
                          <option value="17">RAJASTHAN</option>
                          <option value="18">NAGALAND</option>
                          <option value="19">SIKKIM</option>
                          <option value="20">GUJARAT</option>
                          <option value="21">KARNATAKA</option>
                          <option value="22">MIZORAM</option>
                          <option value="23">DAMAN &amp; DIU</option>
                          <option value="24">ARUNACHAL PRADESH</option>
                          <option value="25">BIHAR</option>
                          <option value="26">CHHATTISGARH</option>
                          <option value="27">PUNJAB</option>
                          <option value="28">JAMMU &amp; KASHMIR</option>
                          <option value="29">TAMIL NADU</option>
                          <option value="30">UTTARAKHAND</option>
                          <option value="31">DELHI</option>
                          <option value="32">JHARKHAND</option>
                          <option value="33">MANIPUR</option>
                          <option value="34">TRIPURA</option>
                          <option value="35">TELANGANA</option>
                        </select>
                      </div>
                    </div>
                    <div
                      data-cel_widget_id="PV_CountryInput"
                      data-ng-show="fragmentData.country.visibility"
                      class="a-section a-spacing-small celwidget"
                    >
                      <div
                        class="a-section a-spacing-none address-inputName ng-binding"
                      >Country/Region</div>
                      <div
                        data-ng-class="{'a-form-error': fragmentData.country.error,'dropdown-disabled': addressDisable}"
                        class="a-section a-spacing-none address-dropdown"
                      >
                        <select
                          class="address-dropdown-select ng-pristine ng-valid ng-valid-required"
                          id="country"
                          ng-model="fragmentData.address.country"
                          ng-options="value as key for (key,value) in countryMap"
                          data-ng-required="true"
                          data-ng-disabled="true"
                          required="required"
                          disabled="disabled"
                        >
                          <option value="India" selected="selected">India</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <!-- ngIf: fragmentData.submitButton.visibility -->
                  <div
                    data-ng-if="fragmentData.submitButton.visibility"
                    class="a-section a-spacing-small a-spacing-top-large ng-scope"
                  >
                    <span
                      class="a-button a-spacing-small a-spacing-top-base a-button-primary address-textbox"
                      id="a-autoid-1"
                    >
                      <span class="a-button-inner">
                        <div @click="changeCompany" class="a-button-text" to="/launch/tax-details">Continue</div>
                      </span>
                    </span>
                  </div>
                  <!-- end ngIf: fragmentData.submitButton.visibility -->
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Aside/>
    </div>

    <div class="container section tax_details" v-if="currentOption == 2">
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

    <div class="container section seller___interview" v-if="currentOption == 3">
      <h1>Choose categories you wish to sell</h1>

      <div class="container">
        <div class="col-12 col-sm-4" v-for="p in interview_data" :key="p.id">
          <div class="row">
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

      <div class="col-12 col-sm-4">
        <div class="col-12">
          <p class="interview_title">Where do you get products from?</p>
          <ul class="selector__section">
            <li>
              <label class="checkcontainer">
                <p>I manufacture them</p>
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </li>
            <li>
              <label class="checkcontainer">
                <p>I import them</p>
                <input type="checkbox" />
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

import Aside from '@/components/aside'

import axios from 'axios'

export default {
  data: function() {
    return {

      product_category: [
        {
          id: 1,
          name: 'Automotive'
        },
        {
          id: 2,
          name: 'Baby Products'
        },
        {
          id: 3,
          name: 'Books'
        },
        {
          id: 4,
          name: 'Camera and Accessories'
        },
        {
          id: 5,
          name: 'Clothing and Accessories'
        },
        {
          id: 6,
          name: 'Computer and Accessories'
        },
        {
          id: 7,
          name: 'Consumer and Electronics'
        },
        {
          id: 8,
          name: 'Everything Else'
        },
        {
          id: 9,
          name: 'Fine Art'
        },
        {
          id: 10,
          name: 'Furniture'
        },
        {
          id: 11,
          name: 'Gift Card'
        },
        {
          id: 12,
          name: 'Grocery and Gourmet Food'
        },
        {
          id: 13,
          name: 'Handbags'
        },
        {
          id: 14,
          name: 'Health and Personal Care'
        },
        {
          id: 15,
          name: 'Home and Garden'
        },
        {
          id: 16,
          name: 'Industrial and Scientific Supply'
        },
        {
          id: 17,
          name: 'Jewelry'
        },
        {
          id: 18,
          name: 'Kindle Accessories'
        },
        {
          id: 19,
          name: 'Kitchen'
        },
        {
          id: 20,
          name: 'Luggage and Travel Accessories'
        },
        {
          id: 21,
          name: 'Mobiles and Accessories'
        },
        {
          id: 22,
          name: 'Movies and DVD'
        },
        {
          id: 23,
          name: 'Music'
        },
        {
          id: 24,
          name: 'Musical Instruments'
        },
        {
          id: 25,
          name: 'Office Products'
        },
        {
          id: 26,
          name: 'Pet Products'
        },
        {
          id: 27,
          name: 'Shoes'
        },
        {
          id: 28,
          name: 'Software'
        },
        {
          id: 29,
          name: 'Sports and Outdoor'
        },
        {
          id: 30,
          name: 'Sunglasses and Eyewear'
        },
        {
          id: 31,
          name: 'Tools and Home Improvement'
        },
        {
          id: 32,
          name: 'Toys and Games'
        },
        {
          id: 33,
          name: 'Video Games'
        },
        {
          id: 34,
          name: 'Watches'
        }
      ],
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
            {
              id: 3,
              name: 'Muscial Instruments'
            },
            {
              id: 4,
              name: 'Music'
            },
            {
              id: 5,
              name: 'Video Games'
            }
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
            {
              id: 3,
              name: 'Watches'
            },
            {
              id: 4,
              name: 'Jewelery'
            },
            {
              id: 5,
              name: 'Luggage'
            }
          ]
        },
        {
          id: 3,
          name: 'Home, Garden & Tools, Furniture',
          data: [
            {
              id: 1,
              name: 'Home'
            },
            {
              id: 2,
              name: 'Large Appliances'
            },
            {
              id: 3,
              name: 'Pet Supplies'
            },
            {
              id: 4,
              name: 'Kitchen'
            },
            {
              id: 5,
              name: 'Furniture'
            }
          ]
        },
        {
          id: 4,
          name: 'Beauty, Health & Grocceries',
          data: [
            {
              id: 1,
              name: 'Beauty'
            },
            {
              id: 2,
              name: 'Grocery'
            },
            {
              id: 3,
              name: 'Health'
            },
            {
              id: 4,
              name: 'Personal Care Appliances'
            }
          ]
        },
        {
          id: 5,
          name: 'Electronics & Computers',
          data: [
            {
              id: 1,
              name: 'Consumer Electronics'
            },
            {
              id: 2,
              name: 'Mobile Phones'
            },
            {
              id: 3,
              name: 'Personal Computers'
            },
            {
              id: 4,
              name: 'Office Products'
            },
            {
              id: 5,
              name: 'Software'
            }
          ]
        },
        {
          id: 6,
          name: 'Toys & Baby, Sports',
          data: [
            {
              id: 1,
              name: 'Baby'
            },
            {
              id: 2,
              name: 'Toys'
            },
            {
              id: 3,
              name: 'Sporting Goods'
            }
          ]
        },
        {
          id: 7,
          name: 'Automotive and Industrial Suppy',
          data: [
            {
              id: 1,
              name: 'Automotive'
            },
            {
              id: 2,
              name: 'Industrial Supply'
            }
          ]
        },
        {
          id: 8,
          name: 'Other',
          data: [
            {
              id: 1,
              name: 'My Category is not listed here'
            }
          ]
        }
      ],
      GST_selection: '1',
      email: '',
      currentOption: 1,
      product_cat: 0,
      store_name: "",
      pincode: null,
      addressline_1: "",
      addressline_2: "",
      city: "",
      state: 0,
      regex_store_name: /^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{3,}$/,
      regex_pincode: /^[1-9][0-9]{5}$/,
    }
  },
  components:{
    Aside
  },
  mounted() {
    feather.replace({ color: '#009688' })
    this.$store.dispatch('getStep')
  },
  methods: {
    selectThis: function(id) {
      this.currentOption = id
    },
        changeCompany: function(){

                  $( "input" ).each(function( index ) {
            
            $(this).removeClass('has-error')

      
      });


      if (this.regex_store_name.test(this.store_name) && this.regex_pincode.test(this.pincode) && this.addressline_1 != "" && this.addressline_2 != "" && this.city != "") {     


     var payload = new FormData()

     payload.append('phone_number', localStorage.getItem('phone_number'))
     payload.append('store_name', this.store_name)
     payload.append('product_category', this.product_cat)
     payload.append('pincode',this.pincode)
     payload.append('addressline1', this.addressline_1)
     payload.append('addressline2', this.addressline_2)
     payload.append('city', this.city)
     payload.append('state', $("#state option:selected").text())



            axios({
                method: 'PUT',
                data: payload,
                url: this.$store.state.api.seller_info,
                contentType: 'application/json',
                headers: {
                    Authorization: 'Bearer ' + this.$cookies.get('access_token')
                },
                data: payload
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    this.$router.push('/launch/tax-details')
                })
                .catch(err => {
                    console.log('error in request', err)
                })

      }else{

        $( "input" ).each(function( index ) {
          if($(this).val() == ""){
            
            $(this).addClass('has-error')

          }
      });

      }



    },
        isValid: function(type) {
      switch (type) {
        case 'store_name':

          return this.store_name == ''
            ? ''
            : this.regex_store_name.test(this.store_name)
            ? 'has-success'
            : 'has-error'

          break
        case 'pincode':

          return this.pincode == null
            ? ''
            : this.regex_pincode.test(this.pincode)
            ? 'has-success'
            : 'has-error'

          break
        case 'addressline1':

          return this.addressline_1 == ''
            ? ''
            : this.regex_addressline_1.test(this.addressline_1)
            ? 'has-success'
            : 'has-error'

          break
        case 'password':
          var regex = /(?=^.{8,}$)(?![.\n])(?=.*[a-zA-Z_]).*$/

          return this.password == ''
            ? ''
            : regex.test(this.password)
            ? 'has-success'
            : 'has-error'

          break
      }
    }
  }
}
</script>


<style scoped>
.header {
  display: flex;
  width: 100%;
  height: 60px;
  background-color: #009688;
  color: white !important;
}

.selected {
  background-color: #ff9800;
  /* color: white; */
}

.selected svg,
.selected p {
  color: white !important;
}

.flex {
  height: 63px;
  display: flex;
  align-items: center;

  padding: 0 15px;
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

.verified {
  color: #009688 !important;
  font-weight: bold;
}

.tabbed-layout {
  border-bottom: 1px solid #dfdfdf;
}
.tabbed-layout p {
  color: black;
}

.tabbed-layout .flex {
  cursor: pointer;
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