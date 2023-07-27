import {
    Breadcrumb, BreadcrumbItem, BreadcrumbLink, Card, CardHeader,
    CardBody, Grid, GridItem, Text, Icon
} from '@chakra-ui/react';
import {Outlet, useNavigate} from "react-router-dom";
import Sidebar from "../../../components/Sidebar.jsx";
import {AddIcon} from "@chakra-ui/icons";
import {CgMail} from "react-icons/cg";
import {useEffect} from "react";
import {useQuery} from "@apollo/client";
import {GET_ROPE_GUIDES} from "../../../utilities/queries.js";

export default function RopeGuides() {
    const navigate = useNavigate();

    const {loading, error, data} = useQuery(
        GET_ROPE_GUIDES
    );

    if (loading) {
        return <div className="min-h-[92vh] md:h-[92vh] flex flex-col container mx-auto py-10">
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
                <Text fontSize="6xl">Loading...</Text>
        </div>;
    }

    if (error) {
        return <div className="min-h-[92vh] md:h-[92vh] flex flex-col container mx-auto py-10">
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
            <Text fontSize="6xl">Error fetching data...</Text>
        </div>
    }


    const guides = data.ropeGuides;
    const links = new Array();

    console.log(links);

    guides.forEach((val) => {
        links.push({
            link: "/guides/rope/" + val.id,
            name: val.guideTitle,
            icon: <AddIcon />,
        })
    });

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
            <Sidebar title={"Rope Knots"} items={links}>
                <Outlet />
            </Sidebar>
        </div>
    );
}