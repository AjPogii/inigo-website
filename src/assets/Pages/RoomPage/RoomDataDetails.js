
import RoomImg1 from "../../images/room-img1.png";
import standardimg1 from "../../images/standard-1.jpg";
import standardimg2 from "../../images/standard-2.jpg";
import standardimg3 from "../../images/standard-3.jpg";
// import RoomImg2 from "../../images/room-img2.png";
// import RoomImg3 from "../../images/room-img3.png";

const RoomDetails = [
    {
        id: 1,
        title: "Standard Room",
        description: "Aenean vehicula ligula eu rhoncus porttitor. Duis vel lacinia quam. Nunc rutrum porta place ulam ipsum. Morbi imperdiet, orci et dapibus. Interdum et malesu they adamale fames ac anteipsu pimsine faucibus curabitur arcu site feugiat in tortor in, volutpat sollicitudin libero. Hotel non lorem acer suscipit bibendum vulla facilisi nedeuter nunc volupa mollis sapien velet consejyer turpeutionyer masin libero sempe mollis.",
        price: 2000,
        currency: "₱",
        view: "City View",
        size: "24m²",
        capacity: 2,
        bedType: "One bed",
        images: [
            standardimg1,
            standardimg2,
            standardimg3
        ],
        facilities: [
            "TV",
            "Free Wifi",
            "Air Condition",
            "Heater",
            "Phone",
            "Laundry",
            "chairs",
            "tables",
            "sofa"
        ],
        features: [
            "Room Service",
            "Coffee Maker",
            "Mini Bar",
            "Safe Deposit Box",
            "Hair Dryer",
            "Wake-up Service"
        ],
        privateRoom: [
            "Private Bathroom",
            "Shower",
            "Toiletries",
            "Towels",
            "Hair Dryer",
            "Bathrobe"
        ]
    },
    {
        id: 2,
        title: "Deluxe Room",
        description: "Aenean vehicula ligula eu rhoncus porttitor. Duis vel lacinia quam. Nunc rutrum porta place ulam ipsum. Morbi imperdiet, orci et dapibus. Interdum et malesu they adamale fames ac anteipsu pimsine faucibus curabitur arcu site feugiat in tortor in, volutpat sollicitudin libero. Hotel non lorem acer suscipit bibendum vulla facilisi nedeuter nunc volupa mollis sapien velet consejyer turpeutionyer masin libero sempe mollis.",
        price: 3000,
        currency: "₱",
        view: "Ocean View",
        capacity: 3,
        bedType: "King-size bed",

        images: [
            RoomImg1,
            "/api/placeholder/400/180",
            "/api/placeholder/400/180"
        ],
        facilities: [
            "TV",
            "Free Wifi",
            "Air Condition",
            "Heater",
            "Phone",
            "Laundry"
        ],
        features: [
            "Private Balcony",
            "Jacuzzi Tub",
            "Premium Toiletries",
            "Nespresso Machine",
            "Smart Home Controls",
            "Luxury Bedding"
        ],
        privateRoom: [
            "Private Bathroom",
            "Shower",
            "Toiletries",
            "Towels",
            "Hair Dryer",
            "Bathrobe"
        ]
    },
    {

    },
    {

    },
];

export default RoomDetails;

