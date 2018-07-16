import { Hero } from './../../models/hero.model';
import { Component } from '@angular/core';
import { NavController, LoadingController, Loading } from 'ionic-angular';
import { MarvelServiceProvider } from '../../providers/marvel-service/marvel-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  obj: any;
  heroes: Array<any> = []
  loader: Loading;

  page: number = 1;
  perPage: number = 0;
  totalData: number = 0;
  totalPages: number = 0;

  constructor(
    public navCtrl: NavController,
    public marvelService: MarvelServiceProvider,
    public loadingCtrl: LoadingController) { }

  ionViewDidLoad() {
    console.log("Initialized Ion Hero");
    this.loader = this.loadingCtrl.create({
      content: "",
    });

    this.loader.present().then(() => {
      this.getTopStories();
    });

  }

  getTopStories() {
    this.marvelService.load()
      .then(data => {
        this.obj = data;
        for (let i = 0; i <= 10; i++) {
          let n = new Hero(
            this.obj.data.results[i].name,
            this.obj.data.results[i].description,
            this.obj.data.results[i].thumbnail,
            this.obj.data.results[i].path,
            this.obj.data.results[i].modified
          );
          console.log(n);
          this.heroes.push(n);
        }
        this.perPage = 10;
        this.totalData = this.obj.data.num_results;
        this.totalPages = 100;
        this.loader.dismissAll();
      }, (err) => {
        err = err;
        this.loader.dismissAll();
      })
  }

  doInfinite(infiniteScroll) {
    this.totalPages = this.page * 10;

    setTimeout(() => {
      let result = this.obj.data.results.slice(this.page * 10);

      for (let i = 1; i <= this.perPage; i++) {
        if (result[i] != undefined) {
          let n = new Hero(
            result[i].name,
            result[i].description,
            result[i].thumbnail,
            result[i].path,
            result[i].modified);
          this.heroes.push(n);
        }
      }
      this.page += 1;
      infiniteScroll.complete();
      this.loader.dismissAll();
    }, 2000);
  }

}
