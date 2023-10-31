function cargarCorreos() {
    const correosRegistrados = JSON.parse(localStorage.getItem('correos'));
    if (correosRegistrados) {
        const listaCorreos = document.getElementById('listaCorreos');
        listaCorreos.innerHTML = ''; // Limpia la lista actual
        correosRegistrados.forEach(function (email) {
            const listItem = document.createElement('li');
            listItem.textContent = email;
            listaCorreos.appendChild(listItem);
        });
    }
}

// Función para guardar los correos electrónicos en el almacenamiento local
function guardarCorreo(email) {
    let correosRegistrados = JSON.parse(localStorage.getItem('correos')) || [];
    correosRegistrados.push(email);
    localStorage.setItem('correos', JSON.stringify(correosRegistrados));
}

// Obtén el formulario y la lista
const registroForm = document.getElementById('registroForm');

// Cargar los correos al cargar la página
cargarCorreos();

// Agrega un evento de envío al formulario
registroForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que se recargue la página

    // Obtiene el valor del campo de correo electrónico
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    // Valida que el correo electrónico no esté en la lista
    if (localStorage.getItem('correos')) {
        const correosRegistrados = JSON.parse(localStorage.getItem('correos'));
        if (correosRegistrados.includes(email)) {
            alert('Este correo electrónico ya ha sido registrado.');
            return;
        }
    }

    // Guarda el correo electrónico en el almacenamiento local y actualiza la lista
    guardarCorreo(email);
    cargarCorreos();

    // Limpia el campo de correo electrónico
    emailInput.value = '';
});