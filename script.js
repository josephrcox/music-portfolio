const page_home = document.getElementsByClassName("page_home")[0]
const page_about = document.getElementsByClassName("page_about")[0]

const pages = document.getElementsByClassName("page")

const nav_home = document.getElementById("header_home")

const albums = document.getElementsByClassName("albumimg")
const album_lc = document.getElementsByClassName("album_link_container")

const darkmodetoggle = document.getElementById("darkmodetoggle")
const body = document.body

nav_home.addEventListener('click', function() {
    navigate("home");
}, false)

function navigate(location) {
    if (location != "home") {
        for (let i=0;i<pages.length;i++) {
            if (pages[i].classList.contains("page_"+location)) {
                pages[i].classList.remove('hidden')
            } else {
                pages[i].classList.add('hidden')
            }
        }
    } else {
        for (let i=0;i<pages.length;i++) {
            pages[i].classList.remove('hidden')
        }
    }

}

darkmodetoggle.addEventListener('click', function() {
    console.log("test", darkmodetoggle.dataset.dark)
    if (darkmodetoggle.dataset.dark == "true") {
        body.style.color = "black"
        body.style.backgroundColor = "white"
        darkmodetoggle.dataset.dark = "false"
        darkmodetoggle.innerHTML = "☀️"
    } else {
        body.style.color = "white"
        body.style.backgroundColor = "black"
        darkmodetoggle.dataset.dark = "true"
        darkmodetoggle.innerHTML = "🌙"

    }
}, false)

for (let i=0;i<albums.length;i++) {
    albums[i].addEventListener('click', async function() {
        album_lc[i].classList.toggle('collapsed')
        album_lc[i].classList.toggle('expanded')

        await sleep(250);
        console.log("action")
        for (let x=0;x<album_lc.length;x++) {
            if (x != i) {
                album_lc[x].classList.remove('expanded')
                album_lc[x].classList.add('collapsed')
            }
        }
        const isMobile = navigator.userAgentData.mobile
        if (isMobile) {
            album_lc[i].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
        }
        



    }, false)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}