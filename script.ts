class MotherAccount{
    oneDeposit: number;
    oneWithDraw: number;
    constructor(_oneDeposit: number, _oneWithDraw: number,){
        this.oneDeposit = _oneDeposit
        this.oneWithDraw = _oneWithDraw
    }
    totaldeposit():any{
        return `Il totale depositato è: ${this.oneDeposit}`
    }
    totalwithdraw():any{
        return `Il totale prelevato è: ${this.oneWithDraw}`
    }
    totalinterest():any{
        return `Avendo un interesse del 10%, l'interesse versato alla banca  è: ${(this.oneDeposit - this.oneWithDraw)*10/100}`
    }
    totalrest():any{
        let interest: number = (this.oneDeposit - this.oneWithDraw)*10/100
        return `Il saldo è: ${this.oneDeposit - interest - this.oneWithDraw}`
    }

}

let newmotheraccount = new MotherAccount(1000, 500)
console.log(newmotheraccount.totalinterest())
console.log(newmotheraccount.totalwithdraw())
console.log(newmotheraccount.totaldeposit())
console.log(newmotheraccount.totalrest())

class SonAccount extends  MotherAccount{
    constructor(_oneDeposit: number, _oneWithDraw: number,){
        super (_oneDeposit, _oneWithDraw)
    }
    totaldeposit():any{
        return `Il totale depositato è: ${this.oneDeposit}`
    }
    totalwithdraw():any{
        return `Il totale prelevato è: ${this.oneWithDraw}`
    }
    totalrest():any{
        return `Il saldo è: ${this.oneDeposit  - this.oneWithDraw}`
    }


}
let newsonaccount = new SonAccount(1000, 223)
console.log(newsonaccount.totalwithdraw())
console.log(newsonaccount.totaldeposit())
console.log(newsonaccount.totalrest())
