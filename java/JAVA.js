 function mostrarVistaPrevia(event) {
    const archivo = event.target.files[0];
    const vista = document.getElementById('vistaPrevia');

    if (archivo && archivo.type.startsWith('image/')) {
      const lector = new FileReader();
      lector.onload = function(e) {
        vista.src = e.target.result;
        vista.style.display = 'block';
      };
      lector.readAsDataURL(archivo);
    } else {
      vista.src = '#';
      vista.style.display = 'none';
    }
  }

  function borrarArchivo() {
    const input = document.getElementById('archivo');
    const vista = document.getElementById('vistaPrevia');
    input.value = '';
    vista.src = '#';
    vista.style.display = 'none';
  }
