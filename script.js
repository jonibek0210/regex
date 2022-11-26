let patterns = {
   name: /^[a-zA-Z]*$/,
   email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
   phone: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
   age: /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|100)$/,
   about: /^[a-zA-Z]*$/,
   js: /^[a-zA-Z]*$/,
   html: /^[a-zA-Z]*$/,
   css: /^[a-zA-Z]*$/,
   js: /^[a-zA-Z]*$/,
}

let form = document.forms.register
let inputs = form.querySelectorAll('.input__need')
let error = document.querySelector('.error span')
let success = document.querySelector('.success span')

function validate(field, regex) {
   if (regex.test(field.value)) {
      field.classList.add('valid')
      field.classList.remove('invalid')

      field.nextElementSibling.style.display = 'none'
      field.nextElementSibling.nextElementSibling.innerHTML = 'Successfully'
      field.nextElementSibling.nextElementSibling.style.color = '#4200FF'
      field.previousElementSibling.style.color = '#000000'
   } else {
      field.classList.remove('valid')
      field.classList.add('invalid')

      field.nextElementSibling.style.display = 'block'
      field.nextElementSibling.nextElementSibling.innerHTML = `Please, enter ${field.nextElementSibling.nextElementSibling.innerHTML.innerHTML}`
      field.nextElementSibling.nextElementSibling.style.color = '#EE0004' 
      field.previousElementSibling.style.color = '#EE0004'
   }
}
inputs.forEach(inp => {
   inp.onkeyup = () => {
      validate(inp, patterns[inp.name])
   }
})

form.onsubmit = (event) => {
   event.preventDefault()

   let countErr = 1
   let countsuccess = 1
   inputs.forEach(inp => {
      let imgErr = inp.nextElementSibling
      let text = inp.previousElementSibling
      let needText = inp.nextElementSibling.nextElementSibling
      if (inp.value.length === 0) {
         error.innerHTML = countErr++
         inp.classList.add('invalid')

         imgErr.style.display = 'block'
         needText.innerHTML = `Please, enter ${text.innerHTML}`
         needText.style.color = '#EE0004'
         text.style.color = '#EE0004'

      } else {
         success.innerHTML = countsuccess++
         imgErr.style.display = 'none'
         needText.innerHTML = 'Successfully'
         needText.style.color = '#4200FF'
         text.style.color = '#000000'
      }
   })
   submit()
}

function submit() {
   let user = {}
   let fm = new FormData(form)
   fm.forEach((value, key) => {
      user[key] = value
   })

   console.log(user);
}