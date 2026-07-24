const config = {
    sitio: {
        nombre: process.env.SITIO_NOMBRE || "Ferretería Don Juan",
        telefono: process.env.SITIO_TELEFONO || "8888-8888",
        direccion: process.env.SITIO_DIRECCION || "100 m norte de la plaza central, Siquirres",
        email: process.env.SITIO_EMAIL || "info@ferreteriadonjuan.com"
    },
    redes: {
        facebook: process.env.FACEBOOK_URL || "https://facebook.com/ferreteriadonjuan",
        instagram: process.env.INSTAGRAM_URL || "https://instagram.com/ferreteriadonjuan",
        whatsapp: process.env.WHATSAPP_URL || "https://wa.me/50688888888"
    }
};

console.log("📋 Configuración del proyecto:");
console.log(`📌 Nombre: ${config.sitio.nombre}`);
console.log(`📍 Dirección: ${config.sitio.direccion}`);
console.log(`📞 Teléfono: ${config.sitio.telefono}`);
console.log(`📧 Email: ${config.sitio.email}`);
console.log("🔗 Redes sociales:", config.redes);

