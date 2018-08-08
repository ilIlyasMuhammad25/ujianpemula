var string=('A,B,%,6,8,7,#,7,c')
console.log('angka '+ string.match(/\d/g));
console.log('huruf '+ string.match(/[^0-9,%,#,!,@]/g))
