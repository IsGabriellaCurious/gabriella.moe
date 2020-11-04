function setTop(msg, link) {
    if (link == null) {
        document.getElementById("para").innerHTML = msg;
    } else {
        document.getElementById("para").innerHTML = "<a href=\"" + link + "\">" + msg + "</a>";
    }
        
}

function changeContact(type) {
    
    switch (type) {
        case "email":
            setTop("isgabriellacurious@gmail.com", "mailto:isgabriellacurious@gmail.com");
            break;
        case "discord":
            setTop("gabriella ✨#6859", null);
            break;
        case "twitter":
            setTop("@Gxbrlella", "https://twitter.com/Gxbrlella");
            break;    
        case "github":
            setTop("@IsGabriellaCurious", "https://github.com/IsGabriellaCurious");
            break;
        case "gbm":
            setTop("hey, i'm gabriella! gbm.wtf is my url shortner, btw.", null);
            break;    
        default:
            setTop("hey, i'm gabriella!", null)
    }
    
}