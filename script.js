// TODO: add code here
window.addEventListener("load",function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
        return response.json().then(function(json){
            let container=document.getElementById("container")
            for (let astronaut of json) {
            container.innerHTML += `
                <div class="astronaut">
                    <div class="bio">
                        <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${astronaut.hoursInSpace}</li>
                            <li>Active: ${astronaut.active}</li>
                            <li>Skills: ${astronaut.skills.join(",")}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${astronaut.picture}">
                </div>
            `
            }
        })
    })
})
// fetch data from path
// response is still a promise so we need to call .json() to get actual data
// find container in html so we can update its content
// hint hint, json data exists inside of an array so we need to loop over the data before accessing each item
// update the contents of the container element with the given template and json data merged together