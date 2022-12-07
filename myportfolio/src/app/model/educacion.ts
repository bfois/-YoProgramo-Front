export class Educacion {
    id? : number;
    nombreEdu?:string;
    descripcionEdu?:string;
    initDate?:number;
    finishDate?:number;

    constructor(nombreEdu: string, descripcionEdu:string,  initDate: number, finishDate: number ){
        this.nombreEdu = nombreEdu;
        this.descripcionEdu = descripcionEdu;
        this.initDate = initDate;
        this.finishDate = finishDate;
}
}
