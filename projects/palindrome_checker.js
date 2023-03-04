function palindrome(str) {
   str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // Check if the reversed string matches the original string
  return str === str.split('').reverse().join('');
}

palindrome("eye");
