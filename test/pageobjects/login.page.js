class LoginPage {
    get $username() { return $('#user-name'); }
    get $password() { return $('#password'); }
    get $loginBtn() { return $('#login-button'); }
    get $errorMsg() { return $('[data-test="error"]'); }

    async login(user, pass) {
        await this.$username.waitForDisplayed({ timeout: 5000 });
        await this.$username.setValue(user);
        await this.$password.setValue(pass);
        await this.$loginBtn.click();
    }
}

module.exports = new LoginPage();