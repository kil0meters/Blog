p = new Map();
history.replaceState({ url: window.location.href }, "", window.location.href);
p.set(window.location.href, Promise.resolve(document.documentElement.innerHTML));

o = new IntersectionObserver((entries) => {
    for (var entry of entries) {
        var url = new URL(entry.target.href);
        if (entry.isIntersecting && !p.get(entry.target.href) && url.host == window.location.host && !url.pathname.includes('.')) {
            fetch(entry.target.href).then(res => {
                if (res.ok) p.set(entry.target.href, res.text());
            });
        }
    }
});

c = async (e, url) => {
    promise = p.get(url);
    if (!promise) return;

    e.preventDefault();
    history.pushState({ url }, "", url);

    let parser = new DOMParser();
    let dom_document = parser.parseFromString(await promise, "text/html");
    document.body = dom_document.body;
    document.title = dom_document.title;
    sl();
};

function sl() {
    var links = document.querySelectorAll("a");
    for (var link of links) {
        o.observe(link);
        link.onclick = (e) => c(e, e.target.href);
    }
}

onpopstate = e => c(e, e.state.url);
sl();
