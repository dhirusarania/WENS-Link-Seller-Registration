var url

if(process.env.NODE_ENV == "development"){

    var url = "/api/";

}else{

    var url = "/backend/api/";

}

console.log(url)


export const state = () => ({



    login: url + "/",

    otp: "http://weberleads.in/http-jsonapi.php?",


})