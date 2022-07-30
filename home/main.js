async function details() {

    let respo=await fetch('https://fedeperin-harry-potter-api-en.herokuapp.com/characters')
    .then((response) => response)

    return respo.json()
    
    
}

details().then((res)=>{console.log(res)})




onload=function postPhotogrpher(){

    details().then((res)=>{
        console.log(res[0].interpretedBy)

        photoDisplay.innerHTML=`      <div class="col">
        <div class="card">
          <img src="home/homeimages/h2.jpg" class="card-img-top" alt="...">
          <div class="card-body">
          <a  class="btn mt-2">👍🏽 👎🏽</a>

            <h5 class="card-title">${res[0].interpretedBy}</h5>
            <p class="card-text">A Willet forages in the Great Salt Lake. Photo:${res[0].interpretedBy}</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="home/homeimages/h3.jpg" class="card-img-top" alt="...">
          <div class="card-body">
          <a  class="btn mt-2">👍🏽 👎🏽</a>
          <h5 class="card-title">${res[1].interpretedBy}</h5>
          <p class="card-text">Pileated Woodpecker. Photo:${res[1].interpretedBy}</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="home/homeimages/h4.jpg" class="card-img-top" alt="...">
          <div class="card-body">
          <a  class="btn mt-2">👍🏽 👎🏽</a>
          <h5 class="card-title">${res[2].interpretedBy}</h5>
          <p class="card-text">Greater Roadrunner. Photo: ${res[2].interpretedBy} </p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <img src="home/homeimages/h5.jpg" class="card-img-top" alt="...">
          <div class="card-body">
          <a  class="btn mt-2">👍🏽 👎🏽</a>

          <h5 class="card-title">${res[3].interpretedBy}</h5>
          <p class="card-text"> Common Tern on Maine’s Stratton Island outbreak Photo:${res[3].interpretedBy}</p>
          </div>
        </div>
      </div>`
    
    })

}


// interpretedBy
