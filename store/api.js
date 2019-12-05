var url

if(process.env.NODE_ENV == "development"){

    var url = "http://127.0.0.1:8000/backend/api/";

}else{

    var url = "/backend/api/";

}

console.log(url)


export const state = () => ({



    login: url + "login/vendors",

    register: url + "users/create/vendor",

    seller_info: url + "users/seller_info/",

    seller_interview: url + "users/seller_interview/",

    getCompany_name: url + "users/company_name/get/",

    tax: url + "users/tax/",

    otp: "http://weberleads.in/http-jsonapi.php?",

    otp_verify: url + 'users/otp_verify/',

    resendOTP: url + 'users/resendOTP/',

    changepassword: url + 'users/changepassword',

    company_name:  url +  "users/company_name/",

    getStep:  url +  "users/getStep/",

    createOrder:  url +  "payments/create/order",

    invoice_success:  url +  "payments/invoice",

    nocost:  url +  "payments/nocost", 


})