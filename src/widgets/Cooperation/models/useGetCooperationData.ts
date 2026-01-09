import { useState } from "react";

export const useGetCooperationData = <T,>(initialData: T) => {
    const [data] = useState<T>(initialData)

    return data
}
