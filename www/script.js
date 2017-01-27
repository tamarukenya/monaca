// This is a JavaScript file
 // ポーカー
 
    var Poker = function() {
        var element = document.getElementById("script");
        element.style.backgroundImage = 'url(./image/dai.jpg)';
        element.style.backgroundSize = '100% 100%';
        element.style.backgroundRepeat = 'no-repeat';
    var hairetu = [["s01","s02","s03","s04","s05","s06","s07","s08","s09","s10","s11","s12","s13"],
                   ["c01","c02","c03","c04","c05","c06","c07","c08","c09","c10","c11","c12","c13"],
                   ["h01","h02","h03","h04","h05","h06","h07","h08","h09","h10","h11","h12","h13"],
                   ["d01","d02","d03","d04","d05","d06","d07","d08","d09","d10","d11","d12","d13"],
                   ["null","null","null","null","null","null","null","null","null","null","null","null","null","x01"]];
    var suuzi = [1,2,3,4,5,6,7,8,9,10,11,12,13,"joker"]; // ペアなどの判定に用いる数字              
    var mycard = [];  // 自分の手札
    var cpcard = [];    //  相手の手札
    var mysuuzi = [];   // 自分の数字
    var cpsuuzi = [];   // 相手の数字
   var gara = ["s","c","h","d","joker"]; // フラッシュの判定に用いる柄
    var mygara = [];    // 自分の柄
    var cpgara = [];    // 相手の柄
    var goukei =0;      //
    var random =0;      // ランダム関数に用いる変数
    var count = 0;      // 交換機能利用時の制限、勝負後の交換機能の利用不可
    var jadgecount = 0; // 勝負後の交換をできないようにする
    var wincount = 0;
    // 各メソッドの開始
    for(i = 0; i < 5;i++){
        // 自分の手札配り
        random =  Math.floor(Math.random() * hairetu.length);
        var a = hairetu[random];
        var c = gara[random];
        random = Math.floor(Math.random() * a.length);
       var mozi = c;
        var b = a[random];
        if(b == "null"){
            while(b == "null"){
                random =  Math.floor(Math.random() * hairetu.length);
                var a = hairetu[random];
                var c = gara[random];
                random = Math.floor(Math.random() * a.length);
        var b = a[random];
        var mozi = c;       
            }
        }
        a[random] = "null";
        mygara[i] = mozi;
        mycard[i] = b;
        mysuuzi[i] = suuzi[random];
        // CPの手札配り
        random =  Math.floor(Math.random() * hairetu.length);
        var a = hairetu[random];
        var c = gara[random];
        random = Math.floor(Math.random() * a.length);
       var mozi = c;
        var b = a[random];
        if(b == "null"){
            while(b == "null"){
                random =  Math.floor(Math.random() * hairetu.length);
                var a = hairetu[random];
                var c = gara[random];
                random = Math.floor(Math.random() * a.length);
        var b = a[random];
        var mozi = c;     
            }
        }
        a[random] = "null";
        cpgara[i] = mozi;
        cpcard[i] = b;
        cpsuuzi[i] = suuzi[random];
        

    var num = 0;      
    if(i == 4){
    // cpの手札を開示
    CpOpen = function(){
        document.cp.src = "./image/card/"+cpcard[0]+".png";
        document.cp1.src = "./image/card/"+cpcard[1]+".png";
        document.cp2.src = "./image/card/"+cpcard[2]+".png";
        document.cp3.src = "./image/card/"+cpcard[3]+".png";
        document.cp4.src = "./image/card/"+cpcard[4]+".png";
        };
    // 自分の手札を開示
    openmycard = function(){
        document.my.src = "./image/card/"+mycard[0]+".png";
        document.my1.src = "./image/card/"+mycard[1]+".png";
        document.my2.src = "./image/card/"+mycard[2]+".png";
        document.my3.src = "./image/card/"+mycard[3]+".png";
        document.my4.src = "./image/card/"+mycard[4]+".png";
    };
    
    // 役判定などの勝敗決定メソッド
   
    var sortcpcard = [];
    var sortcpgara = [];
    var sortcpsuuzi = [];
    for(var i = 0; i < cpcard.length; i++){
        sortcpcard[i] = cpcard[i];
        sortcpgara[i] = cpgara[i];
        sortcpsuuzi[i] = cpsuuzi[i];
    }
    
    var suuziwk;
    var garawk;
    var mycardwk;
    var jbasho = null;
     // 自分の手札の数字をsort
    for(var i = 0; i < mysuuzi.length-1;i++){
        for(var j = i+1; j < mysuuzi.length;j++){
if(mysuuzi[i] == "joker"){
 jbasho = i;}
             if(mysuuzi[i] > mysuuzi[j]){
                suuziwk = mysuuzi[i];
                garawk = mygara[i];
                mycardwk = mycard[i];
                mysuuzi[i] = mysuuzi[j];
                mysuuzi[j] = suuziwk;
                mygara[i] = mygara[j];
                mygara[j] = garawk;
                mycard[i] = mycard[j];
                mycard[j] = mycardwk;
            }
        }
    }
var cjbasho = null;
    // CPの手札の数字をsort
    for(var i = 0; i < sortcpsuuzi.length-1;i++){
        for(var j = i+1; j < sortcpsuuzi.length;j++){
            if(sortcpsuuzi[i] == "joker"){
 cjbasho = i;}
            if(sortcpsuuzi[i] > sortcpsuuzi[j]){
                suuziwk = sortcpsuuzi[i];
                garawk = sortcpgara[i];
                mycardwk = sortcpcard[i];
                sortcpsuuzi[i] = sortcpsuuzi[j];
                sortcpsuuzi[j] = suuziwk;
                sortcpgara[i] = sortcpgara[j];
                sortcpgara[j] = garawk;
                sortcpcard[i] = sortcpcard[j];
                sortcpcard[j] = mycardwk;
            }
        }
    }
    if(jbasho >=0){
      for(var i = jbasho;i < mysuuzi.length;i++){
            if((mysuuzi[i-1]+1) == mysuuzi[i+1]){
                   suuziwk = mysuuzi[i];
                garawk = mygara[i];
                mycardwk = mycard[i];
                mysuuzi[i] = mysuuzi[i+1];
                mysuuzi[i+1] = suuziwk;
                mygara[i] = mygara[i+1];
                mygara[i+1] = garawk;
                mycard[i] = mycard[i+1];
                mycard[i+1] = mycardwk;
              }
}
}
    if(cjbasho >=0){
      for(var i = cjbasho;i < sortcpsuuzi.length;i++){
            if((sortcpsuuzi[i-1]+1) == sortcpsuuzi[i+1]){
                   suuziwk = sortcpsuuzi[i];
                garawk = sortcpgara[i];
                mycardwk = sortcpcard[i];
                sortcpsuuzi[i] = sortcpsuuzi[i+1];
                sortcpsuuzi[i+1] = suuziwk;
                sortcpgara[i] = sortcpgara[i+1];
                sortcpgara[i+1] = garawk;
                sortcpcard[i] = sortcpcard[i+1];
                sortcpcard[i+1] = mycardwk;
              }
}
}
    var flush = 1;
    var gara = mygara[0];
    if(gara == "joker"){
        gara = mygara[1];
    }
    
                
    // 自分のフラッシュの役判定
    for(var i = 0; i < mygara.length; i++){
        if (mygara[i] == "joker"){
            continue;
        }
        if　(mygara[i]　!= gara){
             flush = 0;
            break;
        }
    }
  
    var cpflush = 1;
    var cgara = cpgara[0];
    if(cgara == "joker"){
        cgara = cpgara[1];
    }
    // CPのフラッシュの役判定
    for(var i = 0; i < cpgara.length; i++){
        if(cpgara[i] == "joker"){
            continue;
        }
        if　(cpgara[i]　!= cgara){
            cpflush = 0;
            break;
        }
    }
   
    // 自分のペアの役判定
    var pair = 0;
    var jpair = 0;
    for(var i = 0; i < mysuuzi.length; i++){
        for(var j = i+1; j < 5; ++j){
            if(mysuuzi[i] == mysuuzi[j]){ // 通常の判定
                pair+=1;
            }
        }
        if(mysuuzi[i] == "joker"){//「ジョーカー」の判定
            jpair += 1;
        }
    }
    if((jpair == 1)&&(pair == 1)){  // ワンペアだった場合のジョーカーによるスリーカードへの判定
            jpair = 2;
        }
    if((jpair == 1)&&(pair == 3)){ // ジョーカー入りフォーカードの判定
        jpair = 3;
    }
    if((jpair == 1)&&(pair == 2)){
        jpair = 2;
    }
        // ジョーカー入りのフラッシュの場合の変数の初期化
    if((flush == 1)&&((jpair+pair) < 4)){
        jpair = 0;
        pair = 0;
    }
     // CPのペアの役判定
    var pair1 = 0;
    var jpair1 = 0;
    for(var i = 0; i < cpsuuzi.length; i++){
        for(var j = i+1; j < 5; ++j){
            if(cpsuuzi[i] == cpsuuzi[j]){ // 通常の判定
                pair1+=1;
            }
        }
        if(cpsuuzi[i] == "joker"){//「ジョーカー」の判定
            jpair1 += 1;
        }   
    }
    if((jpair1 == 1) && (pair1 == 1)){ // ワンペアだった場合のジョーカーによるスリーカードへの判定
            jpair1 = 2;
        }
    var val1;
    var val2;
    var straight = 1;
    var wk = 0;
   
    // 自分のストレートの役判定
    for(var i = 0 ; i < mysuuzi.length-1;i++){
        if(mysuuzi[i] == "joker"){
            continue;
        }
        if(mysuuzi[i]+1 != mysuuzi[i+1]){
            if(mysuuzi[i+1] != "joker"){
            straight = 0;
            break;
              }else if(mysuuzi[i]+2 == mysuuzi[i+2]){
                  i+=2;
              continue;
              }
        }
    }
    if(straight == 1){
        pair = 0;
        jpair = 0;
    }
     var straight1 = 1;
     
    // CPのストレートの役判定
    for(var i = 0 ; i < sortcpsuuzi.length-1;i++){
        if(sortcpsuuzi[i] == "joker"){
            continue;
        }
        if(sortcpsuuzi[i]+1 != sortcpsuuzi[i+1]){
            if(sortcpsuuzi[i+1] != "joker"){
            straight1 = 0;
            break;
        }else if(sortcpsuuzi[i]+2 == sortcpsuuzi[i+2]){
                  i+=2;
              continue;
              }
        }
    }
    if(straight1 == 1){
        pair1 = 0;
        jpair1 = 0;
    }
    // ロイヤルストレートの役判定
    if((mysuuzi[0] == 1 && mysuuzi[1] == 10 && mysuuzi[2] == 11 && mysuuzi[3] == 12 && mysuuzi[4] == 13)&&(mygara[0] == mygara[1] == mygara[2] == mygara[3] == mygara[4])){
        straight = 2;
    }
    if((sortcpsuuzi[0] == 1 && sortcpsuuzi[1] == 10 && sortcpsuuzi[2] == 11 && sortcpsuuzi[3] == 12 && sortcpsuuzi[4] == 13)&&(sortcpgara[0] == sortcpgara[1] == sortcpgara[2] == sortcpgara[3] == sortcpgara[4])){
        straight1 = 2;
    }
    for(var i = 0;i < mysuuzi.length;i++){
        document.write("<input type=\"hidden\" value=\"おはよう\">");
    }
    
    // 自分の役
    var myyaku = 0;
    myyaku = ((flush * 100) +(straight * 10) + pair +jpair);
    var yaku1 = "";
    // CPの役
    var cpyaku = ((cpflush * 100) + (straight1 * 10) + pair1 + jpair1);
    var yaku2 = "";
    // 自分の役定数
    if(myyaku == 120){
        yaku1 = "RSTF";
    }
    if(myyaku == 110){
        yaku1 = "STF";
    }
    if(myyaku == 100){
        yaku1 = "f";
    }
    if(myyaku == 10){
        yaku1 = "ST";
    }
    if(myyaku == 6){
        yaku1 = "four";
    }
    if(myyaku == 4){
        yaku1 = "fh";
    }
    if(myyaku == 3){
        yaku1 = "three";
    }
    if(myyaku == 2){
        yaku1 = "two";
    }
    if(myyaku == 1){
        yaku1 = "one";
    }
    if(myyaku == 0){
        yaku1 = "no";
    }
    // CPの役定数
    if(cpyaku == 120){
        yaku2 = "RSTF";
    }
    if(cpyaku == 110){
        yaku2 = "STF";
    }
        if(cpyaku == 100){
            yaku2 = "f";
        }
        if(cpyaku == 10){
            yaku2 = "ST";
        }
        if(cpyaku == 6){
            yaku2 = "four";
        }
        if(cpyaku == 4){
            yaku2 = "fh";
        }
        if(cpyaku == 3){
            yaku2 = "three";
        }
        if(cpyaku == 2){
            yaku2 = "two";
        }
        if(cpyaku == 1){
            yaku2 = "one";
        }
        if(cpyaku == 0){
            yaku2 = "no";
        }
    var shouhai = ""; // 勝敗結果を格納する変数
        if(myyaku > cpyaku){
            shouhai = "win";
        }else if(myyaku == cpyaku){
            shouhai = "draw";
        }else{
            shouhai = "lose";
        }
//ロイヤルフラッシュ    = 120;
//ストレートフラッシュ  = 110;
//フラッシュ            = 100;
//ロイヤルストレート    = 20;
//ストレート            = 10;
//ファイブカード        = 7;
//フォーカード          = 6;
//フルハウス            = 4;
//スリーカード          = 3;
//ツーペアー            = 2;
//ワンペアー            = 1;
//ノーペアー            = 0;

 
    document.write("<div id=\"shouhai\">");
        
        document.write("<table border=1 width=\"100%\">");
        document.write("<tr><td bgcolor=\"#00ff00\" width=10%>CPの役:</td><td width=20% height=50%><img src=\"./image/yaku/"+yaku2+".PNG\"  width=100% height= auto></td></tr>");
        document.write("<tr><td bgcolor=\"#00ff00\" width=5%>あなたの役:</td><td width=20%><img src=\"./image/yaku/"+yaku1+".PNG\" width=100% heigth=auto name=\"myyaku\"></td></tr></table>");
        document.write("<table border=1><tr><td bgcolor=\"#00ff00\" width=auto><font color=\"blue\">結果</font></td><td><img src=\"./image/"+shouhai+".png\" width=100% heigth=auto name=\"kekka\"></td></tr></table>");
      document.write("</div>");
      
      document.getElementById("shouhai").style.visibility="hidden";
    
      check = function(num){
          if(num == 0){
                document.getElementById("shouhai").style.visibility="hidden";
            }else{
                document.getElementById("shouhai").style.visibility="visible";
            }
            jadgecount = 1;
        };

        
         
        document.write("<div id=\"menu\">");
        document.write("<table border=1>");
    document.write("<tr><th><a href=\"index.html\"><input type=\"button\" value=\"タイトル\" style=\"WIDTH: 80px; HEIGHT: 30px\"></a></th>");
    document.write("<th><input type=\"button\" name = \"button1\"  value=\"開始\" onClick=\"openmycard();change(1)\" style=\"WIDTH: 80px; HEIGHT: 30px\"></th></tr></table>");
    document.write("</div>");
     document.write("<div id=\"menu1\">");
    document.write("<table border=1><tr><th><a href=\"index.html\"><input type=\"button\" value=\"タイトル\" style=\"WIDTH: 80px; HEIGHT: 30px\"></a></th>");
    document.write("<th><a href=\"poker2.html\"><input type=\"button\" value=\"もう一度\" style=\"WIDTH: 80px; HEIGHT: 30px\"></a></th>");
    document.write("<th><input type=\"button\" name = \"button1\" value=\"勝負\" onClick=\"check(1);CpOpen();\" style=\"WIDTH: 80px; HEIGHT: 30px\"></th></tr></table>");
    document.write("</div>");
    document.getElementById("menu1").style.display="none";
    document.getElementById("menu2").style.visibility="hidden";
   
    change = function(num){
        if(num == 1){
            document.getElementById("menu").style.display="none";
            document.getElementById("menu1").style.display="block";
            document.getElementById("menu2").style.visibility="visible";
        }else{
            document.getElementById("menu1").style.display="none";
            document.getElementById("menu").style.display="block";
            document.getElementById("menu2").style.visibility="hidden";
        }
  
        };
        
         Battle = function(){
    var jbasho = null;
     // 自分の手札の数字をsort
    for(var i = 0; i < mysuuzi.length-1;i++){
        for(var j = i+1; j < mysuuzi.length;j++){
if(mysuuzi[i] == "joker"){
 jbasho = i;}
             if(mysuuzi[i] > mysuuzi[j]){
                suuziwk = mysuuzi[i];
                garawk = mygara[i];
                mycardwk = mycard[i];
                mysuuzi[i] = mysuuzi[j];
                mysuuzi[j] = suuziwk;
                mygara[i] = mygara[j];
                mygara[j] = garawk;
                mycard[i] = mycard[j];
                mycard[j] = mycardwk;
            }
        }
    }
 if(jbasho >=0){
      for(var i = jbasho;i < mysuuzi.length;i++){
            if((mysuuzi[i-1]+1) == mysuuzi[i+1]){
                   suuziwk = mysuuzi[i];
                garawk = mygara[i];
                mycardwk = mycard[i];
                mysuuzi[i] = mysuuzi[i+1];
                mysuuzi[i+1] = suuziwk;
                mygara[i] = mygara[i+1];
                mygara[i+1] = garawk;
                mycard[i] = mycard[i+1];
                mycard[i+1] = mycardwk;
              }
}
}
    var flush = 1;
    var gara = mygara[0];
    if(gara == "joker"){
        gara = mygara[1];
    }
    
                
    // 自分のフラッシュの役判定
    for(var i = 0; i < mygara.length; i++){
        if (mygara[i] == "joker"){
            continue;
        }
        if　(mygara[i]　!= gara){
             flush = 0;
            break;
        }
    }
  
    // 自分のペアの役判定
    var pair = 0;
    var jpair = 0;
    for(var i = 0; i < mysuuzi.length; i++){
        for(var j = i+1; j < 5; ++j){
            if(mysuuzi[i] == mysuuzi[j]){ // 通常の判定
                pair +=1;
            }
        }
        if(mysuuzi[i] == "joker"){//「ジョーカー」の判定
            jpair += 1;
        }
    }
    if((jpair == 1)&&(pair == 1)){  // ワンペアだった場合のジョーカーによるスリーカードへの判定
            jpair = 2;
        }
        // ジョーカー入りのフラッシュの場合の変数の初期化
    if(flush == 1){
        jpair = 0;
        pair = 0;
    }
    
    var suuziwk;
    var garawk;
    var mycardwk;

     
    var straight = 1;
    // 自分のストレートの役判定
    for(var i = 0 ; i < mysuuzi.length-1;i++){
        if(mysuuzi[i] == "joker"){
            continue;
        }
        if(mysuuzi[i]+1 != mysuuzi[i+1]){
         if(mysuuzi[i+1] == "joker") {
            if(mysuuzi[i]+2 == mysuuzi[i+2]){
                 alert("ohayou");
            }else{
                alert("konnbanha");
                straight = 0;
                break;
            }
           
        }else{
            alert("konnitiha");
            straight =0;
            break;
        }
    }else{
        alert("yes sir");
        straight = 0;
        break;
    }
    if((i = 3)&&(mysuuzi[i+1] == "joker")&&(straight == 1)){
        break;
    }
    }
    if(straight == 1){
        pair = 0;
        jpair = 0;
    }
   
    // ロイヤルストレートの役判定
    if((mysuuzi[0] == 1 && mysuuzi[1] == 10 && mysuuzi[2] == 11 && mysuuzi[3] == 12 && mysuuzi[4] == 13)&&(mygara[0] == mygara[1] == mygara[2] == mygara[3] == mygara[4])){
        straight = 2;
        jpair = 0;
        pair = 0;
    }
    
    // 自分の役
    var myyaku;
    myyaku = ((flush * 100) +(straight * 10) + pair +jpair);
    var yaku = "";
    
    // 自分の役定数
        if(myyaku == 100){
            yaku = "f";
        }
        if(myyaku == 10){
            yaku = "ST";
        }
        if(myyaku == 4){
            yaku = "fh";
        }
        if(myyaku == 3){
            yaku = "three";
        }
        if(myyaku == 2){
            yaku = "two";
        }
        if(myyaku == 1){
            yaku = "one";
        }
        if(myyaku == 0){
            yaku = "no";
        }
   var shouhai = "";
   if(myyaku > cpyaku){
            shouhai = "win";
        }else if(myyaku == cpyaku){
            shouhai = "draw";
        }else{
            shouhai = "lose";
        }
//ロイヤルフラッシュ    = 120;
//ストレートフラッシュ  = 110;
//フラッシュ            = 100;
//ロイヤルストレート    = 20;
//ストレート            = 10;
//ファイヴカード        = 7;
//フォーカード          = 6;
//フルハウス            = 4;
//スリーカード          = 3;
//ツーペアー            = 2;
//ワンペアー            = 1;
//ノーペアー            = 0;
    
     document.myyaku.src = "./image/yaku/"+yaku+".PNG";
     document.kekka.src = "./image/"+shouhai+".png";

};

dasite = function(){
    var gara = ["s","c","h","d","joker"];
    if((count == 0)&&(jadgecount == 0)){
        if(count == 0){
       if(document.form1.check.value == 1){
           mygara[0] = "oppai";
           random =  Math.floor(Math.random() * hairetu.length);
        var a = hairetu[random];
        var c = gara[random];
        random = Math.floor(Math.random() * a.length);
        mozi = c;
        var b = a[random];
        if(b == "null"){
            while(b == "null"){
                random =  Math.floor(Math.random() * hairetu.length);
             var    a = hairetu[random];
            var     c = gara[random];
                random = Math.floor(Math.random() * a.length);
         b = a[random];
         mozi = c;
            }
        }
        a[random] = "null";
        mygara[0] = mozi;
        mycard[0] = b;
        mysuuzi[0] = suuzi[random];
       }
       if(document.form1.check1.value == 1){
          random =  Math.floor(Math.random() * hairetu.length);
        var a = hairetu[random];
        var c = gara[random];
        random = Math.floor(Math.random() * a.length);
       var mozi = c;
        var b = a[random];
        if(b == "null"){
            while(b == "null"){
                random =  Math.floor(Math.random() * hairetu.length);
                 a = hairetu[random];
                 c = gara[random];
                random = Math.floor(Math.random() * a.length);
         b = a[random];
      var mozi = c;       
            }
        }
        a[random] = "null";
        mygara[1] = mozi;
        mycard[1] = b;
        mysuuzi[1] = suuzi[random];
       } 
       if(document.form1.check2.value == 1){
           random =  Math.floor(Math.random() * hairetu.length);
        var a = hairetu[random];
        var c = gara[random];
        random = Math.floor(Math.random() * a.length);
       var mozi = c;
        var b = a[random];
        if(b == "null"){
            while(b == "null"){
                random =  Math.floor(Math.random() * hairetu.length);
                 a = hairetu[random];
                 c = gara[random];
                random = Math.floor(Math.random() * a.length);
         b = a[random];
         mozi = c;
        
            }
        }
        a[random] = "null";
        mygara[2] = mozi;
        mycard[2] = b;
        mysuuzi[2] = suuzi[random];
       } 
       if(document.form1.check3.value == 1){
           random =  Math.floor(Math.random() * hairetu.length);
        var a = hairetu[random];
        var c = gara[random];
        random = Math.floor(Math.random() * a.length);
       var mozi = c;
        var b = a[random];
        if(b == "null"){
            while(b == "null"){
                random =  Math.floor(Math.random() * hairetu.length);
                var a = hairetu[random];
                var c = gara[random];
                random = Math.floor(Math.random() * a.length);
        var b = a[random];
        var mozi = c;
        
            }
        }
        a[random] = "null";
        mygara[3] = mozi;
        mycard[3] = b;
        mysuuzi[3] = suuzi[random];
       } 
       if(document.form1.check4.value == 1){
           random =  Math.floor(Math.random() * hairetu.length);
        var a = hairetu[random];
        var c = gara[random];
        random = Math.floor(Math.random() * a.length);
       var mozi = c;
        var b = a[random];
        if(b == "null"){
            while(b == "null"){
                random =  Math.floor(Math.random() * hairetu.length);
                var a = hairetu[random];
                var c = gara[random];
                random = Math.floor(Math.random() * a.length);
        var b = a[random];
        var mozi = c;
        
            }
        }
        a[random] = "null";
        mygara[4] = mozi;
        mycard[4] = b;
        mysuuzi[4] = suuzi[random];
       }
       ch = 1;
        }
        if(ch == 1){
       Battle();
       openmycard();
       count++;
        }
    }else if(count == 1){
       // 交換制限回数s
       alert("交換しないで");
    }else if(jadgecount == 1){
        alert("勝敗はついているよ");
    }
        };
    }
    }
     document.getElementById("high&low").style.visibility="hidden";
    };