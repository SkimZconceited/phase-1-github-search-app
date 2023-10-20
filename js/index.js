let url = 'https://api.github.com/search/users';

let user = null;
let repos = [];
let li = document.createElement('li');

function fetchResults(search) {
    fetch(`${url}?q=${search}`)
    .then(res => res.json())
    .then(data => data);
}

function getRepo(user) {
    fetch(`https://api.github.com/users/${user}/repos`)
    .then(res => res.json())
    .then(data => data.forEach(repo => {repos.push(repo.name)}));
}

// fetchResults('octocat')

let searchBox = document.getElementById('search');
let btnSub = document.querySelector('input[type = "submit"]');
let searchForm = document.getElementById('github-form');

btnSub.addEventListener('click', () => {
    if (!searchBox.value) {return};
    fetchResults(searchBox.value);
    user = searchBox.value;
    console.log(user)

    let userList = document.getElementById('user-list');
    let repoList = document.getElementById('repos-list');

    userList.textContent = user.toUpperCase();
    getRepo(user);

    // for (i = 0; i < repos.length; i++) {
    //     repoList.li.textContent = repos[i];
    // }
    console.log(repos)

    // searchBox.value = '';
})

searchForm.addEventListener('submit', (e) => e.preventDefault());
// window.setTimeout(console.log('Btn Clickedx'), 2000)

