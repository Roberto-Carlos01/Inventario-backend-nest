# 📦 Sistema de Inventario y Ventas

Proyecto desarrollado con **NestJS**, **TypeORM** y **MySQL** con el objetivo de aprender el desarrollo de aplicaciones Backend siguiendo buenas prácticas y una arquitectura modular.

> **Estado del proyecto:** 🚧 En desarrollo

---

# 📖 Descripción

Este proyecto implementa un sistema completo de gestión de inventario para una empresa, incluyendo:

- Administración de usuarios y empleados.
- Gestión de productos.
- Gestion de empleados.
- Gestión de almacenes y sucursales.
- Control de inventario.
- Registro de movimientos.
- Compras y proveedores.
- Ventas y clientes.
- Facturación.
- Control de roles y permisos.

El objetivo principal es construir un sistema profesional utilizando NestJS y TypeORM, aplicando principios de diseño, relaciones entre entidades y buenas prácticas de desarrollo.

---

# 🛠 Tecnologías

- NestJS
- TypeScript
- TypeORM
- MySQL
- REST Client
- Swagger

---

# 📂 Arquitectura

El proyecto está organizado por módulos siguiendo la arquitectura recomendada por NestJS.

```
src/
│
├── modules/
│   ├── admin/
│       ├── administracion/
│       ├── catalogos/
│       ├── inventario/
│       ├── compras/
│       └── ventas/
│
├── common/
│
└── main.ts
```

---

# 📦 Módulos

## Administración

- Usuario
- Sucursal
- Empleado
- Rol
- Permiso

## Catalogos

- Categoria
- Impuesto
- Marca

## Inventario

- Almacén
- Producto
- Inventario
- Movimiento de Inventario
- Traslado

## Compras

- Proveedor
- Compra
- Detalle Compra

## Ventas

- Cliente
- Factura
- Venta
- Detalle Venta

---

# 🗄 Base de Datos

El proyecto utiliza una base de datos MySQL diseñada previamente mediante un modelo relacional.

Actualmente cuenta con:

- 24 tablas

Las entidades de TypeORM fueron creadas respetando el esquema existente de la base de datos (`synchronize: false`).

---

# 🚀 Roadmap

## Fase 1

- CRUD completo de Administración
- CRUD de Inventario
- CRUD de Compras
- CRUD de Ventas

## Fase 2

- Reglas de negocio
- Transacciones
- Actualización automática del inventario
- Registro automático de movimientos

## Fase 3

- Autenticación JWT
- Roles
- Permisos
- Guards

## Fase 4

- Reportes PDF
- Exportación a Excel
- Dashboard
- Estadísticas

---

# 📚 Objetivos de aprendizaje

Este proyecto tiene como finalidad aprender:

- NestJS
- TypeORM
- Arquitectura Modular
- Relaciones entre entidades
- DTOs y Validaciones
- CRUD profesional
- Transacciones
- Autenticación y Autorización
- Buenas prácticas Backend

---

# 👨‍💻 Autor

**Roberto Carlos Mamani Quispe**

Estudiante de Informática - UMSA

Proyecto desarrollado con fines de aprendizaje y para fortalecer habilidades en desarrollo Backend con NestJS.
