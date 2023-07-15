const popUpContent = document.querySelector('#overlay');
const activePopup = document.querySelectorAll('.activePopup');

activePopup.forEach((e,i)=>{
    e.addEventListener('click',()=>{
        popUpContent.classList.remove('d-none')
        popUpContent.classList.add('row')

        popUpContent.innerHTML=`
        
        <div class='col-sm-8 mx-auto p-2 d-flex justify-content-center align-items-center' onclick="propagationStop(event)">
            <button class=" position-absolute ocerlay-cross btn" onclick="hidePopUp()"> <i class="bi bi-file-x"></i> <button>
          <div class=" container">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-interval="false">

                

                <div class="carousel-inner">

                    <div class="carousel-item overlay-carousel">
                        <div class="card">
                            <img src="assetes/item.jpg" class="card-img-top" alt="image">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item overlay-carousel">
                    <div class="card">
                            <img src="assetes/item2.jpg" class="card-img-top" alt="image">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item overlay-carousel">
                    <div class="card">
                            <img src="assetes/item3.jpg" class="card-img-top" alt="image">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item overlay-carousel">
                    <div class="card">
                            <img src="assetes/item4.jpg" class="card-img-top" alt="image">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item overlay-carousel">
                    <div class="card">
                            <img src="assetes/item5.jpg" class="card-img-top" alt="image">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
                            </div>
                        </div>
                    </div>

                    <div class="carousel-item overlay-carousel">
                    <div class="card">
                            <img src="assetes/item6.jpg" class="card-img-top" alt="image">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
                            </div>
                        </div>
                    </div>

            </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                     <span class="carousel-control-next-icon" aria-hidden="true"></span>
                     <span class="visually-hidden">Next</span>
                    </button>
            </div>
          </duv>
        </div>
        ` ;

        let eachItemCarousel = document.querySelectorAll('.overlay-carousel');
        for (let c of eachItemCarousel) {
            c.classList.remove('active')
        }
        eachItemCarousel[i].classList.add('active')
    });
})



function hidePopUp() {
    popUpContent.classList.add('d-none')
}

function propagationStop(e){e.stopPropagation()}


// animation script
    AOS.init();
  