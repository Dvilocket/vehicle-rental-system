# 🚗 Vehicle Rental System - Frontend

Front-End desarrollado con React para la gestión de alquiler de vehículos consumiendo una arquitectura basada en microservicios con Spring Boot.

---

# 📋 Requisitos

Antes de ejecutar el proyecto es necesario tener instalado:

- Node.js
- npm
- Docker Desktop
- Git

---

# ⚙️ Tecnologías Utilizadas

## Front-End
- React
- Vite
- React Router DOM
- Axios
- Bootstrap
- SweetAlert2

## Back-End
- Spring Boot
- Spring Cloud Gateway
- Eureka Server
- PostgreSQL
- Docker Compose

---

# 📦 Instalación Front-End

## 1. Clonar repositorio

```bash
git clone https://github.com/TU-USUARIO/vehicle-rental-system.git
```

---

## 2. Entrar al proyecto

```bash
cd vehicle-rental-frontend
```

---

## 3. Instalar dependencias

```bash
npm install
```

---

# 🚀 Ejecutar Front-End

```bash
npm run dev
```

El proyecto estará disponible en:

```bash
http://localhost:5173
```

---

# 🔌 IMPORTANTE - Backend Requerido

Este Front-End necesita que el backend de microservicios esté ejecutándose.

El API Gateway debe correr en:

```bash
http://localhost:8080
```

---

# 🐳 Ejecutar Backend

Dentro del proyecto backend ejecutar:

```bash
docker compose up --build
```

Esperar a que levanten:

- Eureka Server
- Gateway Service
- Vehicle Service
- Operation Service
- PostgreSQL

---

# ✅ Verificar Backend

Abrir en navegador:

```bash
http://localhost:8080/api/vehicles
```

Si devuelve JSON, el backend está funcionando correctamente.

---

# 📂 Funcionalidades Implementadas

## Gestión de Vehículos
- Listar vehículos
- Ver detalle
- Crear vehículo
- Editar vehículo
- Eliminar vehículo
- Cambiar estado

## Gestión de Operaciones
- Registrar alquiler
- Cancelar operación
- Actualizar disponibilidad

---

# ⚛️ Características React

- React Router DOM
- Hooks
- Custom Hook
- Componentes reutilizables
- Axios
- Formularios controlados
- SweetAlert2
- Bootstrap responsive

---

# 👨‍💻 Autor

Proyecto desarrollado para la asignatura de Desarrollo de Aplicaciones Web.
