import Banner from "@/Components/Banner";
import DemandingCategory from "@/Components/DemandingCategory";
import Footer from "@/Components/Footer";
import FooterBanner from "@/Components/FooterBanner";
import Header from "@/Components/Header";
import HowItWorks from "@/Components/HowItWorks";
import JobListing from "@/Components/JobListing";
import MainLayout from "@/Components/Layout/MainLayout";
import ListingCard from "@/Components/ListingCard";
import NetworkModal from "@/Components/NetworkModal";
import Trusted from "@/Components/Trusted";
import TrustedBy from "@/Components/TrustedBy";
import React, { useEffect, useState } from "react";

const index = () => {
  return (
    <>
      <div>
        <MainLayout>
          <Banner home={true} image={true} />
          <DemandingCategory />
          <HowItWorks />
          <JobListing />

          <Trusted />
          <FooterBanner />
          <TrustedBy />
        </MainLayout>
      </div>
    </>
  );
};

export default index;
