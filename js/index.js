let url = 'https://api.github.com/search/users';

let searchBox = document.getElementById('search');
let btnSub = document.querySelector('input[type = "submit"]');
let searchForm = document.getElementById('github-form');
let userList = document.getElementById('user-list');
let repoList = document.getElementById('repos-list');


let user = null;

function fetchResults(search) {
    fetch(`${url}?q=${search}`)
    .then(res => res.json())
    .then(data => data);
}

function appendList (name) {
    repoList.innerHTML += `<p><a href="https://github.com/${user}/${name}" target="_blank">${name}</a></p>`
}

function getRepo(user) {
    fetch(`https://api.github.com/users/${user}/repos`)
    .then(res => res.json())
    .then(data => data.forEach(repo => {
        // repoList.textContent = repo.name;
        appendList(repo.name);
        console.log(repo)
    }));
}

// fetchResults('octocat')

btnSub.addEventListener('click', () => {
    if (!searchBox.value) {return};
    fetchResults(searchBox.value);
    user = searchBox.value;
    console.log(user)


    userList.textContent = user.toUpperCase();
    getRepo(user);
})

searchForm.addEventListener('submit', (e) => e.preventDefault());