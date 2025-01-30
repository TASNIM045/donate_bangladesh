document.getElementById('blog-button').addEventListener('click',function(){
    document.getElementById('main-section').classList.add('hidden');
    document.getElementById('main-extra').classList.remove('hidden');
    document.getElementById('blog-button').classList.add('hidden');
    document.getElementById('home-button').classList.remove('hidden');
})

document.getElementById('home-button').addEventListener('click',function(){
    document.getElementById('main-section').classList.remove('hidden');
    document.getElementById('main-extra').classList.add('hidden');
    document.getElementById('blog-button').classList.remove('hidden');
    document.getElementById('home-button').classList.add('hidden');
})