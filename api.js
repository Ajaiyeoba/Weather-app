const APIUrl = "https://some-api.com";
fetch(APIUrl) 
    .then(response => {
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }

        return response.json();
    })

    .then(data => {
        console.log(data);
    });