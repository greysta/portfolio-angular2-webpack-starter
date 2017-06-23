import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from '../../assets/http.service';
import { Project } from '../../assets/project';

@Component({
  selector: 'portfolio-list',
  styleUrls: ['./portfolio-list.component.css'],
  templateUrl: './portfolio-list.component.html',
  providers: [HttpService]
})
export class PortfolioListComponent implements OnInit {

  @Input() public projNumb: number = 12;
  public catName: string = '';
  public projects: Project[] = [];
  public showItems: number[] = [3, 6, 9];
  public selectedShowItem: number = 3;

  constructor(private httpService: HttpService) {
  }

  public toggle(cat: string): void {
    this.catName = cat;
  }

  public onChange(newPagValue: number): void {
    this.selectedShowItem = newPagValue;
    this.projNumb = newPagValue;
  }

  public ngOnInit(): void {
    this.httpService.getData('/assets/projbd.json')
	.subscribe((data: Response) => this.projects = data.json());
  }

}
