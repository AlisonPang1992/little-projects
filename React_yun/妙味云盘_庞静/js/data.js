var data = {
    "0": {
        "id": 0,
        "pid": -1,
        "title": "微云",
        "type": "file"
    },
    "1": {
        "id": 1,
        "pid": 0,
        "title": "我的文档",
        "type": "file"
    },
    "2": {
        "id": 2,
        "pid": 0,
        "title": "我的音乐"
    },
    "3": {
        "id": 3,
        "pid": 2,
        "title": "周杰伦"
    },
    "4": {
        "id": 4,
        "pid": 3,
        "title": "发如雪"
    },
    "5": {
        "id": 5,
        "pid": 3,
        "title": "夜曲"
    },
    "6": {
        "id": 6,
        "pid": 1,
        "title": "js程序设计"
    },
    "7": {
        "id": 7,
        "pid": 3,
        "title": "稻香"
    },
    "8": {
        "id": 8,
        "pid": 2,
        "title": "王杰"
    },
    "9": {
        "id": 9,
        "pid": 1,
        "title": "js权威指南"
    },
    "10": {
        "id": 10,
        "pid": 2,
        "title": "张国荣"
    }
}

var side_l=document.querySelector('.tree-menu');
var ul_side=side_l.getElementsByTagName('ul')[0];
var bread_nav=document.querySelector('.bread-nav')
var folders=document.querySelector('.folders')
var f_empty=document.querySelector('.f-empty')
var rename1=document.getElementById('rename');
var del=document.getElementById('del');
var create=document.getElementById('create');
var numid=100;
var title=document.querySelector('.title').querySelector('a')
console.log(title)
var modal_tree=document.querySelector('.modal-tree')
var remove=document.getElementById('remove')
var btn_inputs=modal_tree.getElementsByTagName('input')


var checkedAll=document.querySelector('.checkedAll')
//初始化
render(0);
function render(n){ 
    //生成一堆li
    var stro='';
    for(var attr in data){
        if(!data[attr])continue;
        stro+=`<li id=${data[attr].id} pid=${data[attr].pid}>
        <div class="tree-title tree-ico open">
		<span id=${data[attr].id} pid=${data[attr].pid}><i></i>${data[attr].title}</span>
		</div>
    </li>`
    }
    ul_side.innerHTML=stro; 
    var Lis_side=Array.from(ul_side.getElementsByTagName('li'));

    //按照顺序看是否有li上pid是相同的，有相同的插到这个元素里面，原来的li删除   
    Lis_side.forEach((e,i)=>{
        var n=e.getAttribute('id')
        var Lis_side1=Array.from(ul_side.getElementsByTagName('li'))
        Lis_side1.forEach((el,j)=>{
            if(el.getAttribute('pid')==n){
                var e=sss()                
                function sss(){
                    var e1=''
                    Lis_side1=Array.from(ul_side.getElementsByTagName('li'));
                    Lis_side1.forEach(e=>{
                        if(e.getAttribute('id')==n)e1=e;
                    })
                    return e1
                }
                e.innerHTML+='<ul><li pid='+n+' id='+el.getAttribute('id')+'>'+el.innerHTML+'</li></ul>';
                el.remove();
            }
        })
    })  
    //给每个ul加上marginleft，看是否ul下还有ul，如果没有里就去掉前面的箭头
    var arr=Array.from(ul_side.getElementsByTagName('ul'))
    arr.forEach(e=>{
        e.style.marginLeft='20px';
        if(e.getElementsByTagName('ul').length==0){
            e.style.marginLeft='50px';
            if(e.getElementsByTagName('i')[0]){
                e.getElementsByTagName('i')[0].remove();
                e.classList.add('meiyou')
            }
        }
    })
    shensuo(ul_side)
    sidel(n)
    fl(n)
    nav_click()
    checkall()
    newdata()
}
//点击侧边栏生成导航栏和文件夹
function sidel(n){
    if(n!=undefined){
        console.log(n)
        bread_nav.innerHTML='<span id='+n+' pid='+data[n].pid+'>'+data[n].title+'</span>';
        while(data[data[n].pid]){
            n=data[n].pid;
            bread_nav.innerHTML='<a href="javascript:;" id='+n+' pid='+data[n].pid+'>'+data[n].title+'</a>'+bread_nav.innerHTML;
        }      
    }
    newdata()
    var lis_side=Array.from(ul_side.getElementsByTagName('li'))
    var arr1=[]
    lis_side.forEach((e,i)=>{        
        e.addEventListener('click',function(ev){        
            if(ev.target.tagName!='SPAN'||ev.target.tagName=='I')return;
            fl(e)
            checkall();
            arr1.push({value:e.getElementsByTagName('span')[0].innerText,id:e.getAttribute('id'),pid:e.getAttribute('pid')})
            bread_nav.innerHTML='';
            arr1.forEach((e,i)=>{
                if(i==arr1.length-1){bread_nav.innerHTML+='<span id='+e.id+' pid='+e.pid+'>'+e.value+'</span>';return }
                bread_nav.innerHTML+='<a href="javascript:;" id='+e.id+' pid='+e.pid+'>'+e.value+'</a>'               
            })
            if(arr1[arr1.length-1].value==ev.target.innerText)arr1=[];
            nav_click()
            newdata()
        },true)
    })
}
//给侧边栏加点击i标签伸缩功能
function shensuo(ul_side){
    var LiS=Array.from(ul_side.getElementsByTagName('li'))
    LiS.forEach(e=>{
        e.onclick=function(ev){         
            console.log(e.firstElementChild) 
            if(ev.target.tagName!='I')return
            var Uls=[]
            var nnnnn=e.getAttribute('id');
            for(var attr in data){
                if(data[attr].pid==nnnnn){
                    var Lis_side=Array.from(ul_side.getElementsByTagName('li'))
                    Lis_side.forEach(ei=>{
                        if(ei.getAttribute('id')==data[attr].id){
                            Uls.push(ei)
                        }
                    })
                }
            }
            console.log(Uls)
            if(e.firstElementChild.classList.contains('open')){
                e.firstElementChild.classList.remove('open');
                e.firstElementChild.classList.add('close');
                Uls.forEach(e=>{
                    e.style.display='none'
                })                         
            }else{
                e.firstElementChild.classList.add('open');
                e.firstElementChild.classList.remove('close')  
                Uls.forEach(e=>{
                    e.style.display='block'
                })    
            }
            ev.cancelBubble=true;
        }
    })

}
//点击导航
function nav_click(){
    Array.from(bread_nav.children).forEach((e,i)=>{
        e.onclick=function(ev){
            fl(e)
            bread_nav.innerHTML='<span id='+e.getAttribute('id')+' pid='+e.getAttribute('pid')+'>'+e.innerText+'</span>';
            var x=e.getAttribute('pid')
            pre(x);
            nav_click();
            checkall();
            checkall()
            newdata()
        }
        function pre(x){
            if(!data[x])return;
                bread_nav.innerHTML='<a href="javascript:;" id='+x+' pid='+data[x].pid+'>'+data[x].title+'</a>' +bread_nav.innerHTML;
                return pre(data[x].pid)
        }               
    })
}
//双击文件夹和显示文件夹
function fl(s){
    checkall();  
    folders.innerHTML=''
   var xid=(typeof(s)=='number')?s:s.getAttribute('id');
   var arrx=[];
   for(var attr in data){
        if(!data[attr])continue;
       if(data[attr].pid==xid)arrx.push(data[attr])
   }
   if(arrx.length==0){
    folders.style.height=0;
    f_empty.style.display='block'
   }else{
    folders.style.height='600px'
    f_empty.style.display='none'
   }
   arrx.forEach(e=>{
        folders.innerHTML+=`<div class="file-item" id=${e.id} pid=${e.pid} >
                                <img src="img/folder-b.png" alt="" />
                                <span class="folder-name">${e.title}</span>
                                <input type="text" class="editor"/>
                                <i></i>
                            </div>`
   })
    //点击文件夹进入
    Array.from(folders.children).forEach(e=>{
        e.ondblclick=function(){
            var str=bread_nav.lastElementChild
            bread_nav.removeChild(bread_nav.lastElementChild);
            bread_nav.innerHTML+='<a href="javascript:;" id='+str.getAttribute('id')+' pid='+str.getAttribute('pid')+'>'+str.innerText+'</a>';
            bread_nav.innerHTML+='<span id='+e.getAttribute('id')+' pid='+e.getAttribute('pid')+'>'+e.innerText+'</span>';
            fl(e);
            nav_click()
        }
        //点击选中单个文件夹
        e.querySelector('i').onclick=function(){
            this.classList.toggle('checked');
            e.classList.toggle('active');
            checkall()
        }
    })
    Del()
    move()   
    rename();
}
//全选不全选
function checkall(){
    if(folders.children.length==0)return
    var s=Array.from(folders.children).every((e,i)=>{
        return e.querySelector('i').className=='checked'
    })
    if(s){
        checkedAll.classList.add('checked') 
    }else{
        checkedAll.classList.remove('checked')
    }
    checkedAll.onclick=function(){
        checkedAll.classList.toggle('checked');
        if(checkedAll.classList.contains('checked')){
            Array.from(folders.children).forEach(e=>{
                e.querySelector('i').classList.add('checked');
                e.classList.add('active');
            })
        }else{
            Array.from(folders.children).forEach(e=>{
                e.querySelector('i').classList.remove('checked');
                e.classList.remove('active');
            }) 
        }
    }
}
//重命名
function rename(){
    rename1.onclick=function(){
       var checkedF= folders.querySelectorAll('.checked')
        if(checkedF.length==0){
            alertk('请选择文件')
        }else if(checkedF.length>1){
            alertk('只能选择一个文件')
        }else{
            var name1=checkedF[0].parentNode.querySelector('input');
            var folder_name=checkedF[0].parentNode.querySelector('.folder-name')
            name1.style.display='block';
            folder_name.style.display='none'
            name1.select();
            name1.value=folder_name.innerText;
            name1.onblur=function(){
                var lll=rep(name1,folder_name,checkedF[0].parentNode)
                if(lll==1){
                    name1.style.display='none';
                    folder_name.style.display='block'
                    folder_name.innerText=name1.value;
                    data[checkedF[0].parentNode.getAttribute('id')].title=name1.value;
                    render(checkedF[0].parentNode.getAttribute('pid')*1)
                    alertk('重命名成功')
                }             
            }
        }
    }
}
//看名字是否重复
function rep(name1,folder_name,chec){
    var onoff3=true
    Array.from(folders.querySelectorAll('.file-item')).forEach(e=>{
        if(name1.value==e.querySelector('span').innerText&&e!=chec){
            alertk('不能为重复名字')
            onoff3=false;
        }
    })
    if(!onoff3){
        name1.select();
    }else{
        if(name1.value==''){
            alertk('不能为空');
            name1.select();
        }else{
            return 1;
        }
    }
}
//删除
function Del(){
    del.onclick=function(){
        var checkedF= Array.from(folders.querySelectorAll('.checked'))
        if(checkedF.length==0){
            alertk('请选择要删除的文件')
        }else{
            var tanbox=document.getElementById('tanbox');
            console.log(tanbox)
            tanbox.style.display='block'
            var As=tanbox.getElementsByTagName('a');
            var close_ico=tanbox.querySelector('.close-ico');
            As[1].onclick=close_ico.onclick=function(){
                tanbox.style.display='none'
            }
            As[0].onclick=function(){
                var ss=checkedF[0].parentNode.getAttribute('pid')*1
                var arr_del=[];
                checkedF.forEach(e=>{
                    arr_del.push(e.parentNode.getAttribute('id'))
                })
                var onoff=false;
                arr_del.forEach(e=>{
                    search(e)
                })
                function search(id){
                    for(var attr in data){
                        if(!data[attr])continue;
                        if(data[attr].pid==id){
                            arr_del.push(data[attr].id);
                            search(data[attr].id)
                        }
                    }
                }
                console.log(arr_del)
                arr_del.forEach(e=>{
                    delete data[e]
                    console.log(data)
                })
                tanbox.style.display='none'
                render(ss)     
                alertk('删除成功')      
            }           
        }      
    }
}
//新建文件夹
function newdata(){
    create.onclick=function(){
        var ss=bread_nav.querySelector('span').getAttribute('id')

        if(folders.innerHTML==''){
            folders.style.height='600px'
            f_empty.style.display='none' 
        }
        folders.innerHTML+=`<div class="file-item" id=${numid} pid=${ss}>
                                <img src="img/folder-b.png" alt="" />
                                <span class="folder-name">新建文件夹${numid}</span>
                                <input type="text" class="editor"/>
                                <i></i>
                            </div>`
                           console.log (folders.lastElementChild)
        folders.lastElementChild.querySelector('input').style.display='block';
        folders.lastElementChild.querySelector('span').style.display='none';
        folders.lastElementChild.querySelector('input').focus();
        folders.lastElementChild.querySelector('input').onblur=function(){
            var lll=rep(folders.lastElementChild.querySelector('input'),folders.lastElementChild.querySelector('span'),folders.lastElementChild)
            if(lll==1){
                folders.lastElementChild.querySelector('span').innerText=folders.lastElementChild.querySelector('input').value;
                folders.lastElementChild.querySelector('input').style.display='none';
                folders.lastElementChild.querySelector('span').style.display='block';
                data[numid]={
                    "id":numid*1,
                    "pid":ss*1,
                    "title":folders.lastElementChild.querySelector('input').value
                }
                console.log(data)
                numid++;
                render(ss*1)  
                alertk('新建文件夹成功！')
            }
        }     
    }
}
//移动到
function move(){
    remove.onclick=function(){
        var checkedF= folders.querySelectorAll('.checked')
        if(checkedF.length==0){
            alertk('请选择文件')
        }else if(checkedF.length>1){
            alertk('只能选择一个文件')
        }else{
            modal_tree.querySelector('.tip').innerHTML=''
            var content=modal_tree.querySelector('.content')        
            modal_tree.style.display='block';
            var zhezhao=document.getElementById('zhezhao');
            zhezhao.style.display='block'
            content.innerHTML='<ul>'+ul_side.innerHTML+'</ul>'
            console.log(content.innerHTML)           
            var Lis=Array.from(content.getElementsByTagName('li'))          
            Lis.forEach(e=>{
                e.style.display='block'
                e.addEventListener('click',function(ev){
                    if(ev.target.tagName!='SPAN'||ev.target.tagName=='I')return;
                    modal_tree.querySelector('.tip').innerHTML='<i id='+e.getAttribute('id')+' pid='+e.getAttribute('pid')+'></i>'+ev.target.innerText;
                    console.log(modal_tree.querySelector('.tip').innerHTML)
                    ev.cancelBubble=true;
                },false)
            })
            shensuo(content)
            btn_inputs[1].onclick=function(){
                var ss=data[checkedF[0].parentNode.getAttribute('id')].pid;
                var nn=modal_tree.querySelector('.tip').querySelector('i').getAttribute('id');
                var onoff1=true                                                                                            
                nnsearch(nn,data[checkedF[0].parentNode.getAttribute('id')].id)
                function nnsearch(nn,jj){                  
                    if(nn==jj){
                        alertk('移动的路径无效');
                        onoff1=false;
                        return
                    }               
                    if(data[data[nn].pid]){                    
                        nnsearch(data[data[nn].pid].id,jj)
                    }
                }
                if(onoff1){
                    data[checkedF[0].parentNode.getAttribute('id')].pid=nn
                    modal_tree.style.display='none'
                    zhezhao.style.display='none'
                    render(ss*1)
                    alertk('移动成功')
                }else{
                    modal_tree.style.display='none' 
                    zhezhao.style.display='none'
                }
            }
            btn_inputs[0].onclick=modal_tree.querySelector('.icon_close').onclick =function(){
                modal_tree.style.display='none' 
                zhezhao.style.display='none'
            }
        }        
    }
}
//框选
select_f();
function select_f(){
    folders.onmousedown=function(ev){
        title.focus();
        if(ev.target.tagName!='DIV')return
    var kuang=document.createElement('div')
    kuang.className='kuang';
    box.appendChild(kuang)
       var pX=ev.pageX;
       var pY=ev.pageY;
       document.onmousemove=function(ev){
           var lis=folders.children
           if(folders.getBoundingClientRect().top>ev.pageY)ev.pageY=folders.getBoundingClientRect().top
           if(folders.offsetLeft>ev.pageX)ev.pageX=folders.offsetLeft
           var iH=Math.abs(ev.pageY-pY);
           var iW=Math.abs(ev.pageX-pX);
           kuang.style.height=iH+'px';
           kuang.style.width=iW+'px';
           if(ev.pageY-pY>0){            
                kuang.style.top=pY+'px';           
           }else{
                if(folders.getBoundingClientRect().top>ev.pageY){
                    kuang.style.top=folders.getBoundingClientRect().top+'px';
                    kuang.style.height=Math.abs(folders.getBoundingClientRect().top-pY)+'px';
                }else{
                    kuang.style.top=ev.pageY+'px';
                }                              
           }    
           if(ev.pageX-pX>0){            
                kuang.style.left=pX+'px';           
            }else{
                if(folders.offsetLeft>ev.pageX){
                    kuang.style.left=folders.offsetLeft+'px'; 
                    kuang.style.width=Math.abs(folders.offsetLeft-pX)+'px';
                }else{
                    kuang.style.left=ev.pageX+'px';
                }    
            }  
            for(var i=0;i<lis.length;i++){
                if(bong(lis[i],kuang)){
                    lis[i].classList.add('active');
                    lis[i].querySelector('i').className='checked'
                }else{
                    lis[i].classList.remove('active');
                    lis[i].querySelector('i').className=''
                }
            }
            checkall()    
       }
       document.onmouseup=function(){
        document.onmousemove=null
        kuang.remove()
       }
       return false
   }
}
function bong(a,b){
    /*
        B的四个方向
    */
    let bl = b.getBoundingClientRect().left;
    let bt = b.getBoundingClientRect().top;
    let br = bl + b.offsetWidth;
    let bb = bt + b.offsetHeight;
    /*
        A的四个方向
    */
    let al = a.getBoundingClientRect().left;
    let at = a.getBoundingClientRect().top;
    let ar = al + a.offsetWidth;
    let ab = at + a.offsetHeight;

    if(br < al || bb < at || bl > ar || bt > ab){
        //没碰到
        return false;
    }else{
       return true;
    }
}
//弹字
function alertk(str){
    var tankuang=document.querySelector('.full-tip-box');
    tankuang.style.top='0px';
    tankuang.querySelector('.tip-text').innerText=str;
    setTimeout(function(){
        tankuang.style.top='-50px';
    },1000)
}
