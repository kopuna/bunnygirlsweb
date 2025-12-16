import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Girl } from '../../utils/girl';
import { GetGirlsService } from '../../utils/getGirlsService';
import { ActivatedRoute } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  girls$: Observable<Girl[]>;
  girls: Girl[] = [];
  girl: Girl | undefined;
  name: string = '';

  constructor(private getGirlsService: GetGirlsService, private cdr: ChangeDetectorRef, private route: ActivatedRoute) {
    this.girls$ = this.getGirlsService.getGirls();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.name = params.get('name') || '';
      
      this.girls$.subscribe(values => {
        this.girls = values;
        this.girl = this.filterGirlsByName(this.name);
      });
    });
    
    this.cdr.detectChanges();
  }
  
  filterGirlsByName(name: string): Girl | undefined {
    return this.girls.find(girl =>
      girl.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  getProfileImg(): string {
    var lowerName: string = this.girl!.name.toLowerCase();
    var link = this.girl?.galleryDestination + '/' + lowerName + '.png';
    console.log(link);
    return link;
  }
}
