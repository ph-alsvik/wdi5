const listSelector = {
    // forceSelect: true,
    selector: {
        id: 'PeopleList',
        viewName: 'test.Sample.view.Other'
    }
};

const tests = [{api: 'asControl'}, {api: '_asControl'}];

describe('async api', () => {
    before(async () => {
        await browser.goTo('#/Other');
        /* const buttonSelector = {
            selector: {
                id: 'NavFwdButton',
                viewName: 'test.Sample.view.Main'
            }
        };

        await browser.asControl(buttonSelector).firePress(); */
    });

    for (const test of tests) {
        it(`api: browser.${test.api} - getItems(x) and getTitle() in sequence`, async () => {
            const list = await browser[test.api](listSelector);
            console.log('//> ********************');
            console.log('//> done with sap.m.List');
            const listItem = await list.getItems(1); // ui5 api
            console.log('//> ********************');
            console.log('//> done with List Item');
            const title = await listItem.getTitle(); // ui5 api
            console.log('//> ********************');
            console.log('//> done with sap.m.Title');
            expect(title).toBe('Andrew Fuller');
        });
    }

    it('chain getItems(x) and getTitle()', async () => {
        const title = await browser.asControl(listSelector).getItems(1).getTitle();
        expect(title).toBe('Andrew Fuller');
    });

    it('chain events, setter and getter', async () => {
        const selector = {
            selector: {
                id: 'idAddLineItemButton',
                viewName: 'test.Sample.view.Other'
            }
        };
        const oldText = await browser.asControl(selector).firePress().getText();
        expect(oldText).toBe('add Line Item');
        const _newText = 'changed!';
        const newText = await browser.asControl(selector).firePress().setText(_newText).getText();
        expect(newText).toBe(_newText);
    });
});
