// console.log('Its connected properly!!!')

setTimeout(function() {
    alert('The Ninjas have won!!!')
    },13000 )


var ninja = 314
var ninjaPoints = document.querySelector("#points")

// console.log(ninjaPoints)


function addNinja() {
    // console.log('It does work!!!')
    ninja++
    ninjaPoints.innerText = ninja
    // console.log(ninja)
}


var pirate = 159
var piratePoints = document.querySelector("#morepoints")


// console.log(piratePoints)


function addPirate() {
    // console.log('It does work!!!')
    pirate++
    piratePoints.innerText = pirate
    // console.log(pirate)
}

var box = document.querySelector("#bottom-box")

function removeBox() {
    box.remove()
}

function solid() {
    alert('You have signed in!')
}

function liquid() {
    alert('You have signed out!')
}
