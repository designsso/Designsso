var images = [
 
{"imageURL":"https://i.imgur.com/2m45I8C.gif", "category": "ab"},

{"imageURL":"https://i.imgur.com/KTPuc1A.gif", "category": "ab"},

{"imageURL":"https://i.imgur.com/BhSmenY.gif", "category": "ab"},
 
{"imageURL":"https://i.imgur.com/44Rpt8e.gif", "category": "ab"},
 
{"imageURL":"https://i.imgur.com/UBc6K3a.gif", "category": "ab"},
 
 
]

const RemoveActiveEl = () => {
    try {
        var element = document.querySelector(".tab.active");
        element.classList.remove("active");
    } catch (e) {

    }
}
const AddActiveClass = (name) => {
    var element = document.querySelector(`[data-name="${name}"]`);
    console.log(name, element)
    element.classList.add("active");
}
(function(elmProto){
    if ('scrollTopMax' in elmProto) {
        return;
    }
    Object.defineProperties(elmProto, {
        'scrollTopMax': {
            get: function scrollTopMax() {
              return this.scrollHeight - this.clientHeight;
            }
        },
        'scrollLeftMax': {
            get: function scrollLeftMax() {
              return this.scrollWidth - this.clientWidth;
            }
        }
    });
}
)(Element.prototype);

function PercBetweenTwoNumbers(curValue, maxValue) {
    return curValue/maxValue * 100
}

document.addEventListener("DOMContentLoaded", () => {


    var curScroll = 0;



    function controlScroll (e) {
        var evt = window.event || e;
        if ((e.target && e.target.classList[0]) && e.target.classList[0].includes("tabs")) {
            console.log( e.target.classList[0])
        }
       else {
        var delta = evt.detail? evt.detail*(-120) : evt.wheelDelta;
        if(delta < 0) {
            //scroll down
            curScroll += 25;
        }
        else {
            //scroll up
            curScroll -= 25;
        }
        //console.log(curScroll)
       $('.container').animate({
                scrollTop: curScroll
            }, 40);
       }
    }; 
    
    if (document.attachEvent) {//if IE (and Opera depending on user setting)
        document.attachEvent("onmousewheel", controlScroll)
            
    }
    else if (document.addEventListener) { //WC3 browsers
        document.addEventListener("mousewheel", controlScroll, false)
    }


    $(".scrollBtn").click(() => {

        $('.container').animate({
            scrollTop: 100,
        }, "slow");
        
    })
    $(".scrollBtn2").click(() => {

        $('.container').animate({
            scrollTop: -70
        }, "slow");
        
    })


    for (var image of images.filter(x => x.category === "logo")) {
        if (image.imageURL.endsWith(".mp4")) {
            document.querySelector('.gallery').insertAdjacentHTML('beforeend', ` 
                          <div>
                          
  <video controls autoplay="autoplay" muted loop>
                      <source src="${image.imageURL}" type="video/mp4">
                            </video>
</div>
 `)
        }
        else {
            document.querySelector('.gallery').insertAdjacentHTML('beforeend', `  <figure class="gallery__item gallery__item--1">
                <img src="${image.imageURL}" class="gallery__img" alt="Image 1">
        
                </figure>`)
        }
    }


    document.querySelectorAll('.tab').forEach(el => {
      


        el.addEventListener("click", (e) => {
            var name = e.target.getAttribute('data-name')
            RemoveActiveEl()
            AddActiveClass(name)
            document.querySelector('[name="activeTab"]').setAttribute("value", name)
        
            document.querySelector('.gallery').innerHTML = ""
            for (var image of images.filter(x => x.category === name)) {
                if (image.imageURL.endsWith(".mp4")) {
                    document.querySelector('.gallery').insertAdjacentHTML('beforeend', `  <figure class="gallery__item gallery__item--1">
                            <video autoplay width="auto" height="auto">
                      <source src="${image.imageURL}" type="video/mp4">
                            </video>
                </figure>`)
                }
                else {
                    document.querySelector('.gallery').insertAdjacentHTML('beforeend', `  <figure class="gallery__item gallery__item--1">
                <img src="${image.imageURL}" class="gallery__img" alt="Image 1">
        
                </figure>`)
                }
            }
        
        })
    })
})
