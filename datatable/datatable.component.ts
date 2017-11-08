import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialogConfig } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import { FormstatsService } from '../formstats.service';
import { FormComponent } from '../form/form.component';
import { Observable } from 'rxjs/Observable';
import { Element } from '../data-interfaces.module';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit, AfterViewInit {

  displayedColumns = ['titre_formulaire', 'description_formulaire', 'date_creation', 'token', 'actions'];
  dataSource = new MatTableDataSource<Element>();
  length = 0;
  pagesize = 5;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router,
              private formstatsService: FormstatsService,
              public dialog: MatDialog,
              public snackBar: MatSnackBar) {}
  ngOnInit() {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.getForms(this.paginator.pageSize, this.paginator.pageIndex);
  }

  pageEvent(): void {
    this.getForms(this.paginator.pageSize, this.paginator.pageIndex);
  }

  getForms(limit: number, offset: number): void {
    this.formstatsService.getForms(limit, offset)
    .map(res => {
      this.dataSource = new MatTableDataSource<Element>(res['forms']);
      this.length = res['records'];
    })
    .subscribe();
  }

  details(id: number): void {
    this.router.navigate(['detail', id]);
  }

  edit(element: Element): void {
    const dialogRef = this.dialog.open(FormComponent, {
      height: '550px',
      width: '500px',
      panelClass: 'form-dialog',
      data: { title: 'Edit form', form: element }
    });

    dialogRef.afterClosed()
    .subscribe(result => {
      if (result) {
        this.formstatsService.updatForm(result)
        .map(res => {
          this.dataSource.data = this.dataSource.data
          .map(obj => obj.id_formulaire === result.id_formulaire ? obj = result : obj);
          this.snackBar.open('UPDATED', 'OK', { duration: 2000 });
        })
        .subscribe();
      }});
  }

}


