function A(x,y,z) {
    this.x = x
    this.z = z
    this.y = y
    this.dispaly = function(p) {
        console.log("x: " +  p.x)
        console.log("y: "+  p.y)
        console.log("y: "+  p.z)
    }
}

function B(a,b,c) {
    this.a = a
    this.b = c
    this.c = c
    this.disp = function(p) {
        console.log("a: " +  p.a)
        console.log("x: "+  p.x)
        console.log("z: "+  p.z)
    }
}

function fun(x, y) {
   for(i in x) {
       if (!(i in y))
       delete x[i]
   }
   for (i in y) {
       if (!(i in x))
       x[i] = y[i]
   }
   return x
}

function main () {
    const a = new A(1,2,3)
    const b = new B(4,5,6)
    const ob = new fun(a,b)
    ob._x = 9
    for (i in ob) {
        console.log(i + ": " + ob[i])
    }
}

main();