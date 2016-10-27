function getFiles(data) {
    for (var i in data) {
        var elem = $("<a>");
        elem.attr("href", "files/" + data[1].filename);
        elem.text(data[1].origFilename);
        $("#files").append($("<br>"));
        $("#files").append(elem);

    }
}

$.get("/files", getFiles);