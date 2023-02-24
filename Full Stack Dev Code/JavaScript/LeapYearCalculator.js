function isLeap(year) {
    
    /**************Don't change the code above****************/    
    
    var leapTest1 = new Boolean(true);
    var leapTest2 = new Boolean();
    var leapTest3 = new Boolean();
    var leapYear = new Boolean();
        
    if (year % 4 == 0 && leapTest1 == true) { //Top values for tracking
    
        alert("First leap pass")
    
        var leapTest1 = Boolean(true); // Middle sections purely for progression
    
        var leapTest2 = Boolean(true);
    
        var leapTest3 = Boolean();
    
    } else {
    
        var leapTest1 = Boolean(false);
    
        var leapTest2 = Boolean(false);
    
        var leapTest3 = Boolean();
    
        alert("First leap fail")
    
    }
    
        
    if (year % 100 != 0 && leapTest2 == true) {
    
        alert("Second leap pass (not leap year)")
    
        var leapTest1 = Boolean();
    
        var leapTest2 = Boolean();
    
        var leapTest3 = Boolean(false);
    
        var leapYear = Boolean(true);
        
    } else {
    
        var leapTest1 = Boolean();
    
        var leapTest2 = Boolean();
    
        var leapTest3 = Boolean(true);
    
        alert("Second leap fail (leap year)")
    
    }
    
        
        
    if (year % 400 == 0 && leapTest3 == false) {
    
        alert("Third leap pass")
    
        var leapTest1 = Boolean(true);
    
        var leapTest2 = Boolean(true);
    
        var leapTest3 = Boolean(false);
        
    } else {
    
        var leapTest1 = Boolean();
    
        var leapTest2 = Boolean();
    
        var leapTest3 = Boolean(false);
    
        alert("Third leap fail")
    
    
    }
    
     if (leapTest1 == true && leapTest2 == true && leapTest3 == false) {
    
        year = "Leap year."
        
    } else {
    
        year = "Not leap year."
    } 
    
        
    console.log(leapTest1)
    console.log(leapTest2)
    console.log(leapTest3)
    
    console.log(year);
        
    return year;
    
    /**************Don't change the code below****************/    
    
    }
    
    var year = isLeap(1948);
    
    