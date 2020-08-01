__NUXT_JSONP__("/archive/comeback-qiita-code-style-chrome-extension", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V){return {data:[{page:{title:"Qiita記事のコードスタイル部分を以前のやつに戻すChrome Extension作った",description:"chrome-extension Qiita CSS",date:"2017-12-04T00:00:00.000Z",author:"yamanoku",toc:[{id:s,depth:i,text:s},{id:t,depth:i,text:t},{id:u,depth:i,text:u},{id:C,depth:i,text:D},{id:v,depth:i,text:v}],body:{type:"root",children:[{type:b,tag:j,props:{id:s},children:[{type:b,tag:g,props:{href:"#%E7%B5%8C%E7%B7%AF",ariaHidden:k,tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:s}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"Qiitaがサイトリニューアルされて、記事内のコード部分の色がガラッと変わり、個人的に見づらかったのでなんとか変えたかった。"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"メインブラウザがChromeなのでExtensionで自動的に変わるみたいなのがあったらいいなと思って作った。突発的に作って、個人的に使う程度のものなのでストアには登録してません。"}]},{type:a,value:e},{type:b,tag:j,props:{id:t},children:[{type:b,tag:g,props:{href:"#%E5%86%85%E5%AE%B9",ariaHidden:k,tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:t}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"やってることは至極簡単で、読み込まれたら"},{type:b,tag:w,props:{},children:[{type:a,value:"\u003C\u002Fhead\u003E"}]},{type:a,value:"の直前にオーバーライドされたCSSを読み込むようにしているだけ。"}]},{type:a,value:e},{type:b,tag:E,props:{className:[F]},children:[{type:b,tag:G,props:{className:[H,"language-js"]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,"dom","variable"]},children:[{type:a,value:"document"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"head"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,I,J,y]},children:[{type:a,value:"insertAdjacentHTML"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"'beforeend'"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:","}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"'\u003Clink rel=\"stylesheet\" type=\"text\u002Fcss\" href=\"'"}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:M}]},{type:a,value:" chrome"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"runtime"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,I,J,y]},children:[{type:a,value:"getURL"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:M}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"'\"\u003E'"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:";"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:w,props:{},children:[{type:a,value:"manifest.json"}]},{type:a,value:"で以下の設定するのがミソっぽいです"}]},{type:a,value:e},{type:b,tag:E,props:{className:[F]},children:[{type:b,tag:G,props:{className:[H,"language-json"]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"{"}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,"property"]},children:[{type:a,value:"\"web_accessible_resources\""}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:":"}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"["}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:N}]},{type:a,value:P},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"]"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"}"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:j,props:{id:u},children:[{type:b,tag:g,props:{href:"#%E3%83%87%E3%83%A2",ariaHidden:k,tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:u}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:g,props:{href:Q,rel:[p,q],target:r},children:[{type:b,tag:"img",props:{alt:Q,src:"https:\u002F\u002Fi.gyazo.com\u002F923e0fd8f4151121597121378f848b9d.gif"},children:[]}]}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"ラグありますが、読み込み完了したら反映みたいな感じです。"}]},{type:a,value:e},{type:b,tag:j,props:{id:C},children:[{type:b,tag:g,props:{href:"#github",ariaHidden:k,tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:D}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:b,tag:g,props:{href:R,rel:[p,q],target:r},children:[{type:a,value:R}]},{type:a,value:"\nここからクローンなりダウンロードでディレクトリ落としてもらってデベロッパーモードで追加してください。いらんかったら削除ください。"}]},{type:a,value:e},{type:b,tag:h,props:{},children:[{type:a,value:"自分がよく見る分は補完してますがこの言語のここが対応していないなどあったらIssueかプルリクでもおなしゃす。"}]},{type:a,value:e},{type:b,tag:j,props:{id:v},children:[{type:b,tag:g,props:{href:"#%E5%8F%82%E8%80%83",ariaHidden:k,tabIndex:l},children:[{type:b,tag:c,props:{className:[m,n]},children:[]}]},{type:a,value:v}]},{type:a,value:e},{type:b,tag:"ul",props:{},children:[{type:a,value:e},{type:b,tag:B,props:{},children:[{type:b,tag:g,props:{href:S,rel:[p,q],target:r},children:[{type:a,value:S}]}]},{type:a,value:e},{type:b,tag:B,props:{},children:[{type:b,tag:g,props:{href:T,rel:[p,q],target:r},children:[{type:a,value:T}]}]},{type:a,value:e},{type:b,tag:B,props:{},children:[{type:b,tag:g,props:{href:U,rel:[p,q],target:r},children:[{type:a,value:U}]}]},{type:a,value:e}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fcomeback-qiita-code-style-chrome-extension",extension:".md",slug:"comeback-qiita-code-style-chrome-extension",createdAt:V,updatedAt:V}}],fetch:[],mutations:[]}}("text","element","span","token","\n","punctuation","a","p",2,"h2","true",-1,"icon","icon-link","string","noopener","noreferrer","_blank","経緯","内容","デモ","参考","code",".","property-access"," ","operator","li","github","Github","div","nuxt-content-highlight","pre","line-numbers","method","function","(","\n    ","+","\"style.css\"",")","\n  ","https:\u002F\u002Fgyazo.com\u002F923e0fd8f4151121597121378f848b9d","https:\u002F\u002Fgithub.com\u002Fyamanoku\u002FQiita_Code-Style_Before","https:\u002F\u002Fqiita.com\u002Fsqrtxx\u002Fitems\u002F19fd2114430e9e1fb57f","https:\u002F\u002Fdeveloper.chrome.com\u002Fextensions\u002Fmanifest\u002Fweb_accessible_resources","https:\u002F\u002Fdeveloper.mozilla.org\u002Fja\u002FAdd-ons\u002FWebExtensions\u002Fmanifest.json\u002Fweb_accessible_resources","2020-06-17T14:25:55.828Z")));