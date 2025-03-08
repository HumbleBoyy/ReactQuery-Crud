import { instance } from "../hooks/instance"
import { useQuery } from "@tanstack/react-query"


export const getRequest = (queryKey:string, api:string):any => {
    const{data, isLoading} = useQuery({
        queryKey:[queryKey],
        queryFn:() => instance().get(api).then(res => res.data)
    })
  return {data, isLoading}
}

