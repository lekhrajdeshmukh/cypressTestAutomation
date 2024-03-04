/// <reference types="cypress" />

describe("E2E test suite for different types of objects", () => {
    it("Web table filter", () => {
        cy.visit('/')
        cy.get(`[data-name='chevron-left']`).eq(4).click()
        cy.get(`[title="Smart Table"]`).click()
        let age = [20, 30, 40, 400]
        age.forEach(age => {
            cy.get(`[placeholder='Age']`).clear().type(age)
            cy.wait(500)
            cy.get(`tbody tr`).each(tableRow => {
                if (age == 400) {
                    cy.wrap(tableRow).should('contain', 'No data found')
                } else {
                    cy.wrap(tableRow).find(`td`).eq(6).should('contain', age)
                }
            })
        })
    })

    it(`Tooltip test`, () => {
        cy.visit('/')
        cy.contains(`Modal & Overlays`).click()
        cy.contains(`Tooltip`).click()
        cy.contains(`Show Tooltip`).click()
        cy.get(`nb-tooltip`).find(`span`).should('contain', `This is a tooltip`)
    })

    it(`Dialog box test`, () => {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        // To assert whether record is deleted or not
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get(('tbody>tr')).first().find('.nb-trash').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        })
    })

    it.only('Cancel dialog box test', () => {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()
        cy.get(('tbody>tr')).first().find('.nb-trash').click()
        cy.on('window:confirm', () => false)
    })
})
