function cariMean(arr) {
    // you can only write your code here!
    let tambah = arr.reduce((sum,num) => sum + num , 0); //menggabungkan semua angka dalam array , contoh [1,2,3] = 1+2+3
    let total = tambah / arr.length; //menghitung rata-rata
    return Math.floor(total); //menggunakan Math.floor untuk membulatkan ke bawah
  }

console.log(cariMean([1, 2, 3, 4, 5])); // 3
console.log(cariMean([3, 5, 7, 5, 3])); // 5
console.log(cariMean([6, 5, 4, 7, 3])); // 5
console.log(cariMean([1, 3, 3])); // 2
console.log(cariMean([7, 7, 7, 7, 7])); // 7