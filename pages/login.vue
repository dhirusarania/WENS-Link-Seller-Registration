<template>
  <div>
    <div id="a-page">
      <div class="a-section a-padding-medium auth-workflow">
        <div class="a-section a-spacing-none auth-navbar">
          <div class="a-section a-spacing-medium a-text-center">
            <div class="center-align">
              <img
                src="~static/dashboard-icon-black.png"
                style="height: 45px;padding-bottom: 10px"
                class="company_logo"
              />
              <p class="margin-top-10">WENSLink Seller Registration</p>
            </div>
          </div>
        </div>

        <div id="authportal-center-section" class="a-section">
          <div id="authportal-main-section" class="a-section">
            <div v-if="isError" class="a-section a-spacing-base auth-pagelet-container">
              <div class="a-section">
                <div
                  id="auth-warning-message-box"
                  class="a-box a-alert a-alert-warning auth-server-side-message-box a-spacing-base"
                >
                  <div class="a-box-inner a-alert-container">
                    <h4 class="a-alert-heading">Error</h4>
                    <i class="a-icon a-icon-alert"></i>
                    <div class="a-alert-content">
                      <ul class="a-unordered-list a-nostyle a-vertical a-spacing-none">
                        <li>
                          <span class="a-list-item">{{error_message}}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="a-section auth-pagelet-container">
              <!-- Set cross domain sso variables to be used for making Ajax calls to central Identity domain -->

              <!-- Set cross domain sso variables to be used for making Ajax calls to central Identity domain -->

              <!-- show a warning modal dialog when the third party account is connected with WENSLink -->

              <div class="a-section a-spacing-base">
                <div class="a-section">
                  <form
                    name="signIn"
                    method="post"
                    novalidate
                    action="https://sellercentral.WENSLink.in/ap/signin"
                    class="a-spacing-none fwcim-form"
                    data-fwcim-id="dd379249"
                  >
                    <div class="a-section">
                      <div class="a-box">
                        <div class="a-box-inner a-padding-extra-large">
                          <h1 class="a-spacing-small">Login</h1>
                          <!-- optional subheading element -->

                          <div class="a-row a-spacing-base">
                            <label for="ap_email" class="a-form-label">Phone Number</label>

                            <input
                              type="number"
                              id="ap_email"
                              @input="checkLength('#ap_email', 10)"
                              name="email"
                              tabindex="1"
                              class="a-input-text a-span12 auth-autofocus auth-required-field"
                            />

                            <div
                              id="auth-email-missing-alert"
                              class="a-box a-alert-inline a-alert-inline-error auth-inlined-error-message a-spacing-top-mini"
                              aria-live="assertive"
                              role="alert"
                            >
                              <div class="a-box-inner a-alert-container">
                                <i class="a-icon a-icon-alert"></i>
                                <div class="a-alert-content">Enter your email or mobile phone number</div>
                              </div>
                            </div>
                          </div>

                          <input type="hidden" name="create" value="0" />

                          <div class="a-section a-spacing-large">
                            <div class="a-row">
                              <div class="a-column a-span5">
                                <label for="ap_password" class="a-form-label">Password</label>
                              </div>

                              <!-- <div class="a-column a-span7 a-text-right a-span-last">
                                <a
                                  id="auth-fpp-link-bottom"
                                  class="a-link-normal"
                                  tabindex="3"
                                  href="https://sellercentral.WENSLink.in/ap/forgotpassword?showRememberMe=true&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;marketPlaceId=A21TJRUUN4KGV&amp;pageId=amzn_sw_signup_in&amp;openid.return_to=https%3A%2F%2Fsellercentral.WENSLink.in%2Fsw%2Fin%2FINSSR%2Fstep%2FSignUp%3Fpassthrough%252Faccount%3Dsoa%26passthrough%252FsuperSource%3DOAR%26ref_%3Das_in_soa_hp%26passthrough%252FmarketplaceID%3DA21TJRUUN4KGV%26passthrough%252F%26productTier%3DSILVER%26productType%3DSellOnWENSLink%26marketplaceId%3DA21TJRUUN4KGV%26passthrough%252Ftag%3DREDIRECTT1%26redirectAP%3D1&amp;prevRID=CYNRM35MQCJC1BR99Y6D&amp;openid.assoc_handle=amzn_sw_signup_in&amp;openid.mode=checkid_setup&amp;prepopulatedLoginId=&amp;failedSignInCount=0&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0"
                                >Forgot Password</a>
                              </div>-->
                            </div>

                            <input
                              type="password"
                              maxlength="1024"
                              id="ap_password"
                              name="password"
                              tabindex="2"
                              class="a-input-text a-span12 auth-required-field"
                            />

                            <div
                              id="auth-password-missing-alert"
                              class="a-box a-alert-inline a-alert-inline-error auth-inlined-error-message a-spacing-top-mini"
                              aria-live="assertive"
                              role="alert"
                            >
                              <div class="a-box-inner a-alert-container">
                                <i class="a-icon a-icon-alert"></i>
                                <div class="a-alert-content">Enter your password</div>
                              </div>
                            </div>
                          </div>

                          <div class="a-section a-spacing-extra-large">
                            <span
                              @click="login"
                              class="a-button a-button-span12 a-button-primary"
                              id="a-autoid-0"
                            >
                              <span class="a-button-inner">
                                <span
                                  class="a-button-text"
                                  aria-hidden="true"
                                  id="a-autoid-0-announce"
                                >Login</span>
                              </span>
                            </span>

                            <div id="legalTextRow" class="a-row a-spacing-top-medium a-size-small"></div>
                            <div class="a-row a-spacing-top-medium">
                              <div class="a-section a-text-left">
                                <label for="auth-remember-me" class="a-form-label">
                                  <div data-a-input-name="rememberMe" class="a-checkbox">
                                    <label>
                                      <input
                                        style="bottom: 1px;"
                                        type="checkbox"
                                        name="rememberMe"
                                        value="true"
                                        tabindex="4"
                                      />
                                      <span class="a-label a-checkbox-label">
                                        Keep me signed in.
                                        <span
                                          class="a-declarative"
                                          data-action="a-popover"
                                          data-a-popover="{&quot;activate&quot;:&quot;onclick&quot;,&quot;header&quot;:&quot;\&quot;Keep Me Signed In\&quot; Checkbox&quot;,&quot;inlineContent&quot;:&quot;\u003cp>Choosing \&quot;Keep me signed in\&quot; reduces the number of times you're asked to Sign-In on this device.\u003c\/p>\n\u003cp>To keep your account secure, use this option only on your personal devices.\u003c\/p>&quot;}"
                                        ></span>
                                      </span>
                                    </label>
                                  </div>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div class="a-divider a-divider-break">
                            <h5>New to WENSLink?</h5>
                          </div>
                          <span
                            id="auth-create-account-link"
                            class="a-button a-button-span12 a-button-base"
                          >
                            <span class="a-button-inner">
                              <nuxt-link
                                to="/register_account"
                                class="a-button-text"
                              >Create your WENSLink account</nuxt-link>
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </form>
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
            >© 1996-2019, WENSLink.com, Inc. or its affiliates</span>
          </div>
        </div>
      </div>

      <div id="auth-external-javascript" class="auth-external-javascript" data-external-javascripts></div>

      <!-- cache slot rendered -->
    </div>
  </div>
</template>



<style scoped>
.a-alert-inline {
  display: none !important;
}
</style>


<script>
import axios from 'axios'

export default {
  data() {
    return {
      error_message: '',
      isError: false
    }
  },
  methods: {
    login: function() {
      var payload = new FormData()

      payload.append('phone_number', $('#ap_email').val())
      payload.append('password', $('#ap_password').val())

      axios({
        method: 'POST',
        data: payload,
        url: this.$store.state.api.login,
        contentType: 'application/json',
        data: payload
      })
        .then(res => {
          console.log(res.data)
          console.log('response')

          switch (res.data.status) {
            case 200:
              this.$cookies.set('access_token', res.data.access, {
                path: '/',
                // httpOnly : true,
                // secure: true,
                maxAge: 60 * 60 * 24 * 7
              })

              this.$cookies.set('refresh_token', res.data.refresh, {
                path: '/',
                // httpOnly : true,
                // secure: true,
                maxAge: 60 * 60 * 24 * 7
              })

              if (res.data.user_info.isVerified == 1) {
                switch (res.data.user_info.step) {
                  case 0:
                    this.$router.push('/continue')
                    break
                  case 1:
                    this.$router.push('/launch/register')
                    break
                  case 2:
                    this.$router.push('/launch/tax-details')
                    break
                  case 3:
                    this.$router.push('/launch/seller-interview')
                    break
                  case 4:
                    this.$router.push('/launch/dashboard')
                    break
                  case 5:
                    this.$router.push('/launch/success')
                    break
                }
              } else {
                this.$router.push('/verification')
              }
              break
            default:
              this.isError = true
              this.error_message = res.data.message
          }
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    checkLength: function(field, maxChar) {
      var ref = $(field),
        val = ref.val()

      console.log(/^(\+\d{1,3}[- ]?)?\d{10}$/.test(val))
      console.log(/^(\+\d{1,3}[- ]?)?\d{10}$/.test(val))
      if (!/^(\+\d{1,3}[- ]?)?\d{10}$/.test(val)) {
        ref.val(function() {
          console.log(val)
          console.log(val.substr(0, maxChar))
          return val.substr(0, maxChar)
        })
      }
    }
  }
}
</script>