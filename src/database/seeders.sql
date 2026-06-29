-- ==========================================
-- ROLES
-- ==========================================

INSERT INTO Rol(nombre,descripcion) VALUES
('SUPER_ADMIN','Control total del sistema'),
('ADMINISTRADOR','Administración general'),
('GERENTE','Gestión de sucursales'),
('VENDEDOR','Registro de ventas'),
('ALMACENERO','Control de inventario');

-- ==========================================
-- PERMISOS
-- ==========================================

INSERT INTO Permiso(accion,subject,detalle) VALUES
('CREATE','PRODUCTO','Crear productos'),
('READ','PRODUCTO','Ver productos'),
('UPDATE','PRODUCTO','Editar productos'),
('DELETE','PRODUCTO','Eliminar productos'),

('CREATE','VENTA','Registrar venta'),
('READ','VENTA','Ver ventas'),
('UPDATE','VENTA','Modificar ventas'),

('CREATE','COMPRA','Registrar compra'),
('READ','COMPRA','Ver compras'),

('CREATE','CLIENTE','Crear clientes'),
('READ','CLIENTE','Ver clientes'),

('CREATE','USUARIO','Crear usuarios'),
('READ','USUARIO','Ver usuarios'),
('UPDATE','USUARIO','Modificar usuarios'),

('CREATE','INVENTARIO','Gestionar inventario'),
('READ','INVENTARIO','Ver inventario'),

('CREATE','TRASLADO','Crear traslado'),
('READ','TRASLADO','Ver traslado');

-- ==========================================
-- IMPUESTOS
-- ==========================================

INSERT INTO Impuesto(nombre,porcentaje) VALUES
('IVA Bolivia',13.00),
('Exento',0.00);

-- ==========================================
-- MARCAS
-- ==========================================

INSERT INTO Marca(nombre,pais) VALUES
('Samsung','Corea del Sur'),
('Apple','Estados Unidos'),
('Xiaomi','China'),
('Lenovo','China'),
('HP','Estados Unidos'),
('Dell','Estados Unidos'),
('Asus','Taiwan'),
('Acer','Taiwan'),
('Logitech','Suiza'),
('Kingston','Estados Unidos'),
('MSI','Taiwan'),
('Corsair','Estados Unidos'),
('Huawei','China'),
('Sony','Japón'),
('Intel','Estados Unidos'),
('AMD','Estados Unidos');

-- ==========================================
-- CATEGORIAS
-- ==========================================

INSERT INTO Categoria(nombre,descripcion) VALUES
('Laptops','Computadoras portátiles'),
('Smartphones','Teléfonos inteligentes'),
('Monitores','Pantallas y monitores'),
('Teclados','Teclados mecánicos y membrana'),
('Mouse','Mouse gaming y oficina'),
('Procesadores','CPU'),
('Memorias RAM','RAM DDR4 DDR5'),
('Discos SSD','Almacenamiento SSD'),
('Tarjetas Graficas','GPU'),
('Auriculares','Audio'),
('Impresoras','Equipos de impresión'),
('Tablets','Dispositivos tablet'),
('Accesorios','Accesorios varios');

-- ==========================================
-- SUCURSALES
-- ==========================================

INSERT INTO Sucursal(nombre,ciudad,direccion,telefono) VALUES
('Technology Store Central','La Paz','Av. Mariscal Santa Cruz 100','22110000'),
('Technology Store Sur','Santa Cruz','Av. Banzer 200','33110000');

-- ==========================================
-- ALMACENES
-- ==========================================

INSERT INTO Almacen(nombre,descripcion,idsucursal) VALUES
('Central Principal','Almacen principal LP',1),
('Central Ventas','Almacen ventas LP',1),
('Central Backup','Reserva LP',1),

('SC Principal','Almacen principal SC',2),
('SC Ventas','Almacen ventas SC',2),
('SC Backup','Reserva SC',2);

-- ==========================================
-- USUARIOS
-- ==========================================

INSERT INTO Usuario(nombreUsuario,password,email) VALUES
('admin','123456','[admin@techstore.com](mailto:admin@techstore.com)'),
('gerente_lp','123456','[gerente_lp@techstore.com](mailto:gerente_lp@techstore.com)'),
('gerente_sc','123456','[gerente_sc@techstore.com](mailto:gerente_sc@techstore.com)'),
('vendedor1','123456','[vendedor1@techstore.com](mailto:vendedor1@techstore.com)'),
('vendedor2','123456','[vendedor2@techstore.com](mailto:vendedor2@techstore.com)'),
('vendedor3','123456','[vendedor3@techstore.com](mailto:vendedor3@techstore.com)'),
('vendedor4','123456','[vendedor4@techstore.com](mailto:vendedor4@techstore.com)'),
('vendedor5','123456','[vendedor5@techstore.com](mailto:vendedor5@techstore.com)'),
('almacen1','123456','[almacen1@techstore.com](mailto:almacen1@techstore.com)'),
('almacen2','123456','[almacen2@techstore.com](mailto:almacen2@techstore.com)'),
('almacen3','123456','[almacen3@techstore.com](mailto:almacen3@techstore.com)'),
('almacen4','123456','[almacen4@techstore.com](mailto:almacen4@techstore.com)'),
('cajero1','123456','[cajero1@techstore.com](mailto:cajero1@techstore.com)'),
('cajero2','123456','[cajero2@techstore.com](mailto:cajero2@techstore.com)'),
('auditor','123456','[auditor@techstore.com](mailto:auditor@techstore.com)');

-- ==========================================
-- EMPLEADOS
-- ==========================================

INSERT INTO Empleado
(nombreCompleto,ci,telefono,direccion,fecha_nac,fechaIngreso,salarioBase,idusuario)
VALUES
('Carlos Mamani','900001','77770001','La Paz','1990-01-10','2023-01-01',8000,1),
('Ana Quispe','900002','77770002','La Paz','1992-03-15','2023-01-01',7000,2),
('Luis Flores','900003','77770003','Santa Cruz','1991-05-20','2023-01-01',7000,3),
('Pedro Rojas','900004','77770004','La Paz','1995-02-10','2024-01-01',4500,4),
('Maria Vargas','900005','77770005','La Paz','1994-02-10','2024-01-01',4500,5),
('Jose Perez','900006','77770006','La Paz','1996-02-10','2024-01-01',4500,6),
('Lucia Gomez','900007','77770007','Santa Cruz','1994-07-10','2024-01-01',4500,7),
('Ricardo Suarez','900008','77770008','Santa Cruz','1995-07-10','2024-01-01',4500,8),
('Mario Torres','900009','77770009','La Paz','1993-04-10','2023-06-01',5000,9),
('Sofia Rivas','900010','77770010','La Paz','1993-04-10','2023-06-01',5000,10),
('Diego Cruz','900011','77770011','Santa Cruz','1993-04-10','2023-06-01',5000,11),
('Paola Medina','900012','77770012','Santa Cruz','1993-04-10','2023-06-01',5000,12),
('Bruno Salazar','900013','77770013','La Paz','1994-04-10','2023-06-01',4200,13),
('Valeria Castro','900014','77770014','Santa Cruz','1994-04-10','2023-06-01',4200,14),
('Jorge Molina','900015','77770015','La Paz','1994-04-10','2023-06-01',6500,15);

-- ==========================================
-- ASIGNACION EMPLEADOS-SUCURSALES
-- ==========================================

INSERT INTO Trabaja_En VALUES
(1,1),(1,2),(2,3),
(1,4),(1,5),(1,6),
(2,7),(2,8),
(1,9),(1,10),
(2,11),(2,12),
(1,13),(2,14),(1,15);

-- ==========================================
-- PROVEEDORES
-- ==========================================

INSERT INTO Proveedor
(razonsocial,telefono,email,nit_ci,descripcion)
VALUES
('Samsung Bolivia','22110001','[ventas@samsung.bo](mailto:ventas@samsung.bo)','100001','Distribuidor oficial'),
('Apple Distribution','22110002','[ventas@apple.bo](mailto:ventas@apple.bo)','100002','Proveedor Apple'),
('Lenovo Bolivia','22110003','[ventas@lenovo.bo](mailto:ventas@lenovo.bo)','100003','Distribuidor Lenovo'),
('HP Enterprise','22110004','[ventas@hp.bo](mailto:ventas@hp.bo)','100004','Distribuidor HP'),
('Dell Technologies','22110005','[ventas@dell.bo](mailto:ventas@dell.bo)','100005','Distribuidor Dell'),
('Xiaomi Bolivia','22110006','[ventas@xiaomi.bo](mailto:ventas@xiaomi.bo)','100006','Distribuidor Xiaomi'),
('Logitech Bolivia','22110007','[ventas@logitech.bo](mailto:ventas@logitech.bo)','100007','Accesorios'),
('Kingston Bolivia','22110008','[ventas@kingston.bo](mailto:ventas@kingston.bo)','100008','Memorias'),
('AMD Bolivia','22110009','[ventas@amd.bo](mailto:ventas@amd.bo)','100009','Procesadores'),
('Intel Bolivia','22110010','[ventas@intel.bo](mailto:ventas@intel.bo)','100010','Procesadores');

-- ==========================================
-- PRODUCTOS - LAPTOPS
-- ==========================================

INSERT INTO Producto
(nombre,codigo_barras,precio_venta,descripcion,imagen,idimpuesto,idmarca,idcategoria)
VALUES

('Lenovo ThinkPad E14 Gen 5','100000001',6200,'Laptop empresarial Ryzen 5','https://images.lenovo.com/e14.jpg',1,4,1),

('Lenovo IdeaPad Gaming 3','100000002',7800,'Laptop Gaming RTX 3050','https://images.lenovo.com/gaming3.jpg',1,4,1),

('HP Pavilion 15','100000003',6500,'Laptop HP Pavilion i5','https://images.hp.com/pavilion15.jpg',1,5,1),

('HP Victus 15','100000004',8900,'Laptop Gaming HP Victus','https://images.hp.com/victus15.jpg',1,5,1),

('Dell Inspiron 15','100000005',7200,'Laptop Dell Inspiron','https://images.dell.com/inspiron15.jpg',1,6,1),

('Dell G15 Gaming','100000006',9800,'Laptop Gamer Dell','https://images.dell.com/g15.jpg',1,6,1),

('Asus TUF Gaming F15','100000007',10500,'Laptop Gamer Asus','https://images.asus.com/tuf15.jpg',1,7,1),

('Acer Nitro 5','100000008',9200,'Laptop Gamer Acer','https://images.acer.com/nitro5.jpg',1,8,1);

-- ==========================================
-- SMARTPHONES
-- ==========================================

INSERT INTO Producto
(nombre,codigo_barras,precio_venta,descripcion,imagen,idimpuesto,idmarca,idcategoria)
VALUES

('Samsung Galaxy S25','100000009',7200,'Flagship Samsung','https://images.samsung.com/s25.jpg',1,1,2),

('Samsung Galaxy A56','100000010',3200,'Gama media Samsung','https://images.samsung.com/a56.jpg',1,1,2),

('Samsung Galaxy A36','100000011',2500,'Samsung Serie A','https://images.samsung.com/a36.jpg',1,1,2),

('iPhone 16 Pro','100000012',12500,'Apple iPhone 16 Pro','https://images.apple.com/iphone16pro.jpg',1,2,2),

('iPhone 16','100000013',9800,'Apple iPhone 16','https://images.apple.com/iphone16.jpg',1,2,2),

('Xiaomi Redmi Note 14 Pro','100000014',2800,'Redmi gama media','https://images.mi.com/redmi14pro.jpg',1,3,2),

('Xiaomi 15 Ultra','100000015',6900,'Flagship Xiaomi','https://images.mi.com/15ultra.jpg',1,3,2),

('Huawei Nova 13','100000016',4200,'Huawei Nova','https://images.huawei.com/nova13.jpg',1,13,2);

-- ==========================================
-- MONITORES
-- ==========================================

INSERT INTO Producto
(nombre,codigo_barras,precio_venta,descripcion,imagen,idimpuesto,idmarca,idcategoria)
VALUES

('Samsung Odyssey G5 27','100000017',2400,'Monitor Gamer Curvo','https://images.samsung.com/g5.jpg',1,1,3),

('Samsung ViewFinity S6','100000018',1800,'Monitor Profesional','https://images.samsung.com/s6.jpg',1,1,3),

('Dell UltraSharp U2724D','100000019',3500,'Monitor Profesional Dell','https://images.dell.com/u2724d.jpg',1,6,3),

('Asus TUF VG27AQ','100000020',2900,'Monitor Gaming Asus','https://images.asus.com/vg27aq.jpg',1,7,3);

-- ==========================================
-- TECLADOS
-- ==========================================

INSERT INTO Producto
(nombre,codigo_barras,precio_venta,descripcion,imagen,idimpuesto,idmarca,idcategoria)
VALUES

('Logitech G915','100000021',1450,'Teclado Mecánico Wireless','https://images.logitech.com/g915.jpg',1,9,4),

('Logitech G Pro X Keyboard','100000022',1200,'Teclado Gamer','https://images.logitech.com/prox.jpg',1,9,4),

('Corsair K70 RGB','100000023',990,'Teclado Mecánico RGB','https://images.corsair.com/k70.jpg',1,12,4),

('MSI Vigor GK50','100000024',650,'Teclado MSI','https://images.msi.com/gk50.jpg',1,11,4);

-- ==========================================
-- MOUSE
-- ==========================================

INSERT INTO Producto
(nombre,codigo_barras,precio_venta,descripcion,imagen,idimpuesto,idmarca,idcategoria)
VALUES

('Logitech G502 X','100000025',650,'Mouse Gaming','https://images.logitech.com/g502x.jpg',1,9,5),

('Logitech MX Master 3S','100000026',890,'Mouse Profesional','https://images.logitech.com/mx3s.jpg',1,9,5),

('Corsair Dark Core RGB','100000027',590,'Mouse Gamer Corsair','https://images.corsair.com/darkcore.jpg',1,12,5),

('MSI Clutch GM41','100000028',450,'Mouse MSI','https://images.msi.com/gm41.jpg',1,11,5);

-- ==========================================
-- PROCESADORES
-- ==========================================

INSERT INTO Producto
(nombre,codigo_barras,precio_venta,descripcion,imagen,idimpuesto,idmarca,idcategoria)
VALUES

('Intel Core i5 14600K','100000029',2500,'Procesador Intel 14 Gen','https://images.intel.com/i5.jpg',1,15,6),

('Intel Core i7 14700K','100000030',3700,'Procesador Intel 14 Gen','https://images.intel.com/i7.jpg',1,15,6),

('AMD Ryzen 5 9600X','100000031',2200,'Procesador AMD Ryzen','https://images.amd.com/9600x.jpg',1,16,6),

('AMD Ryzen 7 9700X','100000032',3400,'Procesador AMD Ryzen','https://images.amd.com/9700x.jpg',1,16,6);

-- ==========================================
-- MEMORIAS RAM
-- ==========================================

INSERT INTO Producto
(nombre,codigo_barras,precio_venta,descripcion,imagen,idimpuesto,idmarca,idcategoria)
VALUES

('Kingston Fury Beast 16GB DDR5','100000033',520,'DDR5 16GB','https://images.kingston.com/fury16.jpg',1,10,7),

('Kingston Fury Beast 32GB DDR5','100000034',980,'DDR5 32GB','https://images.kingston.com/fury32.jpg',1,10,7),

('Corsair Vengeance 16GB DDR5','100000035',540,'DDR5 Corsair','https://images.corsair.com/vengeance16.jpg',1,12,7),

('Corsair Vengeance 32GB DDR5','100000036',1050,'DDR5 Corsair','https://images.corsair.com/vengeance32.jpg',1,12,7);

-- ==========================================
-- SSD
-- ==========================================

INSERT INTO Producto
(nombre,codigo_barras,precio_venta,descripcion,imagen,idimpuesto,idmarca,idcategoria)
VALUES

('Kingston NV2 1TB','100000037',550,'SSD NVMe','https://images.kingston.com/nv2.jpg',1,10,8),

('Kingston KC3000 2TB','100000038',1100,'SSD NVMe Alto Rendimiento','https://images.kingston.com/kc3000.jpg',1,10,8),

('Samsung 990 Pro 1TB','100000039',890,'SSD Samsung','https://images.samsung.com/990pro.jpg',1,1,8),

('Samsung 990 Pro 2TB','100000040',1550,'SSD Samsung','https://images.samsung.com/990pro2tb.jpg',1,1,8);

-- ==========================================
-- TARJETAS GRAFICAS (41 - 50)
-- Categoria = 9
-- ==========================================

INSERT INTO Producto
(nombre,codigo_barras,precio_venta,descripcion,imagen,idimpuesto,idmarca,idcategoria)
VALUES
('MSI RTX 4060 Ventus 8GB','100000041',3200,'NVIDIA RTX 4060','https://images.msi.com/rtx4060.jpg',1,11,9),
('MSI RTX 4070 Super 12GB','100000042',5200,'RTX 4070 Super','https://images.msi.com/rtx4070super.jpg',1,11,9),
('Asus Dual RTX 4060','100000043',3400,'RTX 4060 Asus','https://images.asus.com/rtx4060dual.jpg',1,7,9),
('Asus TUF RTX 4070 Ti','100000044',7200,'RTX 4070 Ti','https://images.asus.com/rtx4070ti.jpg',1,7,9),
('AMD Radeon RX 7600','100000045',2900,'AMD Radeon','https://images.amd.com/rx7600.jpg',1,16,9),
('AMD Radeon RX 7700 XT','100000046',4600,'AMD Radeon XT','https://images.amd.com/rx7700xt.jpg',1,16,9),
('MSI RTX 4080 Super','100000047',9800,'RTX 4080 Super','https://images.msi.com/rtx4080.jpg',1,11,9),
('Asus RTX 4090 ROG','100000048',15000,'RTX 4090 ROG','https://images.asus.com/rtx4090rog.jpg',1,7,9),
('MSI RX 7800 XT','100000049',5300,'AMD RX 7800 XT','https://images.msi.com/rx7800xt.jpg',1,11,9),
('Asus RX 7900 XTX','100000050',9200,'AMD RX 7900 XTX','https://images.asus.com/rx7900xtx.jpg',1,7,9);

-- ==========================================
-- AURICULARES (51 - 60)
-- Categoria = 10
-- ==========================================

INSERT INTO Producto
(nombre,codigo_barras,precio_venta,descripcion,imagen,idimpuesto,idmarca,idcategoria)
VALUES
('Sony WH-1000XM5','100000051',2900,'Cancelación de ruido','https://images.sony.com/xm5.jpg',1,14,10),
('Sony WH-CH720N','100000052',1200,'Bluetooth','https://images.sony.com/ch720n.jpg',1,14,10),
('Logitech G733','100000053',980,'Gaming RGB','https://images.logitech.com/g733.jpg',1,9,10),
('Logitech G Pro X Wireless','100000054',1600,'Gaming Pro','https://images.logitech.com/gprox.jpg',1,9,10),
('Samsung Galaxy Buds 3','100000055',850,'Auriculares Samsung','https://images.samsung.com/buds3.jpg',1,1,10),
('Apple AirPods Pro 2','100000056',2200,'AirPods Pro','https://images.apple.com/airpodspro2.jpg',1,2,10),
('Huawei FreeBuds Pro','100000057',950,'Huawei Audio','https://images.huawei.com/freebuds.jpg',1,13,10),
('Sony INZONE H5','100000058',1350,'Gaming Headset','https://images.sony.com/inzoneh5.jpg',1,14,10),
('Logitech G435','100000059',650,'Wireless Gaming','https://images.logitech.com/g435.jpg',1,9,10),
('Samsung Galaxy Buds FE','100000060',550,'Galaxy Buds','https://images.samsung.com/budsfe.jpg',1,1,10);

-- ==========================================
-- IMPRESORAS (61 - 70)
-- Categoria = 11
-- ==========================================

INSERT INTO Producto
(nombre,codigo_barras,precio_venta,descripcion,imagen,idimpuesto,idmarca,idcategoria)
VALUES
('HP Smart Tank 580','100000061',1650,'Impresora Multifuncional','https://images.hp.com/tank580.jpg',1,5,11),
('HP Smart Tank 750','100000062',2450,'WiFi Multifuncional','https://images.hp.com/tank750.jpg',1,5,11),
('HP LaserJet M111w','100000063',1300,'Laser Monocromática','https://images.hp.com/m111w.jpg',1,5,11),
('Epson L3250','100000064',1750,'EcoTank WiFi','https://images.epson.com/l3250.jpg',1,5,11),
('Epson L4260','100000065',2200,'EcoTank Duplex','https://images.epson.com/l4260.jpg',1,5,11),
('Canon PIXMA G3110','100000066',1600,'Canon Multifuncional','https://images.canon.com/g3110.jpg',1,5,11),
('Canon PIXMA G6010','100000067',2450,'Canon WiFi','https://images.canon.com/g6010.jpg',1,5,11),
('HP OfficeJet Pro 9015','100000068',2900,'Empresarial','https://images.hp.com/9015.jpg',1,5,11),
('Brother DCP-T420W','100000069',1700,'Brother InkBenefit','https://images.brother.com/t420.jpg',1,5,11),
('Brother HL-L2370DW','100000070',2100,'Laser WiFi','https://images.brother.com/l2370.jpg',1,5,11);

-- ==========================================
-- TABLETS (71 - 80)
-- Categoria = 12
-- ==========================================

INSERT INTO Producto
(nombre,codigo_barras,precio_venta,descripcion,imagen,idimpuesto,idmarca,idcategoria)
VALUES
('Samsung Galaxy Tab S10','100000071',4800,'Tablet Samsung Premium','https://images.samsung.com/tabs10.jpg',1,1,12),
('Samsung Galaxy Tab A9','100000072',1700,'Tablet Samsung','https://images.samsung.com/taba9.jpg',1,1,12),
('Apple iPad 11','100000073',5200,'Apple iPad','https://images.apple.com/ipad11.jpg',1,2,12),
('Apple iPad Air M3','100000074',7800,'iPad Air','https://images.apple.com/ipadair.jpg',1,2,12),
('Lenovo Tab P12','100000075',2600,'Tablet Lenovo','https://images.lenovo.com/tabp12.jpg',1,4,12),
('Lenovo Tab M11','100000076',1800,'Tablet Lenovo M11','https://images.lenovo.com/tabm11.jpg',1,4,12),
('Huawei MatePad 11.5','100000077',3200,'Huawei Tablet','https://images.huawei.com/matepad.jpg',1,13,12),
('Xiaomi Pad 7','100000078',3500,'Tablet Xiaomi','https://images.mi.com/pad7.jpg',1,3,12),
('Samsung Galaxy Tab S9 FE','100000079',3400,'Galaxy FE','https://images.samsung.com/s9fe.jpg',1,1,12),
('Apple iPad Mini','100000080',4600,'iPad Mini','https://images.apple.com/ipadmini.jpg',1,2,12);

-- ==========================================
-- ACCESORIOS (81 - 100)
-- Categoria = 13
-- ==========================================

INSERT INTO Producto
(nombre,codigo_barras,precio_venta,descripcion,imagen,idimpuesto,idmarca,idcategoria)
VALUES
('Logitech C920 Webcam','100000081',580,'Webcam Full HD','https://images.logitech.com/c920.jpg',1,9,13),
('Logitech Brio 4K','100000082',1200,'Webcam 4K','https://images.logitech.com/brio.jpg',1,9,13),
('Samsung T7 SSD Externo 1TB','100000083',850,'SSD Portátil','https://images.samsung.com/t7.jpg',1,1,13),
('Samsung T7 SSD Externo 2TB','100000084',1450,'SSD Portátil','https://images.samsung.com/t72tb.jpg',1,1,13),
('Kingston DataTraveler 128GB','100000085',120,'USB 128GB','https://images.kingston.com/dt128.jpg',1,10,13),
('Kingston DataTraveler 256GB','100000086',220,'USB 256GB','https://images.kingston.com/dt256.jpg',1,10,13),
('Logitech Presenter R500','100000087',350,'Presentador inalámbrico','https://images.logitech.com/r500.jpg',1,9,13),
('Apple Magic Mouse','100000088',890,'Mouse Apple','https://images.apple.com/magicmouse.jpg',1,2,13),
('Apple Magic Keyboard','100000089',1200,'Teclado Apple','https://images.apple.com/magickeyboard.jpg',1,2,13),
('Samsung Power Bank 10000mAh','100000090',320,'Batería portátil','https://images.samsung.com/powerbank.jpg',1,1,13),
('Xiaomi Power Bank 20000mAh','100000091',280,'Power Bank Xiaomi','https://images.mi.com/powerbank.jpg',1,3,13),
('Logitech Z213 Speakers','100000092',380,'Parlantes Logitech','https://images.logitech.com/z213.jpg',1,9,13),
('Sony SRS-XB100','100000093',520,'Parlante Bluetooth','https://images.sony.com/xb100.jpg',1,14,13),
('Samsung SmartTag 2','100000094',190,'Localizador Bluetooth','https://images.samsung.com/smarttag2.jpg',1,1,13),
('Apple AirTag','100000095',290,'Rastreador Apple','https://images.apple.com/airtag.jpg',1,2,13),
('Logitech USB Hub','100000096',180,'Hub USB','https://images.logitech.com/hub.jpg',1,9,13),
('Kingston MicroSD 128GB','100000097',110,'Memoria MicroSD','https://images.kingston.com/microsd128.jpg',1,10,13),
('Kingston MicroSD 256GB','100000098',220,'Memoria MicroSD','https://images.kingston.com/microsd256.jpg',1,10,13),
('Corsair MM300 Mouse Pad','100000099',150,'Mouse Pad Gamer','https://images.corsair.com/mm300.jpg',1,12,13),
('Logitech Desk Mat Studio','100000100',180,'Alfombrilla escritorio','https://images.logitech.com/deskmat.jpg',1,9,13);

-- ==========================================
-- SEEDER 3
-- INVENTARIO INICIAL
-- 100 PRODUCTOS x 6 ALMACENES = 600 REGISTROS
-- ==========================================

INSERT INTO Inventario
(
idproducto,
idalmacen,
stock_actual,
stock_minimo
)
SELECT
p.idproducto,
a.idalmacen,

```
CASE

    -- LAPTOPS
    WHEN p.idcategoria = 1 THEN FLOOR(5 + RAND()*16)

    -- SMARTPHONES
    WHEN p.idcategoria = 2 THEN FLOOR(20 + RAND()*31)

    -- MONITORES
    WHEN p.idcategoria = 3 THEN FLOOR(8 + RAND()*18)

    -- TECLADOS
    WHEN p.idcategoria = 4 THEN FLOOR(15 + RAND()*36)

    -- MOUSE
    WHEN p.idcategoria = 5 THEN FLOOR(20 + RAND()*41)

    -- PROCESADORES
    WHEN p.idcategoria = 6 THEN FLOOR(10 + RAND()*21)

    -- MEMORIA RAM
    WHEN p.idcategoria = 7 THEN FLOOR(30 + RAND()*71)

    -- SSD
    WHEN p.idcategoria = 8 THEN FLOOR(20 + RAND()*61)

    -- GPU
    WHEN p.idcategoria = 9 THEN FLOOR(3 + RAND()*13)

    -- AURICULARES
    WHEN p.idcategoria = 10 THEN FLOOR(15 + RAND()*46)

    -- IMPRESORAS
    WHEN p.idcategoria = 11 THEN FLOOR(5 + RAND()*21)

    -- TABLETS
    WHEN p.idcategoria = 12 THEN FLOOR(8 + RAND()*23)

    -- ACCESORIOS
    ELSE FLOOR(25 + RAND()*126)

END,

CASE

    WHEN p.idcategoria = 1 THEN 3
    WHEN p.idcategoria = 2 THEN 10
    WHEN p.idcategoria = 3 THEN 5
    WHEN p.idcategoria = 4 THEN 10
    WHEN p.idcategoria = 5 THEN 10
    WHEN p.idcategoria = 6 THEN 5
    WHEN p.idcategoria = 7 THEN 15
    WHEN p.idcategoria = 8 THEN 10
    WHEN p.idcategoria = 9 THEN 2
    WHEN p.idcategoria = 10 THEN 10
    WHEN p.idcategoria = 11 THEN 3
    WHEN p.idcategoria = 12 THEN 5
    ELSE 20

END
```

FROM Producto p
CROSS JOIN Almacen a;


-- ==========================================
-- SEEDER 4
-- CLIENTES
-- 25 PERSONAS NATURALES
-- 25 EMPRESAS
-- ==========================================

INSERT INTO Cliente (razon_social, ci_nit) VALUES

-- ==========================================
-- PERSONAS NATURALES (1 - 25)
-- ==========================================

('Carlos Alberto Mamani Quispe','6845123'),
('Ana Lucia Flores Vargas','7132456'),
('Luis Fernando Rojas Perez','5921348'),
('Maria Elena Choque Condori','8456123'),
('Jorge Daniel Gutierrez Flores','7312894'),

('Patricia Quispe Mendoza','6789123'),
('Miguel Angel Vargas Flores','5432789'),
('Sofia Fernanda Lopez Cruz','8123456'),
('Ricardo Javier Salazar Mamani','7213458'),
('Valeria Alejandra Paredes Rojas','6547891'),

('Diego Andres Molina Flores','5987412'),
('Paola Andrea Cruz Quispe','7231564'),
('Fernando Marcelo Herrera Vargas','6215789'),
('Lucia Pamela Gonzales Flores','7984561'),
('Bruno Sebastian Medina Rojas','6123789'),

('Camila Andrea Mendoza Choque','7561984'),
('Jose Antonio Perez Vargas','6457123'),
('Gabriela Fernanda Salinas Flores','8541237'),
('Rodrigo Marcelo Quisbert Rojas','6895412'),
('Andrea Carolina Mamani Flores','7458123'),

('Kevin Alejandro Vargas Choque','6321457'),
('Tatiana Patricia Flores Medina','8124579'),
('Mauricio Daniel Rojas Gutierrez','7563214'),
('Daniela Alejandra Quispe Vargas','6987415'),
('Cristian Alberto Salazar Flores','7854123'),

-- ==========================================
-- EMPRESAS (26 - 50)
-- ==========================================

('Tecnologia Integral SRL','100000001'),
('Soluciones Informaticas Bolivia SRL','100000002'),
('Digital Systems SRL','100000003'),
('Comercial Electronica Andina SA','100000004'),
('Importadora Tecnologica del Sur SRL','100000005'),

('Net Solutions Bolivia SRL','100000006'),
('Grupo Empresarial Innovatech SA','100000007'),
('Smart Business Systems SRL','100000008'),
('TecnoMarket Bolivia SRL','100000009'),
('Computacion Profesional SA','100000010'),

('Innova Software Group SRL','100000011'),
('Global Data Technologies SA','100000012'),
('Andes Telecom Solutions SRL','100000013'),
('Bolivia Digital Services SRL','100000014'),
('Mega Computadoras SRL','100000015'),

('Electronica Avanzada Bolivia SA','100000016'),
('Distribuidora Nacional de Tecnologia SRL','100000017'),
('Redes y Comunicaciones Andinas SRL','100000018'),
('Cloud Business Bolivia SA','100000019'),
('Importadora Smart Devices SRL','100000020'),

('Tech Solutions Enterprise SRL','100000021'),
('Corporacion Informatica Nacional SA','100000022'),
('Future Systems Bolivia SRL','100000023'),
('Grupo Tecnologico Integral SA','100000024'),
('Servicios Digitales Empresariales SRL','100000025');


-- ==========================================
-- SEEDER 5A
-- COMPRAS HISTORICAS
-- 50 COMPRAS
-- ==========================================

INSERT INTO Compra
(
fecha,
total,
numero_factura_recibido,
idalmacen,
idproveedor,
idusuario
)
VALUES

('2026-01-05 09:15:00',18500,'FAC-000001',1,1,1),
('2026-01-07 10:30:00',12700,'FAC-000002',2,2,2),
('2026-01-10 15:45:00',22300,'FAC-000003',3,3,1),
('2026-01-12 11:20:00',15800,'FAC-000004',4,4,3),
('2026-01-15 16:10:00',9400,'FAC-000005',5,5,3),

('2026-01-18 14:25:00',17600,'FAC-000006',6,6,1),
('2026-01-22 09:00:00',13500,'FAC-000007',1,7,2),
('2026-01-25 13:50:00',24800,'FAC-000008',2,8,1),
('2026-01-28 10:15:00',19300,'FAC-000009',3,9,2),
('2026-01-30 17:05:00',11100,'FAC-000010',4,10,3),

('2026-02-03 09:30:00',14200,'FAC-000011',5,1,1),
('2026-02-06 11:45:00',22800,'FAC-000012',6,2,2),
('2026-02-10 14:20:00',16900,'FAC-000013',1,3,1),
('2026-02-12 10:00:00',9700,'FAC-000014',2,4,2),
('2026-02-15 16:30:00',18400,'FAC-000015',3,5,3),

('2026-02-18 13:15:00',20100,'FAC-000016',4,6,1),
('2026-02-22 09:40:00',15300,'FAC-000017',5,7,2),
('2026-02-25 12:50:00',26600,'FAC-000018',6,8,3),
('2026-02-27 15:30:00',12100,'FAC-000019',1,9,1),
('2026-02-28 11:10:00',17400,'FAC-000020',2,10,2),

('2026-03-04 10:25:00',23900,'FAC-000021',3,1,1),
('2026-03-07 14:00:00',13200,'FAC-000022',4,2,2),
('2026-03-10 16:40:00',19600,'FAC-000023',5,3,3),
('2026-03-13 09:50:00',8800,'FAC-000024',6,4,1),
('2026-03-16 13:30:00',21700,'FAC-000025',1,5,2),

('2026-03-20 10:20:00',16400,'FAC-000026',2,6,3),
('2026-03-23 15:10:00',14500,'FAC-000027',3,7,1),
('2026-03-26 11:30:00',27800,'FAC-000028',4,8,2),
('2026-03-29 17:00:00',11800,'FAC-000029',5,9,3),
('2026-03-31 12:20:00',20300,'FAC-000030',6,10,1),

('2026-04-03 09:10:00',18200,'FAC-000031',1,1,2),
('2026-04-06 14:45:00',9700,'FAC-000032',2,2,3),
('2026-04-10 10:35:00',25100,'FAC-000033',3,3,1),
('2026-04-13 16:15:00',13700,'FAC-000034',4,4,2),
('2026-04-16 11:50:00',21400,'FAC-000035',5,5,3),

('2026-04-20 13:40:00',16600,'FAC-000036',6,6,1),
('2026-04-23 09:20:00',10800,'FAC-000037',1,7,2),
('2026-04-26 15:00:00',23600,'FAC-000038',2,8,3),
('2026-04-28 10:50:00',14900,'FAC-000039',3,9,1),
('2026-04-30 17:10:00',19200,'FAC-000040',4,10,2),

('2026-05-04 09:45:00',12800,'FAC-000041',5,1,3),
('2026-05-08 14:15:00',24700,'FAC-000042',6,2,1),
('2026-05-12 10:30:00',17500,'FAC-000043',1,3,2),
('2026-05-16 16:20:00',9300,'FAC-000044',2,4,3),
('2026-05-20 11:15:00',20500,'FAC-000045',3,5,1),

('2026-05-24 13:55:00',16100,'FAC-000046',4,6,2),
('2026-05-27 09:25:00',14200,'FAC-000047',5,7,3),
('2026-05-29 15:40:00',28400,'FAC-000048',6,8,1),
('2026-05-30 10:10:00',11900,'FAC-000049',1,9,2),
('2026-05-31 16:50:00',19800,'FAC-000050',2,10,3);
-- ==========================================
-- SEEDER 5B
-- DETALLE_COMPRA
-- 50 COMPRAS x 6 PRODUCTOS = 300 REGISTROS
-- ==========================================

INSERT INTO Detalle_Compra
(
idcompra,
idproducto,
cantidad,
precio_unitario
)
SELECT
c.idcompra,

```
(((c.idcompra - 1) * 6 + n.numero - 1) MOD 100) + 1,

FLOOR(5 + RAND() * 26),

ROUND(
    (
        SELECT p.precio_venta
        FROM Producto p
        WHERE p.idproducto =
        ((((c.idcompra - 1) * 6 + n.numero - 1) MOD 100) + 1)
    ) * (0.60 + RAND() * 0.15),
    2
)
```

FROM Compra c

CROSS JOIN
(
SELECT 1 numero
UNION SELECT 2
UNION SELECT 3
UNION SELECT 4
UNION SELECT 5
UNION SELECT 6
) n;


-- ==========================================
-- SEEDER 5C
-- DETALLE_COMPRA REALISTA
-- BASADO EN EL PROVEEDOR
-- ==========================================

INSERT INTO Detalle_Compra
(
idcompra,
idproducto,
cantidad,
precio_unitario
)
SELECT
c.idcompra,
p.idproducto,

```
FLOOR(5 + RAND() * 25),

ROUND(p.precio_venta * (0.60 + RAND()*0.12),2)
```

FROM Compra c
INNER JOIN Producto p
ON
(
(c.idproveedor = 1  AND p.idmarca = 1) OR
(c.idproveedor = 2  AND p.idmarca = 2) OR
(c.idproveedor = 3  AND p.idmarca = 4) OR
(c.idproveedor = 4  AND p.idmarca = 5) OR
(c.idproveedor = 5  AND p.idmarca = 6) OR
(c.idproveedor = 6  AND p.idmarca = 3) OR
(c.idproveedor = 7  AND p.idmarca = 9) OR
(c.idproveedor = 8  AND p.idmarca = 10) OR
(c.idproveedor = 9  AND p.idmarca = 16) OR
(c.idproveedor = 10 AND p.idmarca = 15)
);