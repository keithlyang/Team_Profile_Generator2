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

    // console.log(arr, "this is coming from a different file")
    for(i= 0; i< arr.length ; i++){
        console.log(arr[i].getRole())
        if(arr[i].getRole() == "Manager"){
            template +=`
    <h1>Manager:  ${arr[i].name}</h1>
    <h1>Id:  ${arr[i].id}</h1>
    <h1>Email:  ${arr[i].email}</h1>
    <h1>Office Number:  ${arr[i].officeNum}</h1>
    `
        }else if(arr[i].getRole() == "Engineer"){
            template +=`
            <h2 style="text-align:center;"> Engineer:  ${arr[i].name}</h2>

            <h2 style="text-align:center;"> Id:  ${arr[i].id}</h2>

            <h2 style="text-align:center;"> Email:  ${arr[i].email}</h2>

            <h2 style="text-align:center;"> Github:  ${arr[i].gitHub}</h2>
            `
        }else {
            template +=`
            <h1 style="font-size:200%;">Intern:  ${arr[i].name}</h1>
            <h1 style="font-size:200%;">Id:  ${arr[i].id}</h1>
            <h1 style="font-size:200%;">Email:  ${arr[i].email}</h1>
            <h1 style="font-size:200%;">School:  ${arr[i].school}</h1>
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