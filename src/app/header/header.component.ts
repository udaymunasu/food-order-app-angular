import { ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { CartService } from '../services/cart.service';
import { navbarData } from './header-data';
import { PortfolioNavItems, PortNavItems } from './port-navigation';
import { map, Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { mmitems } from '../megsmenu/megamenu-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {
  megaMenuItems = mmitems;
  previousState: PortNavItems = { name: 'Home', url: 'portfolio/home' };
  portfolioNav = PortfolioNavItems;
  @Output() navchange: EventEmitter<boolean> = new EventEmitter();
  private issearchFormOpen = false
  private isNavOpen = true
  public isEmulatedUser = false;
  public isAuthorizedUser = false;
  public isPilot: boolean = false;
  // userPrefModa1Ref: BNYModalRefs
  private subscribedObservables: Subscription[] = []
  // megaMenuItems: BNYMegaMenuItem[]
  appName: String = '';
  showonlyProspectApps: boolean = false;
  unreadAnnouncementCount
  annoucementsFeature: boolean = false;
  isWidgetLibEnabled: boolean = false;
  isDsmThemeOn: boolean = false;
  isDsmThemeEnable: boolean = false;
  themePreferencesData: any;
  loadfloater: boolean = false;
  isGlobalSearchEnabled: boolean = false;
  isMacPlatform: boolean = false;
  windRefobjMap;
  userInfosvc: any;
  pilotcheckSvc: any;
  pilotcChecksvc: any;
  pilotCheckSvc: any;
  favoriteDataService: any;
  pilotCheckSVc: any;
  sharedStorageSvc: any;
  sharedStoragesvc: any;
  subscribedobservables: any;
  showOnlyProspectApps: any;
  setThemePreferenceData: any;
  userGuideUrl: "./www.google.com"

  @HostListener('document: keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    console.log(event);
    this.loadfloater = false;
  }
  @HostListener('document: keydown.control.k', ['$event'])
  onkeydown(event: KeyboardEvent) {
    if (!this.isMacPlatform) {
      this.loadfloater = true;
      event.preventDefault()
    }
  }
  @HostListener('document: keydown.meta.k', ['Sevent'])
  onCommandkeydown(event: KeyboardEvent) {
    if (this.isMacPlatform) {
      this.loadfloater = true;
      event.preventDefault()
    }
  }


  @Input() collapsed = false;
  @Input() screenWidth = 0;

  navData = navbarData;
  cartQuantity = 0;
  constructor(cartService: CartService,
    private route: ActivatedRoute,
    private router: Router,

  ) { }

  ngOnInit() {
    if (navigator?.["userAgentData"]?.platform == 'macos') {
      this.isMacPlatform = true;
    }
    // this.isEmulatedUser = this.showEmulation();
    // this.isAuthorizedUser = this.userInfosvc.isAuthorized;
    console.log('isEmulatedUser', this.isEmulatedUser);
    //##PILOT - FEATURE: PREF EMUL_REDESIGN:
    this.isPilot = this.pilotcheckSvc.isEmulationRedesign;
    // ##PILOT - FEATURE: ANNOUNCEMENT - POPOVER:
    // this.annoucementsFeature = this.pilotcChecksvc.isAnnouncementPopover
    // ##PILOT - FEATURE: ANNOUNCEMENT - POPOVER::
    this.isWidgetLibEnabled = this.pilotCheckSvc.iswidgetLibraryEnabled;
    this.isDsmThemeEnable = this.pilotcheckSvc.isDsmThemeEnable;
    // Show only prospects Apps if entitlements(inv officers) not available
    // this.showonlyProspectApps = this.favoriteDataService.isPreferencesAvailable;
    // this.isGlobalSearchEnabled = !this.pilotCheckSVc.isGlobalSearchEnabled;
    // this.subscribedObservables.push(
    //   this.sharedStorageSvc
    //     .subscribe(NAVIGATOR_SHARED_STORAGE_KEY.MEGA_MENU_ITEM5)
    //     .subscribe((menuItems) => {
    //       this.megaMenuItems = menuItems.data;
    //     })
    // );
    // this.subscribedObservables.push(
    //   this.sharedStoragesvc
    //     .subscribe(NAVIGATOR_SHARED_STORAGE_KEY.PREVIOUs_PAGE_URL)
    //     .subscribe((savedURL) => {
    //       const filterNav =
    //         this.portfolioNav && this.portfolioNav.length
    //           ? this.portfolioNav.filter(
    //             (nav) => savedURL.data.indexof(nav.url) != -1
    //           )
    //           : []
    //       if (filterNav && filterNav.length) {
    //         this.previousState = filterNav[0]:
    //         detectViewChanges(this.changeDetectionSvc);
    //       }
    //     })
    // );
    // this.subscribedObservables.push(
    //   this.route.queryParams.subscribe((param) => {
    //     if (param && param['code']) {
    //       this.megaMenuItems.forEach((key) => {
    //         if (key && key.items && key.itens.length) {
    //           key.items.forEach((item) => {
    //             if (
    //               item &&
    //               item.queryParams &&
    //               item.queryParams.code === param.code
    //             ) {
    //               this.appName = item.label;
    //             }
    //           });

    //         }
    //       });
    //     } else {
    //       this.appName = '';
    //     }
    //   })
    // );
    this.getThemePreferenceData();
    if (this.showOnlyProspectApps) document.body.classList.add("no-user-pref");
  }
  public toggleSearchForm(): void {
    this.issearchFormOpen = !this.issearchFormOpen;
  }
  public getThemePreferenceData() {
    this.themePreferencesData = this.sharedStoragesvc.get("THEMES");
    let root = document.getElementsByTagName("html")[0]
    if (this.isDsmThemeEnable && this.themePreferencesData && this.themePreferencesData[0].themeName == "DSM") {
      this.isDsmThemeOn = true
      root.classList.add(" dsm-theme")
    } else {
      this.isDsmThemeOn = false
      root.classList.remove("dsm-theme")
      this.setThemePreferenceData([{ themeName: 'BLUE' }])
    }
  }
  // public setThemePreferenceData(themePreferences) {
  //   this.saveThemeGridPreferences(themePreferences, (this.themePreferencesData ? true : false)).pipe(take(1)).subscribe(
  //     (response) => {
  //       return response;
  //     },
  //     (err) => {
  //       return err;
  //     }
  //   )
  // }
  public toggleToTeal() {
    this.isDsmThemeOn = !this.isDsmThemeOn;
    let root = document.getElementsByTagName('html')[0]
    if (this.isDsmThemeOn) {
      root.classList.add(' dsm-theme');
      this.setThemePreferenceData([{ themeName: 'DSM' }])
    } else {
      this.setThemePreferenceData([{ themeName: 'BLUE' }])
      root.classList.remove('dsm-theme');
    }
  }
  // saveThemeGridPreferences(themePreferences: Array<any>, hasPreferences: boolean): Observable<any> {
  // const preferences: { gridId: string, preferences: any } = {
  //   gridId: 'THEMES',
  //   preferences: themePreferences
  // };
  // return this.dataSvc.saveGridPreferences(preferences, hasPreferences ? "THEMES" : null).pipe(
  //   map((response) => {
  //     return response;
  //   })
  // );
  // }
  public toggle(): void {
    this.isNavOpen = !this.isNavOpen;
    this.navchange.emit(this.isNavOpen);
  }
  // Method used to view the pdf from the respective loaction
  vieUserGuidepdf(ę) {
    if (!this.windRefobjMap || !this.windRefobjMap?.window) {
      this.windRefobjMap = window.open(this.userGuideUrl, "_blank")
      this.windRefobjMap.focus();
    }
    else {
      this.windRefobjMap.focus();
    }
  }
  loadUserPreferences() {
    // this.notificationsvc.removeAlINotification();
    // this.userPrefModal1Ref this.bnyModalSvc.open(UserPreferencesComponent, {
    //   isNew: true,
    //   backdrop: 'static';
    //   windowclass: 'user-pref-modal',
    //   backdropclass: 'user-pref-backdrop'
    // });
    // this.subscribedObservables.push(
    //   this.userPrefModalRef.results.subscribe((result: any) => {
    //     if (result) {
    //       this.router.navigate(['/portfolio']);
    //       window.location.reload()
    //     }
    //   })
    // );
  }
  ngonDestroy(): void {
    if (this.showonlyProspectApps)
      document.body.classList.remove("no-user-pref");
    this.subscribedobservables.forEach((subscribedOservable) => {
      subscribedOservable.unsubscribe();
    });
  }

  onDashbardLinkClicked() {
    // const savedURL = this.sharedStorageSvc.get (NAVIGATOR_SHARED_STORAGE_KEY. PREVIOUS PAGE_URL)
    // const backToDas hboardURL = savedURL || this.DEFUALT_DASHBOARD_URL
    this.router.navigate([this.previousState.url]);
  }
  backToHome() {
    this.router.navigate(['/cart-page'])
  }
  // shoWEmulation(): boolean {
  //   if (!this.pilotcheckSvc.isEmulationFeature) {
  //     return this.userInfosvc.isAdmin;
  //   }
  // }

  openMidgetLib() {
    this.router.navigate(['/widget-1ib-config-page'])
  }
  openFloater() {
    this.loadfloater = true;
  }
  closeFloater() {
    this.loadfloater = false
  }


  getBodyClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenWidth > 768) {
      styleClass = 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }
}

export class UserInfo {
  public static userInfo: any = '';
}




