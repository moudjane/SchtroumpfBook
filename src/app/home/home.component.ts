import { Component, OnInit } from '@angular/core';
import { faCoffee, faSmile, faPhotoFilm, faCamera, faContactCard, faThumbsUp, faMessage, faShare, faPlus, faContactBook, faPeopleGroup, faHouseChimney, faPeopleArrows, faMagnifyingGlass, faClock, faRegistered } from '@fortawesome/free-solid-svg-icons';
// import { LocalStorageModule } from 'angular-2-local-storage';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


// interface User {
//     _id: string;
//     pseudo: string;
//     email: string;
// }

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
})

export class HomeComponent implements OnInit {

    title = 'schtroumpfsApp';
    faCoffee = faCoffee;
    faSmile = faSmile;
    faPhotoFilm = faPhotoFilm;
    faCamera = faCamera;
    faContactCard = faContactCard;
    faThumbsUp = faThumbsUp;
    faMessage = faMessage;
    faShare = faShare;
    faPlus = faPlus;
    faContactBook = faContactBook;
    faPeopleGroup = faPeopleGroup;
    faHouseChimney = faHouseChimney;
    faPeopleArrows = faPeopleArrows;
    faMagnifyingGlass = faMagnifyingGlass;
    faClock = faClock;
    faRegistered = faRegistered;
    logoSchtroumpfbook: any = "../assets/images/logoSchtroumpfbook.png";
    netImage: any = "../assets/images/smurfpost1.jpg";
    schtroumpfLunette: any = "../assets/images/schtroumpf-a-lunette.jpg";
    schtroumpfFarceur: any = "../assets/images/schtroumpfFarceur.jpg";
    plus: any = "../assets/images/plus.png";
    schtroumpfGrognon: any = "../assets/images/schtroumpfGrognon.jpg";
    grandSchtroumpf: any = "../assets/images/grandSchtroumpf.jpg"
    Schtroumpfette: any = "../assets/images/Schtroumpfette.jpg"
    SchtroumpfFermier: any = "../assets/images/SchtroumpfFermier.jpg"
    schtroumpfProf: any = "../assets/images/schtroumpfProf.jpg";
    schtroumpfPost2: any = "../assets/images/schtroumpfPost2.jpg";
    SchtroumpfsMusique: any = "../assets/images/SchtroumpfsMusique.jpg";
    Gargamele: any = "../assets/images/Gargamele.jpg";
    photoDeProfil: any = "../assets/images/photoDeProfil.png";
    gargameleCuisine: any = "../assets/images/gargameleCuisine.png";
    nouvelUtilisateur: any = "../assets/images/nouvelUtilisateur.jpg";



    constructor(private http: HttpClient) { }

    users: any[];
    selectedFriendId: string;

    ngOnInit() {
        this.http.get<any[]>('http://localhost:5501/api/user').subscribe(users => {
            this.users = users;
        });
    }

    friendsList: any[] = [];

    addFriend() {
        const data = { friendId: this.selectedFriendId };
        this.http.post<any>('http://localhost:5501/api/user/', data).subscribe(response => {
            console.log(response);
            this.friendsList.push(response.friend);
        });
    }


}
