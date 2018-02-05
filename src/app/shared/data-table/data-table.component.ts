import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TranslationsComponent } from '../translations/translations.component';

import { LocaleService } from '../_services/locale.service';

import { DataTableHeader } from './classes/data-table-header';
import { DataTableOrderCriteria } from './classes/data-table-order-criteria';
import { PaginationData } from './classes/pagination-data';

declare let swal: any;

@Component({
  selector: 'app-data-table',
  template: '',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent extends TranslationsComponent implements OnInit {

  headers: DataTableHeader[] = [];

  activeTab;

  items: any[] = [];
  checkedItems = {};

  paginatedItems: any[];
  paginationData = new PaginationData();
  isSearching = false;
  isPaginated = false;
  searchCriteria = {};
  orderCriteria = new DataTableOrderCriteria();

  savedItem: string;

  constructor(protected route: ActivatedRoute, localeService: LocaleService) {
    super(localeService);
  }

  ngOnInit() {
    if (sessionStorage.getItem('saved-item')) {
      this.savedItem = sessionStorage.getItem('saved-item');
      sessionStorage.removeItem('saved-item');
    }

    this.fetchItems();
  }

  setItems(items: any[]): void {

    this.isSearching = false;

    this.items = items;
    this.paginationData.totalItems = this.items.length;
    this.paginateItems();
  }

  paginateItems(): void {
    const data = this.paginationData;
    const totalPages = Math.ceil(data.totalItems / data.limit);

    this.paginationData.totalPages = (totalPages > 0) ? totalPages : 1;

    this.setCurrentPage();

    this.paginatedItems = this.items.slice((data.currentPage - 1) * data.limit, data.currentPage * data.limit);

    this.isPaginated = true;
  }

  protected setCurrentPage(): void {
    let page = (this.route.snapshot.queryParams['page']) ? +this.route.snapshot.queryParams['page'] : 1;

    if (page > this.paginationData.totalPages) {
      page = this.paginationData.totalPages;
    }

    this.paginationData.currentPage = page;
  }

  search(keyCode?: number): void {
    if (keyCode && keyCode !== 13) {
      return;
    }

    this.isPaginated = false;
    this.isSearching = true;
    setTimeout(() => this.fetchItems(), 1000);
  }

  sort(column: string): void {
    this.orderCriteria.orderBy = column;
    this.orderCriteria.orderDir = (this.orderCriteria['dir'] === 'DESC') ? 'ASC' : 'DESC';
    this.fetchItems();
  }

  fetchItems() {};

  setLimit(limit: number): void {
    this.paginationData.limit = limit;
    this.paginateItems();
  }

  setTab(tab): void {
    this.activeTab = tab;
    this.fetchItems();
  }

  confirmDelete(): Promise<boolean> {
    return swal({
      title: 'מחיקה',
      text: 'האם אתה בטוח?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'אישור',
      cancelButtonText: 'ביטול'
    }).then((result) => result);
  }

  showDeleteSuccess(): void {
    swal({
      title: '',
      text: 'המחיקה בוצעה בהצלחה',
      type: 'success',
      confirmButtonText: 'אישור'
    });
  }

  setNewItem(item: any): void {
    this.items.unshift(item);
    this.paginateItems();
  }

  getHeaderIconClass(): 'fa fa-chevron-down' | 'fa fa-chevron-up' {
    if (this.orderCriteria.orderDir === 'DESC') {
      return 'fa fa-chevron-down';
    }

    return 'fa fa-chevron-up';
  }
}
