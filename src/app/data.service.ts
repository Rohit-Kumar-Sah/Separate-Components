export class MyService{
    ar :  {amount,description}[]=[]
    Amount ;
    Description;

    setData(amt, des){
        this.Amount=amt;
        this.Description=des;

        this.ar.push({amount: this.Amount , description : this.Description});

    }

    getData()
    {
        return this.ar ;
    }

}