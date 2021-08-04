import { Box, Progress, Text } from "@chakra-ui/react";
import { useState } from "react";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Results from "./Results";


export default function App() {
    const [results, setResults] = useState([])
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const backHandler = () => {
        setCurrentQuestion(currentQuestion > 0 ? currentQuestion - 1 : 0)
    }
    return (
        <Box d='flex' width='100vw' minH='100vh' px='1rem' >
            <Box width='25%'>
                <Text color='red' fontSize='3xl' fontWeight='semibold'>Logo</Text>
            </Box>
            <Box d='flex' height='100vh' flexDir='column' width='50%' style={{ boxShadow: '0px 5px 5px #b5c2da' }} py='1rem'>

                {currentQuestion < 4 && <Box>
                    <Text fontSize='6xl' color='red' fontWeight='bold' px='1rem' onClick={backHandler} cursor='pointer'>‹</Text>
                    <Progress value={(currentQuestion + 1) / 4 * 100} width='100%' size='md' />
                </Box>
                }
                {currentQuestion === 0 &&
                    <Question1 setResults={setResults} results={results} setCurrentQuestion={setCurrentQuestion} />
                }
                {
                    currentQuestion === 1 &&
                    <Question2 setResults={setResults} results={results} setCurrentQuestion={setCurrentQuestion} />
                }
                {
                    currentQuestion === 2 &&
                    <Question3 setResults={setResults} results={results} setCurrentQuestion={setCurrentQuestion} />
                }
                {
                    currentQuestion === 3 &&
                    <Question4 setResults={setResults} results={results} setCurrentQuestion={setCurrentQuestion} />
                }
                {
                    currentQuestion === 4 &&
                    <Results results={results} />
                }
            </Box>
        </Box>
    )
}