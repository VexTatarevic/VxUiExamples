
/**
 * Data Pager Model - contains data required for rendering of the data pager.
 *
 * @author Vex Tatarevic 2018-02-08
 * @copyright VEXIT 2020 www.vexit.com
 */
export interface IDataPageModel {

    /** To-Server - Current Page  */
    page: number;

    /** To-Server - Max Number of items on the page  */
    size: number;

    /** Max number of pages displayed on pager  */
    range: number;

    /** From-Server - Total number of records in database  */
    total: number;

}
