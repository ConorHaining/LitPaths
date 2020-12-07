import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FeatureCollection } from '@turf/helpers';
import { LocationSearchService } from '../services/location-search.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'lp-searchbar',
  templateUrl: './searchbar.component.html',
})
export class SearchbarComponent implements OnInit {

  search = new FormControl('');
  @Input() showSearch = false;

  @Output() searchResults = new EventEmitter<FeatureCollection>();

  constructor(private readonly locationSearch: LocationSearchService) { }

  ngOnInit(): void {

    this.search.valueChanges
      .pipe(
        debounceTime(500)
      )
      .subscribe((value) => {
        this.locationSearch.getSearchLocations(value).subscribe((searchResults) => this.searchResults.emit(searchResults));
      });

  }

  onBlur(): void {
    // this.showSearch = false;
    // this.clearSearch();
    // this.searchResults.emit(featureCollection())
  }

  handleSearchButton(): void {
    if (this.showSearch && this.search.value) {
      this.search.setValue('');
    } else if (this.showSearch && !this.search.value) {
      this.showSearch = false;
    } else {
      this.showSearch = true;
    }
  }

}
