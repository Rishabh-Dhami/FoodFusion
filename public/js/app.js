// preloader section

const preloader=document.querySelector("#preloader");

window.addEventListener("load",()=>{
  preloader.style.display="none"
})


//  cursor srection
var timeout;

const cursorSize=()=>{
  xScale = 1;
  yScale = 1;

  xPrev = 0;
  yPrev = 0;
  window.addEventListener("mousemove", (dets) => {
    clearTimeout(timeout)
    var xDiff = dets.clientX - xPrev;
    var yDiff = dets.clientY - yPrev;

    xPrev = dets.clientX;
    y = dets.clientY;

    xScale = gsap.utils.clamp(.8, 1.2, xDiff)
    yScale = gsap.utils.clamp(.8, 1.2, yDiff)

    cursorMove(xScale, yScale);

    timeout= setTimeout(function(){
      cursor.style.transform = `translate( ${dets.clientX}px,${dets.clientY}px)
    scale(${1},${1})`
    },100)

  })
}



cursorSize()


const cursor = document.querySelector("#cursor");
const cursorMove = (xScale, yScale) => {
  window.addEventListener("mousemove", (move) => {
    cursor.style.transform = `translate( ${move.clientX}px,${move.clientY}px)
    scale(${xScale},${yScale})`
  })
}

cursorMove()



//  navbar section

const navbar = document.querySelectorAll("#navbar a");
const sec = document.querySelectorAll("section");

function activeMenu() {
  let current = "";
  sec.forEach(section => {

    const sectionTop = section.offsetTop;
    const sectionheight = section.clientHeight;

    if (pageYOffset >= (sectionTop - sectionheight / 3)) {
      current = section.getAttribute("id")
    }
  })

  navbar.forEach((nav) => {
    nav.classList.remove("active");
    if (nav.classList.contains(current)) {
      nav.classList.add("active")
    }
  })

}


window.addEventListener("scroll", () => {
  activeMenu()
})


// slider section

const slides = document.querySelectorAll(".slides")
const bar = document.querySelectorAll(".bar div")

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
})

bar.forEach((bar, index) => {
  bar.addEventListener("click", function (e) {
    removebarActive()
    bar.classList.add("active")
    sliding(index);
  })
})


const removebarActive = () => {
  bar.forEach((bar) => {
    bar.classList.remove("active")
  })
}




const sliding = (input = "") => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${input * 100}%)`
  })
}


// gallery slider

const gallerySlides = document.querySelectorAll(".gallery-slide");

gallerySlides.forEach((slide, index) => {
  slide.style.left = `${index * 20}%`;
})







// dropdown function

const method = document.getElementById("method")
const dropdown=document.querySelector("#navbar .drop-down");

console.log(dropdown)
const method2 = document.getElementById("method-2")

dropdown.addEventListener("click",()=>{
  method.classList.toggle("active");
  method2.classList.remove("active")
})

const dropLeft = () => {
  method2.classList.toggle("active")
}



// menu Section    


const menuScoller = document.querySelectorAll("#menu .menu-scoller a");
const menuHeader = document.getElementById("menu-header")

menuScoller.forEach((menu) => {
  menu.addEventListener('click', function () {
    removeScoller()
    this.classList.add("active")
    menuHeader.innerHTML = this.innerHTML;
  })
})

const removeScoller = () => {
  menuScoller.forEach((menu) => {
    menu.classList.remove("active")
  })
}



const chefIntro = document.querySelectorAll(" #chefs .chef-intro")
const chefFollow = document.querySelectorAll("#chefs .chef-follow")

chefIntro.forEach((chef, index) => {
  chef.addEventListener('mouseover', function () {
    addFollow(index)
  })
})


const addFollow = (index = "") => {
  removeFollow()
  chefFollow[index].classList.add("active")
}

const removeFollow = () => {
  chefFollow.forEach((chef) => {
    chef.classList.remove("active")
  })
}


// xbar section


const xbar = document.querySelector("#xbar");
const nav = document.querySelector("#navbar")

const navbarTag=document.querySelectorAll("#navbar a");

navbarTag.forEach(navbar=>{
  navbar.addEventListener("click",()=>{
    nav.classList.add("active");
  })
})

xbar.addEventListener('click', function () {
  nav.classList.add("active");
  method.classList.remove("active");
  method2.classList.remove("active");
})


const homeBar = document.querySelector("#homeBar");

homeBar.addEventListener("click", function () {
  nav.classList.remove("active")
  nav.classList.add("unactive");
})


// Get the target element
const targetCountingElements = document.querySelectorAll(".counter-numbers");

// // Options for the Intersection Observer
const options = {
  root: null, // Use the viewport as the root
  rootMargin: "0px", // No margin
  threshold: 0.8, // Trigger when at least 80% of the element is visible
};

// // Create an observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
//       // Execute your JavaScript code when the target element is in view
//       // For example, you can add a class to the element
      targetCountingElements.forEach((myValue) => {
        let target_count = myValue.dataset.count;
        let init_count = myValue.innerText;

        let speed = 50;

        let incrementSpeed = Math.floor(target_count / speed);

        const updateNumber = () => {
          init_count = +init_count + incrementSpeed;
          myValue.innerText = init_count;

          if (init_count < target_count) {
            setTimeout(() => {
              updateNumber();
            }, 50);
          }
        };

        updateNumber();
      });

//       // Disconnect the observer after the element is in view (if needed)
      observer.disconnect();
    }
  });
}, options);

// Start observing the target element
targetCountingElements.forEach((targetElement) =>{
  observer.observe(targetElement)
}
);






// #event section


const resizeEventHandler = (e) => {
  const eventBar = document.querySelectorAll('#event-bar div');
  const eventSlides = document.querySelectorAll('.event-slide');
  const gallerySlides = document.querySelectorAll('.gallery-slide');

  if (e.currentTarget.innerWidth >= 800) {
    eventSlides.forEach((slide, _) => {
      slide.style.left = `${0}%`;
    });

    const removeEbarActive = () => {
      eventBar.forEach((bar, index) => {
        if (index === 0) return;
        bar.classList.remove('active');
      });
    };

    const eventsliding = (input = '') => {
      eventSlides.forEach((slide) => {
        slide.style.transform = `translateX(${0}%)`;
      });
    };

    eventBar.forEach((bar, index) => {
      removeEbarActive();
      eventsliding(index);
    })

    const gallerySlides=document.querySelectorAll(".gallery-slide");

    gallerySlides.forEach((slide,index)=>{
        slide.style.left=`${index*19}%`;
    })

    const galleryBar=document.querySelectorAll("#gallery-bar div");
    
    const gallerysliding=(input="")=>{
        gallerySlides.forEach((slide)=>{
            slide.style.transform=`translateX(${0}%)`
        })
    }
    
    const removeGbarActive=()=>{
        galleryBar.forEach((bar, index)=>{
            if (index === 0) return;
            bar.classList.remove("active") 
         });
    }
    
    galleryBar.forEach((bar,index)=>{
        removeGbarActive()
        gallerysliding(index)
    })
    

    

  }else  if (e.currentTarget.innerWidth < 477) {

    gallerySlides.forEach((slide, index) => {
      slide.style.left = `${index * 100}%`;
    })

    const galleryBar = document.querySelectorAll("#gallery-bar div");




    const gallerysliding = (input = "") => {
      gallerySlides.forEach((slide) => {
        slide.style.transform = `translateX(-${input * 100}%)`
      })
    }

    const removeGbarActive = () => {
      galleryBar.forEach((bar) => {
        bar.classList.remove("active")
      });
    }

    galleryBar.forEach((bar, index) => {
      bar.addEventListener('click', function () {
        removeGbarActive()
        bar.classList.add("active")
        gallerysliding(index)
      })
    });

    eventSlides.forEach((slide,index)=>{
      slide.style.left=`${index*100}%`;
  })
  
 
  eventBar.forEach((bar,index)=>{
  bar.addEventListener('click',function(){
      removeEbarActive()
      bar.classList.add("active")
      eventsliding(index)
  })
  })
  
  
  const eventsliding=(input="")=>{
      eventSlides.forEach((slide)=>{
          slide.style.transform=`translateX(-${input*100}%)`
      })
  }
  
  const removeEbarActive=()=>{
      eventBar.forEach((bar)=>{
          bar.classList.remove("active") 
       })
     }
  } else if(e.currentTarget.innerWidth < 800){
    
    const gallerySlides=document.querySelectorAll(".gallery-slide");

    gallerySlides.forEach((slide,index)=>{
        slide.style.left=`${index*34}%`;
    })

    const galleryBar=document.querySelectorAll("#gallery-bar div");
    
    const gallerysliding=(input="")=>{
        gallerySlides.forEach((slide)=>{
            slide.style.transform=`translateX(${0}%)`
        })
    }
    
    const removeGbarActive=()=>{
        galleryBar.forEach((bar, index)=>{
            if (index === 0) return;
            bar.classList.remove("active") 
         });
    }
    
    galleryBar.forEach((bar,index)=>{
        removeGbarActive()
        gallerysliding(index)
    })
    
    
            eventSlides.forEach((slide,index)=>{
                slide.style.left=`${index*100}%`;
            })
            
           
            eventBar.forEach((bar,index)=>{
            bar.addEventListener('click',function(){
                removeEbarActive()
                bar.classList.add("active")
                eventsliding(index)
            })
            })
            
            
            const eventsliding=(input)=>{
                eventSlides.forEach((slide)=>{
                    slide.style.transform=`translateX(-${input*100}%)`
                })
            }
            
            const removeEbarActive=()=>{
                eventBar.forEach((bar)=>{
                    bar.classList.remove("active") 
                 })
               }
}
}
// Attach listener function on state changes



window.addEventListener("resize", resizeEventHandler)

