const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('mouseover', ()=> {
        removeFocus();
        item.classList.add('selected');
    })

    const removeFocus = ()=> {
        items.forEach(item => {
            item.classList.remove('selected');
        })
    }
})

const buttonUp = document.querySelector('#buttonUp');
window.onscroll = function() {
  let scroll = window.pageYOffset || document.documentElement.scrollTop;
  let result = scroll > 450 ? buttonUp.style.opacity = '1' : buttonUp.style.opacity = '0'
}

buttonUp.addEventListener('click', scrollStart)

function scrollStart() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });

}

const next = document.querySelector('#next');
const back = document.querySelector('#back');
const part = document.querySelector('#slide-title');
const partTwo = document.querySelector('#slide-title-two')

const images = ['12.jpg', '13.jpg', '14.jpg'];
const header = ['Известные европейские бренды', 'Кухни премиум класса', 'Топ 10 поставщиков премиальной техники для кухни'];
const text = ['Работаем с более чем 100 фабриками', 'Официальный дилер кухонных производителей из европы', 'Подберем оптимальный вариант'];

let i = 0;

next.addEventListener('click', ()=> {
    i++;
    if (i > images.length - 1) {
        i = 0;
    }
    document.querySelector('#photoes').src = images[i];

    let randomText = text[i];
    part.innerHTML = randomText;

    let randomHeader = header[i];
    partTwo.innerHTML = randomHeader;
})

back.addEventListener('click', ()=> {
    i--;
    if (i < 0) {
        i = images.length - 1;
    }
    document.querySelector('#photoes').src = images[i];

    randomText  = text[i];
    part.innerHTML = randomText;

    randomHeader = header[i];
    partTwo.innerHTML = randomHeader;
  
})


let lines = document.querySelectorAll('.line');
lines.forEach(line => {
  line.addEventListener('click', () => {
    const achor = document.querySelectorAll('.achor');
    achor.forEach(item => {
      item.classList.toggle('style')
    })
    const logoes = document.querySelectorAll('.logo');
    logoes.forEach(logo => {
      logo.classList.toggle('style');
    })

}) 
})



const form = document.querySelector("#my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  const status = document.querySelector("#my-form-status");
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Спасибо за вашу заявку!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Упс! Возникла проблема с отправкой вашей формы"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Упс! Возникла проблема с отправкой вашей формы"
  });
}
form.addEventListener("submit", handleSubmit)


const containerResult = document.querySelector('#container-result');
const btnCall = document.querySelector('#btn_call');

btnCall.addEventListener('click', () => {
  containerResult.style.display = 'block';
  document.body.style.overflow = 'hidden'
})

const btnClose = document.querySelector('.btn-close');
btnClose.addEventListener('click', () => {
  containerResult.style.display = 'none';
  document.body.style.overflow = '';
  const name = document.querySelector('#name').value = '';
  const telephone = document.querySelector('#telephone').value = '';
  document.querySelector('.par-alert').textContent = ''
})

const btnAlert = document.querySelector('#btn-alert');
btnAlert.addEventListener('click', () => {
  const name = document.querySelector('#name');
  const telephone = document.querySelector('#telephone');
  
  if (name.value === '' || telephone.value === '') {
    document.querySelector('.par-alert').textContent = 'Заполните всю информацию!'
  } 
  else {
    document.querySelector('.par-alert').textContent = 'Заявка успешно отправлена!';
  } 

})



const telephone = document.querySelector('#telephone');

telephone.addEventListener('input', displayPhone);
telephone.addEventListener('keydown', deleteNumber);

function displayPhone(e) {
  let input = e.target.value;
  inputValue = getNumber(input);
  selectionStart = telephone.selectionStart;

  if (!inputValue) {
    return telephone.value = '';
  }

if (input.length != selectionStart) {
    return
}

  if (inputValue.includes(7)) {
    formatedNumber()
  }

  else if (inputValue.includes(8)) {
    formatedNumber()
  }

  else if (inputValue.includes(9)) {
    formatedNumber()
  }

  else {
    return telephone.value = '+' + inputValue;
  }

}

function formatedNumber() {
  if (inputValue[0] === '9') inputValue = '7' + inputValue;
  let firstSymbol = (inputValue[0] === '8') ? '8' : '+7';
  telephone.value = firstSymbol + ' ';

  if (inputValue.length > 1) {
    telephone.value += '(' + inputValue.substring(1, 4)
  }

  if (inputValue.length >= 5) {
    telephone.value += ') ' + inputValue.substring(4, 7)
  }

  if (inputValue.length >= 8) {
    telephone.value += '-' + inputValue.substring(7, 9);
  }

  if (inputValue.length >= 10) {
    telephone.value += '-' + inputValue.substring(9, 11)
  }

}

function getNumber(input) {
  return input.replace(/\D/g, "");
}

function deleteNumber(e) {
  let input = e.target.value;
  if (e.keyCode === 8 && getNumber(input).length === 1) {
    telephone.value = '';
  }
}



gsap.from('#navbar', {opacity:0, y:-30, duration:2, ease: "power2", delay:1});
gsap.from('#container', {opacity:0, duration:2, delay:.5});


      
gsap.registerPlugin(ScrollTrigger);
gsap.to('#inner', {
    scrollTrigger: {
        trigger:'#inner', 
        toggleActions: 'restart none resume none',
    },

    opacity:1,
    stagger:1,
    duration:2,
})

gsap.registerPlugin(ScrollTrigger);
gsap.to('#container_inner', {
    scrollTrigger: {
        trigger:'#container_inner', 
        toggleActions: 'restart none resume none',
    },

    opacity:1,
    stagger:1,
    duration:2,
    delay:.5
})

let myNav = document.querySelector('#navbar');

document.onscroll = function() {
  if (document.body.scrollTop >= 700 || document.documentElement.scrollTop >= 700) {
    myNav.classList.add('nav-active');
    myNav.classList.remove('nav-transparent');
  }

  else {
    myNav.classList.add('nav-transparent');
    myNav.classList.remove('nav-active');
  }
} 

