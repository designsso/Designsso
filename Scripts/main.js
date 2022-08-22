var images = [
 
    {"imageURL":"https://i.imgur.com/2m45I8C.gif", "category": "ab"},
    
    {"imageURL":"https://i.imgur.com/KTPuc1A.gif", "category": "ab"},
    
    {"imageURL":"https://i.imgur.com/BhSmenY.gif", "category": "ab"},
     
    {"imageURL":"https://i.imgur.com/44Rpt8e.gif", "category": "ab"},
     
    {"imageURL":"https://i.imgur.com/UBc6K3a.gif", "category": "ab"},
     
    {"imageURL":"https://i.imgur.com/BtQu4P9.gif", "category": "ab"},
    
    {"imageURL":"https://i.imgur.com/yz7pAZk.gif", "category": "ab"},
     
    {"imageURL":"https://i.imgur.com/k2kQ8nI.gif", "category": "ab"},
     
    {"imageURL":"https://i.imgur.com/z9lx5qc.gif", "category": "ab"},
    
    {"imageURL":"https://i.imgur.com/4CW1tBt.gif", "category": "ab"},
    
    {"imageURL":"https://i.imgur.com/z9lx5qc.gif", "category": "ab"},
    
    {"imageURL":"https://i.imgur.com/rVpfcjw.gif", "category": "ab"},
    
    {"imageURL":"https://i.imgur.com/rUWdqQT.gif", "category": "ab"},
    
    {"imageURL":"https://i.imgur.com/1clhwan.gif", "category": "ab"},
    
    {"imageURL":"https://i.imgur.com/aHZQidf.gif", "category": "ab"},
    
    {"imageURL":"https://i.imgur.com/n8UjLZc.gif", "category": "ab"},
     
     {"imageURL":"https://i.imgur.com/RA300At.gif", "category": "ab"},
     
    
     
     
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

var available = [
    "logo",
    "ab",
    "sb",
    "web",
    "app",
    "threads",
    "other"
]


const Refresh = (name) => {
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
}
document.addEventListener("DOMContentLoaded", () => {
    console.log(document.location.href.split("/"))
    const HandleTab = () => {
        var id = document.location.href.split("/").find(x => x.includes("#"))
        if (id) {
            id = id.trim().replace("#", "")
            console.log(id)
            if (available.includes(id)) {
                RemoveActiveEl()
                AddActiveClass(id)
                Refresh(id);
                document.querySelector('[name="activeTab"]').setAttribute("value", id)

            }
        }
    }

    HandleTab()

    document.querySelector("html").addEventListener("wheel", e=>e.preventDefault());
    document.querySelector(".container").addEventListener("wheel", e=>myFunction(e));

    const target = document.querySelector(".container");

    document.addEventListener("wheel", function(e){
      // prevent the default scrolling event
      e.preventDefault();
    
      // scroll the div
      target.scrollBy(e.deltaX, e.deltaY);
    })



    $(".scrollBtn").click(() => {


        $('.container').animate({
            scrollTop: 0,
        }, "slow");
        
    })
    $(".scrollBtn2").click(() => {

        $('.container').animate({
            scrollTop: document.querySelector('.container').scrollTopMax,

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
