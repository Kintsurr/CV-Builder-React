import './nav_bar.css'
const NavBar = ({value, changeStep, step}) =>{
    

        

    const selectStep = e => {
        e.preventDefault()
        changeStep(step);
        
      }

    return(
        <>
        <div id={step} className={`col border text-center containerCSS`} onClick={ selectStep }>
            <h5>{value}</h5>   
        </div>
        </>
    )
}
export default NavBar