<template>
    <div class="a-section aside">
        <div class="a-section a-spacing-medium">
     



<div data-ng-controller="faq-fragment-controller" data-ng-init="init('Faq_BC_327cc6ac31fe30e03d622b0681021ad9')" class="a-section faq-fragment ng-scope">

    <h3 class="a-spacing-small a-color-secondary a-text-normal ng-binding">
        FAQ
    </h3>

    
    <!-- ngRepeat: businessConcept in fragmentData.businessConcepts --><div data-ng-repeat="businessConcept in fragmentData.businessConcepts" class="a-section a-spacing-none ng-scope">
        <!-- ngRepeat: question in fragmentData.faq[businessConcept] --><div data-ng-repeat="question in fragmentData.faq[businessConcept]" class="a-section a-spacing-none ng-scope">
            <!-- ngIf: isValid(question) --><span data-ng-if="isValid(question)" class="ng-scope">
                <div aria-live="polite" class="a-row a-expander-container a-expander-inline-container">
                    <a href="javascript:void(0)" data-action="a-expander-toggle" class="a-expander-header a-declarative a-expander-inline-header a-link-expander" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;&quot;, &quot;collapse_prompt&quot;:&quot;&quot;}"><i class="a-icon a-icon-expand"></i><span class="a-expander-prompt ng-binding">
                        Can I change Store Name?
                    </span></a>
                    <div aria-expanded="false" class="a-expander-content a-expander-inline-content a-expander-inner ng-binding" style="overflow: hidden; display: none;">
                        When you register to sell on WENS Link, you are required to provide basic information about your business. You can change this information or add additional information through the Account Info area in your Seller Account.
                    </div>
                </div>
                <hr class="a-spacing-small a-spacing-top-small a-divider-normal">
            </span><!-- end ngIf: isValid(question) -->
        </div><!-- end ngRepeat: question in fragmentData.faq[businessConcept] --><div data-ng-repeat="question in fragmentData.faq[businessConcept]" class="a-section a-spacing-none ng-scope">
            <!-- ngIf: isValid(question) --><span data-ng-if="isValid(question)" class="ng-scope">
                <div aria-live="polite" class="a-row a-expander-container a-expander-inline-container">
                    <a href="javascript:void(0)" data-action="a-expander-toggle" class="a-expander-header a-declarative a-expander-inline-header a-link-expander" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;&quot;, &quot;collapse_prompt&quot;:&quot;&quot;}"><i class="a-icon a-icon-expand"></i><span class="a-expander-prompt ng-binding">
                        Can I change the category later?
                    </span></a>
                    <div aria-expanded="false" class="a-expander-content a-expander-inline-content a-expander-inner ng-binding" style="display:none">
                        Yes, you have the option to update the category later. 
                    </div>
                </div>
                <hr class="a-spacing-small a-spacing-top-small a-divider-normal">
            </span><!-- end ngIf: isValid(question) -->
        </div><!-- end ngRepeat: question in fragmentData.faq[businessConcept] --><div data-ng-repeat="question in fragmentData.faq[businessConcept]" class="a-section a-spacing-none ng-scope">
            <!-- ngIf: isValid(question) --><span data-ng-if="isValid(question)" class="ng-scope">
                <div aria-live="polite" class="a-row a-expander-container a-expander-inline-container">
                    <a href="javascript:void(0)" data-action="a-expander-toggle" class="a-expander-header a-declarative a-expander-inline-header a-link-expander" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;&quot;, &quot;collapse_prompt&quot;:&quot;&quot;}"><i class="a-icon a-icon-expand"></i><span class="a-expander-prompt ng-binding">
                        Which address should I enter?
                    </span></a>
                    <div aria-expanded="false" class="a-expander-content a-expander-inline-content a-expander-inner ng-binding" style="display:none">
                        Please enter permanent business address where your business conducts its operations. This address should be associated with your GST registration number and will be used as the primary billing address.


                    </div>
                </div>
                <hr class="a-spacing-small a-spacing-top-small a-divider-normal">
            </span><!-- end ngIf: isValid(question) -->
        </div><!-- end ngRepeat: question in fragmentData.faq[businessConcept] --><div data-ng-repeat="question in fragmentData.faq[businessConcept]" class="a-section a-spacing-none ng-scope">
            <!-- ngIf: isValid(question) --><span data-ng-if="isValid(question)" class="ng-scope">
                <div aria-live="polite" class="a-row a-expander-container a-expander-inline-container">
                    <a href="javascript:void(0)" data-action="a-expander-toggle" class="a-expander-header a-declarative a-expander-inline-header a-link-expander" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;&quot;, &quot;collapse_prompt&quot;:&quot;&quot;}"><i class="a-icon a-icon-expand"></i><span class="a-expander-prompt ng-binding">
                        What products are not supported by WENS Link Easy Ship?
                    </span></a>
                    <div aria-expanded="false" class="a-expander-content a-expander-inline-content a-expander-inner ng-binding" style="display:none">
                        Currently orders for oversized items and buyer addresses that do not fall in the Easy Ship coverage area is not covered by WENS Link Easy Ship.
                    </div>
                </div>
                <hr class="a-spacing-small a-spacing-top-small a-divider-normal">
            </span><!-- end ngIf: isValid(question) -->
        </div><!-- end ngRepeat: question in fragmentData.faq[businessConcept] --><div data-ng-repeat="question in fragmentData.faq[businessConcept]" class="a-section a-spacing-none ng-scope">
            <!-- ngIf: isValid(question) -->
        </div><!-- end ngRepeat: question in fragmentData.faq[businessConcept] -->
    </div><!-- end ngRepeat: businessConcept in fragmentData.businessConcepts --><div data-ng-repeat="businessConcept in fragmentData.businessConcepts" class="a-section a-spacing-none ng-scope">
        <!-- ngRepeat: question in fragmentData.faq[businessConcept] --><div data-ng-repeat="question in fragmentData.faq[businessConcept]" class="a-section a-spacing-none ng-scope">
            <!-- ngIf: isValid(question) --><span data-ng-if="isValid(question)" class="ng-scope">
                <div aria-live="polite" class="a-row a-expander-container a-expander-inline-container">
                    <a href="javascript:void(0)" data-action="a-expander-toggle" class="a-expander-header a-declarative a-expander-inline-header a-link-expander" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;&quot;, &quot;collapse_prompt&quot;:&quot;&quot;}"><i class="a-icon a-icon-expand"></i><span class="a-expander-prompt ng-binding">
                        My Address is not eligible for WENS Link Easy Ship, what should I do?
                    </span></a>
                    <div aria-expanded="false" class="a-expander-content a-expander-inline-content a-expander-inner ng-binding" style="display:none">
                        If you have an alternate pickup address, you can register that. Else, you can select "Ship using your own courier" option.
                    </div>
                </div>
                <hr class="a-spacing-small a-spacing-top-small a-divider-normal">
            </span><!-- end ngIf: isValid(question) -->
        </div><!-- end ngRepeat: question in fragmentData.faq[businessConcept] --><div data-ng-repeat="question in fragmentData.faq[businessConcept]" class="a-section a-spacing-none ng-scope">
            <!-- ngIf: isValid(question) -->
        </div><!-- end ngRepeat: question in fragmentData.faq[businessConcept] --><div data-ng-repeat="question in fragmentData.faq[businessConcept]" class="a-section a-spacing-none ng-scope">
            <!-- ngIf: isValid(question) -->
        </div><!-- end ngRepeat: question in fragmentData.faq[businessConcept] --><div data-ng-repeat="question in fragmentData.faq[businessConcept]" class="a-section a-spacing-none ng-scope">
            <!-- ngIf: isValid(question) -->
        </div><!-- end ngRepeat: question in fragmentData.faq[businessConcept] --><div data-ng-repeat="question in fragmentData.faq[businessConcept]" class="a-section a-spacing-none ng-scope">
            <!-- ngIf: isValid(question) -->
        </div><!-- end ngRepeat: question in fragmentData.faq[businessConcept] -->
    </div><!-- end ngRepeat: businessConcept in fragmentData.businessConcepts --><div data-ng-repeat="businessConcept in fragmentData.businessConcepts" class="a-section a-spacing-none ng-scope">
        <!-- ngRepeat: question in fragmentData.faq[businessConcept] -->
    </div><!-- end ngRepeat: businessConcept in fragmentData.businessConcepts --><div data-ng-repeat="businessConcept in fragmentData.businessConcepts" class="a-section a-spacing-none ng-scope">
        <!-- ngRepeat: question in fragmentData.faq[businessConcept] --><div data-ng-repeat="question in fragmentData.faq[businessConcept]" class="a-section a-spacing-none ng-scope">
            <!-- ngIf: isValid(question) -->
        </div><!-- end ngRepeat: question in fragmentData.faq[businessConcept] --><div data-ng-repeat="question in fragmentData.faq[businessConcept]" class="a-section a-spacing-none ng-scope">
            <!-- ngIf: isValid(question) -->
        </div><!-- end ngRepeat: question in fragmentData.faq[businessConcept] --><div data-ng-repeat="question in fragmentData.faq[businessConcept]" class="a-section a-spacing-none ng-scope">
            <!-- ngIf: isValid(question) -->
        </div><!-- end ngRepeat: question in fragmentData.faq[businessConcept] --><div data-ng-repeat="question in fragmentData.faq[businessConcept]" class="a-section a-spacing-none ng-scope">
            <!-- ngIf: isValid(question) -->
        </div><!-- end ngRepeat: question in fragmentData.faq[businessConcept] --><div data-ng-repeat="question in fragmentData.faq[businessConcept]" class="a-section a-spacing-none ng-scope">
            <!-- ngIf: isValid(question) -->
        </div><!-- end ngRepeat: question in fragmentData.faq[businessConcept] -->
    </div><!-- end ngRepeat: businessConcept in fragmentData.businessConcepts --><div data-ng-repeat="businessConcept in fragmentData.businessConcepts" class="a-section a-spacing-none ng-scope">
        <!-- ngRepeat: question in fragmentData.faq[businessConcept] -->
    </div><!-- end ngRepeat: businessConcept in fragmentData.businessConcepts --><div data-ng-repeat="businessConcept in fragmentData.businessConcepts" class="a-section a-spacing-none ng-scope">
        <!-- ngRepeat: question in fragmentData.faq[businessConcept] --><div data-ng-repeat="question in fragmentData.faq[businessConcept]" class="a-section a-spacing-none ng-scope">
            <!-- ngIf: isValid(question) --><span data-ng-if="isValid(question)" class="ng-scope">
                <div aria-live="polite" class="a-row a-expander-container a-expander-inline-container">
                    <a href="javascript:void(0)" data-action="a-expander-toggle" class="a-expander-header a-declarative a-expander-inline-header a-link-expander" data-a-expander-toggle="{&quot;allowLinkDefault&quot;:true, &quot;expand_prompt&quot;:&quot;&quot;, &quot;collapse_prompt&quot;:&quot;&quot;}"><i class="a-icon a-icon-expand"></i><span class="a-expander-prompt ng-binding">
                        Can I enter multiple pickup addresses?
                    </span></a>
                    <div aria-expanded="false" class="a-expander-content a-expander-inline-content a-expander-inner ng-binding" style="display:none">
                        WENS Link Easy Ship currently do not support multiple pickup address. Please enter your primary pickup address.
                    </div>
                </div>
                <hr class="a-spacing-small a-spacing-top-small a-divider-normal">
            </span><!-- end ngIf: isValid(question) -->
        </div><!-- end ngRepeat: question in fragmentData.faq[businessConcept] --><div data-ng-repeat="question in fragmentData.faq[businessConcept]" class="a-section a-spacing-none ng-scope">
            <!-- ngIf: isValid(question) -->
        </div><!-- end ngRepeat: question in fragmentData.faq[businessConcept] --><div data-ng-repeat="question in fragmentData.faq[businessConcept]" class="a-section a-spacing-none ng-scope">
            <!-- ngIf: isValid(question) -->
        </div><!-- end ngRepeat: question in fragmentData.faq[businessConcept] --><div data-ng-repeat="question in fragmentData.faq[businessConcept]" class="a-section a-spacing-none ng-scope">
            <!-- ngIf: isValid(question) -->
        </div><!-- end ngRepeat: question in fragmentData.faq[businessConcept] --><div data-ng-repeat="question in fragmentData.faq[businessConcept]" class="a-section a-spacing-none ng-scope">
            <!-- ngIf: isValid(question) -->
        </div><!-- end ngRepeat: question in fragmentData.faq[businessConcept] -->
    </div><!-- end ngRepeat: businessConcept in fragmentData.businessConcepts -->

</div>

            
        </div>
        <div class="a-section">
            
            
                


    

            
        </div>
    </div>
</template>