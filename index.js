(() => {

  'use strict';

  const inputFile = document.querySelector('#upload-file');

  const encodeImageFileAsURL = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });
  }

  inputFile.addEventListener('change', function (e) {
    let file = this.files[0];
    encodeImageFileAsURL(file)
      .then((imageBase64) => {
        document.querySelector('#result').src = imageBase64;
      })
      .catch(console.error);
  });

})();