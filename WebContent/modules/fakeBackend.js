angular.module('fakeBackend', ['root', 'ngMockE2E'])

.run(function($httpBackend, $http) {

    // Fake persistence in Session Storage
    var accounts = [];
    $http.get('v1/accounts').then(function(response){
        accounts = response.data;
    });

    // Ignore GET requests
    $httpBackend.whenGET(/./).passThrough();

    // Mock login
    $httpBackend.whenPOST(/v1\/accounts\/.+\/login/).respond(function(method, url, data) {
        var login = angular.fromJson(data);
        for (i in accounts) {
            var account = accounts[i];
            if (login.account == account.name) {
                if (login.password == account.password) {
                    return [201, account, {}]; // Created
                }
                else {
                    return [401, null, {}]; // Unauthorized
                }
            }
        }
        return [404, null, {}]; // Not Found
    });

    // Mock account creation
    $httpBackend.whenPOST('v1/accounts').respond(function(method, url, data) {
        var account = angular.fromJson(data);
        var table   = accounts;
        account.id = table.length;
        table.push(account);
        return [201, account, {}]; // Created
    });

});