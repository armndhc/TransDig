function parseCSV(text) {
    const rows = [];
    let inQuotes = false;
    let currentRow = [];
    let currentValue = '';

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        const nextChar = text[i + 1];

        if (char === '"') {
            if (inQuotes && nextChar === '"') {
                // Si estamos dentro de comillas y encontramos un doble ", es una comilla escapada
                currentValue += '"';
                i++;
            } else {
                // Alternamos el estado de las comillas
                inQuotes = !inQuotes;
            }
        } else if (char === ',' && !inQuotes) {
            // Si encontramos una coma fuera de comillas, es el separador de columnas
            currentRow.push(currentValue.trim());
            currentValue = '';
        } else if (char === '\n' && !inQuotes) {
            // Si encontramos un salto de línea fuera de comillas, es el fin de la fila
            currentRow.push(currentValue.trim());
            rows.push(currentRow);
            currentRow = [];
            currentValue = '';
        } else {
            // Si es cualquier otro carácter, lo añadimos al valor actual
            currentValue += char;
        }
    }

    // Añadir la última fila si no terminamos con un salto de línea
    if (currentValue) {
        currentRow.push(currentValue.trim());
        rows.push(currentRow);
    }

    return rows;
}

async function loadCourses() {
    const response = await fetch('../historicosR.csv');
    const arrayBuffer = await response.arrayBuffer();
    const text = new TextDecoder('utf-8').decode(arrayBuffer);

    // Ignorar la primera fila (cabecera)
    const rows = parseCSV(text).slice(1);

    // Mapear las filas a objetos de curso
    const courses = rows.map(row => {
        const [id, description, rutapdf, rutaimg] = row;

        return {
            id: parseInt(id, 10),
            description: description.replace(/"/g, '').trim(),
            rutapdf: '../pdfs/historicos/' + rutapdf.replace(/"/g, '').trim(),
            rutaimg: '../images/historicos/' + rutaimg.replace(/"/g, '').trim()
        };
    }).filter(course => course.id); // Filtrar cursos con ID válido

    return courses; // Retornamos los cursos procesados
}

function renderPreview(course) {
    const preview = document.getElementById('coursePreview');

    if (!course) {
        preview.innerHTML = '';
        return;
    }

    preview.innerHTML = `
        <div class="course-card">
            <div class="card-header" style="background-image: url('${course.rutaimg}');"></div>
            <div class="card-content">
                <p class="card-description">${course.description}</p>
            </div>
            <div class="card-footer">
                <a href="${course.rutapdf}" class="btn" target="_blank" rel="noopener noreferrer">Más información</a>
            </div>
        </div>
    `;
}

async function renderCourses() {
    const courses = await loadCourses();
    const courseList = document.getElementById('courseList');

    const options = courses
        .map(course => `<option value="${course.id}">${course.description}</option>`)
        .join('');

    courseList.innerHTML = `
        <select id="courseSelect" class="course-dropdown">
            <option value="" disabled selected>Selecciona un reporte...</option>
            ${options}
        </select>
    `;

    const select = document.getElementById('courseSelect');
    select.addEventListener('change', (e) => {
        const selectedCourse = courses.find(c => c.id === parseInt(e.target.value, 10));
        if (selectedCourse) {
            window.open(selectedCourse.rutapdf, '_blank');
        }
    });
}

document.addEventListener('DOMContentLoaded', renderCourses);
