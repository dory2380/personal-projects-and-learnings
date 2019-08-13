import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: Place

  constructor(
    // private router: Router, 
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService,
    private modalCtrl: ModalController) { }
  
  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.get('placeId')) {
        this.navCtrl.navigateBack('places/tabs/discover')
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'))
    })
  }
  
  
    onBookPlace() {
      // this.router.navigateByUrl('/places/tabs/discover');
      // this.navCtrl.navigateBack('/places/tabs/discover'); // this provides the correct back navigation slide down instead of up for a new page.
      this.modalCtrl
        .create({
          component: CreateBookingComponent, 
          componentProps: {selectedPlace: this.place,
          id: 'd'} })
        .then(modalEl => {
          modalEl.present()
          return modalEl.onDidDismiss();
        })
        .then(resultData => {
          console.log(resultData.data, resultData.role, )
          if (resultData.data==='confirm') {
            console.log('BOOKED')
          }
        })
    }
}
