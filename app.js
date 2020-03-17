const $gifArea = $("#gif-area"); //document.querySelector("#gif-area")
const $searchInput = $("#search");

function addGif(result) {
    let numResults = result.data.length; //select the length in the data
    if (numResults) {
        let randomIndex = Math.floor(Math.random()* numResults);
        let $newColumn = $("<div>", { class: "col-md-4 col-12 mb-4" });
        let $newGif = $("<img>", { 
            src: result.data[randomIndex].images.original.url, 
            class: "w-100" 
    });
    $newColumn.append($newGif);
    $gifArea.append($newColumn);
    }
}

$("form").on("submit", async function(event) {
    event.preventDefault();
    let search = $searchInput.val(); //retrieve value from form
    $searchInput.val(""); //clear form after submission

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: search,
            api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
    });
    addGif(response.data);
});

    
    $("#remove").on("click", function() {
        $gifArea.empty();
    });