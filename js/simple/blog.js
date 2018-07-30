function openPost(x) {
    var post = document.getElementById(x);
    if (post.style.display == 'none') {
        post.style.display = 'block';
    } else {
        post.style.display = 'none';
    }
}