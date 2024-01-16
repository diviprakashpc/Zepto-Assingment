export const getFilteredArray = (array,value)=>{
    const filteredArray = array.filter((user)=>isUserMatched(user.name.trim(),value));
    return filteredArray;
}


const isUserMatched = (name,value)=>{
    let m = value.length;
    let n = name.length;
    let lps = []
    createLPS(lps,value,name);
    for(let i = 0 ; i < m+n+1 ; i++){
        if(lps[i]==m){
            return true;
        }
    }
    return false;
}

const createLPS = (lps,pattern,text)=>{
    let i = 1;
    let lpsToCheck = 0;  // Represents lps[i-1] // on this value checking of new character happens. Kucbhi likh diya h smjhne ke liye notes dekho.
    let s = pattern + "$" + text;
    while(i<s.length){
        if(s.charAt(i)==s.charAt(lpsToCheck)){
            lpsToCheck++;
            lps[i] = lpsToCheck;
            i++;
        }
        else{
            if(lpsToCheck>0){
                lpsToCheck = lps[lpsToCheck-1];
            }else{
                lps[i] = 0;
                i++;
            }
        }
    }
    
}