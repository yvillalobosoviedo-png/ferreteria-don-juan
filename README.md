
# 🏗️ Ferretería Don Juan

Sitio web informativo para la ferretería "Don Juan", ubicada en el centro de Siquirres, Limón, Costa Rica. El sitio permite a los clientes visualizar productos, ofertas y servicios, facilitando el contacto y la comunicación con el negocio.

**El sitio incluye:**
- Página de inicio con información general
- Catálogo de productos (bloques, tuberías, madera, pintura, herramientas)
- Sección de ofertas especiales
- Blog con consejos de construcción
- Redes sociales integradas (Facebook, Instagram, WhatsApp, YouTube)
- Optimización SEO
## Tech Stack

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- Vercel (hosting)
- Visual Studio Code

## Deployment

El sitio está desplegado en **Vercel** y se actualiza automáticamente con cada `git push`.

**URL de Producción:**
https://ferreteria-don-juan.vercel.app

**Flujo de despliegue continuo (CI/CD):**
1. Local: Realizar cambios en el código
2. Git: `git add .` → `git commit -m "mensaje"` → `git push origin main`
3. Vercel: Detecta el cambio, construye y despliega automáticamente
4. Producción: El sitio se actualiza en segundos

## Authors

**Yendry Villalobos Oviedo**

- Email: yvillalobosoviedo@gmail.com
- GitHub: https://github.com/yvillalobosoviedo-png
## Features

- Diseño responsive - Adaptable a dispositivos móviles
- Optimización SEO - Meta tags, Open Graph, Twitter Cards
- Seguridad mejorada - Variables de entorno
- Google Analytics - Seguimiento de visitas
- Google Search Console - Verificación de propiedad
- Redes sociales - Facebook, Instagram, WhatsApp y YouTube
- Despliegue continuo - Integración con Vercel y GitHub
- Certificado SSL - Conexión HTTPS segura

## Screenshots

### Página de inicio
![Página de inicio](https://github.com/yvillalobosoviedo-png/ferreteria-don-juan/blob/main/logo.webp?raw=true)

### Catálogo de productos
![Catálogo de productos](https://github.com/yvillalobosoviedo-png/ferreteria-don-juan/blob/main/bloques.webp?raw=true)

### Tuberías PVC
![Tuberías PVC](https://github.com/yvillalobosoviedo-png/ferreteria-don-juan/blob/main/tuberia.webp?raw=true)
## FAQ

**¿El sitio es responsive?**
Sí, el sitio se adapta a dispositivos móviles, tablets y computadoras de escritorio.

**¿Cómo se actualiza el sitio?**
El sitio se actualiza automáticamente con cada `git push` a la rama `main` gracias a Vercel.

**¿El sitio es seguro?**
Sí, utiliza HTTPS con certificado SSL y las contraseñas están protegidas con variables de entorno.

**¿Cómo puedo contactar a la ferretería?**
Puedes contactarlos a través de WhatsApp, Facebook, Instagram o por teléfono.
## License

**Uso educativo** - Proyecto desarrollado como parte del curso de Desarrollo de Páginas Web.
## Roadmap

- [ ] Carrito de compras en línea
- [ ] Sistema de pedidos por WhatsApp
- [ ] Panel de administración para actualizar productos
- [ ] Blog con artículos de construcción
- [ ] Sistema de reseñas y calificaciones
- [ ] Búsqueda de productos por categoría
## Support

**Ferretería Don Juan**

- 📍 Dirección: 100 m norte de la plaza central, Siquirres, Costa Rica
- 📞 Teléfono: 8888-8888
- 📧 Email: info@ferreteriadonjuan.com

**Redes sociales:**
- Facebook
- Instagram
- WhatsApp
- YouTube


## Acknowledgements

- Profesor: José Luis Peña Villegas
- Curso: Desarrollo de Páginas Web
- Instituto Nacional de Aprendizaje (INA)


## Estructura de carpetas

```text
FerreteriaDonJuan/
├── index.html            # Página principal
├── styles.css            # Estilos CSS
├── config.js             # Configuración del sitio
├── .gitignore            # Archivos ignorados por Git
├── .env                  # Variables de entorno (no subir a GitHub)
├── .env.example          # Plantilla de variables de entorno
├── robots.txt            # Configuración para motores de búsqueda
├── sitemap.xml           # Mapa del sitio para SEO
├── package.json          # Dependencias del proyecto
├── package-lock.json     # Versiones de dependencias
├── img/
│   ├── logo.webp
│   ├── bloques.webp
│   ├── tuberia.webp
│   ├── madera.webp
│   ├── pared.webp
│   └── pintar.webp
└── node_modules/         # Dependencias (ignorado por Git)
```

## Security & Performance

### Seguridad
- **Variables de entorno**: Las credenciales y datos sensibles se almacenan en `.env` (ignorado por Git)
- **HTTPS**: El sitio utiliza certificado SSL proporcionado por Vercel
- **Honeypot**: El formulario incluye un campo trampa para bloquear bots
- **.gitignore**: Archivos sensibles excluidos del repositorio

### Rendimiento
- **Imágenes optimizadas**: Formato WebP para carga más rápida
- **Carga diferida (lazy loading)**: Imágenes cargan bajo demanda
- **CSS optimizado**: Estilos organizados y sin redundancias
- **Despliegue en CDN**: Vercel distribuye el contenido globalmente
## Installation

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- Git
- Visual Studio Code
- Un navegador web
- (Opcional) Node.js

## Pasos de instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/yvillalobosoviedo-png/ferreteria-don-juan.git
   ```

2. Ingresa a la carpeta del proyecto:

   ```bash
   cd ferreteria-don-juan
   ```

3. Abre el proyecto en Visual Studio Code:

   ```bash
   code .
   ```

4. (Opcional) Configura las variables de entorno:

   - Copia el archivo `.env.example` y renómbralo como `.env`.
   - Completa los valores necesarios en el archivo `.env`.

5. Ejecuta el proyecto:

   Si es un proyecto estático, simplemente abre el archivo `index.html` en tu navegador.

   > También puedes utilizar la extensión **Live Server** de Visual Studio Code para una mejor experiencia durante el desarrollo.
## Usage


El sitio web permite a los usuarios:
- Ver el catálogo de productos (bloques, tuberías, pintura, etc.)
- Consultar ofertas y promociones especiales
- Leer consejos de construcción en el blog
- Contactar a la ferretería por WhatsApp o redes sociales

**URL:** https://ferreteria-don-juan.vercel.app
