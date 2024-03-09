export default function Win(arr){
  let comb = [[0,1,2],[0,3,6],[2,5,8],[6,7,8],
  [0,4,8],[2,4,6],[1,4,7],[3,4,5]];
  for(let arr of comb){
    if(arr.every(el => el === "X" || el === "O")){
        arr.forEach(ind => arr[ind] = "-");
        return true;
      }
  }
  // if (
  //   (arr[0] === arr[1] === arr[2]) ||
  //   (arr[0] === arr[3] === arr[6]) ||
  //   (arr[2] === arr[5] === arr[8]) ||
  //   (arr[6] === arr[7] === arr[8]) ||
  //   (arr[0] === arr[4] === arr[8]) ||
  //   (arr[2] === arr[4] === arr[6]) ||
  //   (arr[1] === arr[4] === arr[7]) ||
  //   (arr[3] === arr[4] === arr[5])
  // ) {
  //   return true;
  // }
  return false;
}
