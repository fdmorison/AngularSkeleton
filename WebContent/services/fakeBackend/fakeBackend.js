// Common HTTP statuses
var SUCCESS      = 200;
var CREATED      = 201;
var BAD_REQUEST  = 400;
var UNAUTHORIZED = 401;
var NOT_FOUND    = 404;
var CONFLICT     = 409;

// Fake Backend Module
angular.module('fakeBackend', ['root', 'ngMockE2E'])

.run(function($httpBackend, $http) {

    // Table Declaration for Fake Persistence
    var tables = {
            accounts : [],
            players  : []
    }

    // Load fake data
    $http.get('v1/accounts').then(function(response){
        tables.accounts = response.data;
    });
    $http.get('v1/alioth/players').then(function(response){
        tables.players = response.data;
    });

    // Ignore GET requests
    $httpBackend.whenGET(/\.html$/).passThrough();
    $httpBackend.whenGET(/./).passThrough();

    // Mock login
    $httpBackend.whenPOST(/v1\/accounts\/.+\/login/).respond(function(method, url, data) {

        // Request parameters
        var login = angular.fromJson(data);

        // Query database
        var result = Enumerable.From(tables.accounts)
        .Where("$.name == '" + login.account + "'")
        .ToArray();

        if (result.length == 0) {
            return [NOT_FOUND, null, {}];
        }

        var account = result[0];
        if (login.password != account.password) {
            return [UNAUTHORIZED, null, {}];
        }

        return [CREATED, account, {}];

    });

    // Mock account creation
    $httpBackend.whenPOST('v1/accounts').respond(function(method, url, data) {

        // Request parameters
        var account = angular.fromJson(data);
        var table   = tables.accounts;

        // Query database
        var result = Enumerable.From(table)
        .Where(function(x){ return x.name == account.name || x.email == account.email })
        .ToArray();

        // Account already exists?
        if (result.length > 0) {
            return [CONFLICT, null, {}];
        }

        // Create the account
        account.id = table.length;
        table.push(account);
        return [CREATED, account, {}];

    });

});