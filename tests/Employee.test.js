const Employee = require('../lib/Employee');

describe('Employee Class', () => {
    it('should be able to create a new employee class when called with a new keyword', () => 
    {
        const testEmployee = new Employee();
        expect(typeof(testEmployee)).toBe('object');
    })

    it('should return "Employee" when the getRole() method is called', () => 
    {
        const testEmployee2 = new Employee();
        let testRole = testEmployee2.getRole()

        expect(testRole).toBe('Employee')
    })

    it('should return the first parameter passed when getName() is called', () => 
    {
        const bobby = new Employee('Bobby', 5, 'goshdarnitbobby@gmail.com');

        let testName = bobby.getName()

        expect(testName).toBe('Bobby')
        expect(testName).toBe(bobby.name)

    })

    it('should return the second parameter passed when getId() is called', () => 
    {
        const notBobby = new Employee('Jim Bob', 15, 'JimboSlice@gmail.com')

        let testId = notBobby.getId();

        expect(testId).toBe(15)
        expect(testId).toBe(notBobby.id)
    })

    it('should return the third parameter passed when getEmail() is called', () => 
    {
        const mojoJojo = new Employee('Mojo Jojo', 10, 'JojoNotJoestar@gmail.com')

        let testEmail = mojoJojo.getEmail();

        expect(testEmail).toBe('JojoNotJoestar@gmail.com')
        expect(testEmail).toBe(mojoJojo.email)
    })
})

const logEmployee = new Employee();

