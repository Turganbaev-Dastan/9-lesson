// function minSan(a,b){
//     if(a>b){
//         console.log(a);
        
//     }else if(a===b){
//         console.log('sandar barabar');
        
//     }else{
//         console.log(b);
        
//     }

// }

// minSan(20)


// function findWord(name, word){
//     let count = 0
//     for (const chars of name){
        
    
//         if(chars===word)
//             count++
//     }   
// }console.log(count);
// findWord('w', 7)



const names=['Dastan','Era','Ali','Baybol','Angelina','Marat']
function randomName(){
    let index=Math.round(Math.random()*names.length)
    console.log(index);
    console.log(names[3]);
    
  
    
    
}
randomName()