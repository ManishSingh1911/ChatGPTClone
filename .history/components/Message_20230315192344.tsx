import {DocumentData} from "firebase/firestore";

type Props = {
    message: DocumentData
}

function Message({message}:Props) {
  return <div>
    <div>
        <p>
            {message.txt}
        </p>
    </div>
  </div>;
  
}

export default Message;