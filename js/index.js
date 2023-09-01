const handleCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    const tabContainer = document.getElementById('tab-container')
    const trimData = data.data;
    trimData.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
    <a onclick="handleLoadVideo('${category.category_id}')" class="tab">${category.category}</a>
    `;
        tabContainer.appendChild(div);
    });

    // console.log(trimData);
};

const handleLoadVideo = async (categoryId) => {
    // console.log(categoryId);
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
    const data = await response.json();
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    if (data.data.length === 0) {
        cardContainer.innerHTML = "<div class='mx-auto'> <img class='mx-auto' src='icon.png' /> <p class='text-center'>Oops!! Sorry, There is no content here</p> </div > ";
    }
    else {
         data.data.forEach((videos) => {
        const div = document.createElement('div');
        div.innerHTML = `
              <figure><img class="w-80  h-52 rounded-lg" src="${videos.thumbnail}" alt="" /></figure>
                <div class="card-body">
                    <div class="flex justify-between">
                       <img class="w-14 rounded-full" src="${videos.authors[0].profile_picture}" >
                       <h2 class="card-title">${videos.title}</h2>
                    </div>
                    <div class="text-center">
                        <p>${videos.authors[0].profile_name}</p>
                        </div>
                    <div class="text-center">
                        <h3> ${videos.others.views}</h3>
                    </div>
                </div>
        `;
        cardContainer.appendChild(div);
        console.log(videos);
    });
    }
        
   
    // const cardContainer = document.getElementById('card-container')
}

handleCategory();
handleLoadVideo(1001);