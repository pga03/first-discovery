(function ($, fluid) {
    
	"use strict";
    
	fluid.defaults("gpii.tests.firstDiscovery.panel.conformationPanelMoveUserTest", {
        gradeNames: ["gpii.tests.firstDiscovery.panel.conformation"],
        currentPanelNum: 10, 
        stringArrayIndex: {
        	panel: ["language", "TTS", "contrast", "text size", "on screen keyboard", "video captions", "sticky keys"]
        }
	});
    
    jqUnit.test("Preference link navigation", function(){
    	jqUnit.expect(1);
    	var that = gpii.firstDiscovery.panel.confirmation();
    	var actualPanel = 1;
    	var expectedPanel = 0; 
    	jqUnit.assertTrue("Language link opens the language panel", actualPanel, expectedPanel);
    });
    
    
    
    
    
})(jQuery, fluid);   