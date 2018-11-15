/*! Built with http://stenciljs.com */
import{h}from"../mycomponent.core.js";var ProgressBar=function(){function e(){}return e.prototype.componentDidLoad=function(){this.updateWidth()},e.prototype.progressDoneEmitter=function(){this.progressDone.emit()},e.prototype.didChangeHandler=function(){this.updateWidth()},e.prototype.updateWidth=function(){this.bar.children[0].style.width=this.progress+"%",100==this.progress&&this.progressDoneEmitter()},e.prototype.render=function(){return h("div",null)},Object.defineProperty(e,"is",{get:function(){return"progress-bar"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{bar:{elementRef:!0},progress:{type:Number,attr:"progress",watchCallbacks:["didChangeHandler"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"progressDone",method:"progressDone",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"progress-bar{display:block;height:20px;width:100%;border:1px solid #777;background-color:#fff;margin:10px;padding:2px}progress-bar div{background-color:#7ed56f;height:100%;-webkit-transition:width .3s;transition:width .3s}"},enumerable:!0,configurable:!0}),e}();export{ProgressBar};