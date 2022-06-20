const PI = 3.14;

const calculateArea =(radius)=>{
    return PI*radius**2;
}

const calculatePerimeter = (radius)=>{
    return 2*PI*radius;
}

module.exports= {calculateArea,calculatePerimeter};

// console.log(module);