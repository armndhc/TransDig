// Función para actualizar el texto del label y el estilo cuando se selecciona un archivo
function handleFileSelect(inputElement, labelElement) {
    inputElement.addEventListener('change', function() {
        if (inputElement.files.length > 0) {
            labelElement.textContent = inputElement.files[0].name;  // Muestra el nombre del archivo seleccionado
            labelElement.classList.add('file-selected');  // Añade una clase para cambiar el estilo
        } else {
            labelElement.textContent = 'Subir archivo';  // Vuelve a mostrar el texto original si no hay archivo
            labelElement.classList.remove('file-selected');
        }
    });
}

// Asignar la función a cada input de tipo file
const fotoInput = document.getElementById('foto');
const fotoLabel = document.querySelector('label[for="foto"]');
handleFileSelect(fotoInput, fotoLabel);

const historialInput = document.getElementById('historial');
const historialLabel = document.querySelector('label[for="historial"]');
handleFileSelect(historialInput, historialLabel);