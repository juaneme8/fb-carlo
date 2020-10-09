

const  fs  =  require('fs');

let string = '';

fs.readFile('./comments.html', (err, data) => {
	if(err){
	console.log(err);
	}
    // const  regex  =  /data-sigil="comment-body">([\w\s\d,.áéíóúñÑÁÉÍÓÚ!¡_@?'¿-]+)</gmu;
    const  regex  =  /data-sigil="comment-body">(.+)</gmu;

    let i = 0
while ((myArray = regex.exec(data)) !== null) {
    // console.log('1')
    i++;
    console.log (`${i} ${myArray[1]}`);
    
  }

});



