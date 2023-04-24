import Button from "./base/Button";



export default function AddSong() {
    const onClickHandler = () => {
        
    }
    
    return (
        <div className='addsong'>
            <Button variant={'secondary'} onClick={onClickHandler} title={'ADD'}/>
        </div>
    );
};