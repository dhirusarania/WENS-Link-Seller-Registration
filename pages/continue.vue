<template>
  <div>
    <div class="a-box encapsulating-div">
      <div class="a-box-inner">
        <div class="a-box header_logo_desk">
          <div class="a-box-inner">
            <div style="    display: flex;
    align-items: center;">
              <img
                src="~static/dashboard-icon-black.png"
                style="height: 75px;padding-bottom: 10px; object-fit:contain"
                class="company_logo"
              />
              <h4 style="padding-left: 10px" class="margin-top-10">WENSLink Seller Registration</h4>
            </div>
          </div>
        </div>

        <div class="a-box seller_message_box">
          <div class="a-box-inner">
            <h1>Register and Start Selling</h1>
            <p class="seller_message_p"></p>
            <p>Please have the following ready before you begin:</p>
            <ul>
              <li>Your bank account details for receiving payments from WENSLink</li>
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
                              class="a-input-text address-textbox ng-scope ng-pristine ng-invalid ng-invalid-required"
                              v-model="email"
                              :class="['input-group', isEmailValid()]"
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

                          <div class="a-section a-spacing-top-micro">
                            <div class="a-checkbox a-checkbox-fancy agreementCheckbox ng-scope">
                              <label style="display:flex">
                                <input
                                  type="checkbox"
                                  style="opacity: 1;z-index: 5"
                                  v-model="isSelected"
                                />
                                <span class="a-label a-checkbox-label">
                                  <span class="a-size-base ng-binding">
                                    I have read and agree to comply with and/or be bound by the terms and conditions of
                                    <span
                                      data-ng-show="true"
                                      class
                                    >
                                      <a @click="openLink('/legal/returnpolicy')"
                                        class="ng-binding"
                                      >WENSLink Seller Agreement</a> and
                                      <a @click="openLink('/legal/returnpolicy')"
                                      >WENSLink Return Policy</a>
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
                    <button
                      type="button"
                      @click="changeCompany"
                      :disabled="!isAllowed"
                      id="auth-continue-announce"
                      class="a-button-text btn"
                      aria-hidden="true"
                    >Continue</button>
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
                <nuxt-link
                  class="a-size-base-plus a-link-normal link_color_legal ng-binding"
                  target="_blank"
                  rel="noopener"
                  title="Click here"
                  to="/register_account"
                >Click here</nuxt-link>
              </div>
            </div>

            <div class="a-section a-spacing-medium a-spacing-top-large text-center">
              <nuxt-link
                class="a-size-base-plus a-link-normal link_color_legal"
                target="_blank"
                rel="noopener"
                title="Privacy Notice"
                to="/legal/privacy"
              >Privacy Notice</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  data() {
    return {
      otp: null,
      phone_number: localStorage.getItem('phone'),
      isSelected: false,
      email: '',
      isAllowed: false,
      regex: /^(?!\s)(?!.*\s$)(?=.*[a-zA-Z0-9])[a-zA-Z0-9 '~?!]{3,}$/
    }
  },

  mounted() {
    this.$store.dispatch('getStep')
  },

  watch: {
    isSelected: function() {
      this.verify()
    },
    email: function() {
      this.verify()
    }
  },

  methods: {
    openLink: function(url) {
      window.open(url, 'newwindow', 'width=500,height=500')
    },
    verify: function() {
      if (this.regex.test(this.email) && this.isSelected == true) {
        this.isAllowed = true
      } else {
        this.isAllowed = false
      }
    },
    changeCompany: function() {
      if (this.regex.test(this.email) && this.isSelected == true) {
        var payload = new FormData()

        payload.append('company_name', this.email)

        axios({
          method: 'PUT',
          data: payload,
          url: this.$store.state.api.company_name,
          contentType: 'application/json',
          headers: {
            Authorization: 'Bearer ' + this.$cookies.get('access_token')
          },
          data: payload
        })
          .then(res => {
            console.log(res.data)
            console.log('response')
            localStorage.setItem('business_name', $('#ln_legal_name').val())
            this.$router.push('/launch/register')
          })
          .catch(err => {
            console.log('error in request', err)
          })
      }
    },
    isEmailValid: function() {
      return this.email == ''
        ? ''
        : this.regex.test(this.email)
        ? 'has-success'
        : 'has-error'
    }
  }
}
</script>
<style scoped>
/* .disabled{
  color
} */

.btn {
  background: linear-gradient(to bottom, #a8f5ff, #9bd3ff);
}

.a-checkbox.a-checkbox-fancy input,
.a-radio.a-radio-fancy input {
  top: 4px;
}
</style>