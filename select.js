export default class Select {
    constructor(selectElement) {
        this.selectElement = selectElement
        this.options = getFormattedOptions(element.querySelectorAll("option"))
        this.customElement = document.createElement('div')
        this.labelElement = document.createElement('span')
        this.optionsCustomElement = document.createElement('ul')
        setupCustomElement(this)
    }
}

function setupCustomElement(select) {
    select.customElement.classList.add('custom-select-container')

    select.labelElement.classList.add('custom-select-value')
    select.labelElement.innerText = select.selectedOption.value
    select.customElement.append(select.labelElement)

    select.optionsCustomElement.classList.add('custom-select-options')
    select.options.forEach(option => {
        const optionElement = document.createElement("li")
        optionElement.classList.add("custom-select-option")
        optionElement.classList.toggle("selected", optionElement.selected)
        optionElement.innerText = option.label
        optionElement.dataset.value = option.value
    })
    select.customElement.append(select.optionsCustomElement)
}

function getFormattedOptions(optionElements) {
    [...optionElements].forEach(optionElement => {
        return {
            value: optionElement.value,
            label: optionElement.label,
            selected: optionElement.selected,
            element: optionElement
        }
    })
}