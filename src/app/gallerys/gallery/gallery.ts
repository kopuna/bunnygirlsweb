import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GetGirlsService } from '../../utils/getGirlsService';
import { Girl } from '../../utils/girl';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  girls$: Observable<Girl[]>;
  girls: Girl[] = [];

  constructor(private getGirlsService: GetGirlsService, private cdr: ChangeDetectorRef) {
    this.girls$ = this.getGirlsService.getGirls();
  }

  async ngOnInit() {
    this.girls$.subscribe((values) => {
      values.forEach(value =>
        this.girls.push(value)
      );
      this.cdr.detectChanges();
    });
  }
  
  filterGirlsByName(name: string): Girl | undefined {
    return this.girls.find(girl =>
      girl.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  getProfileLink(name: string): string {
    return 'profile/' + name.toLowerCase();
  }

  getHeadImg(name: string): string {
    const girl = this.filterGirlsByName(name);
    var lowerName: string = girl!.name.toLowerCase();
    return girl?.galleryDestination + '/' + lowerName + 'Head.png';
  }

}
