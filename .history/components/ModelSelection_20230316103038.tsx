'use client'
import useSWR from "swr";

const fetchModels = () => fetch('/api/getEngines').then(res )

function ModelSelection() {
  return <div>ModelSelection</div>;
  
}

export default ModelSelection;