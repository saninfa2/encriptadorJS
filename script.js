function countChars(obj){
    document.getElementById("charNum").innerHTML = obj.value.length+'/200';
    if (obj.value.length >= 200){
        document.getElementById("charNum").innerHTML = '<span style="color: #0A3871;">200/200</span>';
    } 
}