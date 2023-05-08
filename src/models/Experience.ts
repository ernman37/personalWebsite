/*
 *    File: Experience.ts
 *    Creator: Ernest M Duckworth IV
 *    Created: Thursday May 04 2023 at 09:43:06 PM
 *    For: 
 *    Description:
*/
export default class Experience{
    private _company: string;
    private _description: string;
    private _languages: string[];
    private _time: string;
    private _title: string;

    constructor(company: string, description: string, languages: string[], time: string, title: string){
        this._company = company;
        this._description = description;
        this._languages = languages;
        this._time = time;
        this._title = title;
    }

    get company(){
        return this._company;
    }
    
    get description(){
        return this._description;
    }

    get languages(){
        return this._languages;
    }

    get time(){
        return this._time;
    }

    get title(){
        return this._title;
    }
}