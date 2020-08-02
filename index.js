// navbar
clicked=false;
menu=document.querySelectorAll('.menu-control');
if(menu!=null){
menu.forEach(element=>{
element.addEventListener('click',e=>{
    if(clicked){
        document.querySelector('.nav-right').style.display='none';
        document.querySelector('.menu').style.display='block';
        document.querySelector('.cancel').style.display='none';
        clicked=false
    }else{
        document.querySelector('.nav-right').style.display='block';
        document.querySelector('.menu').style.display='none';
        document.querySelector('.cancel').style.display='block';
        clicked=true;
    }
        
    });
});}
document.querySelectorAll('.outline').forEach(btn=>{
    btn.addEventListener('click',e=>{
        window.open(`mailto:wanyekifs@outlook.com?subject=Software\ Enquiry&body=We\ are interested\ in\ your software\.\
        please\ send us\ your\ price\ tags.`)
    })
})

document.querySelector('.b_icon').addEventListener('click',e=>{
    navigator.vibrate(100)
})
document.querySelectorAll('.bb').forEach(btn=>{
    sharedata={
        title:'Schoolapp',
        text:'Best Highschool management software',
        url:'https://scoolappx.netlify.app'
    }
    btn.addEventListener('click',e=>{
        // navigator.vibrate([100]);
        navigator.share(sharedata)
        .then(()=>{
                console.log('heee')
            }
        ).catch((e)=>{
           console.log(e)
        })
    })
})

wow = new WOW(
    {
      animateClass: 'animated',
      offset:       100,
      callback:     function(box) {
        console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
      }
    }
  );
wow.init()
//navbar

