document.querySelectorAll('a[herf^="#"]').forEach(ancor => {
    ancor.addEventListener('click' , function (e) {
        e.preventDefault();

        document.querySelector(this.gettAttribute('herf')).scrollIntoview({
            behavior: 'smooth'
        });
    });   
});