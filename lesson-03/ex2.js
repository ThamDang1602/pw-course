// Cach 1
// const chieuCao = 155
// const canNangToiDa = chieuCao - 100
// const canNangLyTuong = canNangToiDa  * 9 / 10
// const canNangToiThieu =  canNangToiDa  * 8 / 10

// console.log ( "Can nang ly tuong: ",  canNangLyTuong , "Can nang toi da: ", canNangToiDa , "Can nang toi thieu: ", canNangToiThieu )

// Cach 2
const chieuCao = 155
const soLeChieuCao = chieuCao % 100
const canNangToiDa = soLeChieuCao
const canNangLyTuong = soLeChieuCao * 9 / 10
const canNangToiThieu = soLeChieuCao * 8 / 10

console.log(`Can nang ly tuong: ${canNangLyTuong}kg, Can nang toi da: ${canNangToiDa}kg, Can nang toi thieu: ${canNangToiThieu}kg`)