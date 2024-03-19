import Banner from "@/Components/Banner";
import Header from "@/Components/Header";
import JobListing from "@/Components/JobListing";
import JobModal from "@/Components/JobModal";
import MainLayout from "@/Components/Layout/MainLayout";
import NetworkModal from "@/Components/NetworkModal";
import { JobCard } from "@/helper/JobCard";
import React, { useEffect, useState } from "react";

const index = () => {
  return (
    <>
      <MainLayout>
        <Banner bgColor={"jobBackground"} job={true} image={false} />
        <JobListing />
        <JobModal />
      </MainLayout>
    </>
  );
};

export default index;
