<template>
  <div>
    <div class="a-box encapsulating-div">
      <div class="a-box-inner">
        <div class="a-box header_logo_desk">
          <div class="a-box-inner">
            <img src />
          </div>
        </div>

        <div class="a-box seller_message_box">
          <div class="a-box-inner">
            <h1>Register and Start Selling</h1>
            <p class="seller_message_p"></p>
            <p>Please have the following ready before you begin:</p>
            <ul>
              <li>Your bank account details for receiving payments from Amazon</li>
              <li>Tax (GST/PAN) details of your business</li>
            </ul>
            <br />
            <p>Please ensure that all the information you submit is accurate.</p>
            <p></p>
          </div>
        </div>

        <div class="a-box noBorder pv_box" role="form">
          <div class="a-box-inner">
            <p
              class="a-text-left a-size-large a-text-bold"
            >Enter details below to continue registration</p>
            <div class="a-section a_box_desk">
              <div class="a-row a-ws-row">
                <div class="a-column a-span12">
                  <div class="a-section">
                    <form
                      name="legalNameFragment"
                      class="ng-pristine ng-invalid ng-invalid-required"
                    >
                      <div
                        data-ng-controller="legal-name-fragment-controller"
                        data-ng-init="init('Legal_Name_BC_67635828-f378-41af-bc81-b6c1b3b8b032')"
                        class="a-section ng-scope"
                      >
                        <div class="a-section">
                          <div
                            class="a-section a-spacing-none address-inputName ng-binding"
                          >Company/Business name</div>
                          <div class="a-section a-spacing-micro">
                            <input
                              type="text"
                              maxlength="50"
                              id="ln_legal_name"
                              placeholder
                              name="ln_legal_name"
                              class="a-input-text address-textbox ng-scope ng-pristine ng-invalid ng-invalid-required"
                              data-ng-class="{'a-form-error':!!fragmentData.ln_legal_name.legal_field_error,
                                             'a-form-disabled':legalNameDisable }"
                              data-ng-disabled
                              data-ng-focus="clearError()"
                              data-ng-model="fragmentData.ln_legal_name.renderConfig.ln_value"
                              data-ng-required="true"
                              required="required"
                            />
                          </div>

                          <p
                            class="a-text-left a-size-mini a-color-secondary"
                          >Enter the company/business name as registered in GST/PAN</p>
                        </div>
                      </div>
                    </form>

                    <div
                      data-ng-controller="agreement-fragment-controller"
                      data-ng-init="init('Agreement_BC_67635828-f378-41af-bc81-b6c1b3b8b032')"
                      class="a-section ng-scope"
                    >
                      <div class="a-box a-width-extra-large noBorder width-100" role="checkbox">
                        <div class="a-box-inner a-padding-none">
                          <div class="a-section a-spacing-micro">
                            <span class="a-size-base a-text-bold ng-binding">Seller Agreement</span>
                            <!-- ngIf: fragmentData.showMandatory -->
                          </div>

                          <div
                            data-ng-show="agreementSelected.errorIsNotSelected"
                            class="a-box a-alert-inline a-alert-inline-error ng-hide"
                            aria-live="assertive"
                            role="alert"
                          >
                            <div class="a-box-inner a-alert-container hide">
                              <i class="a-icon a-icon-alert"></i>
                              <div class="a-alert-content ng-binding">You must accept the agreement.</div>
                            </div>
                          </div>

                          <div class="a-section a-spacing-top-micro">
                            <div class="a-checkbox a-checkbox-fancy agreementCheckbox ng-scope">
                              <label style="display:flex">
                                <input type="checkbox" style="opacity: 1;z-index: 5" />
                                <span class="a-label a-checkbox-label">
                                  <span class="a-size-base ng-binding">
                                    I have read and agree to comply with and/or be bound by the terms and conditions of
                                    <span
                                      data-ng-show="true"
                                      class
                                    >
                                      <a
                                        target="_blank"
                                        href="https://sellercentral.amazon.in/gp/on-board/help-content.html?ie=UTF8&amp;agreementID=&amp;hasCloseButton=1&amp;hasPrintButton=1&amp;helpNodeID=1791&amp;invitationID=&amp;isOnlineMapa=&amp;mapaAcceptanceDate=&amp;repeatButtonsAtEnd=1&amp;showTitles=1&amp;tokens=agreement.MERCHANT_SILVER&amp;marketplaceID=A21TJRUUN4KGV&amp;localizationKey=A21TJRUUN4KGV"
                                        class="ng-binding"
                                      >Amazon Services Business Solutions Agreement</a>
                                      ,
                                      <a
                                        target="_blank"
                                        href="https://sellercentral.amazon.in/gp/help/help.html/?itemID=G201439100&amp;ref_=xx_G201439100_h_r0_cont_sgsearch"
                                        class="ng-binding"
                                      >Easy Ship Service &amp; Runway Terms and Conditions</a>
                                      and
                                      <a
                                        target="_blank"
                                        href="https://sellercentral.amazon.in/gp/help/external/G74V5YKB5ASNF3V8"
                                        class="ng-binding"
                                      >Amazon Business (B2B) Terms &amp; Conditions</a>
                                    </span>
                                  </span>
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      data-ng-controller="associatesellerreferralpublisher-fragment-controller"
                      data-ng-init="init('Associate_Seller_Referral_Publisher_BC_b81c3064-bd31-4f54-90d8-08234427cdd7')"
                      class="ng-scope"
                    ></div>
                  </div>
                </div>
              </div>

              <div class="a-section">
                <span class="a-button continue_b_legal" id="a-autoid-0">
                  <span class="a-button-inner">
                    <nuxt-link
                      to="/register"
                      id="auth-continue-announce"
                      class="a-button-text"
                      aria-hidden="true"
                    >Continue</nuxt-link>
                  </span>
                </span>
              </div>
            </div>

            <div
              data-ng-controller="create-account-fragment-controller"
              data-ng-init="init('Create_Account_BC_3a1ded9882b8106823e37b41f7c83b635f2f181d')"
              class="a-section create-account-fragment ng-scope"
            >
              <div class="a-section a-spacing-medium a-spacing-top-large text-left ng-binding">
                Like to create new account?
                <a
                  class="a-size-base-plus a-link-normal link_color_legal ng-binding"
                  target="_blank"
                  rel="noopener"
                  title="Click here"
                  href="https://sellercentral.amazon.in/ap/register?openid.return_to=https%3A%2F%2Fsellercentral.amazon.in%2Fsw%2Fin%2FINSSR%2Fstep%2FSignUp%3Fpassthrough%252Faccount%3Dsoa%26passthrough%252FsuperSource%3DOAR%26ref_%3Das_in_soa_hp%26passthrough%252FmarketplaceID%3DA21TJRUUN4KGV%26passthrough%252F%26productTier%3DSILVER%26productType%3DSellOnAmazon%26marketplaceId%3DA21TJRUUN4KGV%26passthrough%252Ftag%3DREDIRECTT1%26redirectAP%3D1%26%26redirectAP%3D1&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.assoc_handle=amzn_sw_signup_in&amp;openid.mode=checkid_setup&amp;marketPlaceId=A21TJRUUN4KGV&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;"
                >Click here</a>
              </div>
            </div>

            <div class="a-section a-spacing-medium a-spacing-top-large text-center">
              <a
                class="a-size-base-plus a-link-normal link_color_legal"
                target="_blank"
                rel="noopener"
                title="Privacy Notice"
                href="http://www.amazon.in/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&amp;nodeId=200534380&amp;ld=ASINSOADirect"
              >Privacy Notice</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>