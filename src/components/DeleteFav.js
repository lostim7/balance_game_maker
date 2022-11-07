function DeleteFav(img) {
    const willDelete = img;
    const before = JSON.parse(localStorage.getItem("favlist")) || [];
    for(let i = 0; i < before.length; i++) {
        if(before[i] === willDelete)  {
          before.splice(i, 1);
          i--;
        }
    }
    localStorage.setItem('favlist', JSON.stringify(before))
    window.location.reload()
    return
  }

export default DeleteFav;