/// <reference types="cypress" />

class PopupOverPage {
    element = {
        popupOptionButton : (buttonName) => cy.get(`button[nbpopoverplacement='${buttonName}']`)
    }
    hoverOnLeftButton(){
        this.element.popupOptionButton('left').trigger('mouseover')
    }
}
export const onPopupOverPage = new PopupOverPage()