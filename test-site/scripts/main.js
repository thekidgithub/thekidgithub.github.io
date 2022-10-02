let myHeading = document.querySelector('h1');
//myHeading.textContent = '小科我真的好喜欢你啊';
/*document.querySelector('img').onclick = function()
 {
    alert('哼哼哼啊啊啊啊啊啊啊啊啊啊啊啊啊');
};*/
let myImage = document.querySelector('img');

myImage.onclick = function() 
{
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/lose.jpg')
    {
        myImage.setAttribute('src','images/win.webp');
    }
        else
        {
            myImage.setAttribute('src','images/lose.jpg');
        }
}

let myButton = document.querySelector('button');
function setUserName()
{
    let myName = prompt('please enter your name');
    if(!myName)
    {
        setUserName();
    }
    else
    {
      localStorage.setItem('name',myName);
      myHeading.textContent = 'nmsl,' + myName;
    }
}
if(!localStorage.getItem('name'))
{
    setUserName();
}
else
{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'nmsl,' + storedName;
}
myButton.onclick = function()
{
    setUserName();
}

