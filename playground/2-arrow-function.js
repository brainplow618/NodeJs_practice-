// const square = function (x) {
//     return x * x
// }


// const square = (x) => {
    // return x + x
// }


// const square = (x) => x + x
// console.log(square(3))


//-------------------------------------- this. keywords don't use in arrow function.----------------------------------
// const event = {
//     name: 'Biirthday Party',
//     PrintGuestList:  () => {
//         console.log('Guest list for ' + this.name)

//     }
// }
//-------------------------------------- this. keywords don't use in arrow function.----------------------------------
// const event = {
//     name: 'Biirthday Party',
//     PrintGuestList:  () => 
//         console.log('Guest list for ' + this.name)

// }

// const event = {
//     name: 'Biirthday Party',
//     gusetList : ['shami', 'ali', 'afzal'],

//     PrintGuestList() {
//         const that = this
//         console.log('Guest list for ' + this.name)

//         this.gusetList.forEach(function (guest){
//             console.log(guest + 'is attendeing ' + that.name)
//         })
//     }
// }

const event = {
    name: 'Biirthday Party',
    gusetList : ['shami', 'ali', 'afzal'],

    PrintGuestList() {
        // const that = this
        console.log('Guest list for ' + this.name)

        this.gusetList.forEach((guest) => {
            console.log(guest + 'is attendeing ' + this.name)
        })
    }
}
event.PrintGuestList()