// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await browser.url(`https://the-internet.herokuapp.com/login`);
//
//         await $('#username').setValue('tomsmith');
//         await $('#password').setValue('SuperSecretPassword!');
//         await $('button[type="submit"]').click();
//
//         await expect($('#flash')).toBeExisting();
//         await expect($('#flash')).toHaveTextContaining(
//             'You logged into a secure area!');
//     });
//
// });
// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await browser.url(`https://www.avito.ru/#login?authsrc=h`);



        // await $('#username').setValue('tomsmith');
        // await $('#password').setValue('SuperSecretPassword!');
        // await $('button[type="submit"]').click();
        //
        // await expect($('#flash')).toBeExisting();
        // await expect($('#flash')).toHaveTextContaining(
        //     'You logged into a secure area!');


//     });
//
// });


//import {expect} from "chai";
//import testData from './../../data/testData.json';
//import q from './../../data/q.json';
//import w from './../../data/w';

//import selectors from './../../data/selectors.json';

// describe('My Login application', async () => {
//     before(async () => {
//         await browser.maximizeWindow();
//         //browser.url('https://hh.ru/account/login?backurl=%2F')
//         browser.url('https://reg.usps.com/entreg/RegistrationAction_input');
//         await browser.pause(4000)
//
//     });

    // it('01 Register', async () => {
    //     const titleName = "USPS.com® - Register for an online account";
    //     expect(await browser.getTitle()).toEqual(titleName);
    //     await browser.pause(500)
    // })
    // it('02 Register', async () => {
    //     const header1 = ("//h1[contains(text(),'Create Your USPS.com Account')]");
    //     await expect($(header1)).toHaveText('Create Your USPS.com Account');
    // })
    //  it ('03 Register', async () => {
    //      const step1 = ("//h3[@class='subhead subhead-lg']")
    //      expect(await $(step1).getText()).toEqual('Step 1: Choose your language and username')
    //  })
    //  it ('04 Register', async () => {
    //      const choose = ("//p[contains(text(),'Please choose a')]")
    //      await expect($(choose)).toHaveTextContaining('Please choose a default language')
    //  })
    //  it ('05 Register / contains text', async () => {
    //      const enter = ("//p[contains(text(),'Please enter a username')]");
    //      expect (await $(enter).getText()).toEqual('Please enter a username which will uniquely identify you with the United States Postal Service.');
    //  })
    //  it ('06 Register / *', async () => {
    //      const asterisk = ("//small[contains(text(),'indicates')]");
    //      expect (await $(asterisk).getText()).toEqual('* indicates a required field')
    //  })
    //
    //  it ('07 Register / label has a text', async () => {
    //      const label1 = ("//label[@id='for-slanguage']");
    //      expect (await $(label1).getText()).toEqual('* Choose a language preference')
    //  })
    //  it ('08 Register / languageDDM is clickable' , async () => {
    //      const languageDDM = ("//select[@id='slanguage']")
    //      $(languageDDM).click()
    //      browser.pause(500)
    //  })
    //  it ('09 Register / languageDDM accepts option English', async () => {
    //      const languageEn = ("//option[@value='en']")
    //      $(languageEn).click()
    //      browser.pause(500)
    //  })
    //  it ('10 register / English is selected', async () => {
    //      const languageEn1 = ("//option[@value='en']");
    //      expect (await $(languageEn1).isSelected());
    //  })
    //  it ('11 Register / contains text', async () => {
    //      const textUserName = ("//label[@id='for-tuserName']");
    //      expect (await $(textUserName).getText()).toEqual('* Username');
    //  })
    // it ('12 Register / img infoL', async () => {
    //     const infoL1 = ("//a[@id='username-tip']/img");
    //     expect (await $(infoL1).isDisplayed());
    // })
    // it ('13 Register / errortxt', async () =>{
    //     const elIF = ("//input[@id='tuserName']");
    //     await $(elIF).click();
    //     await browser.pause(500);
    // })
    // it ('14 Register / errortxt', async () => {
    //     const field = ("//div[@class='row grid-row-margin-34']");
    //     await $(field).click();
    //     await browser.pause(500);
    // })
    // it ('15 Register / minus', async () => {
    //     const minus = ("//span[@id='error-tuserName']/span/span");
    //     expect (await $(minus).isDisplayed());
    // })
    // it ('16 Register / errortxt', async () => {
    //     const errortxt = ("//span[@id='error-tuserName']");
    //     expect (await $(errortxt).isDisplayed());
    // })
    // it ('17 Register / errortxt', async () => {
    //     const message = ("//span[@id='sr-only-error-tuserName']");
    //     expect (await $(message).getText()).toEqual('A Username is a required entry.');
    // })
    // it ('18 Register / input usrName', async () => {
    //     const field = ("//input[@id='tuserName']");
    //     await $(field).click();
    //     await browser.pause(500);
    // })
    //  it ('19 Register / input userName', async () => {
    //      const elIF = ("//input[@id='tuserName']")
    //      const userName = 'Step'
    //      await expect($(elIF).setValue(userName))
    //      await browser.pause(500)
    //  })
    // it ('20 Register / frmclick', async () => {
    //     const frm = ("//form[@id='frm1']");
    //     $(frm).click();
    //     await browser.pause(500)
    // })
//})
