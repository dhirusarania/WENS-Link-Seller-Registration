<template>
  <div>
    <div class="a-section a-padding-medium auth-workflow">
      <div class="a-section a-spacing-none auth-navbar">
        <div class="a-section a-spacing-medium a-text-center">
          <div
            style="justify-content: center;display: flex;align-items: center;"
          >
            <img
              style="height: 100%;width: 45px;"
              src="~static/dashboard-icon-black.png"
            />
            <p style="margin-left: 15px;font-size:19px;font-weight: bold">
              WENSLink Seller Registration
            </p>
          </div>
        </div>
      </div>

      <div id="authportal-center-section" class="a-section">
        <div id="authportal-main-section" class="a-section">
          <div class="a-section a-spacing-base auth-pagelet-container">
            <div
              id="auth-cookie-warning-message"
              class="a-box a-alert a-alert-warning"
            >
              <div class="a-box-inner a-alert-container">
                <h4 class="a-alert-heading">
                  Please Enable Cookies to Continue
                </h4>
                <i class="a-icon a-icon-alert"></i>
                <div class="a-alert-content">
                  <p>
                    <a
                      class="a-link-normal"
                      href="/gp/help/customer/display.html/ref=ap_cookie_error_help?"
                    >
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="a-section auth-pagelet-container">
            <div class="a-section a-spacing-double-large">
              <div class="a-box a-spacing-base">
                <div class="a-box-inner a-padding-extra-large">
                  <form
                    name="forgotPassword"
                    method="post"
                    novalidate=""
                    class="a-spacing-none fwcim-form"
                    data-fwcim-id="cc18bfc4"
                  >
                    <h1>
                      Set New Password
                    </h1>
                    <div class="a-section a-spacing-large">
                      <label
                        for="ap_email"
                        class="a-form-label"
                        style="padding-top: 10px"
                      >
                        New Password
                      </label>

                      <input
                        v-model="password"
                        type="text"
                        maxlength="128"
                        id="ap_email"
                        name="email"
                        autocomplete="off"
                        tabindex="1"
                        class="a-input-text a-span12 auth-required-field"
                      />
                      <label
                        for="ap_email"
                        class="a-form-label"
                        style="padding-top: 10px"
                      >
                        Confirm Password
                      </label>

                      <input
                        v-model="conf_password"
                        type="text"
                        maxlength="128"
                        id="ap_email"
                        autocomplete="off"
                        name="email"
                        tabindex="1"
                        class="a-input-text a-span12 auth-required-field"
                      />

                      <div
                        id="auth-email-missing-alert"
                        v-if="missing_field"
                        class="a-box a-alert-inline a-alert-inline-error auth-inlined-error-message a-spacing-top-mini"
                        aria-live="assertive"
                        role="alert"
                      >
                        <div class="a-box-inner a-alert-container">
                          <i class="a-icon a-icon-alert"></i>
                          <div class="a-alert-content">
                            Please Enter your Phone number
                          </div>
                        </div>
                      </div>
                    </div>

                    <span
                      class="a-button a-button-span12 a-button-primary"
                      id="a-autoid-0"
                      ><span class="a-button-inner" @click="setnewpassword"
                        ><span
                          class="a-button-text"
                          aria-hidden="true"
                          id="a-autoid-0-announce"
                        >
                          Change Password
                        </span></span
                      ></span
                    >
                  </form>
                </div>
              </div>

              <div class="a-section a-spacing-large hide">
                <h4 id="ap_forgotpassword1A_footer_string_header">
                  Has your email address or mobile phone number changed?
                </h4>
                <p id="ap_forgotpassword1A_footer_string_paragraph">
                  If you no longer use the e-mail address associated with your
                  WENSLink account, you may contact
                  <a
                    href="/gp/help/customer/account-issues/ref=ap_cs_forgot_pwd?ie=UTF8"
                    >Customer Service</a
                  >
                  for help restoring access to your account.
                </p>
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
          <span class="a-size-mini a-color-secondary"
            >© 1996-2019, WENSLink.com, Inc. or its affiliates</span
          >
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
      mobile: null,
      conf_password: '',
      password: '',
      missing_field: false,
      is_otp_sent: false,
      phone_number: localStorage.getItem('phone_number'),
      regex_mobile: /\+?\d[\d -]{8,8}\d/
    }
  },
  methods: {
    setnewpassword: function() {
      if (this.password == this.conf_password) {
        if (this.otp != '') {
          var payload = new FormData()

          payload.append('phone_number', this.phone_number)
          payload.append('password', this.password)

          this.$store.dispatch('changepassword', payload).then(res => {
            alert('Password Changed. Please login')
            this.$router.push('/')
          })
        }
      } else {
        alert("Password Doesn't Match")
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
          if (res.data.status == '200') {
            this.$router.push('/forget_verify')
          }
          this.is_otp_sent = true
        })
        .catch(err => {
          console.log('error in request', err)
        })
    },
    isValid: function(type) {
      switch (type) {
        case 'mobile':
          return this.mobile == null
            ? ''
            : this.regex_mobile.test(this.mobile)
            ? 'has-success'
            : 'has-error'

          break
      }
    }
  }
}
</script>
