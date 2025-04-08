/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. 
Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/

let input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];
function dataHandling(input){
    for(let i = 0; i < input.length ; i++){
        console.log("Nomor ID : " + input[i][0]);
        console.log("Nama Lengkap : " + input[i][1]);
        console.log("TTL : " + input[i][2] + " " + input[i][3]);
        console.log("Hobi : " + input[i][4]);
    }
}
console.log("=== Data Siswa ===");
dataHandling(input);     
//practice

let siswa = [
    ["S001", "Andi", "12", "Bandung"],
    ["S002", "Budi", "13", "Jakarta"],
    ["S003", "Citra", "11", "Surabaya"]
];

function tampilkanDataSiswa(siswa){
    for(let i = 0; i < siswa.length ; i++){
        console.log("Nomor ID : " + siswa[i][0]);
        console.log("Nama : " + siswa[i][1]);
        console.log("Umur : " + siswa[i][2]);
        console.log("Kota : " + siswa[i][3]);
    }
}
console.log("=== Data Siswa ===");
tampilkanDataSiswa(siswa);