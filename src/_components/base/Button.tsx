type ButtonProps = {
    variant: string;
    onClick: () => void;
    icon?: string;
    title: string;
};

export default function Button({ variant, onClick, icon, title }: ButtonProps) {
    return (
        <button className={`button ${variant}`} onClick={onClick}>
            {icon && <img src={icon}></img>}
            {title}
        </button>
    );
}
