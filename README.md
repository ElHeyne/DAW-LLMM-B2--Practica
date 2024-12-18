<h1 align="center">DAW - Lenguaje de Marcas</h1>
<h2 align="center">Práctica B2</h2>

-----

<p align="center">Trabajo B2 de lenguaje de marcas de curso DAW 24-25, CIFP Francesc de Borja Moll.</b>

<p align="center"><i>Erik Vives, Juan Díaz y Luis Daniel</i></p>

<p align="center">
<img src="/SRC/resources/general/small-logo.png" width="25%">
</p>

# Roles del Proyecto

## Erik
Programar HTML CSS, busqueda de imagenes, documentar readme, revisiones de resizable.

## Juan
Buscar imagenes, crear textos, crear mockup, canvios en html y css.

## Luis
Busqueda de imagenes, cambio de texto, edicion de imagenes, construccion de menu, programacion de html y css y documentar readme.

# Documentación

## 1. La idea
Lo primero que necesitábamos era encontrar el tipo de web que queríamos hacer. Tras un rato, no solo nos decidimos sobre el tipo, sino también sobre su estilo. Nos dimos cuenta de que hacer una web de un restaurante podría dar para mucho, ya que se podría incluir las diferentes comidas además de apartados con otra información. En cuanto al estilo, lo que empezó como una broma acabó pareciendo una buena idea, ya que la estética de la serie animada Bob esponja tiene una estética muy característica e interesante, así que rápidamente encontramos fondos, logos e imágenes ideales para cumplir nuestro objetivo.

- Una web sencilla y fácil de navegar
- Un menú variado
- Detalles cómicos

## 2. Preparaciones previas al código
Antes de comenzar con el html y el css, creamos un documento compartido en canva para hacer una especie de boceto del diseño de la página, una manera fácil de crearla e ir haciendo cambios rápidos si no nos convence. Así cuando pasáramos a programar en html y css tendríamos un modelo que seguir, y no estaríamos haciendo cambios a ciegas.

Otra preparación crucial previa al código de la web fue la creación de un repositorio de github, gracias al cual podíamos ir compartiendo nuestros cambios con el resto del grupo a través de los "push" y los "pull". Sin embargo, si se daba el caso de que dos personas alteraban la misma parte del documento al mismo tiempo, habría dado error a la hora de hacer el "commit" de la persona que hubiera tardado más en terminar su cambios. Para prevenir esto, separamos cada apartado de la web en un documento html diferente, cada uno asignado a un miembro del grupo distinto en cada momento.

- Crear mockup en canva
- Preparar repositorio
- Asignar roles

## 3. HTML y CSS

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

## 4. Tecnologias Usadas
- HTML CSS ultima version para la estructura y diseño web
- Canva para mockups
- RemoveBG, paint, Autodesk para edicion de imagenes
- Descargadores de videos de youtube para obtener el video de la burguercangreburguer

Se han usado tecnologias gratuitas y sencillas de usar.

## 5. Caracteristicas Principales
- Diseño simple y minimalista
- Elementos de imagen y video
- Imagenes interactivas
- Navegadores sencillos
- Imagenes con hiperenlaces
- Adaptabilidad en imagenes con elementos alt

## 6. Capturas de Resoluciones
### Escritorio o PC
![alt text](<SRC/resources/markdown/Captura de pantalla 2024-11-26 210402.png>)
### Teléfonos y Táblet
![alt text](<SRC/resources/markdown/Captura de pantalla 2024-11-26 210426.png>)
![alt text](<SRC/resources/markdown/Captura de pantalla 2024-11-26 210439.png>)
![alt text](<SRC/resources/markdown/Captura de pantalla 2024-11-26 210455.png>)
![alt text](<SRC/resources/markdown/Captura de pantalla 2024-11-26 210512.png>)