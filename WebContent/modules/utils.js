// Common HTTP statuses
var SUCCESS      = 200;
var CREATED      = 201;
var BAD_REQUEST  = 400;
var UNAUTHORIZED = 401;
var NOT_FOUND    = 404;
var CONFLICT     = 409;

// Utilities
function isEmptyOrNull(a) {

    return !a || a=="" || a==[];

}