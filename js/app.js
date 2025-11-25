// Array para almacenar los estudiantes
let estudiantes = [];

// Elementos del DOM
const formularioEstudiante = document.getElementById('formularioEstudiante');
const inputNombreEstudiante = document.getElementById('nombreEstudiante');
const inputEdadEstudiante = document.getElementById('edadEstudiante');
const inputNotaEstudiante = document.getElementById('notaEstudiante');
const contenedorAlertas = document.getElementById('contenedorAlertas');
const cuerpoTablaEstudiantes = document.getElementById('cuerpoTablaEstudiantes');

// Event Listener para el formulario
formularioEstudiante.addEventListener('submit', function (e) {
    e.preventDefault();
    agregarEstudiante();
});

// Función para validar datos y agregar estudiante
function agregarEstudiante() {
    // Obtener valores del formulario
    const nombre = inputNombreEstudiante.value.trim();
    const edad = parseInt(inputEdadEstudiante.value);
    const nota = parseFloat(inputNotaEstudiante.value);

    // Limpiar alertas previas
    contenedorAlertas.innerHTML = '';

    // Validaciones con condicionales (if-return)
    if (nombre === '' || edad === '' || inputNotaEstudiante.value === '') {
        mostrarAlerta('danger', '❌ Error: Todos los campos son obligatorios. Complete el formulario.');
        return;
    }

    if (isNaN(edad) || edad < 1 || edad > 120) {
        mostrarAlerta('danger', '❌ Error: La edad debe ser un número válido entre 1 y 120.');
        return;
    }

    if (isNaN(nota) || nota < 0 || nota > 20) {
        mostrarAlerta('danger', '❌ Error: La nota debe estar entre 0 y 20.');
        return;
    }

    // Crear objeto estudiante
    const estudiante = {
        id: Date.now(),
        nombre: nombre,
        edad: edad,
        nota: nota,
        estado: nota >= 10 ? 'Aprobado' : 'Reprobado'
    };

    // Agregar estudiante al array
    estudiantes.push(estudiante);

    // Mostrar alerta de éxito
    mostrarAlerta('success', '✅ Estudiante agregado correctamente.');

    // Limpiar formulario
    formularioEstudiante.reset();

    // Actualizar tabla y estadísticas
    renderizarEstudiantes();
    actualizarEstadisticas();
}

// Función para mostrar alertas
function mostrarAlerta(tipo, mensaje) {
    const divAlerta = document.createElement('div');
    divAlerta.className = `alert alert-${tipo} alert-dismissible fade show`;
    divAlerta.setAttribute('role', 'alert');
    divAlerta.innerHTML = `
        ${mensaje}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    contenedorAlertas.appendChild(divAlerta);
}

// Función para renderizar la tabla de estudiantes
function renderizarEstudiantes() {
    // Si no hay estudiantes, mostrar mensaje
    if (estudiantes.length === 0) {
        cuerpoTablaEstudiantes.innerHTML = `
            <tr>
                <td colspan="6" class="text-center text-muted py-4">
                    No hay estudiantes registrados
                </td>
            </tr>
        `;
        return;
    }

    // Limpiar tabla
    cuerpoTablaEstudiantes.innerHTML = '';

    // Usar ciclo FOR para recorrer estudiantes
    for (let i = 0; i < estudiantes.length; i++) {
        const estudiante = estudiantes[i];
        const claseEstado = estudiante.estado === 'Aprobado' ? 'badge-success' : 'badge-danger';
        const fila = document.createElement('tr');

        fila.innerHTML = `
            <td><strong>${i + 1}</strong></td>
            <td>${estudiante.nombre}</td>
            <td>${estudiante.edad} años</td>
            <td><strong>${estudiante.nota.toFixed(2)}</strong></td>
            <td>
                <span class="badge ${claseEstado}">
                    ${estudiante.estado}
                </span>
            </td>
            <td>
                <button class="btn btn-sm btn-danger" onclick="eliminarEstudiante(${estudiante.id})">
                    🗑️ Eliminar
                </button>
            </td>
        `;

        cuerpoTablaEstudiantes.appendChild(fila);
    }
}

// Función para eliminar un estudiante
function eliminarEstudiante(id) {
    // Usar ciclo WHILE para buscar y eliminar
    let i = 0;
    while (i < estudiantes.length) {
        if (estudiantes[i].id === id) {
            estudiantes.splice(i, 1);
            renderizarEstudiantes();
            actualizarEstadisticas();
            mostrarAlerta('warning', '⚠️ Estudiante eliminado.');
            break;
        }
        i++;
    }
}