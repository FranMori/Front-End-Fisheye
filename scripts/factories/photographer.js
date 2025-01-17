function photographerFactory(data) {
    const { name, portrait, id, tagline, city, country, price } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const link = document.createElement('a')
        link.setAttribute("href", "../../photographer.html?" + id)

        const article = document.createElement( 'article' );
        article.setAttribute("id", id)

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        img.setAttribute("Alt", "Photo de profil du photographe")

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const h3TagLine = document.createElement('h3');
        h3TagLine.setAttribute("class", 'tagLine')
        h3TagLine.textContent = tagline

        const h3Location = document.createElement('h3');
        h3Location.setAttribute("class", "country")
        h3Location.textContent = city + ', ' + country

        const h3Price = document.createElement('h3')
        h3Price.setAttribute("class", 'price')
        h3Price.textContent = price+'€/jour'

        link.appendChild(article)
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3Location);
        article.appendChild(h3TagLine);
        article.appendChild(h3Price);

        return (link);
    }
    return { name, picture, tagline, city, country, price,  getUserCardDOM }
}