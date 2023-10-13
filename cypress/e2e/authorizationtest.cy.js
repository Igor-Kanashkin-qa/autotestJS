describe('Автоматизорованное тестирование логина и пароля', function () {
    
    it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); // ввожу в поле логин значение
        cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизейблена
        cy.get('#pass').type('iLoveqastudio1'); // ввожу пароль
        cy.get('#loginButton').should('be.enabled'); // проверяем, что кнопка доступна для нажатия
        cy.get('#loginButton').click(); // кликаю на кнопку войти
        cy.contains('Авторизация прошла успешно').should('be.visible'); // проверяем, что надпись есть и она видна клиенту
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем, что крестик есть и он виден клиенту
         })
    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click(); // кликаю на кнопку Забыли пароль?
        cy.get('#mailForgot').type('23kip93@gmail.com') // ввожу валидную почту
        cy.get('#restoreEmailButton').click() // кликаю на кнопку отправить код
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible'); // проверяем, что надпись есть и она видна клиенту
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем, что крестик есть и он виден клиенту
         })
    it('Верный логин и не верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru'); // ввожу в поле логин значение
        cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизейблена
        cy.get('#pass').type('chepucha'); // ввожу пароль
        cy.get('#loginButton').should('be.enabled'); // проверяем, что кнопка доступна для нажатия
        cy.get('#loginButton').click(); // кликаю на кнопку войти
        cy.contains('Такого логина или пароля нет').should('be.visible'); // проверяем, что надпись есть и она видна клиенту
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем, что крестик есть и он виден клиенту
         })
    it('Не верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('23kip93@gmail.ru'); // ввожу в поле логин значение
        cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизейблена
        cy.get('#pass').type('iLoveqastudio1'); // ввожу пароль
        cy.get('#loginButton').should('be.enabled'); // проверяем, что кнопка доступна для нажатия
        cy.get('#loginButton').click(); // кликаю на кнопку войти
        cy.contains('Такого логина или пароля нет').should('be.visible'); // проверяем, что надпись есть и она видна клиенту
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем, что крестик есть и он виден клиенту
         })
    it('Проверка валидации логина', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('chepucha.ru'); // ввожу в поле логин значение
        cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизейблена
        cy.get('#pass').type('iLoveqastudio1'); // ввожу пароль
        cy.get('#loginButton').should('be.enabled'); // проверяем, что кнопка доступна для нажатия
        cy.get('#loginButton').click(); // кликаю на кнопку войти
        cy.contains('Нужно исправить проблему валидации').should('be.visible'); // проверяем, что надпись есть и она видна клиенту
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем, что крестик есть и он виден клиенту
         })
    it('Логин с заглавными буквами и верный пароль', function () {
            cy.visit('https://login.qa.studio/');
            cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввожу в поле логин значение
            cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизейблена
            cy.get('#pass').type('iLoveqastudio1'); // ввожу пароль
            cy.get('#loginButton').should('be.enabled'); // проверяем, что кнопка доступна для нажатия
            cy.get('#loginButton').click(); // кликаю на кнопку войти
            cy.contains('Авторизация прошла успешно').should('be.visible'); // проверяем, что надпись есть и она видна клиенту
            cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверяем, что крестик есть и он виден клиенту
             })

})