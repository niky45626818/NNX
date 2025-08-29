// --- MENU HAMBURGUESA ---
const menuToggle = document.getElementById('menu-toggle');
const navUl = document.querySelector('nav ul');
menuToggle.onclick = () => navUl.classList.toggle('open');

// --- SERVICIOS: hover difuso y productos ---
document.querySelectorAll('.servicio').forEach(btn => {
    const img = btn.dataset.img;
    btn.querySelector('.servicio-overlay').style.backgroundImage = `url(${img})`;

    btn.addEventListener('click', () => {
        mostrarDetalleServicio(btn);
    });
});

const productosPorServicio = {
    "Aires Acondicionados": [
        {nombre: "Split Frío-Calor", desc: "Eficiencia energética y bajo consumo."},
        {nombre: "Inverter", desc: "Tecnología avanzada y silenciosa."}
    ],
    "Calderas": [
        {nombre: "Caldera mural", desc: "Compacta y segura para hogares."},
        {nombre: "Caldera industrial", desc: "Gran potencia y rendimiento."}
    ],
    "Radiadores": [
        {nombre: "Radiador panel", desc: "Ideal para ambientes amplios."},
        {nombre: "Radiador toallero", desc: "Funcionalidad y diseño en tu baño."}
    ],
    "Pisos Radiantes": [
        {nombre: "Piso radiante eléctrico", desc: "Confort uniforme y control preciso."},
        {nombre: "Piso radiante por agua", desc: "Ecológico y eficiente."}
    ],
    "Mantenimiento": [
        {nombre: "Mantenimiento anual", desc: "Prevención de fallas y ahorro."},
        {nombre: "Reparaciones", desc: "Soluciones rápidas y efectivas."}
    ],
    "Asesoría": [
        {nombre: "Asesoría técnica", desc: "Consultoría en climatización."},
        {nombre: "Diseño de sistemas", desc: "Planificación a medida."}
    ],
};

function mostrarDetalleServicio(btn) {
    const nombre = btn.innerText.trim();
    const detalle = document.getElementById('servicios-detalle');
    const productos = productosPorServicio[nombre] || [];
    let html = `<h3>${nombre}</h3><div class="productos-lista">`;
    productos.forEach(prod => {
        html += `<div class="producto-item">
                    <h4>${prod.nombre}</h4>
                    <p>${prod.desc}</p>
                    <button class="cotizar-btn">Cotizar</button>
                 </div>`;
    });
    html += `</div>`;
    detalle.innerHTML = html;
    detalle.classList.add('active');
    detalle.scrollIntoView({behavior:"smooth"});
    // botón cotizar puede llevar a contacto o WhatsApp, agregar evento si querés.
}

// --- CONTADORES ANIMADOS ---
document.querySelectorAll('.contador-num').forEach(contador => {
    const target = +contador.dataset.target;
    let count = 0;
    const step = Math.max(1, Math.floor(target / 60));
    function animate() {
        if(count < target){
            count += step;
            contador.textContent = '+' + (count > target ? target : count);
            requestAnimationFrame(animate);
        } else {
            contador.textContent = '+' + target;
        }
    }
    animate();
});
