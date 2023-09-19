function makeBook (title,author,genre,mspr,nop,description){
    return {
Title:title,
 Author:author,
 Genre:genre,
 MSRP:mspr,  
 NumberOfPages: nop,
 Description:description
        
    }
}

function makeBook (title,author, author2,genre,mspr,nop,description){
    return {
Title:title,
Author:author,
Author: author2,
Genre:genre,
MSRP:mspr,  
NumberOfPages: nop,
Description:description
        
    }
}
////******
function displaybook (obj){
    return obj.Title+" | "+obj.Genre
}
///-----------------------
var bookArray=[HarryPotter,RomeoJuliet]
///------------------------
function displayBooks(array){
    var result="" 
   for(var i=0;i<array.length;i++){
       result = result + i +"  " + displaybook(array[i]) + "\n"
   }
       return result
   }
////-------------------------
function isMatch(query,array){
    for(var i=0;i<array.length;i++){
        if(array[i].Title===query){
            return true
        }else return false
    }
    
}
