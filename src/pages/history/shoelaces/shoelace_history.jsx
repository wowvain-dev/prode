import {useNavigate} from "react-router-dom";
import {Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Image, Spacer, Text} from "@chakra-ui/react";

export default function ShoelaceHistory() {
    const navigate = useNavigate();

    return(<div className="pt-[10vh] min-h-[92vh] flex flex-col container mx-auto
        py-10 md:pb-5
    ">
        <Breadcrumb textColor={"gray"} className="ml-10 sm:ml-0">
            <BreadcrumbItem>
                <BreadcrumbLink onClick={() => navigate('/')}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink onClick={() => navigate('/history')}>History</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink onClick={() => navigate('/history/shoelace')}>Shoelace</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        <Text className="my-10 md:my-0" fontSize={["3xl", "4xl", "5xl"]}
              fontWeight="bold" textAlign={"center"} mt={"5vh"}
        >A Short History of the Shoe Lace</Text>
        <Box bg={"gray.50"} w={"100%"} minH={"82vh"} mt={5}
             borderRadius={20} className="shadow-2xl" p={10}
             fontSize={20} borderTop={"1px solid #cacaca"}
             textIndent="25px"
        >
            <p><b>Shoe laces</b> are often the unsung heroes of the shoe world and are taken for granted when they on a daily basis perform such a complicated task, all while receiving little fanfare. The history of shoelaces goes hand in hand with the historical origins of the humble shoe. Archaeological records have shown us many ways in the past how shoes were used in everyday life and the ways in which they were fastened to a wearer’s feet.</p>
            <br/>
            <p>Shoe Laces were originally discovered being used back in <b>2000 B.C</b>, during ancient times where the Greek's wore rawhide lacing and Roman soldiers wore laced sandals in Western Europe.</p>
            <br/>
            <p>Today, shoelaces as we know them did not become as widely used until the late 19th century. Before the laces of today were used to fasten shoes, buttons and buckles were more commonly used. At the museum of London there are also many historical documents which show us the early innovations that shoes and shoelaces brought to wearers.</p>
            <br/>
            <p>There are many different components that go into making a shoe including the laces, but the aglets are also a vital element that are required for the shoelace to functional correctly. An aglet is a small plastic or metal tube which is used to bind the two ends of the shoelace and gives the lace support while threaded through the shoe, ensuring that the lace does not fray or fall apart.</p>
            <br/>
            <p>Shoelaces are still produced across the world these days and come in a variety of materials to suit the shoe and wearer. When it comes to the construction of the modern shoelace, they are generally made from braiding or by using bobbins on machines. Overall it’s a simple process but varies from manufacturer to manufacturer, depending on the specific requirements of the shoe companies.</p>
            <br/>
            <br/>
            <h2 className="text-3xl font-bold">Interesting shoelace facts from around the world</h2>
            <br/>
            <p>The oldest recorded leather shoe known to historians is the moccasin, a lace-up shoe with a stylish design that dates back more than 5,550 years ago. This moccasin shoe was discovered by archeologists inside of an American cave in 2010.</p>
            <br/>
            <Image className="mx-auto" src="https://theshoeman647325124.files.wordpress.com/2019/04/6c373-cbb3db6a8c1802b0f77a1008289de1e1.jpg"/>
            <br/>
            <p>The mummified remains of Ötzi, an exhumed Iceman discovered inside of a glacier that buried him alive and was found to be wearing bear skin soles with shoelaces.</p>
            <br/>
            <p>The ancient lost Inca tribe kept records of the messages that were sent and received, by using a form of communication that was based on the tying of shoelace knots.</p>
            <br/>
            <p>Modern medicine has discovered that occasionally complex DNA strands known as “catananes”, often create knots similar to those found in shoelaces, during what’s known to scientists as the “process of recombination”. This occurs when the human body is attacked by a virus.</p>
            <br/>
            <p>Over the years there have been many famous different types of knots, but none as famous as the classic “granny knot”. This is one of the world’s most popular knots used in shoelace tying and was originally described in an 1867 publication of the “Sailor’s Word-Book”.</p>
        </Box>
        <Box mt={"10vh"}>
            <h3 className="text-3xl text-gray-600">Sources:</h3>
            <ul className="text-gray-500">
                <li>&bull;https://www.tedandlemon.com.au/blogs/news/history-of-the-shoe-lace</li>
            </ul>
            {/*<h3 className="text-xl text-amber-300 mt-[50px]">Text mostly copied from <a href="https://www.paracordplanet.com/blog/a-selective-history-of-knots-and-rope/">https://www.paracordplanet.com/blog/a-selective-history-of-knots-and-rope/</a></h3>*/}
        </Box>
    </div>)
}
