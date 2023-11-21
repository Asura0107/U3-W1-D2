var depositson = document.querySelector(".depositamountson");
var withdrawson = document.querySelector(".withdrawamountson");
var restson = document.querySelector(".restson");
var sonbtn = document.querySelector(".sonbtn");
var initmombtn = document.querySelector(".mominitbtn");
var momdepositbtn = document.querySelector(".momdepositbtn");
var momwithdrawbtn = document.querySelector(".momwithdrawbtn");
var initmom = document.querySelector("#initmom");
var depositmom = document.querySelector("#dpositmom");
var withdrawmom = document.querySelector("#withdrawmom");
var inizioM = 0;
var inizioS = 0;
var Conto = /** @class */ (function () {
    function Conto(_balanceInit) {
        this.balanceInit = _balanceInit;
    }
    Conto.prototype.deposito = function (cifra) {
        this.balanceInit += cifra;
        return this.balanceInit;
    };
    Conto.prototype.prelievo = function (cifra) {
        this.balanceInit -= cifra;
        return this.balanceInit;
    };
    Conto.prototype.interessi = function (saldo) {
        return saldo * 0.9;
    };
    return Conto;
}());
var contoM = new Conto(0); // inizializzo il conto a 0
var stampa = function () {
    document.querySelector(".restmom").innerHTML = "\u00A3 ".concat(contoM.interessi(contoM.balanceInit));
};
initmombtn.addEventListener("click", function () {
    inizioM = Number(initmom.value); //sto trasormando il valore del input in numero(Number() è la stessa cosa di parseint)
    contoM.balanceInit = inizioM;
    initmombtn.setAttribute('disable', 'true');
    stampa();
});
momdepositbtn.addEventListener("click", function () {
    var versmom = Number(depositmom.value);
    contoM.deposito(versmom);
    document.querySelector(".withdrawamountmom").innerHTML += " <li>\u00A3".concat(versmom, "</li>");
    depositmom.value = '';
    stampa();
});
momwithdrawbtn.addEventListener("click", function () {
    var drawmom = Number(withdrawmom.value);
    contoM.prelievo(drawmom);
    document.querySelector(".depositamountmom").innerHTML += " <li>\u00A3".concat(drawmom, "</li>");
    withdrawmom.value = '';
    stampa();
});
