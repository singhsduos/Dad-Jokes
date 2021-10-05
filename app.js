const searchform = document.querySelector('#searchform')


searchform.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = searchform.elements.query.value;
    const config = { params: { q: searchTerm } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImage(res.data);
    searchform.elements.query.value = "";

});

const makeImage = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}