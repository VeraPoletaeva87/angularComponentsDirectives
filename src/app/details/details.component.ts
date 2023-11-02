import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Item } from '../types';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  constructor(
    private route: ActivatedRoute,
    private service: ItemService,
    private router: Router
  ) {}
  @Input() item!: Item;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.item = this.service.getItem(id);
  }

  backClickHandler() {
    this.router.navigate(['/']);
  }
}
