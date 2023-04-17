const darkBtn = document.querySelector('#dark');
const menuBar = document.querySelector('.fa-bars');
const closeBar = document.querySelector('.fa-xmark');
const menu = document.querySelector('.ul');
const links = document.querySelectorAll('.ul li a');

const body = document.body;

const oneDay = Math.round(Date.now() * 1000)
console.log(Math.floor(new Date().getTime() * 1000));
const interval = setInterval(oneDay, 1000)


console.log(new Date(Date.now() + 1000 * 86400));
console.log(interval);
links.forEach((link) => {
  link.addEventListener('click', function() {
     menu.classList.remove('drop');
      links.forEach(link => {
        link.classList.remove('active')
        this.classList.add('active')
      })
  })
})



menuBar.addEventListener('click', () => {
  menu.classList.add('drop')
  
})
closeBar.addEventListener('click', () => {
  menu.classList.remove('drop')
})



darkBtn.addEventListener('click', () => {
  body.classList.toggle('darkmode');
  if (darkBtn.classList.contains('fa-moon')) {
    darkBtn.classList.replace('fa-moon', 'fa-sun');
    darkBtn.style.color = 'white';
  } else {
    darkBtn.classList.replace('fa-sun', 'fa-moon');
     darkBtn.style.color = 'black';
  }
});
