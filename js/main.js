'use strict';

const apiUrl = 'https://api.tvmaze.com/search/shows?';

const getMovie = function(event){
    event.preventDefault();
    $('#result').empty();
    $.getJSON(apiUrl + $(this).serialize(), function(response){
        if(response.length > 0){
            $.each(response, function(index, serie){

                $('#result').append(
                    `<article>
                        <h2>${serie.show.name}</h2>
                        <p>${serie.show.genres}</p>
                        <a href="${serie.show.officialSite ? serie.show.officialSite : serie.show.url}">Homepage</a>
                        <figure>
                            <img src="${serie.show.image ? serie.show.image.medium : 'noPicture.jpg'}" alt="${serie.show.name}"/>
                            <figcaption>${serie.show.name}</figcaption>
                        </figure>
                        <p>${serie.show.summary}</p>
                    </article>`);
            });
        }else{
            $('#result').append(
                `<article>
                    <h2>Ei tuloksia</h2>
                </article>`);
        }
        
    }).fail(function () {
        $("#tulos").append("<h1>Virhe</h1>");
      });
};

$('form').submit(getMovie);

