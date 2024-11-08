import './header.css';
import Button from "../Button/Button";

interface HeaderProps {
    onCreateJobClick: () => void;  // Define the type for the onClick function
}

const Header: React.FC<HeaderProps> = ({ onCreateJobClick }) => {
    return (
        <div className="header">
            <h1 style={{ cursor: "pointer" }}>
                Job Management App
            </h1>
            <div className="header-right-container">
                {/* Pass onCreateJobClick to Button */}
                <Button label="Create Job" onClick={onCreateJobClick} />
            </div>
        </div>
    );
};

export default Header;
