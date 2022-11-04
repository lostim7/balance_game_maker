function Favorites(img) {
  const willpush = img;
  const before = JSON.parse(localStorage.getItem("favlist")) || [];
  console.log(before) //빈배열 혹은 로컬스토리지배열
  before.push(willpush);
  localStorage.setItem('favlist', JSON.stringify(before))
  return
}

  export default Favorites;