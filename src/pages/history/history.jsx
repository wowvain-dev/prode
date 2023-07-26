import {useNavigate} from "react-router-dom";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Card,
    CardBody,
    CardHeader,
    Grid,
    GridItem, Image,
    Text
} from "@chakra-ui/react";

export default function History() {
    const navigate = useNavigate();

    return (<div className="min-h-[92vh] flex flex-col container mx-auto py-10 md:pb-40">
        <Breadcrumb textColor={"gray"} className="ml-10">
            <BreadcrumbItem>
                <BreadcrumbLink onClick={() => navigate('/')}>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink onClick={() => navigate('/history')}>History</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        <Text className="my-10 md:my-0" fontSize={["3xl", "4xl", "5xl"]} fontWeight="bold" textAlign={"center"}>
            History
        </Text>
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
                            <Image src="/rope_history.jpg" className="mx-auto h-56 w-full"
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
                            <Image src="/shoelace_history.jpg" className="mx-auto h-56 w-full"
                                   borderRadius="lg" filter="grayscale(100%)" />
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
                            <Image src="/necktie_history.jpg" className="mx-auto h-56 w-full"
                                   borderRadius="lg" />
                        </CardBody>
                    </Card>
                </GridItem>
            </Grid>
        </div>
    </div>)
}