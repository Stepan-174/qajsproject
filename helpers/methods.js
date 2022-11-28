import selectors from "./../data/selectors.json"

export function userLogin(username, password, passwordRetype) {
    $(selectors.Login.userNameIF).setValue(username);
    $(selectors.Login.passwordIF).setValue(password);
    $(selectors.Login.passwordRetypeIF).setValue(passwordRetype);
    browser.pause(3000);
}
