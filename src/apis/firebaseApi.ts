import { FirebaseApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, Firestore, getDoc,where, query, setDoc, updateDoc, deleteDoc, WhereFilterOp, writeBatch, QueryDocumentSnapshot } from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { connectFirestoreEmulator, limit } from "@firebase/firestore";
import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyCvoYRl6EQiQ818m4C5qDOvvJ9-ZzCCOXw",
    authDomain: "ernests-personal-website.firebaseapp.com",
    databaseURL: "https://ernests-personal-website-default-rtdb.firebaseio.com",
    projectId: "ernests-personal-website",
    storageBucket: "ernests-personal-website.appspot.com",
    messagingSenderId: "699682103362",
    appId: "1:699682103362:web:23a88f16182f81ea164ddb",
    measurementId: "G-BL6CWMM981"
};

export class FirebaseApi{
    private static app: FirebaseApp = firebase.initializeApp(firebaseConfig);

    private static database: Firestore = getFirestore(Firebase.app);

    public static async getCollection(collectionPath: string){
        const docsRef = this.getCollectionRef(collectionPath);
        const docArray = await this.docsToArray(docsRef);
        return docArray;
    }

    public static async getDocumentsWhere(collectionPath: string, field: string[], match: Array<any>, max: number = 5, operator: WhereFilterOp[] = ["=="]){
        const docsRef = this.getCollectionRef(collectionPath);
        if(match.length !== field.length){
            throw new Error("Every field must have a match")
        }
        if(match.length !== 0 && operator.length !== 1 && match.length !== operator.length){
            throw new Error("Every match statement needs to have an operator or a single operator needs to be defined for all matches")
        }
        let currentQuery = query(docsRef, limit(max));
        for(let i = 0; i < match.length; i++){
            const searchOperator = (operator.length === 1) ? operator[0] : operator[i];
            const searchBy = where(field[i], searchOperator, match[i]);
            currentQuery = query(currentQuery, searchBy);
        }
        const docArray = await this.docsToArray(currentQuery);
        return docArray;
    }

    public static async getDocument(docPath: string){
        const document = this.getDocRef(docPath);
        const docSnap = await getDoc(document);
        if(!docSnap.exists())
            throw new Error("Cannot find document for path: " + docPath);
        return this.docDataWithID(docSnap);
    }

    private static async docsToArray(query: any){
        const querySnap = await getDocs(query);
        const docArray = querySnap.docs.map((doc) => this.docDataWithID(doc));
        return docArray;
    }

    private static docDataWithID(doc: QueryDocumentSnapshot<any>){
        return { 
            id: doc.id,
            data: doc.data()
        };
    }

    public static async addDocument(collectionPath: string, docAsJson: string, hasID:boolean=false){
        const newDocRef = (hasID)
                        ? this.getDocRef(collectionPath)
                        : doc(this.getCollectionRef(collectionPath))
        const document = JSON.parse(docAsJson);
        await setDoc(newDocRef, document);
        return newDocRef.id;
    }

    public static async updateDocument(docPath: string, updatesAsJson: string, updates: any = null){
        const docRef = this.getDocRef(docPath);
        updates = (updates === null) 
                ? JSON.parse(updatesAsJson)
                : updates;
        delete updates.id;
        await updateDoc(docRef, updates);
    }

    public static async deleteCollection(collectionPath: string){
        const batch = this.getNewBatch();
        const docsToDelete = await this.getCollection(collectionPath);
        for(let docData of docsToDelete){
            let docRef = this.getDocRef(collectionPath + '/' + docData.id);
            batch.delete(docRef);
        }
        await batch.commit();
    }

    public static async deleteDocument(docPath: string){
        const docRef = doc(this.database, docPath);
        await deleteDoc(docRef);
    }

    public static async deleteDocumentFields(docPath: string, fields: string[]){
        //Delete field(s) from document
    }

    private static getCollectionRef(collectionPath: string, db: Firestore = this.database){
        return collection(db, collectionPath);
    }

    public static getDocRef(docPath: string, db: Firestore = this.database){
        return doc(db, docPath);
    }

    public static getNewBatch(){
        return writeBatch(this.database);
    }

    public static getAuthObj(){
        return getAuth(this.app);
    }
    
    public static getUserUID(){
        const user = this.getAuthObj().currentUser;
        if(user === null){
            throw new Error("Can't get UID of unsignedin person")
        }
        return user.uid;
    }

    public static generateNewID(collectionPath: string){
        const newRef = doc(this.getCollectionRef(collectionPath)); 
        return newRef.id;
    }

    public static setEmulator(){
        const db = getFirestore();
        connectFirestoreEmulator(db, 'localhost', 8080);
        const auth = Firebase.getAuthObj();
        connectAuthEmulator(auth, "http://localhost:9099");
    }
}