# 📚 Sistema de Registro de Estudiantes

## 👥 Integrantes del Grupo

- **Grupo:** 4
1. **Briggette Floril**
2. **Abigail Reyes**  
3. **Felix Narvaéz**  
4. **Katherine Vargas**  
5. **Sebastian Sandoval**  
- **Carrera:** Ingeniería en Tecnologías de la Información y Comunicaciones (TICS)
- **Ciclo:** 5to Ciclo
- **Curso:** Aplicación de Tecnologías Web

---

## 📋 Descripción General

Sistema web interactivo para gestionar el registro de estudiantes, visualizar estadísticas académicas en tiempo real y generar reportes de rendimiento. La aplicación permite registrar información de estudiantes (nombre, edad y calificación), mantener un listado dinámico, calcular estadísticas del grupo y evaluar el desempeño académico general.

**Objetivo Principal:** Aplicar conceptos fundamentales de desarrollo web (HTML5, CSS3, JavaScript) incluyendo estructuras condicionales, ciclos repetitivos y manipulación del DOM.

---

## ✨ Características Principales

### 1. **Formulario de Registro** 📝
- Captura de datos de estudiantes con validación en tiempo real
- Campos: Nombre, Edad (1-120 años), Nota Final (0-20)
- Botones para agregar y limpiar el formulario
- Mensajes de error claros y amigables

### 2. **Listado Dinámico** 📋
- Tabla Bootstrap con información completa de estudiantes
- Actualización automática al agregar o eliminar registros
- Indicadores visuales del estado (Aprobado/Reprobado)
- Botón para eliminar estudiantes

### 3. **Estadísticas en Tiempo Real** 📊
- **Total de Estudiantes:** Cantidad de registros
- **Promedio de Notas:** Cálculo automático del promedio
- **Aprobados:** Estudiantes con nota ≥ 10
- **Reprobados:** Estudiantes con nota < 10

### 4. **Generador de Reportes** 📈
- Análisis automático del rendimiento grupal
- **Buen Rendimiento** (≥ 14): Mensaje verde
- **Rendimiento Regular** (10-13.99): Mensaje amarillo
- **Rendimiento Bajo** (< 10): Mensaje rojo

### 5. **Diseño Responsivo** 🎨
- Interfaz adaptable a dispositivos móviles y escritorio
- Tema oscuro profesional
- Animaciones suaves y transiciones
- Navegación intuitiva

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| **HTML5** | - | Estructura semántica y accesibilidad |
| **CSS3** | - | Estilos, animaciones y diseño responsivo |
| **JavaScript (Vanilla)** | ES6+ | Lógica de negocio y manipulación del DOM |
| **Bootstrap** | 5.0.2 | Framework CSS para componentes y Grid |

---

## 📊 Conceptos de Programación Aplicados

### **Estructuras Condicionales (if-else, switch)**
```javascript
// Validación de campos obligatorios
if (nombre === '' || edad === '' || nota === '') {
    mostrarAlerta('danger', 'Campos obligatorios');
    return;
}

// Determinación de estado de estudiante
if (nota >= 10) {
    estado = 'Aprobado';
} else {
    estado = 'Reprobado';
}

// Clasificación de rendimiento
if (promedio >= 14) {
    // Buen rendimiento
} else if (promedio >= 10) {
    // Rendimiento regular
} else {
    // Rendimiento bajo
}
```

### **Ciclos Repetitivos (for, while, do-while)**

**FOR - Renderización de tabla:**
```javascript
for (let i = 0; i < estudiantes.length; i++) {
    // Crear fila de tabla para cada estudiante
}
```

**WHILE - Búsqueda y eliminación:**
```javascript
let i = 0;
while (i < estudiantes.length) {
    if (estudiantes[i].id === id) {
        estudiantes.splice(i, 1);
        break;
    }
    i++;
}
```

**DO-WHILE - Cálculo de estadísticas:**
```javascript
let i = 0;
do {
    sumaNotas += estudiantes[i].nota;
    if (estudiantes[i].nota >= 10) {
        cantidadAprobados++;
    }
    i++;
} while (i < total);
```

### **Manipulación del DOM**
- Selección de elementos: `getElementById()`, `querySelector()`
- Creación de elementos: `createElement()`
- Modificación de contenido: `innerHTML`, `textContent`
- Manejo de eventos: `addEventListener()`
- Actualización de clases: `classList.add()`, `classList.remove()`

---

## 📦 Estructura del Proyecto

```
PTOY_GRUPO_4_DASHBOARD/
├── index.html              # Página principal (HTML5 semántico)
├── css/
│   └── styles.css          # Estilos personalizados
├── js/
│   └── app.js              # Lógica principal de la aplicación
├── vendor/
│   └── bootstrap-5.0.2-dist/  # Framework Bootstrap
│       ├── css/
│       └── js/
└── README.md               # Este archivo

```

---


## ✅ Validaciones Implementadas

| Validación | Condición | Mensaje |
|-----------|-----------|---------|
| Campos obligatorios | Todos los campos vacíos | "Todos los campos son obligatorios" |
| Rango de edad | edad < 1 o edad > 120 | "La edad debe estar entre 1 y 120" |
| Rango de nota | nota < 0 o nota > 20 | "La nota debe estar entre 0 y 20" |
| Tipo de dato | NaN (Not a Number) | Error automático |

---

## 📊 Criterios de Calificación

**Nota de corte:** 10 puntos

| Nota | Estado |
|------|--------|
| < 10 | Reprobado ❌ |
| ≥ 10 | Aprobado ✅ |

---

## 📈 Criterios de Rendimiento Grupal

| Promedio | Clasificación | Color |
|----------|---------------|-------|
| ≥ 14.00 | Buen Rendimiento | Verde ✅ |
| 10.00 - 13.99 | Rendimiento Regular | Amarillo ⚠️ |
| < 10.00 | Rendimiento Bajo | Rojo ❌ |

---

## 🎨 Paleta de Colores

```
Primario:    #0d6efd (Azul)
Éxito:       #198754 (Verde)
Peligro:     #dc3545 (Rojo)
Advertencia: #ffc107 (Amarillo)
Información: #0dcaf0 (Cian)
```

---

## 🔧 Funciones Principales del Código

### **Función: `agregarEstudiante()`**
- Valida los datos ingresados
- Crea un objeto estudiante
- Agrega a la lista
- Actualiza tabla y estadísticas

### **Función: `renderizarEstudiantes()`**
- Genera las filas de la tabla dinámicamente
- Usa ciclo FOR para iterar
- Asigna estado visual (badge)

### **Función: `actualizarEstadisticas()`**
- Calcula total de estudiantes
- Utiliza DO-WHILE para calcular promedio
- Cuenta aprobados y reprobados

### **Función: `eliminarEstudiante(id)`**
- Busca estudiante por ID (WHILE)
- Elimina del array
- Actualiza interfaz

### **Función: `mostrarAlerta(tipo, mensaje)`**
- Crea alertas Bootstrap dinámicas
- Soporta tipos: danger, warning, success

### **Función: Generar Reporte**
- Calcula promedio final
- Determina categoría con condicionales
- Muestra reportaje visual con scroll automático

---

## 📝 Notas Importantes

- **Datos Locales:** Los datos se almacenan en memoria. Se pierden al recargar la página.
- **Validación:** Todas las validaciones ocurren en el cliente.
- **Responsivo:** La aplicación se adapta automáticamente al tamaño de pantalla.
- **Accesibilidad:** Implementa atributos ARIA y etiquetas semánticas.

---

## 🐛 Casos de Uso Comunes

### **Caso 1: Crear un grupo de 5 estudiantes**
1. Abre la aplicación
2. Ingresa 5 estudiantes con notas variadas
3. Observa cómo se actualiza la tabla y estadísticas
4. Genera el reporte para analizar el rendimiento

### **Caso 2: Eliminar un estudiante**
1. Haz clic en "🗑️ Eliminar" en la fila del estudiante
2. Las estadísticas se recalculan automáticamente
3. El reporte anterior se oculta

### **Caso 3: Mejorar promedio del grupo**
1. Genera un reporte inicial
2. Agrega nuevos estudiantes con notas altas
3. Genera nuevo reporte para comparar

---

## 📚 Referencias y Recursos

### **Documentación Oficial**
- [MDN - HTML5](https://developer.mozilla.org/es/docs/Web/HTML)
- [MDN - CSS3](https://developer.mozilla.org/es/docs/Web/CSS)
- [MDN - JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.0/)

### **Conceptos Clave**
- Estructuras de control (if, else, switch)
- Ciclos (for, while, do-while)
- Manipulación del DOM
- Event Listeners
- Validación de formularios

---