CREATE DATABASE inventario_nest1;


/*
USUARIO [idusuario (pk), nombreUsuario, password, email ,activo, foto_perfil]
EMPLEADO [idempleado, nombreCompleto, ci, telefono ,direccion, fecha_nac, fechaIngreso, salarioBase, estado, idempleado(fk)]
ROL [idrol(pk), nombre, descripcion, activo, created_at, updated_at]
PERMISO[idpermiso (PK), accion, subject, detalle]
ROL_TIENE_PERMISO [(idrol, idpermiso)(pk)]
USUARIO_ASIGNA_ROL[(idrol, idusuario)(pk)]
SUCURSAL[idsucursal(pk), nombre, estado, ciudad, direccion, telefono]
TRABAJA_EN[(idsucursal, idempleado)(PK)]
ALMACEN[idalmacen(pk) , nombre ,descripcion,  activo, idsucursal(fk)]
IMPUESTO [idimpuesto(pk), nombre, porcentaje, activo]
MARCA [idmarca(pk), nombre, descripcion, pais, activo]
CATEGORIA[idcategoria(pk), nombre, descripcion, activo, imagen]
PRODUCTO[idproducto(pk), nombre, codigo_barras, precio_venta, descripcion, imagen, create_at, updated_at,  idimpuesto(fk), idmarca(fk), idcategoria(fk)]
INVENTARIO [idinventario(pk), idproducto (fk), idalmacen(fk) , stock_actual, stock_minimo ]
COMPRA [idcompra(pk), fecha, total, numero_factura_recibido, idalmacen(fk), idproveedor(fk), idusuario(fk)]
PROVEEDOR [idproveedor(pk), razonsocial, telefono, email, nit_ci, descripcion]
DETALLE_COMPRA [idcompra(fk), idproducto(fk), id_detalle_compra(pk), cantidad, precio_unitario]
CLIENTE [idcliente(pk), razon_social, ci_nit]
FACTURA[idfactura(pk), numeroFactura, fechaemision, codigoControl, estado, cuf , cufd]
VENTA [idventa (pk),fecha, subtotal_neto, total_impuestos, total_final, metodoPago, estado,idfactura (fk), idcliente(fk), idusuario(fk)]
DETALLE_VENTA [(idventa, idproducto)pk, id_detalle_venta, cantidad, precio_unitario ,porcentaje_impuesto, monto_impuesto ,subtotal]
MOVIMIENTO_INVENTAIRO[idmovimiento(pk), tipo, cantidad, fecha, referiencia, stock_restante, observaciones]
DETALLE_MOVIMIENTO[(idmovimiento, idinventario, idusuario)pk]
TRASLADO [idtraslado(pk), fecha, estado, observaciones, idalmacen_envia(fk), idalmacen_recibe(fk), idusuario(fk)]
DETALLE_TRASLADO [(idtraslado, idproducto)pk, id_detalle_traslado, cantidad]
*/

CREATE DATABASE IF NOT EXISTS Inventario_Technology_Store;
USE Inventario_Technology_Store;


SET FOREIGN_KEY_CHECKS = 0;

-- ==========================================
-- SEGURIDAD Y USUARIOS
-- ==========================================

CREATE TABLE Usuario (
    idusuario INT AUTO_INCREMENT PRIMARY KEY,
    nombreUsuario VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(150) UNIQUE,
    activo BOOLEAN DEFAULT TRUE,
    foto_perfil VARCHAR(255)
);

CREATE TABLE Rol (
    idrol INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    descripcion TEXT,
    activo BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE Permiso (
    idpermiso INT AUTO_INCREMENT PRIMARY KEY,
    accion VARCHAR(100) NOT NULL,
    subject VARCHAR(100) NOT NULL,
    detalle TEXT
);

CREATE TABLE Rol_Tiene_Permiso (
    idrol INT,
    idpermiso INT,
    PRIMARY KEY(idrol, idpermiso),
    FOREIGN KEY(idrol) REFERENCES Rol(idrol),
    FOREIGN KEY(idpermiso) REFERENCES Permiso(idpermiso)
);

CREATE TABLE Usuario_Asigna_Rol (
    idusuario INT,
    idrol INT,
    PRIMARY KEY(idusuario, idrol),
    FOREIGN KEY(idusuario) REFERENCES Usuario(idusuario),
    FOREIGN KEY(idrol) REFERENCES Rol(idrol)
);

-- ==========================================
-- EMPLEADOS
-- ==========================================

CREATE TABLE Empleado (
    idempleado INT AUTO_INCREMENT PRIMARY KEY,
    nombreCompleto VARCHAR(150) NOT NULL,
    ci VARCHAR(30) UNIQUE,
    telefono VARCHAR(30),
    direccion VARCHAR(255),
    fecha_nac DATE,
    fechaIngreso DATE,
    salarioBase DECIMAL(12,2),
    estado BOOLEAN DEFAULT TRUE,
    idusuario INT NULL,
    FOREIGN KEY(idusuario) REFERENCES Usuario(idusuario)
);

-- ==========================================
-- SUCURSALES Y ALMACENES
-- ==========================================

CREATE TABLE Sucursal (
    idsucursal INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    estado BOOLEAN DEFAULT TRUE,
    ciudad VARCHAR(100),
    direccion VARCHAR(255),
    telefono VARCHAR(30)
);

CREATE TABLE Trabaja_En (
    idsucursal INT,
    idempleado INT,
    PRIMARY KEY(idsucursal, idempleado),
    FOREIGN KEY(idsucursal) REFERENCES Sucursal(idsucursal),
    FOREIGN KEY(idempleado) REFERENCES Empleado(idempleado)
);

CREATE TABLE Almacen (
    idalmacen INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    activo BOOLEAN DEFAULT TRUE,
    idsucursal INT NOT NULL,
    FOREIGN KEY(idsucursal) REFERENCES Sucursal(idsucursal)
);

-- ==========================================
-- PRODUCTOS
-- ==========================================

CREATE TABLE Impuesto (
    idimpuesto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100),
    porcentaje DECIMAL(5,2),
    activo BOOLEAN DEFAULT TRUE
);

CREATE TABLE Marca (
    idmarca INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    pais VARCHAR(100),
    activo BOOLEAN DEFAULT TRUE
);

CREATE TABLE Categoria (
    idcategoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    activo BOOLEAN DEFAULT TRUE,
    imagen VARCHAR(255)
);

CREATE TABLE Producto (
    idproducto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    codigo_barras VARCHAR(100) UNIQUE,
    precio_venta DECIMAL(12,2) NOT NULL,
    descripcion TEXT,
    imagen VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    idimpuesto INT,
    idmarca INT,
    idcategoria INT,
    FOREIGN KEY(idimpuesto) REFERENCES Impuesto(idimpuesto),
    FOREIGN KEY(idmarca) REFERENCES Marca(idmarca),
    FOREIGN KEY(idcategoria) REFERENCES Categoria(idcategoria)
);

CREATE TABLE Inventario (
    idinventario INT AUTO_INCREMENT PRIMARY KEY,
    idproducto INT NOT NULL,
    idalmacen INT NOT NULL,
    stock_actual INT DEFAULT 0,
    stock_minimo INT DEFAULT 0,
    FOREIGN KEY(idproducto) REFERENCES Producto(idproducto),
    FOREIGN KEY(idalmacen) REFERENCES Almacen(idalmacen)
);

-- ==========================================
-- COMPRAS
-- ==========================================

CREATE TABLE Proveedor (
    idproveedor INT AUTO_INCREMENT PRIMARY KEY,
    razonsocial VARCHAR(150) NOT NULL,
    telefono VARCHAR(30),
    email VARCHAR(150),
    nit_ci VARCHAR(50),
    descripcion TEXT
);

CREATE TABLE Compra (
    idcompra INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(12,2),
    numero_factura_recibido VARCHAR(100),
    idalmacen INT NOT NULL,
    idproveedor INT NOT NULL,
    idusuario INT NOT NULL,
    FOREIGN KEY(idalmacen) REFERENCES Almacen(idalmacen),
    FOREIGN KEY(idproveedor) REFERENCES Proveedor(idproveedor),
    FOREIGN KEY(idusuario) REFERENCES Usuario(idusuario)
);

CREATE TABLE Detalle_Compra (
    id_detalle_compra INT AUTO_INCREMENT PRIMARY KEY,
    idcompra INT NOT NULL,
    idproducto INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(12,2),
    FOREIGN KEY(idcompra) REFERENCES Compra(idcompra),
    FOREIGN KEY(idproducto) REFERENCES Producto(idproducto)
);

-- ==========================================
-- CLIENTES Y FACTURAS
-- ==========================================

CREATE TABLE Cliente (
    idcliente INT AUTO_INCREMENT PRIMARY KEY,
    razon_social VARCHAR(150),
    ci_nit VARCHAR(50)
);

CREATE TABLE Factura (
    idfactura INT AUTO_INCREMENT PRIMARY KEY,
    numeroFactura VARCHAR(50),
    fechaemision DATETIME,
    codigoControl VARCHAR(100),
    estado VARCHAR(50),
    cuf VARCHAR(255),
    cufd VARCHAR(255)
);

-- ==========================================
-- VENTAS
-- ==========================================

CREATE TABLE Venta (
    idventa INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    subtotal_neto DECIMAL(12,2),
    total_impuestos DECIMAL(12,2),
    total_final DECIMAL(12,2),
    metodoPago VARCHAR(50),
    estado VARCHAR(50),
    idfactura INT,
    idcliente INT,
    idusuario INT,
    FOREIGN KEY(idfactura) REFERENCES Factura(idfactura),
    FOREIGN KEY(idcliente) REFERENCES Cliente(idcliente),
    FOREIGN KEY(idusuario) REFERENCES Usuario(idusuario)
);

CREATE TABLE Detalle_Venta (
    id_detalle_venta INT AUTO_INCREMENT PRIMARY KEY,
    idventa INT NOT NULL,
    idproducto INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(12,2),
    porcentaje_impuesto DECIMAL(5,2),
    monto_impuesto DECIMAL(12,2),
    subtotal DECIMAL(12,2),
    FOREIGN KEY(idventa) REFERENCES Venta(idventa),
    FOREIGN KEY(idproducto) REFERENCES Producto(idproducto)
);

-- ==========================================
-- MOVIMIENTOS
-- ==========================================

CREATE TABLE Movimiento_Inventario (
    idmovimiento INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(25) NOT NULL,
    cantidad INT NOT NULL,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    referencia VARCHAR(255),
    stock_restante INT,
    observaciones TEXT,
    idinventario INT NOT NULL,
    idusuario INT NOT NULL,
    FOREIGN KEY(idinventario) REFERENCES Inventario(idinventario),
    FOREIGN KEY(idusuario) REFERENCES Usuario(idusuario)
);

-- ==========================================
-- TRASLADOS
-- ==========================================

CREATE TABLE Traslado (
    idtraslado INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    estado VARCHAR(50),
    observaciones TEXT,
    idalmacen_envia INT NOT NULL,
    idalmacen_recibe INT NOT NULL,
    idusuario INT NOT NULL,
    FOREIGN KEY(idalmacen_envia) REFERENCES Almacen(idalmacen),
    FOREIGN KEY(idalmacen_recibe) REFERENCES Almacen(idalmacen),
    FOREIGN KEY(idusuario) REFERENCES Usuario(idusuario)
);

CREATE TABLE Detalle_Traslado (
    id_detalle_traslado INT AUTO_INCREMENT PRIMARY KEY,
    idtraslado INT NOT NULL,
    idproducto INT NOT NULL,
    cantidad INT NOT NULL,
    FOREIGN KEY(idtraslado) REFERENCES Traslado(idtraslado),
    FOREIGN KEY(idproducto) REFERENCES Producto(idproducto)
);

SET FOREIGN_KEY_CHECKS = 1;