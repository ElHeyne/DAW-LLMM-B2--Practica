<h1 align="center">DAW - Lenguaje de Marcas</h1>
<h2 align="center">Práctica B2</h2>

<p align="center">Trabajo B2 de lenguaje de marcas de curso DAW 24-25, CIFP Francesc de Borja Moll.</b>


<p align="center">
<img src="/SRC/resources/general/big-logo.png" width="25%">
</p>

<p align="center"><i>Erik Vives, Juan Díaz y Luis Daniel</i></p>

<p align="center">
    <a href="https://elheyne.github.io/DAW-LLMM-B2--Practica/index.html" target="_blank"><img alt="Static Badge" src="https://img.shields.io/badge/VIS%C3%8DTAME-AQU%C3%8D-orange">
</a>
</p>

## Estructura Archivos

```SRC/
├── Resources/
│   ├── article_elements/
│   │   └── *.png
│   ├── detall_elements/
│   │   └── *.png
│   ├── favicons/
│   │   └── *.png
│   ├── general/
│   │   └── *.png
│   ├── index_elements/
│   │   └── *.png
│   ├── info_elements/
│   │   └── *.png
│   └── markdown/
│       └── *.png
├── Styles/
│   └── *.css
└── *.html
README
```

Se estructura el proyecto dentro de una carpeta general "SRC" en la que se almacenan todos los archivos .html al igual que se encuentran las carpetas "Styles" que contiene todos los archivos .css y la carpeta "Resources" que contiene todos los recursos multimedia, generalmente imagenes.

## Documentación

### Elementos Principales

La web contiene varios elementos caracteristicos

- **Index.html**

Este archivo .html contiene elementos tipo **imagenes** y **listas**.

Algunas de las imagenes son reactivas con la funcion "*hover*".

<p align="center">
<img src="/SRC/resources/markdown/CapturaIndex.png" width="65%">
</p>

- **Articles.html**

Este archivo contiene elementos de tipo **imagenes**, **listas** y **tablas**.

La estructura de este archivo denota que la estructura de la web en general es una coleccion de filas al estilo de un armario.

<p align="center">
<img src="/SRC/resources/markdown/CapturaArticles.png" width="65%">
</p>

- **Detall.html**
En este archivo solo encontramos **imagenes** y **video**.

<p align="center">
<img src="/SRC/resources/markdown/CapturaDetall.png" width="65%">
</p>

- **Info.html**
Aqui se encuentran elementos como **imagenes** y **tablas**.

<p align="center">
<img src="/SRC/resources/markdown/CapturaInfo.png" width="65%">
</p>

### Tecnologias Involucradas

- **Creación de Código**

    - **[Visual Studio Code](https://code.visualstudio.com)** - Creacion, Edicion, Revisión

- **Modificacion de Imagenes**

    - **[Canva](https://www.canva.com)** - Creacion y Edicion
    - **[RemoveBG](https://www.remove.bg)** - Eliminar Fondos
    - **[ConvertIO](https://www.convertio.co)** - Conversión

- **Modificacion de Video**
    
    - **[Youtube](https://www.youtube.com)** - Búsqueda de Vídeos
    - **[Y2mate](https://www.y2mate.lol)** - Descarga de Vídeos



### Estructura HTML
El proyecto HTML se estructura de la siguiente manera.

- Dentro del main se encapsula todo el contenido visible.
- Cada sección de la web se separa en "content-rows" o filas flexibles y dinamicas para poder construir elementos.
- Los elementos mas importantes se encapsulan en un "container" no flexible que posteriormente almacena un "section" flexible para poder modificar ratios, tamaños y orden sin afectar a elementos ajenos.
- Se podria mejorar la estructura del fichero "articles.html" para que se ocupen menos lineas.
- Se utilizan estilos dentro de clases en los "sections".

### Estructura CSS
El proyecto CSS se estructura de la siguiente manera.

- Se crean archivos CSS separados por funcion, para tener mayor control y documentos mas legibles.

| main.css | containers.css | fonts.css | images.css | lists.css | navbars.css | tables.css |
|---|---|---|---|---|---|---|
| css general | contenedores y encapsuladores | fuentes de texto principales | imágenes | listas | funcionamiento y estilo de navbars | tablas |

Se usa muy principalmente el recurso de las clases para diferenciar elementos entre si.

En los archivos donde es necesario se aplican las media querys necesarias.

## Capturas de Resoluciones
### Escritorio o PC
![alt text](<SRC/resources/markdown/Captura de pantalla 2024-11-26 210402.png>)
### Teléfonos y Táblet
![alt text](<SRC/resources/markdown/Captura de pantalla 2024-11-26 210426.png>)
![alt text](<SRC/resources/markdown/Captura de pantalla 2024-11-26 210439.png>)
![alt text](<SRC/resources/markdown/Captura de pantalla 2024-11-26 210455.png>)
![alt text](<SRC/resources/markdown/Captura de pantalla 2024-11-26 210512.png>)

## Diario de Desarrollo
Lo primero que necesitábamos era encontrar el tipo de web que queríamos hacer. Tras un rato, no solo nos decidimos sobre el tipo, sino también sobre su estilo. Nos dimos cuenta de que hacer una web de un restaurante podría dar para mucho, ya que se podría incluir las diferentes comidas además de apartados con otra información. En cuanto al estilo, lo que empezó como una broma acabó pareciendo una buena idea, ya que la estética de la serie animada Bob esponja tiene una estética muy característica e interesante, así que rápidamente encontramos fondos, logos e imágenes ideales para cumplir nuestro objetivo.

- Una web sencilla y fácil de navegar
- Un menú variado
- Detalles cómicos

Antes de comenzar con el html y el css, creamos un documento compartido en canva para hacer una especie de boceto del diseño de la página, una manera fácil de crearla e ir haciendo cambios rápidos si no nos convence. Así cuando pasáramos a programar en html y css tendríamos un modelo que seguir, y no estaríamos haciendo cambios a ciegas.

Otra preparación crucial previa al código de la web fue la creación de un repositorio de github, gracias al cual podíamos ir compartiendo nuestros cambios con el resto del grupo a través de los "push" y los "pull". Sin embargo, si se daba el caso de que dos personas alteraban la misma parte del documento al mismo tiempo, habría dado error a la hora de hacer el "commit" de la persona que hubiera tardado más en terminar su cambios. Para prevenir esto, separamos cada apartado de la web en un documento html diferente, cada uno asignado a un miembro del grupo distinto en cada momento.

- Crear mockup en canva
- Preparar repositorio
- Asignar roles