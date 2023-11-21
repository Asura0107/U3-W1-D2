let depositson: any = document.querySelector(".depositamountson")as HTMLParagraphElement | null
let withdrawson: any = document.querySelector(".withdrawamountson")as HTMLParagraphElement | null
let restson: any = document.querySelector(".restson")as HTMLParagraphElement
let sonbtn : any= document.querySelector(".sonbtn") as HTMLButtonElement
let initmombtn : any = document.querySelector(".mominitbtn")  as HTMLButtonElement
let momdepositbtn : any = document.querySelector(".momdepositbtn")  as HTMLButtonElement
let momwithdrawbtn : any = document.querySelector(".momwithdrawbtn")  as HTMLButtonElement
let initmom: any = document.querySelector("#initmom") as HTMLInputElement
let depositmom: any = document.querySelector("#dpositmom") as HTMLInputElement
let withdrawmom: any = document.querySelector("#withdrawmom") as HTMLInputElement
let inizioM : number = 0
let inizioS : number = 0
class Conto {
	balanceInit: number;
	constructor(_balanceInit: number) {
		this.balanceInit = _balanceInit;
	}

	deposito(cifra: number): number {
		this.balanceInit += cifra;
		return this.balanceInit;
	}

	prelievo(cifra: number): number {
		this.balanceInit -= cifra;
		return this.balanceInit;
	}

	interessi(saldo: number): number {
		return saldo * 0.9;
	}
}
let contoM = new Conto(0);// inizializzo il conto a 0
const stampa = function(){// mi stampo il saldo del conto con gli interessi
    document.querySelector(".restmom")!.innerHTML = `£ ${contoM.interessi(contoM.balanceInit)}`
}
initmombtn.addEventListener("click", function(){
    inizioM = Number(initmom.value)//sto trasormando il valore del input in numero(Number() è la stessa cosa di parseint)
    contoM.balanceInit= inizioM
    initmombtn.setAttribute('disable', 'true')
    stampa()

})
momdepositbtn.addEventListener("click", function(){
    let versmom : number = Number(depositmom.value)
    contoM.deposito(versmom);
    document.querySelector(".withdrawamountmom")!.innerHTML += ` <li>£${versmom}</li>`
    depositmom.value=''
    stampa()
})
momwithdrawbtn.addEventListener("click", function(){
    let drawmom : number = Number(withdrawmom.value)
    contoM.prelievo(drawmom);
    document.querySelector(".depositamountmom")!.innerHTML += ` <li>£${drawmom}</li>`
    withdrawmom.value=''
    stampa()
})






