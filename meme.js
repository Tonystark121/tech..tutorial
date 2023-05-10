const btn = document.querySelector('.meme_gene .gene_meme_btn');
const img = document.querySelector('.meme_gene img');
const memetitle =  document.querySelector('.meme_gene .meme_title');
const memeauthor = document.querySelector('.meme_gene .author');

const updateDetails = (url,title,author) => {
    img.setAttribute("src",url);
    memetitle.innerHTML = title;
    memeauthor.innerHTML = `Meme by: ${author}`;
}

const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes").then((response) => response.json()).then(data => {
        updateDetails(data.url,data.title,data.author);
    })
};

btn.addEventListener('click', generateMeme);