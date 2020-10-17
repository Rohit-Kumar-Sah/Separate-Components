export class MyService{
    ar :  {amount:number,description : string ,date:{day:number,month:number,year:number}}[]=[]
    Amount : number ;
    Description : string ;
    
    setData(amt : number, des : string ,day:number,month:number ,year:number) : void{
        this.Amount=amt;
        this.Description=des;
         this.ar.push({amount: this.Amount , description : this.Description,date: {day:day,month:month,year:year}});

    }

    getData() :  {amount:number,description : string ,date:{day:number,month:number,year:number}}[]
    {
        return this.ar ;
    }

    update(id : number ,amt : number ,des : string ) :void {
        this.ar[id].amount=amt;
        this.ar[id].description=des;
    }

    totalExpense() : number {
        let total:number=0;
        this.ar.map(data=>{
           total = Number(total) +Number( data.amount)
           
        })
       return total;
    }
}