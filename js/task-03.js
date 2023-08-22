const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulList = document.querySelector('.gallery');

const galleryImg = images.reduce((acc, { url, alt }) => {
  acc += `<li><img src=${url} alt=${alt}/></li>`;
  return acc;
}, "");
ulList.insertAdjacentHTML("beforeend", galleryImg);

const imgItem = document.querySelectorAll('img');

imgItem.forEach(el => {
  el.style.width = "400px";
 el.style.height = "250px";
});
ulList.style.display = "flex";
ulList.style.flexDirection = "row";
ulList.style.gap = "20px";