const { Login } = require('../script/login');

describe('Test login', () => {
  it('should validate the credentials of login', () => {
    expect(Login("nome@gmail.com", "123")).toBeTruthy()
  });   
});
