

const dataMethods = ['body','params','headers','query'] ;



export const validation = (validateTheSpecificApi)=>{
    
    return (req,res,next)=>{
         let arrayError = [] ;
         dataMethods.forEach((item)=>{
            if(validateTheSpecificApi[item]){

                const data = validateTheSpecificApi[item].validate(req[item],{abortEarly  :false}) ;
                console.log(data) ;
                if(data.error){
                    arrayError.push(data.error.details);
                }
            }
         })

        if(arrayError.length){
            res.json({msg : "val error",arrayError});
        }
        next() ;
       
     
    }

}