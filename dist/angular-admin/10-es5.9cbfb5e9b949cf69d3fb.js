(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/2RN":function(t,n,i){"use strict";i.r(n);var e,s=i("mrSG"),a=i("CcnG"),o=i("Ip0R"),c=i("gIcY"),r=i("ZKRY"),l=i("6p9a"),d=i("o0su"),p=i("Shlh"),g=i("dU+k").loadScript,h=["#017170","#2fc32f","#b0dc0b","#eab404","#de672c","#ec2e2e","#d5429b","#6f52b8","#1c7cd5","#56b9f7","#0ae8eb"],u=[{description:"\u4eca\u65e5\u6587\u7ae0\u9605\u8bfb",icon:"ion-md-eye",type:"views"},{description:"\u5168\u7ad9\u6587\u7ae0\u6570",icon:"ion-md-list",type:"articles"},{description:"\u5168\u7ad9\u6807\u7b7e\u6570",icon:"ion-md-pricetags",type:"tags"},{description:"\u5168\u7ad9\u8bc4\u8bba\u6570",icon:"ion-md-text",type:"comments"}];!function(t){t[t.Statistics=0]="Statistics"}(e||(e={}));var f=function(){function t(t){this.httpService=t,this.statisticApiPath=l.n,this.googleTokenApiPath=l.i,this.isShowSelectView=!1,this.defaultStatistics=u,this.googleToken=null,this.isLoadingGa=!0,this.statistics={},this.fetching={}}return t.prototype.getStatisticsData=function(){var t=this;return Object(p.d)(this.fetching,e.Statistics,this.httpService.get(this.statisticApiPath).then(function(n){t.statistics=n.result}))},t.prototype.getGaToken=function(){var t=this;return this.httpService.get(this.googleTokenApiPath).then(function(t){return t.result.access_token}).catch(function(n){return t.isLoadingGa=!1,Promise.reject(n)})},t.prototype.instanceGa=function(t){var n=this,i=window.gapi;i.analytics.ready(function(){n.isLoadingGa=!1,i.analytics.auth.authorize({serverAuth:{access_token:t}});var e=new i.analytics.ViewSelector({container:"view-selector"});e.execute();var s=new i.analytics.googleCharts.DataChart({reportType:"ga",query:{dimensions:"ga:hour",metrics:"ga:sessions","start-date":"today","end-date":"today"},chart:{type:"LINE",container:"timeline",options:{colors:h,width:"100%",chartArea:{left:"25",right:"25"},focusTarget:"category",dataOpacity:.6,pointSize:14,vAxis:{gridlines:{color:"#454545"},baselineColor:"#454545",textStyle:{color:"#fff"}},hAxis:{textStyle:{color:"#fff"}},backgroundColor:{fillOpacity:.05},tooltip:{textStyle:{fontSize:13}},legend:{textStyle:{color:"#fff"}}}}}),a=function(t,n,e){return new i.analytics.googleCharts.DataChart({query:{dimensions:t,metrics:"ga:sessions","start-date":"today","end-date":"today","max-results":15,sort:"-ga:sessions"},chart:{container:n,type:"PIE",options:{title:e,width:"100%",pieHole:.5,colors:h,chartArea:{left:"25"},annotations:{stem:{color:"transparent",length:120},textStyle:{color:"#9E9E9E",fontSize:18}},backgroundColor:{fillOpacity:.05},titleTextStyle:{color:"#fff"},pieSliceBorderColor:"transparent",pieSliceTextStyle:{color:"#fff"},tooltip:{showColorCode:!0,textStyle:{fontSize:12}},legend:{textStyle:{color:"#fff"}}}}})},o=a("ga:country","pie-country","\u56fd\u5bb6\u5730\u533a"),c=a("ga:city","pie-city","\u57ce\u5e02"),r=a("ga:browser","pie-browser","\u6d4f\u89c8\u5668"),l=a("ga:operatingSystem","pie-os","\u64cd\u4f5c\u7cfb\u7edf");e.on("change",function(t){var n={query:{ids:t}};s.set(n).execute(),o.set(n).execute(),c.set(n).execute(),r.set(n).execute(),l.set(n).execute()})})},t.prototype.initGAClient=function(){return s.b(this,void 0,void 0,function(){return s.e(this,function(t){return window.gapi||g(),this.getGaToken().then(this.instanceGa.bind(this)),[2]})})},t.prototype.ngOnInit=function(){this.initGAClient(),this.getStatisticsData()},t.ctorParameters=function(){return[{type:d.a}]},t=s.c([Object(a.Component)({selector:"page-dashboard",encapsulation:a.ViewEncapsulation.None,template:i("XXja"),styles:[i("Db45")]}),s.f("design:paramtypes",[d.a])],t)}(),b=i("ZYCi"),y=[{path:"",component:f}],m=b.d.forChild(y),x=function(){function t(){}return t=s.c([Object(a.NgModule)({imports:[o.CommonModule,c.c,r.a,m],declarations:[f]})],t)}();n.default=x},Db45:function(t,n){t.exports=".statistics {\n  color: #ffffff;\n}\n.statistics .statistics-item-container {\n  position: relative;\n  padding: 0 15px;\n  float: left;\n  box-sizing: border-box;\n}\n.statistics .statistics-item-container .card {\n  height: 115px;\n}\n.statistics .statistics-item-container .card .card-body {\n  padding: 15px;\n}\n.statistics .statistics-item {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n  padding: 0 1em;\n}\n.statistics .statistics-item .description {\n  display: inline-block;\n  font-size: 18px;\n  opacity: 0.9;\n}\n.statistics .statistics-item .description .description-stats {\n  padding-top: 0.5em;\n  font-size: 1.8rem;\n}\n.statistics .statistics-item .icon {\n  font-size: 4em;\n}\n@media screen and (min-width: 1620px) {\n  .row.shift-up > * {\n    margin-top: -573px;\n  }\n}\n@media screen and (max-width: 1620px) {\n  .card.feed-panel.large-card {\n    height: 824px;\n  }\n}\n.ga-card {\n  min-height: 400px;\n}\n.ga-card .ga-box {\n  position: relative;\n}\n.ga-card .ga-box .toolbar {\n  display: none;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin-bottom: 1rem;\n}\n.ga-card .ga-box .toolbar .btn {\n  margin-right: 1rem;\n}\n.ga-card .ga-box .toolbar .selector {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  display: -webkit-box;\n  display: flex;\n}\n.ga-card .ga-box .toolbar .selector.hide {\n  opacity: 0;\n  visibility: hidden;\n  -webkit-transition: visibility opacity 0.2s;\n  transition: visibility opacity 0.2s;\n}\n.ga-card .ga-box .toolbar .selector.show {\n  opacity: 1;\n  visibility: visible;\n  -webkit-transition: visibility opacity 0.2s;\n  transition: visibility opacity 0.2s;\n}\n.ga-card .ga-box .toolbar .selector table {\n  margin-right: 1rem;\n}\n.ga-card .ga-box .toolbar .selector table tr td:last-child * {\n  display: block;\n  text-align: left;\n}\n.ga-card .ga-box .pie-charts {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  min-height: 200px;\n}\n.ga-card .ga-box .pie-charts .chart {\n  width: calc(100% - (3rem) / 4);\n}\n.ga-card .ga-box .pie-charts .chart.country, .ga-card .ga-box .pie-charts .chart.city, .ga-card .ga-box .pie-charts .chart.browser {\n  margin-right: 1rem;\n}\n.ga-card .ga-box .timeline {\n  min-height: 200px;\n}\n.shr-a-shr-fb {\n  z-index: 9999999;\n}"},Shlh:function(t,n,i){"use strict";i.d(n,"e",function(){return s}),i.d(n,"b",function(){return a}),i.d(n,"c",function(){return o}),i.d(n,"a",function(){return c}),i.d(n,"d",function(){return r});var e=i("gIcY");function s(t,n){n instanceof e.b&&Object.keys(n.controls).forEach(function(i){t[i]=n.controls[i]})}function a(t){var n=t.data,i=t.isSelect;if(n.length)return n.forEach(function(t){return t.selected=i}),t.selectedIds=i?n.map(function(t){return t._id}):[],t.selectedIds}function o(t){var n=t.data;return t.selectedIds=n.filter(function(t){return t.selected}).map(function(t){return t._id}),{selectedIds:t.selectedIds,all:t.selectedIds.length===n.length}}function c(t,n,i){if(t.touched||t.root.touched||t.dirty||t.root.dirty||i)return t.valid?"has-success":n||"has-error"}function r(t,n,i){t[n]=!0;var e=function(){return t[n]=!1};return i.then(e,e),i}},XXja:function(t,n){t.exports='<div class="row">\n  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">\n    <div class="row statistics">\n      <sa-card\n        *ngFor="let item of defaultStatistics" \n        class="statistics-item-container col-xlg-3 col-lg-3 col-md-6 col-sm-12 col-xs-12"\n      >\n        <div class="statistics-item">\n          <div class="description">\n            <h4>{{ item.description }}</h4>\n            <p class="description-stats">\n              {{ statistics[item.type] !== null ? statistics[item.type] : \'-\' }}\n            </p>\n          </div>\n          <i class="icon {{ item.icon }}"></i>\n        </div>\n      </sa-card>\n    </div>\n  </div>\n</div>\n<div class="row">\n  <sa-card \n    title="GA \u4eca\u65e5\u7edf\u8ba1"\n    baCardClass="ga-card with-scroll"\n    class="col-xlg-12 col-xl-12 col-lg-12 col-sm-12 col-xs-12"\n  >\n    <div class="ga-box">\n      <sa-loading-spider [show]="isLoadingGa"></sa-loading-spider>\n      <div class="toolbar">\n        <a\n          role="button"\n          class="btn btn-sm btn-success"\n          href="https://developers.google.com/analytics/devguides/reporting/embed/v1/"\n          target="_blank"\n        >Doc</a>\n        <a\n          role="button"\n          class="btn btn-sm btn-warning"\n          href="https://developers.google.com/analytics/devguides/reporting/embed/v1/core-methods-reference/"\n          target="_blank"\n        >API</a>\n        <a\n          role="button"\n          class="btn btn-sm btn-info"\n          href="https://ga-dev-tools.appspot.com/embed-api/"\n          target="_blank"\n        >Example</a>\n        <button\n          type="button"\n          class="btn btn-sm btn-default btn-icon"\n          (click)="isShowSelectView = !isShowSelectView"\n        >\n          <i class="ion-md-podium"></i>\n        </button>\n        <div\n          id="view-selector"\n          [class]="\'selector \' + (isShowSelectView ? \'show\' : \'hide\')"\n        >\n        </div>\n      </div>\n      <hr>\n      <div class="pie-charts">\n        <div id="pie-country" class="chart country"></div>\n        <div id="pie-city" class="chart city"></div>\n        <div id="pie-browser" class="chart browser"></div>\n        <div id="pie-os" class="chart os"></div>\n      </div>\n      <hr>\n      <div id="timeline" class="timeline"></div>\n    </div>\n  </sa-card>\n</div>\n'},"dU+k":function(t,n,i){"use strict";function e(){var t,n,i,e,s,a;t=window,n=document,i="script",(e=t.gapi||(t.gapi={})).analytics={q:[],ready:function(t){this.q.push(t)}},s=n.createElement(i),a=n.getElementsByTagName(i)[0],s.src="//apis.google.com/js/platform.js",a.parentNode.insertBefore(s,a),s.onload=function(){e.load("analytics")}}i.r(n),i.d(n,"loadScript",function(){return e})}}]);