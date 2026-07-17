const slide=
        document.querySelectorAll(".slide");

        const dots=
        document.querySelectorAll(".dot");

        let currentIndex=0;

        function showSlide(index){
            slide.forEach(s=>
            s.classList.remove("active"));
            dots.forEach(d=>
            d.classList.remove("active"));
            
            slide[index].classList.add("active");
            dots[index].classList.add("active");

        }
        

        dots.forEach(dot=> {
            dot.addEventListener("click", ()=>{
                currentIndex=
                parseInt(dot.getAttribute("data-index"));
                showSlide(currentIndex);
            });
        });

        setInterval(() =>{
            currentIndex=(currentIndex+1)%
            slide.length;
            showSlide(currentIndex);
        },3000);

        slide.forEach(img => {
            img.addEventListener("click", ()=>{
                window.open(img.src,"_blank");
            });
        });

        showSlide(currentIndex);
