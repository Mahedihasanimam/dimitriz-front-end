"use client";
import { useState,useEffect } from "react";
import { Input, Button, Dropdown, Menu, Drawer, Modal, Select } from "antd";
import {
  ShoppingCartOutlined,
  MenuOutlined,
  SearchOutlined,
  DownOutlined,
  GlobalOutlined
} from "@ant-design/icons";
import logo from "/public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Option } from "antd/es/mentions";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [language, setLanguage] = useState("en"); // Default to 'en'
  const [isModalVisible, setIsModalVisible] = useState(false);
  const t = useTranslations();
  const cookieMiya = new Cookies();
  const router = useRouter();

  useEffect(() => {
    const savedLang = cookieMiya.get("NEXT_LOCALE") || "en";
    setLanguage(savedLang);
  }, []);

  const handleChange = (lang) => {
    if (lang && lang !== language) {
      setLanguage(lang);
      cookieMiya.set("NEXT_LOCALE", lang, { path: "/" });
      router.refresh(); // Refresh the data and re-render the page content
      setIsModalVisible(false); // Close the modal after selection
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const showDrawer = () => {
    setDrawerVisible(true);
  };
  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const categoryMenu = (
    <Menu>
      <Menu.Item key="1">{t('Category')} 1</Menu.Item>
      <Menu.Item key="2">{t('Category')} 2</Menu.Item>
      <Menu.Item key="3">{t('Category')} 3</Menu.Item>
    </Menu>
  );

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
          placeholder="Search for course"
          className="w-full text-[#667085] text-[16px]"
          prefix={<SearchOutlined size={15} className="text-[#667085]" />}
          suffix={
            <div>
              <div className="border-l-2 text-sm text-[#1D2939] font-normal border-[#D0D5DD]">
                <Dropdown
                  className="border-none"
                  overlay={categoryMenu}
                  trigger={["hover"]}
                >
                  <Button>{t('Category')} <DownOutlined /></Button>
                </Dropdown>
              </div>
            </div>
          }
        />
      </div>

      {/* Right Side: Links (Hidden on small screens) */}
      <div className="hidden lg:flex items-center space-x-6">
        <Link href="/becomeInstructor" className="text-sm pl-2">
          {t('Become an Instructor')}
        </Link>
        <Link className="cursor-pointer" href={"/shoppingcart"}>
          <ShoppingCartOutlined className="text-2xl" />
        </Link>
        <Link href={"/auth/login"} className="text-[16px] font-semibold text-[#475467]">
          {t('LogIn')}
        </Link>
        <Link href={"/auth/signup"}>
          <Button className="text-[#FFFFFF] font-semibold text-[16px] p-5" type="primary">
            {t('Sign Up')}
          </Button>
        </Link>

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

      {/* Drawer for mobile menu */}
      <Drawer
        title="Menu"
        placement="left"
        onClose={closeDrawer}
        open={drawerVisible}
      >
        <Input.Search placeholder="Search course" className="mb-4" />
        <Dropdown overlay={categoryMenu} trigger={["click"]}>
          <Button className="mb-4">{t('Category')}</Button>
        </Dropdown>
        <div className="flex flex-col space-y-4">
          <Link href="/becomeInstructor" className="text-sm">
            {t('BecomeInstructor')}
          </Link>
          <Link className="cursor-pointer" href={"/shoppingcart"}>
            <ShoppingCartOutlined className="text-2xl" />
          </Link>
          <Link href={"/auth/login"} className="text-[16px] font-semibold text-[#475467]">
            {t('LogIn')}
          </Link>
          <Link href={"/auth/signup"}>
            <Button className="text-[#FFFFFF] font-semibold text-[16px] p-5" type="primary">
              {t('Sign Up')}
            </Button>
          </Link>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navbar;
