import headImg from './headImg.svg'
import "./head.css"
const Head  = ({handleScroll}) =>{
    return(
        <div className="container bg-light mw-100">
            <div className="row">
                <div className="col-lg-4 offset-lg-2 my-5 text-center">
                    <h1>
                        A <span className="text-primary d-inline"> Resume </span> that will help you to be hired.
                    </h1>
                    <h1>
                        Make your own resume <br/> <span className="text-primary d-inline"> for free. </span>
                    </h1>
                </div>
                <div className="col-lg-5 my-3 text-center">
                    <img src={headImg} alt="Resume" className='head_img'/>
                </div>
                
            </div>
            <button className="btn btn-primary col-md-1 my-3 start" type="button" onClick={handleScroll}>
                    Start!
            </button>
        </div>
    )
}
export default Head