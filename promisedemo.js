
function promiseAboutAudioRelease(status){
     let promise = new Promise((resolve,reject)=>{
         if(status=="audio is ready to release"){
             setTimeout(()=>{
                    resolve("Hurray.. Audio is released")
             },3000);
         }
         else{
            setTimeout(()=>{
                reject("Sorry...we will announce next day later ")
            },3000);
         }
     })
     return promise;
 }
 promiseAboutAudioRelease("audio is not ready to release")
 .then(res=>console.log(res))
 .catch(err=>console.log(err))