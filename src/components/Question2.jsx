import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
const fruits = ['Apple', 'Grape', 'Pear', 'Watermelon']

export default function Question2({ setResults, results, setCurrentQuestion }) {
    const [borderColor, setBorderColor] = useState(['transparent', 'transparent', 'transparent', 'transparent'])
    const selectHandler = (e) => {
        console.log('clicked')
        console.log(e.target.id)
        let tempSelect = borderColor.map(value => value)
        tempSelect[e.target.id] === 'transparent' ? tempSelect[e.target.id] = 'green' : tempSelect[e.target.id] = 'transparent'
        setBorderColor(tempSelect)
    }
    const nextHandler = () => {
        let selection = ''
        borderColor.forEach((value, idx) => {
            if (value === 'green') {
                if(idx > 0 && selection.length){
                    selection += ', '
                }
                selection += fruits[idx]
            }
        })

        if (selection.trim().length === 0) {
            alert('Select at least 1 fruit!')
            return
        }
        let tempResults = [...results]
        tempResults[1] = [ 'Pick your favorite fruits!', selection ]
        setResults(tempResults)

        setTimeout(() => {
            setCurrentQuestion(prev => prev + 1)
        }, 500)
    }
    return (
        <Box width='100%' d='flex' flexDirection='column' justifyContent='center' alignItems='center' p='2rem'>
            <Text fontSize='4xl' fontWeight='bold'>Pick your favorite fruits!</Text>
            <Text fontStyle='italic' fontWeight='semibold' fontSize='2xl' mb='1rem'>(Select all that apply)</Text>
            <Box d='flex' flexWrap='wrap' width='70%' mb='4rem'>
                <Button d='flex' color={borderColor[0] === 'green' ? 'green' : 'black'} flexDirection='column' py='1rem' id='0' variant='outline' width='40%' borderRadius='12px' height='fit-content' borderColor={borderColor[0]} borderWidth='2px' outline='none' onClick={selectHandler} mr='1rem' mb='1rem'>
                    <Image src='/images/apple.png' width='50px' height='50px' mb='0.5rem' pointerEvents='none' />
                    Apple
                </Button>
                <Button d='flex' color={borderColor[1] === 'green' ? 'green' : 'black'} flexDirection='column' py='1rem' id='1' variant='outline' width='40%' borderRadius='12px' height='fit-content' borderColor={borderColor[1]} borderWidth='2px' outline='none' onClick={selectHandler} mr='1rem'>
                    <Image src='/images/grape.png' width='50px' height='50px' mb='0.5rem' pointerEvents='none' />
                    Grape
                </Button>
                <Button d='flex' color={borderColor[2] === 'green' ? 'green' : 'black'} flexDirection='column' py='1rem' id='2' variant='outline' width='40%' borderRadius='12px' height='fit-content' borderColor={borderColor[2]} borderWidth='2px' outline='none' onClick={selectHandler} mr='1rem'>
                    <Image src='/images/pear.png' width='50px' height='50px' mb='0.5rem' pointerEvents='none' />
                    Pear
                </Button>
                <Button d='flex' color={borderColor[3] === 'green' ? 'green' : 'black'} flexDirection='column' py='1rem' id='3' variant='outline' width='40%' borderRadius='12px' height='fit-content' borderColor={borderColor[3]} borderWidth='2px' outline='none' onClick={selectHandler} mr='1rem'>
                    <Image src='/images/watermelon.png' width='50px' height='50px' mb='0.5rem' pointerEvents='none' />
                    Watermelon
                </Button>
            </Box>
            <Button colorScheme='red' onClick={nextHandler}>Next</Button>
        </Box>
    )
}