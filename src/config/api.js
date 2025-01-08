export var heading = "currency converter";
var API_DOMAIN = "https://v6.exchangerate-api.com/v6";
var API_KEY = "USE-YOUR-API-KEY";
export var endpointPath = function (from) {
    return "".concat(API_DOMAIN, "/").concat(API_KEY, "/latest/").concat(from);
};
