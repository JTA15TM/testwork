initializePrices = function()
{
    var json = JSON.parse(getTestJSON());
    var prices = json.prices;
    var output = "";
    for(var index = 0; index < prices.length; index++)output += getData(prices[index].label, prices[index].description, prices[index].price);
    document.getElementById("price_container").innerHTML = output;
    for(var index = 0; index < prices.length; index++)createPrices(index);
}

createPrices = function(index)
{
    var collapsible = document.getElementsByClassName("collapsible")[index];
    collapsible.addEventListener("click", function() 
    {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
            collapsible.style.borderBottomLeftRadius = "10px";
            collapsible.style.borderBottomRightRadius = "10px";
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            collapsible.style.borderBottomLeftRadius = "0px";
            collapsible.style.borderBottomRightRadius = "0px";
        }
    });
}

getData = function(label, description, price)
{
    return "<div id='price_block'> <button type=\"button\" class=\"collapsible\">" + label + "</button>"
    + "<div class=\"content\">"
    + "<p>" + description + "</p>"
    + "<div id='pb_price'>Цена: " + price + "</div>"
    + "</div></div>";
}

getTestJSON = function()
{
    return "{\"prices\":["
    + "{\"label\":\"Прокол колеса\", \"description\":\"Test description 1\", \"price\":\"3200 рублей\"},"
    + "{\"label\":\"Диск задевает колодки\", \"description\":\"Test description 2\", \"price\":\"150 рублей\"},"
    + "{\"label\":\"Скрип в системе V-brake\", \"description\":\"Test description 3\", \"price\":\"1300 рублей\"},"
    + "{\"label\":\"Проблемы с V-brake\", \"description\":\"Test description 4\", \"price\":\"450 рублей\"},"
    + "{\"label\":\"Скрип колеса или его люфт\", \"description\":\"Test description 5\", \"price\":\"270 рублей\"}"
    + "]}";
}