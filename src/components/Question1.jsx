import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Question1({ setResults, results, setCurrentQuestion }) {
    const [borderColor, setBorderColor] = useState(['transparent', 'transparent', 'transparent'])
    const selectHandler = (e) => {
        let tempSelect = ['transparent', 'transparent', 'transparent']
        tempSelect[e.target.id] = 'green'
        setBorderColor(tempSelect)
        let tempResults = [...results]
        tempResults[0] = ['How familiar are you with Keto?', e.target.innerText]
        setResults(tempResults)
        setTimeout(() => {
            setCurrentQuestion(prev => prev + 1)
        }, 500)

    }
    return (
        <Box width='100%' d='flex' flexDirection='column' justifyContent='center' alignItems='center' p='2rem'>
            <Text fontSize='4xl' fontWeight='bold'>How familiar are you with Keto?</Text>
            <Text fontStyle='italic' fontWeight='semibold' fontSize='2xl' mb='1rem'>(Select one only)</Text>
            <Button id='0' variant='outline' width='80%' borderColor={borderColor[0]} borderWidth='2px' outline='none' onClick={selectHandler} mb='1rem'>
                Not at all familiar
            </Button>
            <Button id='1' variant='outline' width='80%' borderColor={borderColor[1]} borderWidth='2px' outline='none' onClick={selectHandler} mb='1rem'>
                I know the basics
            </Button>
            <Button id='2' variant='outline' width='80%' borderColor={borderColor[2]} borderWidth='2px' outline='none' onClick={selectHandler} mb='1rem'>
                I am Doctor or Physician and need a plan
            </Button>
        </Box>
    )
}