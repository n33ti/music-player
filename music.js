var Song = /** @class */ (function () {
    function Song() {
    }
    return Song;
}());
var Playlist = /** @class */ (function () {
    function Playlist() {
        this.songs = [];
    }
    return Playlist;
}());
var title = "music player";
var ti = document.createElement("title"); // Create a  element
ti.innerHTML = title; // Insert text
document.head.appendChild(ti);
var list = [' |create new playlist|', ' |play via url |', '  |search| '];
var functions = ['create', 'play', 'search'];
var show = false;
var show1 = false;
var show2 = false;
var playlists = [];
function func() {
    var heading = document.createElement('div');
    console.log(heading);
    heading.setAttribute("id", "menu");
    document.body.appendChild(heading);
    var menu_list = document.createElement('ul');
    menu_list.setAttribute("id", "menu-list");
    document.getElementById("menu").appendChild(menu_list);
    console.log(menu_list);
    var i = 0;
    list.forEach(function (element) {
        var li = document.createElement('li');
        //var anchor = 
        li.setAttribute('onclick', functions[i].toString() + "()");
        li.innerHTML = element.toString();
        i++;
        document.getElementById("menu-list").appendChild(li);
        li = document.createElement('li');
        li.innerHTML = " ---- ";
        document.getElementById("menu-list").appendChild(li);
    });
    var row = document.createElement('div');
    row.setAttribute('class', 'row');
    row.setAttribute('id', 'row1');
    document.body.appendChild(row);
    var column = document.createElement('div');
    column.setAttribute('class', 'column');
    column.setAttribute('id', 'col1');
    document.getElementById('row1').appendChild(column);
    var column2 = document.createElement('div');
    column2.setAttribute('class', 'column');
    column2.setAttribute('id', 'col2');
    document.getElementById('row1').appendChild(column2);
    var column3 = document.createElement('div');
    column3.setAttribute('class', 'column');
    column3.setAttribute('id', 'col3');
    document.getElementById('row1').appendChild(column3);
    var table = document.createElement('table');
    table.setAttribute('id', 'table');
    document.getElementById('col2').appendChild(table);
    var thead = document.createElement('thead');
    thead.setAttribute('id', 'thead');
    document.getElementById('table').appendChild(thead);
    var tr = document.createElement('tr');
    tr.setAttribute('id', 'tr');
    document.getElementById('thead').appendChild(tr);
    var th1 = document.createElement('th');
    th1.innerHTML = "Playlist Name";
    document.getElementById('tr').appendChild(th1);
    var th2 = document.createElement('th');
    th2.innerHTML = "Action";
    document.getElementById('tr').appendChild(th2);
}
function create() {
    if (show === true) {
        show = false;
        document.getElementById('form1').parentNode.removeChild(document.getElementById('form1'));
    }
    else {
        var form = document.createElement('form');
        form.setAttribute('id', 'form1');
        form.setAttribute('action', '#');
        document.getElementById('col1').appendChild(form);
        var textField = document.createElement('input');
        textField.setAttribute('type', 'text');
        textField.setAttribute('id', 'text1');
        document.getElementById('form1').appendChild(textField);
        var submit = document.createElement('button');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('form', 'form1');
        submit.setAttribute('form', 'form1');
        submit.setAttribute('onclick', 'createPlaylist(document.getElementById("text1").value)');
        submit.innerHTML = "submit";
        document.getElementById('form1').appendChild(submit);
        show = true;
    }
}
function createPlaylist(name) {
    show = true;
    var playlist = new Playlist();
    playlist.name = name;
    playlists.push(playlist);
    playlist.id = playlists.length;
    playlists.push(playlist);
    console.log("here");
    console.log(playlists.toString());
    var trow = document.createElement('tr');
    var rid = 'trow' + (playlist.id).toString();
    trow.setAttribute('id', rid);
    document.getElementById('table').appendChild(trow);
    var tid1 = 'td' + (playlist.id).toString() + '1';
    var tid2 = 'td' + (playlist.id).toString() + 1 + '2';
    var td1 = document.createElement('td');
    td1.setAttribute('id', tid1);
    td1.setAttribute('onclick', 'songs(' + playlist.id.toString() + ')');
    td1.innerHTML = playlist.name.toString();
    //console.log(td1.innerText)
    document.getElementById(rid).appendChild(td1);
    var td2 = document.createElement('td');
    td2.setAttribute('id', tid2);
    td2.setAttribute('onclick', 'play(' + playlist.id.toString() + ')');
    td2.innerHTML = "play >";
    document.getElementById(rid).appendChild(td2);
}
function songs(pid) {
    var player = playlists[pid - 1];
    console.log(player);
    var table2 = document.createElement('table');
    table2.setAttribute('id', 'table2');
    document.getElementById('col3').appendChild(table2);
    var trow = document.createElement('thead');
    table2.appendChild(trow);
    var tr = document.createElement('tr');
    trow.appendChild(tr);
    var td1 = document.createElement('td');
    td1.innerHTML = "songs";
    tr.appendChild(td1);
    var td2 = document.createElement('td');
    td2.innerHTML = "URL";
    tr.appendChild(td2);
    var td3 = document.createElement('td');
    td3.innerHTML = "Action";
    tr.appendChild(td3);
    for (var i = 0; i < playlists[pid].songs.length; i++) {
        var trS = document.createElement('tr');
        table2.appendChild(trS);
        var tds1 = document.createElement('td');
        tds1.innerHTML = playlists[pid].songs[i].name.toString();
        trS.appendChild(tds1);
        var tds2 = document.createElement('td');
        tds2.innerHTML = playlists[pid].songs[i].url.toString();
        trS.appendChild(tds2);
        var tds3 = document.createElement('td');
        tds1.innerHTML = "play >";
        trS.appendChild(tds3);
    }
    var br = document.createElement('br');
    document.getElementById('col3').appendChild(br);
    var form = document.createElement('form');
    form.setAttribute('action', '#');
    form.setAttribute('id', 'form2');
    document.getElementById('col3').appendChild(form);
    form.innerHTML = "Add song";
    var inputText = document.createElement('input');
    inputText.setAttribute('type', 'text');
    inputText.setAttribute('id', 'ti1');
    form.appendChild(inputText);
    var br = document.createElement('br');
    form.append(br);
    form.append("Add URL");
    var inputURL = document.createElement('input');
    inputURL.setAttribute('id', 'tu1');
    inputURL.setAttribute('type', 'text');
    inputURL.innerHTML = "URL";
    form.appendChild(inputURL);
    var btn = document.createElement('button');
    btn.setAttribute('type', 'submit');
    btn.setAttribute('onclick', 'addSong(' + pid.toString() + ', document.getElementById("ti1").value, document.getElementById("tu1").value )');
    btn.innerHTML = "Add";
    form.appendChild(btn);
    //   document.getElementById('col2').appendChild(table2)
}
function addSong(pid, name, url) {
    var s = new Song();
    s.name = name;
    s.url = url;
    playlists[pid - 1].songs.push(s);
    console.log(playlists[0]);
    insertSong(pid, name, url);
}
function insertSong(pid, name, url) {
    document.getElementById('tu1').innerHTML = "";
    document.getElementById('ti1').innerHTML = "";
    for (var i = 0; i < playlists[pid].songs.length; i++) {
        var trS = document.createElement('tr');
        document.getElementById('table2').appendChild(trS);
        trS.setAttribute('onclick', 'playURL(' + playlists[pid].songs[i].url + ')');
        var tds1 = document.createElement('td');
        tds1.innerHTML = playlists[pid].songs[i].name.toString();
        trS.appendChild(tds1);
        var tds2 = document.createElement('td');
        tds2.innerHTML = playlists[pid].songs[i].url.toString();
        trS.appendChild(tds2);
        var tds3 = document.createElement('td');
        tds1.innerHTML = "play >";
        trS.appendChild(tds3);
    }
}
function playUrl(url) {
    document.getElementById('form1').parentNode.removeChild(document.getElementById('form1'));
    document.getElementById('form2').parentNode.removeChild(document.getElementById('form2'));
    document.getElementById('form3').parentNode.removeChild(document.getElementById('form3'));
    console.log('hello from play url');
    var play = document.createElement('audio');
    play.setAttribute('controls', '');
    document.body.appendChild(play);
    var src = document.createElement('source');
    src.setAttribute('src', url.toString());
    play.appendChild(src);
}
function search() {
    document.getElementById('form1').parentNode.removeChild(document.getElementById('form1'));
    document.getElementById('form2').parentNode.removeChild(document.getElementById('form2'));
    document.getElementById('form3').parentNode.removeChild(document.getElementById('form3'));
    console.log('hello from search');
}
function play() {
    if (show2 === false) {
        var form3 = document.createElement('form');
        form3.setAttribute('id', 'form3');
        document.body.appendChild(form3);
        var br = document.createElement('br');
        form3.append(br);
        form3.append("Add URL");
        var inputURL = document.createElement('input');
        inputURL.setAttribute('id', 'tu5');
        inputURL.setAttribute('type', 'text');
        inputURL.innerHTML = "URL";
        form3.appendChild(inputURL);
        var btn = document.createElement('button');
        btn.setAttribute('type', 'submit');
        btn.setAttribute('onclick', 'play1()');
        btn.innerHTML = "play";
        form3.appendChild(btn);
    }
    else {
        show2 = true;
        document.getElementById('form2').parentNode.removeChild(document.getElementById('form2'));
        document.getElementById('form3').parentNode.removeChild(document.getElementById('form3'));
    }
}
function play1() {
    if (show1 === false) {
        var play = document.createElement('audio');
        play.setAttribute('controls', '');
        play.setAttribute('id', 'play1');
        document.body.appendChild(play);
        var src = document.createElement('source');
        src.setAttribute('src', 'document.getByElementId("tu5").value');
        src.setAttribute('type', 'audio/mpeg');
        play.appendChild(src);
    }
    else {
        show1 = true;
        document.getElementById('play1').parentNode.removeChild(document.getElementById('play1'));
    }
}
