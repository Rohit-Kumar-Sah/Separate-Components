export class MyService{
    ar :  {amount:number,description,date:{day,month,year}}[]=[]
    Amount ;
    Description;
    Date;
    setData(amt, des,day,month,year){
        this.Amount=amt;
        this.Description=des;
         this.ar.push({amount: this.Amount , description : this.Description,date: {day:day,month:month,year:year}});

    }

    getData()
    {
        return this.ar ;
    }

    update(id,amt,des){
        this.ar[id].amount=amt;
        this.ar[id].description=des;
    }

    totalExpense(){
        let total:number=0;
        this.ar.map(data=>{
           total = Number(total) +Number( data.amount)
           
        })
       return total;
    }
}