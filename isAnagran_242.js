var isAnagram = function(s,t){ 
    if(s.length !== t.length){ 
        return false;
    }

    const Occur = new Map(); 
    
    for( let i = 0; i < s.length; i++){ 
        Occur.set(s[i], (Occur.get(s[i]) || 0) + 1); 
    }

    for( let i = 0; i <t.length; i++){ 
        if(!Occur.has(t[i]) || Occur.get(t[i]) === 0)
        { 
            return false; }
        Occur.set(t[i], Occur.get(t[i]) - 1);     
    }

    for (const [k,v] of Occur){ 
        if(v !== 0){ 
            return false; 
        }
    }
    return true; 
}

const aString = "anagram"; 
const bString = "nagaram"; 
console.log(isAnagram(aString, bString)); 

const string1 = "rat"; 
const string2 = "car"; 
console.log(isAnagram(string1, string2)); 