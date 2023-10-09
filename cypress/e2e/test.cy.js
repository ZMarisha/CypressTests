describe("Site React-Todo-List", () => {

    beforeEach(() => {
        cy.visit('https://forhemer.github.io/React-Todo-List/');
    });

    it('input should be empty', () => {
        cy.get('.input-text').should('have.value', '');
    });

    it('work with todo list', () => {

        const numberTodo = [1, 2, 3];
        numberTodo.forEach(el => {
            cy.get('.input-text').type(`Todo №${el}`);
            cy.get('.input-submit').click();
        });

        cy.get('ul li').should('have.length', 3);
        cy.get(':nth-child(1) > .TodoItem_checkbox__Tf0FQ').check();
        cy.get(':nth-child(1) > span').should('exist');
        cy.get('ul li:nth-child(1) > span').should('have.css', 'text-decoration', 'line-through solid rgb(89, 89, 89)');
        cy.get('ul li:nth-child(2) > button').click();

        cy.get('ul li').each(($li) => {
            expect($li.text()).not.to.include('Todo №2')
        });

        cy.get('ul li').should('have.length', 2);
    });
})