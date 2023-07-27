import {
    Breadcrumb, BreadcrumbItem, BreadcrumbLink, Card, Grid, GridItem, Text,
    CardBody, CardHeader, Image
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

export default function Guides() {
    const navigate = useNavigate();

    return (<div className="pt-[10vh] min-h-[92vh] flex flex-col container mx-auto py-10 md:pb-40">
        <Breadcrumb textColor={"gray"} className="ml-10 sm:ml-0">
            <BreadcrumbItem>
                <BreadcrumbLink onClick={() => navigate('/')}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink onClick={() => navigate('/guides')}>Guides</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        <Text className="my-10 md:my-0" fontSize={["3xl", "4xl", "5xl"]} fontWeight="bold" textAlign={"center"}>Guides</Text>
        <div className="flex flex-col mx-10 justify-between items-center my-auto">
            <Grid templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
                  templateRows={["repeat(3, 1fr)", "repeat(3, 1fr)", "repeat(1, 1fr)"]}
                  gap={10}>
                <GridItem w='350px'>
                    <Card className="transition hover:scale-105"
                        onClick={() => navigate('/guides/rope')}
                    >
                        <CardHeader>
                            <Text fontSize="3xl">Rope Knots</Text>
                        </CardHeader>
                        <CardBody>
                            <Image src="/rope_knot.jpg" className="mx-auto h-56 w-full"
                                borderRadius="lg"
                            />
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem w='350px'>
                    <Card className="transition hover:scale-105"
                        onClick={() => navigate('/guides/shoelace')}
                    >
                        <CardHeader>
                            <Text fontSize="3xl">Shoelace Knots</Text></CardHeader>
                        <CardBody>
                            <Image src="/shoelace_knot.jpg" className="mx-auto h-56 w-full"
                                borderRadius="lg" />
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem w='350px'>
                    <Card className="transition hover:scale-105"
                        onClick={() => navigate('/guides/necktie')}
                    >
                        <CardHeader>
                            <Text fontSize="3xl">Necktie Knots</Text>
                        </CardHeader>
                        <CardBody>
                            <Image src="/necktie_knot.jpg" className="mx-auto h-56 w-full"
                                   borderRadius="lg" />
                        </CardBody>
                    </Card>
                </GridItem>
            </Grid>
        </div>
    </div>)
}