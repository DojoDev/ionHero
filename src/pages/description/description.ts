import { MarvelServiceProvider } from './../../providers/marvel-service/marvel-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Hero } from '../../models/hero.model';

/**
 * Generated class for the DescriptionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
})
export class DescriptionPage {
  public id;
  public obj: any;
  public hero: Hero;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public marvelService: MarvelServiceProvider
  ) {

    this.id = navParams.get("id");

    console.log("Hero Array",this.hero);
    this.marvelService.getHeroById(this.id)
    .then(data => {
      this.obj = data;
      
        for (let i = 0; i <= 10; i++) {
          if(this.id ==this.obj.data.results[i].id){
              this.hero = new Hero(
              this.obj.data.results[i].id,
              this.obj.data.results[i].name,
              this.obj.data.results[i].description,
              this.obj.data.results[i].thumbnail,
              this.obj.data.results[i].path,
              this.obj.data.results[i].modified
            );
          }else{
            console.log("Erro nenhum Heroi Encontrado");
          }
       
       
      }


    });
   }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad DescriptionPage');

  }

}
