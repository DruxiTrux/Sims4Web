# Buscador de DLCs - Los Sims 4

Herramienta web para buscar y explorar todos los packs de contenido descargable (DLC) de Los Sims 4 en español.

## ¿Qué hace?

- Lista todos los packs organizados por categoría: **Expansiones**, **Game Packs** y **Stuff Packs / Kits**
- Permite buscar un pack por nombre o código (ej. `EP01`, `GP04`, `SP15`)
- Al hacer clic en un pack, muestra su icono y fecha de lanzamiento
- Diseño oscuro con fondo animado y efectos de brillo verde

## Tecnologías

- HTML5 / CSS3 / JavaScript (vanilla)
- Sin dependencias ni proceso de build
- Datos en `packs.json`
- Imágenes en `imagenes/<CÓDIGO>/icon.png`

## Cómo ejecutar

Simplemente abre `index.html` en un navegador, o sirve el directorio con cualquier servidor HTTP estático.

En Replit, el proyecto se sirve automáticamente mediante el workflow configurado.

## Estructura del proyecto

```
├── index.html        # Página principal
├── style.css         # Estilos
├── script.js         # Lógica de búsqueda y renderizado
├── packs.json        # Datos de todos los packs (EP, GP, SP)
├── fondo.jpg         # Imagen de fondo
└── imagenes/         # Iconos e imágenes por pack
    ├── EP01/
    │   ├── icon.png
    │   └── mundo.jpg
    └── ...
```

## Datos incluidos

| Categoría | Cantidad |
|-----------|----------|
| Expansiones (EP) | 21 |
| Game Packs (GP) | 12 |
| Stuff Packs / Kits (SP) | 82 |
