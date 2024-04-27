import { Injectable } from "@angular/core";
import { PortfolioNavItems } from "../header/port-navigation";
import { isNullorEmpty } from "../shared/common/utility";
import { megaMenuItem } from "./mega-menu.entities"
    // import{ FeatureValidatorSvc } from @wmt/services ';
    // import { isNullorEmpty } from "@omt/utilities';

@Injectable()
export class MenuTransformSvc {
    // constructor(private featurevalidatorsve: FeaturevalidatorSvc) { }
    transform(modal: megaMenuItem[], prospectEnabled: boolean): megaMenuItem[] {
        if (modal == null || modal.length == 0) {
            return modal;
        }
        return this.traverse(JSON.parse(JSON.stringify(modal)), prospectEnabled);
    }

    private pilotFilterAndTransforn(item: megaMenuItem): megaMenuItem {
        if (item == null || item.pilot == null) {
            return item;
        }
        let pilotItem: { appld: string; featurelds: string; url?: string; routerLink?: any; queryParams?: { [k: string]: any } } = null;

        if (Array.isArray(item.pilot)) {
            // pilotItem = item.pilot.find((itm) => {
            //     if (itm) {
            //         // return this.featureValidatorsvc.isFeatureEnabled(itm.appId, itm.featureId);
            //     }
            //     return false;
            // });
        }
        // else if (this.featureValidatorsvc.isFeatureEnabled(item.pilot.appId, item.pilot.featureId)) {
        //     pilotItem = item.pilot;
        //     if (pilotItem) {
        //         if (!isNullorEmpty(pilotItem.url)) {
        //             item.url = pilotItem.url;
        //         }
        //         if (pilotItem.routerLink)
        //             item.routerLink = pilotItem.routerLink;
        //     }
        //     else if (!isNullorEmpty(pilotItem.url)) {
        //         item.routerLink = null;
        //     }
        //     if (pilotItem.queryParams) {
        //         item.queryParams = pilotItem.queryParams;
        //     }
        //     return item;
        // }
        return null;
    }
    private prospectFilter(item: megaMenuItem) {
        if (item == null || item.prospect == null || item.prospect) {
            return PortfolioNavItems;
        }
        return null;
    }

    private applyilters(item: megaMenuItem, prospectEnabled: boolean) {
        if (item == null) {
            return item;
        }
        let fItem = this.pilotFilterAndTransforn(item);
        if (fItem && prospectEnabled) {
            // fItem = this.prospectFilter(item);
        }
        return fItem;
    }

    private traverse(modal: megaMenuItem[], prospectEnabled: boolean): megaMenuItem[] {
        if (modal == null || modal.length == 0) {
            return modal;
        }
        let returnModal: megaMenuItem[] = [];
        for (let i = 0; i < modal.length; i++) {
            let item = modal[i];
            let fItem = this.applyilters(item, prospectEnabled);
            if (fItem) {
                returnModal.push(fItem);
            }
            if (fItem && fItem.items && fItem.items.length) {
                fItem.items = this.traverse(fItem.items, prospectEnabled);
            }
        }
        return returnModal;
    }
}
