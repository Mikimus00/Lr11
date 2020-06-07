
export class Det{
    id: number;
    name: string;
    status: boolean;

    constructor(id:number,name:string){
        this.id = id;
        this.name = name;
        this.status = Math.random()*3 > 2 ? true : false;
    }

    getColor(item){ 
        return item.status ? "#ffff00" : "#00ffff";
    }
    getColorBody(item2){
        return item2.status ? "#ffff00" : "#00ffff";
    }
}