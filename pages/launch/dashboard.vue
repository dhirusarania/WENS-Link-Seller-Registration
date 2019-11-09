<template>
  <div>
    <div
      data-ng-controller="in-ssr-header-controller"
      data-ng-init="init('Header_BC_a1r2j3u4-n5s6-b7h8-a9r0-a1d2w3a4j567')"
      class="ng-scope"
    >
      <div class="a-section">
        <div class="a-box a-box-normal a-color-offset-background">
          <div
            class="a-box-inner a-padding-base"
            style="    display: flex;
    justify-content: space-between;
    align-items: center;"
          >
            <a data-ng-href class="a-link-normal" href="#">
              <div style="display: flex;align-items: center;">
                <img style="height: 100%;width: 35px;" src="~static/dashboard-icon-black.png" />
                <p
                  style="margin-left: 15px;font-size:14px;font-weight: bold"
                >WENSLink Seller Registration</p>
              </div>
            </a>
            <ul
              data-ng-mouseout="offFocus()"
              data-ng-mouseover="onFocus('settings')"
              class="a-unordered-list a-nostyle a-vertical header-settings-tab"
            >
              <nuxt-link class="a-link-normal ng-binding" to="/login">Logout</nuxt-link>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="a-box a-box-normal page-nav">
      <div class="a-box-inner a-padding-base">
        <div class="stepRow hide">
          <!-- ngRepeat: step in navigation.Steps -->
          <div
            ng-class="['step', getStepClass(step.currentStep ,step.stepCompletionStatus)]"
            ng-repeat="step in navigation.Steps"
            class="ng-scope step stepCompleted"
          >
            <div data-ng-hide="isLinkAllowed(step)" class="stepLinkBox" title="Phone Verification">
              <img
                class="stepImg"
                ng-src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/completedStepA._CB295853638_.png"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/completedStepA._CB295853638_.png"
              />
              <span class="step-text ng-binding">Phone Verification</span>
            </div>
          </div>
          <!-- end ngRepeat: step in navigation.Steps -->
          <div
            ng-class="['step', getStepClass(step.currentStep ,step.stepCompletionStatus)]"
            ng-repeat="step in navigation.Steps"
            class="ng-scope step stepCompleted"
          >
            <div data-ng-hide="isLinkAllowed(step)" class="stepLinkBox" title="Seller Information">
              <img
                class="stepImg"
                ng-src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/completedStepA._CB295853638_.png"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/completedStepA._CB295853638_.png"
              />
              <span class="step-text ng-binding">Seller Information</span>
            </div>
          </div>
          <!-- end ngRepeat: step in navigation.Steps -->
          <div
            ng-class="['step', getStepClass(step.currentStep ,step.stepCompletionStatus)]"
            ng-repeat="step in navigation.Steps"
            class="ng-scope step stepCompleted"
          >
            <div data-ng-hide="isLinkAllowed(step)" class="stepLinkBox" title="Seller Information">
              <img
                class="stepImg"
                ng-src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/completedStepA._CB295853638_.png"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/completedStepA._CB295853638_.png"
              />
              <span class="step-text ng-binding">Tax Details</span>
            </div>
          </div>
          <!-- end ngRepeat: step in navigation.Steps -->
          <div
            ng-class="['step', getStepClass(step.currentStep ,step.stepCompletionStatus)]"
            ng-repeat="step in navigation.Steps"
            class="ng-scope step stepCompleted"
          >
            <div data-ng-hide="isLinkAllowed(step)" class="stepLinkBox" title="Tax Details">
              <img
                class="stepImg"
                ng-src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/completedStepA._CB295853638_.png"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/completedStepA._CB295853638_.png"
              />
              <span class="step-text ng-binding">Seller Interview</span>
            </div>
          </div>
          <!-- end ngRepeat: step in navigation.Steps -->
          <div
            ng-class="['step', getStepClass(step.currentStep ,step.stepCompletionStatus)]"
            ng-repeat="step in navigation.Steps"
            class="ng-scope step stepActive"
          >
            <div data-ng-hide="isLinkAllowed(step)" class="stepLinkBox" title="Dashboard">
              <img
                class="stepImg"
                ng-src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/currentStepA._CB295853638_.png"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/currentStepA._CB295853638_.png"
              />
              <span class="step-text ng-binding">Payment</span>
            </div>
          </div>
          <!-- end ngRepeat: step in navigation.Steps -->
        </div>
      </div>
    </div>

    <div class="a-section single-container">
      <div class="a-section single-main">
        <div class="a-section ng-scope">
          <div class="a-section greeting-fragment">
            <div data-ng-show="onPostLaunchPage" class="a-section ng-hide">
              <h1
                id="post-launch-heading-id"
                class="a-spacing-none post-launch-font-WENSLink-ember-light a-text-normal hide"
              >You are now an active seller on WENSLink.in</h1>
              <h1
                class="a-size-extra-large a-spacing-none a-text-normal ng-binding"
              >Hi {{business_name}}, You are almost there</h1>
              <p
                class="a-spacing-mini a-spacing-top-mini a-size-small a-color-tertiary ng-binding"
              >Please complete the payment to Activate your account.</p>
            </div>
            <div data-ng-show="!onPostLaunchPage" class="a-section">
              <div data-ng-show="!isLaunched" class="a-section row">
                <div data-ng-show="!isLaunched" class="a-section col-sm-6">
                  <h4 style="padding-top: 40px">You will be Charged a Fee of</h4>
                  <h3 style="font-size: 50px!important;color: #006000;">₹ {{amount}}</h3>
                  <p>including GST + Gateway charge</p>
                </div>
                <div class="col-sm-6">
                  <table class="table">
                    <thead class="thead-light">
                      <tr>
                        <th class="alignment font-weight font-size" style="font-size: 20px;">Invoice Summary</th>
                        <th class="alignment font-weight font-size"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Seller Registration Fees</td>
                        <td>Rs. 1000.00</td>
                      </tr>
                      <tr>
                        <td>18% IGST</td>
                        <td>180.00</td>
                      </tr>
                      <tr>
                        <td>Internet Charge</td>
                        <td>Rs. 30.00</td>
                      </tr>
                      <tr style="border-top: 1px solid #cccccc;">
                        <td
                          class="font-weight"
                          style="font-size: 20px;font-weight: bold;color: #006000;"
                        >Total Amount</td>
                        <td style="font-size: 20px;font-weight: bold;color: #006000;">Rs. 1210.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="a-section a-spacing-base a-spacing-top-base">
          <div
            id="launchFragment"
            data-ng-controller="launch-fragment-controller"
            data-ng-init="init('Launch_BC_PL_470d51d60d6371b04f70ee0f3dadab60')"
            class="a-section ng-scope"
          >
            <!-- <div class="a-popover-preload" id="a-popover-modalBody">
        <div class="a-section overlay ng-binding">
            <img alt="" src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_green.png" data-ng-src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_green.png" class="fragment-logo"><br><br>
            <span class="a-text-bold ng-binding">
                Congratulations!
            </span>
            <br>You are ready to sell on WENSLink<br><br>
            <span class="a-button a-button-primary" id="a-autoid-1"><span class="a-button-inner"><input id="modal-launch-button" class="a-button-input" type="submit" aria-labelledby="a-autoid-1-announce"><span class="a-button-text ng-binding" aria-hidden="true" id="a-autoid-1-announce">
                Start Selling
            </span></span></span>
            <br><br>
            <a class="a-link-normal ng-binding" href="/hz/m/cuoption?callSource=registration&amp;callBackUrl=/sw/in/Launch/dashboard&amp;categoryId=40000&amp;category=mobi_support_cu_c_your_account&amp;typeId=50004&amp;type=mobi_support_cu_t_other_issues&amp;attributes={&quot;attributes&quot;:{&quot;reftag&quot;:&quot;mscuotis&quot;,&quot;MobilePhoneTemplate&quot;:&quot;3d02e045-412e-44d1-82c2-4ab949e3c4e5&quot;,&quot;MobileCaseSeverity&quot;:&quot;4&quot;,&quot;Mobile911Exists&quot;:&quot;N&quot;,&quot;MobileQueue&quot;:&quot;tam-general@WENSLink.in&quot;,&quot;MobilePhoneExists&quot;:&quot;Y&quot;,&quot;MobileChatExists&quot;:&quot;N&quot;}}&amp;ref_=overlay_url"> Need Help? </a>
        </div>
            </div>-->

            <!-- 
    <div data-ng-show="showLaunchFragment" class="a-section quick-launch ng-hide">
        <div class="a-box a-alert a-alert-info"><div class="a-box-inner a-alert-container"><h4 class="a-alert-heading ng-binding">Congrats, You are now ready to start selling on WENSLink.in</h4><i class="a-icon a-icon-alert"></i><div class="a-alert-content ng-binding">
            Click on the button to go live
            
                
                
                    <span class="a-button a-spacing-none a-button-primary show-right" id="a-autoid-2"><span class="a-button-inner"><input id="launch-mini-button" data-ng-click="LaunchSubmit()" class="a-button-input" type="submit" aria-labelledby="a-autoid-2-announce"><span class="a-button-text ng-binding" aria-hidden="true" id="a-autoid-2-announce">
                        Launch your Business
                    </span></span></span>
                
            
        </div></div></div>
    </div>
    <div data-ng-show="errorMessage.length" class="a-section launch-fragment ng-hide">
        <div class="a-box a-alert a-alert-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">
   
        </div></div></div>
            </div>-->
          </div>
        </div>

        <div class="a-section a-spacing-base a-spacing-top-base">
          <div
            data-ng-controller="listing-fragment-controller"
            data-ng-init="init('Listing_BC_67635828-f378-41af-bc81-b6c1b3b8b032')"
            class="a-section listing-fragment ng-scope"
          >
            <div
              data-ng-class="{'listing-box-error': showErrorMessage === true}"
              aria-live="polite"
              class="a-row a-expander-container a-spacing-mini a-spacing-top-small a-expander-section-container a-section-expander-container"
            >
              <a
                id="listing-custom-expander"
                href="javascript:void(0)"
                data-action="a-expander-toggle"
                class="a-expander-header a-declarative a-expander-section-header a-link-section-expander a-size-medium"
                data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;&quot;, &quot;collapse_prompt&quot;:&quot;&quot;}"
              >
                <i class="a-icon a-icon-section-collapse"></i>
                <span class="a-expander-prompt">
                  <img
                    alt
                    src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_green.png"
                    data-ng-show="listingStatus"
                    data-ng-src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_green.png"
                    class="fragment-logo ng-hide"
                  />
                  <img
                    alt
                    src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_Gray.png"
                    data-ng-hide="listingStatus"
                    data-ng-src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_Gray.png"
                    class="fragment-logo"
                  />
                  <span
                    class="a-size-base-plus fragment-heading a-text-bold ng-binding"
                  >Products to sell</span>
                </span>
              </a>
              <div
                id="listing-custom-expander-content"
                aria-expanded="true"
                class="a-expander-content a-expander-inline-content a-expander-inner"
                style="overflow: hidden; display: block;"
              >
                <div class="a-box listing-box listing-category">
                  <div class="a-box-inner a-padding-none">
                    <div class="a-section a-spacing-mini a-spacing-top-small listing-container">
                      <div class="a-section listing-margin-bottom">
                        <div class="a-section a-spacing-none listing-heading">
                          <div
                            data-ng-show="listingStatus"
                            class="a-section listing-align-left listing-margin-top ng-hide"
                          >
                            <i class="a-icon a-icon-success listing-success-icon"></i>
                            <span class="a-size-medium a-text-normal ng-binding">
                              0
                              <span
                                data-ng-hide="productNumStatus"
                                class="ng-binding"
                              >product added</span>
                              <span
                                data-ng-hide="!productNumStatus"
                                class="ng-binding ng-hide"
                              >products added</span>
                            </span>
                          </div>
                        </div>
                        <span class="ng-binding">List the products you wish to sell on WENSLink.in</span>
                        <hr class="a-spacing-top-small a-divider-normal listing-divider" />
                        <div class="a-section a-spacing-top-base listing-margin-bottom">
                          <span
                            class="a-size-base-plus a-text-bold ng-binding"
                          >Start selling in these categories:</span>
                        </div>
                      </div>
                      <div class="a-section a-spacing-mini listing-overflow">
                        <div class="a-section a-spacing-none">
                          <!-- ngIf: openCategoryValuesWithJoin !== '' -->
                          <span
                            data-ng-if="openCategoryValuesWithJoin !== ''"
                            class="a-size-base-plus a-color-tertiary listing-open-category-list listing-truncate ng-scope ng-binding"
                          >Books</span>
                          <!-- end ngIf: openCategoryValuesWithJoin !== '' -->
                        </div>
                        <div class="a-section a-spacing-none listing-overflow">
                          <span
                            data-ng-show="listingStatus"
                            class="a-size-base a-color-success listing-count ng-binding ng-hide"
                          >Listing Count</span>
                          <span class="a-letter-space"></span>
                          <span
                            data-ng-show="listingStatus"
                            class="a-size-base listing-count a-text-normal ng-binding ng-hide"
                          >0</span>
                          <a
                            data-ng-href="/hz/productsearch?ref=sw_in_listing"
                            class="a-link-normal listing-align-right"
                            target="_blank"
                            rel="noopener"
                            href="/hz/productsearch?ref=sw_in_listing"
                          >
                            <span class="a-button a-spacing-none a-button-primary" id="a-autoid-3">
                              <span class="a-button-inner">
                                <input
                                  class="a-button-input"
                                  type="submit"
                                  aria-labelledby="a-autoid-3-announce"
                                />
                                <span
                                  class="a-button-text a-text-center ng-binding"
                                  aria-hidden="true"
                                  id="a-autoid-3-announce"
                                >Start Listing</span>
                              </span>
                            </span>
                          </a>
                        </div>

                        <!-- ngIf: productFileCheck() -->
                      </div>

                      <!-- ngIf: showSuHelper -->
                      <div
                        id="su-listing-helper"
                        data-ng-if="showSuHelper"
                        class="a-section ng-scope"
                      >
                        <p
                          class="a-size-base-plus a-text-bold ng-binding"
                        >Learn how to list your products</p>

                        <a data-ng-click="openLightBox()" class="a-link-normal" href="#su-content">
                          <img
                            alt
                            src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Dashboard/openContentThumbnail.jpg"
                            data-ng-src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Dashboard/openContentThumbnail.jpg"
                            class="su-listing-video-thumb"
                          />
                        </a>

                        <a
                          id="su-content"
                          data-ng-click="closeLightBox()"
                          class="a-link-normal su-listing-lightbox"
                          href="#"
                        >
                          <iframe
                            frameborder="0"
                            scrolling="no"
                            allowfullscreen="true"
                            mozallowfullscreen="true"
                            webkitallowfullscreen="true"
                            ng-src="/learn/widget?ref_=in_ssr_swipe_su_open&amp;referral=suw_in_r2l_listing_open&amp;courseId=182&amp;moduleId=615"
                            src="/learn/widget?ref_=in_ssr_swipe_su_open&amp;referral=suw_in_r2l_listing_open&amp;courseId=182&amp;moduleId=615"
                          ></iframe>
                        </a>
                      </div>
                      <!-- end ngIf: showSuHelper -->

                      <hr class="a-spacing-none a-divider-normal listing-divider" />
                    </div>
                  </div>
                </div>

                <div data-ng-show="showGatedCategory" class="a-box listing-box ng-hide">
                  <div class="a-box-inner a-padding-none">
                    <div class="a-section a-spacing-mini listing-container">
                      <div class="a-section a-spacing-none">
                        <span
                          class="a-size-base-plus a-text-bold ng-binding"
                        >Categories listed below require approval</span>
                        <span class="a-declarative" data-action="a-popover" data-a-popover="{}">
                          <a
                            id="gatedCategoryPopoverTrigger"
                            href="javascript:void(0)"
                            class="a-popover-trigger a-declarative listing-popover"
                          >
                            <i class="a-icon a-icon-popover"></i>
                          </a>
                        </span>
                      </div>
                      <!-- ngRepeat: gatedCategory in gatedCategoryList -->
                      <hr class="a-spacing-small a-divider-normal" />
                    </div>
                  </div>
                </div>

                <!-- ngIf: !shouldSkipSellerInterview -->
                <div
                  data-ng-if="!shouldSkipSellerInterview"
                  class="a-section a-spacing-small listing-container ng-scope"
                >
                  <a
                    data-ng-href="/sw/in/Launch/step/Seller+Interview?ref=sw_in_listing"
                    class="a-size-base-plus a-link-normal ng-binding"
                    href="/sw/in/Launch/step/Seller+Interview?ref=sw_in_listing"
                  >Edit categories</a>
                </div>
                <!-- end ngIf: !shouldSkipSellerInterview -->
                <!-- ngIf: shouldSkipSellerInterview -->

                <!-- ngIf: !shouldSkipSellerInterview -->
                <div
                  data-ng-if="!shouldSkipSellerInterview"
                  data-ng-show="showBrands"
                  class="a-box listing-box ng-scope ng-hide"
                >
                  <div class="a-box-inner a-padding-none">
                    <div class="a-section a-spacing-none listing-container">
                      <hr class="a-divider-normal listing-divider" />
                      <div data-ng-show="showBrandInitialView" class="a-section a-spacing-none">
                        <span class="a-size-base-plus a-text-bold ng-binding">UPC Exemption</span>
                        <span class data-action data-a-popover id="upcx-popover">
                          <span
                            id="brandRegistryJITATrigger"
                            class="a-color-link jita-trigger jita-text-normal"
                          >
                            What's this?
                            <span class="arrow-down a-color-link jita-trigger"></span>
                          </span>
                        </span>
                        <div class="a-section a-spacing-mini a-spacing-top-mini listing-overflow">
                          <span
                            class="a-size-base listing-inline-block ng-binding"
                          >If your products do not have a standard ID such as a barcode, UPC, EAN, or ISBN, apply for UPC exemption</span>
                          <a
                            class="a-link-normal"
                            target="_blank"
                            rel="noopener"
                            href="/gtinx?ref_=SW_Dashboard?referrer=sw&amp;ref_=SW_in_upc"
                          >
                            <span
                              class="a-button a-spacing-none a-spacing-top-small listing-align-right"
                              id="a-autoid-6"
                            >
                              <span class="a-button-inner">
                                <input
                                  class="a-button-input"
                                  type="submit"
                                  aria-labelledby="a-autoid-6-announce"
                                />
                                <span
                                  class="a-button-text a-text-center ng-binding"
                                  aria-hidden="true"
                                  id="a-autoid-6-announce"
                                >Apply Now</span>
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div
                        data-ng-hide="showBrandInitialView"
                        class="a-section a-spacing-small ng-hide"
                      >
                        <span class="a-size-base-plus a-text-bold ng-binding">UPC Exemption</span>
                        <span class="a-declarative" data-action="a-popover" data-a-popover="{}">
                          <a
                            id="brandPopoverTrigger"
                            href="javascript:void(0)"
                            class="a-popover-trigger a-declarative listing-popover"
                          >
                            <i class="a-icon a-icon-popover"></i>
                          </a>
                        </span>
                        <!-- ngRepeat: brand in brandDetailList -->
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end ngIf: !shouldSkipSellerInterview -->

                <!-- ngIf: shouldSkipSellerInterview -->

                <div
                  data-ng-show="showProfitCalculator"
                  class="a-section a-spacing-small listing-container"
                >
                  <hr class="a-spacing-top-small a-divider-normal listing-divider" />
                  <a
                    class="a-size-base-plus a-link-normal ng-binding"
                    target="_blank"
                    rel="noopener"
                    href="https://services.WENSLink.in/landing/pricing-calculator.html?ref_=profit_url_listing&amp;ld=ASINSOADirect"
                  >Learn more about WENSLink's charges</a>
                </div>

                <div class="a-section a-spacing-base">
                  <a
                    data-ng-href="/gtinx?ref_=SW_Dashboard?referrer=sw&amp;ref_=SW_in_upc"
                    data-ng-show="!showBrandInitialView &amp;&amp; showBrands"
                    class="a-size-base-plus a-link-normal listing-container ng-binding ng-hide"
                    target="_blank"
                    rel="noopener"
                    href="/gtinx?ref_=SW_Dashboard?referrer=sw&amp;ref_=SW_in_upc"
                  >Add more brands</a>
                </div>

                <div class="a-section a-spacing-none">
                  <div
                    data-ng-show="showErrorMessage"
                    class="a-box a-alert-inline a-alert-inline-error listing-container listing-error ng-hide"
                    aria-live="assertive"
                    role="alert"
                  >
                    <div class="a-box-inner a-alert-container">
                      <i class="a-icon a-icon-alert"></i>
                      <div class="a-alert-content ng-binding">Add some listings before launch</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="a-section a-spacing-base a-spacing-top-base">
          <div
            data-ng-controller="shipping-rate-fragment-controller"
            data-ng-init="init('Shipping_Rate_BC_67635828-f378-41af-bc81-b6c1b3b8b032')"
            class="a-section ng-scope"
          >
            <div class="a-section shipping-rate-fragment">
              <!-- ngIf: !shippingWidgetDesktopWeblabTreatment -->
              <!-- ngIf: shippingWidgetDesktopWeblabTreatment -->
              <div
                data-ng-class="isShippingCompleted ? '' : 'shipping-rate-app-error'"
                data-ng-if="shippingWidgetDesktopWeblabTreatment"
                aria-live="polite"
                data-a-expander-name="shipping-fragment-expander-name-desktop"
                class="a-row a-expander-container a-spacing-mini a-spacing-top-small a-expander-section-container a-section-expander-container ng-scope"
              >
                <a
                  id="shipping-fragment-expander"
                  href="javascript:void(0)"
                  data-action="a-expander-toggle"
                  class="a-expander-header a-declarative a-expander-section-header a-link-section-expander a-size-medium"
                  data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;&quot;, &quot;collapse_prompt&quot;:&quot;&quot;}"
                >
                  <i class="a-icon a-icon-section-collapse"></i>
                  <span class="a-expander-prompt">
                    <img
                      alt
                      src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_green.png"
                      data-ng-show="shippingStatus"
                      data-ng-src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_green.png"
                      class="fragment-logo ng-hide"
                    />
                    <img
                      alt
                      src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_Gray.png"
                      data-ng-hide="shippingStatus"
                      data-ng-src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_Gray.png"
                      class="fragment-logo"
                    />
                    <span
                      class="a-size-base-plus fragment-heading a-text-bold ng-binding"
                    >Shipping Fee Details</span>
                  </span>
                </a>
                <div
                  aria-expanded="true"
                  class="a-expander-content expander-shipping a-expander-inline-content a-expander-inner a-expander-content-expanded"
                  style="overflow: hidden;"
                >
                  <div data-ng-show="shippingStatus" class="a-section a-spacing-mini ng-hide">
                    <div class="a-section a-spacing-mini shipping-rate-container">
                      <p
                        class="a-spacing-mini a-size-small a-color-tertiary shipping-rate-info ng-binding"
                      ></p>
                      <div class="a-section a-padding-mini set-button-container">
                        <span
                          class="a-size-base-plus"
                        >To edit the shipping rates, visit the Shipping Settings page.</span>
                        <a
                          data-ng-href="/sbr#easy_ship_template"
                          class="a-link-normal"
                          target="_blank"
                          rel="noopener"
                          href="/sbr#easy_ship_template"
                        >
                          <span class="a-button a-spacing-none set-rates-button" id="a-autoid-9">
                            <span class="a-button-inner">
                              <input
                                class="a-button-input"
                                type="submit"
                                aria-labelledby="a-autoid-9-announce"
                              />
                              <span
                                class="a-button-text a-text-center"
                                aria-hidden="true"
                                id="a-autoid-9-announce"
                              >Edit</span>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div data-ng-hide="shippingStatus" class="a-section">
                    <!-- ngIf: isEasyShipSeller -->
                    <div data-ng-if="isEasyShipSeller" class="a-row mobile-text-detail ng-scope">
                      <span
                        class="ng-binding"
                      >Easy Ship charges ₹27 for local, ₹45 for regional and ₹65 for national shipping for standard size items less than 500 gms.</span>
                    </div>
                    <!-- end ngIf: isEasyShipSeller -->

                    <div
                      data-ng-show="isEasyShipSeller &amp;&amp; showProfitCalculator"
                      class="a-row profit-calculator"
                    >
                      <a
                        data-ng-href="https://services.WENSLink.in/landing/pricing-calculator.html?ref_=profit_url_shipping"
                        class="a-link-normal"
                        target="_blank"
                        rel="noopener"
                        href="https://services.WENSLink.in/landing/pricing-calculator.html?ref_=profit_url_shipping&amp;ld=ASINSOADirect"
                      >
                        <span
                          class="a-size-base ng-binding"
                        >Learn more about WENSLink's shipping charges</span>
                      </a>
                    </div>

                    <div class="a-row mobile-text-detail">
                      <span
                        class="a-text-bold ng-binding"
                      >Set shipping fee you want to charge your customers</span>
                    </div>
                    <div
                      data-ng-show="!isEasyShipSeller &amp;&amp; showProfitCalculator"
                      class="a-row profit-calculator ng-hide"
                    >
                      <a
                        data-ng-href="https://services.WENSLink.in/landing/pricing-calculator.html?ref_=profit_url_shipping"
                        class="a-link-normal"
                        target="_blank"
                        rel="noopener"
                        href="https://services.WENSLink.in/landing/pricing-calculator.html?ref_=profit_url_shipping&amp;ld=ASINSOADirect"
                      >
                        <span
                          class="a-size-base ng-binding"
                        >Learn more about WENSLink's shipping charges</span>
                      </a>
                    </div>

                    <div id="shipSection" class="a-box box-form">
                      <div class="a-box-inner">
                        <div class="a-row radio-option">
                          <div class="a-row">
                            <div class="a-radio a-radio-fancy ng-scope">
                              <label>
                                <input
                                  type="radio"
                                  name="fee_radio"
                                  value="noFee"
                                  data-a-input-name="fee_radio"
                                  data-ng-model="radioButtonData.option"
                                  class="ng-pristine ng-valid"
                                />
                                <i class="a-icon a-icon-radio"></i>
                                <span class="a-label a-radio-label">
                                  <div class="a-row multi-line ng-binding">Offer free Shipping</div>
                                  <div
                                    class="a-row a-size-small a-color-secondary multi-line ng-binding"
                                  >Free shipping will be highlighted on your offer</div>
                                </span>
                              </label>
                            </div>
                          </div>
                          <div class="a-row divider-first">
                            <hr class="a-divider-normal" />
                          </div>
                          <div class="a-row">
                            <div class="a-radio a-radio-fancy ng-scope">
                              <label>
                                <input
                                  type="radio"
                                  name="fee_radio"
                                  value="customFee"
                                  data-a-input-name="fee_radio"
                                  data-ng-model="radioButtonData.option"
                                  class="ng-pristine ng-valid"
                                />
                                <i class="a-icon a-icon-radio"></i>
                                <span class="a-label a-radio-label ng-binding">Set custom fee</span>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div
                          data-ng-show="radioButtonData.option == 'customFee'"
                          class="a-row ng-hide"
                        >
                          <hr class="a-divider-normal divider" />
                        </div>

                        <div id="textForRateForm" class="a-row form-text">
                          <!-- ngRepeat: label in formLabelsList -->
                          <span
                            id="ship-rate-form-text"
                            data-ng-repeat="label in formLabelsList"
                            data-ng-show="radioButtonData.option == 'customFee'"
                            class="ng-scope ng-hide"
                          >
                            <div id="LocalTextForFormRate" class="a-column form-text-unit a-span4">
                              <span class="a-text-bold ng-binding">Local</span>
                            </div>
                          </span>
                          <!-- end ngRepeat: label in formLabelsList -->
                          <span
                            id="ship-rate-form-text"
                            data-ng-repeat="label in formLabelsList"
                            data-ng-show="radioButtonData.option == 'customFee'"
                            class="ng-scope ng-hide"
                          >
                            <div
                              id="RegionalTextForFormRate"
                              class="a-column form-text-unit a-span4"
                            >
                              <span class="a-text-bold ng-binding">Regional</span>
                            </div>
                          </span>
                          <!-- end ngRepeat: label in formLabelsList -->
                          <span
                            id="ship-rate-form-text"
                            data-ng-repeat="label in formLabelsList"
                            data-ng-show="radioButtonData.option == 'customFee'"
                            class="ng-scope ng-hide"
                          >
                            <div
                              id="NationalTextForFormRate"
                              class="a-column form-text-unit a-span4"
                            >
                              <span class="a-text-bold ng-binding">National</span>
                            </div>
                          </span>
                          <!-- end ngRepeat: label in formLabelsList -->
                        </div>

                        <div id="rateForm" class="a-row">
                          <!-- ngRepeat: label in formLabelsList -->
                          <span
                            id="ship-rate-form"
                            data-ng-repeat="label in formLabelsList"
                            data-ng-show="radioButtonData.option == 'customFee'"
                            class="ng-scope ng-hide"
                          >
                            <div id="LocalFormRate" class="a-column form-text-unit a-span4">
                              <div id="LocalBox" class="a-box box-input-form">
                                <div class="a-box-inner">
                                  <div class="text-form ng-binding">₹</div>
                                  <div class="text-input-form">
                                    <input
                                      type="text"
                                      value="0.0"
                                      id="LocalTextField"
                                      autocomplete="off"
                                      class="a-input-text text-input-box"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                          <!-- end ngRepeat: label in formLabelsList -->
                          <span
                            id="ship-rate-form"
                            data-ng-repeat="label in formLabelsList"
                            data-ng-show="radioButtonData.option == 'customFee'"
                            class="ng-scope ng-hide"
                          >
                            <div id="RegionalFormRate" class="a-column form-text-unit a-span4">
                              <div id="RegionalBox" class="a-box box-input-form">
                                <div class="a-box-inner">
                                  <div class="text-form ng-binding">₹</div>
                                  <div class="text-input-form">
                                    <input
                                      type="text"
                                      value="0.0"
                                      id="RegionalTextField"
                                      autocomplete="off"
                                      class="a-input-text text-input-box"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                          <!-- end ngRepeat: label in formLabelsList -->
                          <span
                            id="ship-rate-form"
                            data-ng-repeat="label in formLabelsList"
                            data-ng-show="radioButtonData.option == 'customFee'"
                            class="ng-scope ng-hide"
                          >
                            <div id="NationalFormRate" class="a-column form-text-unit a-span4">
                              <div id="NationalBox" class="a-box box-input-form">
                                <div class="a-box-inner">
                                  <div class="text-form ng-binding">₹</div>
                                  <div class="text-input-form">
                                    <input
                                      type="text"
                                      value="0.0"
                                      id="NationalTextField"
                                      autocomplete="off"
                                      class="a-input-text text-input-box"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                          <!-- end ngRepeat: label in formLabelsList -->
                        </div>

                        <div id="rateFormUnit" class="a-row form-text">
                          <!-- ngRepeat: label in formLabelsList -->
                          <span
                            id="ship-rate-form-unit"
                            data-ng-repeat="label in formLabelsList"
                            data-ng-show="radioButtonData.option == 'customFee'"
                            class="ng-scope ng-hide"
                          >
                            <div id="LocalUnitForFormRate" class="a-column form-text-unit a-span4">
                              <span
                                class="a-size-small a-color-secondary a-text-italic ng-binding"
                              >per order</span>
                            </div>
                          </span>
                          <!-- end ngRepeat: label in formLabelsList -->
                          <span
                            id="ship-rate-form-unit"
                            data-ng-repeat="label in formLabelsList"
                            data-ng-show="radioButtonData.option == 'customFee'"
                            class="ng-scope ng-hide"
                          >
                            <div
                              id="RegionalUnitForFormRate"
                              class="a-column form-text-unit a-span4"
                            >
                              <span
                                class="a-size-small a-color-secondary a-text-italic ng-binding"
                              >per order</span>
                            </div>
                          </span>
                          <!-- end ngRepeat: label in formLabelsList -->
                          <span
                            id="ship-rate-form-unit"
                            data-ng-repeat="label in formLabelsList"
                            data-ng-show="radioButtonData.option == 'customFee'"
                            class="ng-scope ng-hide"
                          >
                            <div
                              id="NationalUnitForFormRate"
                              class="a-column form-text-unit a-span4"
                            >
                              <span
                                class="a-size-small a-color-secondary a-text-italic ng-binding"
                              >per order</span>
                            </div>
                          </span>
                          <!-- end ngRepeat: label in formLabelsList -->
                        </div>
                      </div>
                    </div>

                    <div class="a-row desktop-text-detail">
                      <span
                        class="a-button a-button-primary shipping-rate-save-button-desktop"
                        id="a-autoid-10"
                      >
                        <span class="a-button-inner">
                          <input
                            data-ng-click="saveMobile()"
                            class="a-button-input"
                            type="submit"
                            aria-labelledby="a-autoid-10-announce"
                          />
                          <span
                            class="a-button-text ng-binding"
                            aria-hidden="true"
                            id="a-autoid-10-announce"
                          >Save</span>
                        </span>
                      </span>
                    </div>

                    <div class="a-row desktop-text-detail">
                      <span class="a-size-base-plus a-color-tertiary">
                        For Advanced Shipping options, please
                        <a
                          id="redirectLink"
                          href="/sbr#easy_ship_template"
                          target="_blank"
                        >click here</a>
                      </span>
                    </div>
                    <div
                      data-ng-hide="hideError"
                      class="a-box a-alert-inline a-alert-inline-error shipping-rate-error ng-hide"
                      aria-live="assertive"
                      role="alert"
                    >
                      <div class="a-box-inner a-alert-container">
                        <i class="a-icon a-icon-alert"></i>
                        <div class="a-alert-content ng-binding"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end ngIf: shippingWidgetDesktopWeblabTreatment -->
            </div>
          </div>
        </div>

        <div class="a-section a-spacing-base a-spacing-top-base">
          <div
            data-ng-controller="bank-account-fragment-controller"
            data-ng-init="init('Bank_Account_BC_67635828-f378-41af-bc81-b6c1b3b8b0328')"
            class="a-section a-spacing-none bank-account-fragment-expander ng-scope"
          >
            <div
              data-ng-class="{'bank-account-box-error': (overallErrorMessage)}"
              aria-live="polite"
              class="a-row a-expander-container a-spacing-mini a-spacing-top-small a-expander-section-container a-section-expander-container"
            >
              <a
                id="in-bank-expander"
                data-ng-click="enableEditView()"
                data-ng-disabled="isSpooferINCheck &amp;&amp; isFragmentComplete"
                href="javascript:void(0)"
                data-action="a-expander-toggle"
                class="a-expander-header a-declarative a-expander-section-header a-link-section-expander a-size-medium"
                data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;&quot;, &quot;collapse_prompt&quot;:&quot;&quot;}"
              >
                <i class="a-icon a-icon-section-collapse"></i>
                <span class="a-expander-prompt">
                  <img
                    alt
                    src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_green.png"
                    data-ng-show="isFragmentComplete"
                    data-ng-src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_green.png"
                    class="bank-account-in-logo ng-hide"
                  />
                  <img
                    alt
                    src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_Gray.png"
                    data-ng-hide="isFragmentComplete"
                    data-ng-src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_Gray.png"
                    class="bank-account-in-logo"
                  />
                  <span
                    class="a-size-base-plus bank-account-in-heading a-text-bold ng-binding"
                  >Bank Account Details</span>
                </span>
              </a>
              <div
                id="in-bank-expander-content"
                data-ng-hide="isSpooferINCheck || isFragmentComplete"
                aria-expanded="true"
                class="a-expander-content a-expander-section-content a-section-expander-inner a-expander-content-expanded"
                style="overflow: hidden;"
              >
                <span data-ng-init="addInputSetJSP('IN_BBAN')"></span>
                <!-- ngIf: 'IN_BBAN' === visibleInputSet -->
                <div data-ng-if="'IN_BBAN' === visibleInputSet" class="ng-scope">
                  <!-- ngIf: showForm() -->
                  <div data-ng-if="showForm()" class="ng-scope">
                    <div class="a-section">
                      <div class="a-row">
                        <div
                          class="a-column a-span12 a-spacing-top-base a-ws-span6 bank-account-info"
                        >
                          <div class="a-row">
                            <div class="a-column a-span12">
                              <span
                                data-ng-class="{euBankAccountLabel: (fragmentData.bankAccountFragment.renderConfig.useBlackLabels !== 'true'), blackBankAccountLabel: (fragmentData.bankAccountFragment.renderConfig.useBlackLabels === 'true')}"
                                class="a-text-bold ng-binding blackBankAccountLabel"
                              >Account holder name</span>
                              <span
                                id="inBBANAccountHolderName"
                                data-ng-init="createPopover('inBBANAccountHolderName',fragmentData[fragmentData.bankCountry.value].ACCOUNT_HOLDER_NAME.renderConfig)"
                                class="a-declarative"
                              >
                                <img
                                  data-ng-src="https://images-na.ssl-images-WENSLink.com/images/G/01/swipertol/u368._V279572601_.png"
                                  src="https://images-na.ssl-images-WENSLink.com/images/G/01/swipertol/u368._V279572601_.png"
                                />
                                <div class="a-popover-preload" id="a-popover-"></div>
                              </span>
                            </div>
                          </div>
                          <div class="a-row">
                            <div class="a-column a-span12">
                              <!-- ngIf: !isRestricted() -->
                              <input
                                type="text"
                                autocomplete="off"
                                placeholder="Name as on bank documents"
                                name="accountHolderName"
                                class="a-input-text a-spacing-top-micro euBankAccountInputFields celwidget ng-scope ng-pristine ng-valid"
                                data-cel_widget_id="BankAccount_AccountHolderName"
                                data-ng-class="{'a-form-error': (fragmentData[fragmentData.bankCountry.value].ACCOUNT_HOLDER_NAME.errorMessage)}"
                                data-ng-focus="clearError(fragmentData[fragmentData.bankCountry.value].ACCOUNT_HOLDER_NAME)"
                                data-ng-if="!isRestricted()"
                                data-ng-model="fragmentData[fragmentData.bankCountry.value].ACCOUNT_HOLDER_NAME.value"
                              />
                              <!-- end ngIf: !isRestricted() -->

                              <!-- ngIf: isRestricted() && !areMultipleOptions() -->

                              <!-- ngIf: isRestricted() && areMultipleOptions() -->

                              <!-- ngIf: isRestricted() && areMultipleOptions() -->
                            </div>
                          </div>
                          <div class="a-row">
                            <div class="a-column a-span12">
                              <div
                                data-ng-show="fragmentData[fragmentData.bankCountry.value].ACCOUNT_HOLDER_NAME.errorMessage"
                                class="a-box a-alert-inline a-alert-inline-error ng-hide"
                                aria-live="assertive"
                                role="alert"
                              >
                                <div class="a-box-inner a-alert-container">
                                  <i class="a-icon a-icon-alert"></i>
                                  <div class="a-alert-content ng-binding"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="a-column a-span12 a-spacing-top-base a-ws-span6 bank-account-info bank-account-top-margin-mobile a-ws-span-last"
                        >
                          <div class="a-row">
                            <div class="a-column a-span12 a-ws-span12">
                              <div class="a-row">
                                <div class="a-column a-span12">
                                  <span
                                    data-ng-class="{euBankAccountLabel: (fragmentData.bankAccountFragment.renderConfig.useBlackLabels !== 'true'), blackBankAccountLabel: (fragmentData.bankAccountFragment.renderConfig.useBlackLabels === 'true')}"
                                    class="a-text-bold ng-binding blackBankAccountLabel"
                                  >Account Type</span>
                                </div>
                              </div>
                              <div class="a-row a-spacing-top-micro">
                                <div class="a-column a-span12">
                                  <div
                                    data-ng-class="{'bank-account-dropdown-error': (fragmentData[fragmentData.bankCountry.value].ACCOUNT_TYPE.errorMessage)}"
                                    class="a-section reg-dropdown"
                                  >
                                    <select
                                      class="bank-account-dropdown-select celwidget ng-pristine ng-valid"
                                      name="accountTypeSelect"
                                      data-ng-model="fragmentData[fragmentData.bankCountry.value].ACCOUNT_TYPE.value"
                                      data-ng-options="accountType as accountTypeName for (accountType,accountTypeName) in fragmentData[fragmentData.bankCountry.value].ACCOUNT_TYPE_OPTIONS.renderConfig"
                                      data-ng-focus="clearError(fragmentData[fragmentData.bankCountry.value].ACCOUNT_TYPE)"
                                      data-cel_widget_id="BankAccount_bankCountryDropdown"
                                    >
                                      <option value class="ng-binding">--Select Your Account Type--</option>
                                      <option value="BUSINESS">Overdraft Account</option>
                                      <option value="CHECKING">Current Account</option>
                                      <option value="SAVINGS">Savings Account</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div class="a-row">
                                <div class="a-column a-span12">
                                  <div
                                    data-ng-show="fragmentData[fragmentData.bankCountry.value].ACCOUNT_TYPE.errorMessage"
                                    class="a-box a-alert-inline a-alert-inline-error ng-hide"
                                    aria-live="assertive"
                                    role="alert"
                                  >
                                    <div class="a-box-inner a-alert-container">
                                      <i class="a-icon a-icon-alert"></i>
                                      <div class="a-alert-content ng-binding"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="a-row">
                        <div
                          class="a-column a-span12 a-spacing-top-base a-ws-span6 bank-account-info"
                        >
                          <div class="a-row">
                            <div class="a-column a-span12">
                              <span
                                data-ng-class="{euBankAccountLabel: (fragmentData.bankAccountFragment.renderConfig.useBlackLabels !== 'true'), blackBankAccountLabel: (fragmentData.bankAccountFragment.renderConfig.useBlackLabels === 'true')}"
                                class="a-text-bold ng-binding blackBankAccountLabel"
                              >Account number</span>
                              <span
                                id="inBBANAccountNumber"
                                data-ng-init="createPopover('inBBANAccountNumber',fragmentData[fragmentData.bankCountry.value].ACCOUNT_NUMBER.renderConfig)"
                                class="a-declarative"
                              >
                                <img
                                  data-ng-src="https://images-na.ssl-images-WENSLink.com/images/G/01/swipertol/u368._V279572601_.png"
                                  src="https://images-na.ssl-images-WENSLink.com/images/G/01/swipertol/u368._V279572601_.png"
                                />
                                <div class="a-popover-preload" id="a-popover-"></div>
                              </span>
                            </div>
                          </div>
                          <div class="a-row">
                            <div class="a-column a-span12">
                              <input
                                type="password"
                                maxlength="34"
                                autocomplete="off"
                                placeholder="Upto 34 characters."
                                name="accountNumber"
                                class="a-input-text a-spacing-top-micro euBankAccountInputFields celwidget ng-scope ng-pristine ng-valid"
                                data-cel_widget_id="BankAccount_AccountNumber"
                                data-ng-class="{'a-form-error': (fragmentData[fragmentData.bankCountry.value].ACCOUNT_NUMBER.errorMessage)}"
                                data-ng-focus="clearError(fragmentData[fragmentData.bankCountry.value].ACCOUNT_NUMBER)"
                                data-ng-model="fragmentData[fragmentData.bankCountry.value].ACCOUNT_NUMBER.value"
                              />
                            </div>
                          </div>
                          <div class="a-row">
                            <div class="a-column a-span12">
                              <div
                                data-ng-show="fragmentData[fragmentData.bankCountry.value].ACCOUNT_NUMBER.errorMessage"
                                class="a-box a-alert-inline a-alert-inline-error ng-hide"
                                aria-live="assertive"
                                role="alert"
                              >
                                <div class="a-box-inner a-alert-container">
                                  <i class="a-icon a-icon-alert"></i>
                                  <div class="a-alert-content ng-binding"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="a-row">
                        <div
                          class="a-column a-span12 a-spacing-top-base a-ws-span6 bank-account-info"
                        >
                          <div class="a-row">
                            <div class="a-column a-span12">
                              <span
                                data-ng-class="{euBankAccountLabel: (fragmentData.bankAccountFragment.renderConfig.useBlackLabels !== 'true'), blackBankAccountLabel: (fragmentData.bankAccountFragment.renderConfig.useBlackLabels === 'true')}"
                                class="a-text-bold ng-binding blackBankAccountLabel"
                              >IFSC code</span>
                              <span
                                id="inBBANIfscCode"
                                data-ng-init="createPopover('inBBANIfscCode',fragmentData[fragmentData.bankCountry.value].ROUTING_NUMBER.renderConfig)"
                                class="a-declarative"
                              >
                                <img
                                  data-ng-src="https://images-na.ssl-images-WENSLink.com/images/G/01/swipertol/u368._V279572601_.png"
                                  src="https://images-na.ssl-images-WENSLink.com/images/G/01/swipertol/u368._V279572601_.png"
                                />
                                <div class="a-popover-preload" id="a-popover-"></div>
                              </span>
                            </div>
                          </div>
                          <!-- ngIf: !verifyIfscButtonVisibility -->
                          <div data-ng-if="!verifyIfscButtonVisibility" class="a-row ng-scope">
                            <div class="a-column a-span12">
                              <input
                                type="text"
                                autocomplete="off"
                                placeholder="Example: ABCD0123456"
                                name="ifscCode"
                                class="a-input-text a-spacing-top-micro euBankAccountInputFields celwidget ng-scope ng-pristine ng-valid"
                                data-cel_widget_id="BankAccount_IfscCode"
                                data-ng-class="{'a-form-error': (fragmentData[fragmentData.bankCountry.value].ROUTING_NUMBER.errorMessage)}"
                                data-ng-focus="clearError(fragmentData[fragmentData.bankCountry.value].ROUTING_NUMBER)"
                                data-ng-model="fragmentData[fragmentData.bankCountry.value].ROUTING_NUMBER.value"
                              />
                            </div>
                          </div>
                          <!-- end ngIf: !verifyIfscButtonVisibility -->
                          <!-- ngIf: verifyIfscButtonVisibility -->
                          <div class="a-row">
                            <div class="a-column a-span12">
                              <div
                                data-ng-show="fragmentData[fragmentData.bankCountry.value].ROUTING_NUMBER.errorMessage"
                                class="a-box a-alert-inline a-alert-inline-error ng-hide"
                                aria-live="assertive"
                                role="alert"
                              >
                                <div class="a-box-inner a-alert-container">
                                  <i class="a-icon a-icon-alert"></i>
                                  <div class="a-alert-content ng-binding"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- ngIf: showBankInfo -->
                    </div>
                  </div>
                  <!-- end ngIf: showForm() -->
                </div>
                <!-- end ngIf: 'IN_BBAN' === visibleInputSet -->

                <!-- ngIf: !disableSaveButton -->
                <div data-ng-if="!disableSaveButton" class="a-section ng-scope">
                  <span class="a-button a-button-primary bank-account-save-button" id="a-autoid-12">
                    <span class="a-button-inner">
                      <input
                        data-ng-click="submitBankAccount()"
                        class="a-button-input"
                        type="submit"
                        aria-labelledby="a-autoid-12-announce"
                      />
                      <span
                        class="a-button-text ng-binding"
                        aria-hidden="true"
                        id="a-autoid-12-announce"
                      >Save</span>
                    </span>
                  </span>
                </div>
                <!-- end ngIf: !disableSaveButton -->
                <!-- ngIf: disableSaveButton -->
                <!-- ngIf: overallErrorMessage -->
              </div>

              <div
                id="in-bank-expander-content-complete"
                data-ng-show="isFragmentComplete"
                aria-expanded="true"
                class="a-expander-content a-expander-section-content a-section-expander-inner ng-hide a-expander-content-expanded"
                style="overflow: hidden; display: block;"
              >
                <div class="a-section">
                  To update the bank account details, please
                  <a
                    class="a-link-normal"
                    href="https://sellercentral.WENSLink.in/sw/AccountInfo/DepositMethodView/step/DepositMethodView?ref_=swipe_LD"
                  >click here</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="a-section a-spacing-base a-spacing-top-base">
          <div
            data-ng-controller="tax-registration-dashboard-fragment-controller"
            data-ng-init="init('Tax_Registration_Dashboard_BC_67635828-f378-41af-bc81-b6c1b3b8b032')"
            class="a-section ng-scope"
          >
            <div
              data-ng-class="isTaxCompleted ? '' : 'tax-registration-dashboard-mobile-error'"
              class="a-section tax-registration-dashboard-fragment"
            >
              <div
                data-ng-class="isTaxCompleted ? '' : 'tax-registration-dashboard-app-error'"
                aria-live="polite"
                class="a-row a-expander-container a-spacing-mini a-spacing-top-small a-expander-section-container a-section-expander-container"
              >
                <a
                  id="tax-fragment-expander"
                  data-ng-click="makeFieldsEditable()"
                  href="javascript:void(0)"
                  data-action="a-expander-toggle"
                  class="a-expander-header a-declarative a-expander-section-header a-link-section-expander a-size-medium"
                  data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;&quot;, &quot;collapse_prompt&quot;:&quot;&quot;}"
                >
                  <i class="a-icon a-icon-section-collapse"></i>
                  <span class="a-expander-prompt">
                    <img
                      alt
                      src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_green.png"
                      data-ng-show="showSuccessIconTax"
                      data-ng-src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_green.png"
                      class="fragment-logo ng-hide"
                    />
                    <img
                      alt
                      src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_Gray.png"
                      data-ng-hide="showSuccessIconTax"
                      data-ng-src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_Gray.png"
                      class="fragment-logo"
                    />
                    <span
                      class="a-size-base-plus fragment-heading a-text-bold ng-binding"
                    >Enter Tax Details</span>
                  </span>
                </a>
                <div
                  aria-expanded="true"
                  class="a-expander-content a-expander-inline-content a-expander-inner a-expander-content-expanded"
                  style="overflow: hidden;"
                >
                  <div class="a-section a-spacing-mini tax-registration-dashboard-container">
                    <p class="a-spacing-mini ng-binding">
                      Update your Tax Details for ASSAM :
                      <span
                        data-ng-show="getTaxDetailsStarter"
                        class="a-spinner a-spinner-small ng-hide"
                      ></span>
                    </p>
                    <hr class="a-divider-normal" />
                    <div class="a-section a-spacing-top-mini set-button-container-dashboard">
                      <form
                        id="dashboardTaxRegistrationForm"
                        name="dashboardTaxRegistrationFragment"
                        method="post"
                        action
                        class="ng-pristine ng-invalid ng-invalid-required"
                      >
                        <div class="a-row">
                          <div class="a-column a-span6 a-spacing-mini tax-registration-input">
                            <div class="a-section a-spacing-none">
                              <div class="a-section a-spacing-none dashboard-tax-value">
                                <span class="a-text-bold ng-binding">PAN number</span>
                                <span
                                  class="a-declarative"
                                  data-action="a-popover"
                                  data-a-popover="{}"
                                >
                                  <a
                                    href="javascript:void(0)"
                                    class="a-popover-trigger a-declarative PANPopoverTrigger tax-help aok-align-right aok-float-right ng-binding"
                                  >
                                    What's this?
                                    <i class="a-icon a-icon-popover"></i>
                                  </a>
                                </span>
                              </div>

                              <input
                                type="text"
                                required
                                placeholder
                                tabindex="1"
                                class="a-input-text dashboard-tax-value tax-inline-block ng-scope ng-pristine ng-animate ng-invalid ng-invalid-required"
                                data-ng-blur="isTaxValid('PAN', fragmentData.PAN)"
                                data-ng-class="{'a-form-error': fragmentData.PAN.error}"
                                data-ng-focus="clearError(fragmentData.PAN)"
                                data-ng-keyup="checkLength(fragmentData.PAN)"
                                data-ng-model="fragmentData.PAN.taxInformation.taxValue"
                                data-ng-readonly="isTaxFieldReadOnly"
                                style
                              />

                              <div class="a-section a-spacing-none">
                                <!-- ngIf: fragmentData.PAN.error -->
                              </div>
                            </div>
                          </div>
                          <div
                            class="a-column a-span6 a-spacing-none tax-registration-input a-span-last"
                          >
                            <span>
                              <div class="a-section a-spacing-none">
                                <div class="a-section a-spacing-none dashboard-tax-value">
                                  <span class="a-text-bold ng-binding">Provisional GSTIN</span>
                                  <span
                                    class="a-declarative"
                                    data-action="a-popover"
                                    data-a-popover="{}"
                                  >
                                    <a
                                      href="javascript:void(0)"
                                      class="a-popover-trigger a-declarative GSTPopoverTrigger tax-help aok-align-right aok-float-right ng-binding"
                                    >
                                      What's this?
                                      <i class="a-icon a-icon-popover"></i>
                                    </a>
                                  </span>
                                </div>

                                <input
                                  type="text"
                                  required
                                  placeholder
                                  tabindex="2"
                                  class="a-input-text dashboard-tax-value tax-inline-block ng-scope ng-pristine ng-animate ng-invalid ng-invalid-required"
                                  data-ng-blur="isTaxValid('GST', fragmentData.GST)"
                                  data-ng-class="{'a-form-error': fragmentData.GST.error}"
                                  data-ng-focus="clearError(fragmentData.GST)"
                                  data-ng-keyup="checkLength(fragmentData.GST)"
                                  data-ng-model="fragmentData.GST.taxInformation.taxValue"
                                  data-ng-readonly="isTaxFieldReadOnly"
                                  style
                                />

                                <div class="a-section a-spacing-none">
                                  <!-- ngIf: fragmentData.GST.error -->
                                </div>
                              </div>
                            </span>
                          </div>
                        </div>
                      </form>
                      <div
                        data-ng-show="showTaxVerificationError"
                        class="a-box a-alert-inline a-alert-inline-error ng-hide"
                        aria-live="assertive"
                        role="alert"
                      >
                        <div class="a-box-inner a-alert-container">
                          <i class="a-icon a-icon-alert"></i>
                          <div
                            class="a-alert-content ng-binding"
                          >Your tax details are invalid. Please update the correct details.</div>
                        </div>
                      </div>
                      <span class="a-button a-spacing-none set-tax-details-button" id="a-autoid-14">
                        <span class="a-button-inner">
                          <input
                            data-ng-click="submitTax()"
                            class="a-button-input"
                            type="submit"
                            aria-labelledby="a-autoid-14-announce"
                          />
                          <span
                            class="a-button-text a-text-center ng-binding"
                            aria-hidden="true"
                            id="a-autoid-14-announce"
                          >Save</span>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div
                    data-ng-hide="isTaxCompleted"
                    class="a-box a-alert-inline a-alert-inline-error tax-registration-dashboard-error ng-hide"
                    aria-live="assertive"
                    role="alert"
                  >
                    <div class="a-box-inner a-alert-container">
                      <i class="a-icon a-icon-alert"></i>
                      <div
                        class="a-alert-content ng-binding"
                      >It is necessary to submit the Tax Details to proceed.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="a-section a-spacing-base a-spacing-top-base">
          <div
            data-ng-controller="product-tax-code-fragment-controller"
            data-ng-init="init('Product_Tax_Code_BC_r1o2n3a4k5_s6h7a8h9')"
            data-ng-show="fragmentData.showPtcWidget"
            class="a-section ng-scope"
          >
            <div class="a-section product-tax-code-fragment">
              <div
                data-ng-class="{'product-tax-code-box-error': showLaunchSubmitFatalError === true}"
                aria-live="polite"
                class="a-row a-expander-container a-spacing-mini a-spacing-top-small a-expander-section-container a-section-expander-container"
              >
                <a
                  id="ptc-fragment-expander"
                  href="javascript:void(0)"
                  data-action="a-expander-toggle"
                  class="a-expander-header a-declarative a-expander-section-header a-link-section-expander a-size-medium"
                  data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;&quot;, &quot;collapse_prompt&quot;:&quot;&quot;}"
                >
                  <i class="a-icon a-icon-section-collapse"></i>
                  <span class="a-expander-prompt">
                    <img
                      alt
                      src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_green.png"
                      data-ng-show="isPTCFilled"
                      data-ng-src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_green.png"
                      class="fragment-logo ng-hide"
                    />
                    <img
                      alt
                      src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_Gray.png"
                      data-ng-hide="isPTCFilled"
                      data-ng-src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_Gray.png"
                      class="fragment-logo"
                    />
                    <span
                      class="a-size-base-plus fragment-heading a-text-bold ng-binding"
                    >Default Product Tax Code</span>
                  </span>
                </a>
                <div
                  aria-expanded="true"
                  class="a-expander-content mobile-right-margin a-expander-inline-content a-expander-inner a-expander-content-expanded"
                  style="overflow: hidden;"
                >
                  <div class="a-section a-spacing-mini product-tax-code-container">
                    <p
                      class="a-spacing-mini ng-binding"
                    >PTC (Product Tax code) are codes which are mapped to GST rates notified by the government (i.e. the percentage of taxes which are applicable for the sale of products or services). Seller Central Account tax calculation system uses PTC to calculate the tax on the products or services a seller lists on the marketplace. This is the Tax amount which sellers will later have to remit to the GST authorities on the product or services sold/provided by them</p>
                    <hr class="a-divider-normal" />
                    <div class="a-section">
                      <p
                        class="a-spacing-small product-tax-code-heading-dropdown a-text-bold ng-binding"
                      >
                        Default Product Tax Code
                        <span
                          id="ptcJITATrigger"
                          class="a-color-link jita-trigger jita-text-normal"
                          style="position:relative;right:-2px;"
                        >
                          What's this?
                          <span class="arrow-down a-color-link jita-trigger"></span>
                        </span>
                      </p>
                      <div class="a-section a-spacing-small">
                        <span class="a-dropdown-container">
                          <select
                            name
                            autocomplete="off"
                            data-a-native-class="product-tax-code-dropdown"
                            data-a-touch-header="PTC Code (GST rate)"
                            id="product-tax-code-dropdown"
                            tabindex="-1"
                            class="a-native-dropdown product-tax-code-dropdown"
                          >
                            <option class="a-prompt ng-binding" value>Select Product Tax Code</option>
                            <!-- ngRepeat: (key,value) in ptcMap -->
                            <option
                              data-ng-repeat="(key,value) in ptcMap"
                              value="A_GEN_EXEMPT"
                              class="ng-scope ng-binding"
                            >A_GEN_EXEMPT (0%)</option>
                            <!-- end ngRepeat: (key,value) in ptcMap -->
                            <option
                              data-ng-repeat="(key,value) in ptcMap"
                              value="A_GEN_JEWELLERY"
                              class="ng-scope ng-binding"
                            >A_GEN_JEWELLERY (3%)</option>
                            <!-- end ngRepeat: (key,value) in ptcMap -->
                            <option
                              data-ng-repeat="(key,value) in ptcMap"
                              value="A_GEN_MINIMUM"
                              class="ng-scope ng-binding"
                            >A_GEN_MINIMUM (0.25%)</option>
                            <!-- end ngRepeat: (key,value) in ptcMap -->
                            <option
                              data-ng-repeat="(key,value) in ptcMap"
                              value="A_GEN_PEAK"
                              class="ng-scope ng-binding"
                            >A_GEN_PEAK (28%)</option>
                            <!-- end ngRepeat: (key,value) in ptcMap -->
                            <option
                              data-ng-repeat="(key,value) in ptcMap"
                              value="A_GEN_PEAK_CESS12"
                              class="ng-scope ng-binding"
                            >A_GEN_PEAK_CESS12 (28% + 12%)</option>
                            <!-- end ngRepeat: (key,value) in ptcMap -->
                            <option
                              data-ng-repeat="(key,value) in ptcMap"
                              value="A_GEN_PEAK_CESS60"
                              class="ng-scope ng-binding"
                            >A_GEN_PEAK_CESS60 (28% + 60%)</option>
                            <!-- end ngRepeat: (key,value) in ptcMap -->
                            <option
                              data-ng-repeat="(key,value) in ptcMap"
                              value="A_GEN_REDUCED"
                              class="ng-scope ng-binding"
                            >A_GEN_REDUCED (12%)</option>
                            <!-- end ngRepeat: (key,value) in ptcMap -->
                            <option
                              data-ng-repeat="(key,value) in ptcMap"
                              value="A_GEN_STANDARD"
                              class="ng-scope ng-binding"
                            >A_GEN_STANDARD (18%)</option>
                            <!-- end ngRepeat: (key,value) in ptcMap -->
                            <option
                              data-ng-repeat="(key,value) in ptcMap"
                              value="A_GEN_SUPERREDUCED"
                              class="ng-scope ng-binding"
                            >A_GEN_SUPERREDUCED (5%)</option>
                            <!-- end ngRepeat: (key,value) in ptcMap -->
                          </select>
                          <span
                            tabindex="-1"
                            class="a-button a-button-dropdown"
                            id="a-autoid-15"
                            style="min-width: 0%;"
                          >
                            <span class="a-button-inner">
                              <span
                                class="a-button-text a-declarative"
                                data-action="a-dropdown-button"
                                role="button"
                                tabindex="0"
                                aria-hidden="true"
                                id="a-autoid-15-announce"
                              >
                                <span class="a-dropdown-prompt ng-binding">Select Product Tax Code</span>
                              </span>
                              <i class="a-icon a-icon-dropdown"></i>
                            </span>
                          </span>
                        </span>
                      </div>
                      <div
                        data-ng-show="showPtcDropdownValueNotSelectedError"
                        class="a-section a-spacing-none ng-hide"
                      >
                        <div
                          class="a-box a-alert-inline a-alert-inline-error a-spacing-mini"
                          aria-live="assertive"
                          role="alert"
                        >
                          <div class="a-box-inner a-alert-container">
                            <i class="a-icon a-icon-alert"></i>
                            <div
                              class="a-alert-content ng-binding"
                            >Please select a Product Tax Code.</div>
                          </div>
                        </div>
                      </div>
                      <div class="a-section a-spacing-small">
                        <div class="a-checkbox a-checkbox-fancy ng-scope">
                          <label>
                            <input
                              type="checkbox"
                              name
                              value
                              data-ng-model="ptcCheckBox"
                              class="ng-pristine ng-valid"
                              style
                            />
                            <i class="a-icon a-icon-checkbox"></i>
                            <span class="a-label a-checkbox-label">
                              <span
                                data-ng-bind-html="checkboxAgreementDescription"
                                class="ng-binding"
                              >
                                I have reviewed and agree to WENSLink's
                                <a
                                  href="https://services.WENSLink.in/landing/gst-tax-methodology.htm?ld=ASINSOADirect"
                                  target="_blank"
                                >Tax Calculation Methodology</a>
                              </span>
                            </span>
                          </label>
                        </div>
                      </div>
                      <div
                        data-ng-show="showPtcCheckBoxNotTickedError"
                        class="a-section a-spacing-none ng-hide"
                      >
                        <div
                          class="a-box a-alert-inline a-alert-inline-error a-spacing-mini"
                          aria-live="assertive"
                          role="alert"
                        >
                          <div class="a-box-inner a-alert-container">
                            <i class="a-icon a-icon-alert"></i>
                            <div
                              class="a-alert-content ng-binding"
                            >Please accept the Terms and Conditions</div>
                          </div>
                        </div>
                      </div>
                      <div class="a-section a-spacing-small a-text-left">
                        <span
                          data-ng-show="showSaveProductTaxCodeSpinner"
                          class="a-spinner a-spinner-small mobile-spinner ng-hide"
                        ></span>
                        <span
                          class="a-button a-button-width-normal save-product-tax-code-button"
                          id="a-autoid-16"
                        >
                          <span class="a-button-inner">
                            <input
                              data-ng-click="savePTC()"
                              class="a-button-input"
                              type="submit"
                              aria-labelledby="a-autoid-16-announce"
                            />
                            <span
                              class="a-button-text ng-binding"
                              aria-hidden="true"
                              id="a-autoid-16-announce"
                            >Save</span>
                          </span>
                        </span>
                        <span
                          data-ng-show="showSaveProductTaxCodeSpinner"
                          class="a-spinner a-spinner-small desktop-spinner ng-hide"
                        ></span>
                      </div>
                      <div
                        data-ng-show="showSaveProductTaxCodeError"
                        class="a-section a-spacing-none ng-hide"
                      >
                        <div
                          class="a-box a-alert-inline a-alert-inline-error a-spacing-mini"
                          aria-live="assertive"
                          role="alert"
                        >
                          <div class="a-box-inner a-alert-container">
                            <i class="a-icon a-icon-alert"></i>
                            <div
                              class="a-alert-content ng-binding"
                            >The was some problem in saving the PTC. Please try again later.</div>
                          </div>
                        </div>
                      </div>
                      <div class="a-section a-spacing-small">
                        <a
                          data-ng-click="viewProductTaxCodeClick($event)"
                          class="a-size-base a-link-normal ng-binding"
                          target="_blank"
                          rel="noopener"
                          href="https://images-eu.ssl-images-WENSLink.com/images/G/31/WENSLinkservices/sellercentral/GST_PTC._V507871356_.jpg?ld=ASINSOADirect"
                        >View all Product Tax Codes</a>
                      </div>
                      <div class="a-section a-spacing-small">
                        <a
                          data-ng-click="ptcLearnMoreClick($event)"
                          class="a-size-base a-link-normal ng-binding"
                          target="_blank"
                          rel="noopener"
                          href="https://sellercentral.WENSLink.in/learn/courses?ref_=gst_page_PTC&amp;courseId=134&amp;moduleId=528&amp;modLanguage=English"
                        >Learn more about PTC</a>
                      </div>
                    </div>
                    <div
                      data-ng-show="showLaunchSubmitFatalError"
                      class="a-section a-spacing-none ng-hide"
                    >
                      <div
                        class="a-box a-alert-inline a-alert-inline-error a-spacing-mini"
                        aria-live="assertive"
                        role="alert"
                      >
                        <div class="a-box-inner a-alert-container">
                          <i class="a-icon a-icon-alert"></i>
                          <div class="a-alert-content ng-binding">Please select a Product Tax Code</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="a-section a-spacing-base a-spacing-top-base">
          <div
            data-ng-controller="ds-fragment-controller"
            data-ng-init="init('Digital_Signature_BC_67635828-f378-41af-bc81-b6c1b3b8b0328')"
            data-ng-show="showDigitalSignatureWidget"
            class="a-section ng-scope"
          >
            <div class="a-section ds-fragment">
              <div
                aria-live="polite"
                class="a-row a-expander-container a-spacing-mini a-spacing-top-small a-expander-section-container a-section-expander-container"
              >
                <a
                  id="signature-fragment-expander"
                  href="javascript:void(0)"
                  data-action="a-expander-toggle"
                  class="a-expander-header a-declarative a-expander-section-header a-link-section-expander a-size-medium"
                  data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;&quot;, &quot;collapse_prompt&quot;:&quot;&quot;}"
                >
                  <i class="a-icon a-icon-section-collapse"></i>
                  <span class="a-expander-prompt">
                    <img
                      alt
                      src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_green.png"
                      data-ng-show="digitalSignatureUploadedAndApproved"
                      data-ng-src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_green.png"
                      class="fragment-logo ng-hide"
                    />
                    <img
                      alt
                      src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_Gray.png"
                      data-ng-hide="digitalSignatureUploadedAndApproved"
                      data-ng-src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/Check_Gray.png"
                      class="fragment-logo"
                    />
                    <span class="a-size-base-plus fragment-heading a-text-bold ng-binding">Signature</span>
                  </span>
                </a>
                <div
                  aria-expanded="true"
                  class="a-expander-content a-expander-inline-content a-expander-inner a-expander-content-expanded"
                  style="overflow: hidden;"
                >
                  <div class="a-section a-spacing-mini ds-fragment-margin-right">
                    <p
                      class="a-spacing-mini ds-description ng-binding"
                    >Upload a scan copy of your signature which will be used on the invoices sent to customers</p>
                    <hr class="a-spacing-top-small a-divider-normal ds-divider" />

                    <div class="a-section ds-editor-container">
                      <div
                        id="ds-image-editor"
                        data-ng-show="showEditor"
                        class="a-section a-spacing-small ng-hide"
                      >
                        <div class="a-section a-spacing-none ds-options">
                          <span
                            id="ds-reset"
                            data-ng-click="reset()"
                            class="a-color-tertiary ds-edit-options ng-binding"
                          >
                            <img
                              alt
                              src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/reset.png"
                              data-ng-src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/reset.png"
                            />
                            Reset
                          </span>
                          <span
                            id="ds-rotate-right"
                            data-ng-click="rotate(-90)"
                            class="a-color-tertiary ds-edit-options ng-binding"
                          >
                            <img
                              alt
                              src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/rotate-left.png"
                              data-ng-src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/rotate-left.png"
                            />
                            Rotate Left
                          </span>
                          <span
                            id="ds-rotate-left"
                            data-ng-click="rotate(90)"
                            class="a-color-tertiary ds-edit-options ng-binding"
                          >
                            <img
                              alt
                              src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/rotate-right.png"
                              data-ng-src="https://m.media-WENSLink.com/images/G/31/INSSRSWIPE/rotate-right.png"
                            />
                            Rotate Right
                          </span>
                        </div>

                        <canvas id="rotatedCanvas" class="aok-hidden"></canvas>
                        <div
                          class="a-section a-spacing-none a-spacing-top-mini ds-crop-done-container"
                        >
                          <span
                            id="ds-select-other"
                            data-ng-click="openFileUploader($event)"
                            class="a-color-link ng-binding"
                          >Select a different image</span>

                          <span
                            class="a-button a-button-primary ds-button-width aok-float-right ds-done-button"
                            id="a-autoid-17"
                          >
                            <span class="a-button-inner">
                              <input
                                data-ng-click="cropImage()"
                                class="a-button-input"
                                type="submit"
                                aria-labelledby="a-autoid-17-announce"
                              />
                              <span
                                class="a-button-text ng-binding"
                                aria-hidden="true"
                                id="a-autoid-17-announce"
                              >Done</span>
                            </span>
                          </span>
                        </div>
                      </div>

                      <div
                        data-ng-show="!showEditor"
                        class="a-section a-spacing-none ds-image-upload-container"
                      >
                        <div class="a-box a-spacing-small">
                          <div class="a-box-inner">
                            <input
                              type="file"
                              class="aok-hidden"
                              id="ds-file-input"
                              accept="image/jpeg, image/jpg"
                              onchange="angular.element(this).scope().handleFileChange(this.files)"
                            />
                            <input type="hidden" name="signature-id" id="signature-id" />

                            <a
                              data-ng-click="openFileUploader($event)"
                              data-ng-show="!showImagePreview"
                              data-ng-title="renderData.uploadLinkText"
                              class="a-link-normal ds-image-upload-link ng-binding"
                              href="#"
                            >Upload your signature</a>

                            <div class="a-section a-spacing-none ds-preview-container">
                              <img
                                alt
                                src="https://images-na.ssl-images-WENSLink.com/images/G/01/x-locale/common/transparent-pixel._V192234675_.gif"
                                data-ng-show="showImagePreview"
                                data-ng-src
                                class="ds-preview ng-hide"
                              />
                              <span
                                data-ng-show="showDigitalSignatureSpinner"
                                class="a-spinner a-spinner-medium ds-upload-spinner ng-hide"
                              ></span>
                            </div>
                          </div>
                        </div>

                        <div
                          data-ng-show="showImagePreview"
                          class="a-section a-spacing-none aok-align-center ng-hide"
                        >
                          <span data-ng-show="showConfirmButton" class="ng-hide">
                            <span
                              class="a-button a-button-primary ds-button-width"
                              id="a-autoid-18"
                            >
                              <span class="a-button-inner">
                                <input
                                  data-ng-click="confirmSignature()"
                                  data-ng-disabled="disableConfirmButton"
                                  class="a-button-input"
                                  type="submit"
                                  aria-labelledby="a-autoid-18-announce"
                                />
                                <span
                                  class="a-button-text ng-binding"
                                  aria-hidden="true"
                                  id="a-autoid-18-announce"
                                >Confirm</span>
                              </span>
                            </span>
                          </span>

                          <span data-ng-show="showChangeButton" class="ng-hide">
                            <span class="a-button ds-button-width" id="a-autoid-19">
                              <span class="a-button-inner">
                                <input
                                  data-ng-click="openFileUploader($event)"
                                  data-ng-disabled="disableChangeButton"
                                  class="a-button-input"
                                  type="submit"
                                  aria-labelledby="a-autoid-19-announce"
                                />
                                <span
                                  class="a-button-text ng-binding"
                                  aria-hidden="true"
                                  id="a-autoid-19-announce"
                                >Change</span>
                              </span>
                            </span>
                          </span>
                        </div>
                        <div
                          data-ng-show="showErrorDigitalSigntatureSizeError"
                          class="a-box a-alert-inline a-alert-inline-error ng-hide"
                          aria-live="assertive"
                          role="alert"
                        >
                          <div class="a-box-inner a-alert-container">
                            <i class="a-icon a-icon-alert"></i>
                            <div
                              class="a-alert-content ng-binding"
                            >Please upload image less than 4mb size.</div>
                          </div>
                        </div>
                        <div
                          data-ng-show="showErrorDigitalSigntatureFormatError"
                          class="a-box a-alert-inline a-alert-inline-error ng-hide"
                          aria-live="assertive"
                          role="alert"
                        >
                          <div class="a-box-inner a-alert-container">
                            <i class="a-icon a-icon-alert"></i>
                            <div class="a-alert-content ng-binding">Please upload jpeg image only.</div>
                          </div>
                        </div>
                        <div
                          data-ng-show="showErrorDigitalSigntatureServiceError"
                          class="a-box a-alert-inline a-alert-inline-error ng-hide"
                          aria-live="assertive"
                          role="alert"
                        >
                          <div class="a-box-inner a-alert-container">
                            <i class="a-icon a-icon-alert"></i>
                            <div class="a-alert-content ng-binding">Please try again after sometime.</div>
                          </div>
                        </div>
                      </div>

                      <div class="a-section a-spacing-none ds-steps-container">
                        <p class="a-spacing-micro a-text-bold ng-binding">What to upload ?</p>
                        <ul class="a-unordered-list a-vertical ds-steps">
                          <li>
                            <span
                              class="a-list-item ng-binding"
                            >Sign on a white paper, scan the signature and upload the image.</span>
                          </li>
                          <li>
                            <span
                              class="a-list-item ng-binding"
                            >Signature should be legible and in focus.</span>
                          </li>
                          <li>
                            <span
                              class="a-list-item ng-binding"
                            >Only upload JPEG or JPG image format</span>
                          </li>

                          <li>
                            <span class="a-list-item ng-binding">Image size should not exceed 2mb.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div
                      data-ng-show="showDigitalSignatureNotCompleted"
                      class="a-box a-alert-inline a-alert-inline-error a-spacing-mini ng-hide"
                      aria-live="assertive"
                      role="alert"
                    >
                      <div class="a-box-inner a-alert-container">
                        <i class="a-icon a-icon-alert"></i>
                        <div class="a-alert-content ng-binding">Digital Signature not completed</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="a-section a-spacing-base a-spacing-top-base"></div>

        <form
          id="payment_form"
          method="POST"
          action="https://api.razorpay.com/v1/checkout/embedded"
        >
          <input type="hidden" name="key_id" value="rzp_test_WQij2Xeq6EW9Ty" />
          <input type="hidden" name="order_id" :value="order_id" />
          <input type="hidden" name="name" value="WENSLink" />
          <input type="hidden" name="description" value="Seller Registration Payment" />
          <input type="hidden" name="image" value="https://wenslink.com/dashboard-icon-black.png" />
          <input type="hidden" name="prefill[name]" :value="business_name" />
          <input type="hidden" name="prefill[contact]" value="9123456780" />
          <input type="hidden" name="prefill[email]" value="gaurav.kumar@example.com" />
          <input
            type="hidden"
            name="notes[shipping address]"
            value="L-16, The Business Centre, 61 Wellfield Road, New Delhi - 110001"
          />
          <input
            type="hidden"
            name="callback_url"
            value="https://seller.wenslink.com/backend/api/payments/verify"
          />
          <input type="hidden" name="cancel_url" :value="'https://seller.wenslink.com/backend/api/payments/cancelled/' + order_id" />
          <button
            id="goToGateway"
            class="hide a-button a-spacing-top-medium a-button-primary launch-submit"
          >
            <span class="a-button-inner">
              <input
                id="launch-main-button-post-launch"
                class="a-button-input"
                type="submit"
                aria-labelledby="a-autoid-22-announce"
              />
              <span
                class="a-button-text"
                aria-hidden="true"
                id="a-autoid-22-announce"
              >Pay ₹ {{amount}} & Launch your business</span>
            </span>
          </button>
        </form>

        <span
          class="a-button a-spacing-top-medium a-button-primary launch-submit"
          @click="createOrder"
        >
          <span class="a-button-inner">
            <input
              id="launch-main-button-post-launch"
              class="a-button-input"
              type="submit"
              aria-labelledby="a-autoid-22-announce"
            />
            <span
              class="a-button-text"
              aria-hidden="true"
              id="a-autoid-22-announce"
            >Pay ₹ {{amount}} & Launch your business</span>
          </span>
        </span>

        <div class="a-section a-spacing-medium a-spacing-top-large">
          <!-- 
<div data-ng-controller="dashboard-banner-fragment-controller" data-ng-init="init('DASHBOARD_BANNER_BC_67635828-f378-41af-bc81-b6c1b3b8b032')" data-ng-show="false" class="a-section dashboard-banner-fragment ng-scope ng-hide">
    <div class="a-section">
        <div class="a-box a-alert a-alert-info"><div class="a-box-inner a-alert-container"><h4 class="a-alert-heading ng-binding">Get Ready for GST</h4><i class="a-icon a-icon-alert"></i><div class="a-alert-content">
            <div class="a-section a-spacing-none upload-gst-container">
                <p class="a-spacing-none upload-gst-text ng-binding">
                    Goods and Services Tax ("GST") is proposed to be implemented from 1st July, 2017. Accordingly, WENSLink requires you to provide your details such as GSTIN, Digital Image Signature to seamlessly continue selling on WENSLink.in
                </p>
                <span class="a-button a-spacing-none dashboard-banner-fragment-update-now aok-align-right aok-float-right" id="a-autoid-23"><span class="a-button-inner"><a href="/account-info/tax-details/home?ref=sw_in_dashboard_gst" class="a-button-text a-text-center ng-binding" role="button" id="a-autoid-23-announce">
                    Update Now
                </a></span></span>
            </div>
        </div></div></div>
    </div>
          </div>-->
        </div>

        <div class="a-section a-spacing-medium a-spacing-top-large">
          <div
            data-ng-controller="video-tutorials-fragment-controller"
            data-ng-init="init('Video_Tutorials_BC_67635828-f378-41af-bc81-b6c1b3b8b032')"
            class="a-section video-tutorials-fragment ng-scope"
          >
            <img
              alt
              src="https://images-na.ssl-images-WENSLink.com/images/G/31/WENSLinkservices/sellercentral/video-tutorials-logo._V294240950_.png"
              data-ng-src="https://images-na.ssl-images-WENSLink.com/images/G/31/WENSLinkservices/sellercentral/video-tutorials-logo._V294240950_.png"
              class="video-tutorials-logo"
            />

            <div class="a-section a-spacing-small a-spacing-top-small video-container">
              <h2
                class="a-spacing-none a-color-secondary a-text-normal ng-binding"
              >Learn how to sell on WENSLink</h2>
              <p
                class="a-spacing-none a-size-base a-color-secondary ng-binding"
              >Seller university helps you gain insights on how to sell on WENSLink, policies etc.</p>

              <!-- ngRepeat: video in videoIds track by $index -->
              <div
                data-ng-repeat="video in videoIds track by $index"
                class="a-section a-spacing-small a-spacing-top-small video ng-scope"
              >
                <iframe
                  ng-src="https://images-eu.ssl-images-WENSLink.com/images/G/01/x-locale/common/transparent-pixel.gif"
                  id="player0"
                  class="video-youtube-iframe"
                  width="340"
                  height="240"
                  scrolling="no"
                  allowfullscreen="true"
                  src="https://images-eu.ssl-images-WENSLink.com/images/G/01/x-locale/common/transparent-pixel.gif"
                ></iframe>
              </div>
              <!-- end ngRepeat: video in videoIds track by $index -->
              <div
                data-ng-repeat="video in videoIds track by $index"
                class="a-section a-spacing-small a-spacing-top-small video ng-scope"
              >
                <iframe
                  ng-src="https://images-eu.ssl-images-WENSLink.com/images/G/01/x-locale/common/transparent-pixel.gif"
                  id="player1"
                  class="video-youtube-iframe"
                  width="340"
                  height="240"
                  scrolling="no"
                  allowfullscreen="true"
                  src="https://images-eu.ssl-images-WENSLink.com/images/G/01/x-locale/common/transparent-pixel.gif"
                ></iframe>
              </div>
              <!-- end ngRepeat: video in videoIds track by $index -->
              <a
                class="a-size-base-plus a-link-normal ng-binding"
                target="_blank"
                rel="noopener"
                title="Explore more videos"
                href="/learn?ref_=su_r2l_dashboard_widget"
              >Explore more videos</a>
            </div>
          </div>
        </div>

        <div class="a-section a-spacing-medium a-spacing-top-large text-center">
          <a
            class="a-size-base-plus a-link-normal"
            target="_blank"
            rel="noopener"
            title="Continue to Seller Central"
            href="/hz/home?ref=sw_in_sc_home"
          >Continue to Seller Central</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.a-expander-prompt img:first-child {
  display: none;
}
.a-expander-inner,
#in-bank-expander-content,
#in-bank-expander-content-complete {
  display: none !important;
}
.video-tutorials-fragment {
  display: none !important;
}
</style>


<script>
import axios from 'axios'

export default {
  data() {
    return {
      business_name: '',
      amount: 1210,
      order_id: ''
    }
  },

  mounted() {
    this.$store.dispatch('getStep')

    axios({
      method: 'GET',
      url:
        this.$store.state.api.getCompany_name,
        headers: {
                    Authorization: 'Bearer ' + this.$cookies.get('access_token')
                  },
      contentType: 'application/json'
    })
      .then(res => {
        console.log(res.data)
        console.log('response')
        this.business_name = res.data.company_name
      })
      .catch(err => {
        console.log('error in request', err)
      })
  },
  methods: {
    createOrder: function() {
      var payload = new FormData()

      payload.append('amount', this.amount)
      payload.append('capture', 1)

      axios({
        method: 'POST',
        url: this.$store.state.api.createOrder,
        data: payload,
        contentType: 'application/json',
                headers: {
                    Authorization: 'Bearer ' + this.$cookies.get('access_token')
                  },
      })
        .then(res => {
          console.log(res.data)
          console.log('response')
          this.order_id = res.data.order_id
          console.log(this.order_id)
          setTimeout(function() {
            $('#payment_form').submit()
          }, 500)
        })
        .catch(err => {
          console.log('error in request', err)
        })
    }
  }
}
</script>


<style scoped>
.a-spacing-top-base {
  display: none;
}

.table > thead,
table > tbody {
  background-color: #f3f3f3;
}

th {
  color: black;
}

td {
  color: black;
}

.table > thead > tr > th,
.table > tbody > tr > td {
  padding: 15px !important;
}

table > tbody > tr > td:nth-child(even) {
  text-align: right;
}

thead tr {
  border-bottom: 1px solid #cccccc;
}
</style>