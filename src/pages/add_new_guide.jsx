import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {message} from "antd";
import {
    Alert, AlertIcon, Breadcrumb, BreadcrumbItem, BreadcrumbLink,
    Button,
    ButtonGroup,
    FormControl,
    FormHelperText,
    FormLabel,
    Grid,
    Input,
    Spacer,
    Text
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {useMutation, useQuery} from "@apollo/client";
import {
    CREATE_NECKTIE_GUIDE,
    CREATE_ROPE_GUIDE, CREATE_SHOELACE_GUIDE,
    PUBLISH_NECKTIE_GUIDE,
    PUBLISH_ROPE_GUIDE, PUBLISH_SHOELACE_GUIDE
} from "../utilities/queries.js";
import htmlToSlateAST from "@graphcms/html-to-slate-ast";
import {useNavigate} from "react-router-dom";

export default function AddNewGuide() {
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();

    const success = () => {
        messageApi.open({
            type: 'success',
            content: 'Guide saved succesfully!',
            duration: 1
        })
    };

    const errorValdiation = () => {
        messageApi.open({
            type: 'error',
            content: 'All fields are required',
            duration: 2
        })
    };

    const errorSaving = () => {
        messageApi.open({
            type: 'error',
            content: 'There was an API error when saving',
            duration: 2
        })
    };

    const [editorVal, setEditorVal] = useState('');
    const [titleVal, setTitleVal] = useState('');
    const [selection, setSelection] = useState(0);
    const [slateContent, setSlateContent] = useState(null);
    const [postID, setPostID] = useState(null);
    // eslint-disable-next-line no-unused-vars
    const [createRopeGuide, { create_rope_data, create_rope_loading, create_rope_error }] = useMutation(
        CREATE_ROPE_GUIDE, {
            variables: {
                "title": titleVal,
                "content": {children: slateContent}
            }
        }
    );
    // eslint-disable-next-line no-unused-vars
    const [publishRopeGuide, { publish_rope_data, publish_rope_loading, publish_rope_error }] = useMutation(
        PUBLISH_ROPE_GUIDE, {
            variables: {
                "gname": titleVal
            }
        }
    )
    // eslint-disable-next-line no-unused-vars
    const [createNecktieGuide, { create_necktie_data, create_necktie_loading, create_necktie_error }] = useMutation(
        CREATE_NECKTIE_GUIDE, {
            variables: {
                "title": titleVal,
                "content": {children: slateContent}
            }
        }
    );
    // eslint-disable-next-line no-unused-vars
    const [publishNecktieGuide, { publish_necktie_data, publish_necktie_loading, publish_necktie_error }] = useMutation(
        PUBLISH_NECKTIE_GUIDE, {
            variables: {
                "gid": postID
            }
        }
    );
    // eslint-disable-next-line no-unused-vars
    const [createShoelaceGuide, { create_shoelace_data, create_shoelace_loading, create_shoelace_error }] = useMutation(
        CREATE_SHOELACE_GUIDE, {
            variables: {
                "title": titleVal,
                "content": {children: slateContent}
            }
        }
    );
    // eslint-disable-next-line no-unused-vars
    const [publishShoelaceGuide, { publish_shoelace_data, publish_shoelace_loading, publish_shoelace_error }] = useMutation(
        PUBLISH_SHOELACE_GUIDE, {
            variables: {
                "gid": postID
            }
        }
    )


    useEffect(() => {
        async function UpdateSlate() {
            const data = await htmlToSlateAST(editorVal);
            setSlateContent(data);
        }

        UpdateSlate();

    }, [editorVal]);

    // useEffect(() => {
    //     setPostID(create_rope_data.creteRopeData.id);
    //     publishRopeGuide();
    // }, [create_rope_data]);


    const validateForm = () => {
        if (titleVal === '') {
            messageApi.open({
                type: 'loading',
                content: "Saving...",
                duration: .5
            }).then((val) => {
                errorValdiation();
            })

            return;
        }

        if (selection === null) {
            messageApi.open({
                type: 'loading',
                content: "Saving...",
                duration: .5
            }).then((val) => {
                errorValdiation();
            })
            return;
        }

        if (editorVal === '') {
            messageApi.open({
                type: 'loading',
                content: "Saving...",
                duration: .5
            }).then((val) => {
                errorValdiation();
            })
            return;
        }

        if (selection === 0) {
            messageApi.open({
                type: 'loading',
                content: "Saving...",
                duration: .5});
            createRopeGuide().then((val) => {
                setPostID(val.data.createRopeGuide.id);
                publishRopeGuide();
            }).then((val) => {
                if (create_rope_error || publish_rope_error) errorSaving();
                else success();
            });
        } else if (selection === 1) {
            messageApi.open({
                type: 'loading',
                content: "Saving...",
                duration: .5});
            createNecktieGuide().then((val) => {
                setPostID(val.data.createNecktieGuide.id);
                publishNecktieGuide();
            }).then((val) => {
                if (create_necktie_error || publish_necktie_error) errorSaving();
                else success();
            });
        } else if (selection === 2) {
            messageApi.open({
                type: 'loading',
                content: "Saving...",
                duration: .5});
            createShoelaceGuide().then((val) => {
                setPostID(val.data.createShoelaceGuide.id);
                publishShoelaceGuide();
            }).then((val) => {
                if (create_shoelace_error || publish_shoelace_error) errorSaving();
                else success();
            });
        }
    }

    return <div className="pt-[10vh] flex flex-col container px-10 mx-auto py-10">
        <Breadcrumb textColor={"gray"} className="ml-10 sm:ml-0">
            <BreadcrumbItem>
                <BreadcrumbLink onClick={() => navigate('/')}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink onClick={() => navigate('/new')}>Add New Guide</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        {/*<Alert status="error" className="transition">*/}
        {/*    <AlertIcon />*/}
        {/*    All fields are required!*/}
        {/*</Alert>*/}
        {contextHolder}

        <Text textAlign="center"
            fontSize="5xl" mb={10}
        >Create a new guide!</Text>

        <FormControl>
           <FormLabel fontSize={'2xl'}>Guide title: </FormLabel>
            <Input value={titleVal} onChange={(val) => setTitleVal(val.target.value)}/>
            <FormHelperText>REQUIRED</FormHelperText>
            <Spacer h={20}/>
            <FormLabel fontSize={'2xl'}>Guide type: </FormLabel>
            <Grid
                templateRows={["repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(1, 1fr)"]}
                templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
                gap={2}
            >
                <Button
                    onClick={() => {
                        if (selection === 0) {
                            setSelection(null);
                            return;
                        }
                        setSelection(0);
                    }}
                    colorScheme={"blue"}
                    variant={selection === 0 ? "solid" : "ghost"}
                >Rope</Button>
                <Button
                    onClick={() => {
                        if (selection === 1) {
                            setSelection(null);
                            return;
                        }
                        setSelection(1);
                    }}
                    colorScheme={"blue"}
                    variant={selection === 1 ? "solid" : "ghost"}
                >Necktie</Button>
                <Button
                    onClick={() => {
                        if (selection === 2) {
                            setSelection(null);
                            return;
                        }
                        setSelection(2);
                    }}
                    colorScheme={"blue"}
                    variant={selection === 2 ? "solid" : "ghost"}
                >Shoelace</Button>
            </Grid>
            <FormHelperText>REQUIRED</FormHelperText>
            <Spacer h={20}/>
            <FormLabel fontSize={'2xl'}>Guide contents:</FormLabel>
            <ReactQuill theme="snow" value={editorVal} onChange={setEditorVal} />
            <FormHelperText>REQUIRED</FormHelperText>

            <Spacer h={30}/>
            <div className={"flex justify-center items-center"}>
                <Button
                    onClick={() => validateForm()}
                    variant="solid" colorScheme="green">Create Guide</Button>
            </div>
        </FormControl>
    </div>
}