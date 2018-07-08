import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5'
/*
  Generated class for the MarvelServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MarvelServiceProvider {

  data: any
  url: string

  constructor(public http: Http) {
    console.log('IonHero Service On');
  }

  marvelPush() {
    let md5 = new Md5();
    let timeStamp = Number(new Date());
    let privateKey = "72ca1b370c5017b49ebfc690913d8e257ec4ba7a";
    let publicKey = "fb2ca21c8fe7ce05ba6a530d2f80753b";
    let hash = Md5.hashStr(`${timeStamp}${privateKey}${publicKey}`);
    this.url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&orderBy=name&limit=10&apikey=${publicKey}&hash=${hash}`;
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.url)
        .map(resolve => resolve.json())
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        })
    })
  }

  ionViewDidLoad() {
    this.marvelPush();
  }

}
