"use client";
import { useState, useEffect, useContext } from "react";
import { Input, Button, Dropdown, Menu, Drawer, Modal, Select, Avatar } from "antd";
import {
  ShoppingCartOutlined,
  MenuOutlined,
  SearchOutlined,
  DownOutlined,
  GlobalOutlined,
  UserOutlined
} from "@ant-design/icons";
import logo from "/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Option } from "antd/es/mentions";

import { useRouter } from "next/navigation";
import { useLazyGetProfileQuery } from "@/redux/features/users/UserApi";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setUser } from "@/redux/features/users/userSlice";
import { UserContext } from "@/lib/UserContext";
import Swal from "sweetalert2";
import { imageUrl } from "@/redux/baseApi";
import { useCourseSearchQuery } from "@/redux/features/course/CourseApi";
import CourseCard from "../ui/CourseCard";

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [language, setLanguage] = useState("en"); // Default to 'en'
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchmodal, setSearchModal] = useState(false);
  const t = useTranslations();
  const dispatch = useDispatch();
  const router = useRouter();
  const [getProfile] = useLazyGetProfileQuery();
  const { logoutUser } = useContext(UserContext);
const [searchtext,setSearchtext] = useState("");

const {data:searchdata}=useCourseSearchQuery(searchtext);
  const handlesetUser = async () => {
    const user = await getProfile();
    // console.log(user)
    if (user?.data?.data) {
      dispatch(setUser(user?.data?.data));
    }
  };
  useEffect(() => {
    handlesetUser();
    const savedLang = Cookies.get("NEXT_LOCALE") || "en";
    setLanguage(savedLang);
  }, []);



 const handleSearch = (e) => {
  setSearchtext(e.target.value);
  handleshowsearchmodal();
 }

  const handleChange = (lang) => {
    if (lang && lang !== language) {
      setLanguage(lang);
      Cookies.set("NEXT_LOCALE", lang, { path: "/" });
      router.refresh(); // Refresh the data and re-render the page content
      setIsModalVisible(false); // Close the modal after selection
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleshowsearchmodal = () => {
    setSearchModal(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handlesearchCancel = () => {
    setSearchModal(false);
  };
  const showDrawer = () => {
    setDrawerVisible(true);
  };
  const closeDrawer = () => {
    setDrawerVisible(false);
  };
  const user = useSelector((state) => state.user.user);
  const handleLogout = () => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {


        logoutUser();
        dispatch(clearUser());
        Cookies.remove("token");
        router.push("/auth/login");
        Swal.fire("Logged out!", "You have been logged out.", "success");
      }
    })


  };


  console.log(user);

  return (
    <nav className="w-full p-4 bg-white mx-auto flex justify-between items-center">
      {/* Left Side: Logo */}
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Image src={logo} alt="Logo" />
        </Link>
      </div>

      {/* Middle: Search bar with category button (Hidden on small screens) */}
      <div className="hidden w-full max-w-lg lg:flex items-center space-x-2 px-2">
        <Input
        onPressEnter={handleSearch}
          placeholder="Search for course"
          className="w-full text-[#667085] text-[16px] h-[44px]"
          prefix={<SearchOutlined size={15} className="text-[#667085]" />}
        // suffix={
        //   <div>
        //     <div className="border-l-2 text-sm text-[#1D2939] font-normal border-[#D0D5DD]">
        //       <Dropdown
        //         className="border-none"
        //         overlay={categoryMenu}
        //         trigger={["hover"]}
        //       >
        //         <Button>{t('Category')} <DownOutlined /></Button>
        //       </Dropdown>
        //     </div>
        //   </div>
        // }
        />
      </div>

      {/* Right Side: Links (Hidden on small screens) */}
      <div className="hidden lg:flex items-center space-x-6">
        <Link href="/becomeInstructor" className="text-sm pl-2">
          {t('Become an Instructor')}
        </Link>

        {/* SHOPING CART OUTLINE ---------------------------------------------------------------------------------- */}
        {/* <Link className="cursor-pointer" href={"/shoppingcart"}>
          <ShoppingCartOutlined className="text-2xl" />
        </Link> */}

        {
          user ? (
            <div>
              <Button className="mr-2 text-[16px] font-semibold text-[#475467] cursor-pointer">
                <div>
                  {
                    user?.image ? <Avatar src={imageUrl + user?.image} size={28} /> : <UserOutlined />
                  }
                </div>
                <span >
                  {user?.name}
                </span>
              </Button>
              <Button onClick={handleLogout} className="text-[16px] font-semibold text-[#475467] cursor-pointer">
                {t('LogOut')}
              </Button>
            </div>
          ) : (
            <div>
              <Link href={"/auth/login"} className="text-[16px] font-semibold text-[#475467]">
                {t('LogIn')}
              </Link>
              <Link href={"/auth/signup"}>
                <Button className="text-[#FFFFFF] font-semibold text-[16px] p-5 ml-4" type="primary">
                  {t('Sign Up')}
                </Button>
              </Link>
            </div>
          )
        }

        <Button onClick={showModal} size="large">
          <GlobalOutlined />
        </Button>
      </div>

      {/* Mobile Menu Button (Visible on small screens) */}
      <div className="lg:hidden">
        <MenuOutlined className="text-2xl" onClick={showDrawer} />
      </div>

      {/* Modal for language selection */}
      <Modal

        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <h2 className="text-lg font-semibold mb-4" >{t("Choose Your Preferred Language")}</h2>
        <p className="mb-4 text-sm text-gray-500">
          {t("Select a language from the dropdown to change the language of the website.")}
        </p>
        <Select
          className="h-[44px] "
          placeholder={t("Select Language")}
          value={language}
          style={{ width: "100%", marginBottom: "1rem" }}
          onChange={handleChange}
        >
          <Select.Option className=" mb-2" value="en">{t("English")}</Select.Option>
          <Select.Option value="gr">{t("Greek")}</Select.Option>
          {/* Add other languages as needed */}
        </Select>
        <p className=" text-sm text-gray-500">
          {t("Note: Changing the language will refresh the page to apply your selection.")}
        </p>
        <p className="mb-4 text-sm text-gray-500">
          {t("If you encounter any issues, please try reloading the page manually.")}
        </p>
      </Modal>




{/* search modal */}

      <Modal
  width={1000}
        visible={searchmodal}
        onCancel={handlesearchCancel}
        footer={null}
      >
        
        <div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:grid-cols-3 gap-4">
            {searchdata?.data?.result?.map((item) => (
              <CourseCard
                key={item.id}
                data={item}
              />
            ))}
          </div>
        </div>
      </Modal>

      {/* Drawer for mobile menu */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={closeDrawer}
        open={drawerVisible}
      >
        <Input.Search placeholder="Search course" className="mb-4" />
  
        <div className="flex flex-col space-y-4">
          <Link href="/becomeInstructor" className="text-sm">
            {t('BecomeInstructor')}
          </Link>
          <Link className="cursor-pointer" href={"/shoppingcart"}>
            <ShoppingCartOutlined className="text-2xl" />
          </Link>
          {
            user ? (
              <Link href="/auth/logout" className="text-[16px] font-semibold text-[#475467]">
                {t('LogOut')}
              </Link>
            ) : (
              <div>
                <Link href={"/auth/login"} className="text-[16px] font-semibold text-[#475467]">
                  {t('LogIn')}
                </Link>
                <Link href={"/auth/signup"}>
                  <Button className="text-[#FFFFFF] font-semibold text-[16px] p-5" type="primary">
                    {t('Sign Up')}
                  </Button>
                </Link>
              </div>
            )
          }
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
