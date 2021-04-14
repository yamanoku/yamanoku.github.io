__NUXT_JSONP__("/archive/git-update-index-assume-unchanged", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G){return {data:[{page:{slug:"git-update-index-assume-unchanged",description:"config.jsonのhostnameをいちいち変えなくてもいい方法について",title:"config.jsonのhostnameをいちいち変えなくてもいい方法",date:"2015-12-24T00:00:00.000Z",author:"yamanoku",toc:[{id:h,depth:i,text:h},{id:j,depth:i,text:j},{id:k,depth:i,text:k},{id:w,depth:i,text:x}],body:{type:"root",children:[{type:b,tag:l,props:{id:h},children:[{type:b,tag:f,props:{href:"#%E8%83%8C%E6%99%AF",ariaHidden:m,tabIndex:n},children:[{type:b,tag:e,props:{className:[o,p]},children:[]}]},{type:a,value:h}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"gulp-webserverの便利機能の１つにhostnameに自分のPCのIPアドレスを設定すると、他端末でアクセスしても見れる（ただしwifi接続時）っていうのがあるんですが、他の人と作業しているとhostname設定ママで渡しちゃうとエラーが吐いちゃうので非常に不便ですねという話。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:".gitignore"}]},{type:a,value:"で無視させようにも管理下ファイルなので無理、というところを解決してくれるいいやつありました。"}]},{type:a,value:c},{type:b,tag:l,props:{id:j},children:[{type:b,tag:f,props:{href:"#%E8%A7%A3%E6%B1%BA%E7%AD%96",ariaHidden:m,tabIndex:n},children:[{type:b,tag:e,props:{className:[o,p]},children:[]}]},{type:a,value:j}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"terminalとかitermでGit管理下のディレクトリで入力。"}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:e,props:{className:[q,y]},children:[{type:a,value:z}]},{type:a,value:" update-index --assume-unchanged config.json\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"これでconfig.jsonの変更があってもGitで無視されるので安心ですね。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"ちなみに解除は以下を入力です。"}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:e,props:{className:[q,y]},children:[{type:a,value:z}]},{type:a,value:A}]}]}]},{type:a,value:c},{type:b,tag:l,props:{id:k},children:[{type:b,tag:f,props:{href:"#%E5%8F%82%E8%80%83",ariaHidden:m,tabIndex:n},children:[{type:b,tag:e,props:{className:[o,p]},children:[]}]},{type:a,value:k}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fqiita.com\u002Fusamik26\u002Fitems\u002F56d0d3ba7a1300625f92",rel:[B,C],target:D},children:[{type:a,value:"既に git 管理しているファイルをあえて無視したい - Qiita"}]}]},{type:a,value:c},{type:b,tag:l,props:{id:w},children:[{type:b,tag:f,props:{href:"#%E8%BF%BD%E8%A8%98-20160202",ariaHidden:m,tabIndex:n},children:[{type:b,tag:e,props:{className:[o,p]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"いちいち引っ張りだすものめんどいのでエイリアス登録した。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"~\u002F.gitconfig"}]},{type:a,value:"の"},{type:b,tag:g,props:{},children:[{type:a,value:"[alias]"}]},{type:a,value:"箇所で以下登録。"}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"jsonchange "},{type:b,tag:e,props:{className:[q,E]},children:[{type:a,value:F}]},{type:a,value:" update-index --assume-unchanged config.json\njsonnochange "},{type:b,tag:e,props:{className:[q,E]},children:[{type:a,value:F}]},{type:a,value:A}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"命名のセンスが無いのはご容赦ください。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Fqiita.com\u002Fpeccul\u002Fitems\u002F90dd469e2f72babbc106",rel:[B,C],target:D},children:[{type:a,value:"gitで便利なエイリアス達 - Qiita"}]}]}]},dir:"\u002Farchive",path:"\u002Farchive\u002Fgit-update-index-assume-unchanged",extension:".md",createdAt:G,updatedAt:G}}],fetch:{},mutations:[]}}("text","element","\n","p","span","a","code","背景",2,"解決策","参考","h2","true",-1,"icon","icon-link","token","div","nuxt-content-highlight","pre","language-bash","line-numbers","追記-20160202","追記 2016\u002F02\u002F02","function","git"," update-index --no-assume-unchanged config.json\n","noopener","noreferrer","_blank","operator","=","2021-04-14T01:40:00.183Z")));