enum SIZE {
    big,
    small
}


interface Wolf {
    size: SIZE.big
    tail: boolean,
    color: string,
    forest: string
  }

  interface SmallDog {
    size: SIZE.small,
    tail: boolean,
    color: string,
    toy: string,
  }


  type Corgi = Wolf | SmallDog

  function processObject(obj: Corgi){
    console.log(obj.color)
    console.log(obj.tail)
    console.log(obj.size)
    if (obj.size === SIZE.small) {
      const smallDog = obj;
      console.log(smallDog.toy)
    } else {
        const bigDog = obj;
        console.log(bigDog.forest)
    }
  }

  const small : Corgi = {
    size: SIZE.small,
    tail: true,
    color: 'eff',
    toy: 'jefj'
  }

  const big : Corgi = {
    size: SIZE.big,
    tail: true,
    color: 'ef',
    forest: 'fdgfdg'
  }

  processObject(small)
  console.log('--------------')
  processObject(big)
