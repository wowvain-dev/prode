import {useNavigate} from "react-router-dom";
import {Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Image, Spacer, Text} from "@chakra-ui/react";

export default function RopeHistory() {
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
                <BreadcrumbLink onClick={() => navigate('/history/rope')}>Rope</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
         <Text className="my-10 md:my-0" fontSize={["3xl", "4xl", "5xl"]}
                fontWeight="bold" textAlign={"center"} mt={"5vh"}
         >A Short History of Rope Knots</Text>
        <Box bg={"gray.50"} w={"100%"} minH={"82vh"} mt={5}
             borderRadius={20} className="shadow-2xl" p={10}
             fontSize={20} borderTop={"1px solid #cacaca"}
        >
            <p style={{textIndent: "25px"}}>First of all, I want to note that this list is far from exhaustive—or even complete. That being said, I thought it was interesting how ropes have been used throughout the ages. It's funny how something that was invented over 15K years ago can still provide practical solutions, as well as enjoyment, to a technological world.</p>
            <br/>
            <p><b>13 000BC</b> - The oldest fossils of rope and knots are estimated to be 15,000 to 17,000 years old. Knots are thought to be even older that, as they are assumed to have been used alongside some of the earliest stone tools.</p>
            <br/>
            <Image
                className={"mx-auto"}
                src="https://www.paracordplanet.com/product_images/uploaded_images/cavemen-wore-skins.jpg"/>
            <br/>
            <p><b>8000-6500 BC</b> — The first textiles were being developed in various cultures around the world. People had previously worn mostly skins sewn together.</p>
            <br/>
            <p><b>4000 BC</b> — Egyptians developed a spindle to help them make rope.</p>
            <br/>
            <p><b>218 BC</b> - The Roman Ballista weapon used rope to sling crossbow-style bolts at the enemy with great accuracy in the Second Punic War.</p>
            <br/>
            <p><b>1200 AD</b> - Arab weavers began using knots to adorn the edges of textiles. This style migrated to Spain under Moorish influence. </p>
            <br />
            <p><b>1300</b> - Hemp became the dominate rope material which replaced most papyrus, bamboo, and other plant fiber ropes. </p>
            <br/>
            <Image className="mx-auto" src={"https://www.paracordplanet.com/product_images/uploaded_images/hemp-rope-coil-blog.jpg"}/>
            <br/>
            <p><b>1400</b> - &quot;Quipu&quot; or &quot;talking knots&quot; were used by the Incans of Peru as a sort of writing/record keeping system.</p>
            <br/>
            <p><b>1500</b> - &quot;Rope walks&quot; were developed to make rope. These were narrow buildings, about 300-500 yards long, used to twist rope. At this point, the length of the walk dictated the length of the rope. </p>
            <br/>
            <p><b>1600&apos;s</b> - Macramé was introduced into the English court of Mary II.</p>
            <br/>
            <p><b>1800&apos;s</b> - British and American sailors practiced knot work while at sea and traded them at ports around the world. </p>
            <br/>
            <p><b>1800&apos;s</b> - Macramé became popular in textile embellishment and home décor, somewhat falling out of style around the turn of the century.</p>
            <br/>
            <p><b>1930&apos;s</b> - Paracord was developed as a cheaper replacement for foreign-made silk parachute lines.</p>
            <br/>
            <Image src={"https://www.paracordplanet.com/product_images/uploaded_images/paratroopers-parachute.jpg"} className="mx-auto"/>
            <br/>
            <p><b>1970&apos;s</b> - Macramé had a resurgence during the &quot;hippy years&quot; as a way to adorn clothing, as well as having functional uses such as plant hangers or table cloths.</p>
            <br/>
            <p><b>2004</b> - Acording to my own research, the first paracord survival bracelets (cobra weave) were made. If you have evidence of earlier paracord bracelets, let me know!</p>
            <br/>
            <Image className="mx-auto" src={"https://www.paracordplanet.com/product_images/uploaded_images/is-this-first-paracord-bracelet.jpg"}/>
            <br/>
            <p><b>2010-present</b> - The years between fashion cycles have become shorter and shorter. After only about 30 years out of style, macramé is once again popular. Try to keep up. </p>
        </Box>
        <Box mt={"10vh"}>
            <h3 className="text-3xl text-gray-600">Sources:</h3>
            <ul className="text-gray-500">
                <li>&bull;https://www.paracordplanet.com/blog/a-selective-history-of-knots-and-rope/</li>
                <li>&bull;https://en.wikipedia.org/wiki/Quipu </li>
                <li>&bull;https://en.wikipedia.org/wiki/Second_Punic_War </li>
                <li>&bull;https://www.ancient.eu/Roman_Engineering/ </li>
                <li>&bull;https://www.lowtechmagazine.com/2010/06/lost-knowledge-ropes-and-knots.html </li>
                <li>&bull;https://en.wikipedia.org/wiki/History_of_clothing_and_textiles#Ancient_textiles_and_clothing</li>
            </ul>
            {/*<h3 className="text-xl text-amber-300 mt-[50px]">Text mostly copied from <a href="https://www.paracordplanet.com/blog/a-selective-history-of-knots-and-rope/">https://www.paracordplanet.com/blog/a-selective-history-of-knots-and-rope/</a></h3>*/}
        </Box>
    </div>)
}