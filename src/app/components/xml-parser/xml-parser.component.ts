import { Component, OnInit } from '@angular/core';
import { XmlService } from 'src/app/services/xml/xml.service';
import { xmlItem } from 'src/app/models/xmlItem'
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-xml-parser',
  templateUrl: './xml-parser.component.html',
  styleUrls: ['./xml-parser.component.scss']
})
export class XmlParserComponent implements OnInit {

  public displayedColumns = ['Image', 'Title', 'Description', 'Link'];
  public dataSource = new MatTableDataSource<xmlItem>();
  searchText = '';

  constructor(private xmlservice : XmlService) { }

  ngOnInit(): void {
  }

  onSearch(){
    this.xmlservice.parseXml(this.searchText).subscribe(itemList => {
      console.log(itemList);
      this.dataSource.data = itemList as xmlItem[];
    })
  }

}
