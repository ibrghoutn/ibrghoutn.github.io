import{_ as h,a as p}from"./distance.101d251c.js";import{bD as y,az as o,X as s,a2 as n,W as c,D as l,aC as _,aA as v,Y as e,a3 as d,x}from"./index.21d10b27.js";import{_ as f}from"./_plugin-vue_export-helper.cdc0426e.js";import{F as b,_ as k}from"./RatingComponent.3ffb9585.js";const $=y("favourite",{state:()=>({favourites:[]}),actions:{addToFavourite(t){this.favourites.push(t)},removeFromFavourite(t){let a=this.favourites.indexOf(t);a>-1&&this.favourites.splice(a,1)},isFavorite(t){return this.favourites?this.favourites.indexOf(t)>-1:!1}}}),C="/me9sous/assets/livraison.6863122a.svg",F="/me9sous/assets/take_away.339e26bc.svg",S="/me9sous/assets/fire.371307d9.svg";const m=t=>(_("data-v-eb92b463"),t=t(),v(),t),T={class:"tw-flex tw-gap-4"},z={key:0},I=m(()=>e("img",{loading:"lazy",src:C,alt:"livraison"},null,-1)),L={key:1},R=m(()=>e("img",{loading:"lazy",src:F,alt:"take_away"},null,-1)),B={key:2,class:"btn-ouvert"},H=m(()=>e("img",{loading:"lazy",src:S,alt:"fire"},null,-1)),N={__name:"ExtraComponent",props:{take_away:Boolean,discount:Number,livraison:Boolean},setup(t){return(a,u)=>(o(),s("div",T,[t.livraison?(o(),s("span",z,[I,n(" Livraison ")])):c("",!0),t.take_away?(o(),s("span",L,[R,n(" Take away ")])):c("",!0),t.discount<0?(o(),s("button",B,[H,n(" "+l(t.discount)+" DHS ",1)])):c("",!0)]))}},D=f(N,[["__scopeId","data-v-eb92b463"]]);const g=t=>(_("data-v-5310fe6e"),t=t(),v(),t),E={class:"card-restaurant tw-grid tw-grid-cols-2"},M={class:"tw-relative"},O=["src"],V={class:"tw-relative tw-p-3 tw-flex tw-flex-col tw-gap-4"},j={key:0,class:"tw-absolute tw-top-3 tw-right-3 btn-ouvert"},A=["innerHTML"],K={class:"tw-flex tw-gap-4"},W=g(()=>e("img",{loading:"lazy",src:h,alt:"location"},null,-1)),X=g(()=>e("img",{loading:"lazy",src:p,alt:"distance"},null,-1)),Y=["innerHTML"],q={class:"tw-flex"},G={__name:"RestaurantCardComponent",props:{recommendation:Object},setup(t){const a=$(),u=i=>{a.isFavorite(i)?a.removeFromFavourite(i):a.addToFavourite(i)};return(i,r)=>(o(),s("div",E,[e("div",M,[d(b,{class:"tw-absolute tw-top-1 tw-left-1",favorite:x(a).isFavorite(t.recommendation),onClick:r[0]||(r[0]=w=>u(t.recommendation))},null,8,["favorite"]),e("img",{loading:"lazy",src:t.recommendation.image,class:"img-responsive",alt:"recommendation.image"},null,8,O)]),e("div",V,[t.recommendation.open?(o(),s("button",j,"Ouvert")):c("",!0),e("h3",{class:"tw-cursor-pointer",onClick:r[1]||(r[1]=w=>i.$router.push({name:"Landing.Restaurant",params:{id:t.recommendation.id}})),innerHTML:t.recommendation.title},null,8,A),e("div",K,[e("small",null,[W,n(" "+l(t.recommendation.adresse),1)]),e("small",null,[X,n(" "+l(t.recommendation.distance)+" Km ",1)])]),e("p",{innerHTML:t.recommendation.content},null,8,Y),e("div",q,[d(k,{rating:t.recommendation.rating},null,8,["rating"]),n(" "+l(t.recommendation.totalReviews),1)]),d(D,{take_away:t.recommendation.take_away,livraison:t.recommendation.livraison,discount:t.recommendation.discount},null,8,["take_away","livraison","discount"])])]))}},Z=f(G,[["__scopeId","data-v-5310fe6e"]]);export{Z as R,$ as u};
