const newCounter = function() {//クロージャー
  let num = 0;
  return function() {
    return num++;
  }
}

const count = newCounter()
// console.log(count())
// console.log(count())

function main(obj){
  console.log(this);
  this.speed=obj;
  this.sum=obj;
  // this.animation=function(){
  //   document.querySelector('#main').animate(
  //     [
  //       { opacity: 0 }, // 最初の状態（表示）
  //       { backgroundColor: 'blue' }, // 最初の状態（表示）
  //       { backgroundColor: 'red' }, // 最初の状態（表示）
  //       { opacity: 1 } // 最後の状態 (非表示)
  //     ],
  //     this.speed//の速さで実行
  //   )
  //   // this.sum=this.speed;
  // };
}

main.prototype.animation=function(){//prototypeの方がいい？

  document.querySelector('#main').animate(
    [
      { opacity: 0 }, // 最初の状態（表示）
      { backgroundColor: 'blue' }, // 最初の状態（表示）
      { backgroundColor: 'red' }, // 最初の状態（表示）
      { opacity: 1 } // 最後の状態 (非表示)
    ],
    this.speed//の速さで実行
  )
  // this.sum=this.speed;

};

let m;
    m=new main(0);//コンストラクタ？
window.onload=function(){

  document.querySelector('#btn').addEventListener('click',()=>{
    let time=document.querySelector('#time_num').value;
    // let m=new main(time);//コンストラクタ？
    m.speed=time;
    m.animation();
    m.sum=Number(m.sum)+Number(m.speed);

    console.log(m.speed);
    let c=count();
    m.count=c;
    console.log(c);
  })
  
}