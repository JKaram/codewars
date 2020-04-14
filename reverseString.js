var reverseString = function(s) {
   let start = 0, end = s.length -1;

   while(start < end) {
       let char = s[start]

       s[start] = s[end];
       s[end] = char;

       start++;
       end--
   }
   
   return s
};

console.log(reverseString(["h","e","l","l","o"]));





// working solution
// if (!s.length) return s;
// return reverseString(s.slice(1)).concat(s[0]);