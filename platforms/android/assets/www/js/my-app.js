// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    loadImages();
    navigator.toast.toast('toastMessageStr', function succes(data){
    // TODO
}, function(err){
    myApp.alert(err);
});
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})
function loadImages() {  
     imgurcache = [];

            var a = {
                fetch: function (a) {
                    var b = this;
                    b.total = a, b.done = 0, b.done2 = 0, b.failures = 0, b.start = +new Date, $(
                        "#images").empty();
                    for (var c = 0; c < a; c++) b.hunt(function (a) {
                        b.done++, b.done2++, b.skip = Math.floor(40 * Math.random() + 25), $(
                                "#images").delay(430).append(
                                "<a href='http://i.imgur.com/" +
                                a +
                                ".jpg' class='imgur-link' target='_blank' rel='noreferrer'><img style='text-align: center; padding: 2%;height: 150px; width: 150px;' src='http://i.imgur.com/" +
                                a + "b.png' onclick=getURL(this.src) /></a>"), b.done2 >
                            b.skip && (b.done2 = 0), b.update()
                            $(".loaded").text(b.done);
                    })
                   // console.log(im);
                },
                update: function () {
                    function b(b) {
                        return b / a * 1e5 / 100
                    }
                    var a = new Date - this.start;
                    $("#info").html((this.done < this.total ? "Loading.. " + this.done + "/" + this.total +
                        " (" + this.failures + " failures) " : "Done. ") + "[" + b(this.failures +
                        this.done) + " req/s - " + b(this.done) + " img/s]")
                },
                hunt: function (a) {
                    function e() {
                        b.failures++, b.update(), b.hunt(a)
                    }
                    var b = this,
                        c = b.random(5),
                        d = new Image;
                    b.update(), d.src = "http://i.imgur.com/" + c + "b.png", d.onload = function () {
                        198 === d.width && 160 === d.height || 161 === d.width && 81 === d.height ?
                            e() : a(c)
                    }, d.onerror = e
                },
                random: function (a) {
                    for (var b = [], c =
                            "0123456789aABbCDdeEeFfGgHhIijJKkLlmMNNnOoPpqQRSstTuUvVwWXxYZz", d = 0; d <
                        a; d++) imgurchar = c.charAt(Math.floor(Math.random() * c.length)), b.indexOf(
                        imgurchar) === -1 ? b.push(imgurchar) : d--;
                        
                    return b = b.join(""), imgurcache.indexOf(b) === -1 ? (imgurcache.push(b), b) : (
                        self.random(5), !1)
                }
            };
            $("#random").on("click", function (b) {
                b.preventDefault(), a.fetch(800)
                remove('button');
            }), $(document).on("click", ".imgur-link", function (a) {
                $(this).addClass("is-clicked")
            })
               $("#button").on("click", function (b) {
                b.preventDefault(), a.fetch(800)
                remove('button');
            }), $(document).on("click", ".imgur-link", function (a) {
                $(this).addClass("is-clicked")
            })
}
function getURL(_src){
   var fullImage = _src.slice(0, -5)
   fullImage = fullImage + '.jpg';
   var URL = _src.slice(19, -5);
   PhotoViewer.show(fullImage, URL);
}
function remove(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}
