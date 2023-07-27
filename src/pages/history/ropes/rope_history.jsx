import {useNavigate} from "react-router-dom";
import {Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Image, Text} from "@chakra-ui/react";

export default function RopeHistory() {
    const navigate = useNavigate();

    return(<div className="pt-[10vh] min-h-[92vh] flex flex-col container mx-auto
        py-10 md:pb-40
    ">
        <Breadcrumb textColor={"gray"} className="ml-10 sm:ml-0">
            <BreadcrumbItem>
                <BreadcrumbLink onClick={() => navigate('/')}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink onClick={() => navigate('/guides')}>Guides</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
         <Text className="my-10 md:my-0" fontSize={["3xl", "4xl", "5xl"]}
                fontWeight="bold" textAlign={"center"} mt={"5vh"}
         >A Short History of Rope Knots</Text>
        <Box bg={"gray.50"} w={"100%"} minH={"82vh"} mt={5}
             borderRadius={20} className="shadow-2xl" p={10}
             textIndent={"25px"} fontSize={20} borderTop={"1px solid #cacaca"}
        >
            <p>First of all, I want to note that this list is far from exhaustive—or even complete. That being said, I thought it was interesting how ropes have been used throughout the ages. It's funny how something that was invented over 15K years ago can still provide practical solutions, as well as enjoyment, to a technological world.</p>
            <p><b>13 000BC</b> - The oldest fossils of rope and knots are estimated to be 15,000 to 17,000 years old. Knots are thought to be even older that, as they are assumed to have been used alongside some of the earliest stone tools.</p>
            <br/>
            <Image
                className={"mx-auto"}
                src="https://www.paracordplanet.com/product_images/uploaded_images/cavemen-wore-skins.jpg"/>
            <br/>
        </Box>
    </div>)
}