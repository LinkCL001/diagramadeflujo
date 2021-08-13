	var dias= prompt ("ingrese cantidad de días: ")
    var year= Math.trunc (dias/365)
    var mody= ( (dias % 365))
    var week= Math.trunc (mody/7)
    var day=  (week % 7)
    
    document.write ("Cantidad de años " + year + " cantidad de semanas " + week + " dias " + day )