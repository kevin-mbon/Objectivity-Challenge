const wordFrq = (text) => {
  
  const removeNonWord = text.replace(/[^\w\s]/gi, '').toLowerCase();

  const formedArr = removeNonWord.split(' ');
  const frequencies = {};
  formedArr.forEach(word => {
    if (frequencies[word]) {
      frequencies[word]++;
    } else {
      frequencies[word] = 1;
    }
  });
  const sortedfrequencies = Object.entries(frequencies)
    .sort((a, b) => b[1] - a[1]);

  
  let outPutArr = [];
  sortedfrequencies.forEach(([word, frequency]) => {
    outPutArr += `${word}: ${frequency}\n`;
  });
  
  return outPutArr;
}
console.log(" unique Words and their frequencies!");
const text = "Coding is the process of creating instructions that a computer can understand and execute. It is written using a programming language and is important";
const frequencies = wordFrq(text);
console.log(frequencies);
