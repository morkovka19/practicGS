interface Wolf {
    size: 'big' | 'small',
    tail: boolean,
    color: string
  }

  interface SmallDog extends Wolf {
    toy: string
  }


  type Corgi = Wolf | SmallDog

  function processObject(obj: Corgi){
    console.log(obj.color)
    console.log(obj.tail)
    console.log(obj.size)
    if (obj.size === 'small') {
      const smallDog = obj as SmallDog;
      console.log(smallDog.toy)
    } else {
        console.log("it's big wolf!!!!!")
    }
  }

  const small : SmallDog = {
    size: 'small',
    tail: true,
    color: 'eff',
    toy: 'jefj'
  }

  const big : Wolf = {
    size: 'big',
    tail: true,
    color: 'ef'
  }

  processObject(small)
  console.log('--------------')
  processObject(big)
