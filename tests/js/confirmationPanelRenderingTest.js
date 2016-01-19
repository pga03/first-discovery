/**
 * Confirmation Panel Rendering Test
 */

(function ($, fluid) {

	"use strict";
	
	fluid.defaults("gpii.tests.firstDiscovery.panel.confirm", {
		gradeNames: ["gpii.firstDiscovery.panel.confirm"],
		messageBase: {
			"message": "<p2>Please confirm your preference selections by clicking the next button, or navigate back using the links below.</p2>",
		
				language: "languageConfirmation",
	        	languageLabel: "languageLabel",
	        	
	        	speak: "speakConfirmation",
	        	speakLabel: "speakLabel",
	        	
	        	speechRate: "speechRateConfirmation",
	        	speechRateLabel: "speechRateLabel",
	        	
	        	contrast: "contrastConfirmation",
	        	contrastLabel: "contrastLabel",
	        	
	        	textSize: "textSizeConfirmation",
	        	textSizeLabel: "textSizeLabel",
	        	
	        	onScreenKeyboard: "onScreenKeyboardConfirmation",
	        	onScreenKeyboardLabel: "onScreenKeyboardLabel",
	        	
	        	captions: "captionsConfirmation",
	        	captionsLabel: "captionsLabel",
	        	
	        	showSounds: "showSoundsConfirmation",
	        	showSoundsLabel: "showSoundsLabel",
	        	
	            stickyKeys: "stickyKeysConfirmation",
	            stickyKeysLabel: "stickyKeysLabel"
		}
	});
	
	fluid.defaults("gpii.tests.confirmPanel", {
        gradeNames: ["fluid.test.testEnvironment"],
        components: {
            confirm: {
                type: "gpii.tests.firstDiscovery.panel.confirm",
                container: ".gpiic-tests-confirm"
            },
            confirmTester: {
                type: "gpii.tests.confirmTester"
            }
        }
    });
	
	fluid.defaults("gpii.tests.confirmTester", {
        gradeNames: ["fluid.test.testCaseHolder"],
        modules: [{
            name: "Tests the confirm panel",
            tests: [{
                expect: 19,
                name: "Rendering",
                sequence: [{
                    func: "{confirm}.refreshView"
                }, {
                    listener: "gpii.tests.confirmTester.verifyMessageRendering",
                    args: ["{confirm}"],
                    event: "{confirm}.events.afterRender"
                },{
                	listener: "gpii.tests.confirmTester.verifyLangLableLinkRendering",
                	args: ["{confirm}"],
                	event: "{confirm}.events.afterRender"
                },{
                	listener: "gpii.tests.confirmTester.verifySpeakLableLinkRendering",
                	args: ["{confirm}"],
                	event: "{confirm}.events.afterRender"
                },{
                	listener: "gpii.tests.confirmTester.verifySpeechLableLinkRendering",
                	args: ["{confirm}"],
                	event: "{confirm}.events.afterRender"
                },{
                	listener: "gpii.tests.confirmTester.verifyContrastLableLinkRendering",
                	args: ["{confirm}"],
                	event: "{confirm}.events.afterRender"
                },{
                	listener: "gpii.tests.confirmTester.verifyTextSizeLableLinkRendering",
                	args: ["{confirm}"],
                	event: "{confirm}.events.afterRender"
                },{
                	listener: "gpii.tests.confirmTester.verifyOnScreenKeyLableLinkRendering",
                	args: ["{confirm}"],
                	event: "{confirm}.events.afterRender"
                },{
                	listener: "gpii.tests.confirmTester.verifyCaptionsLableLinkRendering",
                	args: ["{confirm}"],
                	event: "{confirm}.events.afterRender"
                },{
                	listener: "gpii.tests.confirmTester.verifyShowSoundsLableLinkRendering",
                	args: ["{confirm}"],
                	event: "{confirm}.events.afterRender"
                },{
                	listener: "gpii.tests.confirmTester.verifyStickyKeysLableLinkRendering",
                	args: ["{confirm}"],
                	event: "{confirm}.events.afterRender"
                }]
            }]
        }]
    });

	gpii.tests.confirmTester.verifyMessageRendering = function (that) {
        var message = that.options.messageBase.message;
                 
        jqUnit.assertEquals("The confirm message should be rendered correctly", message.message, that.locate("message").text());
                																																											
	};
	
	gpii.tests.confirmTester.verifyLangLabelLinkRendering = function (that) {
		var langLabel = that.options.messageBase.languageLabel,
		    langLink = that.options.messageBase.language;
		
		jqUnit.assertEquals("The language label should be rendered correctly", langLabel, that.options.langLabel );
		jqUnit.assertEquals("The language link should be renedered correctly", langLink, $("#" + that.options.selectors.languageLabel).text());
	};
	/*
	gpii.tests.confirmTester.verifySpeakLableLinkRendering = function (that) {
		var speakLabel = that.options.messageBase.speakLabel,
	    	speakLink = that.options.messageBase.speak;
	
	jqUnit.assertEquals("The speak label should be rendered correctly", speakLabel, that.options.speakLabel );
	jqUnit.assertEquals("The speak link should be renedered correctly", speakLink, that.options.speakLink );
	};

	gpii.tests.confirmTester.verifyContrastLableLinkRendering = function (that) {
		var constrastLabel = $("constrastLabel"),
			constrastLink = $("constrast");

		jqUnit.assertEquals("The constrast label should be rendered correctly", langLabel, that.options.langlabel );
		jqUnit.assertEquals("The constrast link should be renedered correctly", , );
	};
	
	gpii.tests.confirmTester.verifyTextSizeLableLinkRendering = function (that) {
		var textSizeLabel = $("textSizeLabel"),
			textSizeLink = $("textSize");
	
	jqUnit.assertEquals("The text size label should be rendered correctly", langLabel, that.options.langlabel );
	jqUnit.assertEquals("The text size link should be renedered correctly", , );
	};

	gpii.tests.confirmTester.verifyOnScreenKeyLableLinkRendering = function (that) {
		var onScreenLabel = $("OnScreenKeyboardLabel"),
    		onScreenLink = $("onScreenKeyboard");

		jqUnit.assertEquals("The on screen keyboard label should be rendered correctly", langLabel, that.options.langlabel );
		jqUnit.assertEquals("The on screen keyboard link should be renedered correctly", , );
	};
	gpii.tests.confirmTester.verifyCaptionsLableLinkRendering = function (that) {
		var captionsLabel = $("captionsLabel"),
			captionsLink = $("captions");
	
	jqUnit.assertEquals("The captions label should be rendered correctly", langLabel, that.options.langlabel );
	jqUnit.assertEquals("The captions link should be renedered correctly", , );
	};

	gpii.tests.confirmTester.verifyShowSoundsLableLinkRendering = function (that) {
		var showSoundsLabel = $("showSoundsLabel"),
			showSoundsLink = $("showSounds");

		jqUnit.assertEquals("The show sounds label should be rendered correctly", langLabel, that.options.langlabel );
		jqUnit.assertEquals("The show sounds link should be renedered correctly", , );
	};


	gpii.tests.confirmTester.verifyStickyKeysLableLinkRendering = function (that) {
		var stickyKeysLabel = $("stickyKeysLabel"),
		stickyKeysLink = $("stickyKeys");

		jqUnit.assertEquals("The sticky keys label should be rendered correctly", langLabel, that.options.langlabel );
		jqUnit.assertEquals("The sticky keys link should be renedered correctly", , );
	};
*/


    $(document).ready(function () {
        fluid.test.runTests([
            "gpii.tests.confirmPanel"
         ]);
    });

	
})(jQuery, fluid);
