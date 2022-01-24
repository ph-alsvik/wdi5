describe('ui5 basic', () => {
    globalThis.viewName = 'test.Sample.view.Main';

    before(async () => {
        await browser.goTo('#/Main');
    });

    it('should have the right title', async () => {
        const title = await browser.getTitle();
        expect(title).toEqual('Sample UI5 Application');
    });

    it('should find a ui5 control class via .hasStyleClass', async () => {
        await browser.$('#container-Sample---app').waitForDisplayed();

        // webdriver
        const className = 'myTestClass';

        // ui5
        const selector = {
            wdio_ui5_key: 'buttonSelector',
            selector: {
                bindingPath: {
                    modelName: 'testModel',
                    propertyPath: '/buttonText'
                },
                viewName: globalThis.viewName,
                controlType: 'sap.m.Button'
            }
        };

        if ((await browser.getUI5VersionAsFloat()) <= 1.6) {
            selector.forceSelect = true;
            selector.selector.interaction = 'root';
        }

        const control = await browser.asControl(selector);
        const retrievedClassNameStatus = await control.hasStyleClass(className);

        console.log('retrievedClassNameStatus', retrievedClassNameStatus);
        expect(retrievedClassNameStatus).toBeTruthy();
    });
});
