import { ChangeDetectorRef, HostListener, Renderer2 } from '@angular/core';
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewEncapsulation, ViewChild } from '@angular/core';
import { fromEvent, observable, Observable, Subject, takeUntil } from 'rxjs';
import { DomHandler } from '../shared/common/dom-handler';
import { megaMenuItem } from './mega-menu.entities';
import { isNullorEmpty } from '../shared/common/utility';
import { navbarData } from '../header/header-data';
import { CartService } from '../services/cart.service';
import { MegaMenuItem } from 'primeng/api';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { megaData, mmitems } from './megamenu-data';
import { MenuTransformSvc } from './menu-transform.service';
import { isNgTemplate } from '@angular/compiler';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}


@Component({
  selector: 'app-megamenu',
  templateUrl: './megsmenu.component.html',
  styleUrls: ['./megsmenu.component.scss'],
  host: {
    '(document: click)': 'onclickOutSideListner($event)'
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms',
          style({ opacity: 1 })
        )
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('350ms',
          style({ opacity: 0 })
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms',
          keyframes([
            style({ transform: 'rotate(0deg)', offset: '0' }),
            style({ transform: 'rotate(2turn)', offset: '1' })
          ])
        )
      ])
    ])
  ]
})


export class MegsmenuComponent implements OnInit {
  public _model: megaMenuItem[];
  megaData = megaData;
  mmitems = mmitems

  constructor(

  ) { }

  ngOnInit(): void {

  }


}










