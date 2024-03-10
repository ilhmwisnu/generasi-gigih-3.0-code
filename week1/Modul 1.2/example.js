// async function getData() {
//   return new Promise(async (resolve, reject) => {
//     try {
//       let res = await fetch("https://reqres.in/api/users?page=2");
//       let data = await res.json();
//       resolve(data)
//       // return data
//     } catch (error) {
//       reject(Error("Failed to get data"))
//     }
//   });
// }


// getData((data)=>console.log(data)).catch((err)=> console.log(err))
