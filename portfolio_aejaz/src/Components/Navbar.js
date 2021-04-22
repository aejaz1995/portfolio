import React from 'react'
import { Link } from 'react-scroll'
import styles from "./Css/Navbar.module.css"

const Navbar = () => {
//     let myRef= React.createRef()
//     const [scrollTop, setScrollTop] =React.useState(0)

//     //
//     const onScroll = () => {
//         const scrollY = window.scrollY //Don't get confused by what's scrolling - It's not the window
//         const scrollTop = myRef.current.scrollTop
//         console.log(`onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`)
//         this.setState({
//           scrollTop: scrollTop
//         })
//       }
//     //
// onScroll()
// React.useEffect(() =>{
//     setScrollTop(scrollTop)
// },[scrollTop])
    
    return (
        <div className={styles.navbar}>
            <div >
                <h1 className={styles.navbar__name}>Aejaz Ahmed</h1>
            </div>
            <ul className={styles.navbar__links}>
                
               <li> <Link to="about" activeClass="active" smooth={true} offset={-100}>About me</Link></li>
                <li><Link to="projects" activeClass="active" smooth={true} offset={-100}>Projects</Link></li>
                {/* <li><Link to="Blogs" activeClass="active" smooth={true}>Blogs</Link></li> */}
                <li><Link to="contact" activeClass="active" smooth={true}>Contact me</Link></li>
            </ul>
        </div>
    )
}

export { Navbar }
