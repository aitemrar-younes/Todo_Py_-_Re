import './Header.css'
const Header = ({ setOpenDialogue }) => {
    return ( 
        <div className="header">
            <div className="header_title">
                My Tasks
            </div>
            <button className="btn" onClick={() => setOpenDialogue(true)} >
                New Task ?
            </button>
        </div>
     );
}
 
export default Header;