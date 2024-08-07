let panjang = 20.5
let lebar = 30
let harga = 1500000
let PPN = 0.15

//Luas Tanah
luasTanah = panjang * lebar

//Harga Tanah
hargaTanah = luasTanah * harga

//Pajak
pajak = hargaTanah * PPN

//Total Harga
total = pajak + hargaTanah

console.log("Total Harga Tanah =" + total)