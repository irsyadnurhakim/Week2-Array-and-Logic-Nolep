function angkaPalindrome(num) {
    // you can only write your code here!
    num++;
    while(true) { 
        const stringNum = num.toString(); 
        const membalikanNum = stringNum.split('').reverse().join(''); 
        if (stringNum === membalikanNum) { 
            return num; 
        }
        num++; 

    }
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001