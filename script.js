
let Iphone = document.querySelector(".iphone_image")
let colorname = document.querySelector(".color_name")
let IphoneMini = document.querySelector(".iPhone_13_mini")
let colors = document.querySelector(".colors")
let allcolors = document.querySelectorAll("[data-Idx]")
let arr = [
    {
      name: "Blue",
      img: "./img/iphone-13-finish-select-202207-5-4inch-blue.jfif",
    },
    {
      name: "pink",
      img: "./img/iphone-13-finish-select-202207-5-4inch-pink (1).jfif",
    },
    {
      name: "midnight",
      img: "./img/iphone-13-finish-select-202207-5-4inch-midnight.jfif",
    },
    {
      name: "starlight",
      img: "./img/iphone-13-finish-select-202207-5-4inch-starlight (1).jfif",
    },
    {
      name: "green",
      img: "./img/iphone-13-finish-select-202207-5-4inch-green.jfif",
    },
    {
      name: "red",
      img: "./img/iphone-13-finish-select-202207-5-4inch-pink.jfif",
    }
  ];
  let count = 0
  function removeActive() {
    allcolors.forEach(item =>{
        item.classList.remove('active')
    })
  }
  for(let item of allcolors){
    item.addEventListener('mousemove' , () => {
        let idx = item.getAttribute('data-Idx')
        colorname.innerHTML = arr[idx].name
    })
    item.addEventListener('mouseout' , () =>{
        colorname.innerHTML = arr[count].name

    })
    item.addEventListener('click' , () => {
        removeActive()
        let idx =item.getAttribute('data-Idx')
        count = idx
        colorname.innerHTML = arr[idx].name
        Iphone.src = arr[idx].img
        item.classList.add('active')
    })
  }
/* IphoneMini.addEventListener('click' , () => {{
    colors.style.opacity = "1"
    IphoneMini.style.boxShadow = "0px 0px 5px 0px blue";
    blue.addEventListener('mousemove' , () =>{{
        // blue.style.boxShadow = "5px 0 0 0 red"
        colorname.innerHTML = 'Color-Blue';
    }})
    blue.addEventListener('click' , () =>{{
        blue.style.boxShadow = "0px 0px 5px 1px blue";
        pink.style.boxShadow = "0px 0px 0px 0px blue";
        midnight.style.boxShadow = "0px 0px 0px 0px blue";
        starlight.style.boxShadow = "0px 0px 0px 0px blue";
        red.style.boxShadow = "0px 0px 0px 0px blue";
        green.style.boxShadow = "0px 0px 0px 0px blue";
        Iphone.src = "./img/iphone-13-finish-select-202207-5-4inch-blue.jfif"
    }})
    pink.addEventListener('mousemove' , () =>{{
        // blue.style.box-shaxow:5px gray;
        colorname.innerHTML = 'Color-Pink';
    }})
    pink.addEventListener('click' , () =>{{
        pink.style.boxShadow = "0px 0px 5px 1px blue";
        green.style.boxShadow = "0px 0px 0px 0px blue";
        midnight.style.boxShadow = "0px 0px 0px 0px blue";
        starlight.style.boxShadow = "0px 0px 0px 0px blue";
        red.style.boxShadow = "0px 0px 0px 0px blue";
        blue.style.boxShadow = "0px 0px 0px 0px blue";
        Iphone.src = "./img/iphone-13-finish-select-202207-5-4inch-pink (1).jfif"
    }})
    midnight.addEventListener('mousemove' , () =>{{
        // blue.style.box-shaxow:5px gray;
        colorname.innerHTML = 'Color-midnight';
    }})
    midnight.addEventListener('click' , () =>{{
        midnight.style.boxShadow = "0px 0px 5px 1px blue";
        pink.style.boxShadow = "0px 0px 0px 0px blue";
        green.style.boxShadow = "0px 0px 0px 0px blue";
        starlight.style.boxShadow = "0px 0px 0px 0px blue";
        red.style.boxShadow = "0px 0px 0px 0px blue";
        blue.style.boxShadow = "0px 0px 0px 0px blue";
        Iphone.src = "./img/iphone-13-finish-select-202207-5-4inch-midnight.jfif"
    }})
    starlight.addEventListener('mousemove' , () =>{{
        ;
        colorname.innerHTML = 'Color-Starlight';
    }})
    starlight.addEventListener('click' , () =>{{
        pink.style.boxShadow = "0px 0px 0px 0px blue";
        midnight.style.boxShadow = "0px 0px 0px 0px blue";
        green.style.boxShadow = "0px 0px 0px 0px blue";
        red.style.boxShadow = "0px 0px 0px 0px blue";
        blue.style.boxShadow = "0px 0px 0px 0px blue";
        starlight.style.boxShadow = "0px 0px 5px 1px blue";
        Iphone.src = "./img/iphone-13-finish-select-202207-5-4inch-starlight (1).jfif"
    }})
    green.addEventListener('mousemove' , () =>{{
        // blue.style.box-shaxow:5px gray;
        colorname.innerHTML = 'Color-Green';
    }})
    green.addEventListener('mouseup' , () =>{{
        green.style.boxShadow = "0px 0px 5px 1px blue";
        pink.style.boxShadow = "0px 0px 0px 0px blue";
        midnight.style.boxShadow = "0px 0px 0px 0px blue";
        starlight.style.boxShadow = "0px 0px 0px 0px blue";
        red.style.boxShadow = "0px 0px 0px 0px blue";
        blue.style.boxShadow = "0px 0px 0px 0px blue";
        Iphone.src = "./img/iphone-13-finish-select-202207-5-4inch-green.jfif"
    }})
    red.addEventListener('mousemove' , () =>{{
        // blue.style.box-shaxow:5px gray;
        colorname.innerHTML = 'Color-(PRODUCT)RED';
    }})
    red.addEventListener('mouseup' , () =>{{
        pink.style.boxShadow = "0px 0px 0px 0px blue";
        midnight.style.boxShadow = "0px 0px 0px 0px blue";
        starlight.style.boxShadow = "0px 0px 0px 0px blue";
        green.style.boxShadow = "0px 0px 0px 0px blue";
        blue.style.boxShadow = "0px 0px 0px 0px blue";
        red.style.boxShadow = "0px 0px 5px 1px blue";
        Iphone.src = "./img/iphone-13-finish-select-202207-5-4inch-pink.jfif"
    }})
}}) */
