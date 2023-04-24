export default function Button(props) {
    
    return (
            <button className={`button ${props.variant}`} onClick={props.onClick} >
                <img src={props.icon}></img>
                {props.title}
            </button>
    );
};


