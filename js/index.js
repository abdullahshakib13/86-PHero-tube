const handleCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    const tabContainer = document.getElementById('tab-container')
    const trimData = data.data;
    trimData.forEach((category) => {
        const div = document.createElement('div');
        div.innerHTML = `
    <a onclick="handleLoadVideo('${category.category_id}')" class="tab btn btn-default m-2 px-2">${category.category}</a>
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

    // const noContent = document.getElementById('no-content');
    if (data.data.length === 0) {
        // noContent.classList.remove('hidden');
        cardContainer.innerHTML = "<div class=' w-full h-14 items-center justify-center'> <img class=' w-full h-14 items-center justify-center' src='images/icon.png' /> <p class='text-center'>Oops!! Sorry, There is no content here</p> </div > ";
    }
    else {
        // noContent.classList.add('hidden');
        // };
        data.data.forEach((videos) => {
            const div = document.createElement('div');
            div.innerHTML = `
              <figure><img class="w-80  h-52 rounded-lg" src="${videos.thumbnail}" alt="" /> </figure>
              <div class="flex justify-end -mt-7 mr-6">
              <span class="bg-[#171717] text-white text-xs font-normal p-1 rounded">${videos.others.posted_date ? timeElement(videos.others.posted_date) : ''}</span>
              </div>
                <div class="card-body ">
                    <div class="flex ">
                       <img class="w-10 h-10 rounded-full" src="${videos.authors[0].profile_picture}" >
                       <h2 class="card-title text-[#171717] text-base font-bold pl-2">${videos.title}</h2>
                    </div>
                    <div class="flex pl-12">
                        <p class="text-[#171717B3] text-sm font-normal"> ${videos.authors[0].profile_name}</p>
                        <h3 class="flex-1">${videos.authors[0].verified ? '<img class="w-5 h-5" src="images/verified.png"/>' : ""}</h3>
                    </div>
                    <div class="pl-12">
                        <h3 class="text-[#171717B3] text-sm font-normal"> ${videos.others.views}</h3>
                    </div>
                </div>
        `;
            cardContainer.appendChild(div);
            console.log(videos);
        });
    };
        
};


function timeElement(second) {
    const sec = parseInt(second);
    const hour = Math.floor(sec / 3600);
    const mints = Math.floor((sec % 3600) / 60);
    const value = `${hour}hrs ${mints} min ago`;
    return `<div>${value}</div>`;
}
   
    
// const cardContainer = document.getElementById('card-container');
// document.getElementById('sort-view').addEventListener('click', () => {
//     const sortByView = async (categoryId) => {
//         const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
//         const data = await response.json();
//         console.log(data);
//     }
// }
    
// }


/*
const sortBtn = document.getElementById('sort-btn');
const sortByView = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
    const data = await response.json();
    const viewsData = data.data[0].others;
    console.log(viewsData);
    // customSort = (a,b) => {
        
    }; 
    
    */
            
    // }
 

handleCategory();
handleLoadVideo(1000);


