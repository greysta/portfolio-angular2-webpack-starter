import { Component, OnDestroy, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from '../../assets/http.service';
import { Project } from '../../assets/project';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'proj-detail',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['/portfolio-item.component.css'],
  providers: [HttpService]
})
export class PortfolioItemComponent implements OnDestroy, OnInit {
  public projects: Project[] = [];
  public id: number;

  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute, private httpService: HttpService) {

    this.routeSubscription = route.params.subscribe((params) => this.id = params['id']);
  }

  public ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  public  ngOnInit(): void {
    this.httpService.getData().subscribe((data: Response) => this.projects = data.json());
  }
}
