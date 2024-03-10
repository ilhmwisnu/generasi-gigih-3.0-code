let getData = async ()=>{
  try {

    let res = await fetch("")
    let data = res.json()

    console.log(data);

  } catch (error) {
    console.error(error);
  }
}