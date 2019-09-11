# booking-web1
Aplicacion creada en AngularJS version 1.7.6 Librerias utilizadas: Angular Material LocalStore  Desplegar en un servidor de aplicaciones, por ejemplo Apache.

La aplicacion consta de dos Factories:
LoginServices: Servicio encargado de realizar las peticiones al api para login

BookingServices: Servicio encargado de realizar las peticiones para listado de booking.

Contamos con un archivo route.js que contiene las rutas de la aplicacion.
Contamos un archivo config que contiene las constantes que utilizamos en nuestra aplicacion.

La aplicacion consta de 2 controladores asociados a dos template html:
loginController: Controlador encargdo de realizar llamado a servicio de login y de almacenar token en un storage local

bookingController: Controlador encargado de realizar llamado a servicio de booking. Este controlador validara si el token esta vivio. Este controlador tambien se encargara de realizar filtro a la vista del listado

NUEVO:
Opciones para ejecutar:

opcion1 Ejecutar con npm:
npm build

node app.js

Opcion2 Ejecutar en apache:
Colocar carpeta de la aplicacion en server apache