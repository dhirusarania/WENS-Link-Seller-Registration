<template>
  <div>
    <div class="a-section a-padding-medium auth-workflow">
      <div class="a-section a-spacing-none auth-navbar">
        <div class="a-section a-spacing-medium a-text-center">
          <div style="justify-content: center;display: flex;align-items: center;">
            <img style="height: 100%;width: 45px;" src="~static/dashboard-icon-black.png" />
            <p
              style="margin-left: 15px;font-size:19px;font-weight: bold"
            >WENS Link Seller Registration</p>
          </div>
        </div>
      </div>

      <div id="authportal-center-section" class="a-section">
        <div id="authportal-main-section" class="a-section">
          <div class="a-section a-spacing-base auth-pagelet-container">
            <div id="auth-cookie-warning-message" class="a-box a-alert a-alert-warning">
              <div class="a-box-inner a-alert-container">
                <h4 class="a-alert-heading">Please Enable Cookies to Continue</h4>
                <i class="a-icon a-icon-alert"></i>
                <div class="a-alert-content">
                  <p>
                    <a
                      class="a-link-normal"
                      href="/gp/help/customer/display.html/ref=ap_cookie_error_help?"
                    ></a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="a-section auth-pagelet-container">
            <div class="a-section auth-pagelet-container">
              <div v-if="error"
                class="a-box a-alert a-alert-error auth-client-side-message-box a-spacing-base"
                aria-live="assertive"
                role="alert"
              >
                <div class="a-box-inner a-alert-container">
                  <h4 class="a-alert-heading">There was a problem</h4>
                  <i class="a-icon a-icon-alert"></i>
                  <div class="a-alert-content">
                    <ul
                      class="a-unordered-list a-vertical a-spacing-none auth-pv-client-side-error-messages"
                    >
                      <li id="auth-there-was-an-error-throttled">
                        <span
                          class="a-list-item"
                        >{{message}}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div
                v-if="is_otp_sent"
                class="a-box a-alert a-alert-success auth-client-side-message-box a-spacing-base"
              >
                <div class="a-box-inner a-alert-container">
                  <h4 class="a-alert-heading">Success</h4>
                  <i class="a-icon a-icon-alert"></i>
                  <div class="a-alert-content">
                    <ul
                      class="a-unordered-list a-nostyle a-vertical a-spacing-none auth-pv-client-side-success-messages"
                    >
                      <li id="auth-resend-code-succeeded">
                        <span class="a-list-item">We've sent a new code by text message.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="a-box a-spacing-extra-large">
                <div class="a-box-inner">
                  <p></p>
                  <h1>Verify mobile number</h1>
                  <p></p>

                  <p>
                    A text with a One Time Password (OTP) has been sent to your mobile number:
                    <span
                      class="a-text-bold"
                    >{{phone_number}}</span>
                  </p>

                  <div class="a-row a-spacing-top-large">
                    <div class="a-column a-span5">
                      <label for="auth-pv-enter-code" class="a-form-label">Enter OTP:</label>
                    </div>
                    <div class="a-column a-span5 a-text-right a-span-last">
                      <form
                        v-if="!is_otp_sent"
                        id="auth-resend-form"
                        method="post"
                        action
                        class="a-spacing-mini"
                      >
                        <a @click="resendOTP" href="#">Resend OTP</a>
                      </form>
                    </div>
                  </div>

                  <form id="auth-pv-form" method="post" action="/ap/pv" class="a-spacing-none">
                    <input
                      type="hidden"
                      name="appActionToken"
                      value="LITpBLbsWtMtWlstyjFtFF9D8Ywj3D"
                    />
                    <input type="hidden" name="appAction" value="PHONE_VERIFICATION" />

                    <input type="hidden" name="prevRID" value="ape:U1RXM1dDMUNGWk1LNFFIWEVSVzI=" />

                    <input
                      type="hidden"
                      name="workflowState"
                      value="eyJ6aXAiOiJERUYiLCJlbmMiOiJBMjU2R0NNIiwiYWxnIjoiQTI1NktXIn0.8XFdDVd9hYC2luKwriDfs7cVE8bJHOOg1sHOo_jE1RQIzVyBcvztdw.EA9-tOsju15ubi7H.jlEKiEpV0zhg9Wji8pPzL9owiXu0Ngh64yZnJAmQvfCXpLJH5v1zzeBJ3Gu7jjKxxwSSjpVlfh5I8GseirlczqZZP8gp_OWnzmDkIfReC_7AsQX8K56WmIj0jtqZxxiTInnF6aY9E-1PmLoF85YC-Ks5KqV6y25iNWzZjNC__pLfePw4vl66L5jw9d1JqwTjRZVtLZlSZOWCPUVoqnEG_w.v4JeT1_DqZ7V28Ohq5KnNQ"
                    />

                    <div></div>
                    <input
                      type="tel"
                      maxlength="6"
                      id="auth-pv-enter-code"
                      v-model="otp"
                      autocomplete="off"
                      name="code"
                      class="a-input-text a-span12 a-spacing-medium auth-autofocus auth-required-field"
                    />

                    <span
                      class="a-button a-spacing-medium a-button-span12 a-button-primary"
                      id="a-autoid-0"
                    >
                      <span class="a-button-inner" @click="createAccount">
                        <span
                          class="a-button-text"
                          aria-hidden="true"
                          id="a-autoid-0-announce"
                        >Create your WENS Link account</span>
                      </span>
                    </span>

                    <div class="a-section a-spacing-base">
                      <div id="legalTextRow" class="a-row a-spacing-top-medium a-size-small">
                        By creating an account or logging in, you agree to WENS Link’s
                        <a
                          href="/gp/help/customer/display.html/ref=ap_phoneverification_notification_condition_of_use?ie=UTF8&amp;nodeId=200545940"
                        >Conditions of Use</a> and
                        <a
                          href="/gp/help/customer/display.html/ref=ap_phoneverification_notification_privacy_notice?ie=UTF8&amp;nodeId=200534380"
                        >Privacy Policy</a>.
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="right-2"></div>

      <div class="a-section a-spacing-top-extra-large auth-footer">
        <div class="a-divider a-divider-section">
          <div class="a-divider-inner"></div>
        </div>

        <div class="a-section a-spacing-small a-text-center a-size-mini">
          <span class="auth-footer-seperator"></span>
        </div>

        <div class="a-section a-spacing-none a-text-center">
          <span
            class="a-size-mini a-color-secondary"
          >© 1996-2019, WENS Link.com, Inc. or its affiliates</span>
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
      error: false,
      message: "",
      is_otp_sent: false,
      phone_number: localStorage.getItem('phone_number')
    }
  },
  methods: {
    createAccount: function() {


      if(this.otp != ""){


        this.is_otp_sent = false

      var payload = new FormData()

      payload.append('phone_number', this.phone_number)
      payload.append('OTP', this.otp)

      axios({
        method: 'PUT',
        data: payload,
        url: this.$store.state.api.otp_verify,
        contentType: 'application/json',
        data: payload
      })
        .then(res => {
          console.log(res.data)
          console.log('response')
          if (res.data.status == 200) {
            localStorage.setItem('phone_number', this.phone_number)
            localStorage.setItem('user_id', res.data.user_id)
            this.$router.push('/continue')
          }
        })
        .catch(err => {
          console.log('error in request', err)
          this.error = true
          this.message = err.response.data.message
        })
      }
    },
    resendOTP: function() {
      var payload = new FormData()

      payload.append('phone_number', this.phone_number)
      axios({
        method: 'PUT',
        data: payload,
        url: this.$store.state.api.resendOTP,
        contentType: 'application/json',
        data: payload
      })
        .then(res => {
          console.log(res.data)
          console.log('response')
          this.is_otp_sent = true
        })
        .catch(err => {
          this.error = false
          console.log('error in request', err)
        })
    }
  }
}
</script>

