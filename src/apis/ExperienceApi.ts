/*
 *    File: ExpierenceApi.ts
 *    Creator: Ernest M Duckworth IV
 *    Created: Thursday May 04 2023 at 09:44:17 PM
 *    For: 
 *    Description:
*/
import FirebaseApi from "./firebaseApi";
import Experience from "../models/Experience";

export class ExperienceApi{

    public static async getExperiences(): Experience[]{
        const experienceDocs = await FirebaseApi.getCollection('experience');
        const experience: Experience[] = experienceDocs.map((e)=> {
            return new Experience(
                e.data.company,
                e.data.description,
                e.data.languages,
                e.data.time,
                e.data.title
            );
        });
        return experience;
    }
}
