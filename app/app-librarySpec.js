describe("dataFactory", function() {
    beforeEach(module('appLibrary'));
    it('should do something with http', 
    inject(function(dataFactory, $rootScope, $httpBackend) {
        $httpBackend.expect('GET', 'http://api.geonames.org/countryInfoJSON?username=maxbfrecka').respond(200);
        
        /*I have no idea*/

    }));
});



/*I'm giving up for a bit*/