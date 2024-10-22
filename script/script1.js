function cercaShow() {
    const input = document.getElementById('showInput');
    const show = input.value.split(' ').join('+');
    const url = 'https://www.google.com/search?q=where+to+watch+' + show;
    window.open(url, '_blank');
  }