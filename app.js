var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('No soy un asesor financiero, todo el contenido proporcionado en este sitio es de mero carácter educativo, basado en mi propio éxito y experiencia personal. Actúa de manera responsable e inteligente a la hora de gastar e invertir tu dinero.', 'success')
  })
}