import { Season } from "../seasons/season.model";

export class Character {
    constructor( public _id?: String, public name?: String, public newName?: String, public description?: String, public side?: String, public season?: String){}
}