import {Outlet, useNavigate} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, Text} from "@chakra-ui/react";
import {AddIcon} from "@chakra-ui/icons";
import Sidebar from "../../../components/Sidebar.jsx";
import {GET_NECKTIE_GUIDES} from "../../../utilities/queries.js";

export default function NecktieGuides() {
    const navigate = useNavigate();

    const {loading, error, data} = useQuery(
        GET_NECKTIE_GUIDES
    );

    if (loading) {
        return <div className="pt-[10vh] min-h-[92vh] md:h-[92vh] flex flex-col container mx-auto py-10">
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
        return <div className="pt-[10vh] min-h-[92vh] md:h-[92vh] flex flex-col container mx-auto py-10">
            <Breadcrumb textColor={"gray"} className="ml-10 sm:ml-0">
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() => navigate('/')}>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() => navigate('/guides')}>Guides</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() => navigate('/guides/necktie')}>Necktie Knots</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Text fontSize="6xl">Error fetching data...</Text>
        </div>
    }

    const guides = data.necktieGuides;
    const links = new Array();

    console.log(links);

    guides.forEach((val) => {
        links.push({
            link: "/guides/necktie/" + val.id,
            name: val.guideTitle,
            icon: <></>,
        })
    });

    return(
        <div className="pt-[10vh] min-h-[92vh] md:h-[92vh] flex flex-col container mx-auto py-10">
            <Breadcrumb textColor={"gray"} className="ml-10 sm:ml-0">
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() => navigate('/')}>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() => navigate('/guides')}>Guides</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <BreadcrumbLink onClick={() => navigate('/guides/necktie')}>Necktie Knots</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Sidebar title={"Necktie Knots"} items={links}>
                <Outlet />
            </Sidebar>
        </div>
    );
}