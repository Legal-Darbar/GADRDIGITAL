import PriceList from "../svg/price-list"

import pric_img_1 from "../../public/assets/img/price/price-icon-1.png";
import pric_img_2 from "../../public/assets/img/price/price-icon-2.png";
import pric_img_3 from "../../public/assets/img/price/price-icon-3.png";


const price_data_home_one = [
    //  monthly price here 1 to 3
    {
        id: 1, 
        img: pric_img_1,
        title: "Normal Website",
        desctiption: <>For personal & informational Use</>,
        cls: "",
        pric: "Get a Quote",
        price_feature: [
            {
                list: "Hosting",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Domain",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Customized",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "24/7 Online Support",
                icon: <PriceList />,
                cls: ""
            }
        ],

    }, 
    {
        id: 2, 
        img: pric_img_2,
        title: "Ecommerce Website",
        desctiption: <>For Sellers </>,
        cls: "active",
        pric: "Get a Quote",
        price_feature: [
            {
                list: "All things from Normal Pack",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Product Listing",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Admin Pannel",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "24/7 Online Support",
                icon: <PriceList />,
                cls: ""
            }
        ],

    }, 
    {
        id: 3, 
        img: pric_img_3,
        title: "Dynamic Website",
        desctiption: <>All types of business and startups</>,
        cls: "",
        pric: "Get a Quote",
        price_feature: [
            {
                list: "Domain",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Hosting",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Informational pages with animations ",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "24/7 Online Support",
                icon: <PriceList />,
                cls: ""
            }
        ],

    },   
    
    
    //  yearly price here  4 to 6
    {
        id: 4, 
        img: pric_img_1,
        title: "Ecommerce Apps",
        desctiption: <>For Sellers</>,
        cls: "",
        pric: "Get a Quote",
        price_feature: [
            {
                list: "Server ",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Product Listing",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Cross Platform",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "24/7 Online Support & More",
                icon: <PriceList />,
                cls: ""
            }
        ],

    }, 
    {
        id: 5, 
        img: pric_img_2,
        title: "Custom APP",
        desctiption: <>Customized anything</>,
        cls: "active",
        pric: "Get a Quote",
        price_feature: [
            {
                list: "Customized Unique app",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Cross Platform",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "High Speed Server",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "24/7 Online Support & More",
                icon: <PriceList />,
                cls: ""
            }
        ],

    }, 
    {
        id: 6, 
        img: pric_img_3,
        title: "Dynamic App",
        desctiption: <>Customized Native Apps </>,
        cls: "",
        pric: "Get a Quote",
        price_feature: [
            {
                list: "Customized Design",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "High Speed Server",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "Cross Platform",
                icon: <PriceList />,
                cls: ""
            },
            {
                list: "24/7 Online Support & More",
                icon: <PriceList />,
                cls: ""
            }
        ],

    },  
]
export default price_data_home_one