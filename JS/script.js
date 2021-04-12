    // user income

    let initialAmount = document.getElementById('incomeAmount');
    let initialAmountSave = parseInt(initialAmount);
    initialAmount.addEventListener('keyup', (e) => {
        initialAmountSave = e.target.value;
    })

    // user goal

    let goalAmount = document.getElementById('goalAmount');
    let goalAmountSave = parseInt(goalAmount);
    goalAmount.addEventListener('keyup', (e) => {
        goalAmountSave = e.target.value;
    })

    // button

    let button = document.getElementById('calcbutton');

    // save per month
    let perMonth = document.getElementById('savePerMonth');

    // main costs 
    let costRentAppartment = document.getElementById('rentAppartment');
    let costRentAppartmentSave = parseInt(costRentAppartment);
    costRentAppartment.addEventListener('keyup', (e) => {
        costRentAppartmentSave = e.target.value;
    })

    let costFood = document.getElementById('food');
    let costFoodSave = parseInt(costFood);
    costFood.addEventListener('keyup', (e) => {
        costFoodSave = e.target.value;
    })
    let costMedicine = document.getElementById('medicine');
    let costMedicineSave = parseInt(costMedicine);
    costMedicine.addEventListener('keyup', (e) => {
        costMedicineSave = e.target.value;
    })
    let costTransport = document.getElementById('transport');
    let costTransportSave = parseInt(costTransport);
    costTransport.addEventListener('keyup', (e) => {
        costTransportSave = e.target.value;
    })
    let costMobileInternet = document.getElementById('mobileInternet');
    let costMobileInternetSave = parseInt(costMobileInternet);
    costMobileInternet.addEventListener('keyup', (e) => {
        costMobileInternetSave = e.target.value;
    })
    let costEntertainment = document.getElementById('entertainment');
    let costEntertainmentSave =parseInt(costEntertainment);
    costEntertainment.addEventListener('keyup', (e) => {
        costEntertainmentSave = e.target.value;
    })

    // sum of spend per month 
     
    function myFunction() {
        let spendPerMonth = Number(costRentAppartmentSave) + Number(costFoodSave) + Number(costMedicineSave) + Number(costTransportSave) + Number(costMobileInternetSave) + Number(costEntertainmentSave) ;
        let savePerMonthResult = Number(initialAmountSave) - Number(spendPerMonth);
        document.getElementById("spendingSum").innerHTML = spendPerMonth ;
        document.getElementById("savePerMonth").innerHTML = savePerMonthResult;
        let yearsResult = goalAmountSave/savePerMonthResult/12;
        result = Number(yearsResult.toFixed(2));
        document.getElementById("goalYears").innerHTML = result;
        

    }

    // goalAmountSave

        // document.perMonth.innerHTML = "1000";

    // let a = Math.floor(220000 / 2045)
    // a.toFixed(2)
    // a = Number(a.toFixed(2))

    // const myfunc = function () {
    //     alert('clicked')
    //     document.perMonth.innerHTML = "1000";
    //     perMonth.innerText = 1000;
    //     // result = initialAmountSave +
    // }


    // button.addEventListener('click', myfunc) {
    //     document.getElementById("spendingSum").innerHTML = spendPerMonth;

    // }