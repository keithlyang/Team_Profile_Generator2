const fs = require("fs")

const generateHTML = (arr) => {
    // we do stuff
    var template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profiler</title>
</head>
<body>`

    console.log(arr, "this is coming from a different file")
    for(i= 0; i< arr.length ; i++){
        console.log(arr[i].getRole())
        if(arr[i].getRole() == "Manager"){
            template +=`
    <h1>Manager:  ${arr[i].name}</h1>
    <h1>id:  ${arr[i].name}</h1>
    <h1>email:  ${arr[i].name}</h1>
    <h1>officeNum:  ${arr[i].name}</h1>
    `
        }else if(arr[i].getRole() == "Engineer"){
            template +=`
            <h1>Engineer:  ${arr[i].name}</h1>
            <h1>id:  ${arr[i].name}</h1>
            <h1>email:  ${arr[i].name}</h1>
            <h1>gitHubUserName:  ${arr[i].name}</h1>
            `
        }else {
            template +=`
            <h1>Intern:  ${arr[i].name}</h1>
            <h1>id:  ${arr[i].name}</h1>
            <h1>email:  ${arr[i].name}</h1>
            <h1>school:  ${arr[i].name}</h1>
            `
        }
    }

    template +=`
</body>
</html>`
    

    fs.writeFileSync("index.html", template, err=> {
        if(err) throw err;
    })
}

module.exports = generateHTML