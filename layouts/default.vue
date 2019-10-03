<template>
  <div>
    <!-- <TopNav v-if="$nuxt.$route.name != 'index'"/> -->
    <client-only>
      <NavBar v-if="$nuxt.$route.name != 'index' && $nuxt.$route.name != 'register' && $nuxt.$route.name != 'login' && $nuxt.$route.name != 'previous'" />
      <nuxt />
      <!-- <Footer v-if="$nuxt.$route.name != 'index'" /> -->
    </client-only>
  </div>
</template>

<!-- This Styling is applied to all pages -->

<script>
// import TopNav from '@/components/TopNav'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'

export default {
  components: {
    NavBar,
    Footer
  },
  mounted() {
    // document.body.classList.add('theme-dark')
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700');

* {
  box-sizing: border-box;
}

html,
body {
  font-size: 14px;
  min-width: 320px;
}

li {
  list-style: none;
}

body {
  font-family: Montserrat;
}

#__nuxt,
#__layout,
#__nuxt #__layout > div {
  width: 100%;
  height: 100%;
}

.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.align-item {
  align-items: center;
}

.flex-column {
  flex-direction: column;
}

.bold {
  font-weight: bold;
}

.font-10 {
  font-size: 10px;
}

.font-12 {
  font-size: 12px;
}

.font-14 {
  font-size: 12px;
}

.font-16 {
  font-size: 16px;
}

.font-18 {
  font-size: 18px;
}

.font-20 {
  font-size: 20px;
}

.btn-blue {
  background-color: #267dff;
}

.btn-red {
  background-color: #e91e63;
}

.btn-green {
  background-color: #46e0cc;
}

.btn-green:hover {
    background-color: #49d0be!important;
    border-color: #49d0be!important;
    color: black!important
}

.btn {
  height: 40px;
}

.footer {
  margin-top: 30px;
}

.navbar-spacing {
  padding-left: 310px;
  padding-right: 50px;
}

.capital span {
  text-transform: capitalize;
}

@media only screen and (max-width: 991px) {
  .navbar-spacing {
    padding-left: 50px;
    padding-right: 50px;
  }
}

.sidenav .nuxt-link-exact-active,
.sidenav .nuxt-link-active {
  color: white !important;
  background-color: rgb(234, 84, 85) !important;
  box-shadow: 0px 6px 19px 0px rgba(234, 84, 85, 0.7) !important;
  border-radius: 4px;
}

.right {
  text-align: right;
}

h3 {
  font-size: 24px;
}

.white-text {
  color: white;
}

.yellow-text {
  color: #ffeb3b;
}

/* input,
textarea {
  border-radius: 4px;
  background-color: #262c49 !important;
  border: 0 !important;
  color: white !important;
}

input:focus,
textarea:focus {
  background-color: #262c49 !important;
  border: 1px solid #7367f0 !important;
} */

.btn-primary {
  color: #fff;
  background-color: #7367f0;
  border-color: #7367f0;
}

.box-shadow {
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.5);
}

table {
  background-color: #212744;
  border-radius: 8px;
  table-layout: fixed;
}

.table > thead > tr > th,
.table > tbody > tr > th,
.table > tbody > tr > td {
  border-top: 0 !important;
  border-right: 0 !important;
  border-left: 0 !important;
}

td {
  color: white;
  /* height: 40px; */
  /* line-height: 40px!important; */
}

th {
  color: #a6a6a6;
  height: 40px;
  line-height: 40px !important;
}

table > thead > tr > th {
  border-bottom: 1px solid #ffffff4f;
}

table > thead {
  background-color: #212744;
}

table > tbody {
  background-color: #262c49;
}

.dropzone .dz-preview.dz-image-preview {
  background: transparent !important;
}

.table-hover > tbody > tr:hover {
  z-index: 200;
  border-radius: 5px;
  -webkit-transform: translateY(-4px);
  transform: translateY(-4px);
  background: inherit;
  transition: all 0.3s ease;
}

.validation-error {
  color: red;
}

#A,
#B {
  position: absolute;
}
#A {
  top: 0px;
  width: 400px;
  right: 0;
  bottom: 0px;
  background: #0f1642;
  box-shadow: -8px 0px 59px 8px #0000004a;
  padding: 20px 20px;
  z-index: 401;
  transition: right 0.5s;
}

#A.close {
  display: none;
  right: -400px;

  transition: right 0.5s;
}

.width100 {
  width: 100%;
}

.customerSuggestion li {
  padding: 10px 20px;
  color: white;
}

.customerSuggestion li:hover {
  cursor: pointer;
  background-color: rgb(234, 84, 85);
}

.customerSuggestion li:hover:first-child {
  border-radius: 5px 5px 0 0;
}

.customerSuggestion li:hover:last-child {
  border-radius: 0 0 5px 5px;
}

.customerSuggestion {
  margin-top: 10px;
  background-color: #2c334f;
  border-radius: 5px;
  width: calc(100% - 30px);
  position: absolute;
  z-index: 999;
}

.holder {
  background-color: #0f1642;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 40px;
  box-shadow: 0 4px 20px 0 rgba(15, 22, 66, 0.27);
}

table .col {
  padding: 4px 0 !important;
}

ol,
ul {
  margin-bottom: 0 !important;
  padding-inline-start: 15px;
}

/*
*   
*  Vuesax css modifier
* 
*/

.con-text-noti h3,
.con-text-noti p {
  margin: 0;
}

.vs-notifications {
  border-radius: 5px !important;
}

.vs-table--tbody-table .tr-values td {
  padding: 10px 5px !important;
  font-size: 12px;
  word-break: break-all;
}

.td.vs-table--td > span {
  display: flex;
}

.backIcon {
  margin-left: -15px;
  padding-bottom: 15px;
  cursor: pointer;
}

.td.vs-table--td > span > button:not(.vs-button-border):not(.noround) {
  border-radius: 5px 0 0 5px !important;
}

.td.vs-table--td > span > button > button {
  border-radius: 0 5px 5px 0 !important;
}


.vs-table--tbody-table tr {
  background-color: #0f1642 !important;
}

.vs-con-table {
  background-color: #0f1642 !important;
}

table.stripe tr:nth-child(2n) {
  background: #212744 !important;
}

.btn-border {
  border-style: solid;
  border-width: 1px;
  background-color: transparent;
  color: #7367f0;
}

.btn-danger {
  color: #d43f3a;
}

.vs-icon {
  color: white;
}

.con-select {
  width: 100% !important;
}

.v-container {
  background-color: #0f1642 !important;
  padding: 20px 30px 30px;
  border-radius: 7px;
  margin-left: -15px;
  margin-right: -15px;
}

.vs-table--tbody-table .tr-values td {
  padding: 10px 0;
}

.tooltip_custom {
  position: relative;
  display: inline-block;
  height: 50px;
}

.tooltip_custom .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: #ea5455;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 135%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: 12px;
}

.tooltip_custom .tooltiptext::after {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent #ea5455 transparent;
}

.tooltip_custom:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}

/* Popup box BEGIN */
.hover_bkgr_fricc {
  background: rgba(0, 0, 0, 0.4);
  cursor: pointer;
  display: none;
  height: 100%;
  position: fixed;
  text-align: center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10000;
}
.hover_bkgr_fricc .helper {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.hover_bkgr_fricc > div {
  background-color: #171a2c;
  box-shadow: 10px 10px 60px #0e0e0e;
  display: inline-block;
  height: auto;
  max-width: 551px;
  min-height: 100px;
  vertical-align: middle;
  width: 60%;
  position: relative;
  border-radius: 8px;
  padding: 15px 5%;
}
.popupCloseButton {
  background-color: #171a2c;
  border-radius: 50px;
  cursor: pointer;
  display: inline-block;
  font-family: arial;
  font-weight: bold;
  position: absolute;
  top: -20px;
  right: -20px;
  font-size: 11px;
  line-height: 30px;
  width: 30px;
  height: 30px;
  text-align: center;
}
.popupCloseButton:hover {
  background-color: #000;
}
.trigger_popup_fricc {
  cursor: pointer;
  font-size: 20px;
  margin: 20px;
  display: inline-block;
  font-weight: bold;
}
/* Popup box BEGIN */

::-moz-selection {
  /* Code for Firefox */
  color: white;
  background: #e91e63;
}

::selection {
  color: white;
  background: #e91e63;
}
</style>
