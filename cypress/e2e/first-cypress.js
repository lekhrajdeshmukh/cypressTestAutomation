/// <reference types="cypress" />

describe('E2E test suits for user journey',()=>{
    let productName = `Test automation book`
    let bookName = `Test Automation Fundamentals`
    
    it(`search for the product`,()=>{
        cy.visit('/')
        cy.wait(1000)
        cy.get(`#js-first-screen-accept-all-button`).click()
        cy.get(`[data-test='continue-button']`).click()
        cy.get(`#searchfor`).type(productName)
        cy.wait(1000)
        cy.get(`[data-test='icon-search-vi']`).click()
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // handle the error or return false to ignore it
        return false;
      });

      it(`extract text value`,()=>{
        cy.visit('/')
        cy.wait(1000)
        cy.get(`#js-first-screen-accept-all-button`).click()
        cy.get(`[data-test='continue-button']`).click()
        cy.get(`#searchfor`).type(productName)
        cy.wait(1000)
        //4 Assert the property value using invoke()
        cy.get(`#searchfor`).invoke('prop', 'value').should('contain',productName)

        cy.get(`[data-test='icon-search-vi']`).click()

        //1
        cy.get(`[data-test='category-menu']`).should('contain','Categorieën')

        //2
        cy.get(`[data-test='inspiration-menu']`).then(label =>{
            const labelText = label.text()
            expect(labelText).to.contain('Cadeaus & Inspiratie')
            cy.wrap(labelText).should('contain','Cadeaus & Inspiratie')
        })

        //3
        cy.get(`[data-test='deals-menu']`).invoke('text').then(label => {
            expect(label).to.contain('Aanbiedingen')
        })
        cy.get(`[data-test='deals-menu']`).invoke('text').as('labelText').should('contain', 'Aanbiedingen')

        //4
        
      })

      it(`input radio button`,()=>{
        cy.visit('/')
        cy.wait(1000)
        cy.get(`#js-first-screen-accept-all-button`).click()
        cy.get(`[data-test='continue-button']`).click()
        cy.get(`#searchfor`).type(productName)
        cy.wait(1000)
        cy.get(`[data-test='icon-search-vi']`).click()
        cy.get(`[type='radio']`).eq(0).check().should('be.checked')
        cy.get(`[type='radio']`).eq(1).check().should('be.checked')
        cy.get(`[type='radio']`).eq(0).should('not.be.checked')
        
      })

      it.only(`input checkbox`,()=>{
        cy.visit('/')
        cy.wait(1000)
        cy.get(`#js-first-screen-accept-all-button`).click()
        cy.get(`[data-test='continue-button']`).click()
        cy.get(`#searchfor`).type(productName)
        cy.wait(1000)
        cy.get(`[data-test='icon-search-vi']`).click()
        cy.get(`div.facet-control.js_multiselect_control>div>div>div>div>label>input[type='checkbox']`).eq(0).check({force:true}).should('be.checked')
        // cy.get(`div.facet-control.js_multiselect_control>div>div>div>div>label>div>div.ui-input-checkbox__control`).eq(0).check().should('be.checked')
        // cy.get(`div.facet-control.js_multiselect_control>div>div>div>div>label>div>div.ui-input-checkbox__control`).eq(0).should('be.checked')
      })

})