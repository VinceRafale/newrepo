cordova.define("cordova-plugin-file.File",function(t,i,s){var e=function(t,i,s,e,a){this.name=t||"",this.localURL=i||null,this.type=s||null,this.lastModified=e||null,this.lastModifiedDate=e||null,this.size=a||0,this.start=0,this.end=this.size};e.prototype.slice=function(t,i){var s=this.end-this.start,a=0,h=s;arguments.length&&(a=0>t?Math.max(s+t,0):Math.min(s,t)),arguments.length>=2&&(h=0>i?Math.max(s+i,0):Math.min(i,s));var n=new e(this.name,this.localURL,this.type,this.lastModified,this.size);return n.start=this.start+a,n.end=this.start+h,n},s.exports=e});