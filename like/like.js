const submit = document.getElementById('submit');

const postSent = () =>{
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            header:{"Content-Type": "application/json"},
            body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
            }),
        })
        .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
    })
}

submit.addEventListener("click",async (e) =>{
    e.preventDefault();
    submit.textContent="Loading";
    try{
        let result = await postSent();
        console.log(result);
        if (result.status === 200 || result.status === 201) {
        submit.textContent = "Liked";
      } else {
        submit.textContent = "Error";
      }
    }
    catch(error){
        console.log(error);
        submit.textContent = "Error";
    }
})