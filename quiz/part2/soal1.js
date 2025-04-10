/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
    // you can only write your code here!
    const cleanedKata = kata.replace(/\s+/g, '').toLowerCase(); //tolong hapus semua spasi di dalam kalimat ini dan ubah semua huruf menjadi huruf kecil
    const reversedKata = cleanedKata.split('').reverse().join(''); //mengubah string menjadi array, membalikkan array, dan menggabungkan kembali menjadi string
    return cleanedKata === reversedKata; //periksa apakah kata yang dibersihkan sama dengan kata yang dibalik}
}
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false