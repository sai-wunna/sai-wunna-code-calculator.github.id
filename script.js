document.addEventListener('DOMContentLoaded', function () {
  const getNode = (node) => document.querySelector(node)
  const resultBox = getNode('.result')
  let currentValue = ''

  const keys = getNode('.keys')

  keys.addEventListener('click', (e) => {
    if (e.target.hasAttribute('value')) {
      currentValue += e.target.getAttribute('value')
      resultBox.textContent = currentValue
    }
    if (e.target.id === 'clear') {
      currentValue = ''
      resultBox.textContent = ''
    }
    if (e.target.id === 'ans') {
      currentValue = eval(currentValue).toFixed(2).toString()
      resultBox.textContent = currentValue
    }
    if (e.target.id === 'del') {
      currentValue = currentValue.slice(0, -1)
      resultBox.textContent = currentValue
    }
  })
})
