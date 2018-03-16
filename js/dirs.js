const testFolder = '../img/banners/';
const fs = require('fs');

fs.unlink('banners.txt', (err) => {
	  if (err) throw err;
	  console.log('successfully deleted banners.txt');
	});

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    // console.log(file);
    fs.appendFile('banners.txt', file+'\n', function (err) {
	  if (err) {
	    // append failed
	  } else {
	    // done
	  }
	})
  });
})