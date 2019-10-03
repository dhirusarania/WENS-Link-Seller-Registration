<template>
  <div class="container section">
    <div style="max-width: 400px;margin: auto">
      <div class="header">
        <div class="center-align">
          <img src="~static/dashboard-icon-black.png" class="company_logo" />
          <p class="margin-top-10">WENSLink Seller Registration</p>
        </div>
      </div>

      <div class="section verify___mobile" v-if="isPhoneSubmitted == 0">
        <h1>Verify Your Mobile Number</h1>
        <p>A text will a One Time Password (OTP) has been sent to your mobile number: {{phone_number}}</p>

        <form class="form-body">
          <div class="form-group margin-top-25">
            <label class="control-label noselect">Enter Phone Number</label>
            <input
              id="email"
              name="phone"
              type="number"
              pattern="[+]{1}[0-9]{11,14}"
              required
              v-model="phone_number"
              class="form-control"
              maxlength="20"
            />
          </div>
        </form>

        <button
          v-if="!number_submitted"
          type="submit"
          @click="sendOTP"
          class="btn btn-green white-text loginButton"
        >Send OTP</button>
        <Loader v-if="number_submitted" />
        <p
          class="padding-top-20 font-12"
        >By creating an account or logging in, you agree to WENSLink's Conditions of Use and Privacy Policy</p>
      </div>

      <div class="section verify___mobile" v-if="isPhoneSubmitted == 1">
        <h1>Verify Your Mobile Number</h1>
        <p>A text will a One Time Password (OTP) has been sent to your mobile number: {{phone_number}}</p>

        <form class="form-body">
          <div class="form-group margin-top-25" v-if="isPhoneSubmitted == 1">
            <label class="control-label noselect">Enter OTP</label>
            <input id="otp" type="number" v-model="otp" class="form-control" maxlength="50" />
          </div>
        </form>

        <button
          type="submit"
          @click="goToRegister"
          class="btn btn-green white-text loginButton"
        >Create your WENSLink account</button>
        <p
          class="padding-top-20 font-12"
        >By creating an account or logging in, you agree to WENSLink's Conditions of Use and Privacy Policy</p>
      </div>
    </div>
  </div>
</template>


<script>
import Loader from '@/components/loader'

export default {
  data() {
    return {
      otp: null,
      isPhoneSubmitted: 0,
      phone_number: null,
      number_submitted: false
    }
  },
  components: {
    Loader
  },
  methods: {
    goToRegister: function() {
      this.$router.push('/register')
    },
    sendOTP: function() {
      this.number_submitted = true
    }
  }
}
</script>

<style scoped>
.header {
  display: flex;
  width: 100%;
  height: 60px;
  text-align: center;
}

.section {
  padding-top: 1rem;
  padding-bottom: 1rem;
}

ul {
  padding-inline-start: 15px;
  padding-left: 15px;
}

li {
  list-style: disc;
}

.center-align {
  position: absolute;
  left: 0;
  right: 0;
}

.company_logo {
  height: 100%;
  width: 40px;
}

p {
  color: black;
  margin: initial;
  line-height: 1.5 !important;
}

h1 {
  font-weight: 900;
  font-size: 28px;
  line-height: 1.2;
}

.input__helper > input {
  padding-left: 65px;
}

.input__helper > span {
  position: absolute;
  top: 25px;
  border-radius: 2px 0 0 2px;
  left: 0px;
  background-color: #9e9e9e;
  color: white;
  height: 34px;
  width: 50px;
  border: 1px solid #878787;
  display: flex;
  justify-content: center;
  align-items: center;
}

label {
  font-weight: 600;
  color: black;
}

input,
textarea {
  border-radius: 2px;
  background-color: white !important;
  border: 1px solid #878787 !important;
  color: black !important;
}

input:focus,
textarea:focus {
  background-color: white !important;
  border: 1px solid #7367f0 !important;
}

.light-text {
  color: #9b9b9b;
}
</style>