import { Box, CircularProgress, Table, TableCaption, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function Results({ results }) {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        },1000)
    }, [])
    return (
        <Box d='flex' flexDirection='column' width = '100%' mt = '10rem' justifyContent = 'center' alignItems = 'center'>
            {
                loading ? <CircularProgress size = '100px' isIndeterminate/> : 
                <Box minW='90%' borderWidth="1px" borderRadius="lg" boxShadow='md' p = '2rem'>
                        <Table variant="striped" borderWidth="1px" borderRadius='lg'>
                            <TableCaption>Answer given by the user</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>Question</Th>
                                    <Th>Response</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                results.map((answer, idx) =>
                                        <Tr key={idx}>
                                            <Td width = 'fit-content'>{answer[0]}</Td>
                                            <Td width = 'fit-content'>{answer[1]}</Td>
                                        </Tr>
                                    )
                                }
                            </Tbody>
                        </Table>
                    </Box>
            }
        </Box>
    )
}