__NUXT_JSONP__("/archive/cookie-with-javascript", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN){return {data:[{page:{title:"cookieとかを使ってjsで云々",description:"cookieとかを使ってJavaScriptでいろいろやってみる話",date:"2016-08-02T00:00:00.000Z",author:"yamanoku",toc:[{id:V,depth:G,text:V},{id:ao,depth:G,text:ap},{id:W,depth:G,text:W},{id:X,depth:G,text:X},{id:Y,depth:G,text:Y},{id:aq,depth:G,text:ar}],body:{type:"root",children:[{type:b,tag:r,props:{},children:[{type:a,value:"仕事とか実験で色々試してみたので雑まとめ。"}]},{type:a,value:f},{type:b,tag:H,props:{id:V},children:[{type:b,tag:D,props:{href:"#js-cookie%E4%BE%BF%E5%88%A9",ariaHidden:I,tabIndex:J},children:[{type:b,tag:c,props:{className:[K,L]},children:[]}]},{type:a,value:V}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:D,props:{href:as,rel:["noopener","noreferrer"],target:"_blank"},children:[{type:a,value:as}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"jsでのCookie処理が楽なので是非導入してみよう。以下はそれを使った処理になります。"}]},{type:a,value:f},{type:b,tag:H,props:{id:ao},children:[{type:b,tag:D,props:{href:"#%E3%83%9A%E3%83%BC%E3%82%B8%E5%9B%BA%E6%9C%89%E3%81%AEcookie%E3%82%92%E8%A8%98%E9%8C%B2%E3%81%97%E3%81%9F%E3%81%84",ariaHidden:I,tabIndex:J},children:[{type:b,tag:c,props:{className:[K,L]},children:[]}]},{type:a,value:ap}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:E,props:{},children:[{type:a,value:"http:\u002F\u002Fxxxxx.xxx\u002Fxxxxx\u002Fxxxx\u002F001\u002F"}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"みたいなアドレスがあったとき"}]},{type:a,value:f},{type:b,tag:P,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,T]},children:[{type:b,tag:E,props:{},children:[{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:"\u002F\u002F ページ番号"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:v}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aj}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:u}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,M,N]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,q,j,l]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'\u002F'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"3"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:"\u002F\u002F 全体パス"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:v}]},{type:a,value:at},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:u}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,M,N]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,q,j,l]},children:[{type:a,value:"replace"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"new"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:"RegExp"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"(?:\\\\\\\u002F+[^\\\\\\\u002F]*){0,1}$\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"\u002F\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,q,j,l]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:" path"},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:y}]},{type:a,value:at},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"ってやると「001」っていうCookieが残る。valueも同じ。"}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"path設定はそのページ特有のものになるので、２度目の訪問の時は変えるみたいな処理に使える（別に全ページ共通でもいいなら\"\u002F\"でもいいです）"}]},{type:a,value:f},{type:b,tag:H,props:{id:W},children:[{type:b,tag:D,props:{href:"#%E3%83%9A%E3%83%BC%E3%82%B8%E9%81%B7%E7%A7%BB%E3%81%97%E3%81%9F%E6%99%82%E3%81%AB%E9%AB%98%E3%81%95%E3%82%92%E4%BF%9D%E6%8C%81",ariaHidden:I,tabIndex:J},children:[{type:b,tag:c,props:{className:[K,L]},children:[]}]},{type:a,value:W}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"たとえばページのどこかで何かしらのボタンを押して同ページ内で読み込みがある際に、押したボタンの位置でまた再開して欲しいみたいなことがあったとするときの対応。"}]},{type:a,value:f},{type:b,tag:P,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,T]},children:[{type:b,tag:E,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'#btn'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,q,j,l]},children:[{type:a,value:"click"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:v}]},{type:a,value:" key "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:u}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'keep-position-'"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"+"}]},{type:b,tag:c,props:{className:[d,M,N]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:j}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,q,j,l]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,M,N]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,q,j,l]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,q,j,l]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"setTimeout"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:$}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,M,N]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,q,j,l]},children:[{type:a,value:av}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:$},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,q,j,l]},children:[{type:a,value:"cookie"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,q,j,l]},children:[{type:a,value:"remove"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"やってることは以下の通りです。"}]},{type:a,value:f},{type:b,tag:"ol",props:{},children:[{type:a,value:f},{type:b,tag:ad,props:{},children:[{type:a,value:"対象のボタンを押す"}]},{type:a,value:f},{type:b,tag:ad,props:{},children:[{type:a,value:"その際に現在のパスと現在表示しているウィンドウの位置を保存したCookie作成"}]},{type:a,value:f},{type:b,tag:ad,props:{},children:[{type:a,value:"再度読み込まれる時にそのCookieが保存してたウィンドウ位置を読み込んで移動"}]},{type:a,value:f},{type:b,tag:ad,props:{},children:[{type:a,value:"終わったら削除する"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:H,props:{id:X},children:[{type:b,tag:D,props:{href:"#%E3%83%91%E3%83%A9%E3%83%A1%E3%83%BC%E3%82%BF%E3%81%94%E3%81%A8%E3%81%A7%E3%81%AE%E5%88%A4%E5%AE%9A",ariaHidden:I,tabIndex:J},children:[{type:b,tag:c,props:{className:[K,L]},children:[]}]},{type:a,value:X}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"今回はパラメータの最後の部分（name）で判定するっていう場合のやつです。"}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:E,props:{},children:[{type:a,value:"http:\u002F\u002Fxxx.xxx\u002Fxxx\u002F?xxxx=xxxx&yyyy=yyyy&name=aaaa"}]}]},{type:a,value:f},{type:b,tag:P,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,T]},children:[{type:b,tag:E,props:{},children:[{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:"\u002F\u002F パラメータ取得"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:v}]},{type:a,value:" params "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:u}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:v}]},{type:a,value:" param "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:u}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,M,N]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"search"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,q,j,l]},children:[{type:a,value:"substring"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,q,j,l]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'&'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:v}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:u}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aA}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aD},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:"\n    params"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:u}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,q,j,l]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'='"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:v}]},{type:a,value:" target "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:u}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'name'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:v}]},{type:a,value:" value"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:v}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:u}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aA}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:aD},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"params"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"=="}]},{type:a,value:" target"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:"\n        value "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:u}]},{type:a,value:aF},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"switch"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"value"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:am}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:y}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,q,j,l]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'param1'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:am}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:y}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,q,j,l]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'param2'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:am}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aI}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:y}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,q,j,l]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'param3'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aI}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"判定箇所を絞ればわかりやすくCookieを保存してくれるはずです。"}]},{type:a,value:f},{type:b,tag:H,props:{id:Y},children:[{type:b,tag:D,props:{href:"#json%EF%BC%88%E9%85%8D%E5%88%97%EF%BC%89%E4%BD%BF%E3%81%86%E3%81%AE%E3%82%84%E3%82%8A%E3%81%9F%E3%81%84",ariaHidden:I,tabIndex:J},children:[{type:b,tag:c,props:{className:[K,L]},children:[]}]},{type:a,value:Y}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"js-cookieさんは使えるようにしている。有能。"}]},{type:a,value:f},{type:b,tag:P,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,T]},children:[{type:b,tag:E,props:{},children:[{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:v}]},{type:a,value:" obj "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:u}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:"\n    a "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:y}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'aaa'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"\n    b "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:y}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"'bbb'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"\n    c "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:y}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aJ}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,q,j,l]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,an,U]},children:[{type:a,value:aL}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,q,j,l]},children:[{type:a,value:"stringify"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"obj"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:v}]},{type:a,value:" read_obj "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:u}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,an,U]},children:[{type:a,value:aL}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,q,j,l]},children:[{type:a,value:"parse"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,q,j,l]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aK}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,aM,U]},children:[{type:a,value:aM}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,q,j,l]},children:[{type:a,value:"log"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"read_obj"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:P,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,T]},children:[{type:b,tag:E,props:{},children:[{type:b,tag:c,props:{className:[d,an,U]},children:[{type:a,value:"Object"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:" a "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:y}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"aaa\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:" b "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:y}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"bbb\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:" c "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:y}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:aJ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:H,props:{id:aq},children:[{type:b,tag:D,props:{href:"#%E4%BD%99%E8%AB%87-localstorage",ariaHidden:I,tabIndex:J},children:[{type:b,tag:c,props:{className:[K,L]},children:[]}]},{type:a,value:ar}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"本題からそれるけどCookieでの処理だとブラウザ消しても残るので、ブラウザを消した時点で消去されるSessionStorageが使えるLocalStorageはすごいって話になった。有効期限も特になく保存量がすごいけど、使い過ぎるとまずまず重くなってくるので大したことないものならCookieで十分かと。"}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fcookie-with-javascript",extension:".md",slug:"cookie-with-javascript",createdAt:aN,updatedAt:aN}}],fetch:[],mutations:[]}}("text","element","span","token","punctuation","\n","(",")"," ","function",".","property-access",";","operator","keyword","string","method","p",",","maybe-class-name","=","var","{","}",":","\n    ","Cookies","[","]","a","code","number",2,"h2","true",-1,"icon","icon-link","dom","variable","set","div","nuxt-content-highlight","pre","language-js","line-numbers","class-name","js-cookie便利","ページ遷移した時に高さを保持","パラメータごとでの判定","json（配列）使うのやりたい","window","location","$","\n  ","key","0","li"," i ","i","\n        ","break","comment","Num","pathname","split","case","known-class-name","ページ固有のcookieを記録したい","ページ固有のCookieを記録したい","余談-localstorage","余談 LocalStorage","https:\u002F\u002Fgithub.com\u002Fjs-cookie\u002Fjs-cookie"," p ","keepPosition","scrollTop","if","get","1","for","\u003C"," param","length"," i","++"," params","'aaaa'","'bbbb'","'cccc'","'ccc'","'json'","JSON","console","2020-06-17T14:25:55.828Z")));