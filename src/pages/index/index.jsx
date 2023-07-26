import {ButtonGroup, Image, Text, Button, Divider} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

export default function Index() {
    const navigate = useNavigate();
    return (
        <div
            style={{backgroundImage: "url('/background_artwork.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'center',
            }}
        >

        <div className="h-[92vh] md:h-[92vh] flex flex-col md:flex-row md:w-full md:justify-center md:items-center container mx-auto py-10"
        >
            <div className="hidden md:flex md:flex-1 md:flex-col md:justify-center md:items-center">
                <Text fontSize={["xl", "4xl", "5xl"]} fontFamily="Porpora">Do your knots look like your cable management?</Text>
                <Divider borderColor={"gray.400"} />
                <div className="w-full flex flex-row justify-start items-center mt-7">
                    <Button className="mr-3" onClick={() => navigate('/guides')}
                            colorScheme="blue" fontSize={"xl"}>Improve</Button>
                    <span className="text-xl text-gray-400">or</span>
                    <Button variant="outline" colorScheme="gray"  onClick={() => navigate('/history')}
                            textColor={"blue.500"} borderColor={"blue.500"} borderWidth={2}
                            className="ml-3" fontSize={"xl"}>learn about those before you</Button>
                </div>
            </div>
            <div className="md:hidden flex flex-1 justify-end items-end mx-10">
                <Image w={700} src="/index_artwork.png"/>
            </div>
            <div className="h-10 md:w-10" />
            <div className="hidden md:flex-1 md:flex md:justify-center md:items-center">
                <Image w={700} src="/index_artwork.png"/>
            </div>
            <div className="flex flex-col flex-1 justify-start items-center md:hidden mx-10">
                <Text fontSize={["3xl", "4xl", "5xl"]} fontFamily="Porpora" textAlign="center">Do your knots look like your cable management?</Text>
                <Divider borderColor={"gray.400"} />
                <div className="w-full flex flex-row justify-center items-center mt-7">
                    <Button className="mr-3" onClick={() => navigate('/guides')}
                            colorScheme="blue" fontSize={"xl"}>Improve</Button>
                    <span className="text-xl text-gray-400">or</span>
                    <Button variant="outline" colorScheme="gray" textColor={"blue.500"}
                            borderColor={"blue.500"} borderWidth={2} onClick={() => navigate('/history')}
                            className="ml-3" fontSize={"xl"}>learn about those before you</Button>
                </div>
            </div>
        </div>
    </div>
    );
}