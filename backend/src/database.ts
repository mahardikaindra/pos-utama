import mysql from 'mysql';
 
const connection = mysql.createConnection({
   host:        'localhost',
   user:        'root',
   password:    '',
   database:    'utama'
 });

connection.connect((error: boolean) => {
   if(error){
     console.log(error);
   }else{
     console.log('Connection Succuessfully!');
   }
 })

export default connection;