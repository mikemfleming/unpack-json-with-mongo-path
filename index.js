module.exports = unpackJsonWithMongoPath;

const exampleData = require('./exampleData.js');

const testData = exampleData.hardData;
const testPath = exampleData.hardPath;

console.log(unpackJsonWithMongoPath(testPath, testData));

function unpackJsonWithMongoPath(path, data) {
  return path.replace(/^\[|\]/g, ``) // if [ begins string replace it with '' & replace all ] with ''
      .replace(`[`,`.`) // remaining open brackets converted to dots
      .split(`.`) // create list of keys
      .reduce((nest, key) => nest[key], data); // unpack data in list order
}
