const parser = new DOMParser()
const serializer = new XMLSerializer()

const { form }  = document.forms

function updateOutput() {
    const { input, output } = form.elements
    const xhtml = serializer.serializeToString(parser.parseFromString(input.value, 'text/html'))
    output.value = xhtml
} 

form.oninput = updateOutput

updateOutput()
