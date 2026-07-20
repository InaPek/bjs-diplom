'use strict';

const userForm = new UserForm();

userForm.loginFormCallback = function (data) {
    console.log('Данные формы авторизации:', data);

    alert(`Попытка входа с логином: ${data.login}`);

    ApiConnector.login(data, function (response) {
        console.log('Ответ сервера (авторизация):', response);

        if (response.success) {
            alert('✅ Авторизация успешна! Добро пожаловать.');
            location.reload();
        } else {
            userForm.setLoginErrorMessage(response.error);
            alert(`❌ Ошибка авторизации: ${response.error}`);
        }
    });
};

userForm.registerFormCallback = function (data) {
    console.log('Данные формы регистрации:', data);

    alert(`Попытка регистрации с логином: ${data.login}`);

    ApiConnector.register(data, function (response) {
        console.log('Ответ сервера (регистрация):', response);

        if (response.success) {
            alert('✅ Регистрация успешна! Теперь можно войти.');
            location.reload();
        } else {
            userForm.setRegisterErrorMessage(response.error);
            alert(`❌ Ошибка регистрации: ${response.error}`);
        }
    });
};