import "./header.css"
import Button from "../Button/Button"

interface HeaderProps {
  onCreateJobClick: () => void
}

const Header: React.FC<HeaderProps> = ({ onCreateJobClick }) => {
  return (
    <div className="header">
      <h1 style={{ cursor: "pointer" }}>Job Management App</h1>
      <div className="header-right-container">
        <Button label="Create Job" onClick={onCreateJobClick} />
      </div>
    </div>
  )
}

export default Header
