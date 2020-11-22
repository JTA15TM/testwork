var title = ["Главная", "Цены", "Узнать проблему", "О компании", "Оставить отзыв"];
var links = ["index.html", "prices.html", "find_problem.html", "about_company.html", "leave_feedback.html"];

onload = function()
{
    var output = "";
    for(var a = 0; a < title.length; a++)
    {
        output += createToolbarItem(title[a], links[a]);
    }

    var toolbar = document.getElementsByClassName("toolbar")[0];
    toolbar.innerHTML = output;
    setTitle();
    init();
}

resizeUpdate = function()
{
    setTimeout(init, 100);
}

init = function()
{
    var toolbar = document.getElementsByClassName("toolbar")[0];
    var toolbar_height = toolbar.scrollHeight;
    var toolbar_back = document.getElementsByClassName("toolbar_back")[0];
    toolbar_back.style.height = toolbar_height + "px";
    resizeUpdate();
}

createToolbarItem = function(title, link)
{
    return "<div id=\"toolbar_button\" onclick=\"getLink('" + link + "');\">" + title + "</div>";
}

getLink = function(link)
{
    window.location.href = link;
}

setTitle = function()
{
    for(var a = 0; a < links.length; a++)
    {
        if(window.location.href.includes(links[a]))
        {
            document.title = title[a];
        }
    }
}
