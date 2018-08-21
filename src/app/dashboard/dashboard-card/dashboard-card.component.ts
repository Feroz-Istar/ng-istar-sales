import { Component, OnInit } from '@angular/core';
import { ComplexService } from '../../complex/complex.service';
import { Task } from './task';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent implements OnInit {

  slides: Array<Task>;


  slideConfig = { "slidesToShow": 3, "slidesToScroll": 3 };

  addSlide() {

  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  afterChange(e) {
    console.log('afterChange');
  }


  constructor(private complexobjectservice: ComplexService) { }

  ngOnInit() {
    this.slides = this.complexobjectservice.getTasks();
    console.log("this tasks")
    console.log(this.slides)
  }

}
