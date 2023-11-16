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

3. **Poblar la base de datos:**

```bash
php artisan migrate --seed
```

Este comando creará y poblará las tablas en la base de datos. Asegúrate de que la base de datos exista y coincida con la configuración en el archivo .env.

4. **Iniciar el servidor:**

```bash
php artisan serve
```

Este comando iniciará el servidor de Laravel de manera local.

### Angular

Para configurar angular, se debe abrir una terminal con la ruta dentro de la carpeta 'frontend_practica2', luego sigue estos pasos:

1. **Instalar Angular CLI:**

Para instalar Angular CLI, ejecute el siguiente comando:

Solo para el proyecto:

```bash
npm install @angular/cli
```

o de manera global:

```bash
npm install -g @angular/cli
```
2. **Instalar dependencias de Tailwind CSS :**

```bash
npm install -D tailwindcss
```

Este comando instalará las dependencias de Tailwind CSS necesarias para el proyecto.


3. **Si se utiliza la consola de Windows (Opcional):**

Abra una terminal de PowerShell con privilegios de administrador en su computadora y ejecute el siguiente comando:

```bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Esto permitirá la ejecución de Scripts en Windows.

4. **Iniciar el servidor:**

Ejecuta el siguiente comando para iniciar el servidor de Angular de manera local:

```bash
ng serve
```

Si no puedes ejecutar scripts en Windows, utiliza el siguiente comando:

```bash
npm start
```

Cualquiera de estos comandos iniciarán el servidor de Angular.