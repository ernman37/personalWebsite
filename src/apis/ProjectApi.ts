/*
 *    File: ProjectApi.ts
 *    Creator: Ernest M Duckworth IV
 *    Created: Thursday May 04 2023 at 09:44:24 PM
 *    For: 
 *    Description:
*/
import FirebaseApi from "./firebaseApi";
import Project from "../models/Project";

export class ProjectApi{

    public static async getProjects(): Project[]{
        const projectDocs = await FirebaseApi.getCollection('projects');
        const projects: Project[] = projectDocs.map((p) => {
            return new Project(
                p.data.description,
                p.data.languages,
                p.data.title,
                p.data.type
            );
        });
        return projects;
    }
}
