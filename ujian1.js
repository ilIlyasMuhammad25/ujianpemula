var score=([5,-6,-8,-4,3,6])
halo= score.sort()
var negatif = halo.filter((val) => val < 0);
var positif = halo.filter((val) => val > 0);
var jumlahnegatif=0
var jumlahpositif=0

 
for(i = 0; i <negatif.length; i++){
  jumlahnegatif += negatif[i];
  var negatifjadipositf=Math.abs(jumlahnegatif)

}
for(i = 0; i <positif.length; i++){
  jumlahpositif += positif[i];
  
}

if(negatifjadipositf>jumlahpositif){
  console.log('negatif win')
}
else if(negatifjadipositf<jumlahpositif)
console.log('positif win')
else{
  console.log('drw')
}


 
// console.log(halo)
console.log(negatif)
console.log(positif)
console.log(negatifjadipositf)
console.log(jumlahpositif)

