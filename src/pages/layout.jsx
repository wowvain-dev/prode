import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {InfoOutlineIcon} from "@chakra-ui/icons";
import {Button, ButtonGroup, Text} from "@chakra-ui/react";
import {AiFillFileAdd} from "react-icons/ai";
import {BsDatabaseAdd} from "react-icons/bs";

export default function Layout() {
    const location = useLocation();
    const navigate = useNavigate();

    return (<div>
        {/* THE HEADER OF THE SITE */}
        <div className="fixed z-[9999] bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 w-full flex pt-5 pb-5 md:pl-10 md:pr-10 justify-center shadow-lg px-10">
            <div className="container flex flex-row justify-between ">
                <div className="flex flex-row justify-start items-center w-[150px] cursor-pointer"
                    onClick={() => navigate('/')}
                >
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
                    <Button variant="ghost" onClick={()=>navigate('/new')}>
                        <div className="flex flex-row items-center">
                            <BsDatabaseAdd size={30} color={"#4a5568"}/>
                            <span className="ml-2 text-[#4a5568] text-sm md:text-lg">Add Guide</span>
                        </div>
                    </Button>
                </div>
            </div>
            {/*<div></div>*/}
        </div>
        <Outlet />
    </div>);
}