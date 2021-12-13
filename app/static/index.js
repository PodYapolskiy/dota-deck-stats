const HEROES = {
    'Sven': 'static/img/Sven.jpg',
}

function onsubmitHandler() {
    const form = document.getElementById('form')

    let url = '/?'
    for (let elem of form.elements) {
        if (elem.type != "button" && elem.value != "") {
            url += `${elem.name}=${elem.value}&`
        }
    }
    url = url.slice(0, -1)  // Delete last '&' char

    fetch(url).then(response => {window.location.href = url})
}


function onclickHandler(e, inputName) {
    const img = document.querySelector(`.${inputName}`)
    // console.log(inputName, e.value)
    // console.log(img.src)

    //!? Переименовать все до .jpg
    if (HEROES.hasOwnProperty(e.value)) {
        img.src = HEROES[e.value]
    } else {
        img.src = 'static/img/alt.jpg'
    }

} 