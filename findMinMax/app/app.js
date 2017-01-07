module.exports= {
    findMinMax :function(x) {
    	var x, i, a, b, c = [];
        var a = -Infinity, b = Infinity;
        for (i=0; i < x.length; i++ ) {
        if (x[i] > a) {
            a = x[i];
        }
        if (x[i] < b) {
            b = x[i];
        }
        }
        if (a === b) {
            c.push(a);
            return c;
        }

        c.push(b); 
        c.push(a);
        return c
    }
}
        