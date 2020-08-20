

function convert (){

    let thousands = 0
    let hundreds = 0
    let dozens = 0
    let units = 0

  let string = 'IX' //Сюди вводжу число римським 
    if (string.startsWith("M")){
        thousands = 1000
        // console.log('1000')



    }
    if (string.startsWith('MM')){
        thousands = 2000
        // console.log('2000')
    }
    if (string.startsWith("MMM")){
        thousands = 3000
        // console.log('3000')
    }


if (string.includes("C")){
    hundreds = 100


    if (string.includes("CC")){
        hundreds = 200
    }
    if (string.includes("CCC")){
        hundreds = 300
    }

    if (string .includes("CM") ){
        hundreds = 900
        // console.log('900')

    }




}
if (string.includes("D")){
    hundreds =500
    if (string.includes("CD")){
        hundreds = 400
    }
    if (string.includes("DC")){
        hundreds = 600
    }
    if (string.includes("DCC")){
        hundreds = 700
    }
    if (string.includes('DCCC')){
        hundreds = 800
    }


}
if (string.includes("X")){
    dozens = 10

    if (string.includes("XX")){
        dozens = 20
    }
    if (string.includes("XXX")){
        dozens = 30
    }
    if (string.includes("XC")){
        dozens = 90
    }

}

if (string.includes("L")){
    dozens = 50
    if(string.includes("XL")){
        dozens = 40
    }
    if (string.includes("LX")){
        dozens = 60
    }
    if (string.includes("LXX")){
        dozens = 70
    }
    if (string.includes("LXXX")){
        dozens = 80
    }

}

if(string.includes("I")){
    units = 1
    if (string.includes("II")){
        units = 2
    }
    if (string.includes("III")){
        units = 3
    }
    if (string.includes("IX")){
        units = 9 - 10
    }


}
if (string.includes("V")){
    units = 5
    if (string.includes("IV")){
        units = 4
    }
    if (string.includes("VI")){
        units = 6
    }
    if (string.includes("VII")){
        units = 7
    }
    if (string.includes("VIII")){
        units = 8
    }
}







let sumAll = thousands +  hundreds + dozens + units
    console.log(sumAll) //Вивід числа (арабське число)
    


}
convert()





