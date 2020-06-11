import { Component, OnInit } from '@angular/core';
import { StudyService } from '../study.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-study-list',
  templateUrl: './study-list.component.html',
  styleUrls: ['./study-list.component.css']
})
export class StudyListComponent implements OnInit {
  study: any;
  public x=0;
  isTrue: boolean = false;
  constructor(private studyService: StudyService) {}
  
  ngOnInit(): void {
    this.getStudyList();

  }
  getStudyList() {
    this.studyService.getStudyList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(study => {
      this.study = study;
    });
  }
 
  deleteStudy() {
    this.studyService.deleteAll().catch(err => console.log(err));
  }

  handleData(){
      this.x++;
    return this.x;
  }

  public pieChartLabels = ['Rate: 1', 'Rate: 2', 'Rate: 3', 'Rate: 4'];
  public pieChartData = [this.x, 1, 1, 1];
  public pieChartType = 'pie';

}
