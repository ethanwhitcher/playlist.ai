import { useState } from "react";
import Button from "./_components/base/Button";
import Landing from "./_components/Landing";
import AddSong from "./_components/AddSong";

export default function App() {
    const [count, setCount] = useState(0);

    const onClickHandler = () => {
        props.onClick;
    };

    return (
        <div className="App">
          <Landing />
        </div>
    );
}
