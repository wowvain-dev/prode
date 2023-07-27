import {
    Text,
    Drawer,
    Box,
    useDisclosure,
    DrawerContent,
    Flex, Button
} from "@chakra-ui/react";
import {CloseButton} from "@chakra-ui/react";
import {Icon} from "@chakra-ui/react";
import {IconButton} from "@chakra-ui/react";
import {BiMenu} from "react-icons/bi";
import {useNavigate} from "react-router-dom";

export default function Sidebar({items, title, children}) {
    const {isOpen, onOpen, onClose} = useDisclosure();

    return <Box minH="80vh" bg={"gray.100"}>
        <SidebarContent items={items} title={title} onClose={() => onClose} display={{base: 'none', md: 'block'}}/>
        <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            returnFocusOnClose={false}
            onOverlayClick={onClose}
            size={"full"}>
            <DrawerContent>
                <SidebarContent items={items} onClose={onClose} title={title}/>
            </DrawerContent>
        </Drawer>

        <MobileNav display={{base: 'flex', md: 'none'}} onOpen={onOpen} items={items} title={title}/>

        <Box ml={{base: 0, md: 60}} p="4">
            {children}
        </Box>
    </Box>
}

const SidebarContent = ({items, title, onClose, ...rest}) => {
    return (
        <Box
            bg={'white'}
            borderRight="1px"
            borderRightColor="gray.200"
            w={{base: 'full', md: 60}}
            pos="fixed"
            h="full"
            {...rest}>
            <Flex h="20" alignItems="center" mx="8"justifyContent="space-between">
                <Text fontSize="2xl" fontWeight="bold">
                    {title}
                </Text>
                <CloseButton display={{base: 'flex', md: 'none'}}
                    onClick={onClose}
                />
            </Flex>
            {items.map((link) => (
                <div key={link.name} className={"my-2"}>
                    <NavItem icon={link.icon} link={link.link}>
                        {link.name}
                    </NavItem>
                </div>
            ))}
        </Box>
    )
}

const NavItem = ({link, icon, children, ...rest}) => {
    const navigate = useNavigate();
    return (
        <Button
            w="full"
            mr={5} onClick={() => navigate(link)}
            alignContent={"start"}
            variant={link === location.pathname ? "solid" : "ghost"}
            justifyContent={"start"}
            borderTopRightRadius={0}
            borderBottomRightRadius={0}
            _hover={{
            bg: '#228be6',
            color: 'white'
        }}>
            {icon}
            <div className="ml-5">
                {children}
            </div>
        </Button>
    );
}

const MobileNav = ({ onOpen, ...rest }) => {
    return (
        <Flex
            ml={{ base: 0, md: 60}}
            px={{ base: 4, md: 24}}
            height="20"
            alignItems="center"
            bg='white'
            borderBottomWidth="1px"
            borderBottomColor="gray.200"
            justifyContent="flex-start"
            {...rest}
        >
            <IconButton variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<BiMenu size={24} />}
            />

            <Text fontSize="2xl" ml="8" fontWeight="bold">
                Logo
            </Text>

        </Flex>
    );
}
