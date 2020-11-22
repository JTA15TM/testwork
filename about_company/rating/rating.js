createBar = function()
{
    var jsonData = JSON.parse(getTestRating());
    var elements = createElementsBar(jsonData);

    var output = "<div id=\"info_label\">Рейтинг наших услуг</div><div id=\"info_line\"></div><div class=\"row\">" + elements + "</div>";
    document.getElementById("rating_company").innerHTML = output;

    document.getElementsByClassName("bar-5")[0].style.width = jsonData.rating5 + "%";
    document.getElementsByClassName("bar-4")[0].style.width = jsonData.rating4 + "%";
    document.getElementsByClassName("bar-3")[0].style.width = jsonData.rating3 + "%";
    document.getElementsByClassName("bar-2")[0].style.width = jsonData.rating2 + "%";
    document.getElementsByClassName("bar-1")[0].style.width = jsonData.rating1 + "%";
}

createElementsBar = function(jsonData)
{
    var outElements = "";
    outElements += createElementBar(5, jsonData.rating5);
    outElements += createElementBar(4, jsonData.rating4);
    outElements += createElementBar(3, jsonData.rating3);
    outElements += createElementBar(2, jsonData.rating2);
    outElements += createElementBar(1, jsonData.rating1);
    return outElements;
}

createElementBar = function(number, count)
{
    return "<div class=\"side\"><div>" + number + " звёзд</div></div>"
    + "<div class=\"middle\"><div class=\"bar-container\"><div class=\"bar-" + number + "\"></div></div></div>"
    + "<div class=\"side right\"><div>" + count + "</div></div>";
}

getTestRating = function()
{
    return "{"
    + "\"rating5\":60,"
    + "\"rating4\":15,"
    + "\"rating3\":23,"
    + "\"rating2\":1,"
    + "\"rating1\":1"
    + "}";
}