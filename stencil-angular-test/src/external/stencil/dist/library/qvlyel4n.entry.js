/*! Built with http://stenciljs.com */
const{h:e}=window.library;class r{componentDidLoad(){this.updateWidth()}progressDoneEmitter(){this.progressDone.emit()}didChangeHandler(){this.updateWidth()}updateWidth(){this.bar.children[0].style.width=`${this.progress}%`,100==this.progress&&this.progressDoneEmitter()}render(){return e("div",null)}static get is(){return"progress-bar"}static get properties(){return{bar:{elementRef:!0},progress:{type:Number,attr:"progress",watchCallbacks:["didChangeHandler"]}}}static get events(){return[{name:"progressDone",method:"progressDone",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"progress-bar{display:block;height:20px;border:1px solid #777;background-color:#fff;padding:2px}progress-bar div{background-color:#7ed56f;height:100%;-webkit-transition:width .3s;transition:width .3s}"}}export{r as ProgressBar};