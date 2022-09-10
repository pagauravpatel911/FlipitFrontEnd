


const FlipBook = (props) => {

    
    const afterScriptAdded = () => {
    const imported = this.doc.getElementById('op');
    // if (this.elementRef.nativeElement.contains(imported)) {
    //     this.elementRef.nativeElement.removeChild(imported);
    // }
    const s = this.doc.createElement('script');
    s.type = 'text/javascript';
    s.id = 'op';
    if (this.isBrowser) {
        if (window.innerWidth < 992) {
            s.innerHTML = 'var option_flipbookContainer = {source:\'' + this.pageData._sfilelink + '\',backgroundColor: \'#fff\',scrollWheel: false,pageMode: DFLIP.PAGE_MODE.SINGLE ,singlePageMode: DFLIP.SINGLE_PAGE_MODE.BOOKLET ,transparent: true,paddingTop: 25,paddingLeft: 0,paddingRight: 0,paddingBottom:25,pdfjsSrc: \'./assets/dflip/js/libs/pdf.min.js\',pdfjsCompatibilitySrc: \'./assets/dflip/js/libs/compatibility.js\',pdfjsWorkerSrc: \'./assets/dflip/js/libs/pdf.worker.min.js\',threejsSrc: \'./assets/dflip/js/libs/three.min.js\',mockupjsSrc: \'./assets/dflip/js/libs/mockup.min.js\',soundFile: \'./assets/dflip/sound/turn2.mp3\',hideControls: \'share\'};';
        } else {
            s.innerHTML = 'var option_flipbookContainer = {source:\'' + this.pageData._sfilelink + '\',backgroundColor: \'#fff\',scrollWheel: false,pageMode: DFLIP.PAGE_MODE.SINGLE ,singlePageMode: DFLIP.SINGLE_PAGE_MODE.BOOKLET ,transparent: true,paddingTop: 25,paddingLeft: 45,paddingRight: 45,paddingBottom:25,pdfjsSrc: \'./assets/dflip/js/libs/pdf.min.js\',pdfjsCompatibilitySrc: \'./assets/dflip/js/libs/compatibility.js\',pdfjsWorkerSrc: \'./assets/dflip/js/libs/pdf.worker.min.js\',threejsSrc: \'./assets/dflip/js/libs/three.min.js\',mockupjsSrc: \'./assets/dflip/js/libs/mockup.min.js\',soundFile: \'./assets/dflip/sound/turn2.mp3\',hideControls: \'share\'};';
        }
    }


    imported.appendChild(s)
    // this.pageData.loadingFlipbook = false;
    // this.cdr.detectChanges();
}


    const eventHandler = () => {
        const imported = document.getElementById("scriptPath")
        console.log(imported)
        const s = document.createElement("script")
        s.type = 'text/javascript';
        s.src = 'https://asmadiya-portal-s3bucket.s3.ap-south-1.amazonaws.com/new1?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAWUEDS5RQZXMNHCMM%2F20220909%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20220909T092605Z&X-Amz-Expires=3600&X-Amz-Signature=7d51da11016f25e7351a3acd4ee4577c5a800631909ab5926052faa831899240&X-Amz-SignedHeaders=host';
        s.id = 'scriptPath';
        s.onload = () => {afterScriptAdded()}
    }
   
    

    return(

        <div id="scriptPath">
            <h1>hello</h1>
            <div id="op">

            </div>
            <button onClick={eventHandler}>hello</button>
        </div>
    )
}


export default FlipBook;
// loadScript() {
//     this.cdr.detectChanges();
//     if (this.pageData.currentRoute.startsWith('/fund-details')) {
//         this.pageData.shareURLforpdf = `${this.pageData.selectedFile.pdfTitle.split(' ').join('-')}${this.pageData.selectedFile.monthString}${this.pageData.selectedFile.reporYear}_${this.pageData.selectedFile.id}`;
//     } else {
//         this.pageData.shareURLforpdf = `${this.pageData.selectedFile.monthString}${this.pageData.selectedFile.reporYear}${this.pageData.selectedFile.id}`;
//     }
//     const imported = this.doc.getElementById('scriptPath');
//     if (this.elementRef.nativeElement.contains(imported)) {
//         this.elementRef.nativeElement.removeChild(imported);
//     }
//     const s = this.doc.createElement('script');
//     s.type = 'text/javascript';
//     s.src = 'assets/dflip/js/dflip.min.js';
//     s.id = 'scriptPath';
//     const __this = this;
//     s.onload = () => { this.afterScriptAdded(); };
//     this.elementRef.nativeElement.appendChild(s);
// }

// afterScriptAdded() {
//     const imported = this.doc.getElementById('op');
//     if (this.elementRef.nativeElement.contains(imported)) {
//         this.elementRef.nativeElement.removeChild(imported);
//     }
//     const s = this.doc.createElement('script');
//     s.type = 'text/javascript';
//     s.id = 'op';
//     if (this.isBrowser) {
//         if (window.innerWidth < 992) {
//             s.innerHTML = 'var option_flipbookContainer = {source:\'' + this.pageData._sfilelink + '\',backgroundColor: \'#fff\',scrollWheel: false,pageMode: DFLIP.PAGE_MODE.SINGLE ,singlePageMode: DFLIP.SINGLE_PAGE_MODE.BOOKLET ,transparent: true,paddingTop: 25,paddingLeft: 0,paddingRight: 0,paddingBottom:25,pdfjsSrc: \'./assets/dflip/js/libs/pdf.min.js\',pdfjsCompatibilitySrc: \'./assets/dflip/js/libs/compatibility.js\',pdfjsWorkerSrc: \'./assets/dflip/js/libs/pdf.worker.min.js\',threejsSrc: \'./assets/dflip/js/libs/three.min.js\',mockupjsSrc: \'./assets/dflip/js/libs/mockup.min.js\',soundFile: \'./assets/dflip/sound/turn2.mp3\',hideControls: \'share\'};';
//         } else {
//             s.innerHTML = 'var option_flipbookContainer = {source:\'' + this.pageData._sfilelink + '\',backgroundColor: \'#fff\',scrollWheel: false,pageMode: DFLIP.PAGE_MODE.SINGLE ,singlePageMode: DFLIP.SINGLE_PAGE_MODE.BOOKLET ,transparent: true,paddingTop: 25,paddingLeft: 45,paddingRight: 45,paddingBottom:25,pdfjsSrc: \'./assets/dflip/js/libs/pdf.min.js\',pdfjsCompatibilitySrc: \'./assets/dflip/js/libs/compatibility.js\',pdfjsWorkerSrc: \'./assets/dflip/js/libs/pdf.worker.min.js\',threejsSrc: \'./assets/dflip/js/libs/three.min.js\',mockupjsSrc: \'./assets/dflip/js/libs/mockup.min.js\',soundFile: \'./assets/dflip/sound/turn2.mp3\',hideControls: \'share\'};';
//         }
//     }
//     this.elementRef.nativeElement.appendChild(s);
//     this.pageData.loadingFlipbook = false;
//     this.cdr.detectChanges();
// }