const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager Class', () => {
    const testManager = new Manager('Jim Bob', 42, 'bossman@gmail.com', 1, 'Manager')

    it('should be an extension of the Employee class with the same methods of getName(), getId(), and getEmail()', () => 
    {

        let testName = testManager.getName()
        let testId = testManager.getId()
        let testEmail = testManager.getEmail()


        expect(testManager instanceof Employee).toBe(true)
        expect(testName).toBe('Jim Bob')
        expect(testName).toBe(testManager.name)
        expect(testId).toBe(42)
        expect(testId).toBe(testManager.id)
        expect(testEmail).toBe('bossman@gmail.com')
        expect(testEmail).toBe(testManager.email)
        
    })

    it('should return "Manager" instead of "Employee" when getRole() is called', () => 
    {
        let testRole = testManager.getRole()

        expect(testRole).toBe('Manager')
        expect(testRole).toBe(testManager.role)

    })

    it('should return the office number passed in the 4th parameter when getOfficeNumber() is called', () => 
    {
        let testOfficeNumber = testManager.getOfficeNumber()

        expect(testOfficeNumber).toBe(1)
        expect(testOfficeNumber).toBe(testManager.officeNumber)
    })


})