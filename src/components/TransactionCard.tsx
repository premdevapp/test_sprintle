import {useState, useEffect} from "react"
interface ITranscationCardProps {
  id: string;
  balance: string;
  state: string;
}

function TranscationCard({ id, balance, state }: ITranscationCardProps) {
  const [date, setDate] = useState("")
  useEffect(() => {
    setDate((new Date(new Date().toString().split('GMT')[0]+' UTC').toISOString()))
  },[])
  return (
    <div className="transaction-value-card-container">
      <p>{date} - {balance} - {state}</p>
    </div>
  );
}

export default TranscationCard;
