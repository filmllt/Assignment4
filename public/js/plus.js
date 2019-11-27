var total = 0;
var vat ;
var costFilght = 0;
var costAnsure = 0;
var costService = 0;
var countAnsure = 0;
var discount = 0;

function flightp(){
    console.log(document.getElementById("para").innerHTML.substring(1));
    var para = parseInt(document.getElementById("para").innerHTML.substring(1));
    var b = parseInt(document.getElementById("p-flight").innerHTML);
    // b.innerHTML =  b + para;
    total = para*30;
    document.getElementById("p-flight").innerHTML = para*30;
    // vat();
    costFilght = (para)*30;
    tax();
}

function injAnsure(){
    var b = document.getElementById("ckinj");
    var a = document.getElementById("p-en");
    if(b.checked == true){
        var p = parseInt(a.innerHTML) + 1300;
        costAnsure = p;
        a.innerHTML = p;
        total += 1300;
    }else{
        var o = parseInt(a.innerHTML) - 1300;
        costAnsure = o;
        a.innerHTML = o;
        total -=1300;
    }
    twoAnsure();
}

function bagAnsure(){
    var b = document.getElementById("ckbag");
    var a = document.getElementById("p-en");
    if(b.checked == true){
        var p = parseInt(a.innerHTML) + 350;
        costAnsure = p;
        a.innerHTML = p;
        total += 350;
    }else{
        var o = parseInt(a.innerHTML) - 350;
        costAnsure = o;
        a.innerHTML = o;
        total -= 350;
    }
    twoAnsure();
}
function twoAnsure(){
    var c = document.getElementById("ckbag");
    var d = document.getElementById("ckinj");
    var a = document.getElementById("p-en");
    if(c.checked == true){
        if(d.checked == true){
            // costAnsure -= 165;
            // a.innerHTML = costAnsure-165;
            // alert('ประกันทั้งสองอย่างลด 10%');
            discount = 165;
        }else{
            discount = 0;
        }
    }else{
        discount = 0;
    }
    tax();
}
function noti(){
    var b = document.getElementById("cknoti");
    var a = document.getElementById("p-serv");
    if(b.checked == true){
        var p = parseInt(a.innerHTML) + 150;
        a.innerHTML = p;
        costService = p;
        total += 150;
        tax();
    }else{
        var o = parseInt(a.innerHTML) - 150;
        a.innerHTML = o;
        costService = o;
        total -= 150;
        tax();
    }
}

function SMS(){
    var b = document.getElementById("cksms");
    var a = document.getElementById("p-serv");
    if(b.checked == true){
        var p = parseInt(a.innerHTML) + 300;
        a.innerHTML = p;
        costService = p;
        total += 300;
        tax();
    }else{
        var o = parseInt(a.innerHTML) - 300;
        a.innerHTML = o;
        costService = o;
        total -= 300;
        tax();
    }
}

function tax(){
    // alert("vat");
    var cal = (total-discount) * 0.03;
    vat = parseFloat(cal.toFixed(2));
    var a = document.getElementById("p-tax");
    a.innerHTML = vat;
    bath();
}

function bath(){
    var a = document.getElementById("p-total");
    a.innerHTML = (total-discount) + vat;
    // total += vat;
}

function waitConfirm(){
    document.getElementById("p-flightF").innerHTML = costFilght;
    document.getElementById("p-enF").innerHTML = costAnsure;
    document.getElementById("p-servF").innerHTML = costService;
    document.getElementById("p-taxF").innerHTML = vat;
    document.getElementById("p-totalF").innerHTML = (total-discount) + vat;
}

