let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input) {
    input.splice(1,4,"Roman Alamsyah Elsharawy","Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
   console.log(input);
    let namaBulan = input[3].split("/");
    let bulanAngka = namaBulan[1];
    let hasilBulan = "";
    switch(bulanAngka) {
        case "01":
            hasilBulan = "Januari";
            break;
        case "02":
            hasilBulan = "Februari";
            break;
        case "03":
            hasilBulan = "Maret";
            break;
        case "04":
            hasilBulan = "April";
            break;
        case "05":
            hasilBulan = "Mei";
            break;
            default:
            "salah nama bulan";
                break;
    }
    console.log(hasilBulan);
    let bulanArray = namaBulan.reverse();
    console.log(bulanArray);
    let ubahPosisi = [namaBulan[2],namaBulan[1],namaBulan[0]];
    console.log(ubahPosisi.join('-'));
    console.log(input[1].slice(0,15))

}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */