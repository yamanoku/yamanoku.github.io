__NUXT_JSONP__("/archive/set-image-storybook-css", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF){return {data:[{page:{title:"StorybookでCSSに画像を指定をしたい時",description:"storybook CSS package.json",date:"2017-08-30T00:00:00.000Z",author:"yamanoku",toc:[{id:E,depth:2,text:E},{id:F,depth:P,text:F},{id:G,depth:P,text:G},{id:$,depth:P,text:aa}],body:{type:"root",children:[{type:b,tag:j,props:{},children:[{type:a,value:"小ネタ。"}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"CSSでの画像指定の仕方がイマイチわからずwebpack上でなんとかするのかと思っていました。"}]},{type:a,value:f},{type:b,tag:"h2",props:{id:E},children:[{type:b,tag:i,props:{href:"#%E8%A7%A3%E6%B1%BA%E6%B3%95",ariaHidden:n,tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:E}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"単純に"},{type:b,tag:"strong",props:{},children:[{type:a,value:"「静的ディレクトリから参照してくる」"}]},{type:a,value:"というのを設定してあげればいいだけの話でした。"}]},{type:a,value:f},{type:b,tag:Q,props:{id:F},children:[{type:b,tag:i,props:{href:"#%E6%8C%87%E5%AE%9A%E6%96%B9%E6%B3%95",ariaHidden:n,tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:F}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{href:ab,rel:[z,A],target:B},children:[{type:a,value:ab}]}]},{type:a,value:f},{type:b,tag:"blockquote",props:{},children:[{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"storybook also has a way to mention static directories via the -s option of the start-storybook and build-storybook commands."}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:k,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,"language-bash"]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"-s "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:"static directories"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:b,tag:l,props:{},children:[{type:a,value:"-s"}]},{type:a,value:"オプションを追加して指定の静的ディレクトリを指定してあげるだけ。ね、簡単でしょ。"}]},{type:a,value:f},{type:b,tag:R,props:{id:"dist-がoutput先だとしている場合"},children:[{type:b,tag:i,props:{href:"#dist-%E3%81%8Coutput%E5%85%88%E3%81%A0%E3%81%A8%E3%81%97%E3%81%A6%E3%81%84%E3%82%8B%E5%A0%B4%E5%90%88",ariaHidden:n,tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:b,tag:l,props:{},children:[{type:a,value:".\u002Fdist"}]},{type:a,value:" がoutput先だとしている場合"}]},{type:a,value:f},{type:b,tag:k,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,"language-json"]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"\"scripts\""}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:"\n   "},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"\"storybook\""}]},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"\"start-storybook -p 6006 -s .\u002Fdist\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"こんな感じになります。"}]},{type:a,value:f},{type:b,tag:Q,props:{id:G},children:[{type:b,tag:i,props:{href:"#%E5%8B%95%E3%81%8B%E3%81%97%E3%81%A6%E3%81%BF%E3%82%8B",ariaHidden:n,tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:G}]},{type:a,value:f},{type:b,tag:k,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,ac]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"yarn storybook\n"}]}]}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"動かしてみて、以下ルートのディレクトリから画像を取得すると想定します。"}]},{type:a,value:f},{type:b,tag:k,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,ac]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"dist\u002F\n└── img\u002F\n    └── ic-arrow_right.png  \u003C これ\n"}]}]}]},{type:a,value:f},{type:b,tag:R,props:{id:ad},children:[{type:b,tag:i,props:{href:"#%E3%82%B3%E3%83%BC%E3%83%89%E4%BE%8B",ariaHidden:n,tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:ad}]},{type:a,value:f},{type:b,tag:k,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,ae]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:af}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:ag}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ah}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:K}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aj}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:al}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:T}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:am}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:an}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ao}]},{type:a,value:ap}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ar}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,X]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]}]},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:"画像が見れる"}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:av}]},{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:L}]}]}]},{type:a,value:f},{type:b,tag:k,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,"language-css"]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,"selector"]},children:[{type:b,tag:c,props:{className:[d,T]},children:[{type:a,value:".hogehoge"}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"width"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,aw]},children:[{type:a,value:"100"}]},{type:b,tag:c,props:{className:[d,ax]},children:[{type:a,value:"%"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"height"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,aw]},children:[{type:a,value:"30"}]},{type:b,tag:c,props:{className:[d,ax]},children:[{type:a,value:"px"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,I]},children:[{type:a,value:"background-image"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,ay]},children:[{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:"'\u002Fimg\u002Fic-arrow_back.png'"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"comment"]},children:[{type:a,value:"\u002F* 画像指定 *\u002F"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:R,props:{id:az},children:[{type:b,tag:i,props:{href:"#%E7%B5%90%E6%9E%9C",ariaHidden:n,tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:az}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{href:aA,rel:[z,A],target:B},children:[{type:b,tag:_,props:{alt:aA,src:"https:\u002F\u002Fi.gyazo.com\u002Fe8336990759c1b762050251c0c7fe510.png"},children:[]}]}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:a,value:"ちなみに "},{type:b,tag:l,props:{},children:[{type:a,value:"\u003Cimg\u003E"}]},{type:a,value:" のsrc読み込みでも同じこと出来ます。"}]},{type:a,value:f},{type:b,tag:k,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,ae]},children:[{type:b,tag:l,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:af}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:ag}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ah}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:K}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:aj}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:ak}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:al}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:T}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:am}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:an}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:K},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ao}]},{type:a,value:ap}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:ar}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,X]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:au},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]}]},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:"\n        "}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:V}]},{type:a,value:_}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,W]},children:[{type:a,value:"src"}]},{type:b,tag:c,props:{className:[d,X]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:"\u002Fimg\u002Fic-arrow_back.png"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u002F\u003E"}]}]},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:"画像が見れる\n      "}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,m]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:av}]},{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:O}]}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:L}]}]}]},{type:a,value:f},{type:b,tag:j,props:{},children:[{type:b,tag:i,props:{href:aB,rel:[z,A],target:B},children:[{type:b,tag:_,props:{alt:aB,src:"https:\u002F\u002Fi.gyazo.com\u002Fc5174a5a6a99b4d7570ca7c5e8080ecf.png"},children:[]}]}]},{type:a,value:f},{type:b,tag:Q,props:{id:$},children:[{type:b,tag:i,props:{href:"#%E5%8F%82%E8%80%83url",ariaHidden:n,tabIndex:o},children:[{type:b,tag:c,props:{className:[p,q]},children:[]}]},{type:a,value:aa}]},{type:a,value:f},{type:b,tag:"ul",props:{},children:[{type:a,value:f},{type:b,tag:aC,props:{},children:[{type:b,tag:i,props:{href:aD,rel:[z,A],target:B},children:[{type:a,value:aD}]}]},{type:a,value:f},{type:b,tag:aC,props:{},children:[{type:b,tag:i,props:{href:aE,rel:[z,A],target:B},children:[{type:a,value:aE}]}]},{type:a,value:f}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fset-image-storybook-css",extension:".md",slug:"set-image-storybook-css",createdAt:aF,updatedAt:aF}}],fetch:[],mutations:[]}}("text","element","span","token","punctuation","\n"," ","keyword","a","p","div","code","tag","true",-1,"icon","icon-link","nuxt-content-highlight","pre","line-numbers","{","}",";","\n  ","\"","noopener","noreferrer","_blank","(",")","解決法","指定方法","動かしてみる","string","property",":","React","\n\n","class-name","\n    ","\u003E",3,"h3","h4","operator","class","function","\u003C","attr-name","attr-value","=","plain-text","img","参考url","参考URL","https:\u002F\u002Fstorybook.js.org\u002Fconfigurations\u002Fdefault-config\u002F#image-and-static-file-support","language-text","コード例","language-tsx","import","*","as","maybe-class-name","from","'react'","export","Hogehoge","extends",".","Component","render","return","\n      ","className","hogehoge","\u003C\u002F","number","unit","url","結果","https:\u002F\u002Fgyazo.com\u002Fe8336990759c1b762050251c0c7fe510","https:\u002F\u002Fgyazo.com\u002Fc5174a5a6a99b4d7570ca7c5e8080ecf","li","https:\u002F\u002Fstorybook.js.org\u002Fconfigurations\u002Fserving-static-files\u002F#2-via-a-directory","https:\u002F\u002Fgithub.com\u002Fstorybooks\u002Fstorybook\u002Fissues\u002F37#issuecomment-205744157","2020-06-17T14:25:55.832Z")));