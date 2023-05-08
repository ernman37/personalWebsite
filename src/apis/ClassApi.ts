/*
 *    File: ClassApi.ts
 *    Creator: Ernest M Duckworth IV
 *    Created: Thursday May 04 2023 at 09:44:00 PM
 *    For: 
 *    Description:
*/
import FirebaseApi from "./firebaseApi";
import Class from "../models/Class";

export class ClassApi {

    public static async getClasses(): Class[]{
        const classDocs: any = await FirebaseApi.getCollection('classes');
        const classes: Class[] = classDocs.map((doc) => {
            return new Class(
                doc.data.department,
                doc.data.grade,
                doc.data.num,
                doc.data.school,
                doc.data.term,
                doc.data.title,
                doc.data.year
            );
        })
        return classes;
    }

}
