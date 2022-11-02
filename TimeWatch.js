fixture `TimeWatch`
    .page `https://checkin.timewatch.co.il/punch/punch.php`;

test('Punch', async t => {
    await t
        .typeText('#compKeyboard', process.env.COMPANY_NUMBER)
        .typeText('#nameKeyboard', process.env.EMPLOYEE_NUMBER)
        .typeText('#pwKeyboard', process.env.PASSWORD)
        .click('[name="B1"]')

    if (process.env.ACTION === 'enter') {
        await t.click("button.entry-btn").wait(1000);
    } else {
        await t.click("button.exit-btn").wait(1000);
    }

    const popup = Selector('div').withText('הצלחה');
    await t.expect((popup).exists).ok().wait(10000)
});%
