
// var url = "https://moovafrica.com/api/api";


console.log(process.env.NODE_ENV)

var url

if(process.env.NODE_ENV == "development"){

    var url = "http://127.0.0.1:8000/api/";

}else{

    var url = "http://13.127.31.3/backend/api/";

}

console.log(url)


export const state = () => ({



    login: url + "login/",

    imageUpload: url + "products/upload/image",

    allProducts : url + "products/",

    singleProduct : url + "products/single/",

    getCategory : url + "products/product/category",

    getsubCategory : url + "products/product/subcategory",

    getBrand : url + "products/product/brand",

    getAllOrder : url + "orders",

    getAllAuction : url + "auction",
    
    getAllCompletedAuction : url + "auction/completed/",

    getAllOngoingAuction : url + "auction/ongoing/",

    addProduct : url + "products/create/product",

    addAuction : url + "auction/create",

    deleteProduct : url + "products/delete/",

    deleteCategory : url + "products/product/category/delete/",

    deleteSubCategory : url + "products/product/subcategory/delete/",

    deleteBrand : url + "products/product/brand/delete/",




})


export const getters = {
    // getLoginAPI(state) {
    //     return state.login
    // }
}
