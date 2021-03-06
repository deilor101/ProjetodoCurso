import './styles.css'


 const Postcard = ({title, cover, body}) => {
    return(
    <div className='post'>
        <img src={cover} alt={title} />
        <div  className='post-content'>
          <h1>{title}</h1>
          <p>{body}</p>
        </div>
    </div>  
    )
};

export default Postcard