let directLink = ''
document.getElementById('submit-btn').onclick = function generateLink() {
  let url = document.getElementById('user-url').value
  url = url.split('/')
  directLink = 'https://drive.google.com/uc?id=' + url[5]

  let form = document.querySelector('.new-link-container')
  let newParagraph = document.createElement('P')
  let newButton = document.createElement('BUTTON')
  newParagraph.setAttribute('class', 'new-link')
  newParagraph.setAttribute('id', 'new-link')
  newButton.setAttribute('class', 'copy-btn')
  form.appendChild(newParagraph)
  form.appendChild(newButton)

  document.querySelector('.copy-btn').innerHTML = 'copy'
  document.getElementById('new-link').innerHTML = directLink
}

document.querySelector('#copy').addEventListener('click', copy)

function copy() {
  let text = directLink
  let input = document.createElement('input')
  input.setAttribute('value', text)
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
  alert('Copied!')
}
