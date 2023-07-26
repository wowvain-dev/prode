import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {InfoOutlineIcon} from "@chakra-ui/icons";
import {Button, ButtonGroup, Icon, Spacer, Text} from "@chakra-ui/react";

export default function Layout() {
    const location = useLocation();
    const navigate = useNavigate();

    return (<div>
        {/* THE HEADER OF THE SITE */}
        <div className="w-full flex pt-5 pb-5 md:pl-10 md:pr-10 justify-center shadow-lg px-10">
            <div className="container flex flex-row justify-between ">
                <div className="flex flex-row justify-start items-center w-[150px]">
                    <Text fontSize={["lg", "xl", "3xl"]}>Pro<Text className="inline text-gray-400">no</Text>de</Text>
                    {/*<Text color='gray' fontSize="3xl">(no)</Text>*/}
                </div>

                {/* MAKE RESPONSIVE TOP BAR MENU */}
                <div>
                    <ButtonGroup gap={4}>
                        <Button onClick={() => navigate('/')}
                            colorScheme="blue" variant={location.pathname === "/" ? "outline" : "ghost"}>Home</Button>
                        <Button onClick={() => navigate('/guides')}
                            colorScheme="blue" variant={location.pathname.includes("/guides") ? "outline" : "ghost"}>Guides</Button>
                        <Button onClick={() => navigate('/history')}
                            colorScheme="blue" variant={location.pathname.includes("/history") ? "outline" : "ghost"}>History</Button>
                    </ButtonGroup>
                </div>
                <div className="w-[150px]">
                    <Button variant="ghost">
                        <div className="flex flex-row items-center">
                            <InfoOutlineIcon color="gray.600" w={5} h={5}/>
                            <span className="ml-2 text-[#4a5568] text-sm md:text-lg">About</span>
                        </div>
                    </Button>
                </div>
            </div>
            {/*<div></div>*/}
        </div>
        <Outlet />
        {/*THE FOOTER OF THE SITE*/}
        <div className="h-[100px] bg-gray-200">

        </div>
    </div>);
}