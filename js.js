// if (!localStorage.getItem('count')) {
//     localStorage.setItem('count', 0)
// }

// document.getElementById('up').addEventListener('click', addOne);
// document.getElementById('down').addEventListener('click', minusOne);

// function addOne() {
//     let boxvalue = Number(localStorage.getItem('count'))
//     boxvalue += 1
//     localStorage.setItem('count', boxvalue)
// }

// function minusOne() {
//     let boxvalue = Number(localStorage.getItem('count'))
//     boxvalue -= 1
//     localStorage.setItem('count', boxvalue)
// }
document.getElementById('getTitle').addEventListener('click', getTitle)
document.getElementById('getFilms').addEventListener('click', getFilm)



function getFilm() {
    let url = `https://ghibliapi.herokuapp.com/films/`

    fetch(url).then(res => res.json())
        .then(data => {
            console.log(data)
            data.forEach(x => {
                console.log(x.id)
                let getFilms = document.createElement('li')
                let filmTitles = document.createElement('h3')

                getFilms.innerText = x.id;
                filmTitles.innerText = x.title

                getFilms.appendChild(filmTitles)
                document.querySelector('ul').appendChild(getFilms)


            })
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}




function getTitle() {
    let userChoice = document.querySelector('input').value
    let url = `https://ghibliapi.herokuapp.com/films/${userChoice}`

    fetch(url).then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('img').src = data.image
            document.querySelector('h2').innerText = data.title
            document.getElementById('title').innerText = data.original_title
            document.querySelector('p').innerText = data.description
        })
        .catch(err => {
            console.log(`error ${err}`)
        })
}