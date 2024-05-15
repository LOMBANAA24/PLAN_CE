-- Creación de la base de datos
CREATE SCHEMA `motoscev6_nueva`;
USE `motoscev6_nueva`;

-- Creación de la tabla Ciudad
CREATE TABLE Ciudad (
    ID_Ciudad INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
    CodigoPostal VARCHAR(10) NOT NULL,
    Provincia VARCHAR(50) NOT NULL,
    NumeroHabitantes INT NOT NULL
);

-- Insertar datos en la tabla Ciudad
INSERT INTO Ciudad (Nombre, CodigoPostal, Provincia, NumeroHabitantes)
VALUES 
    ('Bogotá', '11001', 'Bogotá D.C.', 7300000),
    ('Medellín', '05001', 'Antioquia', 2530000),
    ('Cali', '76001', 'Valle del Cauca', 2260000),
    ('Barranquilla', '08001', 'Atlántico', 1230000);

-- Creación de la tabla Agencia
CREATE TABLE Agencia (
    ID_Agencia INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL UNIQUE,
    Calle VARCHAR(100) NOT NULL,
    Numero VARCHAR(10) NOT NULL,
    ID_Ciudad INT,
    FOREIGN KEY (ID_Ciudad) REFERENCES Ciudad(ID_Ciudad)
);

-- Insertar datos en la tabla Agencia
INSERT INTO Agencia (Nombre, Calle, Numero, ID_Ciudad)
VALUES 
    ('Agencia Norte', 'Calle 72', '101', 1),  -- Bogotá
    ('Agencia Sur', 'Calle 1', '202', 2),  -- Medellín
    ('Agencia Centro', 'Carrera 5', '303', 3),  -- Cali
    ('Agencia Costera', 'Avenida 3', '404', 4);  -- Barranquilla

-- Creación de la tabla Garaje
CREATE TABLE Garaje (
    ID_Garaje INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
    Calle VARCHAR(100) NOT NULL,
    Numero VARCHAR(10) NOT NULL,
    ID_Ciudad INT,
    FOREIGN KEY (ID_Ciudad) REFERENCES Ciudad(ID_Ciudad)
);

-- Insertar datos en la tabla Garaje
INSERT INTO Garaje (Nombre, Calle, Numero, ID_Ciudad)
VALUES 
    ('Garaje 1', 'Carrera 10', '101', 1),  -- Bogotá
    ('Garaje 2', 'Calle 20', '202', 2),  -- Medellín
    ('Garaje 3', 'Avenida 30', '303', 3),  -- Cali
    ('Garaje 4', 'Carrera 40', '404', 4);  -- Barranquilla

-- Creación de la tabla TelefonoAgencia
CREATE TABLE TelefonoAgencia (
    ID_Telefono INT PRIMARY KEY AUTO_INCREMENT,
    ID_Agencia INT NOT NULL,
    Telefono VARCHAR(15) NOT NULL,
    FOREIGN KEY (ID_Agencia) REFERENCES Agencia(ID_Agencia)
);

-- Insertar datos en la tabla TelefonoAgencia
INSERT INTO TelefonoAgencia (ID_Agencia, Telefono)
VALUES 
    (1, '1234567890'),
    (1, '0987654321'),
    (2, '5678901234'),
    (2, '6789012345'),
    (3, '7890123456'),
    (3, '8901234567'),
    (4, '9012345678'),
    (4, '0123456789');

-- Creación de la tabla Motocicleta
CREATE TABLE Motocicleta (
    Matricula VARCHAR(20) PRIMARY KEY,
    NumeroBastidor VARCHAR(20) NOT NULL UNIQUE,
    Color VARCHAR(20) NOT NULL,
    Marca VARCHAR(30) NOT NULL,
    Modelo VARCHAR(30) NOT NULL,
    ID_Garaje INT NOT NULL,
    FechaEstacionamiento DATE NOT NULL,
    Foto VARCHAR(255),
    FOREIGN KEY (ID_Garaje) REFERENCES Garaje(ID_Garaje)
);

-- Insertar datos en la tabla Motocicleta (usamos los mismos datos de la tabla original)
INSERT INTO Motocicleta (Matricula, NumeroBastidor, Color, Marca, Modelo, ID_Garaje, FechaEstacionamiento, Foto)
VALUES 
    ('ABC123', '001', 'Rojo', 'Yamaha', 'YZF-R1', 1, '2024-05-12', 'Images/24-YZF1000-.png'),
    ('DEF456', '002', 'Azul', 'Honda', 'CBR1000RR', 2, '2024-05-12', 'Images/honda-cbr1000rr.png'),
    ('GHI789', '003', 'Negro', 'Suzuki', 'GSX-R1000', 3, '2024-05-12', 'Images/GSX-R1000.png'),
    ('JKL012', '004', 'Blanco', 'Kawasaki', 'Ninja ZX-10R', 1, '2024-05-12', 'Images/Kawasaki Ninja ZX-10R 2024.png'),
    ('MNO345', '005', 'Verde', 'Ducati', 'Panigale V4', 2, '2024-05-12', 'Images/panigale_v4.png'),
    ('PQR678', '006', 'Amarillo', 'BMW', 'S1000RR', 3, '2024-05-12', 'Images/s1000rr.png');

-- Creación de la tabla Cliente
CREATE TABLE Cliente (
    CodigoCliente INT PRIMARY KEY AUTO_INCREMENT,
    DNI VARCHAR(15) NOT NULL UNIQUE,
    Nombre VARCHAR(30) NOT NULL,
    Apellido1 VARCHAR(30) NOT NULL,
    Apellido2 VARCHAR(30),
    Direccion VARCHAR(50) NOT NULL,
    ID_Ciudad INT,
    Telefono VARCHAR(15) NOT NULL UNIQUE,
    CorreoElectronico VARCHAR(100) NOT NULL UNIQUE,
    Genero ENUM('Masculino', 'Femenino') NOT NULL,
    Foto VARCHAR(255),
    FOREIGN KEY (ID_Ciudad) REFERENCES Ciudad(ID_Ciudad)
);

-- Insertar datos en la tabla Cliente
INSERT INTO Cliente (DNI, Nombre, Apellido1, Apellido2, Direccion, ID_Ciudad, Telefono, CorreoElectronico, Genero, Foto)
VALUES 
    ('1234567890', 'Pedro', 'Martínez', 'Gómez', 'Carrera 15 # 20-25', 1, '1111111111', 'pedromartinez@example.com', 'Masculino', 'Images/pedro.jpg'),
    ('2345678901', 'Ana', 'García', 'López', 'Calle 25 # 30-35', 2, '2222222222', 'anagarcia@example.com', 'Femenino', 'Images/ana.jpg'),
    ('3456789012', 'Jorge', 'Hernández', 'Pérez', 'Carrera 30 # 35-40', 3, '3333333333', 'jorgehernandez@example.com', 'Masculino', 'Images/jorge.jpg'),
    ('4567890123', 'María', 'López', 'Rodríguez', 'Avenida 40 # 45-50', 4, '4444444444', 'marialopez@example.com', 'Femenino', 'Images/maria.jpg'),
    ('5678901234', 'Carlos', 'Sánchez', 'García', 'Calle 50 # 55-60', 1, '5555555555', 'carlossanchez@example.com', 'Masculino', 'Images/carlos.jpg'),
    ('6789012345', 'Laura', 'Ramírez', 'Martínez', 'Carrera 60 # 65-70', 2, '6666666666', 'lauraramirez@example.com', 'Femenino', 'Images/laura.jpg');

-- Creación de la tabla Reserva
CREATE TABLE Reserva (
    ID_Reserva INT PRIMARY KEY AUTO_INCREMENT,
    CodigoCliente INT NOT NULL,
    Matricula VARCHAR(20) NOT NULL,
    ID_Agencia INT NOT NULL,
    Precio DECIMAL(10,2) NOT NULL,
    EstadoPago TINYINT(1) NOT NULL DEFAULT 0,
    FechaInicio DATE NOT NULL,
    FechaFin DATE NOT NULL,
    FechaReserva TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (CodigoCliente) REFERENCES Cliente(CodigoCliente),
    FOREIGN KEY (Matricula) REFERENCES Motocicleta(Matricula),
    FOREIGN KEY (ID_Agencia) REFERENCES Agencia(ID_Agencia)
);

-- Insertar datos en la tabla Reserva (para ejemplo)
INSERT INTO Reserva (CodigoCliente, Matricula, ID_Agencia, Precio, EstadoPago, FechaInicio, FechaFin)
VALUES 
    (1, 'ABC123', 1, 100, 1, '2024-05-12', '2024-05-15'),
    (2, 'DEF456', 2, 150, 1, '2024-05-12', '2024-05-14'),
    (3, 'GHI789', 3, 120, 0, '2024-05-13', '2024-05-16'),
    (4, 'JKL012', 4, 110, 1, '2024-05-14', '2024-05-17'),
    (5, 'MNO345', 1, 130, 0, '2024-05-15', '2024-05-18'),
    (6, 'PQR678', 2, 140, 1, '2024-05-16', '2024-05-19');

-- Creación de la tabla Administrador
CREATE TABLE Administrador (
    ID_Admin INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(50) NOT NULL,
    CorreoElectronico VARCHAR(100) NOT NULL UNIQUE,
    ContrasenaHash VARCHAR(255) NOT NULL
);

-- Contraseñas originales: 1022923336, 1140914036, 1022926852
-- Se aplica hashing a las contraseñas
-- Necesitamos aplicar hashing con la función SHA2()
-- Insertamos también algunos ejemplos de administradores
INSERT INTO Administrador (Nombre, Apellido, CorreoElectronico, ContrasenaHash)
VALUES 
    ('Juan', 'Pérez', 'juanperez@example.com', SHA2('1022923336', 256)),
    ('María', 'López', 'marialopez@example.com', SHA2('1140914036', 256)),
    ('Pedro', 'Gómez', 'pedrogomez@example.com', SHA2('1022926852', 256));
