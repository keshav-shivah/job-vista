import Blog from "@/Components/BlogSection";
import Header from "@/Components/Header";
import MainLayout from "@/Components/Layout/MainLayout";
import NetworkModal from "@/Components/NetworkModal";
import React, { useEffect, useState } from "react";

const index = () => {
  return (
    <>
      <MainLayout>
        <Header />
        <Blog />
      </MainLayout>
    </>
  );
};

export default index;
