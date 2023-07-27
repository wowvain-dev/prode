import {useNavigate} from "react-router-dom";
import {Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Image, Spacer, Text} from "@chakra-ui/react";

export default function NecktieHistory() {
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
                <BreadcrumbLink onClick={() => navigate('/history/necktie')}>Necktie</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        <Text className="my-10 md:my-0" fontSize={["3xl", "4xl", "5xl"]}
              fontWeight="bold" textAlign={"center"} mt={"5vh"}
        >The History and Evolution of Men's Neckties</Text>
        <Box bg={"white"} w={"100%"} minH={"82vh"} mt={5}
             borderRadius={20} className="shadow-2xl" p={10}
             fontSize={20} borderTop={"1px solid #cacaca"}
             textIndent="25px"
        >
            <img src={"https://cdn.shopify.com/s/files/1/2698/5360/files/TheHistoryandEvolutionoftheMensNeckties_medium.jpg?v=1585676524"} align="left" className="m-5"/>
            <p>Millions of people wear them throughout the world, whether they’re going to work or church, or any other number of reasons. But why? You might think, ‘well, it allows men to express themselves’, or ‘people need a way to dress more formal’. You wouldn’t be wrong, but the history of men’s neckties is far more complex than you might guess. It’s important to know why we dress the way we do today and having the necktie history background can help to inform the way you dress today. This article will cover who invented the necktie, how it grew into popularity, and its evolution throughout the last four centuries from a practical piece of a military uniform into the modern tie we know today.</p>
            <br/>
            <br/>
            <h2 style={{textAlign: 'center', fontSize: "27px", fontWeight: "bold", fontFamily: "Times New Roman", textTransform: "uppercase"}}>Who invented the necktie?</h2>
            <br/>
            <p>Early ties hardly resemble the modern tie today as we know it. We can thank Croatians for the necktie, but the French made it the fashion staple it is today. The origin of the necktie can be traced back to the 17th Century, during the 30 Years’ War (1618-1648). The French hired Croatian mercenaries who wore traditional knotted neckerchiefs around their necks as part of their uniform. This held the top of their jackets together and was more practical than stiff collars.</p>
            <img src={"https://cdn.shopify.com/s/files/1/2698/5360/files/Who_Invented_the_Neck_Tie_medium.jpg?v=1585676144"} align="right" className="m-5"/>
            <br/>
            <p>Towards the end of the war, Croatian soldiers were being presented to French King Louis XIV. During his inspection, the king noticed these neckerchiefs and took a strong liking to them. The boy-king began wearing these himself around 1846, at just seven years old, according to the Dubrovnik Times. He named the early neckties “La Cravate,'' after the Croatians who invented the fashion piece and is still the French word for necktie today. The king made cravats a mandatory accessory at royal gatherings. With the king and other nobility wearing cravats, the new fashion trend caught on like a wildfire across Europe.</p>
            <br/>
            <br/>
            <h2 style={{textAlign: 'center', fontSize: "27px", fontWeight: "bold", fontFamily: "Times New Roman", textTransform: "uppercase"}}>STOCKS, SCARVES, CRAVATS, AND BANDANAS</h2>
            <br/>
            <img src={"https://cdn.shopify.com/s/files/1/2698/5360/files/Stocks_Scarves_Cravats_and_Bandanas_medium.jpg?v=1585676290"} align="left" className="m-5"/>
            <p>As Europe changed over time, so did ‘La Cravate.’ Rather than its practical purpose used by the Croatians, neckwear became an indication of social status. Neckwear was worn by nobles who wanted to project power, wealth, elegance, and status. In the 1800’s, the scarf became the most popular neckwear, though stocks, bandanas, and cravats were also worn. Beyond the evolution of cravat into different articles of clothing like scarves and bandanas, the tying of neckwear also became very important. A prominent pamphlet was published in 1818 called <b><i>Neckclothitania</i></b>, which detailed the most popular ways to tie neckwear, and in which circumstances the different knots were appropriate.</p>
            <br/>
            <br/>
            <h2 style={{textAlign:'center', fontSize: "27px", fontWeight: "bold", fontFamily: "Times New Roman", textTransform: "uppercase"}}>THE INDUSTRIAL NECKTIE REVOLUTION</h2>
            <br/>
            <img src={"https://cdn.shopify.com/s/files/1/2698/5360/files/The_Industrial_Necktie_Revolution_medium.jpg?v=1585676328"} align="right" className="m-5"/>
            <p>We can thank the Industrial Revolution for much of the way we live our life today. Pre-Industrial Revolution, 80% of the world’s population were farmers and most people didn’t own anything made outside their community. Today, most people buy their food at the grocery store and much of what we own has a “Made in _____” tag. It’s clear that the industrial Revolution changed the world; the combustion engine, tap water, electricity, and nearly everything else has a connection to it.</p>
            <br/>
            <p>Neckties weren’t immune to the Industrial Revolution. With fabrics like cotton, linen, wool, and silk being able to be produced at a much more efficient and extensive rate than ever before, this fashion trend became much more common. Around this time, bow ties and ascots grew into popularity. The name of the Ascot comes from the Ascot Heath, a horse race in England and is the most formal type of tie. It was the formal morning neckwear of the Royal Enclosure at Ascot. Bow ties became popular among scholars and surgeons, and also came into popularity with the wealthy when wearing tuxedos.</p>
            <br/>
            <br/>
            <h2 style={{textAlign: 'center', fontSize: "27px", fontWeight: "bold", fontFamily: "Times New Roman", textTransform: "uppercase"}}>THE BEGINNINGS OF THE MODERN TIE</h2>
            <br/>
            <img src={"https://cdn.shopify.com/s/files/1/2698/5360/files/The_Beginnings_of_the_Modern_Tie_medium.jpg?v=1585676373"} align={"left"} className="m-5"/>
            <p>Ties continued to evolve and change with fashion and social trends into the 19th century. The origin of the necktie as we know and wear it today can be traced to a tie maker from New York in the 1920’s. Jesse Langford patented an entirely new way to make the tie; he would cut the fabric on an angle and sew it into three segments. This method is still used to this day. This was named ‘the Langford Necktie’, and the original design had ties that were much shorter than ties we are accustomed to.</p>
            <br/>
            <p>The next 40 years in the 20th century were a revolutionary time, with many events that would end up shaping the world, such as the Great Depression, World War II, Cold War, putting a man on the moon, Civil Rights Movements, and the counterculture movement. In the 1940’s, the Art Deco Bold Look came into popularity. This style can be found throughout architecture, like in the Sears Tower, fashion, automobiles, trains, art, and many manufactured goods. Art Deco is a style of visual arts with the intent to look and feel modern; and was influenced by bold geometric and represented faith in social and technological progress. Some men in this same era wore kipper ties as part of the ‘Bold Look’.  In the 1960’s, the Kipper tie came back into popularity with younger people who were tired of the skinny tie look. The kipper tie can be recognized by its short length and wide breadth, and often featured bold designs and colors.</p>
            <br/>
            <br/>
            <h2 style={{textAlign: 'center', fontSize: "27px", fontWeight: "bold", fontFamily: "Times New Roman", textTransform: "uppercase"}}>THE NECKTIES IN THE 1980's AND 1990's</h2>
            <br/>
            <img src={"https://cdn.shopify.com/s/files/1/2698/5360/files/Neckties_in_the_1980s_and_1990s_medium.jpg?v=1585676409"} align="right" className="m-5"/>
            <p>The 80’s were a wild time for fashion, with huge fashion trends like the hip-hop movement, New Romantic, and Miami Vice. The 80’s are remembered for its bright and bold colors and patterns. At this time, wide ties began to be synonymous with older men; younger people started wearing narrower ties that were reminiscent of the 1950’s. Novelty ties also grew into popularity, with ties with specialty prints and crazy designs like the piano key tie and thousands of other fun and zany patterns.</p>
            <br/>
            <p>The 90’s tie styles were very similar to the 80’s, but tended to be wider. Paisleys and colored floral prints became popular at the end of the 20th century. The 1990’s are also responsible for the shift into business casual, with business moguls like Bill Clinton and Steve Jobs ditching the full suits for more comfortable and casual dress.</p>
            <br/>
            <br/>
            <h2 style={{textAlign: 'center', fontSize: "27px", fontWeight: "bold", fontFamily: "Times New Roman", textTransform: "uppercase"}}>NECKTIE ALTERNATIVES</h2>
            <br/>
            <img src={"https://cdn.shopify.com/s/files/1/2698/5360/files/Necktie_Alternatives_medium.jpg?v=1585676446"} align="left" className="m-5"/>
            <p>Thousands of millions of people now wear and own ties, from all different age groups and generations. Ties are worn for many numbers of different reasons, like weddings, funerals, church, work, dances, banquets, or any other event that requires more formal wear. This poses some challenges though, as learning to tie a tie can be challenging, and children have an especially unique challenge since it’s hard for parents to tie a tie that little and they usually can’t tie a tie on their own.</p>
            <br/>
            <p>Alternatives options for people who want a faster and easier option to traditional ties are clip on ties, zipper ties, and the Modern Tie. No one is certain who invented the clip-on tie, but it is a great option for kids and those who want a more convenient option. Clip on ties have a metal clip at the top of the knot that clips on the backside of a shirt. Downsides to this is that the metal bar can irritate necks and can be seen by others. Zipper ties are essentially a pre-tied tie that is adjusted by a zipper; you fully unzip the tie and put it over your head and then zip it up to specific neck size of the individual wearer. This is a better-looking option than the clip-on since you can’t tell it apart from a regular tie, but the zippers have been known to have issues. The Modern Tie is the newest take on the clip-on tie and has a slot in the back of the knot that the top button slides into. Knots and ties are interchangeable through a patented magnet design and be used to mix and match to any style.</p>
            <br/>
            <br/>
            <h2 style={{textAlign: 'center', fontSize: "27px", fontWeight: "bold", fontFamily: "Times New Roman", textTransform: "uppercase"}}>STEP INTO THE 21st CENTURY WITH THE MODERN TIE</h2>
            <br/>
            <img src={"https://cdn.shopify.com/s/files/1/2698/5360/files/Step_into_the_21st_Century_medium.jpg?v=1585676484"} align="right" className="m-5"/>
            <p>Ties have an interesting and complex origin, from being a practical part of a uniform, to a fashion mandate by a French king, to a plethora of clever iterations and patents by fashion-forward people throughout the last 100 years. Clothing is a way to express oneself, and ties are an essential part of many people’s wardrobe; ties are worn every day or every week by many people. The history of the necktie is a story about how the tie has been changed to better fit people’s needs. Modern Tie is the tie reinvented, a better option to fit people’s needs than what has come before it. Learn more about the Modern Tie and how it works, and why so many people are excited about it.</p>
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
