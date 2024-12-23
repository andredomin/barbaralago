

const Header = () => {
  return (
    <> 
        <div className="video_container">
            <video className="video_container__video" autoPlay preload="auto" muted loop>
                <source src="/assets/img/barbara_header.mp4" type="video/mp4" />   
            </video>
        </div>
    </>
  )
}

export default Header