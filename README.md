# Coderic.org

**Corporation Oriented to Development of Engineering Resources and Information for Commerce**

Sitio web oficial de la organización Coderic - Una Software Factory dedicada a la ingeniería de software de código abierto desde 2004.

## 🏗️ Estructura del Proyecto

### Layouts de Jekyll

El proyecto sigue la estructura estándar de Jekyll con dos layouts principales:

```
_layouts/
  ├── default.html      # Layout base con HTML, head, header, footer y scripts
  └── page.html         # Layout para páginas de contenido (hereda de default, agrega navegación)
```

#### default.html
Layout base que proporciona:
- Estructura HTML completa
- Meta tags y SEO
- Header con logo Coderic
- Footer con enlaces y copyright
- Scripts (Google Analytics, Auth0, jQuery)

#### page.html
Layout para páginas de contenido que hereda de `default.html` y agrega:
- Breadcrumb de navegación del ecosistema (FinTech, Cloud, Hub, Organization)
- Portal de navegación principal (Development, Crowdfunding, Coworking, etc.)

**Uso:**

```yaml
---
layout: page
title: "Título de la Página"
---
```

### Estructura de Páginas

```
/
├── index.html              # Página principal
├── about/                  # Acerca de Coderic
├── development/            # Software Factory
├── crowdfunding/           # Financiamiento colaborativo
├── coworking/             # Espacios de trabajo
├── freelancers/           # Red de freelancers
├── learning/              # Academia de aprendizaje
├── community/             # Comunidad open source
├── dashboard/             # Panel de usuario
├── profile/               # Perfil de usuario
├── organization/          # Información organizacional
├── privacy/               # Política de privacidad
├── legal/                 # Información legal
└── tos/                   # Términos y condiciones
```

## 🌐 Ecosistema Coderic

Coderic es más que una empresa, es un ecosistema tecnológico completo:

- **[Coderic.org](https://coderic.org)** - Organización y comunidad
- **[Coderic.co](https://coderic.co)** - FinTech y soluciones financieras
- **[Coderic.cloud](https://coderic.cloud)** - Servicios en la nube
- **[Coderic.net](https://coderic.net)** - Centro de contenido y documentación

## 🚀 Servicios

### Development
Software Factory especializada en desarrollo de soluciones empresariales utilizando metodologías ágiles y tecnologías open source.

### Crowdfunding
Plataforma de financiamiento colaborativo para proyectos tecnológicos y de código abierto.

### Coworking
Espacios de trabajo colaborativo equipados con infraestructura de alta velocidad para innovadores tecnológicos.

### Freelancers
Red profesional que conecta talento tecnológico con proyectos y clientes que valoran el trabajo de calidad.

### Learning
Academia de aprendizaje con cursos, workshops y recursos educativos diseñados por profesionales.

### Community
Ecosistema vibrante de colaboración donde desarrolladores, creadores e innovadores se unen para construir el futuro del software.

## 🛠️ Tecnologías

- **Jekyll** - Generador de sitios estáticos
- **Tailwind CSS** - Framework de CSS utility-first
- **GitHub Pages** - Hosting
- **Auth0** - Autenticación
- **Google Analytics** - Análisis

## 📦 Instalación y Desarrollo Local

```bash
# Clonar el repositorio
git clone https://github.com/Coderic/coderic.github.io.git

# Instalar dependencias
bundle install

# Ejecutar servidor local
bundle exec jekyll serve

# El sitio estará disponible en http://localhost:4000
```

## 🎨 Personalización

### Colores Principales
- **Orange**: `#f97316` (orange-500) - Color principal de marca
- **Stone**: `#292524` (stone-800) - Color de texto y fondos
- **Gradients**: Utilizados en heroes de cada sección

### Fuentes
- **Red Hat Display** - Fuente principal del sitio

## 📁 Estructura de Archivos

```
/workspace/
├── _layouts/              # Layouts de Jekyll
│   ├── default.html       # Layout base
│   └── page.html          # Layout de páginas
├── _includes/             # Componentes reutilizables
│   └── portal.html        # Navegación principal
├── _sass/                 # Estilos SCSS
│   └── main.scss          
├── assets/                # Assets estáticos
│   ├── css/
│   ├── img/
│   └── icons/
├── [pages]/               # Páginas del sitio
│   └── index.html
├── _config.yml            # Configuración Jekyll
├── README.md              # Este archivo
└── CHANGELOG.md           # Historial de cambios
```

## 📝 Contribuir

Coderic es una organización de código abierto. ¡Las contribuciones son bienvenidas!

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guías de Contribución

- Usa `layout: page` para todas las páginas de contenido
- Mantén el diseño consistente con Tailwind CSS
- Sigue las convenciones de nomenclatura existentes
- Documenta cambios significativos en CHANGELOG.md
- Asegúrate de que el sitio se construya sin errores con `jekyll build`

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Valores

- **Open Source** - Transparencia y colaboración
- **Colaboración** - El mejor software se construye en equipo
- **Excelencia** - Calidad en cada línea de código
- **Innovación** - Exploramos constantemente nuevas tecnologías
- **Educación** - El conocimiento debe ser accesible
- **Comunidad** - Nuestra fuerza reside en nuestra comunidad global

## 📞 Contacto

- **GitHub**: [github.com/Coderic](https://github.com/Coderic)
- **Email**: hello@coderic.org
- **Documentación**: [coderic.org/docs](https://coderic.org/docs)
- **Twitter**: [@Coderic](https://x.com/Coderic)
- **LinkedIn**: [linkedin.com/company/coderic](https://linkedin.com/company/coderic/)

## 🏆 Historia

Fundada el **30 de septiembre de 2004**, Coderic ha evolucionado de un pequeño grupo de desarrolladores apasionados a una Software Factory reconocida internacionalmente, manteniendo siempre sus valores fundamentales de transparencia, calidad y comunidad.

### Hitos Importantes

- **2004** - Fundación de Coderic
- **2010** - Expansión a servicios de coworking
- **2015** - Lanzamiento de plataforma de learning
- **2020** - Red de freelancers y crowdfunding
- **2024** - Ecosistema completo integrado

---

**Coderic** © 2004-2024 · Desde septiembre 30, 2004

*Corporation Oriented to the Development of Engineering Resources and Information for Commerce*
