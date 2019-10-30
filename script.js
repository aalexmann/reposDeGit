'use strict'

function getInfo(){
    let name = document.getElementById("handle").value; // TODO
    // sanitize name. remove characters that aren't alphanumeric or hyphens.
    name = name.replace(/[^a-zA-Z0-9-]/g, '');
    console.log(name)
    let gitName = `https://api.github.com/users/${name}/repos`
    fetch(gitName)
    .then(response => response.json() )
    .then(responseJson => displayRepos(responseJson) )
    .catch(() => alert('Sorry folks, that username is not valid.')) //why doesnt this work if a 404 message is responded with?

}

function displayRepos(responseJson){
    console.log(responseJson)
    $('li').remove();
    for (let i = 0; i < responseJson.length; i++){
        $('#repoList').append(`
        <li> <p>Repository Name:</p> "${responseJson[i].name}"
        <a target="_blank" href="${responseJson[i].html_url}"> View Repository here! </a>
        </li>
        `)
    }
}

function sendGET() {
    $('#submitForm').on('submit', function(){
        event.preventDefault();
        console.log('happy')
        getInfo();
    })
}
$(function runIt() {
    $(document).ready() 
    console.log('Locked n Loaded');
    sendGET();
    
});