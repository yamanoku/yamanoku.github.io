__NUXT_JSONP__("/archive/risks-of-xss_and_how-to-counteract", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb){return {data:[{page:{slug:"risks-of-xss_and_how-to-counteract",description:"XSSについての話と基本的な対策について",title:"敵を知り己を知ればXSS危うからず",date:"2016-07-19T00:00:00.000Z",author:"yamanoku",toc:[{id:av,depth:F,text:aw},{id:af,depth:F,text:af},{id:ag,depth:U,text:ag},{id:ax,depth:U,text:ay},{id:az,depth:U,text:aA},{id:ah,depth:U,text:ah},{id:aB,depth:U,text:aC},{id:ai,depth:U,text:ai},{id:aD,depth:F,text:aE},{id:aF,depth:F,text:aG},{id:aH,depth:F,text:aI},{id:aJ,depth:F,text:aK},{id:aj,depth:F,text:aj},{id:ak,depth:F,text:ak}],body:{type:"root",children:[{type:b,tag:g,props:{},children:[{type:b,tag:j,props:{href:"https:\u002F\u002Fgyazo.com\u002Fa6c2744e875f9ebadb3a9e70bd3d0f89",rel:[C,D],target:E},children:[{type:b,tag:_,props:{alt:$,src:"https:\u002F\u002Fi.gyazo.com\u002Fa6c2744e875f9ebadb3a9e70bd3d0f89.png"},children:[]}]}]},{type:a,value:f},{type:b,tag:G,props:{id:av},children:[{type:b,tag:j,props:{href:"#xss%EF%BC%88%E3%82%AF%E3%83%AD%E3%82%B9%E3%82%B5%E3%82%A4%E3%83%88%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%97%E3%83%88%EF%BC%89%E3%81%A8%E3%81%AF",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:aw}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"クロスサイトスクリプト（以下XSS）とは一種のセキュリティホールであり、サイトの脆弱性をついてユーザーが悪意のある攻撃をしてしまうスクリプトを埋め込まれてしまうことです。歴史的に遡ってみると2000年頃に発生しているようです。"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"例えばフォームで送信する際に通常であれば名前や住所といった文字列を入力するとおもいますが、ここにスクリプトタグを書き込んで送信されると、XSS対策されているサイトであればタグ囲み部分がエスケープされて実行されませんが、対策がされていないとそのままスクリプトタグを読み込んでしまい、実行がされてしまうといった流れです。"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:b,tag:j,props:{href:"https:\u002F\u002Fgyazo.com\u002F9fd2a746caa6623a7b8b58136df0aa8c",rel:[C,D],target:E},children:[{type:b,tag:_,props:{alt:$,src:"https:\u002F\u002Fi.gyazo.com\u002F9fd2a746caa6623a7b8b58136df0aa8c.png"},children:[]}]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"このように動的な要素を生成する場合、XSS脆弱性を発生させやすくなっています。他にも以下の様な危険性があげられます。"}]},{type:a,value:f},{type:b,tag:aa,props:{},children:[{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"ページの改ざんによる偽装ページ"}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"Cookieデータの抜き取り"}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"ajaxによる攻撃者のデータ送信"}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"etc…"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"なのでこうした問題を未然に防ぐため、今回はJavaScriptの観点からみたXSS対策を考えてみたいと思います。"}]},{type:a,value:f},{type:b,tag:G,props:{id:af},children:[{type:b,tag:j,props:{href:"#%E3%82%BB%E3%82%AD%E3%83%A5%E3%82%A2%E3%81%AAjs%E8%A8%98%E8%BF%B0%E3%82%92%E7%9F%A5%E3%82%8D%E3%81%86%EF%BC%81",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:af}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"フロント側の実装をする際に動的な部分をつくるためにJavaScriptで色々と書かれているかと思われますが、XSS対策を意識した書き方でよりセキュアな実装にできます。"}]},{type:a,value:f},{type:b,tag:V,props:{id:ag},children:[{type:b,tag:j,props:{href:"#%E3%82%A8%E3%82%B9%E3%82%B1%E3%83%BC%E3%83%97%E3%82%92%E3%81%99%E3%82%8B",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:ag}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"すぐできる対策であり、割と効果的なものがエスケープ処理です。これは問題を起こしうる特殊文字を文字参照に変換して、実行させないようにする処理です。対応する特殊文字は「＆」「＜」「＞」「”」「’」の５つです。"}]},{type:a,value:f},{type:b,tag:H,props:{className:[K]},children:[{type:b,tag:L,props:{className:[M,ab]},children:[{type:b,tag:n,props:{},children:[{type:a,value:h},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aL}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,aM]},children:[{type:a,value:"str"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:p}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,v,i,u]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,P]},children:[{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,Q,R]},children:[{type:a,value:aN}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:Y}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"'&amp;'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:p}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,v,i,u]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,P]},children:[{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,Q,R]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:Y}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"'&lt;'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:p}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,v,i,u]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,P]},children:[{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,Q,R]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:Y}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"'&gt;'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:p}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,v,i,u]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,P]},children:[{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,Q,R]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:Y}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"'&quot;'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:p}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,v,i,u]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,P]},children:[{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,Q,R]},children:[{type:a,value:"'"}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:Y}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"'&#39;'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,s,am]},children:[{type:a,value:aq}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"ちなみにES6であればテンプレートリテラル（=Template strings）を使用して下記処理もできます。"}]},{type:a,value:f},{type:b,tag:H,props:{className:[K]},children:[{type:b,tag:L,props:{className:[M,ab]},children:[{type:b,tag:n,props:{},children:[{type:a,value:h},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:aL}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:Z}]},{type:a,value:" raw "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:p}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,"known-class-name","class-name"]},children:[{type:a,value:"String"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,v,i,u]},children:[{type:a,value:"raw"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,v,i,u]},children:[{type:a,value:"apply"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,s,aO,"nil"]},children:[{type:a,value:aO}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:" arguments"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:Z}]},{type:a,value:" safe "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:p}]},{type:a,value:" raw"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,v,i,u]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,P]},children:[{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,Q,R]},children:[{type:a,value:aN}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,X]},children:[{type:a,value:Y}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"'&'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,v,i,u]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,ar]},children:[{type:a,value:"\u002F\u002Fg, '\u003E').replace(\u002F\"\u002Fg, '\"').replace(\u002F'\u002Fg, ''');"}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,s,am]},children:[{type:a,value:aq}]},{type:a,value:" safe\n "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:Z}]},{type:a,value:" input "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:p}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"\u003Cimg src=# onerror=alert(1)\u003E\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:Z}]},{type:a,value:" html "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:p}]},{type:a,value:" escapeHTML"},{type:b,tag:c,props:{className:[d,"template-string"]},children:[{type:b,tag:c,props:{className:[d,aP,o]},children:[{type:a,value:aQ}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\u003Cdiv\u003E"}]},{type:b,tag:c,props:{className:[d,"interpolation"]},children:[{type:b,tag:c,props:{className:[d,aR,e]},children:[{type:a,value:"${"}]},{type:a,value:"userinput"},{type:b,tag:c,props:{className:[d,aR,e]},children:[{type:a,value:J}]}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\u003C\u002Fdiv\u003E"}]},{type:b,tag:c,props:{className:[d,aP,o]},children:[{type:a,value:aQ}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"テンプレートリテラルの使い方は「｀」（バッククオート）で囲むだけです。"}]},{type:a,value:f},{type:b,tag:V,props:{id:ax},children:[{type:b,tag:j,props:{href:"#url%E3%81%AFhttp%E3%81%8A%E3%82%88%E3%81%B3https%E3%82%B9%E3%82%AD%E3%83%BC%E3%83%A0",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:ay}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"URLを取り出し、それをデータとして扱う際に気をつけたいことは、JavaScriptスキームなど複数のスキームを介在させないために、リンク先が"},{type:b,tag:n,props:{},children:[{type:a,value:"http:\u002F\u002F"}]},{type:a,value:"か"},{type:b,tag:n,props:{},children:[{type:a,value:"https:\u002F\u002F"}]},{type:a,value:"なのかを判断して挿入するようにすることです。"}]},{type:a,value:f},{type:b,tag:H,props:{className:[K]},children:[{type:b,tag:L,props:{className:[M,ab]},children:[{type:b,tag:n,props:{},children:[{type:a,value:h},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:Z}]},{type:a,value:" url "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:p}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"decodeURIComponent"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,aS,aT]},children:[{type:a,value:"location"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"href"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,s,am]},children:[{type:a,value:"if"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:aU},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,v,i,u]},children:[{type:a,value:"match"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,P]},children:[{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,Q,R]},children:[{type:b,tag:c,props:{className:[d,"anchor",i]},children:[{type:a,value:"^"}]},{type:a,value:"https"},{type:b,tag:c,props:{className:[d,"quantifier","number"]},children:[{type:a,value:"?"}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,aV]},children:[{type:a,value:aW}]},{type:b,tag:c,props:{className:[d,aV]},children:[{type:a,value:aW}]}]},{type:b,tag:c,props:{className:[d,B]},children:[{type:a,value:q}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:"\n     "},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:Z}]},{type:a,value:" elm "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:p}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,aS,aT]},children:[{type:a,value:"document"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,v,i,u]},children:[{type:a,value:"getElementById"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"link\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:"\n     elm"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,v,i,u]},children:[{type:a,value:"setAttribute"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"href\""}]},{type:a,value:aU},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"JavaScriptスキームはいわゆるブックマークに登録して便利な機能として使うというのが一般的ですが、それをXSSとして使用されるのを防ぐための策であります。"}]},{type:a,value:f},{type:b,tag:V,props:{id:az},children:[{type:b,tag:j,props:{href:"#jsonp%E3%81%AE%E5%8F%96%E3%82%8A%E6%89%B1%E3%81%84%E6%B3%A8%E6%84%8F%E3%81%A8jsonparse",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:aA}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"JSONPはクロスドメイン、つまり同一のドメインのデータでなくても引っ張ってこれるもので便利なものではありますが、同時に他者が仕組んだ悪意のあるJSONPデータも入り込む可能性があります。"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"JSONPをまったく使用するな、ということではないのですが使用する際は信頼のあるデータであることを証明した上で使用するのが吉です。"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"そしてJSONほか外部データを使用する際は必ず "},{type:b,tag:n,props:{},children:[{type:a,value:"JSON.parse"}]},{type:a,value:" 関数を使用してください。"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"これは文字列をJSONとして解析するためのものなので、"},{type:b,tag:n,props:{},children:[{type:a,value:"eval"}]},{type:a,value:"関数だとJSONの中に実行文が紛れていると実行されてしまう恐れがありますので意識して使いましょう。"}]},{type:a,value:f},{type:b,tag:V,props:{id:ah},children:[{type:b,tag:j,props:{href:"#%E3%83%AC%E3%83%B3%E3%83%80%E3%83%AA%E3%83%B3%E3%82%B0%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E4%BD%BF%E7%94%A8%E5%BB%83%E6%AD%A2",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:ah}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"主に下記のソースになります。これは上述したエスケープ処理がない場合、確実にXSSの標的になり得ますし、この部分を使って悪用されるおそれがあるかもしれないからです。"}]},{type:a,value:f},{type:b,tag:aa,props:{},children:[{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:n,props:{},children:[{type:a,value:"element.innerHTML = “…”;"}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:n,props:{},children:[{type:a,value:"element.outerHTML = “…”;"}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:n,props:{},children:[{type:a,value:"document.write(…);"}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:n,props:{},children:[{type:a,value:"document.writeln(…);"}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:V,props:{id:aB},children:[{type:b,tag:j,props:{href:"#%E4%BD%99%E8%AB%87%EF%BC%9Ainput-pattern%E3%81%A7%E3%83%90%E3%83%AA%E3%83%87%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:aC}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"jsとは違った観点ではありますが、HTML5の"},{type:b,tag:n,props:{},children:[{type:a,value:aX}]},{type:a,value:"要素に「"},{type:b,tag:n,props:{},children:[{type:a,value:aY}]},{type:a,value:"属性」というものがあるのをご存知でしょうか。"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"これは正規表現を使った入力制限により制限にかかっていないものはバリデーションで弾いてくれるという優れた代物で、特にjsなどのバリデートをしなくてもブラウザに準拠したバリデートが働いてくれます。"}]},{type:a,value:f},{type:b,tag:H,props:{className:[K]},children:[{type:b,tag:L,props:{className:[M,"language-html"]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,an]},children:[{type:b,tag:c,props:{className:[d,an]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:al}]},{type:a,value:aX}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ae]},children:[{type:a,value:"type"}]},{type:b,tag:c,props:{className:[d,at]},children:[{type:b,tag:c,props:{className:[d,e,au]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:a},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ae]},children:[{type:a,value:aZ}]},{type:b,tag:c,props:{className:[d,at]},children:[{type:b,tag:c,props:{className:[d,e,au]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:aZ},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ae]},children:[{type:a,value:aY}]},{type:b,tag:c,props:{className:[d,at]},children:[{type:b,tag:c,props:{className:[d,e,au]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]},{type:a,value:"^[ァ-ンヴー]+$,[\\u30A1-\\u30FF]*"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:S}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ae]},children:[{type:a,value:"required"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:ap}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"ですので上述したエスケープ部分の記号が入る必要のない箇所（カタカナ表記、郵便番号など）には正規表現ですでに弾いておくようにすると後々の対応も楽になるかと思います。"}]},{type:a,value:f},{type:b,tag:V,props:{id:ai},children:[{type:b,tag:j,props:{href:"#%E5%8F%82%E8%80%83%E3%83%AA%E3%83%B3%E3%82%AF",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:ai}]},{type:a,value:f},{type:b,tag:aa,props:{},children:[{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:j,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fja\u002Fdocs\u002FWeb\u002FJavaScript\u002FGuide\u002FWriting_a_Regular_Expression_Pattern",rel:[C,D],target:E},children:[{type:a,value:"正規表現パターンの記述 – JavaScript | MDN"}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:j,props:{href:"http:\u002F\u002Fqiita.com\u002Fka215\u002Fitems\u002F795a179041c705bef03b",rel:[C,D],target:E},children:[{type:a,value:"HTML5におけるinput要素のpattern、type属性のおさらい"}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:G,props:{id:aD},children:[{type:b,tag:j,props:{href:"#%E7%9B%AE%E6%8C%87%E3%81%99%E3%81%AF%E8%84%B1%E3%83%BBjquery%EF%BC%81",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:aE}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"jQueryはライブラリの１つですが、煩雑なコードを容易に記述しやすくして、デザイナーさんにも扱える簡単なもので今も制作会社で広く使用されていると思われます。"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"実はjQueryでもXSS対策はできるものがあり、それは "},{type:b,tag:n,props:{},children:[{type:a,value:"text()"}]},{type:a,value:" です。受け取る値をテキストデータにエスケープしてくれる代物なのでinputでの入力を即出力するものには適しています。"}]},{type:a,value:f},{type:b,tag:H,props:{className:[K]},children:[{type:b,tag:L,props:{className:[M,ab]},children:[{type:b,tag:n,props:{},children:[{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"'input'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,v,i,u]},children:[{type:a,value:"on"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"'keyup'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,aM]},children:[{type:a,value:"e"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"'.hoge'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,v,i,u]},children:[{type:a,value:a}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"this"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,v,i,u]},children:[{type:a,value:"val"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"しかしながら、jQuery自身の長所でもあり弱点としても見られる「[DOM]の直接操作」部分が割とネックとなってきています。つまりDOM操作によるXSSの介入が起こりうる可能性があるのです。"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"以前のver.1.6では "},{type:b,tag:n,props:{},children:[{type:a,value:"$(location.hash)"}]},{type:a,value:" の脆弱性が指摘されており、要素の検索や作成などを引数の文字列で判断するため、$()内でスクリプトを記載すると#idで指定したものがそのまま要素として判断されることがありました（ver1.6.3にて修正済み）"}]},{type:a,value:f},{type:b,tag:H,props:{className:[K]},children:[{type:b,tag:L,props:{className:[M,ab]},children:[{type:b,tag:n,props:{},children:[{type:a,value:"http"},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:as}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:q}]},{type:a,value:"my"},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:a_}]},{type:a,value:"web"},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:a_}]},{type:a,value:"app"},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:q}]},{type:a,value:"#"},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:al}]},{type:a,value:"img onerror"},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"alert(1)\""}]},{type:a,value:" src"},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"\"xxx\""}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ap}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ao}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"'#\u003Cimg onerror=\"alert(1)\" src=\"xxx\"\u003E'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ar]},children:[{type:a,value:"\u002F\u002Fハッシュ値で判断すると左の値で取得する"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ar]},children:[{type:a,value:"\u002F\u002F\u003Cimg\u003Eタグで処理されるようになってしまう。"}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"jQuery自身もver3.0の更新（2016年5月）があったように、日々使いやすくかつ脆弱性を潰してきて、簡単な装飾程度であれば使用する面では問題無いかもですが、セキュリティ面を考えた上でwebサイト・アプリに使い続けるというのは難しい選択のようにも思えます。"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"なのでjQueryのみに頼り続けるのは危ないかも、というのを念頭に置いておくと良いかもしません。\n※使用をやめろ！　と固く禁じる訳ではないです"}]},{type:a,value:f},{type:b,tag:G,props:{id:aF},children:[{type:b,tag:j,props:{href:"#%E4%BB%AE%E6%83%B3dom%E3%82%92%E4%BF%A1%E3%81%98%E3%82%8D%EF%BC%81",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:aG}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:b,tag:j,props:{href:"https:\u002F\u002Fgyazo.com\u002F7f12364e058283699217b3e201b615af",rel:[C,D],target:E},children:[{type:b,tag:_,props:{alt:$,src:"https:\u002F\u002Fi.gyazo.com\u002F7f12364e058283699217b3e201b615af.png"},children:[]}]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"上記は素でjsを書いたりjQueryを使用する際の注意点でしたが、中級者以上の賢明なエンジニアの方であればフレームワークを使用した開発をされていると思われます。というか大体のwebサイト・アプリはフレームワーク使っているんじゃないかなと思われます。"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"有名フレームワークはもともとセキュリティ面を徹底しており、意識しなくともXSS対策をしている状態でスクリプトを書くことが出来ます。その中でもFacebookが開発した「React.js」は、界隈の中では扱いやすく良いものだと評判のシロモノです。"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"ちなみにReactなどの便利なフレームワークの特徴でもある仮想DOMの考え方はなかなかよい感じです。"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"通常のDOM（Document Object Model）はマークアップなどでhtmlに記述してあるもので、それをjQueryなどで直接操作するなどがありますが、仮想DOMは現時点でのDOMの持っている構造をJSONなどに設定してそれをDOMとして吐き出すようにしているので、DOMからの読み込み・書き込みといった処理をする必要がなくなります。"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"つまり仮想DOMのメリットとしては、生DOM生成におけるXSSリスクをかなり減らせるのです！"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"ですが生成されたDOMをjQueryなどで触ると意味が無いです。"},{type:b,tag:"strong",props:{},children:[{type:a,value:"※両者の親和性はかなり悪いとおもわれます…"}]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"ちなみにReactには"},{type:b,tag:n,props:{},children:[{type:a,value:a$}]},{type:a,value:"というhtmlを埋め込む際に、名前からして物騒な、これは危険だよと知らせるためのプロパティがあります。"}]},{type:a,value:f},{type:b,tag:H,props:{className:[K]},children:[{type:b,tag:L,props:{className:[M,"language-jsx"]},children:[{type:b,tag:n,props:{},children:[{type:a,value:h},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:i}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ba}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,s,am]},children:[{type:a,value:aq}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:"__html"},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:as}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"'First &middot; Second'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,an]},children:[{type:b,tag:c,props:{className:[d,an]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:al}]},{type:a,value:H}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ae]},children:[{type:a,value:a$}]},{type:b,tag:c,props:{className:[d,"script","language-javascript"]},children:[{type:b,tag:c,props:{className:[d,"script-punctuation",e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ba}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:J}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u002F\u003E"}]}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:G,props:{id:aH},children:[{type:b,tag:j,props:{href:"#xss%E6%94%BB%E6%92%83%E3%82%92%E8%A9%A6%E3%81%97%E3%81%A6%E3%81%BF%E3%81%9F%E3%81%84%EF%BC%88%EF%BC%9F-%EF%BC%81%EF%BC%89",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:aI}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"以上XSSについての対策や方法論を述べてまいりましたが、実際に色々なXSS攻撃を試してみたいという好奇心過多な方もいるかもしれません。しかし適当なサイトでそういった行為をするのは許されてはいません。"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"その抑えられない好奇心をどうすればいいか、Googleが公開しているXSSをゲーム感覚で試せるサイト"},{type:b,tag:j,props:{href:"https:\u002F\u002Fxss-game.appspot.com\u002F",rel:[C,D],target:E},children:[{type:a,value:"XSS game"}]},{type:a,value:"に行ってみてください。"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:b,tag:j,props:{href:"https:\u002F\u002Fgyazo.com\u002F656b1c40b5a0063e805a9cb73be67f10",rel:[C,D],target:E},children:[{type:b,tag:_,props:{alt:$,src:"https:\u002F\u002Fi.gyazo.com\u002F656b1c40b5a0063e805a9cb73be67f10.png"},children:[]}]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"こちらでは様々なパターンでのXSS攻撃を体験でき、わからない場合はヒントも教えて頂けるという親切設計になっております。内容はすべて英語となっていますので翻訳しながら見ていただけるとよろしい感じです。クリアするとケーキが見れます。"}]},{type:a,value:f},{type:b,tag:G,props:{id:aJ},children:[{type:b,tag:j,props:{href:"#%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6xss%E3%83%95%E3%82%A3%E3%83%AB%E3%82%BF%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:aK}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"ちなみに最新版のブラウザー（2016\u002F07現在：Firefox除く）であれば、簡易的なXSSを自動的に排除してくれるXSSフィルターがついています（Firefoxであれば類似のプラグインがあります）。皆さん大好きChromeであればインストールしてすでに内蔵されていると思います。"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:b,tag:j,props:{href:"https:\u002F\u002Fgyazo.com\u002F3411fbe9ddf6a6b282517c53e5fa203b",rel:[C,D],target:E},children:[{type:b,tag:_,props:{alt:$,src:"https:\u002F\u002Fi.gyazo.com\u002F3411fbe9ddf6a6b282517c53e5fa203b.png"},children:[]}]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"しかしながらフィルタも万全というわけではなく、そもそも誤探知してしまったり、その脆弱性をついてすり抜けてくるXSSも存在していますので、フィルタがあるから大丈夫という油断は禁物です。あくまでも気持ち程度のものとして。"}]},{type:a,value:f},{type:b,tag:G,props:{id:aj},children:[{type:b,tag:j,props:{href:"#%E7%B5%82%E3%82%8F%E3%82%8A%E3%81%AB",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:aj}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"以上XSSにまつわる知見についてまとめてみましたが、正直なところ、XSSの分野はセキュリティ領域の中ではかなり複雑・難解なものとなっており、徹底するとなると専門家の意見を聞いたりセキュリティ関連の著書を読むべきではあります。ですがこうした些細なことでもセキュリティ意識をもってプログラミングをすることで、クライアントやユーザーが安心して使えるwebサイト・アプリ作りに繋がってゆく第一歩となります。"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"今一度自分たちが書いたコードを見返してみて、脆弱性について考えてみてはいかがでしょうか。"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"それでは皆様、素晴らしきコーディングライフを！"}]},{type:a,value:f},{type:b,tag:G,props:{id:ak},children:[{type:b,tag:j,props:{href:"#%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE",ariaHidden:x,tabIndex:y},children:[{type:b,tag:c,props:{className:[z,A]},children:[]}]},{type:a,value:ak}]},{type:a,value:f},{type:b,tag:aa,props:{},children:[{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:j,props:{href:"http:\u002F\u002Fd.hatena.ne.jp\u002Fhasegawayosuke\u002F20160106\u002Fp1",rel:[C,D],target:E},children:[{type:a,value:"クロスサイトスクリプティング対策 ホンキのキホン- 葉っぱ日記"}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:j,props:{href:"https:\u002F\u002Fcybozudev.zendesk.com\u002Fhc\u002Fja\u002Farticles\u002F201919400",rel:[C,D],target:E},children:[{type:a,value:"セキュアコーディング ガイドライン – cybozu.com developer network"}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:j,props:{href:"https:\u002F\u002Fjpcertcc.github.io\u002FOWASPdocuments\u002FCheatSheets\u002FDOMbasedXSSPrevention.html",rel:[C,D],target:E},children:[{type:a,value:"DOM ベース XSS 対策チートシート – OWASP – GitHub Pages"}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:j,props:{href:"https:\u002F\u002Fwww.mbsd.jp\u002Fblog\u002F20160407_2.html",rel:[C,D],target:E},children:[{type:a,value:"ブラウザのXSSフィルタを利用した情報窃取攻撃 | MBSD Blog"}]}]},{type:a,value:f},{type:b,tag:r,props:{},children:[{type:b,tag:j,props:{href:"https:\u002F\u002Fblog.tokumaru.org\u002F",rel:[C,D],target:E},children:[{type:a,value:"徳丸浩の日記"}]},{type:a,value:f},{type:b,tag:aa,props:{},children:[{type:a,value:f},{type:b,tag:r,props:{},children:[{type:a,value:"Webセキュリティ界の大偉人です"}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Frisks-of-xss_and_how-to-counteract",extension:".md",createdAt:bb,updatedAt:bb}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","\n","p"," ","function","a","(",")","operator","code","string","=","\u002F","li","keyword",".","property-access","method",";","true",-1,"icon","icon-link","regex-delimiter","noopener","noreferrer","_blank",2,"h2","div",",","}","nuxt-content-highlight","pre","line-numbers","{","replace","regex","regex-source","language-regex","\"","\n ",3,"h3"," str","regex-flags","g","var","img","Image from Gyazo","ul","language-js","\n  str ","\n  ","attr-name","セキュアなjs記述を知ろう！","エスケープをする","レンダリングメソッド使用廃止","参考リンク","終わりに","参考文献","\u003C","control-flow","tag","$","\u003E","return","comment",":","attr-value","attr-equals","xss（クロスサイトスクリプト）とは","XSS（クロスサイトスクリプト）とは","urlはhttpおよびhttpsスキーム","URLはhttpおよびhttpsスキーム","jsonpの取り扱い注意とjsonparse","JSONPの取り扱い注意とJSON.parse","余談：input-patternでバリデーション","余談：input patternでバリデーション","目指すは脱・jquery！","目指すは脱・jQuery！","仮想domを信じろ！","仮想DOMを信じろ！","xss攻撃を試してみたい（？-！）","XSS攻撃を試してみたい（？　！）","ブラウザxssフィルタについて","ブラウザXSSフィルタについて","escapeHTML","parameter","&","null","template-punctuation","`","interpolation-punctuation","dom","variable"," url","escape","\\\u002F","input","pattern","name","-","dangerouslySetInnerHTML","createMarkup","2021-05-29T15:49:00.999Z")));