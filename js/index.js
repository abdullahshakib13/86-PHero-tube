const handleCategory = async () => {
    const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await response.json();
    const tabContainer = document.getElementById('tab-container')
    const trimData = data.data;
    trimData.forEach((category) => {
        const div = document.createElement('div');
    div.innerHTML = `
    <a class="tab">${category.category}</a>
    `;
    tabContainer.appendChild(div);
    })

    // console.log(trimData);
}
handleCategory();