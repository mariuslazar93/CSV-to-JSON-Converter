const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');

const pathToCsv = path.join(__dirname, 'customer-data.csv');
const pathToJson = path.join(__dirname, 'customer-data.json');
const customerArr = [];

csv()
    .fromFile(pathToCsv)
    .on('json', (obj) => {
        customerArr.push(obj);
    })
    .on('done', () => {
        const jsonContent = JSON.stringify(customerArr);
        fs.writeFile(pathToJson, jsonContent, (err) => {
            if (err) {
                console.log('Error writing JSON file: ', err);
            }

            console.log('Conversion successful! File created at: ', pathToJson);
        });
    });