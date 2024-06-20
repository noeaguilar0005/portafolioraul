document.addEventListener("DOMContentLoaded", function() {
    const galeriaBillete = document.querySelectorAll('.galeriabillete');
    galeriaBillete.forEach(function(imagen) {
        imagen.addEventListener('click', function() {
            toggleImagen(imagen);
        });
    });

    const botonCambiar = document.getElementById('cambiarBoton');
    botonCambiar.addEventListener('click', function() {
        const primeraImagen = document.querySelector('.galeriabillete:first-child');
        toggleImagen(primeraImagen);
    });

    function toggleImagen(imagen) {
        if (imagen.src.includes('billete1')) {
            imagen.src = 'img/billete2.png'; // Cambiar a la imagen del reverso
        } else {
            imagen.src = 'img/billete1.png'; // Cambiar a la imagen del anverso
        }
    }
});
