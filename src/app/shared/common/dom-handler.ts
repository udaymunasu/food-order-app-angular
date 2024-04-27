export class DomHandler {
    public static getOuterHeight(el, margin?) {
        let height = el.offsetHeight;
        if(margin) {
            const style = getComputedStyle(el);
            height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
        }
    }
}