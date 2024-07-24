const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'input.txt'); 


const countWords = (text) => {
  const wordCounts = new Map();
  const words = text.toLowerCase().match(/\w+/g) || [];
  words.forEach(word => {
    wordCounts.set(word, (wordCounts.get(word) || 0) + 1);
  });
  return wordCounts;
};


const getTopWords = (wordCounts, topN = 10) => {
  return Array.from(wordCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN);
};

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const wordCounts = countWords(data);
  const topWords = getTopWords(wordCounts);

  console.log('Top 10 most common words:');
  topWords.forEach(([word, count], index) => {
    console.log(`${index + 1}. ${word}: ${count}`);
  });
});
