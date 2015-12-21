angular.module('fakeBackend', ['root', 'ngMockE2E'])

.run(function($httpBackend) {

    // Fake persistence
    var accounts = [];

    // Ignore GET requests
    $httpBackend.whenGET(/./).passThrough();

    // Mock account creation
    $httpBackend.whenPOST('v1/accounts').respond(function(method, url, data) {
        var account = angular.fromJson(data);
        account.id = accounts.length;
        accounts.push(account);
        return [201, account, {}]; // Created
    });
    

});