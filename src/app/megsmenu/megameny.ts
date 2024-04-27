  //nav data show

  // @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  // collapsed = false;
  // screenWidth = 0;
  // navData = navbarData;
  // mmitems = mmitems;
  // megaData= megaData;
  // modal: megaMenuItem[];

  // @HostListener('window:resize', ['$event'])
  // onResize(event: any) {
  //   this.screenWidth = window.innerWidth;
  //   if (this.screenWidth <= 768) {
  //     this.collapsed = false;
  //     this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  //   }
  // }

  // ngOnInit(): void {
  //   this.screenWidth = window.innerWidth;
  // }

  // toggleCollapse(): void {
  //   this.collapsed = !this.collapsed;
  //   this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  // }

  // closeSidenav(): void {
  //   this.collapsed = false;
  //   this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  // }



  // showDropdown: boolean;

  // cartQuantity = 0;
  // public model: megaMenuItem[];
  // public_prospect = false;
  // public isLoaded = false;
  // public nodesLength = 0;
  // public nodeHovered = 0;
  // public rootListBounds = {
  //   top: 0,
  //   left: 0,
  //   width: 0,
  //   height: 0,
  // };
  // public menuBounds = {
  //   top: 0,
  //   left: 0,
  //   width: 0,
  //   height: 0,
  // };
  // variable which will store secondary window reference

  // public windowobjectReference = null;

  // variable hich will store the url currentl! in the secondary window
  // public previousUrl;
  // resizeobservables: Observable<Event>;
  // isCollapseMegaMenu: boolean;
  // prevcollapseVal: boolean;
  // reductionBreakpt = 1380;
  // collapsedBreakpt = 1924;
  // tt;
  // mmItemLargestVal = 4;
  // mmItemSmallestVal = 6.5;
  // mmItemReduction;
  // mnItemReductionRate = (this.mmItemSmallestVal - this.mmItemLargestVal) / (this.reductionBreakpt - this.collapsedBreakpt);
  // mmIconLargestVal = 25;
  // mmIconSmallestVal = 20;
  // mmIconReduction;
  // mmIconReducationRate = (this.mmIconLargestVal - this.mmIconSmallestVal) / (this.reductionBreakpt - this.collapsedBreakpt);

  // mmCtnLargelid = 720
  // mmCtnSmallWid = 439;

  // mmCtnReduction;
  // mmCtnReductionRate = (this.mmCtnLargelid - this.mmCtnSmallWid) / (this.reductionBreakpt - this.collapsedBreakpt)

  // public unSubscriber: Subject<any> = new Subject();

  // @Input()
  // set model(value: megaMenuItem[]) {
  //   this.model = value;
  //   this.nodesLength = this.model.length;
  //   if (this.isLoaded) {
  //     this.transform();
  //   }
  // }
  // get model() {
  //   return this.model;
  // }


  // @Input() style: any
  // @Input() styleclass: string;
  // @Input() basezIndex: number = 0;
  // @Input() set prospect(value: boolean) {
  //   this.prospect = value;
  //   if (this.isLoaded) {
  //     this.transform();
  //   }
  // }
  // @Output() appName: EventEmitter<any> = new EventEmitter<any>();
  // get prospect() {
  //   return this.prospect;
  // }
  // public transform() {
    // this.model = this.menuTransform.transform(this.model, this.prospect);

  // }
  // @ViewChild('menupanel') menuPanel: ElementRef;
  // @ViewChild('rootlist') rootList: ElementRef;
  // @ViewChild('animctn') animctn: ElementRef;
  // isMenuPanelvisible: boolean = true;

  // constructor(

  //   public el: ElementRef,
  //   public renderer: Renderer2,
  //   // public menuTransform: MenuTransformSvc,
  //   public changeDetecsvc: ChangeDetectorRef,
  //   cartService: CartService
  // ) {
  //   this.showDropdown = false;
  // }

  // gfg: megaMenuItem[];

  // ngOnInit(): void {
  // }
  // ngonInit() {
  //   this.isLoaded = true;
  //   // this. model = this.menuTransform.transform(this .model, this.prospect);
  //   this.detectReducedHMDimensions()
  //   fromEvent(window, 'resize')
  //     .pipe(takeUntil(this.unSubscriber))
  //     .subscribe((evt: any) => {
  //       this.prevcollapseVal = this.isCollapseMegaMenu;
  //       this.isCollapseMegaMenu = evt.target && evt.target.innerWidth && evt.target.innerwidth < 1024;
  //       this.menuPanel.nativeElement.style.height = 'auto';
  //       this.setRootListBounds()
  //       this.hidePanel(this.isCollapseMegaMenu);
  //       this.detectReducedHMDimensions();
  //       this.detectcollapseEvt();
  //     });
  //   // this.isCollapseMegaMenu = window && window.innerWidth && window.innerWidth < 1024;
  // }
  // detectcollapseEvt() {
  //   if (this.prevcollapseVal != this.isCollapseMegaMenu) {
  //     this.menuPanel.nativeElement.style.opacity = '0';
  //     this.changeDetecsvc.detectChanges();
  //     clearTimeout(this.tt)
  //     this.tt = setTimeout(() => {
  //       this.setRootListBounds();
  //       this.calcMenulidth();
  //       this.caldHideMenuPostion();
  //       this.menuPanel.nativeElement.style.opacity = ' 1';
  //     }, 500);
  //   }
  // }
  // caldHideMenuPostion() {
  //   throw new Error('Method not implemented.');
  // }

  // detectReducedHMDimensions() {
  //   if (window.innerWidth > this.reductionBreakpt && window.innerWidth < this.collapsedBreakpt) return;
  //   this.mmItemLargestVal = this.mmItemReduction + (this.reductionBreakpt - window.innerWidth) - this.mnItemReductionRate;
  //   this.mmIconReduction = Math.round(this.mmIconLargestVal - (this.reductionBreakpt - window.innerWidth) * this.mmIconReducationRate);
  //   this.mmCtnReduction = this.mmCtnLargelid - (this.reductionBreakpt - window.innerWidth) * this.mmCtnReductionRate;

  //   this.setAttributes(this.el.nativeElement, { '--mega-menu-item-reduction': this.mmItemReduction });
  //   this.setAttributes(this.el.nativeElement, { '--mega-menu-icon-reduction': this.mmIconReduction + 'px' });
  //   this.setAttributes(this.el.nativeElement, { '--mega-menu-ctn-reduction': this.mmCtnReduction + 'px' });
  // }

  // hoverCollMMItem(e) {
  //   this.setAttributes(this.animctn.nativeElement, { '--anim-ctn-ht': e.target.clientHeight + 'px' });
  //   this.setAttributes(this.animctn.nativeElement, { '--anim-ctn-top': e.target.offsetTop + 'px' });
  //   this.setAttributes(this.animctn.nativeElement, { '--anim-ctn-opacity': '1' });
  // }
  // collapseAnimCtn() {
  //   if (this.animctn && this.animctn.nativeElement) {
  //     this.setAttributes(this.animctn.nativeElement, { '--anim-ctn-ht': '100%' });
  //     this.setAttributes(this.animctn.nativeElement, { '--anim-ctn-top': '0px' });
  //   }
  // }
  // public setAttributes(el, attrs) {
  //   for (var key in attrs) {
  //     el.style.setProperty(key, attrs[key]);
  //   }
  // }

  // public onclickoutsideListner(event) {
  //   if (!this.isCollapseMegaMenu || (this.isCollapseMegaMenu && !this.isMenuPanelvisible)) return;
  //   let mnCtn = this.el && this.el.nativeElement && this.el.nativeElement.querySelector(' .bny-megamenu');
  //   let menuPanel = this.menuPanel && this.menuPanel.nativeElement;
  //   if (mnCtn && !mnCtn.contains(event.target) && menuPanel && !menuPanel.comtains(event.target)) this.hidePanel(true);
  // }
  // ngAfterviewInit() {
  //   this.setRootListBounds();
  //   if (this.menuPanel) {
  //     this.calcShowMenuPostion();
  //     this.menuPanel.nativeElement.style.visibility = 'hidden';
  //     // DomHandler.appendChild(this.menuPanel.nativeElement, 'body' );
  //     this.changeDetecsvc.detectChanges()
  //     this.isMenuPanelvisible = false;
  //     this.calcHideMenuPosition();
  //     this.changeDetecsvc.detectChanges();
  //     setTimeout(() => {
  //       this.menuPanel.nativeElement.style.visibility = 'visible';
  //       // this.changeDetectSvc.detectChanges();
  //     }, 300);
  //   }
  // }
  // ngOnDestroy() {
  //   if (this.menuPanel)
  //     // DomHandler.removeChild(this.menuPanel.nativeElement, "body');
  //     // this.unSubscriber.next();
  //     this.unSubscriber.complete();
  //   this.windowobjectReference = null;
  // }
  // calcNodePosition(event) {
  //   let eachColWid = this.rootListBounds.width / this.nodesLength;
  //   let targetOrigin = event.x - this.rootListBounds.left;
  //   let remainder = targetOrigin % eachColWid;
  //   if (remainder - targetOrigin) {
  //     this.nodeHovered - (targetOrigin - remainder) / eachColWid;
  //   }
  //   else {
  //     this.nodeHovered = 0;
  //   }
  // }

  // clickShow(event: any) {
  //   if (!this.isCollapseMegaMenu) return;
  //   if (this.isMenuPanelvisible) {
  //     this.hidePanel(true)
  //   } else {
  //     this.showPanel(event, true);
  //     this.setAttributes(this.animctn.nativeElement, { ' --anim-ctn-ht': '0px' });
  //   }
  // }
  // showPanel(event: any, iscollapsedclick?: boolean) {
  //   if (this.isCollapseMegaMenu && iscollapsedclick) return;
  //   if (!this.isMenuPanelvisible) {
  //     this.calcNodePosition(event);
  //   }
  //   this.calcShowMenuPostion();
  //   this.isMenuPanelvisible = true;
  //   this.changeDetecsvc.detectChanges();
  // }

  // hidePanel(iscollapsedClick?: boolean, ismmContent?: boolean) {
  //   if (this.isCollapseMegaMenu && !iscollapsedClick) {
  //     if (ismmContent) this.collapseAnimCtn();
  //     return;
  //   }
  //   if (iscollapsedClick) this.collapseAnimCtn();
  //   this.calcHideMenuPosition();
  //   this.isMenuPanelvisible = false;
  //   this.changeDetecsvc.detectChanges();
  // }
  // calcNewNodePosition(event) {
  //   if (this.isMenuPanelvisible)
  //     this.calcNodePosition(event);
  //   this.changeDetecsvc.detectChanges();
  // }


  // itemClick(event, item: megaMenuItem) {
  //   if (this.isCollapseMegaMenu && this.isMenuPanelvisible) this.hidePanel(true);
  //   if (item.disabled)
  //     event.preventDefault();
  //   return;
  // }
  // if(isNullorEmpty(item.url)) {

  //   event.preventDefault();
  //   return;
  // } else if (!item.routerLink) {
  //   this.openRequestedSinglePopup(item.url);
  // }
  // if (item.command) {
  //   item.command({
  //     originalEvent: event,
  //     item: item
  //   });
  // }

  // public openReque stedsinglePopup (url: string) {
  //   if (this.windowobjectReference - null |l this.windowobjectReference.closed) {
  //   1l resizable, scrollbars, status
  //   this.windouobjectReference window.open (url, "MegaMenuSecondaryMindow', ");
  //   else if (this .previousurl I- ur1)
  /**
  If the resource to load is different,
  then we load it in the already opened secondary window
  and then we bring such window back on top/in front of its parent window.
  Il resizable=yes, scrollbars =yes, status=yes
  **/
  // this.windouobjectReference window.open(ur1, "MegaMenuSecondarymindow', *):
  // this.windowobjectReference.focus()
  // else
  // this.windouobjectReference. focus () ;
  // We store the current url in order to compare url in the event of another call of this function.
  // this.previousUrl url;

  // setRootListBounds() {
  //   let rect = this.rootList.nativeElement.getBoundingClientRect();
  //   this.rootListBounds = {
  //     top: !this.isCollapseMegaMenu ? rect.top : 55,
  //     left: !this.isCollapseMegaMenu ? rect.left + window.scrollX : -380,
  //     width: !this.isCollapseMegaMenu ? rect.width : 300,
  //     height: !this.isCollapseMegaMenu ? rect.height : this.model.filter((mod) => mod && mod.items && mod.items.length).length * 60 + 3
  //   };
  // }

  // public calcMenulidth() {
  //   this.menuPanel.nativeElement.style.width = this.rootListBounds.width + 'px';
  // }
  // public calcShowMenuPostion() {
  //   this.menuPanel.nativeElement.style.top = !this.isCollapseMegaMenu ? this.rootListBounds.top + this.rootListBounds.height + 'px' : "5px"
  //   this.menuPanel.nativeElement.style.left = !this.isCollapseMegaMenu ? this.rootListBounds.left + 'px' : "0px"
  //   this.calcMenulidth();
  // }
  // public calcHideMenuPosition() {
  //   this.menuPanel.nativeElement.style.top = !this.isCollapseMegaMenu ? '-' + DomHandler.getOuterHeight(this.menuPanel.nativeElement) + 'px' : "55px";
  //   this.menuPanel.nativeElement.style.left = !this.isCollapseMegaMenu ? this.rootListBounds.left + 'px' : this.rootListBounds.width * -1 + 'px';
  // }