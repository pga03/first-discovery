/*"lang-en-US","lang-fr-FR", "lang-es-MX","lang-de-DE","lang-nl-NL","lang-sv-SE"
 *      : "English",
            : "Fran�ais",
           : "Espa�ol",
            : "Deutsch",
            : "Nederlands",
            : "Svenska",
 */

(function ($, fluid) {

"use strict";

/****************************
 * Confirmation Panel Tests *
 ****************************/

fluid.defaults("gpii.tests.firstDiscovery.panel.confirmLinkChange", {
    gradeNames: ["gpii.firstDiscovery.panel.confirm"],
    model:{
    	langLink: "English"
    },
    invokers: {
    	pageLoad: {
    		funcName: "jqUnit.assert",
    		args: ["The pageLoad invoker should have fired"]
  
    	}
     }
});
 
jqUnit.test("Test confirmation language link", function(){
	jqUnit.expect(3);

	var that = gpii.tests.firstDiscovery.panel.confirm();
	jqUnit.assertTrue("The language link text has been set", that.languageLinkSetting);
	that.applier.change("langLink", "French");
	jqUnit.asserTrue("The language link text has been changed", that.languageLinkSetting);
});

	
})(jQuery, fluid);
