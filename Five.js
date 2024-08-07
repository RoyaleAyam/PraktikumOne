//sphere
let sphereDiameter = 30
let sphereRadius = sphereDiameter / 2

//sphere volume
sphereVolume = 4/3 * Math.PI * sphereRadius**3

console.log("Sphere Volume\t\t\t= " + sphereVolume)

//sphere area
sphereArea = 4 * Math.PI * sphereRadius**2

console.log("Sphere Area\t\t\t= " + sphereArea)

console.log()

//cone
let coneDiameter = 20
let coneRadius = coneDiameter / 2
let coneHeight = 40

//cone volume
coneVolume = Math.PI * coneRadius**2 * coneHeight/3

console.log("Cone Volume\t\t\t= " + coneVolume)

//cone surface area
let slantHeight = Math.sqrt((coneRadius * coneRadius) + (coneHeight * coneHeight));

let lateralSurfaceArea = Math.PI * coneRadius * slantHeight;

let baseArea = Math.PI * coneRadius * coneRadius;

let totalSurfaceArea = lateralSurfaceArea + baseArea;

console.log("Cone Surface Area\t\t= " + totalSurfaceArea);

//cone lateral surface area
console.log("Cone Lateral Surface Area\t= " + lateralSurfaceArea);

console.log()

//cylinder
let cylinderDiameter = 15
let cylinderRadius = cylinderDiameter / 2
let cylinderHeight = 50

//cylinder volume
cylinderVolume = Math.PI * cylinderRadius * cylinderHeight

console.log("Cylinder Volume\t\t\t= " + cylinderVolume)

//cylinder surface area
let cylinderLateralSurfaceArea = 2 * Math.PI * cylinderRadius * cylinderHeight;

let cylinderBaseArea = 2 * Math.PI * cylinderRadius * cylinderRadius;

let cylinderTotalSurfaceArea = cylinderLateralSurfaceArea + cylinderBaseArea;

console.log("Cylinder Surface Area\t\t= " + cylinderTotalSurfaceArea)

//cylinder lateral surface area
console.log("Cylinder Lateral Surface Area\t= " + cylinderLateralSurfaceArea)