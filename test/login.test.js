const { Login } = require('../script/login');

describe('Test login', () => {
  it('should validate if user is valid', () => {
    expect(Login("nome@gmail.com", "123")).toBeTruthy()
  });   
  it('should validate if user is invalid', () => {
    expect(Login("teste@gmail.com", "1234")).toBeFalsy()
  });   
});

