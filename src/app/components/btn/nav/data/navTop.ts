interface DropdownItem {
    fontIcon: string;
    name: string;
    key: string;
}

// Định nghĩa kiểu cho rule
interface Rule {
    fontIcon: string;
    name: string;
    key: string;
    dropdownItem: DropdownItem[];
}
export const dataNavLeft: Rule[] = [
    {
        fontIcon: "",
        name: "Dashboad",
        key: "/dashboad",
        dropdownItem: []
    },
    {
        fontIcon: "",
        name: "Product Management",
        key: "/dashboad",
        dropdownItem: []
    },
    {
        fontIcon: "",
        name: "Order Management",
        key: "/dashboad",
        dropdownItem: []
    },
    {
        fontIcon: "",
        name: "Customer Management",
        key: "/dashboad",
        dropdownItem: []
    },
    {
        fontIcon: "",
        name: "Category Management",
        key: "/dashboad",
        dropdownItem: []
    },
    {
        fontIcon: "",
        name: "Inventory Management",
        key: "/dashboad",
        dropdownItem: []
    }
]