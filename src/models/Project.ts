/*
 *    File: Project.ts
 *    Creator: Ernest M Duckworth IV
 *    Created: Thursday May 04 2023 at 09:43:11 PM
 *    For: 
 *    Description:
*/
export default class Project{
    private _description: string;
    private _languages: string[];
    private _title: string;
    private _type: string;

    constructor(description: string, languages: string[], title: string, type: string){
        this._description = description;
        this._languages = languages;
        this._title = title;
        this._type = type;
    }

    get description(){
        return this._description;
    }

    get languages(){
        return this._languages;
    }

    get title(){
        return this._title;
    }

    get type(){
        return this._type;
    }
}
