CREATE TABLE Clients (
  ClientID int(6) PRIMARY KEY NOT NULL,
  FirstName char(20) NOT NULL,
  LastName char(20) NOT NULL,
  TRN char(9),
  Location char(20) CHECK (Location='Kingston' or Location='Montego Bay' or Location='Ochi Rios'),
  HrsRequest int(3),
  Service char(20),
  DeptID char(5) NOT NULL,
  Telephone int(12),
  Address char(50),
  Email char(50),
  Gender char(2) CHECK (Gender = 'M' or Gender = 'F'),
  AptTime time(4),
  AptDate date,
  CostPerHour int,
  TotalCost int,
  Age int(2),
  DOB date,
  FOREIGN KEY (DeptID) REFERENCES Departments(DeptID)
);

CREATE TABLE Departments (
  DeptID int(6) PRIMARY KEY NOT NULL,
  DeptName char(20),
  EmployeeID int(6),
  EmployeeName Char(20),
  EmployeeDept char(20),
  ClientID Char(6) NOT NULL,
  PaymentType char(20) CHECK (PaymentType = 'Cheque' or PaymentType = 'Cash' or PaymentType = 'Electronic Deposit'),
  Service char(20) CHECK (Service = 'Photograpy' or Service = 'Video Editing' or Service = 'Grpahics'),
  FOREIGN KEY (ClientID) REFERENCES Clients(ClientID)
);

CREATE TABLE Status (
  ClientID int(6) PRIMARY KEY NOT NULL,
  WorkStatus char(20) CHECK (WorkStatus = 'Active' or WorkStatus = 'Complete'),
  Age int(2),
  Gender char(2) CHECK (Gender = 'M' or Gender = 'F'),
  DOB date,
  EmployeeID int(6),
  DeptID Char(6) NOT NULL,
  FOREIGN KEY (DeptID) REFERENCES Departments(DeptID)
);

CREATE TABLE Project (
  ClientID int(6) PRIMARY KEY NOT NULL,
  AptDate date,
  PhotoFormat char(20),
  VideoFormart char(20),
  VideoLength varchar(10),
  NumberofVideos int(3),
  NumberofPhotos int(3)
);


SELECT FirstName, HrsRequest, CostPerHour, Service
FROM Clients
WHERE ClientID = 002398;

SELECT FirstName,
      HrsRequest,
       CostPerHour,
       HrsRequest*CostPerHour AS TotalCost
FROM Clients
WHERE ClientID= 002398;

INSERT INTO Project VALUES ('293009',
  '2021-05-09' ,
  '.JPEG', '.MP4',
  '2 min',
  '1',
  '98');

  SELECT SUM(HrsRequest) AS TotalHours from Clients;

CREATE TABLE ClientStatus select * from Clients
UNION SELECT * from Status;

SELECT ClientID, TRN, Location * FROM Clients;

SELECT
    FirstName, Service, Location
FROM
    Clients
WHERE
    Service IN (SELECT
            Location
        FROM
            Status
        WHERE
            Service = 'Photograpy');


ALTER TABLE Project
ADD DeptID int (6) NOT NULL;

ALTER TABLE Clients
MODIFY Gender Char(1);

ALTER TABLE Clients
DROP TRN;

DELETE FROM Clients
WHERE Gender = 'F';

INSERT INTO Project VALUES (126534, '2021-8-10',
'.PNG', '.AVI', '5 min', 12, 250);

UPDATE Project
SET  AptDate = '2021-09-05'
WHERE ClientID = 126534;
