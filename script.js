window.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const menuContacto = document.getElementById('menu-contacto');

  toggle.addEventListener('click', () => {
    menuContacto.classList.toggle('activo');
  });

  const productoSelect = document.getElementById('producto-select');
  const imagen = document.getElementById('imagen-producto');

  productoSelect.addEventListener('change', () => {
    const producto = productoSelect.value;
    imagen.src = `assets/${producto}.jpg`;
    imagen.alt = `Producto artesanal: ${producto}`;
  });
});
