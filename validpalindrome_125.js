const isPalindrome = function(s){ 
    if (s.length === 0) return true;
  const regAlphanumeric = /[0-9a-zA-Z]/;

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    while (!regAlphanumeric.test(s[i]) && i < s.length - 1) {
      i += 1;
    }

    while (!regAlphanumeric.test(s[j]) && j > 0) {
      j -= 1;
    }

    if (i >= j) return true;

    if (s[i].toLowerCase() !== s[j].toLowerCase()) return false;

    i += 1;
    j -= 1;
  }

  return true;
}

const string1 = "A man, a plan, a canal: Panama"; 
console.log(isPalindrome(string1)); 

const string2 = "race a car"; 
console.log(isPalindrome(string2)); 

const string3 = " "; 
console.log(isPalindrome(string3)); 