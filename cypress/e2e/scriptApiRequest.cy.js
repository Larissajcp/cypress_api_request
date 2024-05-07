describe('API Testing - Validate Todos', () => {

  it('Validate Todos status and due_on field', () => {

    cy.request({
      method:'GET', 
      url:'https://gorest.co.in/public/v2/todos', 
      timeout: 40000})
      .then((response) => {
        expect(response.status).to.eq(200); 

        const todos = response.body;

        
        todos.forEach((todo) => {
          expect(todo.status).to.eq('completed'); 
          expect(todo.due_on).to.not.be.empty; 
        });
      });
  });
});
