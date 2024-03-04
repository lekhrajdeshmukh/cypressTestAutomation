/// <reference types="cypress"/>

function navigateToMainMenu(menuName) {
    cy.contains('a', menuName).then(menu => {
        cy.wrap(menu).find('.expand-state svg g g').invoke('attr', 'data-name').then(attr => {
            if (attr.includes('left')) {
                cy.wrap(menu).click()
            }
        })
    })
}

export class NavigationPage {

    formLayoutPage() {
        navigateToMainMenu('Forms')
        cy.contains('Form Layouts').click()
    }

    datePickerPage(){
        navigateToMainMenu('Forms')
        cy.contains('Datepicker').click()
    }

    dialogModelPage(){
        navigateToMainMenu('Modal & Overlays')
        cy.contains('Dialog').click()
    }

    windowModelPage(){
        navigateToMainMenu('Modal & Overlays')
        cy.contains('Window').click()
    }

    popupModelPage(){
        navigateToMainMenu('Modal & Overlays')
        cy.contains('Popover').click()
    }

    toasterModelPage(){
        navigateToMainMenu('Modal & Overlays')
        cy.contains('Toastr').click()
    }

    tooltipModelPage(){
        navigateToMainMenu('Modal & Overlays')
        cy.contains('Tooltip').click()
    }

    calanderPage(){
        navigateToMainMenu('Extra Components')
        cy.contains('Calendar').click()
    }

    smartTablePage(){
        navigateToMainMenu('Tables & Data')
        cy.contains('Smart Table').click()
    }

    treeGridPage(){
        navigateToMainMenu('Tables & Data')
        cy.contains('Tree Grid').click()
    }

    loginAuthPage(){
        navigateToMainMenu('Tables & Data')
        cy.contains('Login').click()
    }

    registerAuthPage(){
        navigateToMainMenu('Tables & Data')
        cy.contains('Register').click()
    }

    requestPasswordPage(){
        navigateToMainMenu('Tables & Data')
        cy.contains('Request Password').click()
    }

    resetPasswordPage(){
        navigateToMainMenu('Tables & Data')
        cy.contains('Reset Password').click()
    }
}

export const navigateTo = new NavigationPage()