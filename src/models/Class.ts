/*
 *    File: Class.ts
 *    Creator: Ernest M Duckworth IV
 *    Created: Thursday May 04 2023 at 09:42:56 PM
 *    For: 
 *    Description:
*/
export default class Class{
    private _department: string;
    private _grade: string;
    private _num: string;
    private _school: string;
    private _term: string;
    private _title: string;
    private _year: string;

    constructor(department: string, grade: string, num: string, school: string, term: string, title: string, year: string){
        this._department = department;
        this._grade = grade;
        this._num = num;
        this._school = school;
        this._term = term;
        this._title = title;
        this._year = year;
    }

    get department(){
        return this._department;
    }
    
    get grade(){
        return this._grade;
    }

    get num(){
        return this._num;
    }

    get school(){
        return this._school;
    }

    get term(){
        return this._term;
    }

    get title(){
        return this._title;
    }

    get year(){
        return this._year;
    }
}
