import { SlicePipe } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { OrderService } from 'src/app/service/order.service';
SlicePipe
OrderService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  constructor(private service: OrderService){}
  foodData: any

  ngOnInit(): void {
    this.foodData = this.service.produtoDetails;

  }

}
