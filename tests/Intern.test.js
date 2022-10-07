const Intern = require('../lib/Intern')
const Employee = require('../lib/Employee');

describe('Intern Class', () => {
    const testIntern = new Intern('Jimmy', 10, 'whippingboy@gmail.com', 'Texas State', 'Intern')


    it('should be an extension of the Employee class with the same methods of getName(), getId(), and getEmail()', () => 
    {
        let testName = testIntern.getName()
        let testId = testIntern.getId()
        let testEmail = testIntern.getEmail()


        expect(testIntern instanceof Employee).toBe(true)
        expect(testName).toBe('Jimmy')
        expect(testName).toBe(testIntern.name)
        expect(testId).toBe(10)
        expect(testId).toBe(testIntern.id)
        expect(testEmail).toBe('whippingboy@gmail.com')
        expect(testEmail).toBe(testIntern.email)
    })

    it('should return the 4th parameter when getRole() is called instead of "Employee" ', () => 
    {
        let testRole = testIntern.getRole();


        expect(testRole).toBe('Intern')
        expect(testRole).toBe(testIntern.role)

    })

    it('should return the school passed in the final parameter when getSchool() is called', () => 
    {
        let testSchool = testIntern.getSchool();

        expect(testSchool).toBe('Texas State')
        expect(testSchool).toBe(testIntern.school)
    })
})