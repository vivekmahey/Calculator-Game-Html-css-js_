let s = 1;
    let plusimg = 0;
    function generate() {

        let score = document.querySelector('.score');
        let input1 = document.getElementById('num');
        let input2 = document.getElementById('op');
        let images = document.getElementById('images');
        
        if (input2.value == '+') {
            for (let i = 0; i < input1.value; i++) {
                let imgs = document.createElement('img');
                imgs.src = "plus.webp";
                plusimg++;
                let span = document.createElement('span');
                imgs.id = `img-${plusimg}`;
 
                span.innerHTML = imgs.id.split('-')[1];

                imgs.onclick = () => {
                    images.removeChild(imgs);
                    images.removeChild(span);
                    s = s + parseInt(span.innerHTML)
                    score.innerHTML = `Score : ${s}`;
                    plusimg--;
                }


                images.appendChild(imgs);
                images.appendChild(span);
            }
        }

        else if (input2.value == '-')
           {
            for (let i = 0; i < input1.value; i++) {
                let imgs = document.createElement('img');
                imgs.src = "minus4.png";
                plusimg++;
                let span = document.createElement('span');
                imgs.id = `img-${plusimg}`;
 
                span.innerHTML = imgs.id.split('-')[1];

                imgs.onclick = () => {
                    images.removeChild(imgs);
                    images.removeChild(span);
                    s = s - parseInt(span.innerHTML)
                    score.innerHTML = `Score : ${s}`;
                    plusimg--;
                }


                images.appendChild(imgs);
                images.appendChild(span);
            }
           }
           else if (input2.value=='*'){
            for (let i = 0; i < input1.value; i++) {
                let imgs = document.createElement('img');
                imgs.src = "multi1.webp";
                plusimg++;
                let span = document.createElement('span');
                imgs.id = `img-${plusimg}`;
 
                span.innerHTML = imgs.id.split('-')[1];

                imgs.onclick = () => {
                    images.removeChild(imgs);
                    images.removeChild(span);
                    s = s * parseInt(span.innerHTML)
                    score.innerHTML = `Score : ${s}`;
                    plusimg--;
                }


                images.appendChild(imgs);
                images.appendChild(span);
            }
           }
           else if (input2.value=='/'){
            for (let i = 0; i < input1.value; i++) {
                let imgs = document.createElement('img');
                imgs.src = "divide.jpg";
                plusimg++;
                let span = document.createElement('span');
                imgs.id = `img-${plusimg}`;
 
                span.innerHTML = imgs.id.split('-')[1];

                imgs.onclick = () => {
                    images.removeChild(imgs);
                    images.removeChild(span);
                    s = s / parseInt(span.innerHTML)
                    score.innerHTML = `Score : ${s}`;
                    plusimg--;
                }


                images.appendChild(imgs);
                images.appendChild(span);
            }
           }
    
    
    }