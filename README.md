# MovieDB-Spring-Angular

Para introducir mi proyecto haré una breve descripción de la funcionalidad.

La aplicación tiene como propósito crear una base de datos de películas con su datos, con el propósito de actuar como una lista de películas vistas por el usuario, de modo que cada que el usuario agregue una película esta se agregue a la base datos con el nombre, año, sinopsis y la fecha en que se vio la película que se crea de forma automática esto siendo posible ya que la aplicación utiliza la API de una base de datos de películas llamada MovideDB, además de esto el usuario puede acceder a links de películas mediante un repositorio en línea, para que el usuario pueda ver estas películas siempre y cuando no se violen los derechos de autor de la obra, de misma forma si el usuario quiere conocer los datos de una película puede poner el nombre de cualquier película y se le regresará toda su información.


  * Para más información especifica acerca del Backend revisar el siguiente proyecto: [Proyecto Backend](https://github.com/andregarza/Proyecto-Modulo-3)

  * Para más información especifica acerca del FrontEnd revisar el siguiente proyecto: [Proyecto Frontend](https://github.com/andregarza/Angular-Modulo4.git)

  * Para un vistazo del funcionamiento del FrontEnd y el Backend revisar el siguiente video: [Video Demostración](https://youtu.be/qwp_d7k8wpQ)



A continuación se mencionara con más detalle parte de la funcionalidad de la aplicación 

1. Prácticas ágiles:  Se escogeran diferentes practicas Agiles que son justificadas, se adjunta el [Readme](https://github.com/andregarza/Proyecto_Modulo1/tree/main/Tema%201) donde esta lo antes mencionado con detalle


2. Estructura del
proyecto:  La aplicación cuenta con el patrón MVC ya que contiene estas capas en la que se separa el controlador de la entidad o modelo del servicio, por lo que estas capas están bien definidas así como la interacción entre ellas, cuenta con un CRUD completo para nuestra entidad que será accedido desde el Controlador.
Las entidades cuentan con la implementacion de Lombook y de Mapstruck para crear un codigo más conciso.


3. Conexión a base de
datos: La aplicación se conecta correctamente a una base de datos de MYSQL que se encuentra montada dentro de un contenedor de Docker que permite el uso de una consola MYSQL.


4. Funcionalidad y
alcance de la
aplicación:  La app tiene la funcionalidad principal de guardar películas que has visto, y su característica principal es la de buscar películas con toda su información e incluso link solo con el nombre de la película, en el Dashboard principal se nos presenta un botón con la leyenda search a movie que al presionarlo nos abre una ventana de diálogo donde podemos interactuar de forma dinámica al insertar un nombre de pelicula y se nos presenta todos sus datos y la posibilidad de guardarla película en nuestro repositorio, utiliza todos los métodos Rest del backend y correctamente muestra al usuario los cambios, al utilizar botones interactivos que no obstaculizan el uso de los métodos Rest, para la parte de manejo de errores se creó un manejador global de excepciones que cubre las excepciones más comunes que el usuario pueda encontrarse así como un manejador de excepciones para métodos HTTP como lo son el método 401 y 403 que manejan las excepciones para el contenido que no esté autorizado o no tenga permitido el uso de algún método.


5. Testing:  Se realizaron pruebas unitarias al código utilizando JUnit, asegurando el correcto funcionamiento de el controlador y de la lógica de negocio, las pruebas realizadas fueron lo más generales con el propósito de reutilizar el código en otras pruebas similares, las pruebas cubren la mayor parte de los casos y aseguran que los diferentes métodos cumplan con su función, la integración con SELENIUM se prescinde ya que en los contados métodos en que podía ser utilizado resultaba redundante debido a que previamente existía una prueba con JUnit que “Testeaba” lo mismo y de forma más rápida y ágil por lo que finalmente quedó descartada del proyecto, cabe mencionar que esto de ninguna manera significa que el proyecto no cuenta con las pruebas unitarias pertinentes para asegurar el correcto funcionamiento de los componentes.


6. Autenticación y
Autorización:  Se agregó un proceso de autenticación mediante un login usando Spring Security, además que se agregaron perfiles con diferentes roles, los cuales definen el acceso que tienen a diferentes características y métodos dentro de la aplicación


7. Perfilado de usuarios:



8. Deploy:



9. Navegabilidad:  El front End cuenta con navegación por rutas, sin embargo trate de que fueran solo las indispensables para tener una integración más sencilla y breve, además que cuenta con un AuthGuard que protege la ruta del Dashboard, ya que en el dashboard es donde se consumen los métodos Rest, se implementó una lógica, de forma que si existía un login, se podría acceder pero de no tenerlo nos regresaría a la página principal, el componente de servicio alberga la lógica de las funciones de login y dentro del autoguard se inyecta para hacer uso de la función, así como también se utiliza en la ventana de diálogo de Login donde también se inyecta el componente de servicios y es en donde se ejecuta la función de login que permite regresar un valor de true en el AutoGuard



10. Templates y
modularidad:  Para la creación de las templates mi objetivo principal fue que fuera muy dinámico para el usuario utilizar la página, es por eso que desde que entramos vemos botones con los que podemos interactuar, como el de login que nos abre ventana de diálogo que nos redirecciona automáticamente a Dashboard, lo que permite una experiencia fluida, de igual forma los servicios CRUD de la base de datos se hacen todos desde el Dashboard solo oprimiendo botones que lanzan ventanas de diálogo, lo cual creo la hace muy dinámica e intuitiva.
La distribución del proyecto es pensado para que sea altamente modular, se crearon diferentes módulos, así como un módulo compartido para componentes comunes como el navbar y el footer, asi como módulos que se dividen por funcionalidad, lo que permite un mayor orden dentro del proyecto, cada módulo tiene asignado el nombre de su función, por ejemplo, Home, Login, Dashboard, Shared, etc.



