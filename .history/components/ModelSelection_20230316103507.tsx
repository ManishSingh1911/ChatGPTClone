'use client'
import useSWR from "swr";

const fetchModels = () => fetch('/api/getEngines').then(res => res.json())

function ModelSelection() {
  const {data: models, isLoading } = useSWR()   
  return <div>ModelSelection</div>;
  
}

export default ModelSelection;