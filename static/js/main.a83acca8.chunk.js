(this.webpackJsonpcovidbihar=this.webpackJsonpcovidbihar||[]).push([[0],{141:function(e,a,t){e.exports=t.p+"static/media/advice1.8f95c346.png"},142:function(e,a,t){e.exports=t.p+"static/media/advice2.7bca717f.png"},143:function(e,a,t){e.exports=t.p+"static/media/advice3.3fd044dc.png"},144:function(e,a,t){e.exports=t.p+"static/media/advice4.00f14d54.png"},146:function(e,a,t){e.exports=t.p+"static/media/keepdistance.803bbb3d.jpg"},147:function(e,a,t){e.exports=t.p+"static/media/handWash.4e7b8f82.jpg"},148:function(e,a,t){e.exports=t.p+"static/media/avoidface.953ec974.jpg"},149:function(e,a,t){e.exports=t.p+"static/media/smokee.00c50695.jpg"},150:function(e,a,t){e.exports=t.p+"static/media/cough.6633d701.png"},151:function(e,a,t){e.exports=t.p+"static/media/breath.df0652a2.png"},152:function(e,a,t){e.exports=t.p+"static/media/fever.a9ec9ded.png"},162:function(e,a,t){e.exports=t(296)},167:function(e,a,t){},169:function(e,a,t){},289:function(e,a){},296:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(46),l=t.n(o),s=(t(167),t(168),t(169),t(35)),i=t(10),c=t(309),m=t(308),d=t(25),u=t.n(d),h=t(59),p=t(19),f=t(60),v=t.n(f),E={"01":"Jan","02":"Feb","03":"Mar","04":"Apr","05":"May","06":"Jun","07":"Jul","08":"Aug","09":"Sep",10:"Oct",11:"Nov",12:"Dec"},g=function(e){var a=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginTop:"10px",textAlign:"center",fontWeight:700}},r.a.createElement("div",{className:"text-warning",style:{fontSize:"14px"}},r.a.createElement("span",null,"Last Update:"," ",isNaN(Date.parse(function(e){var a=e.slice(0,2),t=e.slice(3,5),n=e.slice(6,10),r=e.slice(11);return"".concat(n,"-").concat(t,"-").concat(a,"T").concat(r,"+05:30")}(a)))?"":function(e){var a=e.slice(0,2),t=e.slice(3,5),n=e.slice(11);return"".concat(a," ").concat(E[t],", ").concat(n.slice(0,5)," IST")}(a)))))},b=t(36),y=t.n(b),w=t(9),C=t.n(w),N=function(e){var a=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:C.a.container},r.a.createElement("div",{className:C.a.counter},r.a.createElement("div",{className:C.a.confirm},r.a.createElement("h5",{className:C.a.confirm_name},"Confirmed"),r.a.createElement("h4",{className:C.a.h4},"[ +",r.a.createElement(y.a,{start:0,end:parseInt(a.deltaConfirm),duration:3,delay:1,separator:","})," ","]"),r.a.createElement("h1",{className:C.a.h1},r.a.createElement(y.a,{start:0,end:parseInt(a.confirm),duration:2,delay:1,separator:","})))),r.a.createElement("div",{className:C.a.counter},r.a.createElement("div",{className:C.a.active},r.a.createElement("h5",{className:C.a.active_name},"Active"),r.a.createElement("h4",{className:C.a.h4},"\xa0"),r.a.createElement("h1",{className:C.a.h1},r.a.createElement(y.a,{start:0,end:parseInt(a.active),duration:2,delay:1,separator:","})))),r.a.createElement("div",{className:C.a.counter},r.a.createElement("div",{className:C.a.recover},r.a.createElement("h5",{className:C.a.recover_name},"Recovered"),r.a.createElement("h4",{className:C.a.h4},"[ +",r.a.createElement(y.a,{start:0,end:parseInt(a.deltaRecovered),duration:3,delay:1.5,separator:","})," ","]"),r.a.createElement("h1",{className:C.a.h1},r.a.createElement(y.a,{start:0,end:parseInt(a.recovered),duration:2,delay:.8,separator:","})))),r.a.createElement("div",{className:C.a.counter},r.a.createElement("div",{className:C.a.deaths},r.a.createElement("h5",{className:C.a.deaths_name},"Deaths"),r.a.createElement("h4",{className:C.a.h4},"[ +",r.a.createElement(y.a,{start:0,end:parseInt(a.deltaDeaths),duration:3,delay:1.5,separator:","})," ","]"),r.a.createElement("h1",{className:C.a.h1},r.a.createElement(y.a,{start:0,end:parseInt(a.deaths),duration:2,delay:1.5,separator:","}))))))},x=t(61),k=t(4),_=t.n(k),O=function(e){var a=e.data;return r.a.createElement("div",null,r.a.createElement("span",{className:"mr-2 text-danger"},a.delta.recovered?r.a.createElement("span",{className:"fa fa-arrow-up",style:{fontSize:"12px",fontWeight:"600"}}," ".concat(a.delta.recovered)):""),r.a.createElement("span",null,a.recovered?a.recovered:"-"))},D=function(e){var a=e.data;return r.a.createElement("div",null,r.a.createElement("span",{className:"mr-2 text-danger"},a.delta.deceased?r.a.createElement("span",{className:"fa fa-arrow-up",style:{fontSize:"12px",fontWeight:"600"}}," ".concat(a.delta.deceased)):""),r.a.createElement("span",null,a.deceased?a.deceased:"-"))},S=function(e){var a=e.data;return r.a.createElement("div",null,r.a.createElement("span",{className:"mr-2 text-danger"},a.delta.confirmed?r.a.createElement("i",{className:"fa fa-arrow-up",style:{fontSize:"12px",fontWeight:"600"}}," ".concat(a.delta.confirmed)):""),r.a.createElement("span",{className:""},a.confirmed?a.confirmed:"-"))},T=function(e){var a=e.data;return r.a.createElement("div",null,r.a.createElement("span",{className:"mr-2 text-primary"},a.delta.active?r.a.createElement("span",{className:"fa fa-arrow-up",style:{fontSize:"12px",fontWeight:"600"}}," ".concat(a.delta.active)):""),r.a.createElement("span",null,a.active?a.active:"-"))},I=t(50),B=t.n(I),R=function(e){var a=e.data,t=Object(n.useMemo)((function(){return[{Header:r.a.createElement("span",{className:"text-secondary"},"District"),accessor:"district"},{Header:r.a.createElement("span",{className:"text-danger"},"Cnfrmd"),id:1,accessor:function(e){return r.a.createElement(S,{data:e})}},{Header:r.a.createElement("span",{className:"text-primary"},"Actv"),id:2,accessor:function(e){return r.a.createElement(T,{data:e})}},{Header:r.a.createElement("span",{className:"text-success"},"Rcvrd"),id:3,accessor:function(e){return r.a.createElement(O,{data:e})}},{Header:r.a.createElement("span",{className:"text-secondary"},"Deaths"),id:4,accessor:function(e){return r.a.createElement(D,{data:e})}}]}),[]),o=Object(x.useTable)({columns:t,data:a,initialState:{pageIndex:0},manualPagination:!1},x.useFilters,x.useSortBy,x.usePagination),l=o.getTableProps,s=o.getTableBodyProps,i=o.headerGroups,c=o.prepareRow,m=o.page,d=o.canPreviousPage,u=o.canNextPage,h=o.pageOptions,f=o.pageCount,v=o.gotoPage,E=o.nextPage,g=o.previousPage,b=o.setPageSize,y=o.setFilter,w=o.state,C=w.pageIndex,N=w.pageSize,k=Object(n.useState)(""),I=Object(p.a)(k,2),R=I[0],A=I[1];return r.a.createElement("div",{className:_()(B.a.myContainer,"mb-3")},r.a.createElement("form",{className:_()(B.a.inputIcons,"m-3")},r.a.createElement("i",{className:_()("fa fa-search",B.a.icon)}),r.a.createElement("input",{className:_()("form-control",B.a.inputField),value:R,onChange:function(e){var a=e.target.value||void 0;y("district",a),A(a)},placeholder:"Search District"})),r.a.createElement("div",{className:"table-responsive-sm"},r.a.createElement("table",Object.assign({},l(),{className:_()("table table-striped table-sm",B.a.table)}),r.a.createElement("thead",null,i.map((function(e){return r.a.createElement("tr",Object.assign({},e.getHeaderGroupProps(),{className:"table-light"}),e.headers.map((function(e){return r.a.createElement("th",Object.assign({},e.getHeaderProps(e.getSortByToggleProps()),{style:{fontSize:"14px"}}),e.render("Header"),r.a.createElement("span",null,e.isSorted?e.isSortedDesc?"\u25bc":"\u25b2":""))})))}))),r.a.createElement("tbody",s(),m.map((function(e,a){return c(e),r.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return r.a.createElement("td",e.getCellProps(),e.render("Cell"))})))}))))),r.a.createElement("div",{className:"conatiner"},r.a.createElement("div",{className:"d-flex flex-row"},r.a.createElement("div",{className:"Page navigation d-flex justify-content-between ml-2"},r.a.createElement("ul",{className:"pagination"},r.a.createElement("li",null,r.a.createElement("button",{className:"page-item page-link",onClick:function(){return v(0)},disabled:!d},"<<")),r.a.createElement("li",null,r.a.createElement("button",{className:"page-item page-link",onClick:function(){return g()},disabled:!d},"<")),r.a.createElement("li",null,r.a.createElement("button",{className:"page-item page-link",onClick:function(){return E()},disabled:!u},">")),r.a.createElement("li",null,r.a.createElement("button",{className:"page-item page-link",onClick:function(){return v(f-1)},disabled:!u},">>")," "))),r.a.createElement("form",{className:"form-group d-flex justify-content-between ml-2"},r.a.createElement("input",{className:"form-control",placeholder:"Go ".concat(C+1," to ").concat(h.length),type:"number",onChange:function(e){var a=e.target.value?Number(e.target.value)-1:0;v(a)}}),r.a.createElement("select",{className:"custom-select mx-2",value:N,onChange:function(e){b(Number(e.target.value))}},[10,20,30,40].map((function(e){return r.a.createElement("option",{key:e,value:e},"Show no. of district - ",e)})))))))},A=t(69),j=function(e){var a={labels:e.date,datasets:[{label:"Confirmed",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"#ff073a",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#ff073a",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#ff073a",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:e.confirm},{label:"Recovered",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"#28a745",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#28a745",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#28a745",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:e.recover},{label:"Deaths",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"#6c757d",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"#6c757d",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"#6c757d",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:e.deaths}]};return r.a.createElement("div",{className:"myContainer"},r.a.createElement(A.b,{data:a,height:400,options:{title:{display:!0,text:"Daily Cases",fontSize:20},maintainAspectRatio:!1,legend:{display:!0,position:"top"}}}))},W=function(e){var a=e.confirm,t=e.recover,n=e.deaths,o={labels:e.date,datasets:r.a.useMemo((function(){return[{label:"Confirmed",backgroundColor:"rgb(255, 7, 58, 0.7)",data:a},{label:"Recovered",backgroundColor:"rgb(40, 167, 69, 0.7)",data:t},{label:"Deaths",backgroundColor:"#6c757d",data:n}]}),[a,t,n])};return r.a.createElement("div",{className:"myContainer mt-4"},r.a.createElement(A.a,{data:o,height:250,options:{title:{display:!0,text:"Trend Last 10 Days",fontSize:20},tooltips:{mode:"index",intersect:!0},legend:{display:!0,position:"top"},responsive:!0,scales:{yAxes:[{stacked:!0,display:!0,gridLines:{display:!0}}],xAxes:[{stacked:!0,gridLines:{display:!1}}]}}}))},H=function(e){for(var a=e.data,t=[],n=[],o=[],l=[],s=0;s<a.length;s++)"Confirmed"===a[s].status&&(n.push(a[s].br),t.push(a[s].date)),"Recovered"===a[s].status&&o.push(a[s].br),"Deceased"===a[s].status&&l.push(a[s].br);var i=t.slice(Math.max(t.length-10,0)),c=n.slice(Math.max(n.length-10,0)),m=o.slice(Math.max(o.length-10,0)),d=l.slice(Math.max(l.length-10,0));return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{date:t,confirm:n,recover:o,deaths:l}),r.a.createElement(W,{date:i,confirm:c,recover:m,deaths:d}))},V=t(157),P=function(e){var a=e.word,t=e.zone;return r.a.createElement("div",{className:_()("myContainer")},r.a.createElement("div",{className:"card my-5 mx-1"},r.a.createElement("div",{className:"card-header"},"Colorwise Zone"),r.a.createElement("div",{className:"card-body"},r.a.createElement(V.a,{words:a,options:{enableTooltip:!0,deterministic:!0,fontFamily:"impact",fontSizes:[15,60],fontStyle:"normal",fontWeight:"bold",randomSeed:null,rotations:3,rotationAngles:[0,90],scale:"sqrt",spiral:"archimedean",transitionDuration:1e3},callbacks:{getWordTooltip:function(e){var a=e.value;return"Confirmed Cases: ".concat(a)},getWordColor:function(e){return function(e){for(var a=0;a<t.length;a++)if(t[a].district===e)return t[a].zone}(e.text)}}}))))},z=t(95),F=t.n(z),L=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:_()(F.a.outer)},r.a.createElement("div",{className:_()(F.a.inner)},r.a.createElement("h3",null,"Loading..."))))},M=t(303),Q=t(304),J=t(305),q=function(){return r.a.createElement(M.a,null,r.a.createElement(Q.a,null,r.a.createElement(J.a,{className:"text-center footer"},r.a.createElement("p",{className:"mb-0 text-muted"},"CREATED BY"," ",r.a.createElement("a",{href:"https://www.linkedin.com/in/arrbxr",target:"blank"},"ABHISHEK RAJ RAVI")),r.a.createElement("p",{className:"text-muted"},"Data Source: "," ",r.a.createElement("a",{href:"https://www.covid19india.org/",target:"blank",className:"text-muted"},"Covid19India")))))},U=function(){var e=Object(n.useState)({confirm:0,active:0,deaths:0,recovered:0,deltaConfirm:0,deltaDeaths:0,deltaRecovered:0,lastupdatetime:"",loading:!1}),a=Object(p.a)(e,2),t=a[0],o=a[1];Object(n.useEffect)((function(){(function(){var e=Object(h.a)(u.a.mark((function e(){var a,t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()("https://api.covid19india.org/data.json");case 2:a=e.sent,t=a.data.statewise.filter((function(e){return"Bihar"===e.state})),n=t[0],o({confirm:n.confirmed,active:n.active,deaths:n.deaths,recovered:n.recovered,deltaConfirm:n.deltaconfirmed,deltaRecovered:n.deltarecovered,deltaDeaths:n.deltadeaths,lastupdatetime:n.lastupdatedtime,loading:!0});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var l=Object(n.useState)({dData:[],loading:!1,word:[]}),s=Object(p.a)(l,2),i=s[0],c=s[1];Object(n.useEffect)((function(){(function(){var e=Object(h.a)(u.a.mark((function e(){var a,t,n,r,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()("https://api.covid19india.org/v2/state_district_wise.json");case 2:for(a=e.sent,t=a.data.filter((function(e){return"Bihar"===e.state})),n=t[0].districtData,r=[],o=0;o<n.length;o++)r.push({text:n[o].district,value:n[o].confirmed});c({dData:t[0].districtData,loading:!0,word:r});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var m=Object(n.useState)({daily:{},loading:!1}),d=Object(p.a)(m,2),f=d[0],E=d[1];Object(n.useEffect)((function(){(function(){var e=Object(h.a)(u.a.mark((function e(){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()("https://api.covid19india.org/states_daily.json");case 2:a=e.sent,E({daily:a.data.states_daily,loading:!0});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var b=Object(n.useState)({zone:[],loading:!1}),y=Object(p.a)(b,2),w=y[0],C=y[1];return Object(n.useEffect)((function(){(function(){var e=Object(h.a)(u.a.mark((function e(){var a,t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v()("https://api.covid19india.org/zones.json");case 2:a=e.sent,t=a.data.zones.filter((function(e){return"BR"===e.statecode})),C({zone:t,loading:!0});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),i.loading&&f.loading&&t.loading?r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{data:t.lastupdatetime}),r.a.createElement(N,{data:t,dailyData:f.daily}),r.a.createElement(R,{data:i.dData}),r.a.createElement(H,{data:f.daily}),r.a.createElement(P,{word:i.word,zone:w.zone}),r.a.createElement(q,null)):r.a.createElement(L,null)},K=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,null,r.a.createElement(Q.a,null,r.a.createElement(J.a,{className:"text-center mt-4 mb-3"},r.a.createElement("h3",{className:"mb-0"},"COMMON "),r.a.createElement("h3",null,"QUESTION & ANSWER")))),r.a.createElement(M.a,null,r.a.createElement(Q.a,null,r.a.createElement(J.a,null,r.a.createElement("h5",null,"Q1. What is a novel coronavirus?"),r.a.createElement("p",null,"On February 11, 2020 the World Health Organization announced an official name for the disease that is causing the 2019 novel coronavirus outbreak, first identified in Wuhan China. The new name of this disease is coronavirus disease 2019, abbreviated as COVID-19. In COVID-19, \u2018CO\u02bc stands for \u2018corona,\u02bc \u2018VI\u02bc for \u2018virus,\u02bc and \u2018D\u02bc for disease. Formerly, this disease was referred to as \u201c2019 novel coronavirus\u201d or \u201c2019-nCoV\u201d. A novel coronavirus is a new coronavirus that has not been previously identified. The virus causing coronavirus disease 2019 (COVID-19), and cause mild illness, like the common cold."),r.a.createElement("h5",null,"Q2. What is the source of the virus?"),r.a.createElement("p",null,"Coronaviruses are a large family of viruses. Some cause illness in people, and others, such as canine and feline coronaviruses, only infect animals. Rarely, animal coronaviruses that infect animals have emerged to infect people and can spread between people. This is suspected to have occurred for the virus that causes COVID-19. Middle East Respiratory Syndrome (MERS) and Severe Acute Respiratory Syndrome (SARS) are two other examples of coronaviruses that originated from animals and then spread to people. More information about the source and spread of COVID-19 is available on the Austrlain Govt Heath Website."),r.a.createElement("h5",null,"Q3. How does the virus spread?"),r.a.createElement("p",null,"This virus was first detected in Wuhan City, Hubei Province, China. The first infections were linked to a live animal market, but the virus is now spreading from person-to-person. It\u02bcs important to note that person-to-person spread can happen on a continuum. Some viruses are highly contagious (like measles), while other viruses are less so.The virus that causes COVID-19 seems to be spreading easily and sustainably in the community (\u201ccommunity spread\u201d) in some affected geographic areas. Community spread means people have been infected with the virus in an area, including some who are not sure how or where they became infected."),r.a.createElement("h5",null,"Q4. Can someone who has had COVID-19 spread the illness to others?"),r.a.createElement("p",null,"The virus that causes COVID-19 is spreading person-to-person. Someone who is actively sick with COVID-19 can spread the illness to others. That is why Australian Govt recommends that these patients be isolated either in the hospital or at home Please visit the link for more Information about isolation"," ",r.a.createElement("a",{href:"https://www.health.gov.au/news/health-alerts/novel-coronavirus-2019-ncov-health-alert/how-to-protect-yourself-and-others-from-coronavirus-covid-19/self-isolation-self-quarantine-for-coronavirus-covid-19",target:"_balck"},"Link")," ","(depending on how sick they are) until they are better and no longer pose a risk of infecting others."),r.a.createElement("h5",null,"Q5. Will warm weather stop the outbreak of COVID-19?"),r.a.createElement("p",null,"It is not yet known whether weather and temperature impact the spread of COVID-19. Some other viruses, like the common cold and flu, spread more during cold weather months but that does not mean it is impossible to become sick with these viruses during other months. At this time, it is not known whether the spread of COVID-19 will decrease when weather becomes warmer. There is much more to learn about the transmissibility, severity, and other features associated with COVID-19 and investigations are ongoing."),r.a.createElement("h5",null,"Q6. What is community spread?"),r.a.createElement("p",null,"Community spread means people have been infected with the virus in an area, including some who are not sure how or where they became infected."),r.a.createElement("h5",null,"Q7. COVID-19 virus can be transmitted in areas with hot and humid climates?"),r.a.createElement("p",null,"From the evidence so far, the COVID-19 virus can be transmitted in ALL AREAS, including areas with hot and humid weather. Regardless of climate, adopt protective measures if you live in, or travel to an area reporting COVID-19. The best way to protect yourself against COVID-19 is by frequently cleaning your hands. By doing this you eliminate viruses that may be on your hands and avoid infection that could occur by then touching your eyes, mouth, and nose."),r.a.createElement("h5",null,"Q8. Cold weather and snow CANNOT kill the new coronavirus"),r.a.createElement("p",null,"There is no reason to believe that cold weather can kill the new coronavirus or other diseases. The normal human body temperature remains around 36.5\xb0C to 37\xb0C, regardless of the external temperature or weather. The most effective way to protect yourself against the new coronavirus is by frequently cleaning your hands with alcohol-based hand rub or washing them with soap and water."),r.a.createElement("h5",null,"Q9. Can an ultraviolet disinfection lamp kill the new coronavirus?"),r.a.createElement("p",null,"UV lamps should not be used to sterilize hands or other areas of skin as UV radiation can cause skin irritation."),r.a.createElement("h5",null,"Q10. Do vaccines against pneumonia protect you against the new coronavirus?"," "),r.a.createElement("p",null,"No. Vaccines against pneumonia, such as pneumococcal vaccine and Haemophilus influenza type B (Hib) vaccine, do not provide protection against the new coronavirus. The virus is so new and different that it needs its own vaccine. Researchers are trying to develop a vaccine against 2019-nCoV, and WHO is supporting their efforts. Although these vaccines are not effective against 2019-nCoV, vaccination against respiratory illnesses is highly recommended to protect your health.")))),r.a.createElement(q,null))},G=t(307),Y=t(311),Z=t(310),$=t(306),X=t(141),ee=t.n(X),ae=t(142),te=t.n(ae),ne=t(143),re=t.n(ne),oe=t(144),le=t.n(oe),se=function(){return r.a.createElement(M.a,null,r.a.createElement(Q.a,null,r.a.createElement(J.a,null,r.a.createElement(Z.a,{variant:"success mb-0 mt-3"},"Protect yourself and others from getting sick"))),r.a.createElement(Q.a,null,r.a.createElement(J.a,{sm:6,className:"mt-3"},r.a.createElement($.a,{src:ee.a,rounded:!0,fluid:!0})),r.a.createElement(J.a,{sm:6,className:"mt-3"},r.a.createElement($.a,{src:te.a,rounded:!0,fluid:!0})),r.a.createElement(J.a,{sm:6,className:"mt-3"},r.a.createElement($.a,{src:re.a,rounded:!0,fluid:!0})),r.a.createElement(J.a,{sm:6,className:"mt-3 mb-4"},r.a.createElement($.a,{src:le.a,rounded:!0,fluid:!0}))))},ie=t(146),ce=t.n(ie),me=t(147),de=t.n(me),ue=t(148),he=t.n(ue),pe=t(149),fe=t.n(pe),ve=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,null,r.a.createElement(G.a,{className:"mt-3"},r.a.createElement("h4",null,"PREVENTION & ADVICE"),r.a.createElement("p",null,"There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19). ",r.a.createElement("span",{className:"text-primary"},"The best way to prevent illness is to avoid being exposed to this virus.")," Stay aware of the latest information on the COVID-19 outbreak, available on the WHO website and through your national and local public health authority")),r.a.createElement(Q.a,null,r.a.createElement(J.a,{lg:3,sm:6,className:"mb-4 my-sm-0"},r.a.createElement(Y.a,null,r.a.createElement(Y.a.Img,{variant:"top",src:de.a,alt:"loho"}),r.a.createElement(Y.a.Body,null,r.a.createElement(Y.a.Title,null,"Wash your hands frequently"),r.a.createElement(Y.a.Text,null,"Wash your hands regularly with soap and water, or clean them with alcohol-based hand rub.")))),r.a.createElement(J.a,{lg:3,sm:6},r.a.createElement(Y.a,null,r.a.createElement(Y.a.Img,{variant:"top",src:he.a}),r.a.createElement(Y.a.Body,null,r.a.createElement(Y.a.Title,null,"Avoid touching your face."),r.a.createElement(Y.a.Text,null,"Do not touch your eyes, nose or mouth if your hands are not clean. Cover your mouth and nose when coughing or sneezing.")))),r.a.createElement(J.a,{lg:3,sm:6,className:"my-4 my-sm-0"},r.a.createElement(Y.a,null,r.a.createElement(Y.a.Img,{variant:"top",src:fe.a}),r.a.createElement(Y.a.Body,null,r.a.createElement(Y.a.Title,null,"Avoid Smoking"),r.a.createElement(Y.a.Text,null,"Refrain from smoking and other activities that weaken the lungs.")))),r.a.createElement(J.a,{lg:3,sm:6,className:"mb-4 mb-sm-0"},r.a.createElement(Y.a,null,r.a.createElement(Y.a.Img,{variant:"top",src:ce.a}),r.a.createElement(Y.a.Body,null,r.a.createElement(Y.a.Title,null,"Keep in Distance"),r.a.createElement(Y.a.Text,null,"Practice physical distancing by avoiding unnecessary travel and staying away from large groups of people."))))),r.a.createElement(Q.a,null,r.a.createElement(se,null))),r.a.createElement(q,null))},Ee=t(150),ge=t.n(Ee),be=t(151),ye=t.n(be),we=t(152),Ce=t.n(we),Ne=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,null,r.a.createElement(G.a,{className:"mt-3"},r.a.createElement("h4",null,"SYMPTOMS OF CORONAVIRUS"),r.a.createElement("p",null,"The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These symptoms are usually mild and begin gradually. Also the symptoms may appear 2-14 days after exposure.")),r.a.createElement(Q.a,null,r.a.createElement(J.a,{sm:4,className:"mb-sm-0"},r.a.createElement(Y.a,null,r.a.createElement(Y.a.Img,{variant:"bottom",src:Ce.a}),r.a.createElement(Y.a.Body,null,r.a.createElement(Y.a.Title,null,"High Fever"),r.a.createElement(Y.a.Text,null,"This means you feel hot to touch on your chest or back (you do not need to measure your temperature). It is a common sign & also may appear in 2-10 days if affected.")))),r.a.createElement(J.a,{sm:4,className:"my-4 my-sm-0"},r.a.createElement(Y.a,null,r.a.createElement(Y.a.Img,{variant:"top",src:ge.a}),r.a.createElement(Y.a.Body,null,r.a.createElement(Y.a.Title,null,"Continuous cough"),r.a.createElement(Y.a.Text,null,"This means coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours (if you usually have a cough, it may be worse than usual).")))),r.a.createElement(J.a,{sm:4,className:"mb-5"},r.a.createElement(Y.a,null,r.a.createElement(Y.a.Img,{variant:"top",src:ye.a}),r.a.createElement(Y.a.Body,null,r.a.createElement(Y.a.Title,null,"Difficulty breathing"),r.a.createElement(Y.a.Text,null,"Around 1 out of every 6 people who gets COVID-19 becomes seriously ill and develops difficulty breathing or shortness of breath.")))))),r.a.createElement(q,null))},xe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{sticky:"top",className:"px-xl-5",collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light"},r.a.createElement(c.a.Brand,{as:s.b,to:"/",style:{fontSize:"28px",fontFamily:"'Teko', sans-serif"},className:"text-info"},"Covid19Bihar"),r.a.createElement(c.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(c.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(m.a,null,r.a.createElement(m.a.Link,{eventKey:1,as:s.b,to:"/"},"Home"),r.a.createElement(m.a.Link,{eventKey:4,as:s.b,to:"/symptoms"},"Symptoms"),r.a.createElement(m.a.Link,{eventKey:5,as:s.b,to:"/prevention"},"Prevention"),r.a.createElement(m.a.Link,{eventKey:6,as:s.b,to:"/faq"},"Faq")))),r.a.createElement(i.d,null,r.a.createElement(i.b,{exact:!0,path:"/faq"},r.a.createElement(K,null)),r.a.createElement(i.b,{exact:!0,path:"/symptoms"},r.a.createElement(Ne,null)),r.a.createElement(i.b,{exact:!0,path:"/prevention"},r.a.createElement(ve,null)),r.a.createElement(i.b,{exact:!0,path:"/"},r.a.createElement(U,null)),r.a.createElement(i.b,null,r.a.createElement(i.a,{to:"/",path:"/"}))))},ke=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _e(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(s.a,null,r.a.createElement(xe,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var a="".concat("","/service-worker.js");ke?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_e(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):_e(a,e)}))}}()},50:function(e,a,t){e.exports={searchBar:"TableData_searchBar__JoKQ3",myContainer:"TableData_myContainer__hAeja",inputIcons:"TableData_inputIcons__2-G7e",icon:"TableData_icon__VL712",inputField:"TableData_inputField__n2iQs"}},9:function(e,a,t){e.exports={container:"Counter_container__2NgeY",h4:"Counter_h4__28N6x",h1:"Counter_h1__5gepS",confirm:"Counter_confirm__8Lzl3",active:"Counter_active__1DrFV",recover:"Counter_recover__2AT3l",deaths:"Counter_deaths__2fvnM",confirm_name:"Counter_confirm_name__3mw38",active_name:"Counter_active_name__3WFtj",recover_name:"Counter_recover_name__36g48",deaths_name:"Counter_deaths_name__1M8Jc"}},95:function(e,a,t){e.exports={outer:"PreLoder_outer__3A2fO",inner:"PreLoder_inner__3HPCc"}}},[[162,1,2]]]);
//# sourceMappingURL=main.a83acca8.chunk.js.map