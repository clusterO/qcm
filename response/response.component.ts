import { Component, OnInit, ViewChild } from '@angular/core';
import { FormstatsService } from '../formstats.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css'],
})
export class ResponseComponent implements OnInit {

  displayedColumns = ['nom', 'prenom', 'email', 'actions'];
  dataSource = new MatTableDataSource<Response>();
  length = 0;
  pagesize = 5;
  id = 233;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private formstatsService: FormstatsService) { }
  ngOnInit() {}
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.getResponses(this.id, this.paginator.pageSize, this.paginator.pageIndex);
  }

  pageEvent(): void {
    this.getResponses(this.id, this.paginator.pageSize, this.paginator.pageIndex);
  }

  getResponses(id: number, limit: number, offset: number): void {
    this.formstatsService.getResponses(id, limit, offset)
    .map(res => {
      this.dataSource = new MatTableDataSource<Response>(res['responses']);
      this.length = res['records'];
    })
    .subscribe();
  }

}
