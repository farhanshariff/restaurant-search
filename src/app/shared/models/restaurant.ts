export class Restaurant{
    id!: number;
    name!: string;
    averagePrice!:number;
    tags?:string[];
    favorite:boolean = false;
    stars:number = 0;
    imageUrl!:string;
    locations!:string[];
    averageCookTime!:string;
    dishesAvailable!: string[];
}
