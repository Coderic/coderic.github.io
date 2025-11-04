# Coderic.org

**Corporation Oriented to Development of Engineering Resources and Information for Commerce**

Sitio web oficial de la organización Coderic - Una Software Factory dedicada a la ingeniería de software de código abierto desde 2004.

## 🏗️ Estructura del Proyecto

### Layouts de Jekyll

El proyecto sigue la estructura estándar de Jekyll con los siguientes layouts:

```
_layouts/
  ├── default.html      # Layout base con head, scripts y estructura HTML
  ├── page.html         # Layout para páginas de contenido (hereda de default)
  ├── layout.html       # Layout alternativo (legacy)
  ├── layout_en.html    # Layout en inglés (legacy)
  └── layout_es.html    # Layout en español (legacy)
```

**Uso correcto:** Todas las páginas de contenido deben usar `layout: page` en su front matter.

Ejemplo:
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
└── community/             # Comunidad open source
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
git clone https://github.com/Coderic/coderic.org.git

# Instalar dependencias
bundle install

# Ejecutar servidor local
bundle exec jekyll serve

# El sitio estará disponible en http://localhost:4000
```

## 🎨 Personalización

### Colores Principales
- **Orange**: `#ea580c` (orange-600)
- **Stone**: `#292524` (stone-800)
- **Gradients**: Utilizados en heroes de cada sección

### Fuentes
- **Red Hat Display** - Fuente principal del sitio

## 📝 Contribuir

Coderic es una organización de código abierto. ¡Las contribuciones son bienvenidas!

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

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

## 🏆 Historia

Fundada el **30 de septiembre de 2004**, Coderic ha evolucionado de un pequeño grupo de desarrolladores apasionados a una Software Factory reconocida internacionalmente, manteniendo siempre sus valores fundamentales de transparencia, calidad y comunidad.

---

**Coderic** © 2004-2024 · Desde septiembre 30, 2004
