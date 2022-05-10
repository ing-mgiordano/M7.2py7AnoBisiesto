function indicateYear(){
    const userYear = Number(document.getElementById('input-user').value)

    const verifLeapYear = userYear % 400 == 0
    const verifLeapYear2 = userYear % 4 == 0 && userYear % 100 != 0
    const resultYear = document.getElementById('result')

    if(userYear < 0) {
        alert('Ingrese un año valido')
    }
   
    if(verifLeapYear) {
        resultYear.innerHTML = `El año ${userYear} es bisiesto`
    } 

    if(!verifLeapYear) {
        if(verifLeapYear2){
            resultYear.innerHTML = `El año ${userYear} es bisiesto`
        }

        if(!verifLeapYear2) {
            resultYear.innerHTML = `El año ${userYear} no es bisiesto`
        }
    }


}