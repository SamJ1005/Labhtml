function fetchData(isSuccess) {
    return new Promise((resolve, reject) => {
        console.log("Fetching data...");

        setTimeout(() => {
            if (isSuccess) {
                resolve("✅ Promise fetched successfully!");
            } else {
                reject("❌ Failed to fetch Promise.");
            }
        }, 2000); 
    });
}

fetchData(false)  
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.log("Error:", error);
    })
    .finally(() => {
        console.log("Promise operation completed.");
    });
