/// <reference types="cypress" />

import { onDialogPage } from "../../../support/page_objects/modals/dialogModalPage"
import { navigateTo } from "../../../support/page_objects/navigation/navigationpage"

describe('Dialog specific test', () => {
    beforeEach('Open home page', () => {
        cy.openHomePage()
        navigateTo.dialogModelPage()
    })

    it('Open dialog with component', () =>{
        onDialogPage.openDialogWithComponent()
        onDialogPage.elements.isdialgBoxVisible().should('be.visible')
        onDialogPage.dismissDialogBox()
    })
})