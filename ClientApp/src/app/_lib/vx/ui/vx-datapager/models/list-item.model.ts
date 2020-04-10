export class ListItemModel {
    id: number = null;
    name: string = null;

    constructor(obj: ListItemModel = null) { Object.assign(this, obj); }
}
