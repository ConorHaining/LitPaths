import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'lp-searchbar',
  templateUrl: './searchbar.component.html',
})
export class SearchbarComponent implements OnInit {

  search = new FormControl('');
  showSearch: boolean;

  constructor() { }

  ngOnInit(): void {

    this.search.valueChanges.subscribe((value) => {
      console.log(value);
    });

  }

  onBlur(): void {
    this.showSearch = false;
    this.search.setValue('');
  }

}
