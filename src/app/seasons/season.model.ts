import { World } from '../worlds/world.model';
import { Character } from '../operators/operator.model';


export class Season {
    constructor(public _id?:String, public name?:String, public description?:String, public year?:Number, public season?:Number, public world?: World, public operator?: Character) {}
}
