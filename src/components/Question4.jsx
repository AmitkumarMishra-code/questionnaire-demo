import { Box, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function Question4({ setResults, results, setCurrentQuestion }) {
    const [borderColor, setBorderColor] = useState(['transparent', 'transparent', 'transparent', 'transparent'])
    const selectHandler = (e) => {
        let tempSelect = ['transparent', 'transparent', 'transparent', 'transparent']
        tempSelect[e.target.id] = 'green'
        setBorderColor(tempSelect)
        setResults([...results, [ 'How did you hear about us?', e.target.innerText ]])
        setTimeout(() => {
            setCurrentQuestion(prev => prev + 1)
        }, 500)

    }
    return (
        <Box width='100%' d='flex' flexDirection='column' justifyContent='center' alignItems='center' p='2rem'>
            <Text fontSize='4xl' fontWeight='bold'>How did you hear about us?</Text>
            <Text fontStyle='italic' fontWeight='semibold' fontSize='2xl' mb='1rem'>(Select one only)</Text>
            <Button id='0' variant='outline' width='80%' borderColor={borderColor[0]} borderWidth='2px' outline='none' onClick={selectHandler} mb='1rem'>
                Social Media
            </Button>
            <Button id='1' variant='outline' width='80%' borderColor={borderColor[1]} borderWidth='2px' outline='none' onClick={selectHandler} mb='1rem'>
                TV Advertisements
            </Button>
            <Button id='2' variant='outline' width='80%' borderColor={borderColor[2]} borderWidth='2px' outline='none' onClick={selectHandler} mb='1rem'>
                Print Advertisements
            </Button>
            <Button id='3' variant='outline' width='80%' borderColor={borderColor[3]} borderWidth='2px' outline='none' onClick={selectHandler} mb='1rem'>
                Friends or Family
            </Button>
        </Box>
    )
}