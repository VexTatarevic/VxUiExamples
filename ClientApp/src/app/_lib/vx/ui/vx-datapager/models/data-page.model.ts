import { IDataPageModel } from './i-data-page.model';


/**
 * Data Pager Model - contains data required for rendering of the data pager.
 *
 * @author Vex Tatarevic 2018-02-08
 * @copyright VEXIT 2020 www.vexit.com
 */
export class DataPageModel<T> implements IDataPageModel {


    /** To-Server - Current Page  */
    page = 1;

    /** To-Server - Max Number of items on the page  */
    size = 10;

    /** Max number of pages displayed on pager  */
    range = 10;

    /** From-Server - Total number of records in database  */
    total = 0;


    /** From-Server - records displayed for current page  */
    items?: T[] = [];



    constructor(obj: DataPageModel<T> = null) { Object.assign(this, obj); }
}
