import {useState} from "react";

export const useGetWhyUsData = <T, >(initialData: T) => {
    const [dataUseGetWhyUs] = useState(initialData);

    return {dataUseGetWhyUs}
}