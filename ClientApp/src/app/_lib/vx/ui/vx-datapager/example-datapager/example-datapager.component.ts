import { Component, OnInit, ViewChild } from '@angular/core';
import { finalize } from 'rxjs/operators';


// Services
import { OrgsService } from './orgs.service';

// Components
import { VxDatapagerComponent } from '../vx-datapager/vx-datapager.component';

// Models
import { ListItemModel } from '../models/list-item.model';
import { DataPageModel } from '../models/data-page.model';
import { DataPageDescriptionModel } from '../models/data-page-description.model';
import { VxLoadingoverlayService } from '../../vx-loadingoverlay/vx-loadingoverlay.service';


@Component({
  selector: 'app-example-datapager',
  templateUrl: './example-datapager.component.html',
  styleUrls: ['./example-datapager.component.scss']
})
export class ExampleDatapagerComponent implements OnInit {


  // --------------------------------------
  //    Fields
  // --------------------------------------

  @ViewChild(VxDatapagerComponent, { static: false }) pagerComponent: VxDatapagerComponent;
  pagerInput = new DataPageModel<ListItemModel>();

  data = [];

  pagerDescription: DataPageDescriptionModel = new DataPageDescriptionModel();





  // --------------------------------------
  //    Constructor
  // --------------------------------------

  constructor(
    private loadingOverlaySvc: VxLoadingoverlayService,
    private orgsApiService: OrgsService) { }



  // --------------------------------------
  //    Methods
  // --------------------------------------

  ngOnInit() {
    this.load();
  }

  load(page: number = 1) {

    this.orgsApiService
      .searchOrgs(page, this.pagerInput.size)
      .subscribe((dataPage) => {
        this.pagerInput.total = dataPage.total;
        this.data = dataPage.items;
        this.pagerComponent.load(this.pagerInput);
        this.pagerDescription = this.pagerComponent.getDescription();
      });



    // this.loadingOverlaySvc.show('Loading orgs ...');
    // setTimeout(() => {
    // this.orgsApiService
    //   .searchOrgs(page, this.pagerInput.size)
    //   .pipe(
    //     finalize(() => { this.loadingOverlaySvc.hide(); })
    //   )
    //   .subscribe((dataPage) => {
    //     this.pagerInput.total = dataPage.total;
    //     this.data = dataPage.items;
    //     this.pagerComponent.load(this.pagerInput);
    //     this.pagerDescription = this.pagerComponent.getDescription();
    //   });
    // }, 1000);




  }

  onPageChange(page: number) {
    this.load(page);
  }

}
