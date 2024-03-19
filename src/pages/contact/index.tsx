import ContactPage from "@/Components/ContactPage";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import MainLayout from "@/Components/Layout/MainLayout";
import React, { useEffect, useState } from "react";
import Map from "@/Components/Map";
import NetworkModal from "@/Components/NetworkModal";

const index = () => {
  return (
    <>
      <MainLayout>
        <Map />
        <ContactPage />
      </MainLayout>
    </>
  );
};

export default index;
