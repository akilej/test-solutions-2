function isIsogram(str) {

    var word = str.split('');
    for (var i = 0, j = 1; i < word.length - 1; i++, j++) {
      if (word[i] == word[j]){
        document.write("Isogram");
        return false;
      }
    }
    document.write('Not Isogram');
    return true;
   }
   
   
   isIsogram("six-year-old");