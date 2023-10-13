describe('Покупка фото для тренера', function () {
    
    it('Авторизация', function () {
        cy.visit('https://pokemonbattle.me/login/');
        cy.get('.auth__button').should('be.enabled');
        cy.get(':nth-child(1) > .auth__input').type('kipqwerty123@yandex.ru');
        cy.get('#password').type('Ustlab201!');
        cy.get('.auth__button').click();
        cy.get('.header__btns > [href="/shop"]').click();
        cy.get(':nth-child(1) > .shop__button').click();
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111');
        cy.get(':nth-child(1) > .pay_base-input-v2').type('12/24');
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('123');
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('IGOR KANASHKIN');
        cy.get('.pay__payform-v2').click();
         })
})


