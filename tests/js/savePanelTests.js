/**
 * Save Panel Tests
 */



(function($, fluid) {
	
	"user strict";
	
	fluid.defaults("gpii.tests.firstDiscovery.panel.save", {
		gradeNames: ["gpii.firstDiscovery.panel.save"],
		messageBase: {
			"message": " <p2>Your selections will be saved anonymously to our server so that you can retrieve your preferences later. No personal data of yours will be saved.<br><br>Do you want to save your preferences now? Select <b><i>Finish</i></b> to save your preferences and complete First Discovery.</p2>"
		}
	});
	
	fluid.defaults("gpii.tests.savePanel", {
        gradeNames: ["fluid.test.testEnvironment"],
        components: {
            save: {
                type: "gpii.tests.firstDiscovery.panel.save",
                container: ".gpiic-fd-prefsEditor-panel-save"
            },
            saveTester: {
                type: "gpii.tests.saveTester"
            }
        }
    });

    fluid.defaults("gpii.tests.saveTester", {
        gradeNames: ["fluid.test.testCaseHolder"],
        modules: [{
            name: "Tests the save component",
            tests: [{
                expect: 1,
                name: "Initialization",
                sequence: [{
                    func: "{save}.refreshView"
                }, {
                    listener: "gpii.tests.testRendering",
                    args: ["{save}"],
                    event: "{save}.events.afterRender"
                }]
            }]
        }]
    });

    gpii.tests.saveTester.verifyRendering = function (that) {
        var expectedContent = $(that.options.messageBase.message).text();
        jqUnit.assertEquals("The description should be rendered correctly", expectedContent, that.locate("message").text());
    };

    $(document).ready(function () {
        fluid.test.runTests([
            "gpii.tests.savePanel"
         ]);
    });
    
})(jQuery, fluid);