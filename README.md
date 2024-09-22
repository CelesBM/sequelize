Proyecto de Gestión de Productos

Este proyecto es una API RESTful desarrollada utilizando Express, PostgreSQL y Sequelize. Permite gestionar productos en una base de datos alojada en Neon, ofreciendo las siguientes funcionalidades:
* Crear productos: Permite añadir nuevos productos a la base de datos.
* Obtener productos: Listar todos los productos disponibles o buscar un producto específico por su ID.
* Modificar precios: Actualizar el precio de un producto existente.
* Eliminar productos: Eliminar productos de la base de datos.
  
Tecnologías Utilizadas
* Node.js
* Express
* PostgreSQL
* Sequelize
* Neon

Uso
Puedes probar la API utilizando herramientas como Postman, haciendo solicitudes a las siguientes rutas:
* POST /products - Crear un nuevo producto.
* GET /products - Obtener todos los productos.
* GET /products/:id - Obtener un producto por ID.
* PATCH /products/:id - Modificar el precio de un producto.
* DELETE /products/:id - Eliminar un producto.
