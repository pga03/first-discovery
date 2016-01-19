/**
 * Preview Panel tests
 */

(function($, fluid) {
	"use strict";
	
	
	fluid.defaults("gpii.tests.firstDiscovery.panel.preview", {
		gradeNames: ["gpii.firstDiscovery.panel.preview"],
		
	});
	
	
	 gpii.tests.testRendering = function (that) {
	        var expectedContent = $(that.options.messageBase.message).text();
	        jqUnit.assertEquals("The description should be rendered correctly", expectedContent, that.locate("message").text());
	    };
})(jQuery, fluid);


