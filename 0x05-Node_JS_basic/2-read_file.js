const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n');

    if (lines.length <= 1) {
      throw new Error('No valid students found in the database');
    }

    const allFields = {};
    for (let i = 1; i < lines.length; i += 1) {
      const [firstname, lastname, age, field] = lines[i].split(',');
      if (field) {
        if (allFields[field]) {
          allFields[field].count += 1;
          allFields[field].list.push(firstname);
        } else {
          allFields[field] = { count: 1, list: [firstname] };
        }
      }
    }

    console.log(`Number of students: ${lines.length - 1}`);
    for (const field in allFields) {
      if (Object.prototype.hasOwnProperty.call(allFields, field)) {
        console.log(`Number of students in ${field}: ${allFields[field].count}. List: ${allFields[field].list.join(', ')}`);
      }
    }
  } catch (error) {
    console.error(`Cannot load the database: ${error.message}`);
  }
}

module.exports = countStudents;
