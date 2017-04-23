// 彩瓷
var caici = {
	chengpin : [
		{
			name : "客户定制日用艺术陶瓷1",
			title : "《手工捏花二号茶罐》",
			content : "规格（cm）：18（高）×15（直径）/16（高）×16（直径）"
		},
		{
			name : "客户定制日用艺术陶瓷2",
			title : "《手工捏花二号茶罐》",
			content : "规格（cm）：18（高）×15（直径）/16（高）×16（直径）"
		},
		{
			name : "客户定制日用艺术陶瓷3",
			title : "《手工捏花二号茶罐》",
			content : "规格（cm）：18（高）×15（直径）/16（高）×16（直径）"
		},
		{
			name : "客户定制日用艺术陶瓷4",
			title : "《手工捏花二号茶罐》",
			content : "规格（cm）：18（高）×15（直径）/16（高）×16（直径）"
		}
	],
	dashi : [
		{
			name : "陈新寿1",
			title : "湖南省工艺美术设计大师、湖南省陶瓷艺术大师",
			content : "陈新寿又名陈启寿。1962年生，江苏南京人。中国当代陶瓷美术家、高级工艺美术师。。。。。。。。<br><br>陈新寿先生是当代陶瓷艺术家的全才。从艺近40年来，他潜心研究，勇于创新，把传统陶瓷。。。。。。"
		},
		{
			name : "陈新寿2",
			title : "湖南省工艺美术设计大师、湖南省陶瓷艺术大师",
			content : "陈新寿又名陈启寿。1962年生，江苏南京人。中国当代陶瓷美术家、高级工艺美术师。。。。。。。。<br><br>陈新寿先生是当代陶瓷艺术家的全才。从艺近40年来，他潜心研究，勇于创新，把传统陶瓷。。。。。。"
		},
		{
			name : "陈新寿3",
			title : "湖南省工艺美术设计大师、湖南省陶瓷艺术大师",
			content : "陈新寿又名陈启寿。1962年生，江苏南京人。中国当代陶瓷美术家、高级工艺美术师。。。。。。。。<br><br>陈新寿先生是当代陶瓷艺术家的全才。从艺近40年来，他潜心研究，勇于创新，把传统陶瓷。。。。。。"
		}
	],
	qixing : [
		"人物","动物","生肖","花器","茶器","香器","酒器","挂饰","礼品"
	],
	wenshi : [
		"人物","动物","生肖","花器","茶器","香器","酒器","挂饰","礼品"
	]
};

// 捏塑
var niesu = {
	chengpin : [
		{
			name : "客户定制日用艺术陶瓷1",
			title : "《手工捏花二号茶罐》",
			content : "规格（cm）：18（高）×15（直径）/16（高）×16（直径）"
		},
		{
			name : "客户定制日用艺术陶瓷2",
			title : "《手工捏花二号茶罐》",
			content : "规格（cm）：18（高）×15（直径）/16（高）×16（直径）"
		},
		{
			name : "客户定制日用艺术陶瓷3",
			title : "《手工捏花二号茶罐》",
			content : "规格（cm）：18（高）×15（直径）/16（高）×16（直径）"
		},
		{
			name : "客户定制日用艺术陶瓷4",
			title : "《手工捏花二号茶罐》",
			content : "规格（cm）：18（高）×15（直径）/16（高）×16（直径）"
		}
	],
	dashi : [
		{
			name : "陈新寿1",
			title : "湖南省工艺美术设计大师、湖南省陶瓷艺术大师",
			content : "陈新寿又名陈启寿。1962年生，江苏南京人。中国当代陶瓷美术家、高级工艺美术师。。。。。。。。<br><br>陈新寿先生是当代陶瓷艺术家的全才。从艺近40年来，他潜心研究，勇于创新，把传统陶瓷。。。。。。"
		},
		{
			name : "陈新寿2",
			title : "湖南省工艺美术设计大师、湖南省陶瓷艺术大师",
			content : "陈新寿又名陈启寿。1962年生，江苏南京人。中国当代陶瓷美术家、高级工艺美术师。。。。。。。。<br><br>陈新寿先生是当代陶瓷艺术家的全才。从艺近40年来，他潜心研究，勇于创新，把传统陶瓷。。。。。。"
		},
		{
			name : "陈新寿3",
			title : "湖南省工艺美术设计大师、湖南省陶瓷艺术大师",
			content : "陈新寿又名陈启寿。1962年生，江苏南京人。中国当代陶瓷美术家、高级工艺美术师。。。。。。。。<br><br>陈新寿先生是当代陶瓷艺术家的全才。从艺近40年来，他潜心研究，勇于创新，把传统陶瓷。。。。。。"
		}
	],
	qixing : [
		"人物","动物","生肖","花器","茶器","香器","酒器","挂饰","礼品"
	]
};

$(document).ready(function() {
	
	var urlData = urlToJson();
	
	$("#page1").length && $(function(){
		setTimeout(function(){
			$('body').animate({scrollTop: $(document).height() }, 1200); //底部 
		},3000);
	});
	$("#page2").length && $(function(){
		
	});
	$("#page3").length && $(function(){
		var type = urlData.type;
		setCookie('type',type);
		if( type == 'caici' ){
			$(".wenshi").css('display','block');
		}
	});
	$("#page4").length && $(function(){
		var type = getCookie('type');
		var choice = urlData.choice;
		setCookie('choice',choice);
		
		$(".choice-title").attr('src','img/d'+ choice +'.jpg');
		
		
		var data,list;
		if( type == 'caici' ){
			data = caici;
		}else{
			data = niesu;
		}
		
		switch (choice){
			case 'chengpin':{
				list = data.chengpin;
				break;
			}
			case 'dashi':{
				list = data.dashi;
				break;
			}
			case 'qixing':{
				list = data.qixing;
				break;
			}
			default:{
				list = data.wenshi;
				break;
			}
		}
		var htmlStr = '';
		for (var i=0;i<list.length;i++) {
			htmlStr += '<a class="item" id="'+ i +'">';
			
			if( choice == 'qixing' ){
				htmlStr += '<p>'+ list[i] +'</p>';
			}else{
				htmlStr += '<img src="img/e'+ choice + i +'s.jpg" />';
			}
			
			htmlStr += '</a>';
		}
		$(".list").html(htmlStr);
		
		if( choice == 'qixing' || choice == 'wenshi' ){
			$(".item").click(function(){
				var me = $(this);
				$(".item").removeClass('active');
				me.addClass('active');
				setCookie( choice , me.attr('id') );
				$(".queren").show();
			});
		}else{
			$(".item").each(function(){
				var me = $(this);
				me.attr('href','page5.html?id='+me.attr('id'));
			});
		}
	});
	
	$("#page5").length && $(function(){
		var type = getCookie('type');
		var choice = getCookie('choice');
		
		var data,list;
		if( type == 'caici' ){
			data = caici;
		}else{
			data = niesu;
		}
		
		switch (choice){
			case 'chengpin':{
				list = data.chengpin;
				break;
			}
			case 'dashi':{
				list = data.dashi;
				break;
			}
			case 'qixing':{
				list = data.qixing;
				break;
			}
			default:{
				list = data.wenshi;
				break;
			}
		}
		
		if( choice == 'qixing' || choice == 'wenshi' ){
			var qixing = getCookie('qixing');
			var wenshi = getCookie('wenshi');
			
			if( qixing == false ){
				window.location.replace('page4.html?choice=qixing');
			}
			if( type == 'caici' ){
				if( wenshi == false ){
					window.location.replace('page4.html?choice=wenshi');
				}
				$(".wenshi").css('display','block');
			}
			
			$("#inp-qixing").val( list[ parseInt(qixing) ] );
			$("#inp-wenshi").val( list[ wenshi ] );
			
			$(".dingzhi").show();
			
		}else{
			$(".info").show();
			var id = parseInt( urlData.id );
			$(".info img").attr('src','img/e'+choice+id+'.jpg');
			
			$(".info h1").html( list[id].name );
			$(".info h2").html( list[id].title );
			$(".info p").html( list[id].content );
		}
		
	});
	
});


window.shareData = {
	// 微信分享词       
	"imgUrl": "",
	"tLink": '',
	"tTitle": "铜官窑",
	"tContent": "彩瓷泥塑定制"
};

// 获取用户信息
function setCookie(name, value) {
	var Days = 365;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ';path=/';
	// 作用域全域名,单页则删除  + ';path=/'
	return value;
}

function getCookie(name) {
	var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
	if(arr = document.cookie.match(reg))
		return unescape(arr[2]);
	else
		return false;
}

//将url中的参数转换成json格式
function urlToJson() { //默认参数为当前链接
	var url = arguments[0] || window.location.href;
	if(url.indexOf('?') < 0) {
		return false; //不存在参数返回false
	} else {
		var paraString = url.substring(url.indexOf('?') + 1, url.length);
		var paraJsonString;
		paraJsonString = paraString.replace(/\=/g, "\"\:\"");
		paraJsonString = paraJsonString.replace(/\&/g, "\",\"");
		paraJsonString = paraJsonString.replace(/\+/g, " ");
		paraJsonString = paraJsonString.replace(/\%26/g, "&");
		paraJsonString = paraJsonString.replace(/\%2F/g, "\/");
		paraJsonString = paraJsonString.replace(/\%0A/g, "\:");
		paraJsonString = '{"' + paraJsonString + '"}';
		return JSON.parse(paraJsonString);
	}
}