import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, combineLatest } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Girl } from '../../utils/girl';
import { GetGirlsService } from '../../utils/getGirlsService';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit, OnDestroy {
  girl: Girl | undefined;
  private destroy$ = new Subject<void>();

  constructor(
    private getGirlsService: GetGirlsService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    combineLatest([
      this.route.paramMap,
      this.getGirlsService.getGirls()
    ])
    .pipe(takeUntil(this.destroy$))
    .subscribe(([params, girls]) => {
      const name = params.get('name') || '';
      this.girl = girls.find(g => 
        g.name.toLowerCase().includes(name.toLowerCase())
      );
      this.cdr.detectChanges();
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getProfileImg(): string {
    if (!this.girl) return '';
    return `${this.girl.galleryDestination}/${this.girl.name.toLowerCase()}.png`;
  }
}