const fetchUserInfo = async ()=>{
    try{
   const response =  await fetch('https://reqres.in/api/users?page=2'); //async step
   if(!response.ok){
        throw new Error('user data not found...')
   }

   //parse json reponse:
   const data =  await response.json(); //async step
   console.log(data);
}catch(error){
    console.log("Error: ",error);
}

}

//call the function
fetchUserInfo();