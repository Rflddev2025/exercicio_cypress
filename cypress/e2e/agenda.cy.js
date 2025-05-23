describe('Agenda de Contatos', () => {
    beforeEach(() => {
        cy.visit(' https://agenda-contatos-react.vercel.app/');
    });

    it('deve adicionar um novo contato', () => {
    cy.get('input[placeholder="Nome"]').type('João da Silva');
    cy.get('input[placeholder="E-mail"]').type('joao@teste.com');
    cy.get('input[placeholder="Telefone"]').type('11988887777');
    cy.get('button.adicionar').click();

    cy.contains('João da Silva').should('exist');
    cy.contains('joao@teste.com').should('exist');
    cy.contains('11988887777').should('exist');
    });

    it('deve editar um contato existente', () => {
    cy.contains('Editar').first().click();

    cy.get('input[placeholder="Nome"]').clear().type('Nome Alterado');
    cy.get('input[placeholder="E-mail"]').clear().type('novo@email.com');
    cy.get('input[placeholder="Telefone"]').clear().type('11999990000');
    cy.get('button.adicionar').click();

    cy.contains('Nome Alterado').should('exist');
    cy.contains('novo@email.com').should('exist');
    cy.contains('11999990000').should('exist');
    });

    it('deve remover um contato', () => {
    cy.contains('Deletar').first().click();


    cy.get('.contato').should('have.length.lessThan', 3);
    });
});
