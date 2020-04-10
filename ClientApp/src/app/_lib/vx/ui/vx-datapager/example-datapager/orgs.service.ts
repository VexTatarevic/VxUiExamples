import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Constants
import { environment } from 'src/environments/environment';

// Models
import { ListItemModel } from '../models/list-item.model';
import { DataPageModel } from '../models/data-page.model';

@Injectable({
  providedIn: 'root'
})
export class OrgsService {

  // ------------------------------
  //    Fields

  private rootUrl = environment.apiUrl;


  // ------------------------------
  //    Constructor

  constructor(
    private http: HttpClient) { }


  // ------------------------------
  //    Methods

  searchOrgs(page: number, size: number) {
    const apiUrl = `${this.rootUrl}/api/orgs/search?page=${page}&size=${size}`;
    return this.http.get<DataPageModel<ListItemModel>>(apiUrl);
  }

}
