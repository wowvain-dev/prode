import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {FormControl, FormLabel, Grid, Input, Spacer, Text} from "@chakra-ui/react";
import {useState} from "react";

export default function AddNewGuide() {
    const [editorVal, setEditorVal] = useState('');
    const [titleVal, setTitleVal] = useState('');

    return <div className="flex flex-col container mx-auto py-10">
        <Text textAlign="center"
            fontSize="5xl" mb={10}
        >Create a new guide!</Text>

        <FormControl>
           <FormLabel fontSize={'2xl'}>Guide title: </FormLabel>
            <Input value={titleVal} onChange={(val) => setTitleVal(val.target.value)}/>
            <Spacer h={20}/>
            <FormLabel fontSize={'2xl'}>Guide type: </FormLabel>
            <Grid
                templateColumns={["repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(1, 1fr)"]}
                templateRows={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
                gap={10}
            >

            </Grid>
            <Spacer h={20}/>
            <FormLabel fontSize={'2xl'}>Guide contents:</FormLabel>
            <ReactQuill theme="snow" value={editorVal} onChange={setEditorVal} />
        </FormControl>
        {/* Choose knot category */}
        <div>
            <Text></Text>
        </div>

        {/* Input guide title */}
        <div></div>

        {/* Input guide content */}
        <div>
        </div>
    </div>
}