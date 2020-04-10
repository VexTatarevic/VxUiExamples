
export class DataPageDescriptionModel {

    page?: number = null;

    size?: number = null;

    range?: number = null;

    totalItems?: number = null;

    totalPages?: number = null;

    firstItemNumber?: number = null;

    lastItemNumber?: number = null;

    hasData?= false; // this.totalItems && this.totalItems > 0;

    constructor(obj: DataPageDescriptionModel = null) { Object.assign(this, obj); }
}
