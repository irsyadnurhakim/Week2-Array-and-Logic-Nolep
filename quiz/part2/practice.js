//soal 1

function palindrome(kata) {
    let hapusSpasi = kata.replace(/\s+/g, '').toLowerCase(); //menghapus spasi dan mengubah huruf menjadi huruf kecil
    let balikKata = hapusSpasi.split('').reverse().join(''); //mengubah string menjadi array, membalikkan array, dan menggabungkan kembali menjadi string
    return hapusSpasi === balikKata; //periksa apakah kata yang dibersihkan sama dengan kata yang dibalik
}

console.log(palindrome('A nut for a jar of tuna'));
//soal 2
function angkaPalindrome(num){
    num++;
    while(true){
        let menjadiString = num.toString();
        let membalikanNum = menjadiString.split('').reverse().join('');
        if (menjadiString === membalikanNum){
            return num;
        }
        num++;
    }
}

console.log(angkaPalindrome(10)); // 11
//soal 3
function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    return kalimat.split(/\s+/).length;
  }
// TEST CASES
console.log(hitungJumlahKata('saya punya beberapa kata untuk dikatakan sebelum saya main oleh karena itu saya harus belajar'));

//soal 4
function pasanganTerbesar(num) {
    let menjadiString = num.toString();
    let penyimpananSementara = 0;
    for(let i = 0 ; i < menjadiString.length - 1 ; i++){
        let pasanganDuaAngka = parseInt(menjadiString[i] + menjadiString[i + 1]);
        if(pasanganDuaAngka > penyimpananSementara){
            penyimpananSementara = pasanganDuaAngka;
        }
    }
    return penyimpananSementara;
}

console.log(pasanganTerbesar(37298456));