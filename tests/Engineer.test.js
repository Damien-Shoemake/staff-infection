const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    const testEngineer = new Engineer('Bob', 10, 'bob@gmail.com', 'BobGitsTheHub', 'Engineer');

    
    
    it('should be an extension of the Employee class with the same methods of getName(), getId(), and getEmail()', () => 
    {

        let testName = testEngineer.getName()
        let testId = testEngineer.getId()
        let testEmail = testEngineer.getEmail()


        expect(testEngineer instanceof Employee).toBe(true)
        expect(testName).toBe('Bob')
        expect(testName).toBe(testEngineer.name)
        expect(testId).toBe(10)
        expect(testId).toBe(testEngineer.id)
        expect(testEmail).toBe('bob@gmail.com')
        expect(testEmail).toBe(testEngineer.email)
        
    })
    
    it('should return "Engineer" instead of employee when getRole() is called', () => 
    {
        let testRole = testEngineer.getRole()

        expect(testRole).toBe('Engineer')
        expect(testRole).toBe(testEngineer.role)
        expect(testRole === 'Employee').toBe(false)
    })

    it('should return the last parameter when getGithub() is called', () => 
    {
        let testGithub = testEngineer.getGithub();

        expect(testGithub).toBe('BobGitsTheHub')
        expect(testGithub).toBe(testEngineer.github)
    })
})