var A_click=document.getElementsByTagName("li");
var Navs=document.getElementsByTagName("nav")[0];
var Ary=Array.from(A_click);
//循环li
Ary.forEach((e,i)=>{
	//给li标签绑定click事件
	e.addEventListener('click',function(){
		//如果点击当前活动对象是a标签
		if(event.srcElement.tagName.toLowerCase()=="a"){
			//如果上次点击不等于本次点击
			if(this.lastClass!=event.target){
				console.log(this.lastClass)
				var Mark=document.getElementsByTagName("mark");
				var As=event.target.innerText;
				var str="";
				if(Mark.length==0){
					str='<mark>'+As+'<a></a></mark>';
					Navs.innerHTML+=str;
				}else{
					var Arry=Array.from(Mark);
					console.log(Arry);
					Arry.forEach(p=>{
						if(p.innerText==event.target.innerText){
							alert("一样");
						}else{
							str='<mark>'+As+'<a></a></mark>';
							Navs.innerHTML+=str;
							alert("不一样");
						}
					});
				}
				//给本次点击对象添加class
				event.target.className="fuck";
				//如果为真
				if(!!this.lastClass){
					this.lastClass.className="";
				}
				//赋值
				this.lastClass=event.target;
			}
			//阻止冒泡
			event.stopPropagation();
		}
	});
})

