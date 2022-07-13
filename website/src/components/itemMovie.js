const ItemMovie = (props)=>{
    
    return (
        <>
            {props.isLogin ? (
                <div>[X] [X] [X] EDITABLE</div>
            ):(
                <div>[] [] []</div>

            )}
        </>
    )
  }
  export default ItemMovie;
  