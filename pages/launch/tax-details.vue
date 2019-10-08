<template>
  <div>
    <div
      data-ng-controller="in-ssr-header-controller"
      data-ng-init="init('Header_BC_a1r2j3u4-n5s6-b7h8-a9r0-a1d2w3a4j567')"
      class="ng-scope"
    >
<div class="a-section">
    <div class="a-box a-box-normal a-color-offset-background"><div class="a-box-inner a-padding-base" style="    display: flex;
    justify-content: space-between;
    align-items: center;">
        <a data-ng-href="" class="a-link-normal" href="#">
           <div style="display: flex;align-items: center;">
          <img style="height: 100%;width: 35px;"
            src="~static/dashboard-icon-black.png"
          />
          <p style="margin-left: 15px;font-size:14px;font-weight: bold">WENS Link Seller Registration</p>
        </div>
        </a>
        <ul data-ng-mouseout="offFocus()" data-ng-mouseover="onFocus('settings')" class="a-unordered-list a-nostyle a-vertical header-settings-tab">
           <a class="a-link-normal ng-binding" href="/gp/sign-in/logout.html">Logout</a>
      
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

    </div><!-- end ngRepeat: step in navigation.Steps --><div ng-class="['step', getStepClass(step.currentStep ,step.stepCompletionStatus)]" ng-repeat="step in navigation.Steps" class="ng-scope step stepCompleted">



      <div data-ng-hide="isLinkAllowed(step)" class="stepLinkBox" title="Seller Information">
       <img class="stepImg" ng-src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/completedStepA._CB295853638_.png" src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/completedStepA._CB295853638_.png">
        <span class="step-text ng-binding">Seller Information</span>
      </div>

    </div><!-- end ngRepeat: step in navigation.Steps --><div ng-class="['step', getStepClass(step.currentStep ,step.stepCompletionStatus)]" ng-repeat="step in navigation.Steps" class="ng-scope step stepActive">



      <div data-ng-hide="isLinkAllowed(step)" class="stepLinkBox" title="Tax Details">
        <img class="stepImg" ng-src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/currentStepA._CB295853638_.png" src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/currentStepA._CB295853638_.png">
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
        <span class="step-text ng-binding">Dashboard</span>
      </div>

    </div><!-- end ngRepeat: step in navigation.Steps -->
  </div>
</div></div>
    <div class="a-section main container">
      <div class="a-section a-spacing-base a-spacing-top-base">
        <div
          data-ng-controller="tax-registration-fragment-controller"
          data-ng-init="init('Tax_Registration_BC_67635828-f378-41af-bc81-b6c1b3b8b032')"
          class="a-section tax-registration ng-scope"
        >
          <h2 class="a-spacing-small a-color-state a-text-normal">Update your Tax details</h2>

          <div class="row">
            <div class="col-12 col-sm-12 col-md-6 col-lg-4">
              <form class="form-body">
                <div class="form-group margin-top-20">
                  <input
                    id="email"
                    type="radio"
                    name="GST"
                    value="1"
                    v-model="GST_selection"
                    checked
                  />
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
                      id="gstin"
                      type="text"
                      :class="['input-group', isValid('gst')]"
                      v-model="gst"
                      class="form-control"
                      placeholder="E.g., 27AAPFU0939F1ZV"
                      maxlength="50"
                      autocomplete="anyrandomstring"
                    />
                  </div>
                  <div class="form-group margin-top-20">
                    <label class="control-label noselect">PAN number</label>
                    <input
                      id="pan"
                      :class="['input-group', isValid('pan')]"
                      v-model="pan"
                      type="text"
                      class="form-control"
                      maxlength="50"
                      placeholder="E.g., ABCDE1234A"
                      autocomplete="anyrandomstring"
                    />
                  </div>
                </div>

                <div v-if="GST_selection == 2">
                  <div class="form-group margin-top-20">
                    <label class="control-label noselect">PAN number</label>
                    <input
                      id="pan"
                      :class="['input-group', isValid('pan')]"
                      v-model="pan"
                      type="text"
                      class="form-control"
                      maxlength="50"
                      placeholder="E.g., ABCDE1234A"
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
                  I don't have it handy and will update later
                </div>

                <div class="form-group margin-top-20">
                  <input id="email" type="radio" name="GST" value="4" v-model="GST_selection" />
                  I have never registered for GST
                </div>

                <div
                  data-ng-if="fragmentData.submitButton.visibility"
                  class="a-section a-spacing-small a-spacing-top-large ng-scope"
                >
                  <span
                    class="a-button a-spacing-small a-spacing-top-base a-button-primary address-textbox"
                    id="a-autoid-1"
                  >
                    <span class="a-button-inner">
                      <div class="a-button-text" @click="changeCompany">Next</div>
                    </span>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Aside class="container" />
  </div>
</template>


<script>

import axios from 'axios'

import Aside from '@/components/aside'

export default {
  data() {
    return {
      GST_selection: '1',
      regex_pan: /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
      regex_gst: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
      pan: "",
      gst: ""
    }
  },
  components: {
    Aside
  },
  mounted(){

    this.$store.dispatch('getStep')

  },
methods:{
            changeCompany: function(){



       if (this.regex_pan.test(this.pan) && this.regex_gst.test(this.gst) || parseInt(this.GST_selection) > 2) {

     var payload = new FormData()

     payload.append('phone_number', localStorage.getItem('phone_number'))
     payload.append('gst_option', this.GST_selection)
     payload.append('gstin', this.gst)
     payload.append('pan', this.pan)



            axios({
                method: 'PUT',
                data: payload,
                url: this.$store.state.api.tax,
                contentType: 'application/json',
                data: payload
            })
                .then(res => {
                    console.log(res.data)
                    console.log('response')
                    this.$router.push('/launch/seller-interview')
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



    },    isValid: function(type) {
      switch (type) {
        case 'pan':

          return this.pan == ''
            ? ''
            : this.regex_pan.test(this.pan)
            ? 'has-success'
            : 'has-error'

          break;
        case 'gst':

          return this.gst == ''
            ? ''
            : this.regex_gst.test(this.gst)
            ? 'has-success'
            : 'has-error'

          break;
      }
    }
}
}
</script>


<style scoped>
input[type='checkbox'],
input[type='radio'] {
  margin: 0;
}
</style>