import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Models
import { IDataPageModel } from '../models/i-data-page.model';
import { DataPageDescriptionModel } from '../models/data-page-description.model';


@Component({
  selector: 'vx-datapager',
  templateUrl: './vx-datapager.component.html',
  styleUrls: ['./vx-datapager.component.scss']
})
/**
 * Data Pager Component - Renders page links and forward back arrow links that let user navigate through pages of data.
 *
 * @author Vex Tatarevic 2018-02-08
 * @copyright VEXIT 2020 www.vexit.com
 */
export class VxDatapagerComponent implements OnInit {

  // ---------------------------------------------------
  //          Properties
  // ---------------------------------------------------

  @Input() showRangeNavArrows = false;
  @Input() showPageNavArrows = true;
  @Input() value: IDataPageModel;

  /** Event triggered on change of the page, either when user clicks one of the links: page number, first, previous, next or last */
  @Output() pageChange = new EventEmitter<number>();



  private currentRangeNumber = 1;

  /** Number of ranges */
  totalRanges = 1;

  /** Array of pages that are displayed */
  range: number[] = [];


  /** Current page number */
  get page() { return this.value.page || 1; }
  set page(value: number) { this.value.page = value; }



  /** number of total items on all the pages */
  get totalItems() { return this.value.total; }

  get hasData() { return this.totalItems > 0; }

  /**  maximum number of items displayed on one page */
  get size() { return this.value.size; }

  /** number of page links displayed on the pager */
  private get rangeSize() { return this.value.range || 10; }

  /** Order number of first item on page, relative to total number of items */
  get firstItemNumber(): number { return ((this.size * this.page) - this.size) + 1; }

  /** Order number of last item on page, relative to total number of items */
  get lastItemNumber(): number {
    let max = this.size * this.page;
    if (max > this.totalItems) {
      max = this.totalItems;
    }
    return max;
  }

  /** total number number of pages */
  get totalPages(): number { return Math.ceil(this.totalItems / this.size) || 0; }

  get isLastPage(): boolean { return (this.page === this.totalPages); }

  get isFirstRange() { return this.currentRangeNumber === 1; }

  get isLastRange() { return this.currentRangeNumber === this.totalRanges; }




  // ---------------------------------------------------
  //          Constuctor
  // ---------------------------------------------------

  constructor() { }

  // ---------------------------------------------------
  //          Methods
  // ---------------------------------------------------


  ngOnInit() {
  }

  // ------------------------
  //      Event Handlers

  //#region

  onFirst(): void {
    this.page = 1;
    this.pageChange.emit(this.page);
  }

  onPreviousRange(): void {
    const firstPageInRange = this.range[0];
    this.page = firstPageInRange - 1;
    this.pageChange.emit(this.page);
  }

  onPreviousPage(): void {
    this.page--;
    this.pageChange.emit(this.page);
  }

  onPage(pageNumber: number): void {
    // only emit onPageChange event if the page has actually changed
    if (this.page !== pageNumber) {
      this.page = pageNumber;
      this.pageChange.emit(this.page);
    }
  }

  onNextPage(): void {
    this.page++;
    this.pageChange.emit(this.page);
  }

  onNextRange(): void {
    const lastPageInRange = this.range[this.range.length - 1];
    this.page = lastPageInRange + 1;
    this.pageChange.emit(this.page);
  }

  onLast(): void {
    this.page = this.totalPages;
    this.pageChange.emit(this.page);
  }

  //#endregion


  // ------------------------
  //      Other

  load(value: IDataPageModel = null) {

    if (value) {
      this.value = value;
    }

    this.calculateRange(this.rangeSize, this.size, this.page, this.totalItems);
  }


  getDescription() {
    return new DataPageDescriptionModel({
      firstItemNumber: this.firstItemNumber,
      lastItemNumber: this.lastItemNumber,
      totalItems: this.totalItems,
      totalPages: this.totalPages,
      hasData: this.totalItems && this.totalItems > 0
    });
  }


  // -----------------------------
  //    Private Methods

  //#region  [ Private Methods ]

  private calculateRange(rangeSize: number, pageSize: number, currentPage: number, totalItems: number) {

    const totalPages = Math.ceil(totalItems / pageSize);

    this.totalRanges = Math.ceil(totalPages / rangeSize);

    this.currentRangeNumber = 1;

    for (let rangeNumber = 1; rangeNumber <= this.totalRanges; rangeNumber++) {

      const endPage = (rangeNumber * rangeSize);

      const startPage = (endPage - rangeSize) + 1;

      if (currentPage >= startPage && currentPage <= endPage) {
        this.currentRangeNumber = rangeNumber;
        this.loadRangePages(startPage, endPage, totalPages);
      }
    }
  }

  private loadRangePages(startPage: number, endPage: number, totalPages: number) {

    const currentRange: number[] = [];

    endPage = (endPage > totalPages ? totalPages : endPage);

    for (let p = startPage; p <= endPage; p++) {
      currentRange.push(p);
    }
    this.range = currentRange;
  }

  //#endregion


}
