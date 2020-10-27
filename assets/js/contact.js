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
            setTop("gab@gabriella.moe", "mailto:gab@gabriella.moe");
            break;
        case "discord":
            setTop("Gabriella#6859", null);
            break;
        case "twitter":
            setTop("@Gxbrlella", "https://twitter.com/Gxbrlella");
            break;    
        case "github":
            setTop("@IsGabriellaCurious", "https://github.com/IsGabriellaCurious");
            break;    
        default:
            setTop("hey, i'm gabriella!", null)
    }
    
}