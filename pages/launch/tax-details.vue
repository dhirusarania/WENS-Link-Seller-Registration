<template>
  <div>
<div data-ng-controller="in-ssr-header-controller" data-ng-init="init('Header_BC_a1r2j3u4-n5s6-b7h8-a9r0-a1d2w3a4j567')" class="ng-scope">
    
        
  
<div class="a-section">
    <div class="a-box a-box-normal a-color-offset-background"><div class="a-box-inner a-padding-base">
        <a data-ng-href="" class="a-link-normal" href="#">
            <img class="header-logo" ng-src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/sc-unified._V360962423_.png" src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/sc-unified._V360962423_.png">
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

    </div><!-- end ngRepeat: step in navigation.Steps --><div ng-class="['step', getStepClass(step.currentStep ,step.stepCompletionStatus)]" ng-repeat="step in navigation.Steps" class="ng-scope step stepReady">

      <div data-ng-hide="isLinkAllowed(step)" class="stepLinkBox ng-hide" title="Seller Interview">
        <img class="stepImg" ng-src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/notReadyStep._CB295853632_.png" src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/notReadyStep._CB295853632_.png">
        <span class="step-text ng-binding">Seller Interview</span>
      </div>

    </div><!-- end ngRepeat: step in navigation.Steps --><div ng-class="['step', getStepClass(step.currentStep ,step.stepCompletionStatus)]" ng-repeat="step in navigation.Steps" class="ng-scope step stepReady">


      <div data-ng-hide="isLinkAllowed(step)" class="stepLinkBox ng-hide" title="Dashboard">
        <img class="stepImg" ng-src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/notReadyStep._CB295853632_.png" src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/notReadyStep._CB295853632_.png">
        <span class="step-text ng-binding">Dashboard</span>
      </div>

    </div><!-- end ngRepeat: step in navigation.Steps -->
  </div>
</div></div>

 <div class="a-section main container ">

<div class="a-section a-spacing-base a-spacing-top-base">
                



<div data-ng-controller="tax-registration-fragment-controller" data-ng-init="init('Tax_Registration_BC_67635828-f378-41af-bc81-b6c1b3b8b032')" class="a-section tax-registration ng-scope">

    
        
     <h2 class="a-spacing-small a-color-state a-text-normal">
                Update your Tax details
            </h2>

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

                              <div
                    data-ng-if="fragmentData.submitButton.visibility"
                    class="a-section a-spacing-small a-spacing-top-large ng-scope"
                  >
                    <span
                      class="a-button a-spacing-small a-spacing-top-base a-button-primary address-textbox"
                      id="a-autoid-1"
                    >
                      <span class="a-button-inner">
                        <nuxt-link class="a-button-text" to="/launch/seller-interview">Nuxt</nuxt-link>
                      </span>
                    </span>
                  </div>
          </form>
        </div>
      </div>


        
            


</div>

            </div>


            </div>

<Aside class="container"/>

  </div>

</template>


<script>

import Aside from '@/components/aside'

export default {
    data(){
        return{
                 GST_selection: '1',
        }
    },
      components:{
    Aside
  },
}
</script>


<style scoped>

input[type=checkbox], input[type=radio]{
    margin: 0
}

</style>