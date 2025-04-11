function cariMean(arr){
    let tambahAngka = arr.reduce((sum,num) => sum+num,0);
    let totalAngka = tambahAngka / arr.length;
    return Math.floor(totalAngka);
    //menggunakan Math.floor untuk membulatkan ke bawah
}

console.log(cariMean([6, 5, 4, 7, 3])); // 5


function jumlahkan(arr){
    let total = arr.reduce((sum,num) => sum + num , 0 );
    return total;
}

console.log(jumlahkan([1, 2, 3, 4, 5]))

function nilaiTertinggi(arr){
    let terbesar = arr.reduce((max,num) => Math.max(max,num),arr[0]);
    return terbesar;
}

console.log(nilaiTertinggi([1, 9, 3, 7, 5]));