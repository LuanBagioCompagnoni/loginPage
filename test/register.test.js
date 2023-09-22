const {passwordValidate} = require('../script/passwordValidator.js');

describe('Test the register of password', () => {
  it('should validate if has lower case', () => {
    expect(passwordValidate("TESTE@123")).ToBeFalsy()
  });   
  it('should validate if has number', () => {
    expect(passwordValidate("TESTE@teste@")).ToBeFalsy()
  });  
  it('should validate if has special chars', () => {
    expect(passwordValidate("Teste1234Teste")).ToBeFalsy()
  });  
  it('should validate if has the minimum of chars', () => {
    expect(passwordValidate("Teste@1")).ToBeFalsy()
  });  
  it('should validate if has upper case', () => {
    expect(passwordValidate("teste@1234")).ToBeFalsy()
  });  

});
