document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()

const newTask = document.getElementById('new-task-description').value
const textValue = document.getElementById('tasks')
const newLi = document.createElement('li')
newLi.innerText = newTask
textValue.appendChild(newLi)






  })})
