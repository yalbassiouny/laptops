import {Component, ViewChild} from '@angular/core';
import {Firestore, collectionData, collection} from '@angular/fire/firestore';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'laptops-list',
  templateUrl: './laptops-list.component.html',
  styleUrls: ['./laptops-list.component.css']
})
export class LaptopsListComponent {
  @ViewChild('paginator') paginator: MatPaginator;

  columnsToDisplay = ['laptopModel', 'hardDisk', 'ram', 'processor', 'graphics', 'weight', 'price', 'buyNowButton'];
  laptops: any[] = [];
  dataSource: any;

  constructor(private firestore: Firestore) {
    const col = collection(this.firestore, 'laptops');
    collectionData(col).subscribe((data) => {
      this.laptops = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  isEllipsisActive(htmlElement: HTMLElement): boolean {
    return htmlElement ? (htmlElement.offsetWidth < htmlElement.scrollWidth) : false;
  }
}
