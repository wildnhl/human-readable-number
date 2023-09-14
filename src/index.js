module.exports = function toReadable(number) {
   const strings = [
      { num: '1', str: 'one', strTeen: 'eleven', strTy: 'ten' },
      { num: '2', str: 'two', strTeen: 'twelve', strTy: 'twenty' },
      { num: '3', str: 'three', strTeen: 'thirteen', strTy: 'thirty' },
      { num: '4', str: 'four', strTeen: 'fourteen', strTy: 'forty' },
      { num: '5', str: 'five', strTeen: 'fifteen', strTy: 'fifty' },
      { num: '6', str: 'six', strTeen: 'sixteen', strTy: 'sixty' },
      { num: '7', str: 'seven', strTeen: 'seventeen', strTy: 'seventy' },
      { num: '8', str: 'eight', strTeen: 'eighteen', strTy: 'eighty' },
      { num: '9', str: 'nine', strTeen: 'nineteen', strTy: 'ninety' },
      { num: '10', str: 'ten' },
   ];
   const arr = (number + '').split('');
   if (arr[0] == '0') {
      return 'zero';
   }

   let result = '';
   let i = 0;

   for (; i < arr.length; i++) {
      // for 3 numbers
      if (arr.length == 3) {
         if (i == 0) {
            for (let j = 0; j < strings.length; j++) {
               if (arr[i] === strings[j].num) {
                  result = result + strings[j].str + ' hundred';
               }
            }
         }
         if (i == 1) {
            if (arr[i] == '1') {
               for (let j = 0; j < strings.length; j++) {
                  if (arr[i + 1] === strings[j].num || arr[i + 1] == '0') {
                     if (arr[i + 1] === '0') {
                        result = result + ' ten';
                        return result;
                     }
                     result = result + ' ' + strings[j].strTeen;
                     return result;
                  }
               }
            }
            for (let j = 0; j < strings.length; j++) {
               if (arr[i] === strings[j].num) {
                  result = result + ' ' + strings[j].strTy;
               }
            }
         }
         if (i == 2) {
            for (let j = 0; j < strings.length; j++) {
               if (arr[i] === strings[j].num) {
                  result = result + ' ' + strings[j].str;
               }
            }
         }
      }

      // for two numbers
      if (i == 0 && arr.length == 2) {
         if (arr[i] === '1') {
            for (let j = 0; j < strings.length; j++) {
               if (arr[i + 1] === strings[j].num) {
                  result = result + strings[j].strTeen;
                  return result;
               }
            }
         }

         for (let j = 0; j < strings.length; j++) {
            if (arr[i] === strings[j].num) {
               result = result + strings[j].strTy;
            }
         }
      } else if (i == 1 && arr.length == 2) {
         for (let j = 0; j < strings.length; j++) {
            if (arr[i] === strings[j].num) {
               result = result + ' ' + strings[j].str;
            }
         }
      }
      // for one number
      if (arr.length == 1) {
         for (let j = 0; j < strings.length; j++) {
            if (arr[i] === strings[j].num) {
               result = result + strings[j].str;
            }
         }
      }
   }

   return result;
};
