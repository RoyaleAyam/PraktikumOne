const a = 4;
const r = 3;

let jumlah = 0;

for (let i = 0; i < 10; i++) {
    const suku = a * Math.pow(r, i);
    jumlah += suku;
}

console.log(jumlah);