# Anime Carousel Component

Un componente de carrusel moderno y elegante para mostrar animes, construido con React, Material-UI y React Spring.

## Características Principales

- Carrusel vertical con 5 cards visibles
- Animaciones fluidas usando React Spring
- Selección aleatoria de 10 animes
- Rotación automática cada 10 segundos
- Diseño responsivo y moderno
- Sistema de rating visual
- Efectos de hover y transiciones suaves

## Seguridad ⚠️

1. **NUNCA subas el archivo `.env` a Git**
   - Este archivo contiene información sensible
   - Ya está incluido en `.gitignore`
   - Usa `.env.example` como plantilla

2. **Configuración del entorno**
   - Copia `.env.example` a `.env`
   - Reemplaza los valores con tus propias credenciales
   - Mantén tus claves API y credenciales seguras

3. **Variables de entorno requeridas**
```env
VITE_MYANIMELIST_BASE_URL=https://cdn.myanimelist.net/images/anime/
VITE_GOOGLE_CLIENT_ID=your_google_client_id_here
VITE_API_KEY=your_api_key_here
```

## Cambios Recientes

### Versión 1.0.0

1. **Diseño del Carrusel**
   - Implementación de 5 cards visibles simultáneamente
   - Espaciado vertical de 280px entre cards
   - Dimensiones de cards: 320x450px
   - Efectos de escala y opacidad para cards inactivas

2. **Animaciones**
   - Migración a React Spring para animaciones principales
   - Configuración de animaciones:
     - Tensión: 280
     - Fricción: 60
   - Transiciones suaves entre cards
   - Efectos de hover mejorados

3. **Seguridad**
   - URLs de imágenes movidas a variables de entorno
   - Configuración de .gitignore para archivos sensibles
   - Implementación de .env para configuración

4. **Optimizaciones**
   - Selección aleatoria de 10 animes únicos
   - Carga lazy de imágenes
   - Manejo de errores en carga de imágenes
   - Mejoras en el rendimiento de las animaciones

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto:
```env
VITE_MYANIMELIST_BASE_URL=https://cdn.myanimelist.net/images/anime/
VITE_API_KEY=your_api_key_here
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## Tecnologías Utilizadas

- React
- Material-UI
- React Spring
- TypeScript
- Vite

## Próximas Mejoras

- [ ] Implementar gestos táctiles para navegación móvil
- [ ] Añadir animaciones de entrada/salida
- [ ] Mejorar el sistema de caché de imágenes
- [ ] Implementar temas personalizables
