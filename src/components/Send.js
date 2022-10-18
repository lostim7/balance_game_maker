function Send (send, name) {
  const sendData = {name: send}
  
  const aTag = document.querySelector('a');
  aTag.addEventListener('click', () => {
    localStorage.setItem(`${name}`, JSON.stringify(sendData));
  });
}

export default Send;