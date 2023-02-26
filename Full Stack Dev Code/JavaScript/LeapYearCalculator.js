function isLeap(year) {
    
    /**************Don't change the code above****************/    
    
    var leapTest1 = new Boolean(true);
    var leapTest2 = new Boolean();
    var leapTest3 = new Boolean();
        
    if (year % 4 == 0 && leapTest1 == true) { //Top values for tracking
    
        var leapTest1 = Boolean(true); // Middle sections purely for progression
    
        var leapTest2 = Boolean(true);
    
        var leapTest3 = Boolean();
    
    } else {
    
        var leapTest1 = Boolean(false);
    
        var leapTest2 = Boolean(false);
    
        var leapTest3 = Boolean();
    
        year = "Not leap year."
    
        return year; 
    
    }
    
        
    if (year % 100 != 0 && leapTest2 == true) {
    
        var leapTest1 = Boolean();
    
        var leapTest2 = Boolean();
    
        var leapTest3 = Boolean(false);
    
        
    } else {
    
        var leapTest1 = Boolean();
    
        var leapTest2 = Boolean();
    
        var leapTest3 = Boolean(true);
    
    }
        
    if (year % 400 == 0 && leapTest3 == false) {
    
        var leapTest1 = Boolean(true);
    
        var leapTest2 = Boolean(true);
    
        var leapTest3 = Boolean(false);
        
    } else {
    
        var leapTest1 = Boolean();
    
        var leapTest2 = Boolean();
    
        var leapTest3 = Boolean(false);
    
    }
    
     if (leapTest1 == true && leapTest2 == true || leapTest3 == false) {
    
        year = "Leap year."
        
    } else {
    
        year = "Not leap year."
    } 
    
    return year;
    
    /**************Don't change the code below****************/    
    
    }
    
    var year = isLeap(1998);
    
    