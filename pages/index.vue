<template>
  <div class="container section">
    <div style="max-width: 400px;margin: auto">
      <div class="header">
        <div class="center-align">
          <img src="~static/dashboard-icon-black.svg" class="company_logo" />
          <p class="margin-top-10">WENSLink Seller Registration</p>
        </div>
      </div>

      <div class="section verify___mobile" v-if="useractivity == 0">
        <h1 style="colror:#03A9F4">Register and Start Selling</h1>
        <p>Please have the following ready before you begin:</p>
        <ul class="padding-top-15 padding-bottom-10">
          <li>Your bank account details for receiving payments from WENSLink</li>
          <li>Tax (GST/PAN) details of your business</li>
        </ul>

        <p class="light-text">Please ensure that all the information you submit is accurate</p>

         <h4 class="margin-top-30" style="colror:#03A9F4">Enter details below to continue registration</h4>

        <form class="form-body">
          <div class="form-group margin-top-25">
            <label class="control-label noselect">Company / Business Name</label>
            <input
              id="email"
              type="email"
              v-model="email"
              class="form-control"
              maxlength="50"
              autocomplete="anyrandomstring"
            />
            <span class="font-12 light-text">Enter the company/business name as registered in GST/PAN</span>
          </div>
        </form>

        <div>
          <form class="form-body">
            <div class="form-group margin-top-25">
              <input
                id="email"
                type="checkbox"
                v-model="checkbox"
                class
                maxlength="50"
                autocomplete="anyrandomstring"
              />
              I have read and agree to comply with and/or be bound by the terms and conditions of WENSLink Terms and Conditions
            </div>
          </form>
        </div>

        <button
          type="submit"
          @click="useractivity = 1"
          class="btn btn-green white-text loginButton"
        >Continue</button>
        <p
          class="padding-top-20 font-12 light-text"
        >By creating an account or logging in, you agree to WENSLink's Conditions of Use and Privacy Policy</p>
      </div>

      <div class="section create___account" v-if="useractivity == 1">
        <h1>Create Account</h1>
        <!-- <p>A text with a One Time Password (OTP) has been sent to your mobile number: 89282672828</p> -->

        <form class="form-body">
          <div class="form-group margin-top-20">
            <label class="control-label noselect">Your Name</label>
            <input
              id="email"
              type="email"
              v-model="email"
              class="form-control"
              maxlength="50"
              autocomplete="anyrandomstring"
            />
          </div>
          <div class="form-group margin-top-20 input__helper">
            <label class="control-label noselect">Mobile Number</label>
            <input
              id="email"
              type="number"
              v-model="phone_number"
              class="form-control"
              maxlength="50"
              autocomplete="anyrandomstring"
            />
            <span class>+91</span>
          </div>
          <div class="form-group margin-top-20">
            <label class="control-label noselect">Email</label>
            <input
              id="email"
              type="email"
              v-model="email"
              class="form-control"
              maxlength="50"
              autocomplete="anyrandomstring"
            />
          </div>
          <div class="form-group margin-top-20">
            <label class="control-label noselect">Password</label>
            <input
              id="email"
              type="email"
              v-model="email"
              class="form-control"
              maxlength="50"
              placeholder="At least 6 characters"
              autocomplete="anyrandomstring"
            />
            <span class="font-12">Password must be atleast 6 characters.</span>
          </div>
        </form>
        <p
          class="padding-bottom-20"
        >We will send you a text to verify your phone. Message and Data rates may apply.</p>
        <button
          type="submit"
          @click="useractivity = 2"
          class="btn btn-green white-text loginButton"
        >Continue</button>
        <p class="padding-top-20">Already have an account?</p> <nuxt-link to="/login">Sign In</nuxt-link>
      </div>
      <div class="section verify___mobile" v-if="useractivity == 2">
        <h1>Verify Mobile Number</h1>
        <p>A text with a One Time Password (OTP) has been sent to your mobile number: {{phone_number}}</p>

        <form class="form-body">
          <div class="form-group margin-top-25">
            <label class="control-label noselect">Enter OTP</label>
            <input
              id="email"
              type="email"
              v-model="email"
              class="form-control"
              maxlength="50"
              autocomplete="anyrandomstring"
            />
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
export default {
  data() {
    return {
      email: '',
      phone_number: null,
      checkbox: true,
      useractivity: 0
    }
  },
  methods:{
      goToRegister: function(){
          this.$router.push('/register')
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

.btn {
  width: 100%;
}

.light-text{
    color: #9b9b9b
}
</style>