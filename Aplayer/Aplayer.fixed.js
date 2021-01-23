const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    theme: '#e9e9e9',
        audio: [{"name":"\u604b\u306eEveryDay\u2606HappyDay(\u30d5\u30eb\u30b5\u30a4\u30ba)","artist":"\u7af9\u9054\u5f69\u5948","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=27488656","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=27488656","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=27488656"},{"name":"\u541b\u306e\u307e\u307e\u3067","artist":"azusa","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=33190502","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=33190502","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=33190502"},{"name":"\u30a2\u30a4\u30ed\u30cb","artist":"4\u5186","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=26447698","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=26447698","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=26447698"},{"name":"\u305f\u3044\u305b\u3064\u306a\u304d\u307f\u306e\u305f\u3081\u306b\u3001\u307c\u304f\u306b\u3067\u304d\u308b\u3044\u3061\u3070\u3093\u306e\u3053\u3068 (short.ver)","artist":"Duca","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=564999","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=564999","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=564999"},{"name":"\u6727\u6708","artist":"\u521d\u97f3\u30df\u30af\/minato","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=22730069","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=22730069","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=22730069"},{"name":"Lemon","artist":"\u7c73\u6d25\u7384\u5e2b","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=536622304","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=536622304","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=536622304"},{"name":"\u6253\u4e0a\u82b1\u706b","artist":"DAOKO\/\u7c73\u6d25\u7384\u5e2b","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=496869422","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=496869422","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=496869422"},{"name":"\u75c5\u540d\u306f\u611b\u3060\u3063\u305f","artist":"Neru\/\u93e1\u97f3\u30ea\u30f3\/\u93e1\u97f3\u30ec\u30f3","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=505474379","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=505474379","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=505474379"},{"name":"\u524d\u524d\u524d\u4e16 (movie ver.)","artist":"RADWIMPS","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=426881487","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=426881487","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=426881487"},{"name":"\u831c\u3055\u3059","artist":"Aimer","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=441116287","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=441116287","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=441116287"},{"name":"\u30af\u30ea\u30b9\u30de\u30b9\u30bd\u30f3\u30b0","artist":"back number","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=36871044","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=36871044","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=36871044"},{"name":"\u3060\u3093\u3054\u5927\u5bb6\u65cf","artist":"\u8336\u592a\/\u771f\u7406\u7d75\/\u304f\u306a\u3044\u74dc\/Rio\/Morrigan\/\u85e4\u679d\u3042\u304b\u306d\/\u305f\u304f\u307e\u308b","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=760533","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=760533","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=760533"},{"name":"brave heart","artist":"\u5bae\u5d0e\u6b69","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=29816860","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=29816860","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=29816860"},{"name":"aLIEz","artist":"mizuki (\u745e\u8475)\/SawanoHiroyuki[nZk]","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=29307041","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=29307041","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=29307041"},{"name":"only my railgun","artist":"fripSide","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=725692","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=725692","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=725692"},{"name":"STYX HELIX","artist":"MYTH & ROID","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=413961906","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=413961906","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=413961906"},{"name":"Butter-Fly","artist":"\u548c\u7530\u5149\u53f8","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=4940920","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=4940920","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=4940920"},{"name":"PLANET","artist":"\u30e9\u30e0\u30b8","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=812400","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=812400","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=812400"},{"name":"\u50d5\u304c\u6b7b\u306e\u3046\u3068\u601d\u3063\u305f\u306e\u306f","artist":"\u4e2d\u5cf6\u7f8e\u5609","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=26830207","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=26830207","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=26830207"},{"name":"\u5149\u308b\u306a\u3089","artist":"Goose house","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=29732992","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=29732992","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=29732992"},{"name":"\u660e\u65e5\u3078\u306e\u624b\u7d19(\u30c9\u30e9\u30de\u30d0\u30fc\u30b8\u30e7\u30f3)","artist":"\u624b\u5d8c\u8475","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=402070888","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=402070888","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=402070888"},{"name":"\u5915\u9854","artist":"\u80fd\u767b\u9ebb\u7f8e\u5b50","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=624670","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=624670","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=624670"},{"name":"\u9547\u547d\u6b4c -\u3057\u305a\u3081\u3046\u305f-","artist":"\u7027\u6ca2\u4e00\u7559","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=4956877","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=4956877","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=4956877"},{"name":"\u65e5\u304c\u843d\u3061\u308b\u307e\u3067","artist":"\u30cf\u30f3\u30d0\u30fc\u30c8 \u30cf\u30f3\u30d0\u30fc\u30c8","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=740530","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=740530","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=740530"},{"name":"Rain","artist":"\u79e6\u57fa\u535a","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=26418808","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=26418808","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=26418808"},{"name":"\u611b\u3057\u3066\u308b","artist":"\u9ad8\u9234","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=28661197","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=28661197","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=28661197"},{"name":"\u6bd4\u7ffc\u306e\u7fbd\u6839","artist":"eufonius","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=718551","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=718551","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=718551"},{"name":"\u3042\u306a\u305f\u306b\u51fa\u4f1a\u308f\u306a\u3051\u308c\u3070~\u590f\u96ea\u51ac\u82b1~","artist":"Aimer","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=560079","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=560079","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=560079"},{"name":"\u68a6\u7b11\u9854 ","artist":"\u8336\u592a","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=640295","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=640295","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=640295"},{"name":"\u661f\u306e\u5728\u308a\u51e6","artist":"\u3046\uff5e\u307f","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=730669","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=730669","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=730669"},{"name":"\u8272\u306f\u5302\u3078\u3069 \u6563\u308a\u306c\u308b\u3092 -Full Version-","artist":"\u68ee\u6c38\u771f\u7531\u7f8e","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=869450","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=869450","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=869450"},{"name":"\u4e09\u7dda\u306e\u82b1","artist":"BEGIN","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=694286","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=694286","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=694286"},{"name":"\u6c38\u591c\u306e\u30d1\u30ec\u30fc\u30c9","artist":"\u30b1\u30fc\u30ad\u59eb\u2606\u512a\u6d77\/JUMA","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=692193","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=692193","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=692193"},{"name":"\u5355\u8272\u79cb\u68a6 (\u65e5\u6587\u7248)","artist":"\u8352\u6728\u6bec\u83dc","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=34923890","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=34923890","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=34923890"},{"name":"\u3042\u308a\u304c\u3068\u3046","artist":"\u5927\u6a4b\u5353\u5f25","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=492053","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=492053","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=492053"},{"name":"\u9154\u604b\u82b1 -suirenka-","artist":"Stack","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=707720","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=707720","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=707720"},{"name":"\u831c\u3055\u3059 (TV size)","artist":"Aimer","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=435004281","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=435004281","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=435004281"},{"name":"\u516d\u7b49\u661f\u306e\u591c (from Live at anywhere)","artist":"Aimer","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=27979419","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=27979419","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=27979419"},{"name":"\u6d77\u306b\u884c\u304f","artist":"\u8336\u592a","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=700091","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=700091","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=700091"},{"name":"\u6df1\u6d77\u5c11\u5973","artist":"\u306e\u3076\u306a\u304c","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=857619","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=857619","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=857619"},{"name":"\u30aa\u30ec\u30f3\u30b8","artist":"seven oops","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=30496836","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=30496836","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=30496836"},{"name":"\u306d\u3047","artist":"\u85e4\u7530\u9ebb\u8863\u5b50","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=25931813","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=25931813","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=25931813"},{"name":"\u305f\u304b\u3089\u3082\u306e","artist":"\u6cb3\u91ce\u30de\u30ea\u30ca","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=606427","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=606427","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=606427"},{"name":"\u771f\u590f\u306e\u30d5\u30a9\u30c8\u30b0\u30e9\u30d5","artist":"azusa","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=27485090","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=27485090","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=27485090"},{"name":"\u305f\u3063\u305f1\u3064\u306e\u60f3\u3044","artist":"KOKIA","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=588425","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=588425","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=588425"},{"name":"\u751f\u304d\u3066\u3044\u305f\u3093\u3060\u3088\u306a","artist":"\u3042\u3044\u307f\u3087\u3093","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=443875380","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=443875380","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=443875380"},{"name":"\u306a\u304d\u3080\u3057\u3002","artist":"\u6ca2\u4e95\u7f8e\u7a7a","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=26114408","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=26114408","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=26114408"},{"name":"\u601d\u3072\u3067","artist":"\u9234\u6728\u5e38\u5409","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=22754969","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=22754969","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=22754969"},{"name":"\u3044\u3064\u3082\u4f55\u5ea6\u3067\u3082","artist":"\u4f0a\u85e4\u30b5\u30c1\u30b3","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=584155","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=584155","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=584155"},{"name":"\u305d\u3070\u306b\u3044\u308b\u306d","artist":"\u9752\u5c71\u30c6\u30eb\u30de","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=555142","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=555142","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=555142"},{"name":"\u3072\u3068\u3064\u3076\u306e\u6d99","artist":"Kiroro","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=22746050","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=22746050","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=22746050"},{"name":"\u5973\u751f\u5f92","artist":"\u85e4\u4e95\u4e45\u7f8e","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=407685130","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=407685130","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=407685130"},{"name":"\u541b\u306b\u8074\u304b\u305b\u305f\u304b\u3063\u305f\u6b4c (Original Artist:6% is MINE)","artist":"H\u25b3G","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=33861559","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=33861559","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=33861559"},{"name":"\u30a2\u30b9\u30ce\u30e8\u30be\u30e9\u54e8\u6212\u73ed","artist":"\u3044\u3059\u307c\u304f\u308d","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=35845175","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=35845175","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=35845175"},{"name":"\u52d5\u304f\u3001\u52d5\u304f","artist":"\u6c34\u702c\u3044\u306e\u308a\/\u4e45\u4fdd\u30e6\u30ea\u30ab","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=520461943","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=520461943","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=520461943"},{"name":"RAIN","artist":"Sekai no Owari","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=485775966","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=485775966","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=485775966"},{"name":"\u7cf8\uff08Cover \u4e2d\u5c9b\u7f8e\u96ea\uff09","artist":"4\u5186","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=475899469","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=475899469","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=475899469"},{"name":"\u96e8\u3060\u308c\u306e\u6b4c","artist":"\u4e45\u4fdd\u30e6\u30ea\u30ab\/\u6c34\u702c\u3044\u306e\u308a","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=520459951","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=520459951","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=520459951"},{"name":"\u732b\u306b\u306a\u308a\u305f\u3044","artist":"\u3064\u3058\u3042\u3084\u306e","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=28461702","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=28461702","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=28461702"},{"name":"\u6708\u304c\u6ce3\u3044\u3066\u308b","artist":"\u3064\u3058\u3042\u3084\u306e","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=643017","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=643017","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=643017"},{"name":"\u30d7\u30e9\u30cd\u30bf\u30ea\u30a6\u30e0","artist":"\u5927\u585a\u611b","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=632681","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=632681","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=632681"},{"name":"\u521d\u604b","artist":"\u6771\u5c71\u5948\u592e","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=488388727","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=488388727","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=488388727"},{"name":"\u624b\u7d19 ~\u62dd\u5553 \u5341\u4e94\u306e\u541b\u3078~","artist":"\u30a2\u30f3\u30b8\u30a7\u30e9\u30fb\u30a2\u30ad","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=550661","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=550661","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=550661"},{"name":"\u3042\u3068\u3072\u3068\u3064","artist":"\u30b1\u30e9\u30b1\u30e9","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=26215437","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=26215437","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=26215437"},{"name":"\u82b1\u3073\u3089\u305f\u3061\u306e\u30de\u30fc\u30c1","artist":"Aimer","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=1357775526","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=1357775526","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=1357775526"},{"name":"\u5c0f\u3055\u306a\u604b\u306e\u3046\u305f","artist":"Diana Garnett","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=28029647","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=28029647","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=28029647"},{"name":"\u541b\u3060\u3063\u305f\u3089","artist":"HAPPY BIRTHDAY","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=26116370","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=26116370","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=26116370"},{"name":"\u3071\u3089\u308c\u30eb\u30fc\u30d7","artist":"aori","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=448916060","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=448916060","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=448916060"},{"name":"\u9280\u6cb3\u9244\u9053\u306e\u30da\u30f3\u30ae\u30f3","artist":"Aiobahn\/nicamoq\/Yunomi","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=540658090","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=540658090","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=540658090"},{"name":"\u30b0\u30e9\u30f3\u30c9\u30a8\u30b9\u30b1\u30fc\u30d7 (Movie edit)","artist":"\u4e09\u6d66\u900f\u5b50","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=1378491296","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=1378491296","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=1378491296"},{"name":"\u5922\u706f\u7c60","artist":"RADWIMPS","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=426881480","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=426881480","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=426881480"},{"name":"\u60f3\u3044\u51fa\u306f\u9060\u304f\u306e\u65e5\u3005","artist":"\u5929\u9580","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=528284","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=528284","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=528284"},{"name":"\u604b\u611b\u30b5\u30fc\u30ad\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3","artist":"\u82b1\u6fa4\u9999\u83dc","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=579954","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=579954","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=579954"},{"name":"\u5f7c\u5973\u306f\u65c5\u306b\u51fa\u308b","artist":"\u9396\u90a3","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=509106775","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=509106775","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=509106775"},{"name":"\u3075\u308f\u3075\u308f\u266a","artist":"\u7267\u91ce\u7531\u4f9d","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=609890","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=609890","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=609890"},{"name":"\u843d\u4e0b(\u3044\u3063\u3071\u3064\u306b\u3085\u3046\u3053\u3093ver.)","artist":"\u65e5\u5411\u6587","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=484249940","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=484249940","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=484249940"},{"name":"\u4e16\u754c\u304c\u7ec8\u308b\u307e\u3067\u306f\u2026","artist":"WANDS","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=5005241","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=5005241","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=5005241"},{"name":"\u30bb\u30f3\u30c1\u30e1\u30f3\u30bf\u30eb\u30af\u30e9\u30a4\u30b7\u30b9 (TV Size)","artist":"halca","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=1336856228","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=1336856228","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=1336856228"},{"name":"secret base ~\u541b\u304c\u304f\u308c\u305f\u3082\u306e~ (10 years after Ver.)","artist":"\u8305\u91ce\u611b\u8863\/\u6238\u677e\u9065\/\u65e9\u898b\u6c99\u7e54","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=33911781","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=33911781","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=33911781"},{"name":"\u707c\u3051\u843d\u3061\u306a\u3044\u7ffc","artist":"\u591a\u7530\u8475","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=34077763","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=34077763","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=34077763"},{"name":"\u30e1\u30b0\u30e1\u30eb ~cuckool mix 2007~","artist":"eufonius","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=760528","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=760528","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=760528"},{"name":"Brave Song","artist":"\u591a\u7530\u8475","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=28699611","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=28699611","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=28699611"},{"name":"\u304d\u307f\u306e\u3053\u3048","artist":"\u5ddd\u5d8b\u3042\u3044","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=528443","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=528443","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=528443"},{"name":"Through the Years & Far Away","artist":"\u307f\u305a\u3055\u308f\u3086\u3046\u304d","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=22697452","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=22697452","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=22697452"},{"name":"one more time one more chance\uff08\u79d2\u901f\u4e94\u5398\u7c73op\uff09","artist":"\u732b\u732b\u6751\u957f","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=432511403","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=432511403","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=432511403"},{"name":"Prime number~\u541b\u3068\u51fa\u4f1a\u3048\u308b\u65e5~","artist":"\u5927\u5009\u660e\u65e5\u9999","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=26115436","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=26115436","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=26115436"},{"name":"\u590f\u3092\u89c1\u3066\u3044\u305f ~\u201c\u86cd\u706b\u306e\u675c\u3078\u201d\u30a8\u30f3\u30c7\u30a3\u30f3\u30b0\u30c6\u30fc\u30de","artist":"\u304a\u304a\u305f\u304b\u9759\u6d41","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=541352","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=541352","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=541352"},{"name":"\u611b\u306b\u3067\u304d\u308b\u3053\u3068\u306f\u307e\u3060\u3042\u308b\u304b\u3044","artist":"RADWIMPS","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=1378491298","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=1378491298","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=1378491298"},{"name":"I beg you","artist":"Aimer","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=1338149091","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=1338149091","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=1338149091"},{"name":"\u307e\u3069\u308d\u307f\u306e\u7d04\u675f","artist":"\u4f50\u85e4\u8061\u7f8e\/\u8305\u91ce\u611b\u8863","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=27552690","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=27552690","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=27552690"},{"name":"\u7d42\u308f\u308a\u306e\u4e16\u754c\u304b\u3089","artist":"\u3084\u306a\u304e\u306a\u304e","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=676568","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=676568","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=676568"},{"name":"\u98a8\u306b\u306a\u308b","artist":"\u3064\u3058\u3042\u3084\u306e","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=643034","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=643034","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=643034"},{"name":"\u7f8e\u3057\u304d\u3082\u306e","artist":"Sound Horizon","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=22782025","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=22782025","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=22782025"},{"name":"You","artist":"\u96ea\u91ce\u4e94\u6708","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=672188","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=672188","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=672188"},{"name":"\u9ce5\u306e\u8a69","artist":"Lia","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=28151022","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=28151022","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=28151022"},{"name":"\u541b\u306e\u77e5\u3089\u306a\u3044\u7269\u8a9e","artist":"supercell","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=399367218","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=399367218","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=399367218"},{"name":"\u5fc3\u505a\u3057","artist":"GUMI\/\u4e00\u4e4b\u702c\u30e6\u30a6","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=28370757","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=28370757","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=28370757"},{"name":"\u900f\u660e\u3067\u900f\u304d\u901a\u3063\u3066\u4f55\u306b\u3067\u3082\u306a\u308c\u305d\u3046\u3067","artist":"HaKU","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=28480834","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=28480834","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=28480834"},{"name":"\u93e1\u82b1\u6c34\u6708","artist":"\u307e\u3075\u307e\u3075","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=33913866","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=33913866","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=33913866"},{"name":"\u5f77\u5fa8\u3048\u308b\u7a7a","artist":"yuiko","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=32166615","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=32166615","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=32166615"},{"name":"\u9020\u82b1\u306e\u8ddd\u96e2\u611f","artist":"\u521d\u97f3\u30df\u30af\/\u306a\u304e\u3055","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=28178039","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=28178039","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=28178039"},{"name":"Alice\uff08Cover \u53e4\u5ddd\u672c\u8217\uff09","artist":"\u7c73\u767d","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=435948605","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=435948605","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=435948605"},{"name":"\u30b5\u30a4\u30ec\u30f3\u30c8\u30fb\u30de\u30b8\u30e7\u30ea\u30c6\u30a3","artist":"\u30d8\u30d6\u30f3\u30baP\/\u521d\u97f3\u30df\u30af","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=29049640","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=29049640","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=29049640"},{"name":"\u30cf\u30ed\u30fc\u3001\u30de\u30a4\u30d5\u30ec\u30f3\u30c9\u3002","artist":"\u51cb\u53f6\u68d5","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=33791938","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=33791938","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=33791938"},{"name":"days","artist":"\u3058\u3093\/Lia","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=28546427","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=28546427","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=28546427"},{"name":"Cynic","artist":"\u95c7\u97f3\u30ec\u30f3\u30ea\/\u30dd\u30ea\u30b9\u30d4\u30ab\u30c7\u30ea\u30fc","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=419596411","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=419596411","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=419596411"},{"name":"\u843d\u65e5","artist":"\u6771\u4eac\u4e8b\u5909","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=838112","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=838112","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=838112"},{"name":"\u82b1\u846c","artist":"\u521d\u97f3\u30df\u30af\/\u306a\u304e\u3055","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=30780948","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=30780948","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=30780948"},{"name":"\u30dd\u30b7\u30a7\u30c3\u30c8\u306e\u304a\u3046\u305f","artist":"\u9752\u8449\u5e02\u5b50","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=557474","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=557474","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=557474"},{"name":"\u5f7c\u65b9\u304b\u3089\u306e\u624b\u7eb8(\u30a2\u30b3\u30fc\u30b9\u30c6\u30a3\u30c3\u30af version)","artist":"\u6728\u4e0b\u7f8e\u7d17\u90fd","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=600569","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=600569","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=600569"},{"name":"\u4eca\u6669\u306f\u304a\u6708\u3055\u3093","artist":"\u30cf\u30f3\u30d0\u30fc\u30c8 \u30cf\u30f3\u30d0\u30fc\u30c8","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=740558","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=740558","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=740558"},{"name":"\u3055\u304f\u3089 ~\u3042\u306a\u305f\u306b\u51fa\u4f1a\u3048\u3066\u3088\u304b\u3063\u305f~","artist":"RSP","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=805197","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=805197","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=805197"},{"name":"White Magic","artist":"Ujico*\/Snail's House","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=33469659","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=33469659","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=33469659"},{"name":"Adagio for Summer Wind","artist":"\u6e05\u6c34\u6df3\u4e00","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=760037","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=760037","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=760037"},{"name":"\u30b9\u30d1\u30fc\u30af\u30eb (movie ver.)","artist":"RADWIMPS","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=426881503","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=426881503","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=426881503"},{"name":"\u3044\u3064\u3082\u4f55\u5ea6\u3067\u3082","artist":"\u6728\u6751\u5f13","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=443860","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=443860","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=443860"},{"name":"Life Is Like A Boat","artist":"Rie fu","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=640565","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=640565","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=640565"},{"name":"\u306a\u3093\u3067\u3082\u306a\u3044\u3084 (movie ver.)","artist":"RADWIMPS","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=426881506","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=426881506","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=426881506"},{"name":"\u65f6\u4ee3\u3092\u8d85\u3048\u308b\u60f3\u30442","artist":"\u548c\u7530\u85ab","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=541131","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=541131","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=541131"},{"name":"\u4e00\u756a\u306e\u5b9d\u7269 (Original Version)","artist":"karuta","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=471987","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=471987","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=471987"},{"name":"Brave Shine","artist":"Aimer","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=32358691","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=32358691","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=32358691"},{"name":"\u6708\u304c\u304d\u308c\u3044","artist":"\u6771\u5c71\u5948\u592e","url":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=url&id=480097178","cover":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=cover&id=480097178","lrc":"https:\/\/api.injahow.cn\/meting\/?server=netease&type=lrc&id=480097178"}]
});
