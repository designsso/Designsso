var images = [
 



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

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('.container').addEventListener("scroll", (e) => {
        console.log(e)
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