<template>
    <div>

<div data-ng-controller="in-ssr-header-controller" data-ng-init="init('Header_BC_a1r2j3u4-n5s6-b7h8-a9r0-a1d2w3a4j567')" class="ng-scope">
    
        
  
<div class="a-section" style="margin:0!important">
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

    </div><!-- end ngRepeat: step in navigation.Steps --><div ng-class="['step', getStepClass(step.currentStep ,step.stepCompletionStatus)]" ng-repeat="step in navigation.Steps" class="ng-scope step stepCompleted">

 
     <div data-ng-hide="isLinkAllowed(step)" class="stepLinkBox" title="Seller Information">
        <img class="stepImg" ng-src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/completedStepA._CB295853638_.png" src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/completedStepA._CB295853638_.png">
        <span class="step-text ng-binding">Tax Details</span>
      </div>

    </div><!-- end ngRepeat: step in navigation.Steps --><div ng-class="['step', getStepClass(step.currentStep ,step.stepCompletionStatus)]" ng-repeat="step in navigation.Steps" class="ng-scope step stepCompleted">

       <div data-ng-hide="isLinkAllowed(step)" class="stepLinkBox" title="Tax Details">
        <img class="stepImg" ng-src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/completedStepA._CB295853638_.png" src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/completedStepA._CB295853638_.png">
        <span class="step-text ng-binding">Seller Interview</span>
      </div>

    </div><!-- end ngRepeat: step in navigation.Steps --><div ng-class="['step', getStepClass(step.currentStep ,step.stepCompletionStatus)]" ng-repeat="step in navigation.Steps" class="ng-scope step stepActive">


      <div data-ng-hide="isLinkAllowed(step)" class="stepLinkBox" title="Dashboard">
        <img class="stepImg" ng-src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/currentStepA._CB295853638_.png" src="https://images-eu.ssl-images-amazon.com/images/G/31/rainier/nav/currentStepA._CB295853638_.png">
        <span class="step-text ng-binding">Dashboard</span>
      </div>

    </div><!-- end ngRepeat: step in navigation.Steps -->
  </div>
</div></div>


        <div class="a-section single-container">
    <div class="a-section single-main">
        
        




<div data-ng-controller="greeting-fragment-controller" data-ng-init="init('Greeting_BC_67635828-f378-41af-bc81-b6c1b3b8b032')" data-ng-show="showFragment" class="a-section ng-scope">
    <div class="a-section greeting-fragment">
        <div data-ng-show="onPostLaunchPage" class="a-section a-text-center ng-hide">
            
                <h1 id="post-launch-heading-id" class="a-spacing-none post-launch-font-amazon-ember-light a-text-normal hide">
                    You are now an active seller on Amazon.in 
                </h1>            
        </div>
        <div data-ng-show="!onPostLaunchPage" class="a-section">
            <div data-ng-show="!isLaunched" class="a-section">
                <h1 class="a-size-extra-large a-spacing-none a-text-normal ng-binding">
                    Hi ABC Left Electronics, You are almost there
                </h1>
                <p class="a-spacing-mini a-spacing-top-mini a-size-small a-color-tertiary ng-binding">
                    Please complete the below steps and start selling to millions of customer
                </p>
            </div>
            <div data-ng-show="isLaunched" class="a-section ng-hide">
                <div class="a-box a-alert a-alert-success"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content ng-binding">
                    Congratulations, your account is now active. 
                </div></div></div>
            </div>
        </div>
    </div>
</div>
        
        
        
        
        
            
            
            
            <script>
                registerFragment("Launch_BC_PL_470d51d60d6371b04f70ee0f3dadab60", {"responseData":{"deviceType":"BROWSER","encAccountId":"ARRVIVKKFPG17","showLaunchFragment":false,"Launch":{"launchButtonText":"Start Selling","greenTick":"https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_green.png","miniLaunchButtonText":"Launch your Business","launchHeading":"Congrats, You are now ready to start selling on Amazon.in","miniLaunchButtonTextForMobile":"Start Selling","overlayFirstHeading":"Congratulations!","needHelpUrl":"/hz/contact-us?_encoding=UTF8","message":"Click on the button to go live","needHelpText":"Need Help?","needHelpUrlForOverlay":"/hz/m/cuoption?callSource=registration&callBackUrl=/sw/in/Launch/dashboard&categoryId=40000&category=mobi_support_cu_c_your_account&typeId=50004&type=mobi_support_cu_t_other_issues&attributes={\"attributes\":{\"reftag\":\"mscuotis\",\"MobilePhoneTemplate\":\"3d02e045-412e-44d1-82c2-4ab949e3c4e5\",\"MobileCaseSeverity\":\"4\",\"Mobile911Exists\":\"N\",\"MobileQueue\":\"tam-general@amazon.in\",\"MobilePhoneExists\":\"Y\",\"MobileChatExists\":\"N\"}}&ref_=overlay_url","overlaySecondHeading":"You are ready to sell on Amazon"}}});
            </script>
            <div class="a-section a-spacing-base a-spacing-top-base">
                




<div id="launchFragment" data-ng-controller="launch-fragment-controller" data-ng-init="init('Launch_BC_PL_470d51d60d6371b04f70ee0f3dadab60')" class="a-section ng-scope">
    <div class="a-popover-preload" id="a-popover-modalBody">
        <div class="a-section overlay ng-binding">
            <img alt="" src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_green.png" data-ng-src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_green.png" class="fragment-logo"><br><br>
            <span class="a-text-bold ng-binding">
                Congratulations!
            </span>
            <br>You are ready to sell on Amazon<br><br>
            <span class="a-button a-button-primary" id="a-autoid-1"><span class="a-button-inner"><input id="modal-launch-button" class="a-button-input" type="submit" aria-labelledby="a-autoid-1-announce"><span class="a-button-text ng-binding" aria-hidden="true" id="a-autoid-1-announce">
                Start Selling
            </span></span></span>
            <br><br>
            <a class="a-link-normal ng-binding" href="/hz/m/cuoption?callSource=registration&amp;callBackUrl=/sw/in/Launch/dashboard&amp;categoryId=40000&amp;category=mobi_support_cu_c_your_account&amp;typeId=50004&amp;type=mobi_support_cu_t_other_issues&amp;attributes={&quot;attributes&quot;:{&quot;reftag&quot;:&quot;mscuotis&quot;,&quot;MobilePhoneTemplate&quot;:&quot;3d02e045-412e-44d1-82c2-4ab949e3c4e5&quot;,&quot;MobileCaseSeverity&quot;:&quot;4&quot;,&quot;Mobile911Exists&quot;:&quot;N&quot;,&quot;MobileQueue&quot;:&quot;tam-general@amazon.in&quot;,&quot;MobilePhoneExists&quot;:&quot;Y&quot;,&quot;MobileChatExists&quot;:&quot;N&quot;}}&amp;ref_=overlay_url"> Need Help? </a>
        </div>
    </div>

    
    
    
    

    <div data-ng-show="showLaunchFragment" class="a-section quick-launch ng-hide">
        <div class="a-box a-alert a-alert-info"><div class="a-box-inner a-alert-container"><h4 class="a-alert-heading ng-binding">Congrats, You are now ready to start selling on Amazon.in</h4><i class="a-icon a-icon-alert"></i><div class="a-alert-content ng-binding">
            Click on the button to go live
            
                
                
                    <span class="a-button a-spacing-none a-button-primary show-right" id="a-autoid-2"><span class="a-button-inner"><input id="launch-mini-button" data-ng-click="LaunchSubmit()" class="a-button-input" type="submit" aria-labelledby="a-autoid-2-announce"><span class="a-button-text ng-binding" aria-hidden="true" id="a-autoid-2-announce">
                        Launch your Business
                    </span></span></span>
                
            
        </div></div></div>
    </div>
    <div data-ng-show="errorMessage.length" class="a-section launch-fragment ng-hide">
        <div class="a-box a-alert a-alert-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content">
            <!-- ngRepeat: message in errorMessage track by $index -->
        </div></div></div>
    </div>
    
        
    
</div>

            </div>
        
            
            
            
            <script>
                registerFragment("Listing_BC_67635828-f378-41af-bc81-b6c1b3b8b032", {"responseData":{"shouldSkipSellerInterview":false,"encAccountId":"ARRVIVKKFPG17","listingCategory":{"brandRegistryApprovedStatus":"Approved","modalBodyOverview":"Select categories in which you have products to sell","gatedCategoryProcessing":"Processing might take 24-48 hours","brandRegistryHeading":"UPC Exemption","listingCount":"Listing Count","brandRegistrySubHeading":"If your products do not have a standard ID such as a barcode, UPC, EAN, or ISBN, apply for UPC exemption","gatedCategoryDeclined":"Re-Apply","gatedCategoryApplyStatus":"Apply to sell","listingSubHeading":"List the products you wish to sell on Amazon.in","desktopHeading":"Products to sell","listingOrText":"OR","brandRegistryPendingStatus":"Under Review","brandRegistryDeclinedStatus":"Declined","openCategoryHeading":"Start selling in these categories:","gatedCategoryError":"Add some listings before launch","addMoreBrands":"Add more brands","mobileHeading":"Products to sell","suHelperHeading":"Learn how to list your products","gatedCategoryDeclinedStatus":"Declined","newBrandRegistryHeading":"I have products without product ID (GTIN / barcode)","doneButtonText":"Done","listingProfitCalculatorURL":"https://services.amazon.in/landing/pricing-calculator.html?ref_=profit_url_listing","requestApprovalHeading":"You need to request for approval to list in -","addProductButton":"Add a Product","findUPCXProducts":"How to find it?","mobileSubHeading":"Add product in any of the following categories-","cancelButtonText":"Cancel","gatedCategoryPopover":"These categories require approval","addProductsButton":"Add Products","listingHeading":"1. Create your Amazon listings","newListingSubHeading":"Add product in any of the following categories -","brandRegistryButton":"Apply Now","question":"Choose categories you wish to sell","addCategories":"Edit categories","productsNum":"products added","listingProfitCalculatorHeading":"Learn more about Amazon's charges","productNum":"product added","listingUploadURLText":"upload your excel file","gatedCategoryPendingStatus":"Under Review","categoryErrorMessage":"Something went wrong. Please save categories again.","newAddCategories":"\t\nAdd / Remove categories","brandRegistryPopover":"Apply for UPC Exemption","listingButton":"Start Listing","newBrandRegistryButton":"Apply for UPC Exemption","gatedCategoryHeading":"Categories listed below require approval","newBrandRegistrySubHeading":"If your products don\u2019t have a product ID and it is not available on amazon.in, then you need to apply for UPC exemption to add such a product."},"listingCategoryConfig":{"suContent":{"renderConfig":{"suHelperHeading":"lms_str_id:sc_in_ssr_swipe_listing_su_heading$Learn how to list your products","gatedContentThumbnail":"https://m.media-amazon.com/images/G/31/INSSRSWIPE/Dashboard/gatedContentThumbnail.jpg","openContent":"/learn/widget?ref_=in_ssr_swipe_su_open&referral=suw_in_r2l_listing_open&courseId=182&moduleId=615","openGtinContent":"/learn/widget?ref_=in_ssr_swipe_su_open_gtin&referral=suw_in_r2l_listing_open_gtin&courseId=168&moduleId=311","openGtinContentThumbnail":"https://m.media-amazon.com/images/G/31/INSSRSWIPE/Dashboard/openGtinContentThumbnail.jpg","openContentThumbnail":"https://m.media-amazon.com/images/G/31/INSSRSWIPE/Dashboard/openContentThumbnail.jpg","gatedContent":"/learn/widget?ref_=in_ssr_swipe_su_gated&referral=suw_in_r2l_listing_gated&courseId=182&moduleId=614"},"validationConfig":{}},"listingStatus":{"renderConfig":{"gatedCategoryPendingStatus":"lms_str_id:sc_in_ssr_swipe_listing_gated_pending_status","brandRegistryApprovedStatus":"lms_str_id:sc_in_ssr_swipe_listing_brandRegistery_approved_status","gatedCategoryDeclinedStatus":"lms_str_id:sc_in_ssr_swipe_listing_gated_declined_status","brandRegistryApprovedStatusAltError":"Approved","brandRegistryPendingStatusAltError":"Under Review","gatedCategoryApplyStatus":"lms_str_id:sc_in_ssr_swipe_listing_gated_apply_status","gatedCategoryApplyStatusAltError":"Apply","brandRegistryPendingStatus":"lms_str_id:sc_in_ssr_swipe_listing_brandRegistery_pending_status","gatedCategoryPendingStatusAltError":"Under Review","brandRegistryDeclinedStatus":"lms_str_id:sc_in_ssr_swipe_listing_brandRegistery_declined_status","brandRegistryDeclinedStatusAltError":"Declined","gatedCategoryDeclinedStatusAltError":"Declined"},"validationConfig":{}},"brandRegistry":{"renderConfig":{"newBrandRegistrySubHeadingAltError":"If your products don\u2019t have a product ID and it is not available on amazon.in, then you need to apply for UPC exemption to add such a product.","productNumAltError":"product added","brandRegistryHeading":"lms_str_id:sc_in_ssr_swipe_listing_brandRegistery_heading","newBrandRegistryButtonAltError":"Apply for UPC Exemption","brandRegistrySubHeading":"lms_str_id:sc_in_ssr_swipe_listing_brandRegistery_sub_heading","brandRegistryButtonAltError":"Apply Now","mobileHeadingAltError":"Products to sell","findUPCXProductsAltError":"How to find it?","desktopHeading":"lms_str_id:scm_r2l_list_fragment_heading","requestApprovalHeadingAltError":"You need to request for approval to list in-","addMoreBrands":"lms_str_id:sc_in_ssr_swipe_listing_brandRegistery_moreBrands","mobileHeading":"lms_str_id:scm_r2l_list_fragment_heading","newBrandRegistryHeading":"lms_str_id:sc_in_ssr_swipe_upcx_products_for_listing","addMoreBrandsAltError":"Add more brands","newBrandRegistryHeadingAltError":"I have products without product ID (GTIN / barcode)","addProductsButtonAltError":"Add Products","requestApprovalHeading":"lms_str_id:scm_r2l_list_fragment_approval_request","findUPCXProducts":"lms_str_id:sc_in_ssr_swipe_find_upcx_products_for_listing","mobileSubHeading":"lms_str_id:scm_r2l_list_fragment_sub_heading","addProductsButton":"lms_str_id:scm_r2l_list_fragment_add_products","brandRegistryButton":"lms_str_id:sc_in_ssr_swipe_listing_brandRegistery_button","mobileSubHeadingAltError":"Add product in any of the following categories-","productsNum":"lms_str_id:sc_in_ssr_swipe_listing_products_num","brandRegistrySubHeadingAltError":"Register your brand with amazon if you are a manufacturer or a brand owner to simplify listing","productNum":"lms_str_id:scm_r2l_list_fragment_product_num","brandRegistryPopover":"lms_str_id:sc_in_ssr_swipe_listing_brandRegistery_popover","brandRegistryPopoverAltError":"Apply for Brand Registry","newBrandRegistryButton":"lms_str_id:sc_in_ssr_swipe_listing_brandRegistery_popover","brandRegistryHeadingAltError":"Brand Registration","newBrandRegistrySubHeading":"lms_str_id:sc_in_ssr_swipe_listing_upcx_products_criterias"},"validationConfig":{}},"listingURL":{"renderConfig":{"editURL":"/sw/in/Launch/step/Seller+Interview?ref=sw_in_listing","listingURLMobile":"/hz/productsearch?ref=sw_in_listing_mobile","gatedCategoriesDefaultURL":"/gp/help/help-page.html?itemID=200333160&wf_src=sw&sw_in_listing&ref_=sw_in_listing","listingURLConsumerApp":"/hz/productsearch?ref=sw_in_listing_consumer_app","brandRegistry":"/gtinx?ref_=SW_Dashboard?referrer=sw&ref_=SW_in_upc","gatedCategoriesURLMap":"{\"gl_beauty\":\"/hz/approvalrequest?gl=gl_beauty&ref_=sw_gated_r2l_beauty\",\"gl_drugstore\":\"/hz/approvalrequest?gl=gl_drugstore&ref_=sw_gated_r2l_drugstore\",\"gl_jewelry\":\"/hz/approvalrequest?gl=gl_jewelry&ref_=sw_gated_r2l_jewelry\",\"gl_shoes\":\"/hz/approvalrequest?gl=gl_shoes&ref_=sw_gated_r2l_shoes\",\"gl_watch\":\"/hz/approvalrequest?gl=gl_watch&ref_=sw_gated_r2l_watch\",\"gl_apparel\":\"/hz/approvalrequest?gl=gl_apparel&ref_=sw_gated_r2l_apparel\",\"gl_grocery\":\"/hz/approvalrequest?gl=gl_grocery&ref_=sw_gated_r2l_grocery\",\"gl_personal_care_appliances\":\"/hz/approvalrequest?gl=gl_drugstore&ref_=sw_gated_r2l_hpc\"}","listingURL":"/hz/productsearch?ref=sw_in_listing","komodoURL":"/omp/home?ref=sw_in_komodo","listingImageURL":"https://images-eu.ssl-images-amazon.com/images/G/31/INSSRSWIPE/listing.png","listingStatusURL":"https://images-eu.ssl-images-amazon.com/images/G/31/INSSRSWIPE/Correct.png"},"validationConfig":{}},"listing":{"renderConfig":{"listingCountAltError":"Listing Count","addCategoriesAltError":"Edit categories","modalBodyOverview":"lms_str_id:sc_in_ssr_swipe_listing_modal_body","categoryErrorMessageAltError":"Something went wrong. Please save categories again.","categoryNameMap":"{\"gl_book\":\"Books\",\"gl_furniture\":\"Furniture\",\"gl_biss\":\"Industrial Supply\",\"gl_baby_product\":\"Baby\",\"gl_camera\":\"Consumer Electronics\",\"gl_electronics\":\"Consumer Electronics\",\"gl_home\":\"Home\",\"gl_music\":\"Music\",\"gl_musical_instruments\":\"Musical Instruments\",\"gl_office_product\":\"Office Products\",\"gl_pc\":\"Personal Computers\",\"gl_software\":\"Software\",\"gl_sports\":\"Sporting Goods\",\"gl_toy\":\"Toys\",\"gl_dvd\":\"Movies\",\"gl_video_games\":\"Video Games\",\"gl_major_appliances\":\"Large Appliances\",\"gl_automotive\":\"Automotive\",\"gl_beauty\":\"Beauty\",\"gl_apparel\":\"Clothing\",\"gl_grocery\":\"Grocery\",\"gl_drugstore\":\"Health\",\"gl_jewelry\":\"Jewellery\",\"gl_luggage\": \"Luggage\",\"gl_shoes\":\"Shoes\",\"gl_watch\":\"Watch\",\"gl_kitchen\":\"Kitchen\",\"gl_personal_care_appliances\":\"Personal care Appliances\",\"gl_pet_products\":\"Pet Supplies\",\"gl_automative\":\"Automotive\",\"gl_wireless\":\"Mobile Phones\",\"gl_sdp_misc\":\"Everything Else\",\"gl_art\":\"Fine Art\",\"gl_gift_card\":\"Gift Card\",\"gl_health_&_personal_care\":\"Health and Personal Care\",\"gl_prescription_eyewear\":\"Sunglasses and Eyewear\",\"gl_home_improvement\":\"Tools and Home Improvement\"}","listingCount":"lms_str_id:sc_in_ssr_swipe_listing_listing_count","listingSubHeading":"lms_str_id:sc_in_ssr_swipe_listing_sub_heading","addProductButtonAltError":"Add a product","listingButtonAltError":"Start Listing","listingOrText":"lms_str_id:sc_in_ssr_swipe_or_text","doneButtonText":"lms_str_id:r2l_list_fragment_done_button","listingUploadURLTextAltError":"upload your excel file","listingProfitCalculatorURL":"lms_str_id:sc_in_ssr_swipe_profitability_calculator_url_for_listing","options":"[{\"title\":\"Books, Movies & Games\",\"categories\":[{\"id\":\"gl_book\",\"text\":\"Books\"},{\"id\":\"gl_dvd\",\"text\":\"Movies\"},{\"id\":\"gl_musical_instruments\",\"text\":\"Musical Instruments\"},{\"id\":\"gl_music\",\"text\":\"Music\"},{\"id\":\"gl_video_games\",\"text\":\"Video Games\"}]},{\"title\":\"Home, Garden & Tools, Furniture\",\"categories\":[{\"id\":\"gl_home\",\"text\":\"Home\"},{\"id\":\"gl_major_appliances\",\"text\":\"Large Appliances\"},{\"id\":\"gl_pet_products\",\"text\":\"Pet Supplies\"},{\"id\":\"gl_kitchen\",\"text\":\"Kitchen\"},{\"id\":\"gl_furniture\",\"text\":\"Furniture\"}]},{\"title\":\"Electronics & Computers\",\"categories\":[{\"id\":\"gl_electronics\",\"text\":\"Consumer Electronics\"},{\"id\":\"gl_wireless\",\"text\":\"Mobile Phones\"},{\"id\":\"gl_pc\",\"text\":\"Personal Computers\"},{\"id\":\"gl_office_product\",\"text\":\"Office Products\"},{\"id\":\"gl_software\",\"text\":\"Software\"}]},{\"title\":\"Clothing, Shoes & Jewelry\",\"categories\":[{\"id\":\"gl_apparel\",\"text\":\"Clothing\"},{\"id\":\"gl_shoes\",\"text\":\"Shoes\"},{\"id\":\"gl_watch\",\"text\":\"Watches\"},{\"id\":\"gl_jewelry\",\"text\":\"Jewelery\"},{\"id\":\"gl_luggage\",\"text\":\"Luggage\"}]},{\"title\":\"Beauty, Health & Groceries\",\"categories\":[{\"id\":\"gl_beauty\",\"text\":\"Beauty\"},{\"id\":\"gl_grocery\",\"text\":\"Grocery\"},{\"id\":\"gl_drugstore\",\"text\":\"Health\"},{\"id\":\"gl_personal_care_appliances\",\"text\":\"Personal Care Appliances\"}]},{\"title\":\"Toys & Baby, Sports\",\"categories\":[{\"id\":\"gl_baby_product\",\"text\":\"Baby\"},{\"id\":\"gl_toy\",\"text\":\"Toys\"},{\"id\":\"gl_sports\",\"text\":\"Sporting Goods\"}]},{\"title\":\"Automotive and Industrial Supply\",\"categories\":[{\"id\":\"gl_automative\",\"text\":\"Automotive\"},{\"id\":\"gl_biss\",\"text\":\"Industrial Supply\"}]},{\"title\":\"Other\",\"categories\":[{\"id\":\"none\",\"text\":\"My Category is not here\"}]}]","addProductButton":"lms_str_id:sc_in_ssr_header_nav_inventory_add_a_product","cancelButtonText":"lms_str_id:r2l_list_fragment_cancel_button","listingSuccessLogo":"https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_green.png","listingSubHeadingAltError":"List the products you wish to sell on Amazon.in","listingWarningLogo":"https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_Gray.png","doneButtonTextAltError":"Done","listingHeading":"lms_str_id:sc_in_ssr_swipe_listing_heading","newListingSubHeading":"lms_str_id:sc_in_ssr_swipe_listing_add_categories","question":"lms_str_id:sc_in_ssr_swipe_interview_heading","addCategories":"lms_str_id:sc_in_ssr_swipe_listing_edit_text","listingHeadingAltError":"1. Create your Amazon listings","listingProfitCalculatorHeading":"lms_str_id:sc_in_ssr_swipe_profitability_calculator_url_heading_for_listing","newListingSubHeadingAltError":"Add product in any of the following categories -","modalBodyOverviewAltError":"Select categories in which you have products to sell","nameCategoryMap":"{\"Automotive\":\"gl_automotive\",\"Baby_Products\":\"gl_baby_product\",\"Beauty\":\"gl_beauty\",\"Books\":\"gl_book\",\"Camera\":\"gl_camera\",\"Apparel\":\"gl_apparel\",\"Computer_and_Accessories\":\"gl_electronics\",\"Consumer_Electronics\":\"gl_electronics\",\"Everything_Else\":\"gl_sdp_misc\",\"Fine_Art\":\"gl_art\",\"Furniture\":\"gl_furniture\",\"Gift_Card\":\"gl_gift_card\",\"Grocery_and_Gourmet\":\"gl_grocery\",\"Handbags\":\"gl_shoes\",\"Health_and_Personal_Care\":\"gl_health_&_personal_care\",\"Home_and_Garden\":\"gl_home\",\"Industrial_and_Scientific\":\"gl_biss\",\"Jewelry\":\"gl_jewelry\",\"Kindle_Accessories\":\"gl_electronics\",\"Kitchen\":\"gl_kitchen\",\"Luggage_and_Travel_Accessories\":\"gl_luggage\",\"Mobile_and_Accessories\":\"gl_wireless\",\"Movies_and_DVD\":\"gl_dvd\",\"Music\":\"gl_music\",\"Musical_Instruments\":\"gl_musical_instruments\",\"Office_Products\":\"gl_office_product\",\"Pet_Products\":\"gl_pet_products\",\"Shoes\":\"gl_shoes\",\"Software_and_Computer_Games\":\"gl_software\",\"Sports_and_Outdoors\":\"gl_sports\",\"Sunglasses_and_Eyewear\":\"gl_prescription_eyewear\",\"Tools_and_Home_Improvement\":\"gl_home_improvement\",\"Toys_and_Games\":\"gl_toy\",\"Video_Games\":\"gl_video_games\",\"Watches\":\"gl_watch\"}","listingUploadURLText":"lms_str_id:sc_in_ssr_swipe_Upload_URL_text","questionAltError":"Choose categories you wish to sell","categoryErrorMessage":"lms_str_id:sc_in_ssr_swipe_category_error_message","newAddCategories":"lms_str_id:sc_in_ssr_swipe_listing_add_remove_text","listingButton":"lms_str_id:sc_in_ssr_swipe_listing_button","cancelButtonTextAltError":"Cancel","weblabTreatment":"T1","newAddCategoriesAltError":"Add / Remove Categories","listingOrTextAltError":"OR"},"validationConfig":{}},"gatedCategory":{"renderConfig":{"gatedCategoryPopoverAltError":"These categories require approval","gatedCategoryPopover":"lms_str_id:sc_in_ssr_swipe_listing_gated_categories_popover","gatedCategoryProcessing":"lms_str_id:sc_in_ssr_swipe_listing_gated_categories_apply_message","gatedCategoryDeclinedAltError":"Re-Apply","gatedCategoryErrorAltError":"Add Some Listings Before Launch","gatedCategoryDeclined":"lms_str_id:sc_in_ssr_swipe_listing_gated_categories_reapply","openCategoryHeadingAltError":"Start Selling in these categories","gatedCategoryProcessingAltError":"Processing might take 24-48 hours","gatedCategoryHeadingAltError":"Categories require approval","openCategoryHeading":"lms_str_id:sc_in_ssr_swipe_listing_open_categories","gatedCategoryHeading":"lms_str_id:sc_in_ssr_swipe_listing_gated_categories","gatedCategoryError":"lms_str_id:sc_in_ssr_swipe_listing_error"},"validationConfig":{}}},"sellersInfoKey":[],"categories":["gl_book"],"listingData":{"gatedCategories":{},"mcmsCase":[],"listingCount":0,"hasListing":false,"selectedCategories":["gl_book"],"openCategoryListFromOLS":["gl_tools","gl_biss","gl_lawn_and_garden","gl_apparel","gl_automotive","gl_baby_product","gl_beauty","gl_book","gl_camera","gl_digital_accessories","gl_digital_accessories_2","gl_digital_text_2","gl_drugstore","gl_dvd","gl_electronics","gl_furniture","gl_home","gl_home_entertainment","gl_home_improvement","gl_jewelry","gl_kitchen","gl_luggage","gl_musical_instruments","gl_office_product","gl_pc","gl_personal_care_appliances","gl_pet_products","gl_shoes","gl_software","gl_sports","gl_toy","gl_video","gl_video_game_hardware","gl_video_games","gl_wireless","gl_wireless_accessory"],"brandDetailList":[],"openCategory":["gl_book"]}}});
            </script>
            <div class="a-section a-spacing-base a-spacing-top-base">
                






<div data-ng-controller="listing-fragment-controller" data-ng-init="init('Listing_BC_67635828-f378-41af-bc81-b6c1b3b8b032')" class="a-section listing-fragment ng-scope">
    
        
        
            




<div data-ng-class="{'listing-box-error': showErrorMessage === true}" aria-live="polite" class="a-row a-expander-container a-spacing-mini a-spacing-top-small a-expander-section-container a-section-expander-container">
    <a id="listing-custom-expander" href="javascript:void(0)" data-action="a-expander-toggle" class="a-expander-header a-declarative a-expander-section-header a-link-section-expander a-size-medium" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;&quot;, &quot;collapse_prompt&quot;:&quot;&quot;}"><i class="a-icon a-icon-section-collapse"></i><span class="a-expander-prompt">
        <img alt="" src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_green.png" data-ng-show="listingStatus" data-ng-src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_green.png" class="fragment-logo ng-hide">
        <img alt="" src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_Gray.png" data-ng-hide="listingStatus" data-ng-src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_Gray.png" class="fragment-logo">
        <span class="a-size-base-plus fragment-heading a-text-bold ng-binding">
                Products to sell
        </span>
    </span></a>
    <div id="listing-custom-expander-content" aria-expanded="true" class="a-expander-content a-expander-inline-content a-expander-inner" style="overflow: hidden; display: block;">
        



<div class="a-box listing-box listing-category"><div class="a-box-inner a-padding-none">
    <div class="a-section a-spacing-mini a-spacing-top-small listing-container">
        <div class="a-section listing-margin-bottom">
            <div class="a-section a-spacing-none listing-heading">
                <div data-ng-show="listingStatus" class="a-section listing-align-left listing-margin-top ng-hide">
                    <i class="a-icon a-icon-success listing-success-icon"></i>
                    <span class="a-size-medium a-text-normal ng-binding">
                        0
                        <span data-ng-hide="productNumStatus" class="ng-binding"> product added </span>
                        <span data-ng-hide="!productNumStatus" class="ng-binding ng-hide"> products added </span>
                    </span>
                </div>
            </div>
            <span class="ng-binding">
                List the products you wish to sell on Amazon.in
            </span>
            <hr class="a-spacing-top-small a-divider-normal listing-divider">
            <div class="a-section a-spacing-top-base listing-margin-bottom">
                <span class="a-size-base-plus a-text-bold ng-binding">
                    Start selling in these categories:
                </span>
            </div>
        </div>
        <div class="a-section a-spacing-mini listing-overflow">
            <div class="a-section a-spacing-none">
                <!-- ngIf: openCategoryValuesWithJoin !== '' --><span data-ng-if="openCategoryValuesWithJoin !== ''" class="a-size-base-plus a-color-tertiary listing-open-category-list listing-truncate ng-scope ng-binding">
                    Books
                </span><!-- end ngIf: openCategoryValuesWithJoin !== '' -->
            </div>
            <div class="a-section a-spacing-none listing-overflow">
                <span data-ng-show="listingStatus" class="a-size-base a-color-success listing-count ng-binding ng-hide">
                    Listing Count
                </span>
                <span class="a-letter-space"></span>
                <span data-ng-show="listingStatus" class="a-size-base listing-count a-text-normal ng-binding ng-hide">
                    0
                </span>
                <a data-ng-href="/hz/productsearch?ref=sw_in_listing" class="a-link-normal listing-align-right" target="_blank" rel="noopener" href="/hz/productsearch?ref=sw_in_listing">
                    <span class="a-button a-spacing-none a-button-primary" id="a-autoid-3"><span class="a-button-inner"><input class="a-button-input" type="submit" aria-labelledby="a-autoid-3-announce"><span class="a-button-text a-text-center ng-binding" aria-hidden="true" id="a-autoid-3-announce">
                        Start Listing
                    </span></span></span>
                </a>
            </div>
            
                <!-- ngIf: productFileCheck() -->
            
        </div>

        
        

<!-- ngIf: showSuHelper --><div id="su-listing-helper" data-ng-if="showSuHelper" class="a-section ng-scope">

    <p class="a-size-base-plus a-text-bold ng-binding">
        Learn how to list your products
    </p>

    
    <a data-ng-click="openLightBox()" class="a-link-normal" href="#su-content">
        <img alt="" src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Dashboard/openContentThumbnail.jpg" data-ng-src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Dashboard/openContentThumbnail.jpg" class="su-listing-video-thumb">
    </a>

    
    <a id="su-content" data-ng-click="closeLightBox()" class="a-link-normal su-listing-lightbox" href="#">
        <iframe frameborder="0" scrolling="no" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" ng-src="/learn/widget?ref_=in_ssr_swipe_su_open&amp;referral=suw_in_r2l_listing_open&amp;courseId=182&amp;moduleId=615" src="/learn/widget?ref_=in_ssr_swipe_su_open&amp;referral=suw_in_r2l_listing_open&amp;courseId=182&amp;moduleId=615">
        </iframe>
    </a>

</div><!-- end ngIf: showSuHelper -->


        <hr class="a-spacing-none a-divider-normal listing-divider">
    </div>
</div></div>
        


<div data-ng-show="showGatedCategory" class="a-box listing-box ng-hide"><div class="a-box-inner a-padding-none">
    <div class="a-section a-spacing-mini listing-container">
        <div class="a-section a-spacing-none">
            <span class="a-size-base-plus a-text-bold ng-binding">
                Categories listed below require approval
            </span>
            <span class="a-declarative" data-action="a-popover" data-a-popover="{}">
                <a id="gatedCategoryPopoverTrigger" href="javascript:void(0)" class="a-popover-trigger a-declarative listing-popover">
                <i class="a-icon a-icon-popover"></i></a>
            </span>
        </div>
        <!-- ngRepeat: gatedCategory in gatedCategoryList -->
        <hr class="a-spacing-small a-divider-normal">
    </div>
</div></div>

<!-- ngIf: !shouldSkipSellerInterview --><div data-ng-if="!shouldSkipSellerInterview" class="a-section a-spacing-small listing-container ng-scope">
    <a data-ng-href="/sw/in/Launch/step/Seller+Interview?ref=sw_in_listing" class="a-size-base-plus a-link-normal ng-binding" href="/sw/in/Launch/step/Seller+Interview?ref=sw_in_listing">
        Edit categories
    </a>
</div><!-- end ngIf: !shouldSkipSellerInterview -->
        <!-- ngIf: shouldSkipSellerInterview -->
        

<!-- ngIf: !shouldSkipSellerInterview --><div data-ng-if="!shouldSkipSellerInterview" data-ng-show="showBrands" class="a-box listing-box ng-scope ng-hide"><div class="a-box-inner a-padding-none">
    <div class="a-section a-spacing-none listing-container">
        <hr class="a-divider-normal listing-divider">
        <div data-ng-show="showBrandInitialView" class="a-section a-spacing-none">
            <span class="a-size-base-plus a-text-bold ng-binding">
                UPC Exemption
            </span>
            <span class="" data-action="" data-a-popover="" id="upcx-popover">
                
            <span id="brandRegistryJITATrigger" class="a-color-link jita-trigger jita-text-normal">What's this?<span class="arrow-down a-color-link jita-trigger"></span></span></span>
            <div class="a-section a-spacing-mini a-spacing-top-mini listing-overflow">
                <span class="a-size-base listing-inline-block ng-binding">
                    If your products do not have a standard ID such as a barcode, UPC, EAN, or ISBN, apply for UPC exemption
                </span>
                <a class="a-link-normal" target="_blank" rel="noopener" href="/gtinx?ref_=SW_Dashboard?referrer=sw&amp;ref_=SW_in_upc">
                    <span class="a-button a-spacing-none a-spacing-top-small listing-align-right" id="a-autoid-6"><span class="a-button-inner"><input class="a-button-input" type="submit" aria-labelledby="a-autoid-6-announce"><span class="a-button-text a-text-center ng-binding" aria-hidden="true" id="a-autoid-6-announce">
                        Apply Now
                    </span></span></span>
                </a>
            </div>
        </div>
        <div data-ng-hide="showBrandInitialView" class="a-section a-spacing-small ng-hide">
            <span class="a-size-base-plus a-text-bold ng-binding">
                UPC Exemption
            </span>
            <span class="a-declarative" data-action="a-popover" data-a-popover="{}">
                <a id="brandPopoverTrigger" href="javascript:void(0)" class="a-popover-trigger a-declarative listing-popover">
                <i class="a-icon a-icon-popover"></i></a>
            </span>
            <!-- ngRepeat: brand in brandDetailList -->
        </div>
    </div>
</div></div><!-- end ngIf: !shouldSkipSellerInterview -->

<!-- ngIf: shouldSkipSellerInterview -->





        <div data-ng-show="showProfitCalculator" class="a-section a-spacing-small listing-container">
           <hr class="a-spacing-top-small a-divider-normal listing-divider">
           <a class="a-size-base-plus a-link-normal ng-binding" target="_blank" rel="noopener" href="https://services.amazon.in/landing/pricing-calculator.html?ref_=profit_url_listing&amp;ld=ASINSOADirect">
                Learn more about Amazon's charges
           </a>
        </div>

        <div class="a-section a-spacing-base">
           <a data-ng-href="/gtinx?ref_=SW_Dashboard?referrer=sw&amp;ref_=SW_in_upc" data-ng-show="!showBrandInitialView &amp;&amp; showBrands" class="a-size-base-plus a-link-normal listing-container ng-binding ng-hide" target="_blank" rel="noopener" href="/gtinx?ref_=SW_Dashboard?referrer=sw&amp;ref_=SW_in_upc">
               Add more brands
           </a>
        </div>

        <div class="a-section a-spacing-none">
           <div data-ng-show="showErrorMessage" class="a-box a-alert-inline a-alert-inline-error listing-container listing-error ng-hide" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content ng-binding">
               Add some listings before launch
           </div></div></div>
        </div>
    </div>
</div>
        
    
</div>

            </div>
        
            
            
            
            <script>
                registerFragment("Shipping_Rate_BC_67635828-f378-41af-bc81-b6c1b3b8b032", {"responseData":{"shippingStatus":false,"shippingConfig":{"shipping":{"renderConfig":{"mfnExpeditedText":"1-3 days delivery","mobileLinkEasyship":"set shipping charges.","mobileHeadingAltError":"Shipping Fee details","shippingRateDetailsAltError":"Set your shipping rates","shippingSettingsURL":"/sbr#easy_ship_template","mobileDetail":"Your buyers will be charged the default shipping rates.","acknowledgeButtonAltError":"Got It","localText":"Local","localDefinition":"Local rates will be applicable when the pickup and delivery happens in the same city, that is, intra-city pickup and delivery.","tables":"[{\"title\": \"For standard size items\",\"detail\": \"(Items weighing less than 5 kgs)\",\"column1\": \"First 500 gm\",\"column1Detail\": \"(Fixed minimum)\",\"column2\": \"Each additional 500 gm\",\"rows\": [{\"column1\": \"Local\",\"column2\": \"Rs 27\",\"column3\": \"Rs 16\"}, {\"column1\": \"Regional\",\"column2\": \"Rs 45\",\"column3\": \"Rs 21\"}, {\"column1\": \"National\",\"column2\": \"Rs 65\",\"column3\": \"Rs 26\"}]}, {\"title\": \"For oversize items\",\"detail\": \"(Items weighing 5 kgs or more)\",\"column1\": \"First 5 Kg\",\"column1Detail\": \"(Fixed minimum)\",\"column2\": \"Each additional kg\",\"rows\": [{\"column1\": \"Local\",\"column2\": \"Rs 124\",\"column3\": \"Rs 7\"}, {\"column1\": \"Regional\",\"column2\": \"Rs 168\",\"column3\": \"Rs 9\"}, {\"column1\": \"National\",\"column2\": \"Rs 213\",\"column3\": \"Rs 14\"}]}, {\"title\": \"For oversize heavy and bulky items\",\"column1\": \"First 12 Kg\",\"column1Detail\": \"(Fixed minimum)\",\"column2\": \"Each additional kg\",\"rows\": [{\"column1\": \"Local\",\"column2\": \"Rs 175\",\"column3\": \"Rs 3.5\"}, {\"column1\": \"Regional\",\"column2\": \"Rs 255\",\"column3\": \"Rs 4.5\"}]}]","shippingSuccessLogo":"https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_green.png","regionalDefinition":"Regional zone consists of four regions. If pickup and delivery both happens within the same region then regional rates will be applicable.","shippingWarningLogo":"https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_Gray.png","popoverTitle":"Easy Ship Fees","mobileHeadingR2LAltError":"Set shipping rates","feesNoteExcludeGST":"Fees shown above exclude GST.","mobileEasyShipDetail":"Easy Ship charges \u20b927 for local, \u20b945 for regional and \u20b965 for national shipping for standard size items less than 500 gms.","invalidAmountError":"Please enter a valid amount","mobileLink":"View and modify shipping rates.","shippingRateDetails":"You can use the Shipping Settings feature to update  the shipping rates and the service levels for each region.","setButtonTextAltError":"Set rates","errorMessageAltError":"Set the shiping rates","freeShipText":"Offer free Shipping","popoverContentAltError":"Set the shipping rates you want to offer to the customers","perOrderText":"per order","mobileDetailEasyship":"You will be charged shipping fee for products delivered by EasyShip. If you want to charge your buyers for shipping,","setButtonText":"Set rates","shippingLogo":"https://images-na.ssl-images-amazon.com/images/G/31/amazonservices/sellercentral/shipping-rate-logo.png","mobileLinkEasyshipAltError":"set shipping charges.","feesNoteincludeGST":"18% GST will be applicable to all the fees displayed above.","regionalText":"Regional","mobileHeading":"Shipping Fee details","headingAltError":"2. Set shipping rates","customFeeText":"Set custom fee","saveButton":"Save","popoverContent":"Set the shipping rates you want to offer to the customers","mobileDetailEasyshipAltError":"You will be charged shipping fee for products delivered by EasyShip. If you want to charge your buyers for shipping,","infoText":"Set more detailed shipping fee on sellercentral.amazon.in","popoverLinkText":"Learn more","heading":"2. Set shipping rates","oversizeHeavyTableNote":"National shipping is not available for oversize heavy and bulky items.","nationalDefinition":"If pick-up and delivery address are in different regions then national rates will be applicable.","rupeeSymbol":"\u20b9","errorMessage":"Set the shipping rates","mobileLinkAltError":"View and modify shipping rates.","headingR2L":"Shipping Fee Details","backendFailureError":"There was an error while processing your request. Please try again after some time","shippingRateInfo":"","mfnStandardText":"3+ days delivery","nationalText":"National","shippingRateInfoAltError":"Set shipping rates","mobileDetailAltError":"Your buyers will be charged the default shipping rates.","mobileDetailText":"Set shipping fee you want to charge your customers","freeShipTextDetail":"Free shipping will be highlighted on your offer","acknowledgeButton":"Got it"},"validationConfig":{"regEx":"^\\d+(\\.\\d+)?$"}},"shippingProfitCalculator":{"renderConfig":{"weblabTreatment":"T1","shippingProfitCalculatorHeading":"Learn more about Amazon's shipping charges","shippingProfitCalculatorURL":"https://services.amazon.in/landing/pricing-calculator.html?ref_=profit_url_shipping"},"validationConfig":{}}},"shippingWidgetDesktopWeblabTreatment":true,"isEasyShipSeller":true,"shippingStrings":{"mfnExpeditedText":"1-3 days delivery","mobileLinkEasyship":"set shipping charges.","mobileHeadingAltError":"Shipping Fee details","shippingRateDetailsAltError":"Set your shipping rates","shippingSettingsURL":"/sbr#easy_ship_template","shippingProfitCalculatorHeading":"Learn more about Amazon's shipping charges","mobileDetail":"Your buyers will be charged the default shipping rates.","acknowledgeButtonAltError":"Got It","localText":"Local","localDefinition":"Local rates will be applicable when the pickup and delivery happens in the same city, that is, intra-city pickup and delivery.","tables":"[{\"title\": \"For standard size items\",\"detail\": \"(Items weighing less than 5 kgs)\",\"column1\": \"First 500 gm\",\"column1Detail\": \"(Fixed minimum)\",\"column2\": \"Each additional 500 gm\",\"rows\": [{\"column1\": \"Local\",\"column2\": \"Rs 27\",\"column3\": \"Rs 16\"}, {\"column1\": \"Regional\",\"column2\": \"Rs 45\",\"column3\": \"Rs 21\"}, {\"column1\": \"National\",\"column2\": \"Rs 65\",\"column3\": \"Rs 26\"}]}, {\"title\": \"For oversize items\",\"detail\": \"(Items weighing 5 kgs or more)\",\"column1\": \"First 5 Kg\",\"column1Detail\": \"(Fixed minimum)\",\"column2\": \"Each additional kg\",\"rows\": [{\"column1\": \"Local\",\"column2\": \"Rs 124\",\"column3\": \"Rs 7\"}, {\"column1\": \"Regional\",\"column2\": \"Rs 168\",\"column3\": \"Rs 9\"}, {\"column1\": \"National\",\"column2\": \"Rs 213\",\"column3\": \"Rs 14\"}]}, {\"title\": \"For oversize heavy and bulky items\",\"column1\": \"First 12 Kg\",\"column1Detail\": \"(Fixed minimum)\",\"column2\": \"Each additional kg\",\"rows\": [{\"column1\": \"Local\",\"column2\": \"Rs 175\",\"column3\": \"Rs 3.5\"}, {\"column1\": \"Regional\",\"column2\": \"Rs 255\",\"column3\": \"Rs 4.5\"}]}]","shippingSuccessLogo":"https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_green.png","regionalDefinition":"Regional zone consists of four regions. If pickup and delivery both happens within the same region then regional rates will be applicable.","shippingWarningLogo":"https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_Gray.png","popoverTitle":"Easy Ship Fees","deviceType":"BROWSER","mobileHeadingR2LAltError":"Set shipping rates","feesNoteExcludeGST":"Fees shown above exclude GST.","mobileEasyShipDetail":"Easy Ship charges \u20b927 for local, \u20b945 for regional and \u20b965 for national shipping for standard size items less than 500 gms.","invalidAmountError":"Please enter a valid amount","mobileLink":"View and modify shipping rates.","shippingRateDetails":"You can use the Shipping Settings feature to update  the shipping rates and the service levels for each region.","setButtonTextAltError":"Set rates","errorMessageAltError":"Set the shiping rates","freeShipText":"Offer free Shipping","weblabTreatment":"T1","popoverContentAltError":"Set the shipping rates you want to offer to the customers","perOrderText":"per order","mobileDetailEasyship":"You will be charged shipping fee for products delivered by EasyShip. If you want to charge your buyers for shipping,","setButtonText":"Set rates","shippingLogo":"https://images-na.ssl-images-amazon.com/images/G/31/amazonservices/sellercentral/shipping-rate-logo.png","shippingProfitCalculatorURL":"https://services.amazon.in/landing/pricing-calculator.html?ref_=profit_url_shipping","mobileLinkEasyshipAltError":"set shipping charges.","feesNoteincludeGST":"18% GST will be applicable to all the fees displayed above.","regionalText":"Regional","mobileHeading":"Shipping Fee details","headingAltError":"2. Set shipping rates","customFeeText":"Set custom fee","saveButton":"Save","popoverContent":"Set the shipping rates you want to offer to the customers","mobileDetailEasyshipAltError":"You will be charged shipping fee for products delivered by EasyShip. If you want to charge your buyers for shipping,","infoText":"Set more detailed shipping fee on sellercentral.amazon.in","regionalValue":"0.0","nationalValue":"0.0","popoverLinkText":"Learn more","heading":"2. Set shipping rates","oversizeHeavyTableNote":"National shipping is not available for oversize heavy and bulky items.","nationalDefinition":"If pick-up and delivery address are in different regions then national rates will be applicable.","rupeeSymbol":"\u20b9","errorMessage":"Set the shipping rates","mobileLinkAltError":"View and modify shipping rates.","localValue":"0.0","headingR2L":"Shipping Fee Details","backendFailureError":"There was an error while processing your request. Please try again after some time","shippingRateInfo":"","mfnStandardText":"3+ days delivery","nationalText":"National","shippingRateInfoAltError":"Set shipping rates","mobileDetailAltError":"Your buyers will be charged the default shipping rates.","mobileDetailText":"Set shipping fee you want to charge your customers","freeShipTextDetail":"Free shipping will be highlighted on your offer","acknowledgeButton":"Got it"}}});
            </script>
            <div class="a-section a-spacing-base a-spacing-top-base">
                





<div data-ng-controller="shipping-rate-fragment-controller" data-ng-init="init('Shipping_Rate_BC_67635828-f378-41af-bc81-b6c1b3b8b032')" class="a-section ng-scope">
    
            
            
                





<div class="a-section shipping-rate-fragment">
    <!-- ngIf: !shippingWidgetDesktopWeblabTreatment -->
    <!-- ngIf: shippingWidgetDesktopWeblabTreatment --><div data-ng-class="isShippingCompleted ? '' : 'shipping-rate-app-error'" data-ng-if="shippingWidgetDesktopWeblabTreatment" aria-live="polite" data-a-expander-name="shipping-fragment-expander-name-desktop" class="a-row a-expander-container a-spacing-mini a-spacing-top-small a-expander-section-container a-section-expander-container ng-scope">
            <a id="shipping-fragment-expander" href="javascript:void(0)" data-action="a-expander-toggle" class="a-expander-header a-declarative a-expander-section-header a-link-section-expander a-size-medium" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;&quot;, &quot;collapse_prompt&quot;:&quot;&quot;}"><i class="a-icon a-icon-section-collapse"></i><span class="a-expander-prompt">
                <img alt="" src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_green.png" data-ng-show="shippingStatus" data-ng-src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_green.png" class="fragment-logo ng-hide">
                <img alt="" src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_Gray.png" data-ng-hide="shippingStatus" data-ng-src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_Gray.png" class="fragment-logo">
                <span class="a-size-base-plus fragment-heading a-text-bold ng-binding">
                    Shipping Fee Details
                </span>
            </span></a>
            <div aria-expanded="true" class="a-expander-content expander-shipping a-expander-inline-content a-expander-inner a-expander-content-expanded" style="overflow: hidden;">
                <div data-ng-show="shippingStatus" class="a-section a-spacing-mini ng-hide">
                    <div class="a-section a-spacing-mini shipping-rate-container">
                        <p class="a-spacing-mini a-size-small a-color-tertiary shipping-rate-info ng-binding">
                            
                        </p>
                        <div class="a-section a-padding-mini set-button-container">
                            <span class="a-size-base-plus">
                                To edit the shipping rates, visit the Shipping Settings page.
                            </span>
                            <a data-ng-href="/sbr#easy_ship_template" class="a-link-normal" target="_blank" rel="noopener" href="/sbr#easy_ship_template">
                                <span class="a-button a-spacing-none set-rates-button" id="a-autoid-9"><span class="a-button-inner"><input class="a-button-input" type="submit" aria-labelledby="a-autoid-9-announce"><span class="a-button-text a-text-center" aria-hidden="true" id="a-autoid-9-announce">
                                    Edit
                                </span></span></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div data-ng-hide="shippingStatus" class="a-section">
                    <!-- ngIf: isEasyShipSeller --><div data-ng-if="isEasyShipSeller" class="a-row mobile-text-detail ng-scope">
                        <span class="ng-binding">
                            Easy Ship charges ₹27 for local, ₹45 for regional and ₹65 for national shipping for standard size items less than 500 gms.
                        </span>
                    </div><!-- end ngIf: isEasyShipSeller -->

                    <div data-ng-show="isEasyShipSeller &amp;&amp; showProfitCalculator" class="a-row profit-calculator">
                        <a data-ng-href="https://services.amazon.in/landing/pricing-calculator.html?ref_=profit_url_shipping" class="a-link-normal" target="_blank" rel="noopener" href="https://services.amazon.in/landing/pricing-calculator.html?ref_=profit_url_shipping&amp;ld=ASINSOADirect">
                            <span class="a-size-base ng-binding">
                                Learn more about Amazon's shipping charges
                            </span>
                        </a>
                    </div>

                    <div class="a-row mobile-text-detail">
                        <span class="a-text-bold ng-binding">
                            Set shipping fee you want to charge your customers
                        </span>
                    </div>
                    <div data-ng-show="!isEasyShipSeller &amp;&amp; showProfitCalculator" class="a-row profit-calculator ng-hide">
                        <a data-ng-href="https://services.amazon.in/landing/pricing-calculator.html?ref_=profit_url_shipping" class="a-link-normal" target="_blank" rel="noopener" href="https://services.amazon.in/landing/pricing-calculator.html?ref_=profit_url_shipping&amp;ld=ASINSOADirect">
                            <span class="a-size-base ng-binding">
                                Learn more about Amazon's shipping charges
                            </span>
                        </a>
                    </div>

                    <div id="shipSection" class="a-box box-form"><div class="a-box-inner">

                        <div class="a-row radio-option">
                            <div class="a-row">
                                <div class="a-radio a-radio-fancy ng-scope"><label><input type="radio" name="fee_radio" value="noFee" data-a-input-name="fee_radio" data-ng-model="radioButtonData.option" class="ng-pristine ng-valid"><i class="a-icon a-icon-radio"></i><span class="a-label a-radio-label">
                                    <div class="a-row multi-line ng-binding">
                                        Offer free Shipping
                                    </div>
                                    <div class="a-row a-size-small a-color-secondary multi-line ng-binding">
                                        Free shipping will be highlighted on your offer
                                    </div>
                                </span></label></div>
                            </div>
                            <div class="a-row divider-first">
                                <hr class="a-divider-normal">
                            </div>
                            <div class="a-row">
                                <div class="a-radio a-radio-fancy ng-scope"><label><input type="radio" name="fee_radio" value="customFee" data-a-input-name="fee_radio" data-ng-model="radioButtonData.option" class="ng-pristine ng-valid"><i class="a-icon a-icon-radio"></i><span class="a-label a-radio-label ng-binding">
                                    Set custom fee
                                </span></label></div>
                            </div>
                        </div>

                        <div data-ng-show="radioButtonData.option == 'customFee'" class="a-row ng-hide">
                            <hr class="a-divider-normal divider">
                        </div>

                        <div id="textForRateForm" class="a-row form-text">
                            <!-- ngRepeat: label in formLabelsList --><span id="ship-rate-form-text" data-ng-repeat="label in formLabelsList" data-ng-show="radioButtonData.option == 'customFee'" class="ng-scope ng-hide">
                                <div id="LocalTextForFormRate" class="a-column form-text-unit a-span4">
                                    <span class="a-text-bold ng-binding">
                                        Local
                                    </span>
                                </div>
                            </span><!-- end ngRepeat: label in formLabelsList --><span id="ship-rate-form-text" data-ng-repeat="label in formLabelsList" data-ng-show="radioButtonData.option == 'customFee'" class="ng-scope ng-hide">
                                <div id="RegionalTextForFormRate" class="a-column form-text-unit a-span4">
                                    <span class="a-text-bold ng-binding">
                                        Regional
                                    </span>
                                </div>
                            </span><!-- end ngRepeat: label in formLabelsList --><span id="ship-rate-form-text" data-ng-repeat="label in formLabelsList" data-ng-show="radioButtonData.option == 'customFee'" class="ng-scope ng-hide">
                                <div id="NationalTextForFormRate" class="a-column form-text-unit a-span4">
                                    <span class="a-text-bold ng-binding">
                                        National
                                    </span>
                                </div>
                            </span><!-- end ngRepeat: label in formLabelsList -->
                        </div>

                        <div id="rateForm" class="a-row">
                            <!-- ngRepeat: label in formLabelsList --><span id="ship-rate-form" data-ng-repeat="label in formLabelsList" data-ng-show="radioButtonData.option == 'customFee'" class="ng-scope ng-hide">
                                <div id="LocalFormRate" class="a-column form-text-unit a-span4">
                                    <div id="LocalBox" class="a-box box-input-form"><div class="a-box-inner">
                                        <div class="text-form ng-binding">
                                            ₹
                                        </div>
                                        <div class="text-input-form">
                                            <input type="text" value="0.0" id="LocalTextField" autocomplete="off" class="a-input-text text-input-box">
                                        </div>
                                    </div></div>
                                </div>
                            </span><!-- end ngRepeat: label in formLabelsList --><span id="ship-rate-form" data-ng-repeat="label in formLabelsList" data-ng-show="radioButtonData.option == 'customFee'" class="ng-scope ng-hide">
                                <div id="RegionalFormRate" class="a-column form-text-unit a-span4">
                                    <div id="RegionalBox" class="a-box box-input-form"><div class="a-box-inner">
                                        <div class="text-form ng-binding">
                                            ₹
                                        </div>
                                        <div class="text-input-form">
                                            <input type="text" value="0.0" id="RegionalTextField" autocomplete="off" class="a-input-text text-input-box">
                                        </div>
                                    </div></div>
                                </div>
                            </span><!-- end ngRepeat: label in formLabelsList --><span id="ship-rate-form" data-ng-repeat="label in formLabelsList" data-ng-show="radioButtonData.option == 'customFee'" class="ng-scope ng-hide">
                                <div id="NationalFormRate" class="a-column form-text-unit a-span4">
                                    <div id="NationalBox" class="a-box box-input-form"><div class="a-box-inner">
                                        <div class="text-form ng-binding">
                                            ₹
                                        </div>
                                        <div class="text-input-form">
                                            <input type="text" value="0.0" id="NationalTextField" autocomplete="off" class="a-input-text text-input-box">
                                        </div>
                                    </div></div>
                                </div>
                            </span><!-- end ngRepeat: label in formLabelsList -->
                        </div>

                        <div id="rateFormUnit" class="a-row form-text">
                            <!-- ngRepeat: label in formLabelsList --><span id="ship-rate-form-unit" data-ng-repeat="label in formLabelsList" data-ng-show="radioButtonData.option == 'customFee'" class="ng-scope ng-hide">
                                <div id="LocalUnitForFormRate" class="a-column form-text-unit a-span4">
                                    <span class="a-size-small a-color-secondary a-text-italic ng-binding">
                                        per order
                                    </span>
                                </div>
                            </span><!-- end ngRepeat: label in formLabelsList --><span id="ship-rate-form-unit" data-ng-repeat="label in formLabelsList" data-ng-show="radioButtonData.option == 'customFee'" class="ng-scope ng-hide">
                                <div id="RegionalUnitForFormRate" class="a-column form-text-unit a-span4">
                                    <span class="a-size-small a-color-secondary a-text-italic ng-binding">
                                        per order
                                    </span>
                                </div>
                            </span><!-- end ngRepeat: label in formLabelsList --><span id="ship-rate-form-unit" data-ng-repeat="label in formLabelsList" data-ng-show="radioButtonData.option == 'customFee'" class="ng-scope ng-hide">
                                <div id="NationalUnitForFormRate" class="a-column form-text-unit a-span4">
                                    <span class="a-size-small a-color-secondary a-text-italic ng-binding">
                                        per order
                                    </span>
                                </div>
                            </span><!-- end ngRepeat: label in formLabelsList -->
                        </div>

                    </div></div>

                    <div class="a-row desktop-text-detail">
                        <span class="a-button a-button-primary shipping-rate-save-button-desktop" id="a-autoid-10"><span class="a-button-inner"><input data-ng-click="saveMobile()" class="a-button-input" type="submit" aria-labelledby="a-autoid-10-announce"><span class="a-button-text ng-binding" aria-hidden="true" id="a-autoid-10-announce">
                            Save
                        </span></span></span>
                    </div>

                    <div class="a-row desktop-text-detail">
                        <span class="a-size-base-plus a-color-tertiary">
                            For Advanced Shipping options, please <a id="redirectLink" href="/sbr#easy_ship_template" target="_blank">click here</a>
                        </span>
                     </div>
                    <div data-ng-hide="hideError" class="a-box a-alert-inline a-alert-inline-error shipping-rate-error ng-hide" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content ng-binding">
                        
                    </div></div></div>
                </div>
            </div>
    </div><!-- end ngIf: shippingWidgetDesktopWeblabTreatment -->
</div>
            
    
</div>

            </div>
        
            
            
            
            <script>
                registerFragment("Bank_Account_BC_67635828-f378-41af-bc81-b6c1b3b8b0328", {"responseData":{"isSpooferCheck":false,"bankName":{"renderConfig":{"visibility":"true","label":"Bank Name"},"validationConfig":{}},"walletCountryCodeToAMSCountryCodeMap":{"renderConfig":{"IN":"IN","IND":"IN"},"validationConfig":{}},"accountHolderName":{"renderConfig":{"visibility":"true","label":"Account holder name"},"validationConfig":{}},"bankCountry":{"renderConfig":{"shouldGetCountryListFromMaps":"false"},"validationConfig":{}},"countryCodeToBankAccountTypeMap":{"renderConfig":{"IN":"BBAN","IND":"BBAN"},"validationConfig":{}},"bankCountryOptions":{"renderConfig":{"IN":"country-name-IN_18191$India"},"validationConfig":{}},"defaultBankCountryCode":"IN","ivsParams":{"renderConfig":{"verificationLevel":"None","verificationType":"BankAccount"},"validationConfig":{}},"walletBankAccountType":{"renderConfig":{"value":"BASIC_BANK_ACCOUNT"},"validationConfig":{}},"ifscCode":{"renderConfig":{"visibility":"true","invalidErrorMessage":"Invalid IFSC Code.","label":"IFSC code"},"validationConfig":{"regex":"^[a-z|A-Z|0-9]{11}$"}},"ivsEncMarketplaceIdToBankAccountTypeMap":{"renderConfig":{"A2XZLSVIQ0F4JT":"DIN","A21TJRUUN4KGV":"DIN"},"validationConfig":{}},"accountNumberReEnter":{"renderConfig":{"visibility":"true","label":"Re-enter Account number"},"validationConfig":{}},"paymentInstrumentTypeToPaymentInstrumentTypeIDMap":{"renderConfig":{"RegisteredBasicBankAccount":"BankAccount"},"validationConfig":{}},"encMarketplaceId":"A21TJRUUN4KGV","encAccountId":"ARRVIVKKFPG17","bankAccountTypeSubmittable":{"renderConfig":{"BBAN":"true"},"validationConfig":{}},"IN":{"ACCOUNT_TYPE_OPTIONS":{"renderConfig":{"SAVINGS":"Savings Account","BUSINESS":"Overdraft Account","CHECKING":"Current Account"},"validationConfig":{}},"ACCOUNT_TYPE":{"renderConfig":{"visibility":"true","defaultValue":"--Select Your Account Type--","label":"Account Type"},"validationConfig":{}},"ACCOUNT_NUMBER_RE_ENTER":{"renderConfig":{"visibility":"true","mismatchErrorMessage":"Account numbers do not match","label":"Re-enter Account number"},"validationConfig":{}},"ACCOUNT_HOLDER_NAME":{"renderConfig":{"helpText":"Account Holder Name must match the name on your bank account. Do not include the name of your bank itself. Exactly match what your bank has on file.","visibility":"true","label":"Account holder name","placeHolderText":"Name as on bank documents"},"validationConfig":{}},"ROUTING_NUMBER":{"renderConfig":{"helpText":"The code for your particular bank and branch. Example: ABCD0123456. Please use the code from your bank statement. (4 alpha + 0 + 6 numeric)","visibility":"true","invalidErrorMessage":"Invalid IFSC Code.","label":"IFSC code","placeHolderText":"Example: ABCD0123456"},"validationConfig":{"regex":"^[a-z|A-Z]{4}0[0-9]{6}$"}},"ACCOUNT_NUMBER":{"renderConfig":{"helpText":"Up to 34 alphanumeric.","tailSuffix":"saved","mismatchErrorMessage":"Account Numbers Mismatch!","tailPrefix":"   Bank account ending with ","invalidErrorMessage":"Invalid Account Number!","label":"Account number","placeHolderText":"Upto 34 characters."},"validationConfig":{"regex":"^[a-z|A-Z|0-9]+$"}}},"walletFailureCodeToInvalidFieldMap":{"renderConfig":{"INVALID_CHARACTERS_IN_ROUTING_NUMBER":"ROUTING_NUMBER","ROUTING_LENGTH_INCORRECT":"ROUTING_NUMBER","ACCOUNT_VALIDATION_FAILED":"ACCOUNT_NUMBER","INVALID_CHARACTERS_IN_ACCOUNT_NUMBER":"ACCOUNT_NUMBER","COUNTRY_NOT_SUPPORTED":"ACCOUNT_NUMBER","ROUTING_VALIDATION_FAILED":"ROUTING_NUMBER","ACCOUNT_LENGTH_INCORRECT":"ACCOUNT_NUMBER","ROUTING_NUMBER_COUNTRYCODE_COMBO_NOT_FOUND_IN_ACCUITY":"ROUTING_NUMBER"},"validationConfig":{}},"accountType":{"renderConfig":{"dropdownPromptMessage":"--Select Your Account Type--","visibility":"true","accountTypeOptions":"Current Account,Savings Account,Overdraft Account","label":"Account Type"},"validationConfig":{}},"editBankAccount":{"renderConfig":{"addBankAccountOption":"Add a new account","tailPrefix":"   Bank account ending with ","label":"Bank Account"},"validationConfig":{}},"accountNumber":{"renderConfig":{"tailSuffix":"saved","mismatchErrorMessage":"Account Numbers Mismatch!","tailPrefix":"   Bank account ending with ","invalidErrorMessage":"Invalid Account Number!","label":"Account number"},"validationConfig":{"regex":"^[a-z|A-Z|0-9]+$"}},"walletCountryCodeToCurrencyCodeMap":{"renderConfig":{"IN":"INR","IND":"INR"},"validationConfig":{}},"bankAccountFragment":{"renderConfig":{"bankWarningLogo":"https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_Gray.png","waitMsg":"Please wait while we verify your details.","headingMobile":"     Enter Bank Details","bankName":"Bank Name: ","validationFailedErrorMessage":"Account information validation failed.","bankSuccessLogo":"https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_green.png","cityName":"City Name: ","successImageUrl":"https://images-na.ssl-images-amazon.com/images/G/01/inssrswipe/bank-account-sucess-sign.png","successHeadingMobile":"     Bank Details","submitButtonText":"Save","incompleteErrorMessage":"Please add a bank account before launching.","ifscFieldEmptyMessage":"\t\nPlease enter the IFSC Code.","ifscInvalidFormat":"Invalid IFSC Code Format. Please review and enter correct IFSC Code.\n","headingDesktop":"3. Enter Bank Details ","helpTextImage":"https://images-na.ssl-images-amazon.com/images/G/01/swipertol/u368._V279572601_.png","visibility":"true","useBlackLabels":"true","editLinkText":"Edit","branchName":"Branch Name: ","successHeadingDesktop":"3. Bank Details","headingR2L":"Bank Account Details","verifyIfsc":"Verify IFSC","logoUrl":"https://images-na.ssl-images-amazon.com/images/G/01/inssrswipe/bank-account-fragment-logo.png","subHeading":"Update the bank details to receive payments from Amazon","requiredFieldMessage":"Required Field!","spooferAccessErrorMsg":"You do not have access to update bank account details.\n","genericErrorMsg":"Something went wrong. Please try again.","ifscErrorMessage":"We were not able to verify the IFSC Code. Please review and click on 'Save' to update your Bank Account Details."},"validationConfig":{}},"marketplaceToShadowMarketplaceMap":{"renderConfig":{"A2XZLSVIQ0F4JT":"A176Z3PSTZOYJ8","A21TJRUUN4KGV":"A1TZ3Q00A4B2P5"},"validationConfig":{}}}});
            </script>
            <div class="a-section a-spacing-base a-spacing-top-base">
                






<div data-ng-controller="bank-account-fragment-controller" data-ng-init="init('Bank_Account_BC_67635828-f378-41af-bc81-b6c1b3b8b0328')" class="a-section a-spacing-none bank-account-fragment-expander ng-scope">
    <div data-ng-class="{'bank-account-box-error': (overallErrorMessage)}" aria-live="polite" class="a-row a-expander-container a-spacing-mini a-spacing-top-small a-expander-section-container a-section-expander-container">
        <a id="in-bank-expander" data-ng-click="enableEditView()" data-ng-disabled="isSpooferINCheck &amp;&amp; isFragmentComplete" href="javascript:void(0)" data-action="a-expander-toggle" class="a-expander-header a-declarative a-expander-section-header a-link-section-expander a-size-medium" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;&quot;, &quot;collapse_prompt&quot;:&quot;&quot;}"><i class="a-icon a-icon-section-collapse"></i><span class="a-expander-prompt">
            <img alt="" src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_green.png" data-ng-show="isFragmentComplete" data-ng-src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_green.png" class="bank-account-in-logo ng-hide">
            <img alt="" src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_Gray.png" data-ng-hide="isFragmentComplete" data-ng-src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_Gray.png" class="bank-account-in-logo">
            <span class="a-size-base-plus bank-account-in-heading a-text-bold ng-binding">
                Bank Account Details
            </span>
        </span></a>
        <div id="in-bank-expander-content" data-ng-hide="isSpooferINCheck || isFragmentComplete" aria-expanded="true" class="a-expander-content a-expander-section-content a-section-expander-inner a-expander-content-expanded" style="overflow: hidden;">

            
            
                <span data-ng-init="addInputSetJSP('IN_BBAN')"></span>
                <!-- ngIf: 'IN_BBAN' === visibleInputSet --><div data-ng-if="'IN_BBAN' === visibleInputSet" class="ng-scope">
                    <!-- ngIf: showForm() --><div data-ng-if="showForm()" class="ng-scope">
                        

<div class="a-section">
    <div class="a-row">
        <div class="a-column a-span12 a-spacing-top-base a-ws-span6 bank-account-info">
            <div class="a-row">
                <div class="a-column a-span12">
                    <span data-ng-class="{euBankAccountLabel: (fragmentData.bankAccountFragment.renderConfig.useBlackLabels !== 'true'), blackBankAccountLabel: (fragmentData.bankAccountFragment.renderConfig.useBlackLabels === 'true')}" class="a-text-bold ng-binding blackBankAccountLabel">
                        Account holder name
                    </span>
                    <span id="inBBANAccountHolderName" data-ng-init="createPopover('inBBANAccountHolderName',fragmentData[fragmentData.bankCountry.value].ACCOUNT_HOLDER_NAME.renderConfig)" class="a-declarative">
                        <img data-ng-src="https://images-na.ssl-images-amazon.com/images/G/01/swipertol/u368._V279572601_.png" src="https://images-na.ssl-images-amazon.com/images/G/01/swipertol/u368._V279572601_.png">
                        <div class="a-popover-preload" id="a-popover-">
                        </div>
                    </span>
                </div>
            </div>
            <div class="a-row">
                <div class="a-column a-span12">
                    

<!-- ngIf: !isRestricted() --><input type="text" autocomplete="off" placeholder="Name as on bank documents" name="accountHolderName" class="a-input-text a-spacing-top-micro euBankAccountInputFields celwidget ng-scope ng-pristine ng-valid" data-cel_widget_id="BankAccount_AccountHolderName" data-ng-class="{'a-form-error': (fragmentData[fragmentData.bankCountry.value].ACCOUNT_HOLDER_NAME.errorMessage)}" data-ng-focus="clearError(fragmentData[fragmentData.bankCountry.value].ACCOUNT_HOLDER_NAME)" data-ng-if="!isRestricted()" data-ng-model="fragmentData[fragmentData.bankCountry.value].ACCOUNT_HOLDER_NAME.value"><!-- end ngIf: !isRestricted() -->

<!-- ngIf: isRestricted() && !areMultipleOptions() -->

<!-- ngIf: isRestricted() && areMultipleOptions() -->

<!-- ngIf: isRestricted() && areMultipleOptions() -->
                </div>
            </div>
            <div class="a-row">
                <div class="a-column a-span12">
                    <div data-ng-show="fragmentData[fragmentData.bankCountry.value].ACCOUNT_HOLDER_NAME.errorMessage" class="a-box a-alert-inline a-alert-inline-error ng-hide" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content ng-binding">
                        
                    </div></div></div>
                </div>
            </div>
        </div>
        <div class="a-column a-span12 a-spacing-top-base a-ws-span6 bank-account-info bank-account-top-margin-mobile a-ws-span-last">
            <div class="a-row">
                <div class="a-column a-span12 a-ws-span12">
                    <div class="a-row">
                        <div class="a-column a-span12">
                            <span data-ng-class="{euBankAccountLabel: (fragmentData.bankAccountFragment.renderConfig.useBlackLabels !== 'true'), blackBankAccountLabel: (fragmentData.bankAccountFragment.renderConfig.useBlackLabels === 'true')}" class="a-text-bold ng-binding blackBankAccountLabel">
                                Account Type
                            </span>
                        </div>
                    </div>
                    <div class="a-row a-spacing-top-micro">
                        <div class="a-column a-span12">
                            <div data-ng-class="{'bank-account-dropdown-error': (fragmentData[fragmentData.bankCountry.value].ACCOUNT_TYPE.errorMessage)}" class="a-section reg-dropdown">
                                <select class="bank-account-dropdown-select celwidget ng-pristine ng-valid" name="accountTypeSelect" data-ng-model="fragmentData[fragmentData.bankCountry.value].ACCOUNT_TYPE.value" data-ng-options="accountType as accountTypeName for (accountType,accountTypeName) in fragmentData[fragmentData.bankCountry.value].ACCOUNT_TYPE_OPTIONS.renderConfig" data-ng-focus="clearError(fragmentData[fragmentData.bankCountry.value].ACCOUNT_TYPE)" data-cel_widget_id="BankAccount_bankCountryDropdown"><option value="" class="ng-binding">
                                        --Select Your Account Type--
                                    </option><option value="BUSINESS">Overdraft Account</option><option value="CHECKING">Current Account</option><option value="SAVINGS">Savings Account</option></select>
                            </div>
                        </div>
                    </div>
                    <div class="a-row">
                        <div class="a-column a-span12">
                            <div data-ng-show="fragmentData[fragmentData.bankCountry.value].ACCOUNT_TYPE.errorMessage" class="a-box a-alert-inline a-alert-inline-error ng-hide" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content ng-binding">
                                
                            </div></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="a-row">
        <div class="a-column a-span12 a-spacing-top-base a-ws-span6 bank-account-info">
            <div class="a-row">
                <div class="a-column a-span12">
                    <span data-ng-class="{euBankAccountLabel: (fragmentData.bankAccountFragment.renderConfig.useBlackLabels !== 'true'), blackBankAccountLabel: (fragmentData.bankAccountFragment.renderConfig.useBlackLabels === 'true')}" class="a-text-bold ng-binding blackBankAccountLabel">
                        Account number
                    </span>
                    <span id="inBBANAccountNumber" data-ng-init="createPopover('inBBANAccountNumber',fragmentData[fragmentData.bankCountry.value].ACCOUNT_NUMBER.renderConfig)" class="a-declarative">
                        <img data-ng-src="https://images-na.ssl-images-amazon.com/images/G/01/swipertol/u368._V279572601_.png" src="https://images-na.ssl-images-amazon.com/images/G/01/swipertol/u368._V279572601_.png">
                        <div class="a-popover-preload" id="a-popover-">
                        </div>
                    </span>
                </div>
            </div>
            <div class="a-row">
                <div class="a-column a-span12">
                    <input type="password" maxlength="34" autocomplete="off" placeholder="Upto 34 characters." name="accountNumber" class="a-input-text a-spacing-top-micro euBankAccountInputFields celwidget ng-scope ng-pristine ng-valid" data-cel_widget_id="BankAccount_AccountNumber" data-ng-class="{'a-form-error': (fragmentData[fragmentData.bankCountry.value].ACCOUNT_NUMBER.errorMessage)}" data-ng-focus="clearError(fragmentData[fragmentData.bankCountry.value].ACCOUNT_NUMBER)" data-ng-model="fragmentData[fragmentData.bankCountry.value].ACCOUNT_NUMBER.value">
                </div>
            </div>
            <div class="a-row">
                <div class="a-column a-span12">
                    <div data-ng-show="fragmentData[fragmentData.bankCountry.value].ACCOUNT_NUMBER.errorMessage" class="a-box a-alert-inline a-alert-inline-error ng-hide" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content ng-binding">
                        
                    </div></div></div>
                </div>
            </div>
        </div>

    </div>
    <div class="a-row">
        <div class="a-column a-span12 a-spacing-top-base a-ws-span6 bank-account-info">
            <div class="a-row">
                <div class="a-column a-span12">
                    <span data-ng-class="{euBankAccountLabel: (fragmentData.bankAccountFragment.renderConfig.useBlackLabels !== 'true'), blackBankAccountLabel: (fragmentData.bankAccountFragment.renderConfig.useBlackLabels === 'true')}" class="a-text-bold ng-binding blackBankAccountLabel">
                        IFSC code
                    </span>
                    <span id="inBBANIfscCode" data-ng-init="createPopover('inBBANIfscCode',fragmentData[fragmentData.bankCountry.value].ROUTING_NUMBER.renderConfig)" class="a-declarative">
                        <img data-ng-src="https://images-na.ssl-images-amazon.com/images/G/01/swipertol/u368._V279572601_.png" src="https://images-na.ssl-images-amazon.com/images/G/01/swipertol/u368._V279572601_.png">
                        <div class="a-popover-preload" id="a-popover-">
                        </div>
                    </span>
                </div>
            </div>
            <!-- ngIf: !verifyIfscButtonVisibility --><div data-ng-if="!verifyIfscButtonVisibility" class="a-row ng-scope">
                <div class="a-column a-span12">
                    <input type="text" autocomplete="off" placeholder="Example: ABCD0123456" name="ifscCode" class="a-input-text a-spacing-top-micro euBankAccountInputFields celwidget ng-scope ng-pristine ng-valid" data-cel_widget_id="BankAccount_IfscCode" data-ng-class="{'a-form-error': (fragmentData[fragmentData.bankCountry.value].ROUTING_NUMBER.errorMessage)}" data-ng-focus="clearError(fragmentData[fragmentData.bankCountry.value].ROUTING_NUMBER)" data-ng-model="fragmentData[fragmentData.bankCountry.value].ROUTING_NUMBER.value">
                </div>
            </div><!-- end ngIf: !verifyIfscButtonVisibility -->
            <!-- ngIf: verifyIfscButtonVisibility -->
            <div class="a-row">
                <div class="a-column a-span12">
                    <div data-ng-show="fragmentData[fragmentData.bankCountry.value].ROUTING_NUMBER.errorMessage" class="a-box a-alert-inline a-alert-inline-error ng-hide" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content ng-binding">
                        
                    </div></div></div>
                </div>
            </div>
        </div>
    </div>
    <!-- ngIf: showBankInfo -->
</div>
                    </div><!-- end ngIf: showForm() -->
                </div><!-- end ngIf: 'IN_BBAN' === visibleInputSet -->
            
            <!-- ngIf: !disableSaveButton --><div data-ng-if="!disableSaveButton" class="a-section ng-scope">
                <span class="a-button a-button-primary bank-account-save-button" id="a-autoid-12"><span class="a-button-inner"><input data-ng-click="submitBankAccount()" class="a-button-input" type="submit" aria-labelledby="a-autoid-12-announce"><span class="a-button-text ng-binding" aria-hidden="true" id="a-autoid-12-announce">
                    Save
                </span></span></span>
            </div><!-- end ngIf: !disableSaveButton -->
            <!-- ngIf: disableSaveButton -->
            <!-- ngIf: overallErrorMessage -->
        </div>

        <div id="in-bank-expander-content-complete" data-ng-show="isFragmentComplete" aria-expanded="true" class="a-expander-content a-expander-section-content a-section-expander-inner ng-hide a-expander-content-expanded" style="overflow: hidden; display: block;">
            <div class="a-section">
            To update the bank account details, please <a class="a-link-normal" href="https://sellercentral.amazon.in/sw/AccountInfo/DepositMethodView/step/DepositMethodView?ref_=swipe_LD">click here</a>
            </div>
        </div>

    </div>
</div>

            </div>
        
            
            
            
            <script>
                registerFragment("Tax_Registration_Dashboard_BC_67635828-f378-41af-bc81-b6c1b3b8b032", {"responseData":{"isSpoofer":false,"STRINGS":{"UPLOADED_SUCCESSFULLY":"Successfully Uploaded","TAX_DATA_NOT_REGISTERED_HEADING":"VAT/CST is required to sell on Amazon.\n","VAT_VALIDATION_DATE_ERROR":"Please enter valid VAT registration date","GST_SKIP_NOT_REGISTERED_REASON":"I have never registered for GST.\n","TAX_EXEMPTION_INFO_TEXT":"If you don\u2019t have a GST registration, you can only sell items which are not taxable or exempted from GST.\nPlease refer to https://cbic-gst.gov.in/gst-goods-services-rates.html to identify items that are exempted from GST, or reach out to your Tax Consultant or CA.","PANhelpHeader":"PAN number","TAX_DATA_NOT_REGISTERED_REASON":"I have never registered for VAT/CST.\n","PANplaceholder":"","TAX_DATA_NOT_REGISTERED_CONTENT_GST_FOR_WEBLAB_TREATMENT":"If you have not registered for GST, please <a href=\"https://cleartax.in/s/amazon-partnership\" target=\"_blank\">click here<\/a> to apply.","PANdisplayName":"PAN number","NO_TAX_CONTENT":"If you sell only Books or Fabrics/Textiles (unstitched) then you are generally exempted from providing VAT & CST registration number.","TAX_GST_BANNER_URL":"https://cleartax.in/s/amazon-partnership\n","Upload_GST":"Upload GST Certificate\n","DASHBOARD_ERROR_MSG":"It is necessary to submit the Tax Details to proceed.\n","NO_TAX_CHECKBOX":"No VAT / CST","NO_TAX_TITLE":"Sell in VAT exempted categories","NO_CST_CONTENT":"You can update CST to sell in other states across India at any time","TAX_POPOVER_TOOLTIP_TEXT":"What's this?","DASHBOARD_TAX_HEADING":"4. Enter Tax Details\n","GSTGSTURL":"/sw/in/Launch/step/TaxDetails?ref=sw_in_GST","GST_VALIDATION_DATE_ERROR":"Please enter valid GST registration date (Valid date format DD/MM/YYYY)","CONTINUE_BUTTON":"Continue","NO_CST_CHECKBOX":"No CST","PANhelpContent":"Permanent Account Number (PAN) is a ten-digit alphanumeric number, issued by the Income Tax Department.","GSThelpHeader":"GSTIN Number","TAX_EXEMPTION_REASON":"Please select the exemption reason","NO_GST_CONTENT":"If you sell only GST exempted products then you are generally exempted from providing GST registration number.","NEXT_BUTTON":"Next","STATE_DROPDOWN":"Enter your tax details","TAX_NO_VAT_ERROR":"Please select an Option to Continue. ","INCORRECT_FILE_FORMAT":"Incorrect file format","QUESTION_NOT_ANSWERED_ERROR":"Please Select an option to continue.\n","TAX_DATA_NOT_REGISTERED_HEADING_GST_FOR_WEBLAB_TREATMENT":"GST is required to sell on Amazon","TAX_GST_BANNER_MOBILE":"https://m.media-amazon.com/images/G/31/INSSRSWIPE/Dashboard/400x115-Mobile.jpg\n","Upload":"Upload","GSTemptyError":"Please enter the GSTIN value","NO_VAT_QUESTION":"Do you have VAT/TIN Number?\n","DASHBOARD_TAX_HEADING_MOBILE":"Enter Tax Details","UPLOADING":"Uploading","PANemptyError":"Please enter the PAN value","NO_CST_TITLE":"You can sell only within your State","NO_TAX_HEADING":"Don't have VAT/CST?","NO_CST_HEADING":"Don't have CST?","VALIDATION_ERROR":"Please add registration date","TAX_GST_BANNER_DESKTOP":"https://m.media-amazon.com/images/G/31/INSSRSWIPE/Dashboard/400x400-Desktop.jpg\n","TAX_EDIT":"Edit","TAX_DATA_NOT_REGISTERED_CONTENT_GST":"If you have not registered for GST, please click the link to below to apply.","GST_EXEMPTION_REASON":"I sell in GST Exempted Category.\n","ERROR_UPLOADING":"Error while uploading","NO_GST_QUESTION":"Do you have GST Number?\n","VAT_EXEMPTION_REASON":"I sell in Tax Exempted Category.\n","CST_VALIDATION_DATE_ERROR":"Please enter valid CST registration date","SAVE_BUTTON":"Save","GSThelpContent":"Goods and Services Taxpayer Identification Number (GSTIN) is required for all sellers operating on e-commerce platform","TAX_SKIP_UPDATE_LATER_REASON":"I will Update Later\n","NO_GST_CHECKBOX":"I don't have GSTIN","NO_GST_HEADING":"Don't have GST?","GSTdisplayName":"Provisional GSTIN","TAX_VERIFICATION_ERROR":"Your tax details are invalid. Please update the correct details.","TAX_DATA_NOT_HANDY_REASON":"I don't have it handy and will update later.\n","NO_GST_TITLE":"Sell in GST exempted categories","TAX_EXEMPTION_INFO_HEADING":"GST Exempt Products","DASHBOARD_TAX_SUB_HEADING":"Update your Tax Details for ","GSTplaceholder":"","TAX_NO_GST_ERROR":"Please select an Option to Continue. ","TAX_DATA_NOT_REGISTERED_HEADING_GST":"GST is required to sell on Amazon.\n"},"taxFormat":{"CST":"^18[0-9]{9}$","VAT":"^18[0-9]{9}$","GST":"^18[A-Z]{3}[ABCFGHLJPTK][A-Z][0-9]{4}[A-Z][0-9A-Z]Z[0-9A-Z]$","PAN":"^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]$"},"GST":{"taxInformation":{"verificationStatus":"","taxValue":"","editable":true,"sellingInExemptCategory":false,"exempted":false,"taxExemptionReasonsList":["none"],"documentIds":[]},"validationConfig":{"editable":"true","mandatory":"true","maxLength":"15"}},"taxErrors":{"GSTError":"Invalid GST number. Please review and enter a valid GST number.","PANError":"Invalid PAN number. Please enter a valid PAN number.","CSTError":"Invalid CST number. Please enter a valid CST number.","VATError":"Invalid VAT number. Please enter a valid VAT number."},"isTaxInformationEditable":true,"SellerType":"EASYSHIP","DashboardPage":{"renderConfig":{"isTaxVerificationRequired":"true"},"validationConfig":{}},"taxSuccessLogo":"https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_green.png","taxWarningLogo":"https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_Gray.png","stateMap":{"RAJASTHAN":"IN_RJ","HIMACHAL PRADESH":"IN_HP","NAGALAND":"IN_NL","UTTARAKHAND":"IN_UK","MADHYA PRADESH":"IN_MP","ANDHRA PRADESH":"IN_AP","LAKSHADWEEP":"IN_LD","SIKKIM":"IN_SK","MEGHALAYA":"IN_ML","KERALA":"IN_KL","CHHATTISGARH":"IN_CG","TAMIL NADU":"IN_TN","BIHAR":"IN_BR","WEST BENGAL":"IN_WB","ODISHA":"IN_OR","GUJARAT":"IN_GJ","GOA":"IN_GA","DADRA & NAGAR HAVELI":"IN_DN","UTTAR PRADESH":"IN_UP","TRIPURA":"IN_TR","CHANDIGARH":"IN_CH","TELANGANA":"IN_TS","MANIPUR":"IN_MN","MIZORAM":"IN_MZ","ANDAMAN & NICOBAR ISLANDS":"IN_AN","JHARKHAND":"IN_JH","MAHARASHTRA":"IN_MH","HARYANA":"IN_HR","ARUNACHAL PRADESH":"IN_AR","DELHI":"IN_DL","PUNJAB":"IN_PB","PUDUCHERRY":"IN_PY","ASSAM":"IN_AS","DAMAN & DIU":"IN_DD","JAMMU & KASHMIR":"IN_JK","KARNATAKA":"IN_KA"},"state":"ASSAM","PAN":{"taxInformation":{"verificationStatus":"","taxValue":"","editable":true,"sellingInExemptCategory":false,"exempted":false,"taxExemptionReasonsList":["none"],"documentIds":[]},"validationConfig":{"editable":"true","mandatory":"true","maxLength":"10"}}}});
            </script>
            <div class="a-section a-spacing-base a-spacing-top-base">
                



<div data-ng-controller="tax-registration-dashboard-fragment-controller" data-ng-init="init('Tax_Registration_Dashboard_BC_67635828-f378-41af-bc81-b6c1b3b8b032')" class="a-section ng-scope">
     
         
         
             


<div data-ng-class="isTaxCompleted ? '' : 'tax-registration-dashboard-mobile-error'" class="a-section tax-registration-dashboard-fragment">
    <div data-ng-class="isTaxCompleted ? '' : 'tax-registration-dashboard-app-error'" aria-live="polite" class="a-row a-expander-container a-spacing-mini a-spacing-top-small a-expander-section-container a-section-expander-container">
            <a id="tax-fragment-expander" data-ng-click="makeFieldsEditable()" href="javascript:void(0)" data-action="a-expander-toggle" class="a-expander-header a-declarative a-expander-section-header a-link-section-expander a-size-medium" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;&quot;, &quot;collapse_prompt&quot;:&quot;&quot;}"><i class="a-icon a-icon-section-collapse"></i><span class="a-expander-prompt">
                <img alt="" src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_green.png" data-ng-show="showSuccessIconTax" data-ng-src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_green.png" class="fragment-logo ng-hide">
                <img alt="" src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_Gray.png" data-ng-hide="showSuccessIconTax" data-ng-src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_Gray.png" class="fragment-logo">
                <span class="a-size-base-plus fragment-heading a-text-bold ng-binding">
                    Enter Tax Details
                </span>
            </span></a>
            <div aria-expanded="true" class="a-expander-content a-expander-inline-content a-expander-inner a-expander-content-expanded" style="overflow: hidden;">
                <div class="a-section a-spacing-mini tax-registration-dashboard-container">
                    <p class="a-spacing-mini ng-binding">
                        Update your Tax Details for  ASSAM :
                        <span data-ng-show="getTaxDetailsStarter" class="a-spinner a-spinner-small ng-hide"></span>
                    </p>
                    <hr class="a-divider-normal">
                    <div class="a-section a-spacing-top-mini set-button-container-dashboard">
                        <form id="dashboardTaxRegistrationForm" name="dashboardTaxRegistrationFragment" method="post" action="" class="ng-pristine ng-invalid ng-invalid-required">
                            <div class="a-row">
                                <div class="a-column a-span6 a-spacing-mini tax-registration-input">
                                    


<div class="a-section a-spacing-none">
    <div class="a-section a-spacing-none dashboard-tax-value">
        <span class="a-text-bold ng-binding">
            PAN number
        </span>
        <span class="a-declarative" data-action="a-popover" data-a-popover="{}">
            <a href="javascript:void(0)" class="a-popover-trigger a-declarative PANPopoverTrigger tax-help aok-align-right aok-float-right ng-binding">
                What's this?
            <i class="a-icon a-icon-popover"></i></a>
        </span>
    </div>

    <input type="text" required="" placeholder="" tabindex="1" class="a-input-text dashboard-tax-value tax-inline-block ng-scope ng-pristine ng-animate ng-invalid ng-invalid-required" data-ng-blur="isTaxValid('PAN', fragmentData.PAN)" data-ng-class="{'a-form-error': fragmentData.PAN.error}" data-ng-focus="clearError(fragmentData.PAN)" data-ng-keyup="checkLength(fragmentData.PAN)" data-ng-model="fragmentData.PAN.taxInformation.taxValue" data-ng-readonly="isTaxFieldReadOnly" style="">

    <div class="a-section a-spacing-none">
        <!-- ngIf: fragmentData.PAN.error -->
    </div>
</div>

                                </div>
                                <div class="a-column a-span6 a-spacing-none tax-registration-input a-span-last">
                                    <span>
                                        


<div class="a-section a-spacing-none">
    <div class="a-section a-spacing-none dashboard-tax-value">
        <span class="a-text-bold ng-binding">
            Provisional GSTIN
        </span>
        <span class="a-declarative" data-action="a-popover" data-a-popover="{}">
            <a href="javascript:void(0)" class="a-popover-trigger a-declarative GSTPopoverTrigger tax-help aok-align-right aok-float-right ng-binding">
                What's this?
            <i class="a-icon a-icon-popover"></i></a>
        </span>
    </div>

    <input type="text" required="" placeholder="" tabindex="2" class="a-input-text dashboard-tax-value tax-inline-block ng-scope ng-pristine ng-animate ng-invalid ng-invalid-required" data-ng-blur="isTaxValid('GST', fragmentData.GST)" data-ng-class="{'a-form-error': fragmentData.GST.error}" data-ng-focus="clearError(fragmentData.GST)" data-ng-keyup="checkLength(fragmentData.GST)" data-ng-model="fragmentData.GST.taxInformation.taxValue" data-ng-readonly="isTaxFieldReadOnly" style="">

    <div class="a-section a-spacing-none">
        <!-- ngIf: fragmentData.GST.error -->
    </div>
</div>

                                    </span>
                                 </div>
                            </div>
                        </form>
                        <div data-ng-show="showTaxVerificationError" class="a-box a-alert-inline a-alert-inline-error ng-hide" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content ng-binding">
                            Your tax details are invalid. Please update the correct details.
                        </div></div></div>
                        <span class="a-button a-spacing-none set-tax-details-button" id="a-autoid-14"><span class="a-button-inner"><input data-ng-click="submitTax()" class="a-button-input" type="submit" aria-labelledby="a-autoid-14-announce"><span class="a-button-text a-text-center ng-binding" aria-hidden="true" id="a-autoid-14-announce">
                              Save
                         </span></span></span>
                    </div>
                </div>
                <div data-ng-hide="isTaxCompleted" class="a-box a-alert-inline a-alert-inline-error tax-registration-dashboard-error ng-hide" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content ng-binding">
                    It is necessary to submit the Tax Details to proceed.

                </div></div></div>
             </div>
     </div>
</div>

         
     
</div>

            </div>
        
            
            
            
            <script>
                registerFragment("Product_Tax_Code_BC_r1o2n3a4k5_s6h7a8h9", {"responseData":{"STRINGS":{"showPtcWidget":{},"ptcData":{"defaultValueForDropdown":"Select Product Tax Code","ptcImage":"https://images-na.ssl-images-amazon.com/images/G/01/inssrswipe/bank-account-fragment-logo.png","heading":"5. Product Tax Code","edit":"Edit","firstHelpLink":"https://images-eu.ssl-images-amazon.com/images/G/31/amazonservices/sellercentral/GST_PTC._V507871356_.jpg","ptcHeadingDropdown":"PTC Code (GST rate)","ptcSuccessLogo":"https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_green.png","description":"PTC (Product Tax code) are codes which are mapped to GST rates notified by the government (i.e. the percentage of taxes which are applicable for the sale of products or services). Seller Central Account tax calculation system uses PTC to calculate the tax on the products or services a seller lists on the marketplace. This is the Tax amount which sellers will later have to remit to the GST authorities on the product or services sold/provided by them \n","secondHelpLinkDescription":" Learn more about PTC","savebuttonDescription":"Save","headingForDropdown":"Default Product Tax Code","ptcSavedImage":"https://images-na.ssl-images-amazon.com/images/G/01/inssrswipe/bank-account-sucess-sign.png","ptcSaveErrorMessage":"The was some problem in saving the PTC. Please try again later.","ptcMobileSubHeading":"Required for Amazon's tax calculation services to calculate tax on all your products if no Tax Code is provided for individual offers.","secondHelpLink":"https://sellercentral.amazon.in/learn/courses?ref_=gst_page_PTC&courseId=134&moduleId=528&modLanguage=English","ptcMap":"{\"A_GEN_EXEMPT\":\"(0PERCENT)\",\"A_GEN_MINIMUM\":\"(0.25PERCENT)\",\"A_GEN_JEWELLERY\":\"(3PERCENT)\",\"A_GEN_SUPERREDUCED\":\"(5PERCENT)\",\"A_GEN_REDUCED\":\"(12PERCENT)\",\"A_GEN_STANDARD\":\"(18PERCENT)\",\"A_GEN_PEAK\":\"(28PERCENT)\",\"A_GEN_PEAK_CESS12\":\"(28PERCENT PLUS 12PERCENT)\",\"A_GEN_PEAK_CESS60\":\"(28PERCENT PLUS 60PERCENT)\"}","ptcNotSelectedError":"Please select a Product Tax Code.","checkboxAgreementDescription":"I have reviewed and agree to Amazon's <a href=\"https://services.amazon.in/landing/gst-tax-methodology.htm\" target=\"_blank\">Tax Calculation Methodology<\/a>\n","saveSuccessfulMessage":"has been saved.","ptcCheckboxNotSelectedError":"Please accept the Terms and Conditions","firstHelpLinkDescription":"View all Product Tax Codes","ptcBusinessConceptNotCompleted":"Please select a Product Tax Code","ptcWarningLogo":"https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_Gray.png","ptcHeadingR2L":"Default Product Tax Code"},"showPtcWidgetGlobalCriteria":{}},"showPtcWidget":true,"selectedDefaultPTC":""}});
            </script>
            <div class="a-section a-spacing-base a-spacing-top-base">
                



<div data-ng-controller="product-tax-code-fragment-controller" data-ng-init="init('Product_Tax_Code_BC_r1o2n3a4k5_s6h7a8h9')" data-ng-show="fragmentData.showPtcWidget" class="a-section ng-scope">
        
            
            
                


<div class="a-section product-tax-code-fragment">
    <div data-ng-class="{'product-tax-code-box-error': showLaunchSubmitFatalError === true}" aria-live="polite" class="a-row a-expander-container a-spacing-mini a-spacing-top-small a-expander-section-container a-section-expander-container">
            <a id="ptc-fragment-expander" href="javascript:void(0)" data-action="a-expander-toggle" class="a-expander-header a-declarative a-expander-section-header a-link-section-expander a-size-medium" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;&quot;, &quot;collapse_prompt&quot;:&quot;&quot;}"><i class="a-icon a-icon-section-collapse"></i><span class="a-expander-prompt">
                <img alt="" src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_green.png" data-ng-show="isPTCFilled" data-ng-src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_green.png" class="fragment-logo ng-hide">
                <img alt="" src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_Gray.png" data-ng-hide="isPTCFilled" data-ng-src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_Gray.png" class="fragment-logo">
                <span class="a-size-base-plus fragment-heading a-text-bold ng-binding">
                    Default Product Tax Code
                </span>
            </span></a>
            <div aria-expanded="true" class="a-expander-content mobile-right-margin a-expander-inline-content a-expander-inner a-expander-content-expanded" style="overflow: hidden;">
                  <div class="a-section a-spacing-mini product-tax-code-container">
                        <p class="a-spacing-mini ng-binding">
                           PTC (Product Tax code) are codes which are mapped to GST rates notified by the government (i.e. the percentage of taxes which are applicable for the sale of products or services). Seller Central Account tax calculation system uses PTC to calculate the tax on the products or services a seller lists on the marketplace. This is the Tax amount which sellers will later have to remit to the GST authorities on the product or services sold/provided by them 

                        </p>
                        <hr class="a-divider-normal">
                        <div class="a-section">
                           <p class="a-spacing-small product-tax-code-heading-dropdown a-text-bold ng-binding">
                              Default Product Tax Code
                           <span id="ptcJITATrigger" class="a-color-link jita-trigger jita-text-normal" style="position:relative;right:-2px;">What's this?<span class="arrow-down a-color-link jita-trigger"></span></span></p>
                           <div class="a-section a-spacing-small">
                              <span class="a-dropdown-container"><select name="" autocomplete="off" data-a-native-class="product-tax-code-dropdown" data-a-touch-header="PTC Code (GST rate)" id="product-tax-code-dropdown" tabindex="-1" class="a-native-dropdown product-tax-code-dropdown"><option class="a-prompt ng-binding" value="">Select Product Tax Code</option>
                                 <!-- ngRepeat: (key,value) in ptcMap --><option data-ng-repeat="(key,value) in ptcMap" value="A_GEN_EXEMPT" class="ng-scope ng-binding">
                                    A_GEN_EXEMPT (0%)
                                 </option><!-- end ngRepeat: (key,value) in ptcMap --><option data-ng-repeat="(key,value) in ptcMap" value="A_GEN_JEWELLERY" class="ng-scope ng-binding">
                                    A_GEN_JEWELLERY (3%)
                                 </option><!-- end ngRepeat: (key,value) in ptcMap --><option data-ng-repeat="(key,value) in ptcMap" value="A_GEN_MINIMUM" class="ng-scope ng-binding">
                                    A_GEN_MINIMUM (0.25%)
                                 </option><!-- end ngRepeat: (key,value) in ptcMap --><option data-ng-repeat="(key,value) in ptcMap" value="A_GEN_PEAK" class="ng-scope ng-binding">
                                    A_GEN_PEAK (28%)
                                 </option><!-- end ngRepeat: (key,value) in ptcMap --><option data-ng-repeat="(key,value) in ptcMap" value="A_GEN_PEAK_CESS12" class="ng-scope ng-binding">
                                    A_GEN_PEAK_CESS12 (28% + 12%)
                                 </option><!-- end ngRepeat: (key,value) in ptcMap --><option data-ng-repeat="(key,value) in ptcMap" value="A_GEN_PEAK_CESS60" class="ng-scope ng-binding">
                                    A_GEN_PEAK_CESS60 (28% + 60%)
                                 </option><!-- end ngRepeat: (key,value) in ptcMap --><option data-ng-repeat="(key,value) in ptcMap" value="A_GEN_REDUCED" class="ng-scope ng-binding">
                                    A_GEN_REDUCED (12%)
                                 </option><!-- end ngRepeat: (key,value) in ptcMap --><option data-ng-repeat="(key,value) in ptcMap" value="A_GEN_STANDARD" class="ng-scope ng-binding">
                                    A_GEN_STANDARD (18%)
                                 </option><!-- end ngRepeat: (key,value) in ptcMap --><option data-ng-repeat="(key,value) in ptcMap" value="A_GEN_SUPERREDUCED" class="ng-scope ng-binding">
                                    A_GEN_SUPERREDUCED (5%)
                                 </option><!-- end ngRepeat: (key,value) in ptcMap -->
                              </select><span tabindex="-1" class="a-button a-button-dropdown" id="a-autoid-15" style="min-width: 0%;"><span class="a-button-inner"><span class="a-button-text a-declarative" data-action="a-dropdown-button" role="button" tabindex="0" aria-hidden="true" id="a-autoid-15-announce"><span class="a-dropdown-prompt ng-binding">Select Product Tax Code</span></span><i class="a-icon a-icon-dropdown"></i></span></span></span>
                           </div>
                           <div data-ng-show="showPtcDropdownValueNotSelectedError" class="a-section a-spacing-none ng-hide">
                              <div class="a-box a-alert-inline a-alert-inline-error a-spacing-mini" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content ng-binding">
                                 Please select a Product Tax Code.
                              </div></div></div>
                           </div>
                           <div class="a-section a-spacing-small">
                              <div class="a-checkbox a-checkbox-fancy ng-scope"><label><input type="checkbox" name="" value="" data-ng-model="ptcCheckBox" class="ng-pristine ng-valid" style=""><i class="a-icon a-icon-checkbox"></i><span class="a-label a-checkbox-label">
                                 <span data-ng-bind-html="checkboxAgreementDescription" class="ng-binding">I have reviewed and agree to Amazon's <a href="https://services.amazon.in/landing/gst-tax-methodology.htm?ld=ASINSOADirect" target="_blank">Tax Calculation Methodology</a>
</span>
                              </span></label></div>
                           </div>
                           <div data-ng-show="showPtcCheckBoxNotTickedError" class="a-section a-spacing-none ng-hide">
                              <div class="a-box a-alert-inline a-alert-inline-error a-spacing-mini" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content ng-binding">
                                 Please accept the Terms and Conditions
                              </div></div></div>
                           </div>
                           <div class="a-section a-spacing-small a-text-left">
                              <span data-ng-show="showSaveProductTaxCodeSpinner" class="a-spinner a-spinner-small mobile-spinner ng-hide"></span>
                              <span class="a-button a-button-width-normal save-product-tax-code-button" id="a-autoid-16"><span class="a-button-inner"><input data-ng-click="savePTC()" class="a-button-input" type="submit" aria-labelledby="a-autoid-16-announce"><span class="a-button-text ng-binding" aria-hidden="true" id="a-autoid-16-announce">
                                 Save
                              </span></span></span>
                              <span data-ng-show="showSaveProductTaxCodeSpinner" class="a-spinner a-spinner-small desktop-spinner ng-hide"></span>
                           </div>
                           <div data-ng-show="showSaveProductTaxCodeError" class="a-section a-spacing-none ng-hide">
                              <div class="a-box a-alert-inline a-alert-inline-error a-spacing-mini" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content ng-binding">
                                 The was some problem in saving the PTC. Please try again later.
                              </div></div></div>
                           </div>
                           <div class="a-section a-spacing-small">
                              <a data-ng-click="viewProductTaxCodeClick($event)" class="a-size-base a-link-normal ng-binding" target="_blank" rel="noopener" href="https://images-eu.ssl-images-amazon.com/images/G/31/amazonservices/sellercentral/GST_PTC._V507871356_.jpg?ld=ASINSOADirect">
                                 View all Product Tax Codes
                              </a>
                           </div>
                           <div class="a-section a-spacing-small">
                              <a data-ng-click="ptcLearnMoreClick($event)" class="a-size-base a-link-normal ng-binding" target="_blank" rel="noopener" href="https://sellercentral.amazon.in/learn/courses?ref_=gst_page_PTC&amp;courseId=134&amp;moduleId=528&amp;modLanguage=English">
                                  Learn more about PTC
                              </a>
                           </div>
                        </div>
                        <div data-ng-show="showLaunchSubmitFatalError" class="a-section a-spacing-none ng-hide">
                           <div class="a-box a-alert-inline a-alert-inline-error a-spacing-mini" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content ng-binding">
                              Please select a Product Tax Code
                           </div></div></div>
                        </div>
                  </div>
            </div>
    </div>
</div>

            
        
</div>

            </div>
        
            
            
            
            <script>
                registerFragment("Digital_Signature_BC_67635828-f378-41af-bc81-b6c1b3b8b0328", {"responseData":{"showDigitalSignatureWidget":true,"signature":"","uploadStatus":false,"devicePlatform":"N/A","digitalSignatureData":{"digitalSignatureNotCompleted":"Digital Signature not completed","rotateLeft":"Rotate Left","description":"Upload a scan copy of your signature which will be used on the invoices sent to customers","cropDescription":"Crop the image such that only your signature is within the highlighted box.","digitalSignatureWarningLogo":"https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_Gray.png","uploadLinkText":"Upload your signature","digitalSignatureSuccessLogo":"https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_green.png","answerPoint2":"Signature should be legible and in focus.","mobileHeading":"Digital Image Signature","answerPoint3":"Only upload JPEG or JPG image format","answerPoint4":"Image size should not exceed 2mb.","digitalSigntatureMobileSizeError":"Please upload image less than 4mb size.","rotateRightIcon":"https://m.media-amazon.com/images/G/31/INSSRSWIPE/rotate-right.png","answerPoint4Mobile":"Image size should not exceed 4mb.","rotateLeftIcon":"https://m.media-amazon.com/images/G/31/INSSRSWIPE/rotate-left.png","digitalSignatureSavedImage":"https://m.media-amazon.com/images/G/31/rainier/nav/completedStepA.png","editLink":"Edit","digitalSigntatureSizeError":"Please upload image less than 2mb size.","digitalSignatureUploadSuccess":"Image uploaded.","digitalSignatureServiceFailure":"Please try again after sometime.","question":"What to upload ?","rotateRight":"Rotate Right","heading":"6. Digital Image Signature","change":"Change","selectOtherImage":"Select a different image","doneButton":"Done","answerPoint1":"Sign on a white paper, scan the signature and upload the image.","digitalSignatureHeading":"Signature","imgUrl":"https://m.media-amazon.com/images/G/31/amazonservices/sellercentral/shipping-rate-logo.png","confirm":"Confirm","resetIcon":"https://m.media-amazon.com/images/G/31/INSSRSWIPE/reset.png","reset":"Reset","digitalSigntatureFormatError":"Please upload jpeg image only."}}});
            </script>
            <div class="a-section a-spacing-base a-spacing-top-base">
                






<div data-ng-controller="ds-fragment-controller" data-ng-init="init('Digital_Signature_BC_67635828-f378-41af-bc81-b6c1b3b8b0328')" data-ng-show="showDigitalSignatureWidget" class="a-section ng-scope">
   <div class="a-section ds-fragment">
       <div aria-live="polite" class="a-row a-expander-container a-spacing-mini a-spacing-top-small a-expander-section-container a-section-expander-container">
           <a id="signature-fragment-expander" href="javascript:void(0)" data-action="a-expander-toggle" class="a-expander-header a-declarative a-expander-section-header a-link-section-expander a-size-medium" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;&quot;, &quot;collapse_prompt&quot;:&quot;&quot;}"><i class="a-icon a-icon-section-collapse"></i><span class="a-expander-prompt">
               <img alt="" src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_green.png" data-ng-show="digitalSignatureUploadedAndApproved" data-ng-src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_green.png" class="fragment-logo ng-hide">
               <img alt="" src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_Gray.png" data-ng-hide="digitalSignatureUploadedAndApproved" data-ng-src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/Check_Gray.png" class="fragment-logo">
               <span class="a-size-base-plus fragment-heading a-text-bold ng-binding">
                   Signature
               </span>
           </span></a>
           <div aria-expanded="true" class="a-expander-content a-expander-inline-content a-expander-inner a-expander-content-expanded" style="overflow: hidden;">
           
           <div class="a-section a-spacing-mini ds-fragment-margin-right">
               <p class="a-spacing-mini ds-description ng-binding">
                   Upload a scan copy of your signature which will be used on the invoices sent to customers
               </p>
               <hr class="a-spacing-top-small a-divider-normal ds-divider">

               
               <div class="a-section ds-editor-container">
                   
                   <div id="ds-image-editor" data-ng-show="showEditor" class="a-section a-spacing-small ng-hide">
                       <div class="a-section a-spacing-none ds-options">
                           <span id="ds-reset" data-ng-click="reset()" class="a-color-tertiary ds-edit-options ng-binding">
                               <img alt="" src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/reset.png" data-ng-src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/reset.png">
                               Reset
                           </span>
                           <span id="ds-rotate-right" data-ng-click="rotate(-90)" class="a-color-tertiary ds-edit-options ng-binding">
                               <img alt="" src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/rotate-left.png" data-ng-src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/rotate-left.png">
                               Rotate Left
                           </span>
                           <span id="ds-rotate-left" data-ng-click="rotate(90)" class="a-color-tertiary ds-edit-options ng-binding">
                               <img alt="" src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/rotate-right.png" data-ng-src="https://m.media-amazon.com/images/G/31/INSSRSWIPE/rotate-right.png">
                               Rotate Right
                           </span>
                       </div>
                       <image-crop image-out="croppedImage" crop-options="cropOptions" ng-transclude="" id="ds-image-canvas" crop-image-save="saveCrop" class="ng-isolate-scope">
                           <edit-crop id="editor-canvas" class="ng-scope"><canvas></canvas></edit-crop>
                       </image-crop>
                       
                       <canvas id="rotatedCanvas" class="aok-hidden"></canvas>
                       <div class="a-section a-spacing-none a-spacing-top-mini ds-crop-done-container">
                           
                               
                               
                                   <span id="ds-select-other" data-ng-click="openFileUploader($event)" class="a-color-link ng-binding">
                                       Select a different image
                                   </span>
                               
                           

                           <span class="a-button a-button-primary ds-button-width aok-float-right ds-done-button" id="a-autoid-17"><span class="a-button-inner"><input data-ng-click="cropImage()" class="a-button-input" type="submit" aria-labelledby="a-autoid-17-announce"><span class="a-button-text ng-binding" aria-hidden="true" id="a-autoid-17-announce">
                               Done
                           </span></span></span>
                       </div>
                   </div>

                   
                   <div data-ng-show="!showEditor" class="a-section a-spacing-none ds-image-upload-container">
                       <div class="a-box a-spacing-small"><div class="a-box-inner">
                           
                           <input type="file" class="aok-hidden" id="ds-file-input" accept="image/jpeg,image/jpg" onchange="angular.element(this).scope().handleFileChange(this.files)">
                           <input type="hidden" name="signature-id" id="signature-id">
                           
                               
                               
                                   <a data-ng-click="openFileUploader($event)" data-ng-show="!showImagePreview" data-ng-title="renderData.uploadLinkText" class="a-link-normal ds-image-upload-link ng-binding" href="#">
                                       Upload your signature
                                   </a>
                               
                           

                           
                           <div class="a-section a-spacing-none ds-preview-container">
                               <img alt="" src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel._V192234675_.gif" data-ng-show="showImagePreview" data-ng-src="" class="ds-preview ng-hide">
                               <span data-ng-show="showDigitalSignatureSpinner" class="a-spinner a-spinner-medium ds-upload-spinner ng-hide"></span>
                           </div>
                       </div></div>

                       
                       <div data-ng-show="showImagePreview" class="a-section a-spacing-none aok-align-center ng-hide">
                           <span data-ng-show="showConfirmButton" class="ng-hide">
                               <span class="a-button a-button-primary ds-button-width" id="a-autoid-18"><span class="a-button-inner"><input data-ng-click="confirmSignature()" data-ng-disabled="disableConfirmButton" class="a-button-input" type="submit" aria-labelledby="a-autoid-18-announce"><span class="a-button-text ng-binding" aria-hidden="true" id="a-autoid-18-announce">
                                   Confirm
                               </span></span></span>
                           </span>
                           
                               
                               
                                   <span data-ng-show="showChangeButton" class="ng-hide">
                                       <span class="a-button ds-button-width" id="a-autoid-19"><span class="a-button-inner"><input data-ng-click="openFileUploader($event)" data-ng-disabled="disableChangeButton" class="a-button-input" type="submit" aria-labelledby="a-autoid-19-announce"><span class="a-button-text ng-binding" aria-hidden="true" id="a-autoid-19-announce">
                                           Change
                                       </span></span></span>
                                   </span>
                               
                           
                       </div>
                       <div data-ng-show="showErrorDigitalSigntatureSizeError" class="a-box a-alert-inline a-alert-inline-error ng-hide" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content ng-binding">
                           Please upload image less than 4mb size.
                       </div></div></div>
                       <div data-ng-show="showErrorDigitalSigntatureFormatError" class="a-box a-alert-inline a-alert-inline-error ng-hide" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content ng-binding">
                           Please upload jpeg image only.
                       </div></div></div>
                       <div data-ng-show="showErrorDigitalSigntatureServiceError" class="a-box a-alert-inline a-alert-inline-error ng-hide" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content ng-binding">
                           Please try again after sometime.
                       </div></div></div>
                   </div>

                   <div class="a-section a-spacing-none ds-steps-container">
                       <p class="a-spacing-micro a-text-bold ng-binding">
                           What to upload ?
                       </p>
                       <ul class="a-unordered-list a-vertical ds-steps">
                           <li><span class="a-list-item ng-binding">
                               Sign on a white paper, scan the signature and upload the image.
                           </span></li>
                           <li><span class="a-list-item ng-binding">
                               Signature should be legible and in focus.
                           </span></li>
                           <li><span class="a-list-item ng-binding">
                               Only upload JPEG or JPG image format
                           </span></li>
                           
                                
                                
                                    <li><span class="a-list-item ng-binding">
                                        Image size should not exceed 2mb.
                                    </span></li>
                                
                            
                       </ul>
                   </div>
               </div>
               <div data-ng-show="showDigitalSignatureNotCompleted" class="a-box a-alert-inline a-alert-inline-error a-spacing-mini ng-hide" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content ng-binding">
                   Digital Signature not completed
               </div></div></div>
           </div>
           </div>
       </div>
   </div>
</div>

            </div>
        
            
            
            
            <script>
                registerFragment("Quiz_GameBox_138a4d3e-2e71-4a59-8180-330e28db6332", {"responseData":{"shouldHideQuiz":true}});
            </script>
            <div class="a-section a-spacing-base a-spacing-top-base">
                




<div data-ng-controller="quiz-fragment-controller" data-ng-hide="shouldHideQuiz" data-ng-init="init('Quiz_GameBox_138a4d3e-2e71-4a59-8180-330e28db6332')" class="a-section quiz-fragment ng-scope ng-hide">
    <div data-ng-class="{'quiz-box-error': (errorMessage)}" aria-live="polite" class="a-row a-expander-container a-spacing-mini a-spacing-top-small a-expander-section-container a-section-expander-container">
        <a id="quiz-fragment-expander" href="javascript:void(0)" data-action="a-expander-toggle" class="a-expander-header a-declarative a-expander-section-header a-link-section-expander a-size-medium" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;&quot;, &quot;collapse_prompt&quot;:&quot;&quot;}"><i class="a-icon a-icon-section-expand"></i><span class="a-expander-prompt">
            <img alt="" src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel._V192234675_.gif" data-ng-show="isQuizCompleted" data-ng-src="" class="fragment-logo ng-hide">
            <img alt="" src="https://images-na.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel._V192234675_.gif" data-ng-hide="isQuizCompleted" data-ng-src="" class="fragment-logo">
            <span class="a-size-base-plus fragment-heading a-text-bold ng-binding">
                
            </span>
        </span></a>
        <div aria-expanded="false" class="a-expander-content a-expander-inline-content a-expander-inner" style="display:none">
            <div class="a-section a-spacing-top-medium">
                <span data-ng-hide="isQuizCompleted" class="a-size-medium a-color-tertiary ng-binding">
                    
                </span>
                <span data-ng-show="isQuizCompleted" class="a-size-medium a-color-tertiary ng-binding ng-hide">
                    
                </span>
            </div>
            <div class="a-section a-spacing-extra-large button-block">
                <div data-ng-hide="isQuizCompleted" class="a-section">
                    <span class="a-button a-button-primary" id="a-autoid-20"><span class="a-button-inner"><input data-ng-click="redirectToQuiz()" class="a-button-input" type="submit" aria-labelledby="a-autoid-20-announce"><span class="a-button-text ng-binding" aria-hidden="true" id="a-autoid-20-announce">
                        
                    </span></span></span>
                </div>
                <div class="a-section">
                    <span class="a-button" id="a-autoid-21"><span class="a-button-inner"><input data-ng-click="redirectToMagazineArticle()" class="a-button-input" type="submit" aria-labelledby="a-autoid-21-announce"><span class="a-button-text ng-binding" aria-hidden="true" id="a-autoid-21-announce">
                        
                    </span></span></span>
                </div>
            </div>
            <div data-ng-show="errorMessage" class="a-section a-spacing-small ng-hide">
               <div class="a-box a-alert-inline a-alert-inline-error" aria-live="assertive" role="alert"><div class="a-box-inner a-alert-container"><i class="a-icon a-icon-alert"></i><div class="a-alert-content ng-binding">
                   
               </div></div></div>
            </div>
        </div>
    </div>
</div>
            </div>
        
        
        
            
            
                
                    <span class="a-button a-spacing-top-medium a-button-primary launch-submit" id="a-autoid-22"><span class="a-button-inner"><input id="launch-main-button-post-launch" data-ng-click="submit()" class="a-button-input" type="submit" aria-labelledby="a-autoid-22-announce"><span class="a-button-text" aria-hidden="true" id="a-autoid-22-announce"> Launch your business </span></span></span>
                
                
            
        

        
        <div class="a-section a-spacing-medium a-spacing-top-large">
            
               <script>
                   registerFragment("DASHBOARD_BANNER_BC_67635828-f378-41af-bc81-b6c1b3b8b032", {"responseData":{"showFragment":false,"renderConfig":{"DashboardBannerData":{"showBanner":"false","gstGetReadyForGSTHeading":"Get Ready for GST","gstGetReadyForGSTText":"Goods and Services Tax (\"GST\") is proposed to be implemented from 1st July, 2017. Accordingly, Amazon requires you to provide your details such as GSTIN, Digital Image Signature to seamlessly continue selling on Amazon.in","gstURL":"/account-info/tax-details/home?ref=sw_in_dashboard_gst","gstURLText":"Update Now"}}}});
               </script>
               




<div data-ng-controller="dashboard-banner-fragment-controller" data-ng-init="init('DASHBOARD_BANNER_BC_67635828-f378-41af-bc81-b6c1b3b8b032')" data-ng-show="false" class="a-section dashboard-banner-fragment ng-scope ng-hide">
    <div class="a-section">
        <div class="a-box a-alert a-alert-info"><div class="a-box-inner a-alert-container"><h4 class="a-alert-heading ng-binding">Get Ready for GST</h4><i class="a-icon a-icon-alert"></i><div class="a-alert-content">
            <div class="a-section a-spacing-none upload-gst-container">
                <p class="a-spacing-none upload-gst-text ng-binding">
                    Goods and Services Tax ("GST") is proposed to be implemented from 1st July, 2017. Accordingly, Amazon requires you to provide your details such as GSTIN, Digital Image Signature to seamlessly continue selling on Amazon.in
                </p>
                <span class="a-button a-spacing-none dashboard-banner-fragment-update-now aok-align-right aok-float-right" id="a-autoid-23"><span class="a-button-inner"><a href="/account-info/tax-details/home?ref=sw_in_dashboard_gst" class="a-button-text a-text-center ng-binding" role="button" id="a-autoid-23-announce">
                    Update Now
                </a></span></span>
            </div>
        </div></div></div>
    </div>
</div>
            
        </div>

        
        <div class="a-section a-spacing-medium a-spacing-top-large">
            
               <script>
                   registerFragment("Video_Tutorials_BC_67635828-f378-41af-bc81-b6c1b3b8b032", {"responseData":{"videoStrings":{"heading":"Learn how to sell on Amazon","subHeading":"Seller university helps you gain insights on how to sell on Amazon, policies etc.","bottomText":"Explore more videos"},"videoConfig":{"videoTutorials":{"renderConfig":{"headingAltError":"Learn how to sell on Amazon","heading":"lms_str_id:sc_in_ssr_swipe_video_heading","subHeading":"lms_str_id:sc_in_ssr_swipe_video_sub_heading","videoList":"[\"courseId=3&moduleId=10\",\"courseId=3&moduleId=467\"]","bottomLink":"/learn?ref_=su_r2l_dashboard_widget","sellerCentral":"/learn/widget?referral=suw_in_r2l_dashboard&height=240&width=340&","subHeadingAltError":"Seller university helps you gain insights on how to sell on Amazon, policies etc.","logo":"https://images-na.ssl-images-amazon.com/images/G/31/amazonservices/sellercentral/video-tutorials-logo._V294240950_.png","bottomTextAltError":"more videos","blankImage":"https://images-eu.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.gif","bottomText":"lms_str_id:sc_in_ssr_swipe_video_bottom_text"},"validationConfig":{}}}}});
               </script>
               




<div data-ng-controller="video-tutorials-fragment-controller" data-ng-init="init('Video_Tutorials_BC_67635828-f378-41af-bc81-b6c1b3b8b032')" class="a-section video-tutorials-fragment ng-scope">
    
    <img alt="" src="https://images-na.ssl-images-amazon.com/images/G/31/amazonservices/sellercentral/video-tutorials-logo._V294240950_.png" data-ng-src="https://images-na.ssl-images-amazon.com/images/G/31/amazonservices/sellercentral/video-tutorials-logo._V294240950_.png" class="video-tutorials-logo">

    
    <div class="a-section a-spacing-small a-spacing-top-small video-container">
        <h2 class="a-spacing-none a-color-secondary a-text-normal ng-binding">
            Learn how to sell on Amazon
        </h2>
        <p class="a-spacing-none a-size-base a-color-secondary ng-binding">
            Seller university helps you gain insights on how to sell on Amazon, policies etc.
        </p>
        
        <!-- ngRepeat: video in videoIds track by $index --><div data-ng-repeat="video in videoIds track by $index" class="a-section a-spacing-small a-spacing-top-small video ng-scope">
            <iframe ng-src="https://images-eu.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.gif" id="player0" class="video-youtube-iframe" width="340" height="240" scrolling="no" allowfullscreen="true" src="https://images-eu.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.gif">
            </iframe>
        </div><!-- end ngRepeat: video in videoIds track by $index --><div data-ng-repeat="video in videoIds track by $index" class="a-section a-spacing-small a-spacing-top-small video ng-scope">
            <iframe ng-src="https://images-eu.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.gif" id="player1" class="video-youtube-iframe" width="340" height="240" scrolling="no" allowfullscreen="true" src="https://images-eu.ssl-images-amazon.com/images/G/01/x-locale/common/transparent-pixel.gif">
            </iframe>
        </div><!-- end ngRepeat: video in videoIds track by $index -->
        <a class="a-size-base-plus a-link-normal ng-binding" target="_blank" rel="noopener" title="Explore more videos" href="/learn?ref_=su_r2l_dashboard_widget">
            Explore more videos
        </a>
    </div>
</div>
            
        </div>
        
        <div class="a-section a-spacing-medium a-spacing-top-large text-center">
            <a class="a-size-base-plus a-link-normal" target="_blank" rel="noopener" title="Continue to Seller Central" href="/hz/home?ref=sw_in_sc_home"> Continue to Seller Central </a>
        </div>
    </div>
</div>
    </div>
</template>