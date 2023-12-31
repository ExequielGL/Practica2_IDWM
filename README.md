## Guia de instalación

Antes de comenzar, asegúrate de tener [Composer](https://getcomposer.org/), [Node.js](https://nodejs.org/en) y algún gestor de base de datos instalados en tu sistema.

### Laravel

Para configurar Laravel, se debe abrir una terminal con la ruta dentro de la carpeta 'api_practica2', luego sigue estos pasos:

1. **Instalar dependencias de PHP con Composer:**

```bash
composer install
```

Este comando instalará las dependencias de PHP necesarias para el proyecto.

2. **Configurar las variables de entorno:**

```bash
copy .env.example .env
```

Este comando copiará el archivo .env.example a .env. Aquí debes configurar la base de datos.

3. **Generar APP_KEY:**

```bash
php artisan key:generate
```

Este comando creará una llave para ejecutar el servidor de laravel.

4. **Poblar la base de datos:**

```bash
php artisan migrate --seed
```

Este comando creará y poblará las tablas en la base de datos. Asegúrate de que la base de datos exista y coincida con la configuración en el archivo .env.

5. **Iniciar el servidor:**

```bash
php artisan serve
```

Este comando iniciará el servidor de Laravel de manera local.

### Angular

Para configurar angular, se debe abrir una terminal con la ruta dentro de la carpeta 'frontend_practica2', luego sigue estos pasos:

1. **Instalar dependencias de node.js:**

```bash
npm install
```

Se instalaran las dependencias necesarias de node.js para ejecutar el proyecto.

2. **Si se utiliza la consola de Windows (Opcional):**

Abra una terminal de PowerShell con privilegios de administrador en su computadora y ejecute el siguiente comando:

```bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Esto permitirá la ejecución de Scripts en Windows.

3. **Iniciar el servidor:**

```bash
ng serve
```

Si no puedes ejecutar scripts en Windows, utiliza el siguiente comando:

```bash
npm start
```

Cualquiera de estos comandos iniciarán el servidor de Angular.

**Una vez realizados todos los pasos, se deberá ingresar a la URL del servidor local proporcionada por Angular.**