import {useState} from "react";

export const useGetQuestionsData = <T, >(initialData: T) => {
    const [getDataQuestions] = useState(initialData)

    return {getDataQuestions}
}