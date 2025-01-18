
const pages = {
    Home: '../pages/Home.html',
    About: '../pages/About.html',
    Blog:'../pages/Blog.html',
    Product:'../pages/Product.html'
}

const changer = (data) => {
    if (data) {
        return pages[data] || pages['Home']
    } else {
        return 'NO page found';
    }
}

export default changer;


