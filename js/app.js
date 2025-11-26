// Array para almacenar los estudiantes
let estudiantes = [];

// Elementos del DOM
const formularioEstudiante = document.getElementById('formularioEstudiante');
const inputNombreEstudiante = document.getElementById('nombreEstudiante');
const inputEdadEstudiante = document.getElementById('edadEstudiante');
const inputNotaEstudiante = document.getElementById('notaEstudiante');
const contenedorAlertas = document.getElementById('contenedorAlertas');
const cuerpoTablaEstudiantes = document.getElementById('cuerpoTablaEstudiantes');
const elementoTotalEstudiantes = document.getElementById('totalEstudiantes');
const elementoPromedioNotas = document.getElementById('promedioNotas');
const elementoCantidadAprobados = document.getElementById('aprobados');
const elementoCantidadReprobados = document.getElementById('reprobados');
const botonGenerarReporte = document.getElementById('botonGenerarReporte');
const contenedorReporte = document.getElementById('contenedorReporte');

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
        mostrarAlerta('danger', 'Error: Todos los campos son obligatorios. Complete el formulario.');
        return;
    }

    if (isNaN(edad) || edad < 1 || edad > 120) {
        mostrarAlerta('danger', 'Error: La edad debe ser un número válido entre 1 y 120.');
        return;
    }

    if (isNaN(nota) || nota < 0 || nota > 20) {
        mostrarAlerta('danger', 'Error: La nota debe estar entre 0 y 20.');
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
    mostrarAlerta('success', 'Estudiante agregado correctamente.');

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
                    Eliminar
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

// Función para calcular y actualizar estadísticas
function actualizarEstadisticas() {
    // Total de estudiantes
    const total = estudiantes.length;
    elementoTotalEstudiantes.textContent = total;

    // Si no hay estudiantes, resetear valores
    if (total === 0) {
        elementoPromedioNotas.textContent = '0.00';
        elementoCantidadAprobados.textContent = '0';
        elementoCantidadReprobados.textContent = '0';
        return;
    }

    // Usar ciclo DO-WHILE para calcular promedio
    let sumaNotas = 0;
    let cantidadAprobados = 0;
    let i = 0;

    do {
        sumaNotas += estudiantes[i].nota;
        
        // Condicional para contar aprobados
        if (estudiantes[i].nota >= 10) {
            cantidadAprobados++;
        }
        
        i++;
    } while (i < total);

    // Calcular promedio
    const promedio = sumaNotas / total;
    const cantidadReprobados = total - cantidadAprobados;

    // Actualizar elementos
    elementoPromedioNotas.textContent = promedio.toFixed(2);
    elementoCantidadAprobados.textContent = cantidadAprobados;
    elementoCantidadReprobados.textContent = cantidadReprobados;
}

// Función para generar reporte
botonGenerarReporte.addEventListener('click', function () {
    // Si no hay estudiantes, mostrar alerta
    if (estudiantes.length === 0) {
        mostrarAlerta('danger', 'No hay estudiantes para generar reporte.');
        return;
    }

    // Calcular promedio (usando el valor ya calculado)
    let sumaNotas = 0;
    for (let i = 0; i < estudiantes.length; i++) {
        sumaNotas += estudiantes[i].nota;
    }
    const promedio = sumaNotas / estudiantes.length;

    // Variable para almacenar el HTML del reporte
    let htmlReporte = '';
    let claseReporte = '';
    let tituloReporte = '';
    let mensajeReporte = '';

    // Condicionales para determinar rendimiento
    if (promedio >= 14) {
        claseReporte = 'report-success';
        tituloReporte = '¡Buen Rendimiento!';
        mensajeReporte = `El grupo tiene un excelente promedio de <strong>${promedio.toFixed(2)}</strong>/20. ¡Continúen así!`;
    } 
    else if (promedio >= 10 && promedio < 14) {
        claseReporte = 'report-warning';
        tituloReporte = 'Rendimiento Regular';
        mensajeReporte = `El grupo tiene un promedio de <strong>${promedio.toFixed(2)}</strong>/20. Hay espacio para mejorar.`;
    } 
    else {
        claseReporte = 'report-danger';
        tituloReporte = 'Rendimiento Bajo';
        mensajeReporte = `El grupo tiene un promedio de <strong>${promedio.toFixed(2)}</strong>/20. Se requiere mayor esfuerzo.`;
    }

    // Generar HTML del reporte
    htmlReporte = `
        <div class="${claseReporte}">
            <h3>${tituloReporte}</h3>
            <p>${mensajeReporte}</p>
            <hr style="background-color: rgba(255, 255, 255, 0.3);">
            <div style="text-align: left; max-width: 400px; margin: 1rem auto;">
                <p><strong>Detalles:</strong></p>
                <p>• Total de estudiantes: <strong>${estudiantes.length}</strong></p>
                <p>• Promedio general: <strong>${promedio.toFixed(2)}</strong>/20</p>
                <p>• Aprobados: <strong>${document.getElementById('aprobados').textContent}</strong></p>
                <p>• Reprobados: <strong>${document.getElementById('reprobados').textContent}</strong></p>
            </div>
        </div>
    `;

    // Inyectar reporte en el contenedor
    contenedorReporte.innerHTML = htmlReporte;
    contenedorReporte.classList.remove('d-none');

    // Scroll automático al reporte
    contenedorReporte.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function () {
    renderizarEstudiantes();
    actualizarEstadisticas();
});
