function pasanganTerbesar(num) {
    // you can only write your code here!
    let sTr = num.toString();
    let hasil = "";
    for (i = 0 ; i < sTr.length - 1 ; i++) {
        let penjumlahan = parseInt(sTr[i] + sTr[i + 1]);
        if (penjumlahan > hasil){
            hasil = penjumlahan;
        }

    }
    return hasil;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99