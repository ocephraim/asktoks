const scriptURL = 'https://script.google.com/macros/s/AKfycby-MbM2klby-83YTdAxXRM-RJ_iEvsDibYFtZmVbyzX2Ztx_ig/exec'
const form = document.forms['confidential']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
function myFunction() {
    document.getElementById('confide').classList.remove('col-sm-6');
    document.getElementById('confideForm').style.display = 'none';
    document.getElementById('talk').style.display = 'none';
    document.getElementById('output').innerHTML = 'Thank you! We will get back to you shortly';
  }  