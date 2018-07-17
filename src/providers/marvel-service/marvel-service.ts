import { Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { MARVEL_API } from '../../app/app.api';
/*
  Generated class for the MarvelServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MarvelServiceProvider {
  id;
  data: any;
  url: string;

  constructor(public http: Http) {
    console.log('Hello HeroService');
    //let md5 = new Md5();
    // let timeStamp = Number(new Date());
    // let privateKey = "72ca1b370c5017b49ebfc690913d8e257ec4ba7a";
    // let publicKey = "fb2ca21c8fe7ce05ba6a530d2f80753b";
    // let hash = Md5.hashStr(`${timeStamp}${privateKey}${publicKey}`);
    //this.url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&orderBy=name&limit=10&apikey=${publicKey}&hash=${hash}`;
  
  }
  ionViewDidLoad() {
    this.load();
  }
  
  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    return new Promise(resolve => {
      this.http.get(MARVEL_API)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    })

  }


  getHeroById(id: number) {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=1531167736270&orderBy=name&limit=100&apikey=fb2ca21c8fe7ce05ba6a530d2f80753b&hash=f72a635d1d82e028541f4b54080f0741`)
        .map(res => res.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    })



  }

}
