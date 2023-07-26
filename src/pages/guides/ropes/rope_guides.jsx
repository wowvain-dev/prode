import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, Grid, GridItem, Text} from '@chakra-ui/react';
import {useNavigate} from "react-router-dom";

export default function RopeGuides() {
    const navigate = useNavigate();

    return(
        <div className="min-h-[92vh] md:h-[92vh] flex flex-col container mx-auto py-10">
            <Breadcrumb textColor={"gray"} className="ml-10 sm:ml-0">
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() => navigate('/')}>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() => navigate('/guides')}>Guides</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() => navigate('/guides/rope')}>Rope Knots</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Text fontSize={["2xl", "4xl", "5xl"]} fontWeight="bold" textAlign="center">Choose the type of knot you want to learn</Text>
            <div className="flex flex-row mx-10 justify-between items-center my-auto">
                <Grid
                    templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
                    templateRows={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
                    gap={10}
                >
                    <GridItem>

                    </GridItem>
                    <GridItem></GridItem>
                    <GridItem></GridItem>
                    <GridItem></GridItem>
                </Grid>
            </div>
        </div>
    );
}