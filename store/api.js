var url

if(process.env.NODE_ENV == "development"){

    var url = "http://127.0.0.1:8000/api/";

}else{

    var url = "/backend/api/";

}

console.log(url)


export const state = () => ({



    login: url + "/",

    otp: "http://weberleads.in/http-jsonapi.php?",


})