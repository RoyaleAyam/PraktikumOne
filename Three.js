let tinggi = 170
let berat = 90

tinggiMeter = tinggi / 100

let BMI = berat / (tinggiMeter) ** 2

if (BMI < 18.5) {
    console.log("Kekurangan")
}
else if (BMI < 24.9) {
    console.log("Normal")
}
else if (BMI < 29.9) {
    console.log("Kelebihan")
}
else {
    console.log("Obesitas")
}