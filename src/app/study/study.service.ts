import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Study } from './study';
 
@Injectable({
  providedIn: 'root'
})
export class StudyService {
 
  private dbPath = '/study';
 
  studyRef: AngularFireList<Study> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.studyRef = db.list(this.dbPath);
  }
 
  // createStudy(study: Study): void {
  //   this.studyRef.push(study);
  // }
 
  // updateStudy(key: string, value: any): Promise<void> {
  //   return this.studyRef.update(key, value);
  // }
 
  // deleteStudy(key: string): Promise<void> {
  //   return this.studyRef.remove(key);
  // }
 
  getStudyList(): AngularFireList<Study> {
    return this.studyRef;
  }
 
  deleteAll(): Promise<void> {
    return this.studyRef.remove();
  }
}

